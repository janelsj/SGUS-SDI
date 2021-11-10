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
// Answer: O(4)

function calculatePartTwo() {
  let total = 0;
  for (let i = 0; i < dataSetOne; i++) {
    total += dataSetOne[i];
  }
}
// Answer: O(1+2N)

function calculatePartThree() {
  let a = 5;      //O(1)
  let b = 10;     //O(1)
  let total = 0;  //O(1)

  for (let i = 0; i < dataSetOne; i++) {  //O(N)
    total += dataSetOne[i];               //O(N)
  }

  for (let j = 0; j < dataSetTwo; j++) {  //O(M)
    total += dataSetTwo[i];               //O(M)
    total += 1;                           //O(M)
  }

  let grandTotal = total + a + b;         //O(1)
}
// Answer: O(4+2N+3M)