// Typewriter Effect
const heading = document.querySelector(".hero h1");
const text = heading.textContent;
heading.textContent = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    heading.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

// Slideshow Functionality
const slides = document.querySelectorAll(".slideshow img");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initialize slideshow
showSlide(currentSlide);
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Slideshow Functionality for Book Slides
const bookSlides = document.querySelectorAll(".horizontal-carousel .book-slide");
let currentBookSlide = 0;

function showBookSlide(index) {
  bookSlides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextBookSlide() {
  currentBookSlide = (currentBookSlide + 1) % bookSlides.length;
  showBookSlide(currentBookSlide);
}

// Initialize book slideshow
showBookSlide(currentBookSlide);
setInterval(nextBookSlide, 4000); // Change slide every 4 seconds