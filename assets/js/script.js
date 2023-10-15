// Get all .displayCard elements on the page
const displayCards = document.querySelectorAll('.displayCard');

// Iterate through each card
displayCards.forEach((displayCard) => {
    const projectImg = displayCard.querySelector('.projectImg');
    const projectGif = displayCard.querySelector('.projectGif');
    // Store the initial GIF source for each card
    const initialGifSrc = projectGif.src;

    // Play the gif on mouseover
    displayCard.addEventListener('mouseover', () => {
        projectImg.style.display = 'none';
        projectGif.style.display = 'block';
        projectGif.src = initialGifSrc;
    });

    // Pause and reset the GIF on mouseout
    displayCard.addEventListener('mouseout', () => {
        projectGif.style.display = 'none';
        projectImg.style.display = 'block';
        projectGif.src = '';
    });
});
