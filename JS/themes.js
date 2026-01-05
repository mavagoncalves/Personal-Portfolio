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