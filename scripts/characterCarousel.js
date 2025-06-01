const track = document.getElementById('carousel-track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const thumbs = document.querySelectorAll('.thumbnails img');

let index = 0;
let autoPlay = true;
const totalSlides = track.children.length;

function goToSlide(i) {
  index = i;
  track.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  goToSlide(index);
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  goToSlide(index);
}

let autoInterval = setInterval(() => {
  if (autoPlay) nextSlide();
}, 4000);

nextBtn.addEventListener('click', () => {
  nextSlide();
  autoPlay = false;
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  autoPlay = false;
});

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const i = parseInt(thumb.dataset.index);
    goToSlide(i);
    autoPlay = false;
  });
});
