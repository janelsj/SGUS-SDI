const sequelize = require('./app/sqlz.js');
const Vehicle = require('./models/vehicle');

async function testDB(){
    try{
        await sequelize.authenticate();
        console.log("Connected successfully");
        return true;
    } catch (error) {
        console.error("Connection unsuccessful:", error);
        return false;
    }
};

async function dbOps(){
    try{
        await sequelize.sync();
    //Add a new vehicle:
        const newVehicle = await Vehicle.create({
            carPlateNo: 'SBP1244X',
            type: 'Mercedes',
        });
        console.log(newVehicle);

    //Update a property on a vehicle:
        newVehicle.type = 'Road Bike';
    //Save updated vehicle:
        await newVehicle.save();

    //Fetch vehicles:
        const allVehicles = await Vehicle.findAll();
    //Display vehicles info:
        allVehicles.forEach(vehicle => console.log(vehicle.displayVehicleInfo()));
        console.log(allVehicles);

    //Delete vehicle:
        await newVehicle.destroy();
    } catch (error) {
        console.log("unsuccessful:", error);
    }
}

testDB();
dbOps();