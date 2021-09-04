/*
    Demonstrate method overiding 
*/

class Person {

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

    #yearOfBirth; 

    constructor(firstName, lastName, yearOfBirth){
        super(firstName, lastName); 
        this.#yearOfBirth = yearOfBirth;
    }

    // method overriding for a different behavior in child class
    intro(){
        console.log(`Hello, my name is ${this.name} and I am born in year ${this.#yearOfBirth}.`);
    }
}

const myBaby = new Baby("Mary", "Lee", 2021);
myBaby.intro(); // "Hello, my name is Mary Lee and I am born in year 2021."

const parent = new Person("Peter", "Lee");
parent.intro(); // "Hello, my name is Peter Lee."