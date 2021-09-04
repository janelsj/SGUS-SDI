/*
   Task 1: Study the following block of code and give an explanation to the ReferenceError encountered.
*/

function outer() {

    const x = 10;

    function inner() {
        const y = 20;
    }

    console.log(y); // ReferenceError: y is not defined
}

outer();

/*
    your answer here
    The variable y is accessible only within the local scope of the inner function.
    The console.log(y) here falls outside the scope of the inner function, thus y cannot be accessible
    and this results in reference error. Error can be corrected by moving console.log(y) into the body
    of the inner function, like this:
    function inner() {
        const y = 20;
        console.log(y);
    }
*/


/*
    Task 2: Modify the code below so that function call() can be invoked.
*/

call(); // error

// Modify this function
function call() {                      //Modified this from function expression to function declaration.
    console.log("I am calling");
}