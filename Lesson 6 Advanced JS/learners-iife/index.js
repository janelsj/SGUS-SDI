// Task 1. Write a IIFE that logs your name.
(function() {
    let name = "Jane";
    console.log(name);
})();

(function(variable) {
    let name = "Jane";
    console.log(name, variable);
})(30);


// Task 2. Write a IIFE that uses arrow function.
(() => {
    let name = "Jane";
    console.log(name);
})();