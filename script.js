// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

// Scroll Reveal Animation
window.sr = ScrollReveal();

sr.reveal('.hero-content', {
    duration: 1000,
    origin: 'left',
    distance: '100px',
    easing: 'ease-in-out'
});

sr.reveal('.section-header', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'
});

sr.reveal('.model-card', {
    duration: 1000,
    interval: 200,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'
});

sr.reveal('.innovation-item', {
    duration: 1000,
    interval: 200,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'
});

sr.reveal('.showroom-info', {
    duration: 1000,
    origin: 'left',
    distance: '100px',
    easing: 'ease-in-out'
});

sr.reveal('.showroom-image', {
    duration: 1000,
    origin: 'right',
    distance: '100px',
    easing: 'ease-in-out'
});

sr.reveal('.contact-info', {
    duration: 1000,
    origin: 'left',
    distance: '100px',
    easing: 'ease-in-out'
});

sr.reveal('.contact-form', {
    duration: 1000,
    origin: 'right',
    distance: '100px',
    easing: 'ease-in-out'
});

// Form Submission
const form = document.getElementById('inquiryForm');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const interest = document.getElementById('interest').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && interest && message) {
            // In a real application, you would send this data to a server
            console.log('Inquiry submitted:', { name, email, phone, interest, message });
            
            // Show success message
            alert('Thank you for your inquiry! Our sales team will contact you soon.');
            
            // Reset form
            form.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Car animation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const car = document.querySelector('.car');
    if (car) {
        // Add subtle rotation effect on hover
        car.addEventListener('mouseover', function() {
            this.style.transform = 'rotateY(10deg) translateY(-20px)';
        });
        
        car.addEventListener('mouseout', function() {
            this.style.transform = 'rotateY(0deg) translateY(0px)';
        });
    }
});