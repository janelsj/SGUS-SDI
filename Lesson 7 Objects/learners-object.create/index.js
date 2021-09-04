/*
    Use Object.create() to clone the object "dog" so that both "dog" and "cat" prints different information.

let dog = {
    breed: "Toy Poodle",
    name: "Pillow",
    about: function() {
        console.log(`My name is ${this.name} and breed is ${this.breed}.`)
    }
};

let cat = dog; // Modify this line so that we retain the dog's info 

cat.name = "Bolster";
cat.breed = "Persian";

dog.about();
cat.about();
*/



let dog = {
    breed: "Toy Poodle",
    name: "Pillow",
    about: function() {
        console.log(`My name is ${this.name} and breed is ${this.breed}.`)
    }
};

let cat = Object.create(dog); // Modify this line so that we retain the dog's info 

cat.name = "Bolster";
cat.breed = "Persian";

dog.about();
cat.about();