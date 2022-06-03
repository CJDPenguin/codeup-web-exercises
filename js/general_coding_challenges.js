(function () {
// TODOne: Narcissistic Numbers
// A narcissistic number is a non-negative integer (n) with m digits where the sum of all the individual digits raised to the power m is equal to n.
//     For example:
//     If n is 153, then m (the number of digits) is 3 and:
//     13 + 53 + 33 = 1 + 125 + 27 = 153
// So, 153 is a narcissistic number.
//     Objective: Write a script to generate and output the first 25 narcissistic integers.
    function narcissistNumber(maxCount) {
        maxCount = parseInt(prompt('How many narcissistic integers would you like me to introduce to you today?', '25'))
        let count = 1; //sets count to 1
        let n = 100; // sets n to 100, as the starting point as there are no 2 digit narcissistic numbers
        do {
            let digitArray = Array.from(String(n), Number); // takes n, converts it to a string, and the breaks that string into an array of the digits, the converts them back to integers
            let y = 0; // establishes local variable to add results of the for loop below too
            for (let digit of digitArray) {
                y += Math.pow(digit, digitArray.length); // for each digit in the array raises the individual digit to the power of the amount of numbers that compose the number and adds it to the local variable y
            }
            if (n === y) { //checks if the local variable y is equivalent to the original number
                document.querySelector("#narcissiticNumbers").innerHTML += `<div> ${n}  is a narcissistic number. </div>`; //logs the number in the console if it is a narcissistic number
                count++;// adds to the count
            }
            n += 1;// increases the number by one to start the check over
        } while (count <= maxCount);// continues doing the above code until the desired number is reached
    }

    document.querySelector('#generateNarcNum').addEventListener('click', narcissistNumber);

    // TODO: Create a script which will generate a random password, similar to this example. Allow your user to specify:
    //
    // Total length
    // Number of special characters (including none)
    // Number of digits (including none)
    // Whether to use upper case, lower case, or both

    let userPref = {
        length: 12,
        special: 2,
        digits: 2,
        case: 'both'
    }

    let randomLetter = () => {
        let rand = Math.floor(Math.random() * 26);
        switch (rand) {
            case 0:
                return 'a';
            case 1:
                return 'b';
            case 2:
                return 'c';
            case 3:
                return 'd';
            case 4:
                return 'e';
            case 5:
                return 'f';
            case 6:
                return 'g';
            case 7:
                return 'h';
            case 8:
                return 'i';
            case 9:
                return 'j';
            case 10:
                return 'k';
            case 11:
                return 'l';
            case 12:
                return 'm';
            case 13:
                return 'n';
            case 14:
                return 'o';
            case 15:
                return 'p';
            case 16:
                return 'q';
            case 17:
                return 'r';
            case 18:
                return 's';
            case 19:
                return 't';
            case 20:
                return 'u';
            case 21:
                return 'v';
            case 22:
                return 'w';
            case 23:
                return 'x';
            case 24:
                return 'y';
            case 25:
                return 'z';
        }
    }

    let randomSpecial = () => {
        let rand = Math.floor(Math.random() * 9);
        switch (rand) {
            case 0:
                return '~';
            case 1:
                return '!';
            case 2:
                return '@';
            case 3:
                return '#';
            case 4:
                return '$';
            case 5:
                return '%';
            case 6:
                return '^';
            case 7:
                return '&';
            case 8:
                return '*';
        }

    }

    let randomDigit = () => Math.floor(Math.random() * 9)

    console.log((/[a-z]/).test(randomDigit()));
    console.log((/[a-z]/).test(randomLetter()));
    console.log((/[a-z]/).test(randomSpecial()));

    function generatePassword(preferences) {
        let pw = ''

        let length = 0
        let specialCount = 0;
        let digitCount = 0;

        do {
            let character = ''
            if (specialCount < preferences.special && digitCount < preferences.digits) {
                let chance = Math.floor(Math.random() * 3)
                switch (chance) {
                    case 0:
                        length++;
                        character = randomLetter();
                        break;
                    case 1:
                        length++;
                        specialCount++;
                        character = randomSpecial();
                        break;
                    case 2:
                        length++;
                        digitCount++;
                        character = randomDigit();
                        break
                }
            } else if (specialCount < preferences.special) {
                if (Math.random() > 0.5) {
                    length++;
                    specialCount++;
                    character = randomSpecial();
                } else {
                    length++;
                    character = randomLetter();
                }
            } else if (digitCount < preferences.digits) {
                if (Math.random() > 0.5) {
                    length++;
                    digitCount++;
                    character = randomDigit();
                } else {
                    length++;
                    character = randomLetter();
                }
            } else {
                length++;
                character = randomLetter();
            }
            switch (preferences.case) {
                case 'both':
                    if (Math.random() > 0.5 && (/[a-z]/).test(character)) {
                        pw += character.toUpperCase();
                    } else {
                        pw += character;
                    }
                    break;
                case 'upper':
                    if ((/[a-z]/).test(character)) {
                        pw += character.toUpperCase();
                    } else {
                        pw += character;
                    }
                    break;
                default:
                    pw += character;
            }
        } while (length < preferences.length);
        return pw;
    }

    console.log(generatePassword(userPref));

})()