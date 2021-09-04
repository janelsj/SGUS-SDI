// Demonstrating passing by reference.
let stanley = {
    name: "Stanley Ong",
    age: 21,
    intro: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let edison = stanley;

edison.name = "Edison Zhuang";

console.log("stanley.name prints", stanley.name); // Guess?

let peter = Object.create(stanley);
peter.name = "Peter"; // Notice how this assignment do not affect the original object created named "stanley".

console.log("stanley.name prints", stanley.name);
console.log("peter.name prints", peter.name);