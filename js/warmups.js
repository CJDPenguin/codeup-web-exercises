(function () {
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
    function alphabetize(string) {
        return string.split('').sort().join('');
    }

    console.log(alphabetize("codeup"));

    //Write a function that takes in an array of numbers and returns the sum of all elements
    function addAnArray(array) {
        return array.reduce((a, b) => a + b);
    }

    console.log(addAnArray([1, 2, 3, 4, 5]));// expect 15

    //write a function, returnProductDetails, that takes in a product object and returns some of the details.
    let productArray = {
        product1: {
            name: 'Hammer',
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
        }
    }

    function returnProductDetails(product) {
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

    //Write a function that will accept an array of objects and return the tallest object from the array.
    const hamsters = [
        {
            name: "Hamtaro",
            heightInMM: 86,
            fur: ['orange', 'white'],
            gender: "male",
            dateOfBirth: "August 6"
        }, {
            name: "Bijou",
            heightInMM: 75,
            fur: ['white'],
            gender: "female",
            dateOfBirth: "July 10"
        }, {
            name: "Oxnard",
            heightInMM: 100,
            fur: ['grey', 'white'],
            gender: "male",
            dateOfBirth: "May 3"
        }, {
            name: "Boss",
            heightInMM: 120,
            fur: ['brown', 'white'],
            gender: "male",
            dateOfBirth: "Spetember 21"
        }, {
            name: "Snoozer",
            heightInMM: 85,
            fur: ['brown', 'white', "pink"],
            gender: "male",
            dateOfBirth: "January 14"
        }
    ];

    function tallestObject(array) {
        let tallest = {heightInMM: 0};
        for (let hamster of array) {
            if (hamster.heightInMM > tallest.heightInMM) {
                tallest = hamster;
            }
        }
        return tallest;
    }

    console.log(tallestObject(hamsters));

    //write a function that will accept an array of objects and return the object from the array that is the most colorful

    function mostColortful(array) {
        let colors = 0
        let object = {}
        for (let hamster of array) {
            if (hamster.fur.length > colors) {
                colors = hamster.fur.length;
                object = hamster
            }
        }
        return object;
    }

    console.log(mostColortful(hamsters));

    function mostColorfulFor(hamsters) {
        let mostColors = hamsters[0];
        for (let x = 1; x < hamsters.length; x++) {
            if (hamsters[x].fur.length > mostColors.fur.length) {
                mostColors = hamsters[x];
            }
        }
        return mostColors;
    }

    console.log(mostColorfulFor(hamsters));

    //write a function that will accept a string. It should return an object with the following properties: string. size, contains letters from RSTLNE and is one word.

    function makeObjectFromString(string) {
        return {
            string: string,
            size: string.length,
            containsLetterFromRSTLNE: /[rstlne]/i.test(string), // let lc = str.toLowerCase(); if (lc.includes("r"||"s"||"t"||"l"||"n"||"e"))
            isOneWord: !(/\s/.test(string)) //string.indexOf(" ") < 0;
        };
    }

    console.log(makeObjectFromString('tacocat'));
    console.log(makeObjectFromString('Jacob'));
    console.log(makeObjectFromString('curiosity killed the cat'));
    console.log(makeObjectFromString('kabob bobby'));

    //Jimmy wants to buy and sell some metal. If he has two and a half pounds he can smelt it into an ingot and sell back the metal for triple the profit. Any metal he has, he can sell back for a thirty percent loss. Jimmy will always make an ingot if he can, and will sell all the metal he has, ingot or not. The metal Jimmy wants to smelt is priced at fifteen dollars per eight ounces. Create a function that will take in an amount of money, in dollars, that will return how much money Jimmy made from his investment.

    // 2.5 lb = ingot = profit * 3; leftovers = -30% profit; cost = $15 per 8 oz.
    function smelterProfit(cost) {
        let baseMetalOz = parseFloat(cost) * (8 / 15);
        let ingotCount = 0
        while (baseMetalOz >= 40) {
            ingotCount++;
            baseMetalOz -= 40;
        }
        return 'If Jimmy spends $' + cost.toFixed(2) + ', he will make $' + ((ingotCount * 75 * 3).toFixed(2) - (baseMetalOz * (8 / 15) * 0.7).toFixed(2))
    }

    console.log(smelterProfit(500));


    // make a fetch request to https://quotes.rest/qod

    let quoteDay = () => fetch('https://quotes.rest/qod').then((data) => data.json());

    quoteDay().then(r => console.log(r)).catch(r => console.error(r + 'oops'));
}())