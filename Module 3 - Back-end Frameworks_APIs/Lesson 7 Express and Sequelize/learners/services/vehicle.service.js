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
    
            //End region validation:
    
    
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
    }
};