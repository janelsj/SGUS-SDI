/*
    Define a class "MedicalRecord". It should contain the following properties and functions:

    Properties:
    - lastName (string)
    - firstName (string)
    - yearOfBirth (number)
    - isAdult (to be determined by year of birth)
    - allergy (defaults to null)
    - noOfVisit (number, defaults to 0)
    - inClinic (boolean, defaults to false)

    The constructor of the class shall takes in the following arguments:
    - lastName
    - firstName
    - yearOfBirth
    - allergy

    Functions:
    - checkOut() will increment property "noOfVisit" and set inClinic to false
    - checkIn() will set inClinic to true
*/

class MedicalRecord {
    constructor (lastName, firstName, yearOfBirth, allergy = null) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth;
        this.isAdult = (new Date().getFullYear() - yearOfBirth >= 21) ? "Adult":"Child";
        this.allergy = allergy;
        this.noOfVisit = 0;
        this.inClinic = false;
    }
    checkOut() {
        this.noOfVisit++;
        this.inClinic = false;
    }
    checkIn() {
        this.inClinic = true;
    }
}

// Instantialising objects:
let record1 = new MedicalRecord("Tom","Cruise","2009","Penicillin");
record1.checkIn();
console.log(record1);

record1.checkOut();
record1.checkOut();
record1.checkOut();
console.log(record1);

let record2 = new MedicalRecord("Tom","Cook","1999");
console.log(record2);