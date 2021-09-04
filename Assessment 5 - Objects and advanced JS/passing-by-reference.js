/*
    Task 1: Explain why is coke.type has changed to "no sugar".

    Task 2: Correct the code where coke.type remains as "original" and cokeZero.type is "no sugar".
*/

const coke = {
    price: 1.0,
    type: "original"
};

const cokeZero = Object.create(coke); // Modify this line

cokeZero.type = "no sugar";

console.log('coke', coke);
console.log('cokeZero', cokeZero);

/*
    Give your explanation for Task 1 here.
    This code:
    const cokeZero = coke;
    assumes that the cokeZero variable is referencing the coke object,
    so cokeZero inherits all the properties defined for the coke object.
*/