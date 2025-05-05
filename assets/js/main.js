/**
 * InstaSearch - Main JavaScript
 * Common functionality used across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    UI.init();
    DarkMode.init();
    ScrollHandler.init();
    MobileMenu.init();
    SearchHandler.init();
    Animations.init();
    CookieConsent.init();
});

/**
 * UI Module - Handles general UI functionality
 */
const UI = {
    // DOM elements
    elements: {
        backToTopButton: document.getElementById('back-to-top'),
        rippleButtons: document.querySelectorAll('.btn-ripple'),
        loadingSpinner: document.getElementById('global-loading'),
    },
    
    // Initialize UI functionality
    init: function() {
        this.initRippleEffect();
        this.handleResponsiveImages();
    },
    
    // Initialize ripple effect for buttons
    initRippleEffect: function() {
        this.elements.rippleButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Create and animate ripple effect
                const x = e.clientX - e.target.getBoundingClientRect().left;
                const y = e.clientY - e.target.getBoundingClientRect().top;
                
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                ripple.style.width = ripple.style.height = Math.max(button.offsetWidth, button.offsetHeight) + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                button.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    },
    
    // Handle responsive images and lazy loading
    handleResponsiveImages: function() {
        // Use Intersection Observer for lazy loading if needed
        if ('IntersectionObserver' in window) {
            const lazyImages = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        }
    },
    
    // Show loading spinner
    showLoading: function() {
        if (this.elements.loadingSpinner) {
            this.elements.loadingSpinner.classList.remove('hidden');
        }
    },
    
    // Hide loading spinner
    hideLoading: function() {
        if (this.elements.loadingSpinner) {
            this.elements.loadingSpinner.classList.add('hidden');
        }
    }
};

/**
 * Dark Mode Module - Handles dark mode toggle functionality
 */
const DarkMode = {
    // DOM elements
    elements: {
        darkModeToggle: document.getElementById('dark-mode-toggle'),
        mobileDarkModeToggle: document.getElementById('mobile-dark-mode-toggle'),
    },
    
    // Initialize dark mode
    init: function() {
        this.checkDarkModePreference();
        this.setupEventListeners();
    },
    
    // Check for dark mode preference
    checkDarkModePreference: function() {
        if (localStorage.getItem('darkMode') === 'dark' ||
            (localStorage.getItem('darkMode') === null && 
             window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
    },
    
    // Set up event listeners for dark mode toggle
    setupEventListeners: function() {
        // Desktop dark mode toggle
        if (this.elements.darkModeToggle) {
            this.elements.darkModeToggle.addEventListener('click', this.toggle);
        }
        
        // Mobile dark mode toggle
        if (this.elements.mobileDarkModeToggle) {
            this.elements.mobileDarkModeToggle.addEventListener('click', this.toggle);
        }
    },
    
    // Toggle dark mode
    toggle: function() {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
};

/**
 * Scroll Handler Module - Handles scroll-related functionality
 */
const ScrollHandler = {
    // DOM elements
    elements: {
        backToTopButton: document.getElementById('back-to-top'),
        anchorLinks: document.querySelectorAll('a[href^="#"]:not([href="#"])'),
        header: document.querySelector('header'),
    },
    
    // Initialize scroll functionality
    init: function() {
        this.setupEventListeners();
        this.handleScrollAnimation();
    },
    
    // Set up event listeners
    setupEventListeners: function() {
        // Back to top button
        if (this.elements.backToTopButton) {
            this.elements.backToTopButton.addEventListener('click', this.scrollToTop);
            window.addEventListener('scroll', this.handleBackToTopVisibility.bind(this));
        }
        
        // Smooth scrolling for anchor links
        this.elements.anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', this.smoothScrollToAnchor);
        });
        
        // Scroll animations
        window.addEventListener('scroll', this.handleScrollAnimation);
    },
    
    // Handle back to top button visibility
    handleBackToTopVisibility: function() {
        if (!this.elements.backToTopButton) return;
        
        if (window.pageYOffset > 300) {
            this.elements.backToTopButton.classList.remove('opacity-0', 'invisible');
            this.elements.backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            this.elements.backToTopButton.classList.remove('opacity-100', 'visible');
            this.elements.backToTopButton.classList.add('opacity-0', 'invisible');
        }
    },
    
    // Scroll to top function
    scrollToTop: function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },
    
    // Smooth scroll to anchor
    smoothScrollToAnchor: function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            const targetElement = document.querySelector(hash);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
                
                // Update URL
                window.history.pushState(null, null, hash);
            }
        }
    },
    
    // Handle scroll animations
    handleScrollAnimation: function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
};

