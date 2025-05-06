/**
 * Function to update image cards to only allow download functionality
 * This function will be called when the page loads
 */
function updateImageCardsFunctionality() {
    // Function to handle direct click on image container
    document.addEventListener('click', function(event) {
        // Find if the click is on an image or parent container
        let clickedElement = event.target;
        
        // Check if clicked element is an image or is inside an image container
        const imageCard = clickedElement.closest('.image-card');
        if (imageCard) {
            // If it's an image card and not a button within the card
            if (!clickedElement.closest('button') && !clickedElement.closest('a')) {
                // Prevent default action (such as navigation)
                event.preventDefault();
                event.stopPropagation();
                
                // Find the download button within this card and trigger its click
                const downloadBtn = imageCard.querySelector('button');
                if (downloadBtn) {
                    downloadBtn.click();
                }
            }
        }
    });
}

// Execute when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateImageCardsFunctionality();
});
