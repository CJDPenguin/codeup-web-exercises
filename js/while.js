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
                break
            }
            console.log('I sold ' + yummy + ' cones, I have ' + (inventory - yummy) + ' cones left, better keep selling.');
            inventory -= yummy;
        } while (inventory > 0);
        console.log('Time to blow this popsicle stand!');
    } letsGetSomeIceCream();
})();