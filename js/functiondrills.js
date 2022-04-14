//1 & 2 Write a function that determines if a number is odd or even
const oddEven = (function oddEven(number){
    return (parseInt(number) % 2 !==0 ? 'the Number is Odd' : 'The Number is Even')
})
console.log(oddEven(5))
//3 Make a function named identity(input) that returns the input exactly as provided.
const identity = (function identity(input){
    return input.toString()
})
console.log(identity(734559))
//4 Make a function named isFive(input)
const isFive = (function isFive(input){
    return (parseInt(input) === 5)
})
console.log(isFive("5"))
//5 Make a function named addFive(input) that adds five to some input.
const addFive = (function addFive(input){
    return (parseFloat(input) + 5)
})
console.log(addFive("7.62"))
//6 Make a function named isMultipleOfFive(input)
const isMultipleOfFive = (function isMultipleOfFive(input){
    return (parseInt) % 5 === 0 ? 'The number is a multiple of five' : 'The number is not a multiple of five'
 })
console.log(isMultipleOfFive(5))