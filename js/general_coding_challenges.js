(function() {
// Narcissistic Numbers
// A narcissistic number is a non-negative integer (n) with m digits where the sum of all the individual digits raised to the power m is equal to n.
//     For example:
//     If n is 153, then m (the number of digits) is 3 and:
//     13 + 53 + 33 = 1 + 125 + 27 = 153
// So, 153 is a narcissistic number.
//     Objective: Write a script to generate and output the first 25 narcissistic integers.
    function narcissistNumber(maxCount) {
        maxCount = parseInt(prompt('How many narcissistic integers would you like me to introduce to you today?', '25'))
        let count = 0; //sets count as zero, as we haven't found any yet.
        let n = 10; // sets n to 10, as the first multidigit number
        do {
            let digitArray = Array.from(String(n),Number); // takes n, converts it to a string, and the breaks that string into an array of the digits, the converts them back to integers
            m = digitArray.length; // sets the power for the Math.pow function below to the length of the array just created
            let y = 0; // establishes local variable to add results of the for loop below too
            for (let digit of digitArray) {
                y = y + Math.pow(digit,m); // for each digit in the array raises the individual digit to the power of the amount of numbers that compose the number and adds it to the local variable y
                if (n === y) { //checks if the local variable y is equivalent to the original number
                    console.log(n + ' is a narcissistic number.');
                    count ++;
                }
            }
            n += 1;
        } while (count <= maxCount);
    }narcissistNumber();
})()