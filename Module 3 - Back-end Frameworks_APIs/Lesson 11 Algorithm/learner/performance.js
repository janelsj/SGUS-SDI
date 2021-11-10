const {performance} = require('perf_hooks');

//Task 1.1 - Implement mathematicalOperations() to perform the 4 mathematical operations - Addition, Subtration, Multiplication and Division
// Task 1.2 - Calculate the time taken to perform the 4 operations
function mathematicalOperations(a, b) {
  //Code to be implemented here
  const sum = a+b;
  const subtract = a-b;
  const multiply = a*b;
  const divide = a/b;
  return {sum, subtract, multiply, divide};
};

console.log(mathematicalOperations(6,3));

const startTime = performance.now();
mathematicalOperations(6,3);
const endTime = performance.now();
console.log(`Time taken for 4 mathematical operations: ${endTime - startTime}`);


// Task 2.1 - Implement findNumberGreaterThanFifty() to find the total number of values above 50 in numberArray
// Task 2.2 - Calculate the time taken for task 2.1
function findNumberGreaterThanFifty() {
  const numberArray = Array.from({ length: 1000 }, () =>
    Math.floor(Math.random() * 100)
  );

  //Code to be implement here
  const numbersAbove50 = numberArray.filter(number => number > 50);
  return numbersAbove50;
};
console.log(findNumberGreaterThanFifty());

const timeStart = performance.now();
findNumberGreaterThanFifty();
const timeEnd= performance.now();
console.log(`Time taken for finding numbers > 50: ${timeEnd - timeStart}`);