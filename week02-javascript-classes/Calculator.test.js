const Calculator = require('./Calculator');

test('proves that multiply returns 24 if passed 2 and 12', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(12, 2)).toBe(24);
});

