"use strict";
// var btn = document.getElementsByClassName("indicator-btn");
// var slide = document.getElementById("slide");
// var x = window.matchMedia("(max-width: 768px)");

// function testimonialSlider(x) {
//     if (x.matches) {
//         // If the viewport is 768px or less
//         btn[0].onclick = function () {
//             slide.style.transform = "translateX(0px)";
//             for (i = 0; i < 4; i++) {
//                 btn[i].classList.remove("btn-active");
//             }
//             this.classList.add("btn-active");
//         }
//         btn[1].onclick = function () {
//             slide.style.transform = "translateX(-270px)";
//             for (i = 0; i < 4; i++) {
//                 btn[i].classList.remove("btn-active");
//             }
//             this.classList.add("btn-active");
//         }
//         btn[2].onclick = function () {
//             slide.style.transform = "translateX(-540px)";
//             for (i = 0; i < 4; i++) {
//                 btn[i].classList.remove("btn-active");
//             }
//             this.classList.add("btn-active");
//         }
//         btn[3].onclick = function () {
//             slide.style.transform = "translateX(-810px)";
//             for (i = 0; i < 4; i++) {
//                 btn[i].classList.remove("btn-active");
//             }
//             this.classList.add("btn-active");
//         }
//         console.log("yo");
//     } else {
//         // If the viewport is great than 768px
//         btn[0].onclick = function () {
//             slide.style.transform = "translateX(0px)";
//             for (i = 0; i < 4; i++) {
//                 btn[i].classList.remove("btn-active");
//             }
//             this.classList.add("btn-active");
//         }
//         btn[1].onclick = function () {
//             slide.style.transform = "translateX(-800px)";
//             for (i = 0; i < 4; i++) {
//                 btn[i].classList.remove("btn-active");
//             }
//             this.classList.add("btn-active");
//         }
//         btn[2].onclick = function () {
//             slide.style.transform = "translateX(-1600px)";
//             for (i = 0; i < 4; i++) {
//                 btn[i].classList.remove("btn-active");
//             }
//             this.classList.add("btn-active");
//         }
//         btn[3].onclick = function () {
//             slide.style.transform = "translateX(-2400px)";
//             for (i = 0; i < 4; i++) {
//                 btn[i].classList.remove("btn-active");
//             }
//             this.classList.add("btn-active");
//         }
//     }
// }

// testimonialSlider(x); // Call listener function at run time
// x.addListener(testimonialSlider); // Attach listener function on state changes
// console.log("hi");

// Get elements
const slides = document.querySelectorAll(".slide-col");
const slideIndicator = document.querySelector(".indicator");

let curSlide = 0;
const maxSlide = slides.length;

// Functions
const activateIndicator = function (slide) {
  // Remove the active class from all indicator dots
  document
    .querySelectorAll(".indicator-btn")
    .forEach(btn => btn.classList.remove("btn-active"));

  // Apply the active class to the current slide's indicator dot
  document
    .querySelector(`.indicator-btn[data-slide="${slide}"]`)
    .classList.add("btn-active");
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
  console.log(`Slide: ${slide}`);
};

// Initialization
const init = function () {
  activateIndicator(0);
  goToSlide(0);
};
init();

// Event handler
slideIndicator.addEventListener("click", function (e) {
  if (e.target.classList.contains("indicator-btn")) {
    curSlide = e.target.dataset.slide;
    goToSlide(curSlide);
    activateIndicator(curSlide);
    console.log(`Current slide: ${curSlide}`);
  }
});
