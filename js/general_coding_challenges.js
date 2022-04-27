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
        let count = 1; //sets count to 1
        let n = 100; // sets n to 100, as the starting point as there are no 2 digit narcissistic numbers
        do {
            let digitArray = Array.from(String(n),Number); // takes n, converts it to a string, and the breaks that string into an array of the digits, the converts them back to integers
            let y = 0; // establishes local variable to add results of the for loop below too
            for (let digit of digitArray) {
                y += Math.pow(digit,digitArray.length); // for each digit in the array raises the individual digit to the power of the amount of numbers that compose the number and adds it to the local variable y
                }
            if (n === y) { //checks if the local variable y is equivalent to the original number
                console.log(n + ' is a narcissistic number.'); //logs the number in the console if it is a narcissistic number
                count ++;// adds to the count
            }
            n += 1;// increases the number by one to start the check over
        } while (count <= maxCount);// continues doing the above code until the desired number is reached
    }narcissistNumber();
})()