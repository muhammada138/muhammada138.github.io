// Mobile menu toggle (simple show on click)
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '10px';
    nav.style.background = 'rgba(10,10,10,0.9)';
    nav.style.position = 'absolute';
    nav.style.top = '56px';
    nav.style.right = '16px';
    nav.style.padding = '10px';
    nav.style.border = '1px solid rgba(255,255,255,0.08)';
    nav.style.borderRadius = '10px';
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// AOS animations
AOS.init({ once: true });

// Typed intro
new Typed('#typed', {
  strings: [
    'Computer Science Student',
    'AI enthusiast',
    'Web developer'
  ],
  typeSpeed: 45,
  backSpeed: 24,
  backDelay: 900,
  loop: true,
  smartBackspace: true
});
