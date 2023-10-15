// querySelectors
const displayCard = document.querySelector('.displayCard');
const projectImg = displayCard.querySelector('.projectImg');
const projectGif = displayCard.querySelector('.projectGif');

// addEventListeners for mouseover and mouseout

// Play the gif on mouseover
displayCard.addEventListener('mouseover', () => {
    projectImg.style.display = 'none';
    projectGif.style.display = 'block';
    projectGif.src = 'animated.gif';
});

// Pause the GIF on moouseout
displayCard.addEventListener('mouseout', () => {
    projectGif.style.display = 'none';
    projectImg.style.display = 'block';
    projectGif.src = '';
});