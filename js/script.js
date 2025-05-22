
// Theme Toggle Button
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    // Change button icon
    this.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
