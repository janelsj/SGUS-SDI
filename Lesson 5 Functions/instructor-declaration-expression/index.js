// Demo and explain the following:
// 1. what is function name
// 2. what is function keyword
// 3. what is argument
// 4. what is return statement
// 5. difference between declaration and expression method

const firstName = "Larry";

// Declaration
function printMyName(firstName) {
  console.log(firstName);
}

// Expression
const printMyName = function (firstName) {
  console.log(firstName);
};

printMyName(firstName);
