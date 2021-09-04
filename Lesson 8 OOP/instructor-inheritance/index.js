/*
    Demonstrate extends 
*/

class Person {

    // The private properties
    #lastName;
    #firstName;

    constructor(firstName, lastName) {
        this.#lastName = lastName;
        this.#firstName = firstName;
    }

    get name() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    set name(myName){
        this.#firstName = myName.split(" ")[0];
        this.#lastName = myName.split(" ")[1];
    }

    intro(){
        console.log(`Hello, my name is ${this.#firstName} ${this.#lastName}.`);
    }
}


class Baby extends Person{

    #yearOfBirth; // property only exist in Baby class

    constructor(firstName, lastName, yearOfBirth){
        super(firstName, lastName); // super() calls the parent class' constructor
        this.#yearOfBirth = yearOfBirth;
    }
}

const myBaby = new Baby("Mary", "Lee", 2021);
myBaby.intro(); // "Hello, my name is Mary Lee and I am born in year 2021."

const parent = new Person("Peter", "Lee");
parent.intro(); // "Hello, my name is Peter Lee."