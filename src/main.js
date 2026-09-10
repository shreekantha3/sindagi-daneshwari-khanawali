import './style.css'
// mobile nav + reveal on scroll (zero-dep, AutoAnimate-style)
const btn = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-menu');
btn?.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden');
  btn.setAttribute('aria-expanded', String(!open));
});
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
