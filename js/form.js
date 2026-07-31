// ==========================================
// INTELAI Solutions Private Limited
// Contact Form Submit + Validation
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const data = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            course: form.course.value,
            message: form.message.value.trim()
        };

        // Validation
        if (data.name === "") {
            alert("Please enter your name.");
            return;
        }

        if (!validateEmail(data.email)) {
            alert("Please enter a valid email.");
            return;
        }

        if (data.phone.length !== 10) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        if (data.message === "") {
            alert("Please enter your message.");
            return;
        }

        try {

            const response = await fetch("http://127.0.0.1:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            alert(result.message);

            form.reset();

        } catch (error) {
            console.error(error);
            alert("Unable to connect to the server.");
        }

    });

});


function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}