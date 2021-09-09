const _ = require("lodash");

const hobby = 'coding';

function sum(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error("Arguments must be numeric");
    }
    return a + b;
}

function rollDice(){
    return _.random(1, 6, false);
}

function addOne(a){
    return a + 1;
}

function numPlusOne(a){
    return this.addOne(a);
}

module.exports = {
    hobby,
    sum,
    rollDice,
    numPlusOne,
    addOne
}