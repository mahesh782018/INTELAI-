// ==========================================
// INTELAI Solutions Private Limited
// Counter Animation
// counter.js
// ==========================================

// Counter Animation

const counters = document.querySelectorAll(".counter");

const speed = 100;

const startCounter = () => {

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {

                counter.innerText = count + increment;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

// Run counter when visible

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

            observer.disconnect();

        }

    });

}, {
    threshold: 0.5
});

const counterSection = document.querySelector(".counter-section");

if (counterSection) {

    observer.observe(counterSection);

}

// Optional: Add '+' after counting

window.addEventListener("load", () => {

    document.querySelectorAll(".counter").forEach(counter => {

        const target = counter.getAttribute("data-target");

        if (target >= 100) {

            counter.setAttribute("data-symbol", "+");

        }

    });

});

// Show symbols after animation

setTimeout(() => {

    document.querySelectorAll(".counter").forEach(counter => {

        const symbol = counter.getAttribute("data-symbol");

        if (symbol) {

            counter.innerText = counter.innerText + symbol;

        }

    });

}, 2500);