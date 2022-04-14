"use strict";
console.log("This if from an included file!"); //opening stuff
let testvar = "Can you see me";
//function definition
function firstFunction(name) {
    return "Hello " + name;
}

console.log(firstFunction("Chris"));
console.log(firstFunction("Julie"));
//parseFloat as a function
function parseMyStuff(input) {
    input = parseFloat(input)
    return input;
}
console.log(parseMyStuff(prompt("What number?")))
//check if something is a string (my idea). I don't think it works properly on Boolean Values
function isString(check){
    return isNaN(check)
}
console.log(isString(prompt("Check Me")))

function isNumber(Num){
    return typeof Num === "number"
}
console.log(isNumber("4"));