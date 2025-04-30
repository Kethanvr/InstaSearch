/**
 * InstaSearch - Results Page JavaScript
 */

// Configuration
const API_KEY = 'ggbXfyFRtwZKhpPldtEGvhBQ6OqbVNCa-fkjJYTk1eY';
const BASE_URL = 'https://api.unsplash.com/search/photos';

// DOM Elements
const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('load-more-btn');
const searchResultsCount = document.getElementById('search-results-count');
const searchQuery = document.getElementById('search-query');
const searchForm = document.getElementById('navbar-search-form');
const searchInput = document.getElementById('navbar-search-input');
const loadingIndicator = document.getElementById('loading-indicator');
const errorMessage = document.getElementById('error-message');

// State
let currentPage = 1;
let currentQuery = '';
let totalResults = 0;
let isLoading = false;

// Parse URL parameters to get the search query
function getSearchQueryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('query');
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Show loading indicator
function showLoading() {
    isLoading = true;
    if (loadingIndicator) {
        loadingIndicator.classList.remove('hidden');
    }
}

// Hide loading indicator
function hideLoading() {
    isLoading = false;
    if (loadingIndicator) {
        loadingIndicator.classList.remove('hidden');
    }
}

// Show error message
function showError(message) {
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
    }
}

// Hide error message
function hideError() {
    if (errorMessage) {
        errorMessage.classList.add('hidden');
    }
}

// Update results count and search query display
function updateResultsInfo(count, query) {
    if (searchResultsCount) {
        searchResultsCount.textContent = formatNumber(count);
    }
    
    if (searchQuery) {
        searchQuery.textContent = query;
    }
}

// Fetch images from Unsplash API
async function fetchImages(query, page = 1) {
    if (!query) return null;
    
    showLoading();
    hideError();
    
    try {
        const response = await fetch(`${BASE_URL}?client_id=${API_KEY}&query=${query}&page=${page}&per_page=12`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        totalResults = data.total;
        
        updateResultsInfo(totalResults, query);
        
        return data.results;
    } catch (error) {
        console.error('Error fetching images:', error);
        showError('Failed to load images. Please try again later.');
        return null;
    } finally {
        hideLoading();
    }
}

// Download an image
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

// Create image card element
function createImageCard(image) {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-card group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300';

    // Image element
    const imgElement = document.createElement('img');
    imgElement.src = image.urls.regular;
    imgElement.alt = image.alt_description || image.description || 'Unsplash image';
    imgElement.className = 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105';

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
    viewBtn.className = 'bg-primary-500/90 hover:bg-primary-500 text-white rounded-lg px-3 py-1.5 text-xs font-medium flex items-center transition-colors btn-ripple';
    viewBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        View on Unsplash
    `;
    
    actionButtons.appendChild(downloadBtn);
    actionButtons.appendChild(viewBtn);

    // Append elements to overlay
    overlay.appendChild(photographerInfo);
    overlay.appendChild(actionButtons);

    // Append everything to container
    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(overlay);
    
    return imageContainer;
}

// Render images to the gallery
function renderImages(images) {
    if (!images || images.length === 0) {
        if (gallery) {
            gallery.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <div class="mx-auto max-w-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <h3 class="mt-4 text-xl font-semibold text-gray-900 dark:text-white">No images found</h3>
                        <p class="mt-2 text-gray-600 dark:text-gray-400">We couldn't find any images matching your search. Try using different keywords.</p>
                    </div>
                </div>
            `;
        }
        return;
    }

    images.forEach(image => {
        const imageCard = createImageCard(image);
        gallery.appendChild(imageCard);
    });

    // Show or hide load more button based on results
    if (loadMoreBtn) {
        const totalPages = Math.ceil(totalResults / 12);
        if (currentPage < totalPages) {
            loadMoreBtn.classList.remove('hidden');
        } else {
            loadMoreBtn.classList.add('hidden');
        }
    }
}

// Initialize the search results page
async function initialize() {
    currentQuery = getSearchQueryFromURL();
    
    if (!currentQuery) {
        if (gallery) {
            gallery.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">No search query provided</h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-400">Please enter a search term to find images.</p>
                </div>
            `;
        }
        return;
    }

    // Set the search input value to the current query
    if (searchInput) {
        searchInput.value = currentQuery;
    }

    const images = await fetchImages(currentQuery);
    
    if (gallery) {
        gallery.innerHTML = ''; // Clear gallery before adding new images
        renderImages(images);
    }
}

// Event listener for Load More button
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', async () => {
        currentPage++;
        const images = await fetchImages(currentQuery, currentPage);
        renderImages(images);
    });
}

// Event listener for search form submission
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        const input = searchForm.querySelector('input[name="query"]');
        if (!input.value.trim()) {
            e.preventDefault();
        }
    });
}

// Initialize when DOM content is loaded
document.addEventListener('DOMContentLoaded', initialize);
