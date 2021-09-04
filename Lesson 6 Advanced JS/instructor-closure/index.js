// 1. Variable can be declared as global scope within a function.

function fn() {
  hobby = "coding";
}
fn();
console.log(hobby);

// 2. A function can access a variable outside it's scope

let counter = 0;

function add() {
  counter++;
}
add();
console.log(counter);

// 3. Nested function where inner function access variables in the outer function scope.

function outer() {
  let animal = "Tiger";
  console.log("outer animal", animal);

  function inner() {
    animal = "Rabbit";
    console.log("inner animal", animal);
  }

  return inner;
}

let returnedFunc = outer();
returnedFunc();
