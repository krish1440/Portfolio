// Selecting elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Smooth scroll behavior for links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scrolling
        });

        // Close the navbar in mobile view when a link is clicked
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x', 'active');
    });
});

// Handle scroll events to highlight active section links
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });
};

// Toggle menu icon and navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
};

// Close navbar when clicking outside of it
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x', 'active');
    }
});
