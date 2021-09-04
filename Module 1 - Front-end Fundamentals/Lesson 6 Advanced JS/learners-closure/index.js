/*
    Task 1. 

    Console log the variable in the function.


function doSomething() {
  const task = "Do something"; // Edit code here
}

console.log(task); // Error thrown. Correct the code block in "doSomething()" func.
*/

function doSomething() {
  task = "Do something"; // By removing the "const" in front of "task", then you are allowing JavaScript will
                         // by default declare "var task" (but not initialise it) globally to be outside the 
                         // function at the moment once the function is invoked.
}
doSomething();           // Invoking the function will make the variable (without the let, const, var) inside  
                         // the function scope to become global.
console.log(task); // This will print "Do something".

/* In this above code, it is equivalent to the Javascript doing the following while processing the code:
var task;                     //the variable is declared globally, but not initialised.
function doSomething() {
  task = "Do something";      //now the "task" variable is initialised.
}
doSomething();                //invokes the function; if not invoked, console.log(task) will be undefined (but not ERROR).
console.log(task);
*/

/*
    Task 2: CLOSURE - to making variables private to a function;

    Return an inner function that changes the value of variable "food" from "noodle" to "rice"


function outer() {
  const food = "noodle";

  // Add code here - add an inner function
}

const inner = outer();
inner();

*/

function outer() {
  let food = "noodle";
  // Add code here - add an inner function
  function inner() {
     food = "rice";
     console.log(food);
  }
  return inner;
}

const inner = outer(); 
inner();                // Immediately invoking outer() will not print anything.

// Alternative below that will work exactly the same way as lines 50-51.
const random = outer();
random();