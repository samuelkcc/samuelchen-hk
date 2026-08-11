const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.querySelector('span').textContent = isOpen ? '−' : '+';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  if (toggle) toggle.querySelector('span').textContent = '+';
}));
