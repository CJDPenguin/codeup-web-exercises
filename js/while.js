(function () {
    "use strict";
    function timesTwo() {
        let count = 1
        while (count < 65536) {
            console.log(count * 2)
            count = count * 2
        }
    }timesTwo()

    function letsGetSomeIceCream(){
        let inventory = Math.floor(Math.random() * 50) + 50
        console.log('I have ' + inventory + " cones. Let's get to selling");
        do {
            let yummy = Math.floor(Math.random() * 5) + 1
            if (yummy > inventory) {
                console.log('Drat, the customer wants ' + yummy + ' cones but I only have ' + inventory + " cones left, I can't make that sale.");
                continue
            }
            console.log('I sold ' + yummy + ' cones, I have ' + (inventory - yummy) + ' cones left, better keep selling.');
            inventory -= yummy;
        } while (inventory > 0);
        console.log('Time to blow this popsicle stand!');
    } letsGetSomeIceCream();
//practice parameterizing, & refactoring function
    function letsSellTillWeDrop(){
        let whatWeSelling = prompt("What are we selling today?", "Things")
        if (whatWeSelling === undefined) {
            whatWeSelling = 'Thingamabobs'
        }
        let howMuchWeGot = parseInt(prompt('How many of them do we have?'));
        if (howMuchWeGot === undefined) {
            howMuchWeGot = (Math.random() * 50) + 50
        }
        console.log('I have ' + howMuchWeGot + " " + whatWeSelling + ". Let's get to selling");
        do {
            let sale = Math.floor(Math.random() * 5) + 1
            if (sale > howMuchWeGot) {
                console.log('Drat, the customer wants ' + sale + ' but I only have ' + howMuchWeGot + " left, I can't make that sale.");
                continue
            }
            howMuchWeGot -= sale
            console.log('I sold ' + sale + ', I have ' + (howMuchWeGot) + ' left, better keep selling.');
        } while (howMuchWeGot > 0);
        console.log('Time to blow this popsicle stand!');
    } letsSellTillWeDrop();
})();