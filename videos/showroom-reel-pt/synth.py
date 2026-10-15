import numpy as np, wave, sys
SR=48000; D=24.0; N=int(SR*D)
t=np.arange(N)/SR
rng=np.random.default_rng(3)
L=np.zeros(N); Rr=np.zeros(N)

def at(sec): return int(sec*SR)
def add(sig,start,pan=0.0,gain=1.0):
    i=at(start); n=min(len(sig),N-i)
    if n<=0: return
    l=np.cos((pan+1)*np.pi/4); r=np.sin((pan+1)*np.pi/4)
    L[i:i+n]+=sig[:n]*gain*l*1.414; Rr[i:i+n]+=sig[:n]*gain*r*1.414

def fft_filter(x,lo=None,hi=None):
    X=np.fft.rfft(x); f=np.fft.rfftfreq(len(x),1/SR); m=np.ones_like(f)
    if hi: m*=1/(1+(f/hi)**4)
    if lo: m*=1/(1+(lo/np.maximum(f,1e-3))**4)
    return np.fft.irfft(X*m,len(x))

# ---- pad: slow chord progression, soft saw-ish tones (few harmonics), detuned ----
chords=[(0.0,[55,110,164.81,220,261.63]),      # Am
        (6.3,[43.65,87.31,130.81,174.61,220]),  # F
        (11.9,[65.41,130.81,196,261.63,329.63]),# C
        (16.0,[49,98,146.83,196,246.94]),       # G
        (20.3,[55,110,164.81,220,329.63])]      # Am(add)
pad=np.zeros((2,N))
for k,(st,fr) in enumerate(chords):
    en=chords[k+1][0] if k+1<len(chords) else D
    a=np.clip((t-st+1.0)/1.6,0,1)*np.clip((en+1.2-t)/1.6,0,1)
    a=a*a*(3-2*a)
    for ch,det in ((0,-0.18),(1,0.21)):
        s=np.zeros(N)
        for f in fr:
            for h,amp in ((1,1),(2,.32),(3,.12),(4,.05)):
                s+=amp*np.sin(2*np.pi*(f*h+det*h)*t+rng.random()*6.28)/len(fr)
        pad[ch]+=s*a
lfo=1+.18*np.sin(2*np.pi*.11*t)
master=np.clip(t/2.2,0,1)**2
pad*=lfo*master*.16
L+=pad[0]; Rr+=pad[1]

# ---- air: filtered noise bed ----
air=fft_filter(rng.standard_normal(N),lo=1800,hi=7000)*.012*master
L+=air; Rr+=np.roll(air,900)

# ---- sub boom / impact ----
def boom(gain=1.0,dur=1.8,f0=70,f1=34):
    n=int(SR*dur); tt=np.arange(n)/SR
    f=f1+(f0-f1)*np.exp(-tt*5); ph=2*np.pi*np.cumsum(f)/SR
    s=np.sin(ph)*np.exp(-tt*2.6)*np.clip(tt/0.004,0,1)
    nz=fft_filter(rng.standard_normal(n),hi=900)*np.exp(-tt*18)*.5
    return (s+nz)*gain
def riser(dur=1.0,gain=1.0):
    n=int(SR*dur); tt=np.arange(n)/SR
    nz=fft_filter(rng.standard_normal(n),lo=500,hi=6000)
    env=(tt/dur)**2.4
    return nz*env*gain
def bell(freqs,gain=1.0,dur=3.5):
    n=int(SR*dur); tt=np.arange(n)/SR; s=np.zeros(n)
    for i,f in enumerate(freqs):
        for r,a,dec in ((1,1,1.6),(2.76,.25,3.5),(5.4,.08,6)):
            s+=a*np.sin(2*np.pi*f*r*tt)*np.exp(-tt*dec)
    return s*np.clip(tt/0.003,0,1)*gain/len(freqs)
def tick(gain=1.0,f=1500):
    n=int(SR*.25); tt=np.arange(n)/SR
    return (np.sin(2*np.pi*f*tt)*.6+np.sin(2*np.pi*f*2.01*tt)*.25)*np.exp(-tt*28)*gain

# intro: shimmer while A draws, impact when the dot lands
add(riser(1.4,.05),0.35,0); add(bell([880,1318.5],.10,4),1.72,-.2); add(boom(.75),1.72)
hits=[(3.3,.45),(6.3,.6),(9.2,.4),(10.1,.3),(11.0,.4),(11.9,.55),(16.0,.6),(18.2,.55),(20.3,.85)]
for h,g in hits: add(boom(g),h)
for h in (6.3,16.0,20.3): add(riser(1.1,.07),h-1.1)
add(bell([659.25,987.77],.06,3),18.5,.25)
add(bell([880,1318.5,1760],.10,5),20.35,-.1)
for i in range(5): add(tick(.05,1320+i*90),11.9+.35+i*.42,(-.5+i*.25))
for i,h in enumerate((9.2,10.1,11.0)): add(tick(.04,1100+i*120),h,0)

# ---- reverb: synthetic stereo IR ----
irn=int(SR*2.8); ti=np.arange(irn)/SR
def ir(seed):
    r=np.random.default_rng(seed).standard_normal(irn)*np.exp(-ti*2.3)
    return fft_filter(r,hi=5000)
def conv(x,h):
    n=len(x)+len(h); n2=1<<(n-1).bit_length()
    return np.fft.irfft(np.fft.rfft(x,n2)*np.fft.rfft(h,n2),n2)[:len(x)]
wetL=conv(L,ir(11)); wetR=conv(Rr,ir(12))
wet_g=.11/np.max(np.abs(wetL)+1e-9)*np.max(np.abs(L))
L=L+wetL*wet_g; Rr=Rr+wetR*wet_g

# fades + soft clip + normalize
fade=np.clip((D-t)/1.2,0,1)*np.clip(t/0.05,0,1)
L*=fade; Rr*=fade
st=np.stack([L,Rr],1); st=np.tanh(st/np.max(np.abs(st))*1.4)/np.tanh(1.4)*.89
pcm=(st*32767).astype(np.int16)
with wave.open(sys.argv[1],'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('ok')
