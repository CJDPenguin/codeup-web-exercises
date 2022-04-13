let phrase = prompt("Please enter your phrase:"); // sets phrase to the input text
let charcount = phrase.length; // counts number of characters in phrase and sets it to charcount
console.log(phrase);
console.log(charcount);
document.getElementById("phrase").innerHTML = phrase; //adds the input phrase to the phrase ID for HTML