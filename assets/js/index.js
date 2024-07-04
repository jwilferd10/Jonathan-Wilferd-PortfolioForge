import { toggleButtonEventListener } from './themeToggle.js';
import { toggleMobileNav, navigationOutsideClickListener } from './hamburger.js';
import { handleGifPlayer } from './display-projects.js';

// Initialize the event listener
document.addEventListener('DOMContentLoaded', () => {
    // Toggles mobile navigation
    toggleMobileNav();
    
    // Closes mobile navigation when clicking outside hamburger or mobile nav
    navigationOutsideClickListener();

    // Toggles theme
    toggleButtonEventListener();

    // Handle Project GIF video
    handleGifPlayer();

});