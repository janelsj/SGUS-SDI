// 1. Import tax-calculator.js using CommonJS

const cart = [
    {
        item:"Toy",
        price:29.90
    },
    {
        item:"Back Pack",
        price:59.90
    },
    {
        item:"Pencil Case",
        price:12.90
    }
];

const calculator = require('./tax-calculator.js');

// 2. Use array iteration method to produce an amount payable using the property "price".
const amountPayable = cart.map(({item: i, price: p}) => p).reduce((curr, next) => curr + next);
console.log(amountPayable);

// 3. Invoke tax calculator with the payable amount.
console.log(calculator(amountPayable, true).toFixed(2));