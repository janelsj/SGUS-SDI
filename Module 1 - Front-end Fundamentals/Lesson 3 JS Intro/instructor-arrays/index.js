// 1. Declare, initialize, push and pop.

let myArray = [1, 2, 3, "4", "5"]; // A mixture of integer and string in an array cannot happen in many programming language

console.log(myArray);

myArray.push("6");
console.log("pushed", myArray);

myArray.pop();
console.log("popped", myArray);

// 2. Working with index and check if element exist.

let anotherArray = new Array(1, 2, 3, 4, 5, 6);

console.log(anotherArray[3]); // 4

console.log(anotherArray.indexOf("3")); // -1

console.log(anotherArray.indexOf(3)); // 2

console.log(anotherArray.includes(6)); // true

anotherArray.pop();

console.log(anotherArray.includes(6)); // false
