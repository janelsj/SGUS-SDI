// Convert the following functions to arrow functions


// Function 1
function formIntroductionSentence(name, age, hobby){
    return `Hi, my name is ${name} and I am ${age} years old. I love ${hobby}.`;
}

const intro = formIntroductionSentence("John Doe", 30, "Coding");
console.log(intro);

//Function 1 (arrow expression):
let formIntroductionSentence2 = (name, age, hobby) => (`Hi, my name is ${name} and I am ${age} years old. I love ${hobby}.`)
const intro2 = formIntroductionSentence2("John Doe2", 32, "Coding2");
console.log(intro2);

// Function 2
function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(1,1));

//Function 2 (arrow expression):
const sum2 = (num1, num2) => num1 + num2;
console.log(sum2(2,2));


// Function 3
function capitalize(word){
    return word.toUpperCase();
}
console.log(capitalize("abc"));

//Function 3 (arrow expression):
const capitalize2 = (word) => word.toUpperCase();
console.log(capitalize2("xyz"));