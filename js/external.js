console.log("Hello from external JavaScript")
alert("Welcome to my Website!")
alert("Great, " + prompt("What is your favorite color?") + " is my favorite color too")

let littleMermaid = prompt("How many days did you rent the Little Mermaid for?");
let brotherBear = prompt("How many days did you rent Brother Bear for?");
let hercules = prompt("How many days did you rent Hercules for?");
let price = 3
cost = ((littleMermaid * price) + (brotherBear * price) + (hercules * price));
alert("You rented the Little Mermaid for " + littleMermaid + " days, Brother Bear for " + brotherBear + " days, and Hercules for " + hercules + " days. For a total cost of $" + cost)

let rGoogle = prompt("Enter hourly rate from Google"), rAmazon = prompt("Enter hourly rate from Amazon"), rFacebook = prompt("Enter Hourly Rate from Facebook")
let tGoogle = prompt("Enter hours worked for Google"), tAmazon = prompt("Enter hours worked for Amazon"), tFacebook = prompt("Enter Hours worked for Facebook")
let weeksPay = ((rGoogle * tGoogle) + (rAmazon * tAmazon) + (rFacebook * tFacebook))
alert("You worked " + tGoogle + " hours for Google at $" + rGoogle + " per hour; " + tAmazon + " hours for Amazon at $" + rAmazon + " per hour; and " + tFacebook + " hours for Facebook at $" + rFacebook + " per hour for a total of $" + weeksPay + " for the week")

let enroll;
if(
    confirm("Is this class full?") !== true) {
        if (confirm("Does this class conflict with your schedule?") !== true) {
            enroll = alert("You can enroll in this course")
        }}else {alert("You cannot enroll in this course.")
}

let cart = parseFloat(prompt("How many items are in your cart?", "3"))
console.log(cart);
if(
    confirm("Is this offer expired?") !== true) {
    if (confirm("Are you a premium member?") === true || cart >= 2) {
        alert("Offer Applied")
    }

} else {
        alert("We're sorry, offer could not be applied")
    }