/**
 * Mobile Menu Module - Handles mobile menu functionality
 */
const MobileMenu = {
    // DOM elements
    elements: {
        mobileMenuButton: document.getElementById('mobile-menu-button'),
        mobileMenu: document.getElementById('mobile-menu'),
    },
    
    // Initialize mobile menu
    init: function() {
        this.setupEventListeners();
    },
    
    // Set up event listeners
    setupEventListeners: function() {
        if (this.elements.mobileMenuButton && this.elements.mobileMenu) {
            this.elements.mobileMenuButton.addEventListener('click', this.toggle.bind(this));
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.elements.mobileMenu.contains(e.target) && 
                    !this.elements.mobileMenuButton.contains(e.target) && 
                    !this.elements.mobileMenu.classList.contains('hidden')) {
                    this.elements.mobileMenu.classList.add('hidden');
                }
            });
        }
    },
    
    // Toggle mobile menu
    toggle: function() {
        this.elements.mobileMenu.classList.toggle('hidden');
    }
};

/**
 * Search Handler Module - Handles search functionality
 */
const SearchHandler = {
    // DOM elements
    elements: {
        searchForms: document.querySelectorAll('form[action="results.html"]'),
        heroSearchInput: document.getElementById('hero-search-input'),
    },
    
    // Initialize search functionality
    init: function() {
        this.setupEventListeners();
        this.focusHeroSearch();
    },
    
    // Set up event listeners
    setupEventListeners: function() {
        this.elements.searchForms.forEach(form => {
            form.addEventListener('submit', this.handleSearchSubmit);
        });
    },
    
    // Focus hero search input if it exists
    focusHeroSearch: function() {
        if (this.elements.heroSearchInput && window.innerWidth > 768) {
            setTimeout(() => {
                this.elements.heroSearchInput.focus();
            }, 1000);
        }
    },
    
    // Handle search form submission
    handleSearchSubmit: function(e) {
        const input = this.querySelector('input[name="query"]');
        
        if (!input.value.trim()) {
            e.preventDefault();
            input.focus();
        }
    }
};

/**
 * Animations Module - Handles animations
 */
const Animations = {
    // Initialize animations
    init: function() {
        this.applyEntranceAnimations();
    },
    
    // Apply entrance animations
    applyEntranceAnimations: function() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        // Initial check for elements in viewport
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
};

/**
 * Cookie Consent Module - Handles cookie consent functionality
 */
const CookieConsent = {
    // DOM elements
    elements: {
        cookieConsent: document.getElementById('cookie-consent'),
        acceptCookies: document.getElementById('cookie-accept'),
        declineCookies: document.getElementById('cookie-decline'),
    },
    
    // Initialize cookie consent
    init: function() {
        if (!this.elements.cookieConsent) return;
        
        this.checkConsentStatus();
        this.setupEventListeners();
    },
    
    // Check consent status
    checkConsentStatus: function() {
        // Check if user has already made a cookie choice
        if (!localStorage.getItem('cookieConsent')) {
            // Show the banner after a short delay
            setTimeout(() => {
                this.elements.cookieConsent.classList.remove('translate-y-full');
            }, 1500);
        }
    },
    
    // Set up event listeners
    setupEventListeners: function() {
        // Handle accept button click
        if (this.elements.acceptCookies) {
            this.elements.acceptCookies.addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'accepted');
                this.elements.cookieConsent.classList.add('translate-y-full');
            });
        }
        
        // Handle decline button click
        if (this.elements.declineCookies) {
            this.elements.declineCookies.addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'declined');
                this.elements.cookieConsent.classList.add('translate-y-full');
            });
        }
    }
};
