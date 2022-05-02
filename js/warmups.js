(function() {
    "use strict"
    console.log("Yay! I completed the warmup!")
//Fizzbuzz
    function fizzBuzz() {
        for (let count = 1; count <= 100; count++) {
            switch (true) {
                case (count % 3 === 0 && count % 5 === 0) :
                    console.log('FizzBuzz');
                    break
                case (count % 3 === 0) :
                    console.log('Fizz');
                    break
                case (count % 5 === 0) :
                    console.log('Buzz');
                    break
                default :
                    console.log('' + count);
            }
        }
    }
    fizzBuzz();
//Abbreviated
    function abbreviate(array) {
       let abbreviated = "";
       for (let letter of array) {
           abbreviated += letter[0];
       }
       return abbreviated.toUpperCase()
    }
    const array1 = ["dog", "cat", "frog", "bat"]
    console.log(abbreviate(array1))

    //Write a function that takes in a string and returns that string in alphabetical order.
    function alphabetize(string){
       return string.split('').sort().join('');
    }

    console.log(alphabetize("codeup"));

    //Write a function that takes in an array of numbers and returns the sum of all elements
    function addAnArray(array){
        return array.reduce((a,b) => a + b);
    }

    console.log(addAnArray([1, 2, 3, 4, 5]));// expect 15
}())