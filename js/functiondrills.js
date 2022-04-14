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
    console.log(isMultipleOf(9,3))
})();