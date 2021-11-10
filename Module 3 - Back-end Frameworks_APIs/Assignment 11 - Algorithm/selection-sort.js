// Task 1: To implement selection sort and return a new sorted array as the result without modifying the array parameter.

//Task 2: To determine the 3 cases of Big O Notation

function selectionSort(array) {
  //implement code here
  let toBeSortedArray = [];

  toBeSortedArray = array;

  for(let i = 0; i < toBeSortedArray.length-1; i++) {
    let index = i;
    for (let j = i + 1; j < toBeSortedArray.length; j++) {
      if (toBeSortedArray[j] < toBeSortedArray[index]) {    //to find a number at index'j' of the array that is smaller than toBeSortedArray[i]
        index = j;                                          //(index !== i) when toBeSortedArray[index] < toBeSortedArray[j]
      }
    };
    if (index!==i) {
      let number = toBeSortedArray[i];
      toBeSortedArray[i] = toBeSortedArray[index];
      toBeSortedArray[index] = number;
    }
  }

  return toBeSortedArray;
}
// Big O Notation
// Worse Case: N^2 + N
// Average Case: ?
// Best Case: N

module.exports = selectionSort;
