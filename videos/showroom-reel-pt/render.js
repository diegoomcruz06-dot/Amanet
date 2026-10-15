const { chromium } = require('playwright');
const { spawn } = require('child_process');
const dir=__dirname; const mode=process.argv[2];
(async()=>{
  const b=await chromium.launch({args:['--force-color-profile=srgb']});
  const p=await b.newPage({viewport:{width:1080,height:1920}});
  p.on('console',m=>console.log('page:',m.text())); p.on('pageerror',e=>console.log('ERR',e.message));
  await p.goto('file://'+dir+'/reel.html'); await p.evaluate(()=>window.ready);
  const c=await p.$('canvas');
  if(mode==='preview'){
    const ts=process.argv.slice(3).map(Number);
    for(const t of ts){await p.evaluate(t=>render(t),t);await c.screenshot({path:`${dir}/${process.env.PV||'prev'}/f_${t.toFixed(2)}.png`});}
  } else {
    const fps=30,D=await p.evaluate(()=>DURATION),N=Math.round(D*fps);
    const ff=spawn('ffmpeg',['-y','-v','error','-f','image2pipe','-framerate',String(fps),'-i','-','-c:v','libx264','-preset','slow','-crf','14','-pix_fmt','yuv420p','-tune','film',dir+'/video.mp4'],{stdio:['pipe','inherit','inherit']});
    for(let i=0;i<N;i++){await p.evaluate(t=>render(t),i/fps);const buf=await c.screenshot({type:'png'});
      if(!ff.stdin.write(buf)) await new Promise(r=>ff.stdin.once('drain',r)); if(i%60==0)console.log('frame',i,'/',N);}
    ff.stdin.end(); await new Promise(r=>ff.on('close',r));
  }
  await b.close();
})();
