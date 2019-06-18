const utils = require('./utilities');
//const {display} = import('./utilities'); //this doesn't work in Node.js yet

class Calculator {
    constructor() {
        this.operand01 = 2;
        this.operand02 = 12;
    }

    add() {
        return this.operand01 + this.operand02;
    }

    subtract() {
        return this.operand01 - this.operand02;
    }
}

const calculator = new Calculator();

Calculator.prototype.multiply = (a, b) => {
    return a * b;
};

utils.divider('Calculator');
utils.display('operand01: ' + calculator.operand01);
utils.display('operand02: ' + calculator.operand02);
utils.display('add: ' + calculator.add());
utils.display('subtract: ' + calculator.subtract());
utils.display(
    'multiply: ' +
        calculator.multiply(calculator.operand01, calculator.operand02)
);

module.exports = Calculator;
