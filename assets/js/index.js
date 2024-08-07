import { toggleButtonEventListener } from './themeToggle.js';
import { toggleMobileNav, navigationOutsideClickListener } from './hamburger.js';
import { handleGifPlayer } from './display-projects.js';
import { initializeObservers } from './animations-observer.js';
import { mobileProjectObserver } from './mobile-observer.js';

// Initialize the event listener
document.addEventListener('DOMContentLoaded', () => {
    // Toggles mobile navigation
    toggleMobileNav();
    
    // Closes mobile navigation when clicking outside hamburger or mobile nav
    navigationOutsideClickListener();

    // Toggles theme
    toggleButtonEventListener();

    // Initializes and observes aspects of the portfolio (invokes animation cues)
    initializeObservers();

    // Handle Project GIF video
    handleGifPlayer();

    // Applies styles that showcases projects for mobile devices
    mobileProjectObserver();
});