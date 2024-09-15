// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: window.innerWidth <= 700 ? 1 : 3,
  spaceBetween: 9,
  direction: window.innerWidth <= 700 ? "vertical" : "horizontal",
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Get the Swiper container for autoplay controls
var swiperContainer = document.querySelector(".mySwiper");

// Pause autoplay on mouseenter and resume on mouseleave
swiperContainer.addEventListener("mouseenter", () => swiper.autoplay.stop());
swiperContainer.addEventListener("mouseleave", () => swiper.autoplay.start());

// Adjust layout on window resize
// Function to update the border styles based on the screen width
function updateProjectBorder() {
  const isMobile = window.innerWidth < 700;
  let Border = document.querySelector(".project_all");

  // Update project border styles
  if (Border) {
    if (isMobile) {
      Border.style.border = "none";
      Border.style.borderTop = `4px solid var(--project_all_border_color)`;
      Border.style.borderBottom = `4px solid var(--project_all_border_color)`;
    } else {
      Border.style.border = `4px solid var(--project_all_border_color)`;
      Border.style.borderTop = "none";
      Border.style.borderBottom = "none";
    }
  }
}

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  updateProjectBorder(); // Call when the DOM is loaded
});

// Add event listener for window resize
window.addEventListener("resize", () => {
  updateProjectBorder(); // Call when the window is resized
});

// Tooltip and slide click handling
const tooltips = [
  "asking love",
  "canvas",
  "clock",
  "image",
  "QR code",
  "weather",
  "my info",
  "mess data",
];
const links = [
  "https://your-brain.github.io/LoverBabu/",
  "https://partha-batabyal.github.io/canvas__op/",
  "https://partha-batabyal.github.io/clockNoob/",
  "https://partha-batabyal.github.io/FattyImgFinder/",
  "https://your-brain.github.io/banaloQr/",
  "https://partha-batabyal.github.io/FattyWeather/",
  "https://your-brain.github.io/aboutPartha/",
  "https://partha-batabyal.github.io/messData/",
];

// Initialize tooltips and click events for Swiper slides
const initSwiperTooltips = () => {
  const swiperSlides = document.querySelectorAll(".swiper-slide");

  swiperSlides.forEach((slide, index) => {
    slide.setAttribute("data-tooltip", tooltips[index]);

    // Handle click or touch events
    slide.addEventListener("doubleclick", () => handleSlideClick(slide, index));
    slide.addEventListener("doubletouchstart", () =>
      handleSlideClick(slide, index)
    );
  });
};

// Handle slide click/touch and open link after showing loader
const handleSlideClick = (slide, index) => {
  slide.removeAttribute("data-tooltip");

  const loader = document.createElement("div");
  loader.classList.add("loaderSwiper", "loader");
  slide.appendChild(loader);

  setTimeout(() => {
    loader.remove();
    window.open(links[index], "_blank");
    slide.setAttribute("data-tooltip", tooltips[index]);
  }, 2000);
};

// Initialize tooltips on page load and resize
window.addEventListener("DOMContentLoaded", initSwiperTooltips);
window.addEventListener("resize", initSwiperTooltips);
