const toggleTheme = () => {
    const currentTheme = document.getElementById('lightMode').getAttribute('href');

    // Toggle between light and dark themes 
    let newTheme = currentTheme.includes('blue-silver.css') ? 'assets/css/dark-mode.css' : 'assets/css/blue-silver.css';

    // Change the href attribute to switch the CSS file
    document.getElementById('lightMode').setAttribute('href', newTheme);
}

var toggleButtonEl = document.getElementById('toggleButton');

toggleButtonEl.addEventListener('click', toggleTheme); 