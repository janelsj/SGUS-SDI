const selectionSort = require("./selection-sort");
const bubbleSort = require("./bubble-sort");

const numberArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);
console.log("Checking numberArray:", numberArray);

const selectionSortedArray = selectionSort(numberArray);
console.log("Checking selectionSortedArray:", selectionSortedArray);

const bubbleSortedArray = bubbleSort(numberArray);
console.log("Checking bubbleSortedArray:", bubbleSortedArray);
