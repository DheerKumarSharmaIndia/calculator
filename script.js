let themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5'];
let currentTheme = 0;

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.remove(themes[currentTheme]);
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.classList.add(themes[currentTheme]);
});

document.getElementById('calc-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        try {
            let result = eval(event.target.value);
            document.getElementById('result').innerText = `= ${result}`;
        } catch {
            document.getElementById('result').innerText = 'Error';
        }
    }
});

// Set initial theme
document.body.classList.add(themes[currentTheme]);
