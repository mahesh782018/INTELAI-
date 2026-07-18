// ======================================
// INTELAI SOLUTIONS HERO SLIDER
// slider.js
// ======================================

let slideIndex = 0;
let slides = document.getElementsByClassName("slides");

showSlides();

function showSlides() {

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 4000);
}

// Previous / Next Buttons

function plusSlides(n) {

    slideIndex += n;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}