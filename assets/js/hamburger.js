// Hamburger Functionality
const hamburgerEl = document.getElementById('hamburger');
const mobileNavEl = document.getElementById('mobileNav');
const headerEl = document.getElementById('headerSection');
const nameHeaderEl = document.getElementById('nameHeader');

hamburgerEl.addEventListener('click', () => {
    if (mobileNavEl.style.display === 'block') {
        mobileNavEl.style.display = 'none';
        hamburgerEl.style.color = '#333333'
        headerEl.style.backgroundColor = '#2196f3';
        nameHeaderEl.style.backgroundColor = '#333333'
    } else {
        mobileNavEl.style.display = 'block';
        hamburgerEl.style.color = '#c0c0c0';
        headerEl.style.backgroundColor = '#333333';
        nameHeaderEl.style.backgroundColor = '#195687';
    }
})