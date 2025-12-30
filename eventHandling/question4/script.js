const images = [
  "contactless-landing-sm.jpg",
  "hubbo-home-video-banner-thumbnailtabsize.png",
  "pos-machine.png",
];

let currentIndex = 0;

const imageElement = document.getElementById("mainImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const updateImage = () => {
  imageElement.src = images[currentIndex];
};

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  updateImage();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});
