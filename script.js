let display = document.getElementById('display');
let keys = document.querySelectorAll('.keys button');

let calculator = {
    displayValue: '',
    firstOperand: '',
    secondOperand: '',
    operator: '',
    result: ''
};

keys.forEach(key => {
    key.addEventListener('click', () => {
        switch (key.id) {
            case 'clear':
                calculator.displayValue = '';
                calculator.firstOperand = '';
                calculator.secondOperand = '';
                calculator.operator = '';
                calculator.result = '';
                display.value = '';
                break;
            case 'backspace':
                calculator.displayValue = calculator.displayValue.slice(0, -1);
                display.value = calculator.displayValue;
                break;
            case 'divide':
                calculator.operator = key.id;
                calculator.firstOperand = calculator.displayValue;
                calculator.displayValue = '';
                display.value = '';
                break;
            case 'multiply':
                calculator.operator = key.id;
                calculator.firstOperand = calculator.displayValue;
                calculator.displayValue = '';
                display.value = '';
                break;
            case 'subtract':
                calculator.operator = key.id;
                calculator.firstOperand = calculator.displayValue;
                calculator.displayValue = '';
                display.value = '';
                break;
            case 'add':
                calculator.operator = key.id;
                calculator.firstOperand = calculator.displayValue;
                calculator.displayValue = '';
                display.value = '';
                break;
            case 'equals':
                calculator.secondOperand = calculator.displayValue;
                calculator.result = calculate(calculator.firstOperand, calculator.secondOperand, calculator.operator);
                display.value = calculator.result;
                calculator.displayValue = '';
                calculator.firstOperand = '';
                calculator.secondOperand = '';
                calculator.operator = '';
                break;
            default:
                calculator.displayValue += key.textContent;
                display.value = calculator.displayValue;
        }
    });
});

function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'subtract':
            return a - b;
        case 'add':
            return a + b;
    }
}