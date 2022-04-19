(function () {
    "use strict";
//1 & 2 Write a function that determines if a number is odd or even
    function oddEven(number) {
        return parseInt(number) % 2 !== 0 ? 'the Number is Odd' : 'The Number is Even';
    }

    console.log(oddEven(5));

//3 Make a function named identity(input) that returns the input exactly as provided.
    function identity(input) {
        return input.toString();
    }

    console.log(identity(734559));

//4 Make a function named isFive(input)
    function isFive(input) {
        return parseInt(input) === 5;
    }

    console.log(isFive("5"));

//5 Make a function named addFive(input) that adds five to some input.
    function addFive(input) {
        return parseFloat(input) + 5;
    }

    console.log(addFive("7.62"));

//6 Make a function named isMultipleOfFive(input)
    function isMultipleOfFive(input) {
        return parseInt(input) % 5 === 0 ? 'The number is a multiple of five' : 'The number is not a multiple of five';
    }

    console.log(isMultipleOfFive(5));

//7 Make a function named isThree(input)
    function isThree(input) {
        return input === 3;
    }

    console.log(isThree(3));

//8 Make a function named isMultipleOfThree(input)
    function isMultipleOfThree(input) {
        return parseInt(input) % 3 === 0 ? 'The number is a multiple of three' : 'The number is not a multiple of three';
    }

    console.log(isMultipleOfThree(69));

//9 Make a function named isMultipleOfThreeAndFive(input)
    function isMultipleOfThreeAndFive(input) {
        return parseInt(input) % 3 === 0 && parseInt(input) % 5 === 0 ? 'The number is a multiple of three & five' : 'The number is not a multiple of three & five';
    }

    console.log(isMultipleOfThreeAndFive(19));

//10 Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
    function isMultipleOf(target, n){
        return parseInt(target) % parseInt(n) === 0 ? 'The target is evenly divisible' : 'The target is not evenly divisible';
    }
    console.log(isMultipleOf(9,3));
//11 Make a function named isTrue(boolean)
    function isTrue(boolean){
        return boolean === true ? 'True' : 'Is not true';
    }
    console.log(isTrue(1));
//12 Make a function named isFalse(boolean)
    function isFalse(boolean){
        return boolean === false ? 'False' : 'Is not false';
    }
    console.log(isFalse(false));
//13 Make a function named isTruthy(input), remember that values other than true will behave like true
    function isTruthy(boolean){
        return boolean == true ? 'Truthy' : 'Is not truthy';
    }
    console.log(isTruthy(1));
//14 Make a function named isFalsy(input), remember that values other than false behave like false
    function isFalsy(boolean){
        return boolean == false ? 'Falsy' : 'Is not falsy';
    }
    console.log(isFalsy(false));
//15 Make a function named isVowel(letter)
    function isVowel(letter) {
        return letter.match('a|e|i|o|u/i') ? 'Is a vowel' : 'Is not a vowel';
    }
    console.log(isVowel("i"));
//16 Make a function named isConsonant(letter)
    function isConsonant(letter){
        return !letter.match('a|e|i|o|u/i') ? 'Is a consonant' : 'Is not a consonant';
    }
    console.log(isConsonant("i"));
//17 Make a function named isCapital(letter)
    function isCapital(letter) {
        return !/[a-z]/.test(letter) && /[A-Z]/.test(letter);
    }
    console.log(isCapital("J"))
//18 Make a function named isLowerCase(letter)
    function isLowerCase(letter) {
        return /[a-z]/.test(letter) && !/[A-Z]/.test(letter);
    }
    console.log(isLowerCase("J"))
//19 Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
    function hasLowerCase(string){
        let count = 0;
        while (count < string.length){
            let checker = string.charAt(count);
            if (isLowerCase(checker) === true) {
                return true;
            } count++;
        } return false
    }
    console.log(hasLowerCase("HElp"))
//20 Make a function named isSpace(letter) that returns if a character is a space character
    function isSpace(letter) {
        return /' '/.test(letter) && !/' ']/.test(letter);
    }
    console.log(isSpace("J"))
//21 Make a function named isZero(number)
    function isZero(number){
        return number ===0;
    }
    console.log(isZero(0))
//22 Make a function named notZero(input) that returns true if the input is not zero
    function notZero(number){
        return number !== 0;
    }
    console.log(notZero(17))
//23 Write a function named lowerCase(string)
    function lowerCase(string){
        return string.toLowerCase();
    }
    console.log(lowerCase("No Billy, don't!"));
//24 Write a function named double(n) that returns a number times two
    function double(n){
        return n * 2;
    }
    console.log(double(9));
//25 Write a function named triple(n) that returns a number times 3
    function triple(n){
        return n * 3;
    }
    console.log(triple(7));
//26 Write a function named quadruple(n) that returns a number times 4
    function quadruple(n){
        return n * 4;
    }
    console.log(quadruple(89));
//27 Write a function named half(n) that returns 1/2 of the provided input
    function half(n){
        return n / 2;
    }
    console.log(half(95));
//28 Write a function named subtract(a, b) that returns a minus b
    function subtract(a, b){
       return a - b;
    }
    console.log(subtract(78,123));
//29 Write a function named multiply(a, b) that returns the product of a times b
    function multiply(a, b){
        return a * b;
    }
    console.log(multiply(932,72));
//30 Write a function named remainder(a, b) that returns the remainder after dividing a by b
    function remainder (a, b){
        return a % b;
    }
    console.log(remainder(12,55));
//31 Make a function named modulo(a, b) that returns the remainder after dividing a by b
    function modula (a, b){
        return a % b;
    }
    console.log(modula( 77, 12));
//32 Write a function named cube(n) that returns n * n * n
    function cube (n){
        return Math.pow(n,3);
    }
    console.log(cube(2));
//33 Write a function named squareRoot(n) that returns the square root of the input
    function squareRoot(n){
       return Math.sqrt(n);
    }
    console.log(squareRoot(16));
//34 Write a function named cubeRoot(n) that returns the cube root of the input
    function cubeRoot(n){
        return Math.cbrt(n);
    }
    console.log(cubeRoot(99));
//35 Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
    function invertSign(number) {
       if (isNaN(number*-1) === false){
           return number * -1;
        } else {
           return false;
       }
    }
    console.log(invertSign(75));
    console.log(invertSign("Jello"));
//36 Write a function named degreesToRadians(number)
    function degreesToRadians(number){
        return number * Math.PI / 180;
    }
    console.log(degreesToRadians(90));
//37 Write a function named radiansToDegrees(number)
    function radiansToDegrees(number) {
        return number * 180 / Math.PI;
    }
    console.log(radiansToDegrees(90));
//38 Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//39 Make a function named trim(string) that removes empty spaces before and after the input.
    function trim(string) {
        return string.trim();
    }
    console.log(trim("  Howdy   "));
//40 Make a function named areEqual(input1, input2) that returns if both inputs have the same value
    function areEqual(input1, input2) {
        return input1 == input2;
    }
    console.log(areEqual("Jello","jello"));
//41 Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
    function areIdentical(input1, input2){
        return input1 === input2;
    }
    console.log(areIdentical(0,0));
//42 Make a function named not(input) returns the input with a flipped boolean
    function not(input) {
        return ! input;
    }
    console.log(not(true));
//43 Make a function named notNot(input) that the negation of the negation of the input.
    function notNot(input) {
        return !! input;
    }
    console.log(notNot(false));
//44 Make a function named and(predicate1, predicate2) that returns the logical operation of AND
    function and(predicate1, predicate2){
        return predicate1 && predicate2;
    }
    console.log(and(true,true));
//45 Make a function named or(predicate1, predicate2) that returns the logical operation of OR
    function or(predicate1, predicate2){
        return predicate1 || predicate2;
    }
    console.log(or(true,false));
//46 Write a function called reverseString(string) that reverses a string
    function reverseString(string) {
        let splitString = string.split("");
        return splitString.reverse().join("");
    }
    console.log(reverseString("Jello"));
//47 Make a function named absoluteValue(number) that returns the absolute value of a number.
    function absoluteValue(number) {
        return Math.abs(number);
    }
    console.log(absoluteValue(8));
//48 Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
    function rollDice(sides) {
       return Math.floor(Math.random() * sides + 1);
    }
    console.log(rollDice(20));
//Simple Function Drills
// Make a function called returnTwo() that returns the number 2 when called
// Test this function with console.log(returnTwo())
function returnTwo() {
    return 2;
}
console.log(returnTwo());
// Make a function called sayHowdy() which console.logs the string “Howdy!”
function sayHowdy() {
    console.log("Howdy");
}
// Test this function by directly calling sayHowdy()
sayHowdy();
// Remember this function does not need a defined return value
//
// Make a function called returnName() that returns the string of your name
function returnName(){
    return "Chris Davis";
}
// Test this function with console.log(returnName())
    console.log(returnName());
// Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
function addThree(num) {
    return parseFloat(num) + 3;
}
console.log(addThree(5));
// Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))
function sayString(input) {
    return input.toString();
}
console.log(sayString("codeup"));
// Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.
function identity(input) {
    return input;
}
// Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    console.log(getRandomNumber(6,9));
// Write a function called first(input) that returns the first character in the provided string.
function first(input) {
    return input.charAt(0);
}
console.log(first("Jello"));
// Write a function called last(input) that returns the last character of a string
function last(input) {
    return input.charAt(input.length - 1);
}
console.log(last("Jello"));
// Write a function called rest(input) that returns everything but the first character of a string.
function rest(input) {
    return input.substring(1 , input.length);
}
console.log(rest("Jello"));
// Write a function called reverse(input) that takes a string and returns it reversed.
function reverse(input) {
        let splitString = input.split("");
        return splitString.reverse().join("");
    }
console.log(reverse("Jello"));
// Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
function isNumeric(input) {
    return ! isNaN(input)
}
console.log(isNumeric("1"))
// Write a function called count(input) that takes in a string and returns the number of characters.
function count(input) {
    return input.length;
}
console.log(count("Jello"));
// Write a function called add(a, b) that returns the sum of a and b
function add (a , b) {
    return parseFloat(a) + parseFloat(b);
}
console.log(add(1,5));
// Write a function called subtract(a, b) that return the difference between the two inputs.
    function subtract (a , b) {
        return parseFloat(a) - parseFloat(b);
    }
    console.log(subtract(1,5));
// Write multiply(a, b) function that returns the product
    function multiply (a , b) {
        return parseFloat(a) * parseFloat(b);
    }
    console.log(multiply(1,5));
// Write a divide(numerator, denominator) function that returns a divided by b
function divide (a , b) {
    return parseFloat(a) / parseFloat(b);
}
console.log(divide(7,3))
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
function remainder(a , b) {
    return (((parseFloat(a) / parseFloat(b)) - Math.floor(parseFloat(a) / parseFloat(b))) * b);
}
console.log(remainder(8,3));
console.log(8 % 3);
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
function square(a) {
    return Math.pow(a,2);
}
console.log(square(4));
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
function sumOfSquares(a , b) {
    return add(square(a),square(b));
}
 console.log(sumOfSquares(4,5));
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
function doMath(operator, a, b) {
    switch (operator){
        case "+" : return a + b;
        case "-" : return a - b;
        case "*" : return a * b;
        case "/" : return a / b;
        case "%" : return a % b;
        default : return "Oops";
    }
}
console.log(doMath("/",9,3));
// Even More Function Bonuses
// Create a function that takes in two string inputs.
// If the second string input is present in the first, return the first input string with the second input string removed from it.
// If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// If the second string input is not present in the first, return the first string as entered in the function.
    function stringCheck (str1, str2) {
       if(str1.includes(str2)) {
           let indx1 = str1.indexOf(str2.charAt(0));
           console.log(indx1)
           let indx2 = str1.indexOf(str2.charAt(str2.length - 1));
           console.log(indx2)
           return str1.substring(indx1,indx2);
       } else {
           return str1;
       }
    }
    console.log(stringCheck("BlackDuck", "Black"))
    console.log(stringCheck("Rick", "Grimes"))
// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
//
// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//
// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
//
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiement passing in different functions.
// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
// The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.
})();