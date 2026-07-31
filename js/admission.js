document.getElementById("admissionForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    try {

        const response = await fetch("http://127.0.0.1:5000/admission", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            alert(result.message);
            this.reset();
        } else {
            alert(result.message || "Submission failed.");
        }

    } catch (error) {
        console.error(error);
        alert("Unable to connect to the server.");
    }
});