const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll("nav a, .footer-links a").forEach(anchor => {
                anchor.addEventListener("click", function (e) {
                    const targetId = this.getAttribute("href").substring(1);
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        e.preventDefault();
                        targetSection.scrollIntoView({ behavior: "smooth" });
                    }
                });
            });
        });