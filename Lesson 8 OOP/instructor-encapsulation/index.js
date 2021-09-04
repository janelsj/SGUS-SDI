/*
    get and set syntax are used to set rules on how we access the private properties.
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

const edison = new Person("Edison", "Zhuang", 1900);

//console.log(edison.#lastName); // error thrown

edison.intro(); // "Hello, my name is Edison Zhuang."

console.log(edison.name); // "Edison Zhuang"
edison.name = "Edison Ong";
edison.intro(); // "Hello, my name is Edison Ong."