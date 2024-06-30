const currentThemeEl = document.getElementById('currentTheme');
const toggleButtonEl = document.querySelectorAll('.toggleButton');
const emojiToggleEl = document.querySelector('.emojiToggle');

// Toggle between light and dark themes 
const toggleTheme = () => {
    let currentPath = window.location.pathname
    let switchColors;

    if (currentPath.includes('/html/')) {
        // Current path is within the html directory
        switchColors = currentThemeEl.getAttribute('href').includes('blue-silver.css') ? '../assets/css/dark-mode.css' : '../assets/css/blue-silver.css';
    } else {
        // Current path is the root path
        switchColors = currentThemeEl.getAttribute('href').includes('blue-silver.css') ? 'assets/css/dark-mode.css' : 'assets/css/blue-silver.css';
    }

    // Change the href attribute to switch the CSS file
    currentThemeEl.setAttribute('href', switchColors);

    // Toggle the emoji icon
    let switchEmoji = emojiToggleEl.getAttribute('class').includes('fa-sun') ? 'emojiToggle fas fa-moon fa-2x' : 'emojiToggle fas fa-sun fa-2x';
    emojiToggleEl.setAttribute('class', switchEmoji);
}

toggleButtonEl.forEach(button => {
    button.addEventListener('click', toggleTheme); 
});