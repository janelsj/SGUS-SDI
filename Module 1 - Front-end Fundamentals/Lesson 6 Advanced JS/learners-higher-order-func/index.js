/*
    An higher order function is a function that:
    - takes a function as an argument, or
    - returns a function
*/

/* 
    Task 1. 

    Break down:
    Step 1 - Create a function that returns an array [1,2,3]
    Step 2 - Invoke addTailElement(arg) and pass the function you create in step 1 as argument
    Step 3 - Print the result returned from addTailElement(arg)


function addTailElement(fn) {
  const arr = fn();
  arr.push("tail element");
  return arr;
}

// Add code here
*/


function addTailElement(fn) {
  const arr = fn();
  arr.push("tail element");
  return arr;
}

// Add code here

function array(num=3) {
  let myArray = [];
  for (i=1; i <= num; i++) {
    myArray.push(i);
  }; 
  console.log (myArray);
  return myArray;
};

/*
Alternative code:
function array () {
  console.log([1,2,3]);
  return ([1,2,3]);
}
*/

let result = addTailElement(array);
console.log(result);

/* result is equivalent to running this:
let result = function addTailElement() {
  function array(num=3) {
    let myArray = [];
    for (i=1; i <= num; i++) {
      myArray.push(i);
    }; 
    console.log (myArray);
    return myArray;
  };
  const arr = array();
  arr.push("tail element");
  return arr;
}

console.log(result());
__________________________
ANOTHER ALTERNATIVE
--------------------------
(function addTailElement() {
    function array(num=3) {
      let myArray = [];
      for (i=1; i <= num; i++) {
        myArray.push(i);
      }; 
      console.log (myArray);
      return myArray;
    };
    const arr = array();
    arr.push("tail element");
    console.log (arr);
    return arr;
  })();
*/


/* 
    Task 2. 

    The following block of code demonstrate a higher-order function that returns
    a function. 
    
    Add code below to return the sum up all elements in "arrOfNumbers".


function rollDice(arrOfNumbers) {
  return function () {
    // Add code here
  };
}

const sum = rollDice([1, 2, 3, 4]);
console.log(sum()); // undefined. Add code to inner function.

*/

function rollDice(arrOfNumbers) {
  return function () {
    // Add code here
    let total = 0;
    for (let i=0; i<arrOfNumbers.length; i++) {
      total+=arrOfNumbers[i];
    }
      return total;
  };
}

const sum = rollDice([1, 2, 3, 4]);
console.log(sum()); // undefined. Add code to inner function.