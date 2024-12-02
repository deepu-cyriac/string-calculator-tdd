class stringCalculator {
    add(numbers) {

        if(!numbers) return 0;

        let delimiters = /,|\n/;

        if(this.isCustomDelimiter(numbers)) {
            const lastIndex = numbers.indexOf("\n");

            const delimiterPart = numbers.slice(2, lastIndex);

            const multipleDelimiter = delimiterPart.match(/\[.*?\]/g);
            
            if (multipleDelimiter) {
                delimiters = new RegExp(
                    multipleDelimiter.map(d => d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|")
                );
            } else {
                delimiters = new RegExp(delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            }
            numbers = numbers.slice(lastIndex + 1);
        }

        const numberArray = numbers.split(delimiters).map(num => parseInt(num)).filter(num => num <= 1000);

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
