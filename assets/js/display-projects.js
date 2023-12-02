// Get all .displayCard elements on the page
const displayCards = document.querySelectorAll('.displayCard');

const preloadGif = (gifSrc, callback) => {
    const img = new Image();
    img.onload = callback;
    img.src = gifSrc;
};

// Iterate through each card
displayCards.forEach((displayCard) => {
    const projectGif = displayCard.querySelector('.projectGif');
    
    // Store the initial GIF source for each card
    const initialGifSrc = projectGif.src;

    // Set a variable to track if the GIF is loaded
    let gifLoaded = false;

    // Preload the GIF
    preloadGif(initialGifSrc, () => {
        gifLoaded = true;
    });

    // Play the gif on mouseover
    displayCard.addEventListener('mouseenter', () => {
        // Check if the GIF is already loaded, switch on if true
        if (gifLoaded) {
            projectGif.src = initialGifSrc;
        } 
    });
});