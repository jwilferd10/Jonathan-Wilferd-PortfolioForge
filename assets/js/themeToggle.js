const currentThemeEl = document.getElementById('currentTheme');
const toggleButtonEl = document.getElementById('toggleButton');

const toggleTheme = () => {
    // Toggle between light and dark themes 
    let switchColors = currentThemeEl.getAttribute('href').includes('blue-silver.css') ? 'assets/css/dark-mode.css' : 'assets/css/blue-silver.css';

    // Change the href attribute to switch the CSS file
    currentThemeEl.setAttribute('href', switchColors);
}

toggleButtonEl.addEventListener('click', toggleTheme); 