// Animation and UI utilities for Barclay Heritage

// Initialize UI enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Initialize dynamic navbar
    initDynamicNavbar();
    
    // Initialize enhanced carousel controls
    initCarouselEnhancements();
    
    // Initialize button hover effects
    initButtonEffects();
    
    // Initialize page loading animation
    initPageLoadAnimation();
});

// Scroll animations for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.card, .hero-content, .service-item, .section');
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Dynamic navbar effects
function initDynamicNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow and background when scrolling
        if (scrollTop > 50) {
            navbar.classList.add('navbar-scrolled');
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.style.backgroundColor = '';
            navbar.style.backdropFilter = '';
            navbar.style.boxShadow = '';
        }
    });
}

// Enhanced carousel functionality
function initCarouselEnhancements() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        // Add touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const threshold = 50;
            if (startX - endX > threshold) {
                // Swipe left - next slide
                const nextBtn = carousel.querySelector('.carousel-control-next');
                if (nextBtn) nextBtn.click();
            } else if (endX - startX > threshold) {
                // Swipe right - previous slide
                const prevBtn = carousel.querySelector('.carousel-control-prev');
                if (prevBtn) prevBtn.click();
            }
        }
    });
}

// Button hover effects
function initButtonEffects() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Page loading animation
function initPageLoadAnimation() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
}

// Utility functions for animations
const BarclayUtils = {
    // Animate counter numbers
    animateCounter: function(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    },
    
    // Add stagger animation to elements
    staggerAnimation: function(elements, delay = 100) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate-fade-in');
            }, index * delay);
        });
    },
    
    // Parallax effect for elements
    parallax: function(element, speed = 0.5) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxed = scrolled * speed;
            element.style.transform = `translateY(${parallaxed}px)`;
        });
    },
    
    // Scroll to top functionality
    scrollToTop: function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

// Export utilities globally
window.BarclayUtils = BarclayUtils;
