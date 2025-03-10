document.addEventListener("DOMContentLoaded", () => {
    setThemeBasedOnSystem();

})

function setThemeBasedOnSystem() {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light");
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    document.body.setAttribute("data-bs-theme", event.matches ? "dark" : "light");
});

const toggleTheme = () => {
    const currentTheme = document.body.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save preference
};

// Check local storage first, then fallback to system theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.setAttribute("data-bs-theme", savedTheme);
} else {
    setThemeBasedOnSystem();
}
