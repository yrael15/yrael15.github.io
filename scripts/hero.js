let slideIndex = 0;
let isModalOpen = false;
let slideTimeout;
let autoAdvanceDelay = 5000;
let userClicked = false;

const modalData = [
  {
    src: "images/logo/website_banner_bloom_blight_2.png",
    title: "About Bloom&Blight",
    text: "Meet our team of magical girls as they confront new and ancient evils."
  },
  {
    src: "images/logo/website_banner_bloom_blight_2.png",
    title: "About Bloom&Blight",
    text: "Meet our team of magical girls as they confront new and ancient evils."
  },
  {
    src: "images/logo/BloomBlight_Podcast_Album_Cover.png",
    title: "Our Podcast Cover",
    text: "This is the official cover art for the Bloom&Blight podcast series."
  },
  {
    src: "images/logo/discord.png",
    title: "Join Our Community",
    text: "Connect with other fans and share your theories and art!"
  }
];

function plusSlides(n) {
  userClicked = true;
  clearTimeout(slideTimeout);
  showSlides(slideIndex += n);
  slideTimeout = setTimeout(() => {
    userClicked = false;
    showSlides(++slideIndex);
  }, 10000);
}

function currentSlide(n) {
  userClicked = true;
  clearTimeout(slideTimeout);
  slideIndex = n;
  showSlides(slideIndex);
  slideTimeout = setTimeout(() => {
    userClicked = false;
    showSlides(++slideIndex);
  }, 10000);
}

function showSlides(n) {
  if (isModalOpen) return;

  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n === undefined) slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");

  if (!userClicked && !isModalOpen) {
    slideTimeout = setTimeout(() => showSlides(), autoAdvanceDelay);
  }
}

function openModal(index) {
  isModalOpen = true;
  clearTimeout(slideTimeout);

  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  const data = modalData[index];
  modalImage.src = data.src;
  modalTitle.textContent = data.title;
  modalDescription.textContent = data.text;

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  isModalOpen = false;

  slideTimeout = setTimeout(() => {
    userClicked = false;
    showSlides(++slideIndex);
  }, autoAdvanceDelay);
}

document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index));
  });

  document.querySelectorAll(".mySlides img").forEach((img, index) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openModal(index));
  });

  showSlides(slideIndex);
});

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
    isModalOpen = false;
    slideTimeout = setTimeout(() => {
      userClicked = false;
      showSlides(++slideIndex);
    }, autoAdvanceDelay);
  }
};

// Optional: ESC key closes modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isModalOpen) {
    closeModal();
  }
});
