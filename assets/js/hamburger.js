// Hamburger Functionality
const hamburgerEl = document.getElementById('hamburger');
const mobileNavEl = document.getElementById('mobileNav');
const headerEl = document.getElementById('headerSection');
const nameHeaderEl = document.getElementById('nameHeader');

// Function that hides the mobile hamburger display
const closeNavigation = () => {
    mobileNavEl.style.display = 'none';
    hamburgerEl.style.color = '#333333'
    headerEl.style.backgroundColor = '';
    nameHeaderEl.style.backgroundColor = '#333333'
}

// Function that showcases the hamburger display
const showNavigation = () => {
    mobileNavEl.style.display = 'block';
    hamburgerEl.style.color = '#c0c0c0';
    headerEl.style.backgroundColor = '#333333';
    nameHeaderEl.style.backgroundColor = '#195687';
}

hamburgerEl.addEventListener('click', () => {
    if (mobileNavEl.style.display === 'block') {
        closeNavigation();
    } else {
        showNavigation();
    }
})