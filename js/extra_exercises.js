"use strict"

//Question 1 Counting the Number of Characters
let phrase = prompt("Please enter your phrase:"); // sets phrase to the input text
if (phrase) { //checks if the prompt is any falsy argument
    let charCount = phrase.length; // counts number of characters in phrase and sets it to charcount
    document.getElementById("phrase").innerHTML = phrase; //adds the input phrase to the phrase ID for HTML
    document.getElementById("charCount").innerHTML = charCount; //adds the character count to charcount phrase ID for HTML
} else {alert("This program requires a phrase to run")} //alerts the user that they need to enter a string

//Question 2 Mad Lib
let noun = prompt("Please enter a singular noun");
let verb = prompt("Please enter a present tense verb");
let adjective = prompt("Please enter an adjective");
let adverb = prompt("Please enter an adverb");
//above 4 lines establish the variables and prompt the user to enter them.
document.getElementById("madLib").innerHTML = `The ${adjective} ${noun} ${verb} ${adverb}` //sets the inputs into a sentence and assigns it to the madLib element for display

//Question 3 Simple Math
let arg1 = prompt("Please enter the first number");
let arg2 = prompt("Please enter the second number");
//establishes two user inputs as variables arg1 and arg2
function simpleMath(x,y){
    x = parseInt(arg1), y = parseInt(arg2)

}
