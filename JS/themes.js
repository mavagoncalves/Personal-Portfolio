document.addEventListener('DOMContentLoaded', () => {

    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    const applyTheme = (theme) => {
        // remove all themes 
        body.classList.remove('dark', 'blue');
        
        // Add new theme if not default light
        if (theme !== 'light') {
            body.classList.add(`${theme}-theme`);
        }
    };

    const saveTheme = (theme) => {
            const expiration = 60 * 60 * 24 * 30;
            document.cookie = `selectedTheme=${theme}; max-age=${expiration}; path=/`;
        };

    const loadTheme = () => {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith('selectedTheme=')) {
                    return cookie.substring('selectedTheme='.length);
                }
            }
            return 'light'; // default
        };
    
    // BUTTONS
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            applyTheme(theme);
            saveTheme(theme);
        });
    });

});