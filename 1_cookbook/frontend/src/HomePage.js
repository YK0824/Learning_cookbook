const menuToggle = document.getElementById('menu-toggle');
const navLinks_small = document.getElementById('nav-links_small');

menuToggle.addEventListener('click', () => {
  console.log('menu clicked');
  navLinks_small.classList.toggle('active');
});