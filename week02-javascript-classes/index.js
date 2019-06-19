const utils = require('./utilities');
const Calculator = require('./Calculator');
const State = require('./State');

//const {display} = import('./utilities'); //this doesn't work in Node.js yet

const calculator = new Calculator(2, 12);
const st = new State();

utils.divider('Calculator');

utils.display('operand01: ' + calculator.operand01);
utils.display('operand02: ' + calculator.operand02);
utils.display('add: ' + calculator.add());
utils.display('subtract: ' + calculator.subtract());
utils.display('multiply: ' + calculator.multiply());

utils.divider('State');

utils.display('state: ' + st.stateName);
utils.display('capital: ' + st.capital);
utils.display('state and capital: ' + st.getFullName());
