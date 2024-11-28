class stringCalculator {
    add(numbers) {

        //if input string is empty return 0
        if(!numbers) return 0;

        //if only one number convert it into integer
        return parseInt(numbers);
    }
}

module.exports = stringCalculator;
