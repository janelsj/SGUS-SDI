const sequelize = require('./app/sqlz.js');
const CarPark = require('./models/car-park');
const Driver = require('./models/driver');
const ParkingHistory = require('./models/parking-histories');
const Vehicle = require('./models/vehicle');

async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log("Connected successfully");
        return true;
    } catch (error) {
        console.error("Connection unsuccessful:", error);
        return false;
    }
};

async function databaseOps(){
    try{
        await sequelize.sync();
    //Create:
        const newDriver = await Driver.create({
            carLicenseNo: 'S8803341J',
            fullName: 'Johnny',
        });
        console.log(newDriver);

        const newVehicle = await Vehicle.create({
            driverId: newDriver.id,
            carPlateNo: 'SBY4563B',
            type: 'Van',
        });
        console.log(newVehicle);

        const newCarPark = await CarPark.create({
            address: 'Blk 983 Hougang Ave 4',
            slots: 25,
        });
        console.log(newCarPark);

        const newParkingHistory = await ParkingHistory.create ({
            vehicleId: newVehicle.id,
            slotNo: 291,
            carparkId: newCarPark.id,
        });
        console.log(newParkingHistory);

    //Update & save:
        newDriver.carLicenseNo = 'S8912345B';
        await newDriver.save();

        newVehicle.type = 'Taxi';
        await newVehicle.save();

    //Fetch data & Display info:
        const allDrivers = await Driver.findAll();
        allDrivers.forEach(driver => console.log(driver.displayDriverInfo()));

        const allVehicles = await Vehicle.findAll();
        allVehicles.forEach(vehicle => console.log(vehicle.displayVehicleInfo()));

        const allCarParks = await CarPark.findAll();
        allCarParks.forEach(carpark => console.log(carpark.displayCarParkInfo()));

        const allParkingHistories = await ParkingHistory.findAll();
        allParkingHistories.forEach(parkingHistory => console.log(parkingHistory.displayParkingHistoryInfo()));
        
    //Delete data:
        await Driver.destroy({where:{id:1}});
        // await newVehicle.destroy();
        // await newCarPark.destroy();
        // await newParkingHistory.destroy();

    } catch (error) {
        console.log("Unsuccessful:", error);
    }
};

testConnection();
databaseOps();