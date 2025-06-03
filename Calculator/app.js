document.addEventListener('DOMContentLoaded', () => {
    const displayScreen = document.getElementById('displayScreen');
    const buttonsGrid = document.querySelector('.buttons-grid');

    let currentInput = '';
    let operator = null;
    let previousOperand = null;

    buttonsGrid.addEventListener('click', (event) => {
        const clickedButton = event.target;

        if (!clickedButton.matches('input[type="button"]') && !clickedButton.matches('button')) {
            return;
        }

        const buttonValue = clickedButton.value;

        if (buttonValue === 'AC') {
            currentInput = '';
            operator = null;
            previousOperand = null;
            displayScreen.value = '';
        } else if (buttonValue === 'DE') {
            currentInput = currentInput.slice(0, -1);
            displayScreen.value = currentInput;
        } else if (buttonValue === '=') {
            if (operator && previousOperand !== null && currentInput !== '') {
                currentInput = String(evaluate(previousOperand, currentInput, operator));
                displayScreen.value = currentInput;
                operator = null;
                previousOperand = null;
            }
        } else if (['+', '-', '×', '÷', '%'].includes(buttonValue)) {
            if (currentInput === '' && previousOperand === null) {
                return;
            }
            if (currentInput !== '') {
                previousOperand = currentInput;
            }
            operator = buttonValue;
            currentInput = '';
        } else {
            if (buttonValue === '.' && currentInput.includes('.')) {
                return;
            }
            currentInput += buttonValue;
            displayScreen.value = currentInput;
        }
    });

    function evaluate(operand1, operand2, op) {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);

        if (isNaN(num1) || isNaN(num2)) {
            return 'Error';
        }

        switch (op) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '×':
                return num1 * num2;
            case '÷':
                if (num2 === 0) {
                    return 'Error: Div by 0';
                }
                return num1 / num2;
            case '%':
                return num1 % num2;
            default:
                return '';
        }
    }
});