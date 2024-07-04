import { toggleButtonEventListener } from './themeToggle.js';
import { toggleMobileNav, navigationOutsideClickListener } from './hamburger.js';

// Initialize the event listener
document.addEventListener('DOMContentLoaded', () => {
    // Toggles mobile navigation
    toggleMobileNav();
    
    // Closes mobile navigation when clicking outside hamburger or mobile nav
    navigationOutsideClickListener();

    // Toggles theme
    toggleButtonEventListener();
});