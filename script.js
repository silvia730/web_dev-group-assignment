// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Mobile Menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});
