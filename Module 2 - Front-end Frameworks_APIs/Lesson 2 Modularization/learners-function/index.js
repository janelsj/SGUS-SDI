// Use CommonJS to import sum() function from sum.js and invoke it.
const {sum} = require('./sum.js');
sum(3,4);

const myModule = require('./sum');
console.log(myModule);
console.log(myModule.num);
myModule.sum(1,2);
console.log(myModule.person1.name, myModule.str, myModule.person1.age);
console.log(myModule.arr[2]);
