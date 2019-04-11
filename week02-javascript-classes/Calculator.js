const display = require('./utilities').display;
//const {display} = import('./utilities'); //this doesn't work in Node.js yet

class Calculator {
    constructor() {
        this.operand01 = 2;
        this.operand02 = 12;
    }
}

const calculator = new Calculator();
display(calculator.operand01);
