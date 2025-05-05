/**
 * InstaSearch - Results Page JavaScript
 * This file handles all functionality specific to the results page
 */

// Import utility functions if needed
// import { formatNumber, debounce } from '../utils/helpers.js';

/**
 * Results Module - Manages search result functionality
 */
const ResultsModule = (function() {
    // Configuration
    const API_KEY = 'ggbXfyFRtwZKhpPldtEGvhBQ6OqbVNCa-fkjJYTk1eY';
    const BASE_URL = 'https://api.unsplash.com/search/photos';
    
    // DOM Elements
    const elements = {
        gallery: document.getElementById('gallery'),
        loadMoreBtn: document.getElementById('load-more-btn'),
        searchResultsCount: document.getElementById('search-results-count'),
        searchQuery: document.getElementById('search-query'),
        searchForm: document.getElementById('navbar-search-form'),
        searchInput: document.getElementById('navbar-search-input'),
        loadingIndicator: document.getElementById('loading-indicator'),
        errorMessage: document.getElementById('error-message'),
        filtersSidebar: document.getElementById('filters-sidebar'),
        mobileFiltersToggle: document.getElementById('mobile-filter-toggle'),
        closeFiltersBtn: document.getElementById('close-filters'),
        filterOverlay: document.getElementById('filter-overlay'),
        orientationFilters: document.querySelectorAll('input[name="orientation"]'),
        colorFilters: document.querySelectorAll('input[name="color"]'),
        sortOptions: document.querySelectorAll('input[name="sort"]'),
        clearFiltersBtn: document.getElementById('clear-filters')
    };
    
    // State
    let state = {
        currentPage: 1,
        currentQuery: '',
        totalResults: 0,
        isLoading: false,
        filters: {
            orientation: '',
            color: '',
            orderBy: 'relevant'
        }
    };
    
    /**
     * Parse URL parameters to get the search query
     */
    function getSearchQueryFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('query');
    }
    
    /**
     * Format number with commas
     */
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    /**
     * Show loading indicator
     */
    function showLoading() {
        state.isLoading = true;
        if (elements.loadingIndicator) {
            elements.loadingIndicator.classList.remove('hidden');
        }
    }
    
    /**
     * Hide loading indicator
     */
    function hideLoading() {
        state.isLoading = false;
        if (elements.loadingIndicator) {
            elements.loadingIndicator.classList.add('hidden');
        }
    }
    
    /**
     * Show error message
     */
    function showError(message) {
        if (elements.errorMessage) {
            elements.errorMessage.textContent = message;
            elements.errorMessage.classList.remove('hidden');
        }
    }
    
    /**
     * Hide error message
     */
    function hideError() {
        if (elements.errorMessage) {
            elements.errorMessage.classList.add('hidden');
        }
    }
    
    /**
     * Update results count and search query display
     */
    function updateResultsInfo(count, query) {
        if (elements.searchResultsCount) {
            elements.searchResultsCount.textContent = formatNumber(count);
        }
        
        if (elements.searchQuery) {
            elements.searchQuery.textContent = query;
        }
    }
    
    /**
     * Fetch images from Unsplash API
     */
    async function fetchImages(query, page = 1) {
        if (!query) return null;
        
        showLoading();
        hideError();
        
        try {
            // Build URL with filters
            let url = `${BASE_URL}?client_id=${API_KEY}&query=${query}&page=${page}&per_page=12`;
            
            // Add orientation filter if selected
            if (state.filters.orientation) {
                url += `&orientation=${state.filters.orientation}`;
            }
            
            // Add color filter if selected
            if (state.filters.color) {
                url += `&color=${state.filters.color}`;
            }
            
            // Add order by filter
            url += `&order_by=${state.filters.orderBy}`;
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();
            state.totalResults = data.total;
            
            updateResultsInfo(state.totalResults, query);
            
            return data.results;
        } catch (error) {
            console.error('Error fetching images:', error);
            showError('Failed to load images. Please try again later.');
            return null;
        } finally {
            hideLoading();
        }
    }
    
    /**
     * Download an image
     */
    function downloadImage(url, filename) {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = filename || 'image.jpg';
                link.click();
                URL.revokeObjectURL(link.href);
            })
            .catch(error => {
                console.error('Download error:', error);
                alert('Failed to download the image. Please try again.');
            });
    }
    
    /**
     * Create image card element
     */
    function createImageCard(image) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-card group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300';

        // Image element
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.regular;
        imgElement.alt = image.alt_description || image.description || 'Unsplash image';
        imgElement.className = 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105';
        // Add lazy loading for performance
        imgElement.loading = 'lazy';

        // Overlay with image info
        const overlay = document.createElement('div');
        overlay.className = 'absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4';

        // Photographer info
        const photographerInfo = document.createElement('div');
        photographerInfo.className = 'flex items-center mb-3';
        
        const photographerAvatar = document.createElement('img');
        photographerAvatar.src = image.user.profile_image.small;
        photographerAvatar.alt = image.user.name;
        photographerAvatar.className = 'w-8 h-8 rounded-full mr-2 border border-white';
        
        const photographerName = document.createElement('span');
        photographerName.textContent = image.user.name;
        photographerName.className = 'text-white text-sm font-medium';
        
        photographerInfo.appendChild(photographerAvatar);
        photographerInfo.appendChild(photographerName);

        // Action buttons
        const actionButtons = document.createElement('div');
        actionButtons.className = 'flex space-x-2 mt-2';
        
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'bg-white/90 hover:bg-white text-gray-900 rounded-lg px-3 py-1.5 text-xs font-medium flex items-center transition-colors btn-ripple';
        downloadBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download
        `;
        
        // Add click event to download the image
        downloadBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent propagation to parent elements
            downloadImage(image.urls.full, `${image.slug}.jpg`);
        });
        
        const viewBtn = document.createElement('a');
        viewBtn.href = image.links.html;
        viewBtn.target = '_blank';
        viewBtn.rel = 'noopener noreferrer';
        viewBtn.className = 'bg-primary-600/90 hover:bg-primary-600 text-white rounded-lg px-3 py-1.5 text-xs font-medium flex items-center transition-colors';
        viewBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            View on Unsplash
        `;
        
        // Append buttons to action container
        actionButtons.appendChild(downloadBtn);
        actionButtons.appendChild(viewBtn);

        // Append elements to overlay
        overlay.appendChild(photographerInfo);
        overlay.appendChild(actionButtons);

        // Append image and overlay to container
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(overlay);

        return imageContainer;
    }
    
    /**
     * Display search results
     */
    async function displaySearchResults(query, page, append = false) {
        if (!elements.gallery) return;
        
        state.currentQuery = query;
        
        const images = await fetchImages(query, page);
        
        if (!images || images.length === 0) {
            if (!append) {
                elements.gallery.innerHTML = `
                    <div class="col-span-full py-16 text-center">
                        <div class="mx-auto w-24 h-24 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full text-gray-400 dark:text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-300">No results found</h3>
                        <p class="text-gray-500 dark:text-gray-400 mt-2">Try different keywords or filters</p>
                    </div>
                `;
            }
            
            if (elements.loadMoreBtn) {
                elements.loadMoreBtn.classList.add('hidden');
            }
            
            return;
        }
        
        if (!append) {
            elements.gallery.innerHTML = '';
        }
        
        images.forEach(image => {
            const card = createImageCard(image);
            elements.gallery.appendChild(card);
        });
        
        if (elements.loadMoreBtn) {
            if (state.currentPage * 12 < state.totalResults) {
                elements.loadMoreBtn.classList.remove('hidden');
            } else {
                elements.loadMoreBtn.classList.add('hidden');
            }
        }
    }
    
    /**
     * Load more results
     */
    function loadMoreResults() {
        state.currentPage++;
        displaySearchResults(state.currentQuery, state.currentPage, true);
    }
    
    /**
     * Toggle filters sidebar
     */
    function toggleFiltersSidebar() {
        if (elements.filtersSidebar) {
            elements.filtersSidebar.classList.toggle('open');
            
            if (elements.filterOverlay) {
                elements.filterOverlay.classList.toggle('hidden');
            }
        }
    }
    
    /**
     * Close filters sidebar
     */
    function closeFiltersSidebar() {
        if (elements.filtersSidebar) {
            elements.filtersSidebar.classList.remove('open');
            
            if (elements.filterOverlay) {
                elements.filterOverlay.classList.add('hidden');
            }
        }
    }
    
    /**
     * Apply filters
     */
    function applyFilters() {
        // Reset page
        state.currentPage = 1;
        
        // Apply filters
        displaySearchResults(state.currentQuery, state.currentPage);
        
        // Close sidebar on mobile
        if (window.innerWidth < 768) {
            closeFiltersSidebar();
        }
    }
    
    /**
     * Clear all filters
     */
    function clearFilters() {
        // Reset filters
        state.filters.orientation = '';
        state.filters.color = '';
        state.filters.orderBy = 'relevant';
        
        // Reset radio buttons
        elements.orientationFilters.forEach(radio => {
            radio.checked = radio.value === '';
        });
        
        elements.colorFilters.forEach(radio => {
            radio.checked = radio.value === '';
        });
        
        elements.sortOptions.forEach(radio => {
            radio.checked = radio.value === 'relevant';
        });
        
        // Apply filters
        applyFilters();
    }
    
    /**
     * Initialize filters
     */
    function initFilters() {
        // Orientation filters
        elements.orientationFilters.forEach(radio => {
            radio.addEventListener('change', () => {
                state.filters.orientation = radio.value;
                applyFilters();
            });
        });
        
        // Color filters
        elements.colorFilters.forEach(radio => {
            radio.addEventListener('change', () => {
                state.filters.color = radio.value;
                applyFilters();
            });
        });
        
        // Sort options
        elements.sortOptions.forEach(radio => {
            radio.addEventListener('change', () => {
                state.filters.orderBy = radio.value;
                applyFilters();
            });
        });
        
        // Clear filters
        if (elements.clearFiltersBtn) {
            elements.clearFiltersBtn.addEventListener('click', clearFilters);
        }
    }
    
    /**
     * Initialize the module
     */
    function init() {
        // Get search query from URL
        const query = getSearchQueryFromURL();
        
        if (query) {
            // Pre-fill search input with query
            if (elements.searchInput) {
                elements.searchInput.value = query;
            }
            
            // Display search results
            displaySearchResults(query, state.currentPage);
        }
        
        // Event listeners
        
        // Load more button
        if (elements.loadMoreBtn) {
            elements.loadMoreBtn.addEventListener('click', loadMoreResults);
        }
        
        // Mobile filters toggle
        if (elements.mobileFiltersToggle) {
            elements.mobileFiltersToggle.addEventListener('click', toggleFiltersSidebar);
        }
        
        // Close filters button
        if (elements.closeFiltersBtn) {
            elements.closeFiltersBtn.addEventListener('click', closeFiltersSidebar);
        }
        
        // Filter overlay
        if (elements.filterOverlay) {
            elements.filterOverlay.addEventListener('click', closeFiltersSidebar);
        }
        
        // Initialize filters
        initFilters();
    }
    
    // Return public methods and properties
    return {
        init: init
    };
})();

// Initialize the Results module when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    ResultsModule.init();
});
