var typed = new Typed(".text", {
    strings: ["Développeur Web", "Développeur Frontend", "Freelance"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}