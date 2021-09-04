// Pure function
function calculate(num1, num2) {
  return num1 + num2;
}
console.log(calculate(2, 3));

// Non pure functions
function calculate(num1, num2) {
  console.log(num1 + num2); // does not return any value
}
console.log(calculate(2, 3));

function calculate(num1, num2) {
  return num1 + num2 + Math.floor(Math.random() * 10); // always returning different value with a random number as part of expression
}
console.log(calculate(2, 3));

function timeNow() {
  return new Date();
}
console.log(timeNow());
