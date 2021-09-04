/*
    Task 1. Define a global and local variable.
*/

let global = 5;// global
function demo() {
  const local = 3 * 3; //local
}

/* 
    Task 2. 

    Hoist the function "doSomething".
*/

doSomething();

function doSomething () {
  console.log("do something");
};
