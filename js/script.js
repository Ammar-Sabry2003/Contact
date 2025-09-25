const menu = document.querySelector(".menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    offScreenMenu.classList.remove('active');
    menu.classList.remove('active');
});


// Scroll effect for navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// dark-light map
document.addEventListener('DOMContentLoaded', () => {
    updateMapTheme(document.documentElement.getAttribute('data-theme'));
    document.querySelector('.theme-btn')?.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme');
        updateMapTheme(newTheme);
    });
});

function updateMapTheme(theme) {
    const mapLight = document.getElementById('map-light');
    const mapDark = document.getElementById('map-dark');

    if (!mapLight || !mapDark) return;

    if (theme === 'dark') {
        mapLight.style.display = 'none';
        mapDark.style.display = 'block';
    } else {
        mapLight.style.display = 'block';
        mapDark.style.display = 'none';
    }
}

const currentTheme = document.documentElement.getAttribute('data-theme');
updateMapTheme(currentTheme);

document.querySelector('.theme-btn')?.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme');
    updateMapTheme(newTheme);
});


