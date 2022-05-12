(function(){
    "use strict";
    //Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
    //
    // Example input: ["fred", true, 5, 3] Example output: [3, 5]
    function filterNumbers(array){
        let numbers = [];
        array.forEach(function(el){
            if(typeof el === 'number'){
                numbers.push(el);
            }
        })
        return numbers;
    }
    const testArray = ['fred',true,5,3];
    console.log(filterNumbers(testArray));
    //create array of dog objects
    const dogs = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastiff",
            age: 10
        }
    ]
    //Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.
    function getOlder(animals){
        for(let animal of animals){
            animal.age++;
        }
        return animals;
    }
    console.log(getOlder(dogs));
    //cars object
    const cars = [
        {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
        },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ]
    //Write a function, washCars() that takes in an array of car objects and sets the boolean properties of isDirty to false.
    function washCars(vehicles){
        for (let car of vehicles){
            if (car.isDirty === true){
                car.isDirty = false;
            }
        }return vehicles;
    }
    console.log(washCars(cars));
    //user list
    const users = [
        {
            isAdmin: true,
            email: 'user1@email.com'
        },
        {
            isAdmin: true,
            email: 'user2@email.com'
        },
        {
            isAdmin: false,
            email: 'user3@email.com'
        }
    ]
    // Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
    function adminList(userList){
        let admins = [];
        for (let user of userList){
            if (user.isAdmin === true){
                admins.push(user);
            }
        }
        return admins;
    }
    console.log(adminList(users));
    function adminEmails(userList){
        let adminEmails = [];
        for (let user of userList){
            if (user.isAdmin === true){
                adminEmails.push(user.email);
            }
        }
        return adminEmails;
    }

    console.log(adminEmails(users));

    //Create a function, makeSandwichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
    const breads  = [
        "white",
        "wheat",
        "rhy",
        "white"
    ];
    const fillings = [
        "pb&j",
        "ham",
        "cheese steak",
        "tuna"
    ];

    function makeSandwichObjects(breads,fillings){
        let allTheSandwiches = [];
        for (let i=0; i<breads.length && i<fillings.length; i++){
        let sandwich={
            bread: breads[i],
            filling: fillings[i],
        }
        allTheSandwiches.push(sandwich);
        }
        return allTheSandwiches;
    }
    console.log(makeSandwichObjects(breads, fillings));
})()

