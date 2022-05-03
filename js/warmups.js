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

    //write a function, returnProductDetails, that takes in a product object and returns some of the details.
let productArray = {
    product1 : {
        name: 'Hammar',
        priceInCents: 400,
        description: 'It is a a hammar.',
        inventory: 25034
    },

    product2: {
        name: 'Computer',
        priceInCents: 40000,
        description: 'It is a computer.',
        inventory: 33000
    },

    product3: {
        name: 'Ruler',
        priceInCents: 1000,
        description: 'It is a ruler.',
        inventory: 2200
    }}

    function returnProductDetails(product){
        let name = product.name, price = product.priceInCents;
        return {name, price};
    }

    console.log(returnProductDetails(productArray.product1));
    console.log(returnProductDetails(productArray.product2));
    console.log(returnProductDetails(productArray.product3));
    //
    // function returnAllProductEssentialDetails(productArray){
    //     let essentialDetails =[];
    //     productArray.forEach(function (product){
    //         essentialDetails.push(returnProductDetails(product));
    //     })
    //     return essentialDetails;
    // }
    // returnAllProductEssentialDetails(productArray);
}())