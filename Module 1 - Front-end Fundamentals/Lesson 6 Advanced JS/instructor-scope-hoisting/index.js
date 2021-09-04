/*
    Demonstrate:

    1. Scope
    2. Hoisting
*/

/* 
  1. SCOPE
*/

// 1a. Blocked scope
{
  let a = "a";
  const b = "b";
  var c = a + b;
}

c += "c";

console.log(c); // Toggle the variable to log

// 1b. variables declare within a function is not accessible outside of the function.
function functionA() {
  const fruit = "apple";
}
console.log(fruit);

// 1c. function can use variable declared outside the function
const color = "green";

function functionB() {
  console.log(`color is ${color}`);
}
functionB();

// 1d. There can be same variable outside and within a function
function testFunc() {
  var x = 11;
  if (true) {
    let x = 10;
    console.log("In Block:", x);
  }
  console.log("outside block:", x);
}
testFunc();

/* 
  2. HOISTING 
*/

// 2a. Function expression is not hoisted
unhoistedFunction();

const unhoistedFunction = function () {
  console.log("Not Hoisted");
};

// 2b. Function declaration is hoisted
hoistedFunction();

function hoistedFunction() {
  console.log("Hoisted");
}
