let display = document.getElementById('display');
let keys = document.querySelectorAll('.keys');

let calculator = {
    displayValue: '',
    firstOperand: '',
    operator: '',
    secondOperand: '',
    result: '',

     init: function() {
      keys.forEach(key => {
          key.addEventListener('click', event => {
              this.handleKeyClick(event.target.id);
          });
      });
  },

    handleKeyClick: function(keyId) {
        switch (keyId) {
            case 'clear':
                this.clear();
                break;
            case 'backspace':
                this.backspace();
                break;
            case 'percent':
                this.percent();
                break;
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
                this.setOperator(keyId);
                break;
            case 'equals':
                this.calculate();
                break;
            default:
                this.appendNumber(keyId);
        }
        this.updateDisplay();
    },

    clear: function() {
        this.displayValue = '';
        this.firstOperand = '';
        this.operator = '';
        this.secondOperand = '';
        this.result = '';
    },

    backspace: function() {
        this.displayValue = this.displayValue.slice(0, -1);
    },

    percent: function() {
        this.displayValue = (parseFloat(this.displayValue) / 100).toString();
    },

    setOperator: function(operator) {
        this.firstOperand = this.displayValue;
        this.operator = operator;
        this.displayValue = '';
    },

    appendNumber: function(number) {
        this.displayValue += number;
    },

    calculate: function() {
        this.secondOperand = this.displayValue;
        switch (this.operator) {
            case 'divide':
                this.result = parseFloat(this.firstOperand) / parseFloat(this.secondOperand);
                break;
            case 'multiply':
                this.result = parseFloat(this.firstOperand) * parseFloat(this.secondOperand);
                break;
            case 'subtract':
                this.result = parseFloat(this.firstOperand) - parseFloat(this.secondOperand);
                break;
            case 'add':
                this.result = parseFloat(this.firstOperand) + parseFloat(this.secondOperand);
                break;
        }
        this.displayValue = this.result.toString();
    },

    updateDisplay: function() {
        display.value = this.displayValue;
    }
};

calculator.init();