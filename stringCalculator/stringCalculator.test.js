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

    //test to check if code supports different delimiters
    test('should provide support for different delimiters - specified at begining of input', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    //test to check if code handles negative numbers
    test('should throw an exception if negative numbers are present', () => {
        expect(() => calculator.add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
    });

    //test to check if code handles numbers greater than 1000
    test('if numbers greater than 1000, ignore them', () => {
        expect(calculator.add("2,1001")).toBe(2);
    })

    //test to check if code handles multi character delimiter
    test('should handle a custom delimiter of any length', () => {
        expect(calculator.add("//[***]\n1***2***3")).toBe(6);
    });

    //test to check if code handles multiple single-character delimiters
    test('should handle multiple single-character delimiters', () => {
        expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
    });

    //test to check if code handles multiple multi-character delimiters
    test('should handle multiple multi-character delimiters', () => {
        expect(calculator.add("//[***][%%]\n1***2%%3")).toBe(6);
    });
})