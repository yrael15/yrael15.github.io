let slideIndex = 0;
let isModalOpen = false;
let slideTimeout;
let autoAdvanceDelay = 5000;
let userClicked = false;

const modalData = [
  {
    src: "images/banners/modal/LogoSolo-CLR.png",
    title: "Vote Today!",
    text: "Be sure to vote for Bloom&Blight for Best Audio and Sound Design in a Podcast in the CritAwards! Voting is open until June 30th, and anybody can vote!",
    link: {
            url: "https://docs.google.com/forms/d/e/1FAIpQLSf8YSKrjEei20hfNnH1TgJ3MgeNoTcjEcEuT_zaOVWHASuCXQ/viewform",
            text: "Vote Here"
    }
  },  
  {
    src: "images/banners/modal/Website_Character_Portraits.png",
    title: "Bloom",
    text: "The latest team in generations of magical girls, Bloom protects Oliva Bay with a dedication that transcends their recent casualties. ",
    link: {
            url: "/characters.html",
            text: "Meet them now!"
    }
  },
  {
    src: "images/logo/BloomBlight_Podcast_Album_Cover.png",
    title: "About Bloom&Blight",
    text: "We are a queer and trans led, majority BIPOC, Girl by Moonlight actual play podcast following the titular magical girl team Bloom. Set just a few months after their leader sacrificed herself to save the world, our story follows the magical girls of Bloom as they learn how to overcome their grief, and confront the evil beginning to stir again.",
    link: {
            url: "https://open.spotify.com/show/3zkX7azMygmGSxMFVG7QKJ?si=251c085982e44555",
            text: "Find us on Spotify today!"
    }
  },
  {
    src: "images/banners/modal/Archives_1.png",
    title: "The Faces Behind the Magic!",
    text: "Our amazing cast and crew of award-winning performers and producers work tirelessly to bring you stories of love, loss, healing, and queerness. ",
    link: {
            url: "/about.html#cast",
            text: "Check them out!"
    }
  },
  {
    src: "images/logo/discord.png",
    title: "Join Our Community",
    text: "Connect with other fans, discuss episodes, chat with cast & crew, and even get exclusive sneak peeks in the official DarefulArchives Community Discord!",
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isModalOpen) {
    closeModal();
  }
});
