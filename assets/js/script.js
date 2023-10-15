// Get all .displayCard elements on the page
const displayCards = document.querySelectorAll('.displayCard');

const preloadGif = (gifSrc, callback) => {
    const img = new Image();
    img.onload = callback;
    img.src = gifSrc;
};

// Iterate through each card
displayCards.forEach((displayCard) => {
    const projectImg = displayCard.querySelector('.projectImg');
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
    displayCard.addEventListener('mouseover', () => {
        projectImg.style.display = 'none';
        projectGif.style.display = 'block';

        // Check if the GIF is already loaded, switch on if true
        if (gifLoaded) {
            projectGif.src = initialGifSrc;
        } 
        // else {
        //     // Clear the src while it's loading
        //     projectGif.src = '';
        // }
    });

    // Pause and reset the GIF on mouseout
    displayCard.addEventListener('mouseout', () => {
        projectGif.style.display = 'none';
        projectImg.style.display = 'block';
        // projectGif.src = '';
    });
});
