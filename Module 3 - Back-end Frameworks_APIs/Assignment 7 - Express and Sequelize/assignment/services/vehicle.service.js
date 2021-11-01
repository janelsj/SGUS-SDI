const { Vehicle, Driver } = require("../models");

module.exports = {
    onboard: async (vehicleId, driverId) => {
        try {
            const response = {
                message: null,
                status: null,
                data: null,
            };
    
            //Fetch the vehicle and driver:
            const vehicle = await Vehicle.findByPk(vehicleId);
            const driver = await Driver.findByPk(driverId);
            
            //Region validation
    
            if (!vehicle){
                response.status = 404;
                response.message = `Vehicle not found for ID: ${vehicleId}`;
                return response;
            }
            
            if (vehicle.driverId) {
                response.status = 400;
                response.message = "Vehicle already has a driver.";
                return response;
            }
    
            if (!driver){ 
                //Error: No driver 
                response.status = 404;
                response.message = `Driver not found for ID: ${driverId}`;
                return response;
            }; 
    
            // Add driverId to the vehicle and update database:
            vehicle.driverId = driverId;
            await vehicle.save();
    
            //Prepare and send response:
            response.message = "Onboard successful.";
            response.status = 200;
            response.data = vehicle;
    
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    offboard: async(vehicleId) => {
        try {
            const response = {
                message: null,
                status: null,
                data: null,
            };
    
            //Fetch the vehicle:
            const vehicle = await Vehicle.findByPk(vehicleId);
            
            //Region validation
            if (!vehicle){
                response.status = 404;
                response.message = `Vehicle not found for ID: ${vehicleId}`;
                return response;
            }

            if (vehicle.driverId) {
                // Remove driverId from the vehicle and update database:
                vehicle.driverId = null;
                await vehicle.save();

                //Prepare and send response:
                response.status = 200;
                response.message = "Offboard successful.";
                response.data = vehicle;
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    },
    change: async(vehicleId, vehicleType, vehicleCarPlateNo) => {
        try {
            const response = {
                message: null,
                status: null,
                data: null,
            };
    
            //Fetch the vehicle:
            const vehicle = await Vehicle.findByPk(vehicleId);
            
            //Region validation
            if (!vehicle){
                response.status = 404;
                response.message = `Vehicle not found for ID: ${vehicleId}`;
                return response;
            }

            if (vehicle) {
                // update vehicle details and update database:
                vehicle.type = vehicleType;
                vehicle.carPlateNo = vehicleCarPlateNo;
                await vehicle.save();

                //Prepare and send response:
                response.status = 200;
                response.message = `Vehicle update for ID ${vehicleId} successful.`;
                response.data = vehicle;
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    },
    removeDriver: async(driverId) => {
        try {
            const response = {
                message: null,
                status: null,
                data: null,
            };
    
            //Fetch the vehicle & driver:
            const driver = await Driver.findByPk(driverId);
            const vehicle = await Vehicle.findAll({where: {
                driverId: driverId
              }});
            
            //Region validation
            if (!driver){ 
                //Error: No driver 
                response.status = 404;
                response.message = `Driver not found for ID: ${driverId}`;
                return response;
            }

            if (vehicle) {
                response.status = 400;
                response.message = `Driver is onboard a vehicle and cannot be deleted.`;
                return response;
            }

            if(!vehicle){
                //Prepare and send response:
                response.status = 200;
                response.message = `Driver ${driverId} is successfully deleted.`;
                response.data = vehicle;
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    },
    showAll: async() => {
        try {
            const response = {
                message: null,
                status: null,
                data: null,
            };
    
            //Fetch the vehicle & driver:
            const vehicle = await Vehicle.findAll();
            const driver = await Driver.findAll();

            //Region validation
            if (!vehicle) {
                response.status = 200;
                response.message = "There are no vehicles stored in database";
                return response;
            }
            if (vehicle) {
                response.status = 200;
                response.message = `List of vehicles in database with drivers`;
                response.data = {vehicle, driver};
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    },
};