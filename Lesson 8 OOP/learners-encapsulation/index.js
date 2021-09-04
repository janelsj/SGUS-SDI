/*
    1. Convert all properties to private scope.
    2. Create a getter and setter method for each property.
    3. Display only the last 4 characters of nric.


class Patient {
    
    constructor(name, age, nric){
        this.name = name;
        this.age = age;
        this.nric = nric;
    }
}
*/


class Patient {
    #name;
    #age;
    #nric;
    constructor(name, age, nric){
        this.#name = name;
        this.#age = age;
        this.#nric = nric;
    }

    getName() {
        return this.#name;
    }

    setName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    setAge() {
        return this.#age;
    }

    getNric() {
        return this.#nric.slice(-4);
    }

    setNric(nric) {
        // Need to validate NRIC:
        if (nric.length === 9) {
            this.#nric = nric;
            console.log(this.#nric);
            return this.#nric
        } else {
            return "error";
        }
    }
}

const person1 = new Patient ("Tom", 25, "S1234567D");
console.log(person1.getNric());

const person2 = new Patient ("John", 35, "34567D");
console.log(person2.setNric("34567D"));
console.log(person2.getNric());
