
/*
    1. Create a new class Truck.
    2. Let Truck extends Vehicle.
    3. Add a new property "weightInKg" to the constructor of Truck.
    4. Instantiate a Truck instance using the new keyword.


class Vehicle{
    constructor(carPlateNo, type, noOfWheels = 4){
        this.carPlateNo = carPlateNo;
        this.type = type;
        this.noOfWheels = noOfWheels;
    }

    inspect(){
        console.log(`This vehicle is a ${this.type} (${this.carPlateNo}) and it has ${this.noOfWheels} wheels.`);
    }
}
*/

class Vehicle {
    constructor(carPlateNo, type, noOfWheels = 4){
        this.carPlateNo = carPlateNo;
        this.type = type;
        this.noOfWheels = noOfWheels;
    }

    inspect(){
        console.log(`This vehicle is a ${this.type} (${this.carPlateNo}) and it has ${this.noOfWheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor (carPlateNo, type, weightInKg, noOfWheels) {
        super(carPlateNo, type); //super() left out noOfWheels as parameter. This means that
                                 // the noOfWheels parameter is now defaulted to parent class
                                 // (i.e. remains as an optional parameter of =4).
                                 // Basically, include inside the super (parameters) only what you 
                                 // intend to define these parameters within the child class, otherwise
                                 //  they are defaulted to parent class.
        this.weight = weightInKg;
    }
    inspect(){
        console.log(`This vehicle is a ${this.type} (${this.carPlateNo}), weighing ${this.weight}kg and it has ${this.noOfWheels} wheels.`);
    }
}

let vehicle1 = new Truck(1234,"Honda", 90);
vehicle1.inspect();
