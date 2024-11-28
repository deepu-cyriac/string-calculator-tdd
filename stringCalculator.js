class stringCalculator {
    add(numbers) {

        //if input string is empty return 0
        if(!numbers) return 0;

        //regex for newline and comma
        let delimiters = /,|\n/;

        //split the string based on , and \n and return sum
        const numberArray = numbers.split(delimiters).map(num => parseInt(num));
        return numberArray.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = stringCalculator;
