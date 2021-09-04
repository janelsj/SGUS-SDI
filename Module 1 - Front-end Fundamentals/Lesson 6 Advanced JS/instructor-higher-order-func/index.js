// Example 1 - simple loop

// Not higher-order function
const numbers = [1, 2, 3, 4];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log("evenNumbers", evenNumbers);

// Is higher-order function
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((n) => n % 2 === 0); // an arrow function is passed to the filter function.
console.log("high order functions evenNumbers", evenNumbers);

// Example 2 - vehicle operation use case

function carStart(x) {
  console.log(
    "do tons of things that start the car engine and do something with x",
    x
  );

  return function (y) {
    console.log("drive with x,y", x, y);
  };
}
const drive10 = carStart(10); // 10 will be parsed as x
drive10(30); // 30 will be parsed as y
drive10(40); // 40 will be parsed as y
const drive20 = carStart(20); // 10 will be parsed as x
drive20(30); // 30 will be parsed as y
drive20(40); // 40 will be parsed as y
