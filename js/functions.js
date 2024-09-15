document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        handleInput(value);
    });
});

function handleInput(value) {
    const display = document.querySelector('.display');

    if (display.value === "Error") {
        // Clear the display if there's an error message
        display.value = '';
    }

    if (value === 'AC') {
        clearDisplay();
    } else if (value === '=') {
        calculateResult();
    } else if (value === '+/-') {
        toggleSign();
    } else if (value === '⌫') {
        removeLastCharacter();
    } else if (value === '%') {
        handlePercentage();
    } else {
        appendToDisplay(value);
    }
}

function clearDisplay() {
    document.querySelector('.display').value = '';
}

function removeLastCharacter() {
    const display = document.querySelector('.display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.querySelector('.display').value += value;
}

function calculateResult() {
    let expression = document.querySelector('.display').value;

    // Replace symbols with JavaScript operators
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');

    try {
        let result = eval(expression);
        document.querySelector('.display').value = result;
    } catch (error) {
        document.querySelector('.display').value = "Error";
    }
}

function toggleSign() {
    const display = document.querySelector('.display');
    if (display.value) {
        display.value = display.value.startsWith('-') 
            ? display.value.substring(1)
            : '-' + display.value;
    }
}

function handlePercentage() {
    const display = document.querySelector('.display');
    if (display.value) {
        // Convert the current value to a percentage
        display.value = (parseFloat(display.value) / 100).toString();
    }
}
