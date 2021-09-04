// A class defined.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    intro() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Object instantiations.
const stanley = new Person("Stanley Ong", 21);
const edison = new Person("Edison Zhuang", 35);

// Invoking the functions defined in class through the objects.
stanley.intro();
edison.intro();