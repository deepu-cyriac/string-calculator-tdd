const stringCalculator = require('./stringCalculator');

describe('stringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new stringCalculator();
    });

    //test to check if empty string input function will return value 0
    test('should return 0 if string is empty', () => {
        expect(calculator.add("")).toBe(0);
    });

})