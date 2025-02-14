let themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5'];
let currentTheme = 0;

// Theme Toggle Functionality
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.remove(themes[currentTheme]);
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.classList.add(themes[currentTheme]);

    // Change button icon based on theme
    let icons = ["🌙", "☀️", "🌊", "🔥", "✨"];
    document.getElementById('theme-toggle').innerText = icons[currentTheme];
});

// Calculation Handling
document.getElementById('calc-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        let input = event.target.value.trim();
        if (input) {
            try {
                let result = math.evaluate(input); // Using Math.js for safer evaluation
                document.getElementById('result').innerText = `= ${result}`;
            } catch {
                document.getElementById('result').innerText = 'Error';
            }
        }
    }
});

// Set initial theme
document.body.classList.add(themes[currentTheme]);
document.getElementById('theme-toggle').innerText = "🌙";
