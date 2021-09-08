// Use CommonJS to export a function sum(arg1, arg2) that returns the value of arg1 + arg2
function sum (num1, num2) {
    console.log (num1 + num2);
    return num1 + num2;
}

const str = "is";
const num = 123;
let arr = ['yellow', 'green', 'blue', 1, 2, 3]

const person1 = {name: "Richard", occupation: "Student", age: 20}

const person2 = {name: "Mary", occupation: "Nurse", age: 30}

module.exports = {str, num, arr, person1, person2, sum}