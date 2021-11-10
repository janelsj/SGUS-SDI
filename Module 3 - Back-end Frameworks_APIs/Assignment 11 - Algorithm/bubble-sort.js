// Task 1: To implement bubble sort and return a new sorted array as the result without modifying the array parameter.

//Task 2: To determine the 3 cases of Big O Notation

function bubbleSort(array) {
  //implement code here
  let toBeSortedArray = [];

  toBeSortedArray = array;
   
  for (let i = 0; i < toBeSortedArray.length; i++) {    //O(N)
    for (let j = 0; j < toBeSortedArray.length; j++) {  //O(N)
      if (toBeSortedArray[j] > toBeSortedArray[j+1]) {  //[6,5,7]
        let number = toBeSortedArray[j];
        toBeSortedArray[j] = toBeSortedArray[j+1];      //[5,6,7]
        toBeSortedArray[j+1] = number;
      }
    }
  }

  return toBeSortedArray;
}
// Big O Notation
// Worse Case: O(N^2)
// Average Case: ??
// Best Case: O(N)

module.exports = bubbleSort;
