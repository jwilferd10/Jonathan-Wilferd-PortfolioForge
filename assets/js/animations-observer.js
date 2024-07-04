// Define the HTML elements to be animated
const aboutSectionIntroEl = document.getElementById('aboutSectionIntro');
const achievementsEl = document.getElementById('achievements');
const aboutSectionTextEl = document.getElementById('aboutSectionText');
const skillsListEl = document.getElementById('skillsList');
const skillsNotificationEl = document.getElementById('skillsNotification');
const skillsListWrapperEl = document.getElementById('skillsListWrapper');

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
            if (entry.target.id === 'aboutSection') {
                // Remove the hidden class from each element
                aboutSectionIntroEl.classList.remove('hidden');
                achievementsEl.classList.remove('hidden');
                aboutSectionTextEl.classList.remove('hidden');

                // Apply animations when in view
                aboutSectionIntroEl.style.animation = 'fadeIntoView 1.8s forwards';
                achievementsEl.style.animation = 'slideBottomToTop 1.8s forwards';
                aboutSectionTextEl.style.animation = 'slideRightToLeft 1.8s forwards';
            } else if (entry.target.id ==='skillsSection') {
                skillsListWrapperEl.classList.remove('hidden');
                // Apply animations to skillsSection 
                skillsListEl.style.animation = 'slideRightToLeft 2s forwards';
                skillsNotificationEl.style.animation = 'fadeIntoView 5s forwards';
            }

            // Use unobserve to prevent re-triggering
            observer.unobserve(entry.target);
        }
    });
};

// Initialize and start observing
const initializeObservers = () => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(observerCallback, options);

    // Observe the about section
    const aboutSectionEl = document.getElementById('aboutSection');
    const skillsSectionEl = document.getElementById('skillsSection');
    observer.observe(aboutSectionEl);
    observer.observe(skillsSectionEl);
};

export { initializeObservers };