/* JHS FITNESS HUB — main.js */
(() => {
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Navigation: scrolled state + active link */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const links = $$('.nav-links a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(a => { const s = document.querySelector(a.getAttribute('href')); s && spy.observe(s); });

  /* Mobile menu */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleMenu = force => {
    const open = typeof force === 'boolean' ? force : !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', open);
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
    mobileMenu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  hamburger.addEventListener('click', () => toggleMenu());
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
  addEventListener('keydown', e => e.key === 'Escape' && toggleMenu(false));
  matchMedia('(min-width:769px)').addEventListener('change', e => e.matches && toggleMenu(false));

  /* Reveal on scroll */
  const items = $$('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) items.forEach(el => el.classList.add('in'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    items.forEach(el => io.observe(el));
  }

  /* Anchor scrolling with sticky-nav offset */
  $$('a[href^="#"]').forEach(link => link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    scrollTo({ top: target.getBoundingClientRect().top + scrollY - 80, behavior: prefersReduced ? 'auto' : 'smooth' });
  }));

  /* Pictures: if a photo fails to load, show the dark placeholder instead of a broken icon */
  document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG') (e.target.closest('.media') || e.target.parentElement).classList.add('img-fail');
  }, true);

  /* Placeholder links (href "#", "tel:", "mailto:") stay hidden until the client's real details are added */
  $$('a[href="#"], a[href="tel:"], a[href="mailto:"]').forEach(a => (a.closest('li') || a).hidden = true);

  const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
