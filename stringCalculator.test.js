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

    //test to check if the number is returned if only one number is provided as input
    test('should return the number if one number is provided', () => {
        expect(calculator.add("3")).toBe(3);
    });

    //test to check if sum is returned for two comma-separated numbers
    test('should return sum of two numbers - comma separated', () => {
        expect(calculator.add("2,3")).toBe(5);
    });

    //test to check sum for unknown amount of numbers
    test('should handle an unknown amount of numbers', () => {
        expect(calculator.add("1,2,3,4,5,6")).toBe(21);
    });

    //test to check if code handles new lines between numbers
    test('should handle new lines between numbers', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

})