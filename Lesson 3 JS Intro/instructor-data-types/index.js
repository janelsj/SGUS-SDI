// Today we focus on this block of data types. The primitive type.
// Primitive Types are the smallest data types the program use to work with.
console.log(typeof 100);
console.log(typeof "100");
console.log(typeof 100.01);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);

// We will talk more about these in future lessons.
console.log(typeof {}); // object
console.log(typeof []); // array
console.log(typeof function () {}); // function

/*
    1. Explain Type Inference

    - Some programming language require explicit declaration of variable type like Java. Example: int age = 30; String name = "John";
    - JavaScript does not require explicit declaration. It infers the variable type upon initialization or assignment.
*/

let age = "18"; // initialization
console.log("age after initialization", typeof age);
age = 18; // assignment
console.log("age after assignment", typeof age);

/*
    2. Explain use case for undefined and null.

    - If you meant for a variable to be "no value", you will assign null to the variable.
    - A undefined variable is not a desirable condition.

*/

let height; // If you intent height to not have a value, you should not do this. You should initialize it with a null value.
let weight = null; // Such as this.

/* 

    3. Explain the use case for boolean.

    - boolean is a switch value, either true or false. 
    - the value of boolean can also be derived from a condition statement (more about this next lesson)
*/

let isLightOn = true;
isLightOn = false;

console.log(isLightOn === true);

console.log(1 + 1 === 2); // true
