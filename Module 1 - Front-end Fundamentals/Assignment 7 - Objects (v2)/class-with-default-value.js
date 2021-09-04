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