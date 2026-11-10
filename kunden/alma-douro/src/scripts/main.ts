// Mobiles Menü
const header = document.querySelector<HTMLElement>('.site-header');
const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
if (header && toggle) {
  const setOpen = (open: boolean) => {
    header.classList.toggle('nav-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? toggle.dataset.close! : toggle.dataset.open!);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
  });
  matchMedia('(min-width: 1240px)').addEventListener('change', (e) => e.matches && setOpen(false));
}

// Startseite: transparenter Header wird beim Scrollen dunkel
if (header?.classList.contains('site-header--overlay')) {
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 40);
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });
}

// Fade-in beim Scrollen
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-visible'));
}
