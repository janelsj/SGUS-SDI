/*
    Given an array of patients, loop through them and produce another 2 sets of array:
    1. adultsWithFever:[]
    2. toddlersWithFever:[]

    The definition of fever is 38.0 and above.
    The definition of adult is 21 years old and above.
*/

const patients = [{
        name: "John",
        temperature: 38.6,
        age: 0
    },
    {
        name: "Derrick",
        temperature: 36.7,
        age: 34
    },
    {
        name: "Alex",
        temperature: 38.2,
        age: 2
    },
    {
        name: "June",
        temperature: 38.7,
        age: 31
    },
    {
        name: "Larry",
        temperature: 36.5,
        age: 23
    }
];

for (patient of patients) {
    if (patient.temperature >= 38.0 && patient.age>= 21) {
        const adultsWithFever = [];
        adultsWithFever.push(patient);
        console.log(`Adult ${patient.name}, aged ${patient.age} has temperature of ${patient.temperature}`);
    } else if (patient.temperature >= 38.0 && patient.age < 21) {
        const toddlersWithFever = [];
        toddlersWithFever.push(patient);
        console.log(`Toddler ${patient.name}, aged ${patient.age} has temperature of ${patient.temperature}`);
    }
}


