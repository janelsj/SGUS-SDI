// Defining two object literals with same properties and functions
// What happens if we want to create 30 objects with the same properties and functions? It is better to use a class.

let stanley = {
    name: "Stanley Ong",
    age: 21,
    intro: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

stanley.intro();

let edison = {
    name: "Edison Zhuang",
    age: 35,
    intro: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

edison.intro();