/*
  Explain to student:

  In this file, we demonstrate the use of exporting a literal object. There is no strict rule to whether should
  service be object literal or class, it depends on actual use case and software design. In this exercise,
  we just want to demonstrate the another approach.
*/

const { Vehicle, Driver } = require("../models");

module.exports = {
  onboard: async (vehicleId, driverId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };
    const vehicle = await Vehicle.findByPk(vehicleId);
    const driver = await Driver.findByPk(driverId);

    if (!vehicle) {
        result.message = `Vehicle ID ${vehicleId} is not found.`;
        result.status = 404;
        return result;
      }

    if (vehicle.driverId) {
      result.message = `Vehicle ID ${vehicle.id} is already in use.`;
      result.status = 400;
      return result;
    }

    if (!driver) {
      result.message = `Driver ID ${driverId} is not found.`;
      result.status = 404;
      return result;
    }

    vehicle.driverId = driver.id;
    await vehicle.save();
    result.data = vehicle;
    result.status = 200;
    result.message = "Onboard successful";

    return result;
  },
};
