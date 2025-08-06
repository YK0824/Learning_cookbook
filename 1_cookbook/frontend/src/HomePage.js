const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  console.log('menu clicked');
  navLinks.classList.toggle('active');
});