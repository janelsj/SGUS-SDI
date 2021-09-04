/* 
  Task 1. Convert the funtions. 
  Convert the following functions with side effects to a pure function.

  Tips:
  - a pure function always return a value
  - a pure function always return same value based on the given arguments
*/

// Function 1
function multiply1(num1, num2) {
  return num1 * num2 * Math.floor(Math.random() * 10);
}
console.log(multiply1(2, 3));

//This is the pure function of Function 1
function multiply2(num1, num2) {
  return num1 * num2 * Math.floor(Math.random() * 0);
}
console.log(multiply2(2, 3));

// Function 2
function addition1(num1, num2) {
  console.log(num1 + num2);
}
console.log(addition1(3, 4));

//This is the pure function of Function 2
function addition2(num1, num2) {
  return (num1 + num2);
}
console.log(addition2(3, 4));