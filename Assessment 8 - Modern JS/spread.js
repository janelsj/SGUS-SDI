/*
    Task 1: Create a function that takes in any amount of numeric type arguments and return the summed value of it all. 
    But the first number should be received as a separate parameter.
*/

function sum(num1,...num) {
    if (typeof num1 === "number" && num.length===0) {
        return num1;
    } else if (typeof num1 ==="number" && num.every(item => typeof item ==="number")) {
        let total = num.reduce( ((currentNum, nextNum) => currentNum+nextNum), num1);
        return total;
    }
}

console.log("Sum of 1 number:", sum(10));
console.log("Sum of 3 numbers", sum(1,2,3));
console.log("Sum of 5 numbers:", sum(1,2,3,4,5));

//Non-numeric types passed as arguments (ie. returns undefined):
console.log("First argument (alphabet), remaining arguments (numbers):", sum("a",2, 3));
console.log("Array-type arguments:", sum([1,2],[3]));
console.log("Concatenating alphabets:", sum("a","b","c","d"));

//No argument (ie. returns undefined as need to have at least one argument passed as parameter 'num1'):
console.log("No argument passed:", sum());