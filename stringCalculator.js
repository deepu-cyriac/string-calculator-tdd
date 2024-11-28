class stringCalculator {
    add(numbers) {

        //if input string is empty return 0
        if(!numbers) return 0;

        //regex for newline and comma
        let delimiters = /,|\n/;

        //below code finds the specified delimiter if present and use it to separate the given numbers
        if(numbers.startsWith("//")) {
            const lastIndex = numbers.indexOf("\n");
            delimiters = new RegExp(numbers.slice(2, lastIndex));
            numbers = numbers.slice(lastIndex + 1);
        }

        //split the string based on specified delimiters or on , and \n and return sum
        const numberArray = numbers.split(delimiters).map(num => parseInt(num));

        //check for negative number
        const negativeNumbers = numberArray.filter(num => num < 0);
        if(negativeNumbers.length) {
            throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
        }

        return numberArray.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = stringCalculator;
