document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("click", function () {
            this.classList.toggle("hidden");
        });
    });
});

/* CSS complementar para esconder as seções */
.hidden {
    display: none;
}
