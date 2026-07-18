// ==========================================
// INTELAI Solutions Private Limited
// Form Validation
// form.js
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = form.querySelector('input[type="text"]');
            const email = form.querySelector('input[type="email"]');
            const phone = form.querySelector('input[type="tel"], input[placeholder*="Phone"]');
            const message = form.querySelector("textarea");

            // Name Validation
            if (name && name.value.trim() === "") {
                alert("Please enter your name.");
                name.focus();
                return;
            }

            // Email Validation
            if (email && !validateEmail(email.value)) {
                alert("Please enter a valid email address.");
                email.focus();
                return;
            }

            // Phone Validation
            if (phone) {

                const phoneNumber = phone.value.replace(/\D/g, "");

                if (phoneNumber.length !== 10) {
                    alert("Please enter a valid 10-digit mobile number.");
                    phone.focus();
                    return;
                }
            }

            // Message Validation
            if (message && message.value.trim() === "") {
                alert("Please enter your message.");
                message.focus();
                return;
            }

            alert("🎉 Thank you! Your enquiry has been submitted successfully.\n\nOur team will contact you shortly.");

            form.reset();

        });

    });

});

// Email Validation Function

function validateEmail(email) {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}

// Allow Only Numbers in Phone Field

document.addEventListener("input", function (e) {

    if (e.target.type === "tel") {

        e.target.value = e.target.value.replace(/[^0-9]/g, "");

    }

});

// Highlight Input Field

const inputs = document.querySelectorAll("input, textarea, select");

inputs.forEach(input => {

    input.addEventListener("focus", function () {

        this.style.border = "2px solid #0d6efd";

    });

    input.addEventListener("blur", function () {

        this.style.border = "1px solid #ccc";

    });

});