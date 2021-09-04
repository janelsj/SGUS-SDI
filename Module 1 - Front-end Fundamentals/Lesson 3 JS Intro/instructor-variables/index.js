/* 
    Guide students to use Run Code Extension to execute this file.
    How to: highlight the code you want to execute, right-click and choose Run Code.

    Explain to students what console.log() does.
*/

// 1. Demonstrate const and let
const legalName = "Johnny Wong";
legalName = "John Wong"; // Error
console.log("legalName", legalName);

// 2. Undefined is the default value for uninitialized variable
let age; // declared but not initialized
console.log("age before assignment", age);
age = 18;
console.log("age after assignment", age);
