const sequelize = require('../app/sqlz');

// Test connection function
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    addDataToDB();
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
}

// Import model(s)
const Vehicle = require("./vehicle.model")(sequelize);
const Driver = require("./driver.model")(sequelize);

// Create associations
Vehicle.belongsTo(Driver, {
  foreignKey:"driverId",
  as:"driver"
});


async function addDataToDB(){
  try {
    await sequelize.sync({force:true});
    await Driver.create({
      carLicenseNo:'1234567',
      fullName: 'James Tan'
    });
    await Driver.create({
      carLicenseNo: '7654321',
      fullName: 'John Doe',
    });
    await Driver.create({
      carLicenseNo: '1234123',
      fullName: 'Jerry Toh',
    });
    await Vehicle.create({
      type: 'car',
      carPlateNo:'ABC123X'
    });
    const vehicle = await Vehicle.create({
      type: 'taxi',
      carPlateNo: 'SHA1234B',
      driverId:1
    });

    const vehiclesInDatabase = await Vehicle.findAll();
    vehiclesInDatabase.forEach(vehicle => console.log(vehicle.id, vehicle.carPlateNo, vehicle.type, vehicle.driverId));
    const driversInDatabase = await Driver.findAll();
    driversInDatabase.forEach(driver => console.log(driver.id, driver.fullName,driver.carLicenseNo))
  } catch (error) {
    console.log(error);
  }
};

testConnection();

// Exports (remember enhanced object literal)
module.exports = {
  sequelize,
  testConnection,
  Vehicle,
  Driver,
};
