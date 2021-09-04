/*
    1. Destructure properties "id" and "price" from the object.
*/

const product = {
    id:"H001A",
    name:"Wireless Mouse",
    price:20.9,
    expiry:null
};

// Add code here
const {id, price, ...rest} = product;
console.log(price, id);
console.log('Remaining properties: ', rest);

/*
    2. Destructure the first two elements as variables but leave the last three elements as an array.
*/

const names = ["John", "Mary", "Peter", "Larry", "Lucy"];

// Add code here
const [name1, name2, ...other] = names;
console.log(name2, name1);
console.log('Other names: ', other);
