document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.image-grid img').forEach(function(thumb) {
    thumb.addEventListener('click', function() {
    console.log('Thumbnail clicked:', thumb.dataset.full);
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-image');
        const downloadBtn = document.getElementById('download-btn');

        modalImg.src = thumb.dataset.full;
        downloadBtn.href = thumb.dataset.full;

        modal.style.display = 'block';
    });
  });

  document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
  });

  window.addEventListener('click', function(e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
  });
});
