// 1. Syntax comparison
    //FUNCTION DECLARATION:
function printSomething(msg){
    console.log(msg);
    return true;
}
printSomething("print something");


    //ARROW FUNCTION:
const printSomethingArrow = (msg) => {
    console.log(msg);
    return true;
}
printSomethingArrow("print something arrow");


// 2. Arrow function shorthands

// argument without braces if there is only one argument
const print = msg => {
    console.log(msg);
}
print("a message");


// an arrow func with return statement
const make = () => {
    return "making";
}
console.log(make());


// wrap the return statement with braces if it is a one liner
const produce = () => ("producing");
console.log(produce());

