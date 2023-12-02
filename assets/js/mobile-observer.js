// Reusable blur effect that's called within handleInersection
const applyBlurEffect = (card, blurIntensity) => {
    const projectImgEls = card.querySelectorAll('.projectImg');
    if (projectImgEls.length > 0) {
        projectImgEls.forEach(img => {
            img.style.filter = `blur(${blurIntensity}px)`;
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Get all the displayCard elements 
    const displayCards = document.querySelectorAll('.displayCard');

    // Check if the screen width is somewhere around mobile widths
    const isMobileWidth = window.innerWidth < 768;

    if (isMobileWidth) {
        // Set up the intersection observer options
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1,
        }

        const handleIntersection = (entries, observer) => {
            entries.forEach(function (entry) {
                const projectCard = entry.target;
                if (entry.isIntersecting) {
                    // Apply the mobile styles directly when the card enters the viewport
                    projectCard.style.backgroundColor = 'var(--primDark)';
                    projectCard.style.transform = 'translate(0px, -10px)';
                    applyBlurEffect(projectCard, 0);
                } else {
                    projectCard.style.backgroundColor = '';
                    projectCard.style.transform = '';
                    applyBlurEffect(projectCard, 2);
                }
            });
        };

        // Create an Intersection Observer with the callback and options
        const mobileObserver = new IntersectionObserver(handleIntersection, options);

        // Observe each displayCard
        displayCards.forEach(function (card) {
            mobileObserver.observe(card);
        });
    };
});