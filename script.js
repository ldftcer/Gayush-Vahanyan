// Theme switching
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Language switching
function changeLanguage(lang) {
    // Update active button
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang.toUpperCase()) {
            btn.classList.add('active');
        }
    });

    // Update all translatable elements
    document.querySelectorAll(`[data-${lang}]`).forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    localStorage.setItem('language', lang);
}

// Initialize theme and language from localStorage or defaults
document.addEventListener('DOMContentLoaded', () => {
    // Theme initialization
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${savedTheme}-theme`);

    // Language initialization
    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);
}); 