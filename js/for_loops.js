(function () {
    "use strict";

    function showMultiplicationTable(num) {
        for (let mult = 1; mult<=10; mult++) {
            console.log(num + ' x ' + mult + ' = ' + (num * mult));
        }
    }
    showMultiplicationTable(Math.floor(Math.random() * 10) + 1);
    showMultiplicationTable(Math.floor(Math.random() * 10) + 1);

    function randoEvenOdd(num) {
        for (let count = 1; count <= 10; count++) {
            num = Math.floor(Math.random() * 200) + 20;
            console.log(num % 2 === 0 ? num + " is even" : num + " is odd");
        }
    }
    randoEvenOdd();

    function numberConcat() {
        for (let number = 1; number < 10; number++) {
            let num = "" + number
            console.log(num.repeat(number))
        }
    }
    numberConcat();

    function downByFive() {
        for (let cd = 100; cd > 0; cd-=5) {
            console.log(cd);
        }
    }
    downByFive();
})();