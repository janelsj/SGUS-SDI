/*
    Task 1. Higher Order Function. Return a function that sum up the array of numbers.
*/

const arr = [1, 2, 3, 4, 5, 6];

function input(numbers) {
    // Add code here
    function arrTotal () {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        };
        return sum;
    }
    return arrTotal;
}

console.log(input(arr)()); // This should prints the sum of the array of numbers.


/*
    Task 2: Higher Order Function.

    2.1 - Create a function that takes in a "person" object and console.log it's name, age and queueNo. 
    2.2 - Call register() to invoke the function created in 2.1. You must give the appropriate object properties to "person", 
    and pass the reference of the function you create as second argument of register().
*/

let count = 0;

function register(person, fn) {

    person.queueNo = count++;

    fn(person);
}

function loggingPerson(person) {
    console.log(person);
}

const person1 = {
    name: "Benjamin",
    age: 23,
    queueNo: count,
}

register(person1, loggingPerson);
