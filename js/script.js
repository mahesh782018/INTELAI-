// ==============================
// INTELAI SOLUTIONS
// script.js
// ==============================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

// Sticky Navbar

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};