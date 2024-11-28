const StringCalculator = require('./stringCalculator');

const calculator = new StringCalculator();

//assign custom input here
let input = "1,-2,3,-4";

try {

    const result = calculator.add(input);
    console.log(result);

} catch (error) {

    console.error(error.message);
    
}