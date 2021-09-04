/*
    Use an object literal to create an object for pet with 2 properties and 1 function.
    - name
    - breed
    - about()
*/

const pet1 = {
    name: "Snowball",
    about: function() {
        console.log(`This ${this.petType} is named ${this.name}.`)
    },
    petType: "hamster",
};

console.log(pet1);
pet1.about();

const pet2 = {
    name: "Nemo",
    about() {
        console.log(`This ${this.petType} is named ${this.name}.`)
    },
    petType: "fish",
};

console.log(pet2);
pet2.about();