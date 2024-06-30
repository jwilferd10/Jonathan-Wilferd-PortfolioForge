const currentThemeEl = document.getElementById('currentTheme');
const toggleButtonEl = document.querySelectorAll('.toggleButton');
const emojiToggleEl = document.querySelector('.emojiToggle');

// Toggle between light and dark themes 
const toggleTheme = () => {
    let currentPath = window.location.pathname
    let switchColors;

    let initialTheme = currentThemeEl.getAttribute('href').includes('blue-silver.css');

    if (currentPath.includes('/html/')) {
        // Current path is within the html directory
        switchColors = initialTheme ? '../assets/css/dark-mode.css' : '../assets/css/blue-silver.css';
    } else {
        // Current path is the root path
        switchColors = initialTheme ? 'assets/css/dark-mode.css' : 'assets/css/blue-silver.css';
    }

    // Change the href attribute to switch the CSS file
    currentThemeEl.setAttribute('href', switchColors);

    // Toggle the emoji icon
    const emojiClasses = 'emojiToggle fas fa-2x'
    let switchEmoji = emojiToggleEl.getAttribute('class').includes('fa-sun') ? `${emojiClasses} fa-moon` : `${emojiClasses} fa-sun`;
    emojiToggleEl.setAttribute('class', switchEmoji);
}

toggleButtonEl.forEach(button => {
    button.addEventListener('click', toggleTheme); 
});