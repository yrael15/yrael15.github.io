// Include nav and footer (if using JS includes)
function loadIncludes() {
    fetch('nav.html')
      .then(res => res.text())
      .then(data => document.getElementById('nav-placeholder').innerHTML = data);
  
    fetch('footer.html')
      .then(res => res.text())
      .then(data => document.getElementById('footer-placeholder').innerHTML = data);
  }
  
  if (document.getElementById('nav-placeholder')) {
    loadIncludes();
  }
// Navigation toggle (mobile)
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}  