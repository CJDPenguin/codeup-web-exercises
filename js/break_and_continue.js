(function () {
    "use strict";
    function skipToMyLoo (input) { //This was my first idea but didn't make use of the break & continue commands
        do {
            input = parseInt(prompt('Please enter an odd number between 1 & 50'));
        } while (input % 2 === 0 || input <= 0 || input >50);
        for (let count = 1; count < 50; count +=2) {
            if (count !== input) {
                console.log(count)
            }
        }
    } skipToMyLoo()
    function skipToMyLooBrokenContinued(input) {//using break & continue commands
        do {
            input = parseInt(prompt('Please enter an odd number between 1 & 50'));
            if (input % 2 !== 0 && input > 0 && input <= 50) {
                break
            }
        } while (true);

        for (let count = 1; count < 50; count +=2) {
            if (count === input) {continue}
            console.log(count);
        }
    } skipToMyLooBrokenContinued();
    })();