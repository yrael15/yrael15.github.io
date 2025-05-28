let slideIndex = 0;
let isModalOpen = false;
let slideTimeout;
let autoAdvanceDelay = 5000;
let userClicked = false;

const modalData = [
  {
    src: "images/characters/belladonna.webp",
    title: "Bloom",
    text: "Meet our team, Bloom, as they confront new and ancient evils.",
    link: {
            url: "/characters",
            text: "Meet them all now!"
    }
  },
  {
    src: "images/logo/Copy_of_Copy_of_Garden_Club_Album_Cover_20250526_215623_0000.png",
    title: "The Garden Club",
    text: "Ever wonder why something happens? Check out the talkback!",
    embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/4xa8FUe8RBO6Ksm8puZPX4?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    src: "images/logo/BloomBlight_Podcast_Album_Cover.png",
    title: "About Bloom&Blight",
    text: "We are a queer and trans led Girl by Moonlight actual play podcast following the titular magical girl team Bloom. After securing victory against their nemesis at a devastating cost, the strained team finds themselves drawn back together as whispers of evil begin again."
  },
  {
    src: "images/logo/discord.png",
    title: "Join Our Community",
    text: "Connect with other fans and share your theories and art!",
    link: {
            url: "https://discord.gg/queFxm2txX",
            text: "Join today!"
    }

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

// function openModal(index) {
//   isModalOpen = true;
//   clearTimeout(slideTimeout);

//   const modal = document.getElementById("modal");
//   const modalImage = document.getElementById("modalImage");
//   const modalTitle = document.getElementById("modalTitle");
//   const modalDescription = document.getElementById("modalDescription");

//   const data = modalData[index];
//   modalImage.src = data.src;
//   modalTitle.textContent = data.title;
//   modalDescription.textContent = data.text;

//   modal.style.display = "block";
// }
function openModal(index) {
  isModalOpen = true;
  clearTimeout(slideTimeout);

  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLink = document.getElementById("modalLink");
  const modalEmbed = document.getElementById("modalEmbed");

  const data = modalData[index];
  modalImage.src = data.src;
  modalTitle.textContent = data.title;
  modalDescription.textContent = data.text;

  // Handle link
  if (data.link) {
    modalLink.style.display = "block";
    modalLink.href = data.link.url;
    modalLink.textContent = data.link.text;
  } else {
    modalLink.style.display = "none";
  }

  // Handle embed
  if (data.embed) {
    modalEmbed.style.display = "block";
    modalEmbed.innerHTML = data.embed;
  } else {
    modalEmbed.style.display = "none";
    modalEmbed.innerHTML = "";
  }

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
