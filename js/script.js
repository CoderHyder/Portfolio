document.addEventListener("DOMContentLoaded", function () {
    // Contact form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Message sent successfully!");
    });

    // Mouse hover effect on skills section
    document.getElementById("skills").addEventListener("mouseenter", function () {
        this.style.color = "white";
    });
});
