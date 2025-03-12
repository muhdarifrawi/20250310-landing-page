document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-link");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                setTimeout(() => {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }, 300); // Small delay ensures the navigation happens first
            }
        });
    });
});