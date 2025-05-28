// Optional: Animate on scroll with Intersection Observer
document.querySelectorAll('.city-card').forEach(card => {
  card.style.opacity = '0';
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transition = 'opacity 1s ease';
      }
    });
  });
  observer.observe(card);
});
