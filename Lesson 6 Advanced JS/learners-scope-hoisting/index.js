/*
    Task 1.

    Understanding code block.
*/

// Code Block A
/*
{
  const noOfStudents = 10;
  const noOfInstructors = 2;
  const totalAttendance = noOfStudents + noOfInstructors;
}

// This line throws an error. Make changes in "Code Block A" so that this
// line of code can access the required variable.
console.log(`The total number of attendance in class is ${totalAttendance}`);
*/

{
  const noOfStudents = 10;
  const noOfInstructors = 2;
  var totalAttendance = noOfStudents + noOfInstructors;
}

// This line throws an error. Make changes in "Code Block A" so that this
// line of code can access the required variable.
console.log(`The total number of attendance in class is ${totalAttendance}`);

/*
    Task 2. 

    Allow multiple functions to access the same variable.
*/

// Add code here
/*
function increment(n) {
  var total += n;
}

increment(1); // Error thrown. Declare "total" variable as global scope.
increment(2);
*/

let total = 0;

function increment(n) {
  return total += n;
}

console.log(increment(1)); // Error thrown. Declare "total" variable as global scope.
console.log(increment(2));

/*
    Task 3.

    Hoist the function.
*/

/*
printMe(); // Error thrown.

// Modify this function so that it is hoisted.
var printMe = function () {
  console.log("me");
};
*/

printMe(); // Error thrown.

// Modify this function so that it is hoisted.
function printMe () {
  console.log("me");
};