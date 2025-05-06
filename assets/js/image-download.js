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
    
    // Modify the overlay to only show download button
    document.querySelectorAll('.image-card').forEach(card => {
        // Get overlay
        const overlay = card.querySelector('.overlay');
        if (overlay) {
            // Hide photographer info and view button
            const photographerInfo = overlay.querySelector('.flex.items-center');
            const viewBtn = overlay.querySelector('a');
            
            if (photographerInfo) {
                photographerInfo.style.display = 'none';
            }
            
            if (viewBtn) {
                viewBtn.style.display = 'none';
            }
            
            // Center download button
            const actionButtons = overlay.querySelector('.flex.space-x-2');
            if (actionButtons) {
                actionButtons.style.marginTop = '0';
                
                // Make sure the overlay is centered
                overlay.style.display = 'flex';
                overlay.style.flexDirection = 'column';
                overlay.style.justifyContent = 'center';
                overlay.style.alignItems = 'center';
                
                // Make download button more prominent
                const downloadBtn = actionButtons.querySelector('button');
                if (downloadBtn) {
                    downloadBtn.style.padding = '0.5rem 1rem';
                    downloadBtn.style.fontSize = '0.875rem';
                }
            }
        }
    });
}

// Execute when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateImageCardsFunctionality();
});
