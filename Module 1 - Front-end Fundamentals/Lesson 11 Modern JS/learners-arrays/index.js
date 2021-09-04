/*
    Try different array iterations methods using the array "numbers" defined. 
    Refer to https://www.w3schools.com/js/js_array_iteration.asp
*/

const numbers = [1,2,3,4,5];

// Use reduce() to produce a sum value of every elements in the array.
const sum = numbers.reduce((firstNum, nextNum) => firstNum + nextNum);
console.log("Total sum:", sum);

// Use some() to check if any of the elements has value above 3.
const isAbove3 = numbers.some(num => num>3);
console.log("Any number in array has value above 3?", isAbove3)

const isEveryItemAbove3 = numbers.every(num => num>3);
console.log("All numbers in array has value above 3?", isEveryItemAbove3);

// Use includes() to check if a given element exist in the array.
const isIncluded = numbers.includes(3, 2);
console.log("Is 3 included at numbers[2]?", isIncluded);

// Use Array.from() to convert "HAPPY" into an array.
const happy = Array.from("HAPPY");
console.log(happy);

// Go on and try somemore iteration methods.
const find4 = numbers.find(item => item===4)
console.log("Is 4 there?", find4)