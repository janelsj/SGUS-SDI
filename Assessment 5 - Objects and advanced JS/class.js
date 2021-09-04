/*
    Task: Define a class "FamilyMember" with the following properties:
    - lastName
    - firstName
    - relationship
    - age

    In this class, there should be a function checkLastName() that takes in "designatedLastName" as an argument and compare it against 
    the property "lastName" of the instance. If the matches, return true. Otherwise, return false. 

    After you have defined the class correctly, running the code of this JS file will produce this output:
    [
        FamilyMember {
            lastName: 'Tan',
            firstName: 'Larry',
            relationship: 'father',
            age: 35
        },
        FamilyMember {
            lastName: 'Tan',
            firstName: 'June',
            relationship: 'mother',
            age: 37
        }
    ]
*/


// Add code here: define a class "FamilyMember"
class FamilyMember {
    constructor (lastName, firstName, relationship, age) {
        this.lastName = lastName;
        this.firstName = firstName,
        this.relationship = relationship;
        this.age = age;
        };
    checkLastName(designatedLastName) {
        if (designatedLastName === this.lastName) {
            return true;
        } else {
            return false;
        };
    }
}

function removeNonMember(members, familyName) {
    return members.filter(m => m.checkLastName(familyName));
}

const memberOne = new FamilyMember("Tan", "Larry", "father", 35);
const memberTwo = new FamilyMember("Tan", "June", "mother", 37);
const memberThree = new FamilyMember("Ong", "Keith", "friend", 35);

const members = [memberOne, memberTwo, memberThree];

const myFamilyMembers = removeNonMember(members, 'Tan');

console.log(myFamilyMembers);