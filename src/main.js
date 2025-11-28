'use strict';

// =========================================
//      ELEMENTS
// =========================================
const navbar = document.querySelector('.navbar');
const menuButton = document.querySelector('.navbar__menu-button');
const navLinks = document.querySelectorAll('.navbar__link');
const yearSpan = document.querySelector('#year');
const scrollToTopButton = document.querySelector('.scroll-to-top');

// =========================================
//      MOBILE NAVIGATION
// =========================================
const toggleMenu = () => {
    navbar.classList.toggle('open');
};

menuButton.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
navLinks.forEach(link => {
    // Ensure it's not the main button to the other page
    if (link.href.includes('#')) {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('open')) {
                toggleMenu();
            }
        });
    }
});

// =========================================
//      SCROLL BEHAVIORS
// =========================================
window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll to top button visibility
    if (window.scrollY > 400) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Scroll to top button click event
scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// =========================================
//      FOOTER YEAR
// =========================================
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// =========================================
//      INITIALIZE LIBRARIES
// =========================================
AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
});
