class stringCalculator {
    add(numbers) {

        //if input string is empty return 0
        if(!numbers) return 0;

        //regex for newline and comma
        let delimiters = /,|\n/;

        if(this.isCustomDelimiter(numbers)) {
            const lastIndex = numbers.indexOf("\n");

            const delimPart = numbers.slice(2, lastIndex);

            const customDelim = delimPart.match(/\[.*?\]/g);
            
            if (customDelim) {
                //extract delimiters, escape special regex chars, and join into one regex
                delimiters = new RegExp(
                    customDelim.map(d => d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|")
                );
            } else {
                //single character custom delimiter
                delimiters = new RegExp(delimPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            }
            numbers = numbers.slice(lastIndex + 1);
        }

        //split the string based on specified delimiters or on , and \n and filter numbers greater than 1000 and then return sum
        const numberArray = numbers.split(delimiters).map(num => parseInt(num)).filter(num => num <= 1000);

        //check for negative number
        const negativeNumbers = numberArray.filter(num => num < 0);
        if(negativeNumbers.length) {
            throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
        }

        return numberArray.reduce((sum, num) => sum + num, 0);
    }

    isCustomDelimiter(numbers) {
        return numbers.startsWith("//");
    }
}

module.exports = stringCalculator;
