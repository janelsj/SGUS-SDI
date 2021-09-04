/*
    Define a class "Dog" with two properties and one function.
    - Property 1: name
    - Property 2: breed (possible values: "Poodle", "Pom", "German Shepherd")
    - Function: about() that uses console.log to print this object's information.
    - Constructor should takes in name and breed as arguments

    Instantiate multiple dogs (object) instance with class Pet.
*/

// class Dog {
//     constructor(nameParameter, breedParameter) {
//         this.name = nameParameter;
//         this.breed = breedParameter;
//         this.about = function() {
//             console.log(`This dog is named ${this.name} and is of ${this.breed} breed.`);
//         }
//     }
// }

// let dog1 = new Dog("Rocky","German Shepherd");
// let dog2 = new Dog("Max", "Poodle");

// console.log(dog1);
// dog1.about();
// console.log(dog2);
// dog2.about();

class Human {
    constructor(nameParameter, ageParameter) {
        this.name = nameParameter;
        this.age = ageParameter;
        };
    about() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    };
}

let jane = new Human("Jane", 30);
console.log(jane);
jane.about();