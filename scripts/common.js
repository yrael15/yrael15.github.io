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
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('active');
});

document.querySelectorAll('.nested-dropdown').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const submenu = item.querySelector('.nested-menu');
    if (!submenu) return;

    submenu.style.display = 'block'; // Show temporarily to measure
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