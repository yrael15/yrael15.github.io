//Character carousel 
const charTrack = document.getElementById('carousel-track');
const nextBtn = document.getElementById('nextBtn');
const thumbs = document.querySelectorAll('.thumbnails img');

let index = 0;
let autoPlay = true;
const totalSlides = charTrack.children.length;

function goToSlide(i) {
  index = i;
  charTrack.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  goToSlide(index);
}

let autoInterval = setInterval(() => {
  if (autoPlay) nextSlide();
}, 4000);

nextBtn.addEventListener('click', () => {
  nextSlide();
  autoPlay = false;
});

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const i = parseInt(thumb.dataset.index);
    goToSlide(i);
    autoPlay = false;
  });
});

