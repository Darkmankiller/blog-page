// Animation Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Select all elements with slide-up class and observe them
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(element => {
        observer.observe(element);
        // Set initial styling for animation
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Add 'visible' class to trigger animation
    document.addEventListener('scroll', () => {
        slideUpElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight * 0.8) {
                element.classList.add('visible');
            }
        });
    });
    
    // Apply 'visible' class styling
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .slide-up.visible {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);
});