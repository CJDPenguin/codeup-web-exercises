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
        return letter.match('a|e|i|o|u/i') ? true : false;
    }
    console.log(isVowel("i"));// why does this evaluate to e?
// Make a function named isConsonant(letter)
// Make a function named isCapital(letter)
// Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named isZero(number)
// Make a function named notZero(input) that returns true if the input is not zero
// Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
// Write a function named triple(n) that returns a number times 3
// Write a function named quadruple(n) that returns a number times 4
// Write a function named half(n) that returns 1/2 of the provided input
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
})();