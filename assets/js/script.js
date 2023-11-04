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

// Select all elements with the 'scroll' class and attach an event listener for each of them.
document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        // Prevent the default jump behavior
        event.preventDefault();

        // Get the ID of the target section from the 'href' attribute of the link clicked
        const targetID = this.getAttribute('href');

        // Find the target section in the document using that ID
        const targetSection = document.querySelector(targetID);

        if (targetSection) {
            // If the target section exists, get the distance
            const offsetTop = targetSection.offsetTop;

            // Smoothly scroll to the targetSection
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Define the HTML elements to be animated
const aboutDiv1El = document.getElementById('aboutDiv1');
const achievementsEl = document.getElementById('achievements');
const aboutDiv2El = document.getElementById('aboutDiv2');

// Set the options for the Intersection Observer 
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

// Create a callback function to observe the HTML elements
const observerCallback = (entries, observer) => {
    // forEach entries run an if statement to see if isIntersecting truthy
    entries.forEach(entry => {
        // If the section is truthy, apply the CSS animations
        if (entry.isIntersecting) {
            // Remove the hidden class from each element
            aboutDiv1El.classList.remove('hidden');
            achievementsEl.classList.remove('hidden');
            aboutDiv2El.classList.remove('hidden');

            // Apply animations when in view
            aboutDiv1El.style.animation = 'fadeIntoView 1.8s forwards';
            achievementsEl.style.animation = 'slideBottomToTop 1.8s forwards';
            aboutDiv2El.style.animation = 'slideRightToLeft 1.8s forwards';

            // Use unobserve to prevent re-triggering
            observer.unobserve(entry.target);
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(observerCallback, options);

// Observe the about section
const aboutSectionEl = document.getElementById('aboutSection');
observer.observe(aboutSectionEl);