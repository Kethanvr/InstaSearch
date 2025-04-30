/**
 * InstaSearch - Main JavaScript
 */

// DOM Elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
const backToTopButton = document.getElementById('back-to-top');
const heroSearchInput = document.getElementById('hero-search-input');

// Toggle Mobile Menu Function
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

// Dark Mode Toggle Function
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Check Scroll Position for Back-to-Top Button
function checkScrollPosition() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
}

// Smooth Scrolling for Anchor Links
function smoothScrollToAnchor(e) {
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
}

// Initialize Dark Mode Based on Preference
function initDarkMode() {
    if (localStorage.getItem('darkMode') === 'dark' ||
        (localStorage.getItem('darkMode') === null && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
}

// Add Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode
    initDarkMode();
    
    // Mobile menu toggle
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Dark mode toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    if (mobileDarkModeToggle) {
        mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Back to top button
    if (backToTopButton) {
        backToTopButton.addEventListener('click', scrollToTop);
        window.addEventListener('scroll', checkScrollPosition);
    }
    
    // Focus the hero search input if it exists
    if (heroSearchInput) {
        heroSearchInput.focus();
    }
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScrollToAnchor);
    });
    
    // Animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Add ripple effect to buttons
    document.querySelectorAll('.btn-ripple').forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
