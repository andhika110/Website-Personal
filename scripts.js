// Toggle dark/light mode
const toggle = document.getElementById('toggleMode');
const app = document.getElementById('app');

function updateMode() {
  if (app.classList.contains('dark')) {
    toggle.textContent = '🌙';
  } else {
    toggle.textContent = '☀️';
  }
}

// Saat tombol diklik
toggle.addEventListener('click', () => {
  app.classList.toggle('dark');
  app.classList.toggle('light');
  updateMode();
  // Simpan preferensi ke localStorage
  localStorage.setItem('mode', app.classList.contains('dark') ? 'dark' : 'light');
});

// Cek mode dari localStorage saat pertama dibuka
window.addEventListener('load', () => {
  const savedMode = localStorage.getItem('mode') || 'light';
  app.classList.remove('dark', 'light');
  app.classList.add(savedMode);
  updateMode();
});

// Toggle Menu
const menuToggle = document.getElementById('menuToggle');
const navWrapper = document.querySelector('.nav-wrapper');
const navLinks = document.querySelectorAll('.nav-link');
const overlay = document.createElement('div'); // Buat elemen overlay

overlay.classList.add('menu-overlay'); // Tambahkan class untuk styling
document.body.appendChild(overlay); // Tambahkan ke body

menuToggle.addEventListener('click', () => {
  navWrapper.classList.toggle('active');
  overlay.classList.toggle('active'); // Toggle overlay
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navWrapper.classList.remove('active');
    overlay.classList.remove('active'); // Sembunyikan overlay
  });
});

// Animasi muncul saat scroll
const animatedSections = document.querySelectorAll('.animate');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

window.addEventListener('load', revealOnScroll);