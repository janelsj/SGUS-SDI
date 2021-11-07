let dataSetOne = [1, 2, 3, 4, 5];
let dataSetTwo = [6, 7, 8, 9, 10];

//Task 1 - To calculate the Big O Notation for the following 3 functions:
// 1. calculatePartOne()
// 2. calculatePartTwo()
// 3. calculatePartThree()

function calculatePartOne() {
  let a = 5;
  let b = 10;
  let c = 20;
  const total = a + b + c;
}
// Answer:

function calculatePartTwo() {
  let total = 0;
  for (let i = 0; i < dataSetOne; i++) {
    total += dataSetOne[i];
  }
}
// Answer:

function calculatePartThree() {
  let a = 5;
  let b = 10;
  let total = 0;

  for (let i = 0; i < dataSetOne; i++) {
    total += dataSetOne[i];
  }

  for (let j = 0; j < dataSetTwo; j++) {
    total += dataSetTwo[i];
    total += 1;
  }

  let grandTotal = total + a + b;
}
// Answer:
