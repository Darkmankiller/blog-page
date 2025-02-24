// Main JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation active link highlighting
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.substring(currentLocation.lastIndexOf('/') + 1)) {
            link.classList.add('active');
        } else if (currentLocation.endsWith('/') && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
    
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (navLinksContainer && navLinksContainer.classList.contains('active') && 
            !navLinksContainer.contains(event.target) && 
            !hamburger.contains(event.target)) {
            navLinksContainer.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Load featured posts on the home page
    const featuredPostsContainer = document.getElementById('featured-posts-container');
    if (featuredPostsContainer) {
        loadFeaturedPosts();
    }
    
    // Load all posts on the posts page
    const allPostsContainer = document.getElementById('all-posts-container');
    if (allPostsContainer) {
        loadAllPosts();
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                // In a real application, you would send this to a server
                alert(`Thank you for subscribing with: ${emailInput.value}`);
                this.reset();
            }
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send this to a server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Search functionality
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="search"]');
            
            if (searchInput.value) {
                searchPosts(searchInput.value);
            }
        });
    }
});

// Function to load featured posts on the home page
async function loadFeaturedPosts() {
    const featuredPostsContainer = document.getElementById('featured-posts-container');
    if (!featuredPostsContainer) return;
    
    try {
        // In a real application, this would fetch data from an API
        // For now, we'll use sample data
        const posts = [
            {
                id: 1,
                title: 'Getting Started with Web Development',
                excerpt: 'Learn the basics of HTML, CSS, and JavaScript to start your web development journey.',
                image: '/api/placeholder/600/400',
                date: 'February 20, 2025',
                url: 'posts/post1.html'
            },
            {
                id: 2,
                title: 'Responsive Design Best Practices',
                excerpt: 'Discover the best practices for creating responsive websites that