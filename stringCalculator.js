class stringCalculator {
    add(numbers) {

        //if input string is empty return 0
        if(!numbers) return 0;

        //below code will work for single number as well as for 2 numbers test case
        const numberArray = numbers.split(',').map(num => parseInt(num));
        return numberArray.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = stringCalculator;
