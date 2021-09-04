// 1. Merge the keys from object "personal" and "professional" into a new obejct "me". 
const personal = {
    hobby:"swimming",
    dream:"watch netflix everyday"
};

const professional = {
    careerObjective:"To provide competitive advantage to organizations leveraging IT.",
    yearsOfExperience: 10
}

// Add code here
const me = {...personal, ...professional}
console.log(me);


// 2. Merge two arrays into one.

const arrayOne = [1,2,3];
const arrayTwo = ["one", "two", "three"];

// Add code here
const mergedArray = [...arrayOne, ...arrayTwo];
console.log(mergedArray);