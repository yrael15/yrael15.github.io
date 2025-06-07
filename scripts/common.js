function loadIncludes() {
  fetch('nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      const menuToggle = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.nav-links');

      if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
      } else {
        console.warn('Menu toggle button or nav-links container not found');
      }

      // MOBILE dropdown toggling
      if (window.innerWidth <= 768) {
        const dropdownLinks = document.querySelectorAll('.dropdown > a, .nested-dropdown > a');
        dropdownLinks.forEach(link => {
          link.addEventListener('click', function (e) {
            const parent = this.parentElement;
            e.preventDefault();
            parent.classList.toggle('open');
          });
        });
      }
    });

  fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer-placeholder').innerHTML = data);
}

if (document.getElementById('nav-placeholder')) {
  loadIncludes();
}

// Desktop hover logic for nested dropdowns
document.querySelectorAll('.nested-dropdown').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const submenu = item.querySelector('.nested-menu');
    if (!submenu) return;

    submenu.style.display = 'block'; // Temporarily show to measure
    const rect = submenu.getBoundingClientRect();
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (rect.right > viewportWidth) {
      submenu.classList.add('open-left');
    } else {
      submenu.classList.remove('open-left');
    }

    submenu.style.display = ''; // Let CSS handle display again
  });

  item.addEventListener('mouseleave', () => {
    const submenu = item.querySelector('.nested-menu');
    if (submenu) {
      submenu.classList.remove('open-left');
    }
  });
});

