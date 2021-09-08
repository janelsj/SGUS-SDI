// Import lodash using NPM and utilize any 2 lodash functions.
const _ = require("lodash");

const sumOfNum = _.sum([3,5,7]);
console.log(sumOfNum);

let array = ["red", "green", "blue", "yellow"]
let reversedArray = _.reverse(array)
console.log(reversedArray);