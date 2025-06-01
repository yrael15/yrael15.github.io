const reviewTrack = document.getElementById('review-carousel-track');
const reviewNextBtn = document.getElementById('review-nextBtn');
const reviewPrevBtn = document.getElementById('review-prevBtn');
let reviewIndex = 0;
let reviewAutoPlay = true;
const reviewTotalSlides = reviewTrack.children.length;

function reviewGoToSlide(i) {
  reviewIndex = i;
  reviewTrack.style.transform = `translateX(-${i * 100}%)`;
}

function reviewNextSlide() {
  reviewIndex = (reviewIndex + 1) % reviewTotalSlides;
  reviewGoToSlide(reviewIndex);
}

function reviewPrevSlide() {
  reviewIndex = (reviewIndex - 1 + reviewTotalSlides) % reviewTotalSlides;
  reviewGoToSlide(reviewIndex);
}

let reviewAutoInterval = setInterval(() => {
  if (reviewAutoPlay) reviewNextSlide();
}, 5000);

reviewNextBtn.addEventListener('click', () => {
  reviewNextSlide();
  reviewAutoPlay = false;
});

reviewPrevBtn.addEventListener('click', () => {
  reviewPrevSlide();
  reviewAutoPlay = false;
});
