function appendValue(val) {
    let result = document.getElementById('result');

    if (val === 'sin' || val === 'cos' || val === 'tan') {
        result.value += val + '(';
    } else if (val === 'sqrt') {
        result.value += 'sqrt(';
    } else if (val === 'log') {
        result.value += 'log(';
    } else {
        result.value += val;
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let val = document.getElementById('result').value;
    document.getElementById('result').value = val.slice(0, -1);
}

function calculate() {
    try {
        let expression = document.getElementById('result').value;

        expression = expression.replace(/sin\(([^)]+)\)/g, (_, x) => `Math.sin(${x} * Math.PI / 180)`);
        expression = expression.replace(/cos\(([^)]+)\)/g, (_, x) => `Math.cos(${x} * Math.PI / 180)`);
        expression = expression.replace(/tan\(([^)]+)\)/g, (_, x) => `Math.tan(${x} * Math.PI / 180)`);
        expression = expression.replace(/sqrt\(([^)]+)\)/g, (_, x) => `Math.sqrt(${x})`);
        expression = expression.replace(/log\(([^)]+)\)/g, (_, x) => `Math.log(${x})`);

        document.getElementById('result').value = eval(expression);
    } catch (e) {
        alert('Invalid Expression');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('mode-toggle').addEventListener('click', function () {
        let calculator = document.querySelector('.calculator');
        let scientificButtons = document.querySelector('.scientific');
        let modeButton = document.getElementById('mode-toggle');

        calculator.classList.toggle('scientific-mode');

        if (calculator.classList.contains('scientific-mode')) {
            scientificButtons.style.display = 'grid';
            modeButton.textContent = 'Basic Mode';
        } else {
            scientificButtons.style.display = 'none';
            modeButton.textContent = 'Scientific Mode';
        }
    });

    document.getElementById('theme-toggle').addEventListener('click', function () {
        let body = document.body;
        let themeButton = document.getElementById('theme-toggle');

        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeButton.textContent = 'Light Mode';
        } else {
            themeButton.textContent = 'Dark Mode';
        }
    });
});
