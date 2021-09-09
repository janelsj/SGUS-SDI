const _ = require("lodash");

// Part 1 - simple assertions
function sum(a, b){
    return a + b;
}

// Part 2 - mock a function
function numMinusOne(a){
    return this.minusOne(a);
}

function minusOne(a){
    return a - 1;
}

// Part 3 - mock a module
function rollDice(){
    return _.random(1, 6, false);
}


// Part 4 - throw an error
function throwAnError(){
    throw new Error("TEST");
}

module.exports = {
    sum,
    rollDice,
    numMinusOne,
    minusOne,
    throwAnError
}