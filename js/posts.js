// Posts JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load all posts on the posts page
    const allPostsContainer = document.getElementById('all-posts-container');
    if (allPostsContainer) {
        loadAllPosts();
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

    // Complete the featured posts loading function in main.js
    const featuredPostsContainer = document.getElementById('featured-posts-container');
    if (featuredPostsContainer) {
        loadFeaturedPosts();
    }
});

// Function to load all posts
async function loadAllPosts() {
    const allPostsContainer = document.getElementById('all-posts-container');
    if (!allPostsContainer) return;
    
    try {
        // In a real application, this would fetch data from an API
        // For now, we'll use sample data
        const posts = [
            {
                id: 1,
                title: 'Understanding Zero Trust Security',
                excerpt: 'Explore the core principles of Zero Trust and how this security model can protect your organization in an increasingly complex threat landscape.',
                image: '/api/placeholder/600/400',
                date: 'February 20, 2025',
                author: 'Alex Chen',
                category: 'Security Models',
                url: 'posts/post1.html'
            },
            {
                id: 2,
                title: 'The Ransomware Threat Landscape in 2025',
                excerpt: 'A comprehensive overview of current ransomware trends, attack vectors, and effective defense strategies.',
                image: '/api/placeholder/600/400',
                date: 'February 15, 2025',
                author: 'Sarah Johnson',
                category: 'Threats',
                url: 'posts/post2.html'
            },
            {
                id: 3,
                title: 'Ethical Hacking: Tools of the Trade',
                excerpt: 'Discover the essential tools and techniques used by professional penetration testers to identify vulnerabilities before malicious actors do.',
                image: '/api/placeholder/600/400',
                date: 'February 10, 2025',
                author: 'Michael Wong',
                category: 'Ethical Hacking',
                url: 'posts/post3.html'
            },
            {
                id: 4,
                title: 'Securing your Cloud Infrastructure',
                excerpt: 'Learn best practices for protecting your cloud-based assets and ensuring compliance with security standards.',
                image: '/api/placeholder/600/400',
                date: 'February 5, 2025',
                author: 'Lisa Patel',
                category: 'Cloud Security',
                url: 'posts/post4.html'
            },
            {
                id: 5,
                title: 'The Human Factor: Social Engineering Attacks',
                excerpt: 'Why human psychology remains the weakest link in cybersecurity and how to strengthen your organization against manipulation.',
                image: '/api/placeholder/600/400',
                date: 'January 30, 2025',
                author: 'David Kim',
                category: 'Social Engineering',
                url: 'posts/post5.html'
            },
            {
                id: 6,
                title: 'Advanced Persistent Threats: Detection and Response',
                excerpt: 'Strategies for identifying and mitigating sophisticated, targeted attacks from nation-states and organized crime groups.',
                image: '/api/placeholder/600/400',
                date: 'January 25, 2025',
                author: 'Rebecca Torres',
                category: 'Threat Detection',
                url: 'posts/post6.html'
            }
        ];
        
        // Remove loading spinner
        const loadingSpinner = allPostsContainer.querySelector('.loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.remove();
        }
        
        // Populate posts
        posts.forEach(post => {
            const postCard = createPostCard(post);
            allPostsContainer.appendChild(postCard);
        });
        
    } catch (error) {
        console.error('Error loading posts:', error);
        allPostsContainer.innerHTML = '<p>Failed to load posts. Please try again later.</p>';
    }
}

// Function to create a post card element
function createPostCard(post) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.dataset.id = post.id;
    postCard.dataset.category = post.category;
    
    postCard.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-image">
        <div class="post-content">
            <div class="post-date">${post.date}</div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="${post.url}" class="read-more">Read More</a>
        </div>
    `;
    
    return postCard;
}

// Function to load featured posts (for the home page)
async function loadFeaturedPosts() {
    const featuredPostsContainer = document.getElementById('featured-posts-container');
    if (!featuredPostsContainer) return;
    
    try {
        // In a real application, this would fetch data from an API
        // For now, we'll use sample data of featured posts (a subset of all posts)
        const posts = [
            {
                id: 1,
                title: 'Understanding Zero Trust Security',
                excerpt: 'Explore the core principles of Zero Trust and how this security model can protect your organization in an increasingly complex threat landscape.',
                image: '/api/placeholder/600/400',
                date: 'February 20, 2025',
                url: 'posts/post1.html'
            },
            {
                id: 3,
                title: 'Ethical Hacking: Tools of the Trade',
                excerpt: 'Discover the essential tools and techniques used by professional penetration testers to identify vulnerabilities before malicious actors do.',
                image: '/api/placeholder/600/400',
                date: 'February 10, 2025',
                url: 'posts/post3.html'
            },
            {
                id: 5,
                title: 'The Human Factor: Social Engineering Attacks',
                excerpt: 'Why human psychology remains the weakest link in cybersecurity and how to strengthen your organization against manipulation.',
                image: '/api/placeholder/600/400',
                date: 'January 30, 2025',
                url: 'posts/post5.html'
            }
        ];
        
        // Remove loading spinner
        const loadingSpinner = featuredPostsContainer.querySelector('.loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.remove();
        }
        
        // Populate posts
        posts.forEach(post => {
            const postCard = createPostCard(post);
            featuredPostsContainer.appendChild(postCard);
        });
        
    } catch (error) {
        console.error('Error loading featured posts:', error);
        featuredPostsContainer.innerHTML = '<p>Failed to load featured posts. Please try again later.</p>';
    }
}

// Function to search posts
function searchPosts(query) {
    query = query.toLowerCase();
    const allPostsContainer = document.getElementById('all-posts-container');
    const postCards = allPostsContainer.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        const title = card.querySelector('.post-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.post-excerpt').textContent.toLowerCase();
        const category = card.dataset.category ? card.dataset.category.toLowerCase() : '';
        
        if (title.includes(query) || excerpt.includes(query) || category.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Display message when no results found
    const visiblePosts = allPostsContainer.querySelectorAll('.post-card[style="display: block"]');
    if (visiblePosts.length === 0) {
        let noResultsMessage = allPostsContainer.querySelector('.no-results');
        if (!noResultsMessage) {
            noResultsMessage = document.createElement('p');
            noResultsMessage.className = 'no-results';
            noResultsMessage.textContent = `No posts found matching "${query}". Try another search term.`;
            allPostsContainer.appendChild(noResultsMessage);
        } else {
            noResultsMessage.textContent = `No posts found matching "${query}". Try another search term.`;
        }
    } else {
        const noResultsMessage = allPostsContainer.querySelector('.no-results');
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
}