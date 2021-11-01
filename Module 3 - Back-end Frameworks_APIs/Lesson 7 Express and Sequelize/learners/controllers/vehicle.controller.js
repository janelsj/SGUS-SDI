const vehicleService = require('../services/vehicle.service');

class VehicleController {
    async onboard(req, res, next) {
        if (typeof req.body !=='object') {
            res.status(400);
            return;
        };

        const {vehicleId, driverId} = req.body;

        if(typeof driverId !== "number" || typeof vehicleId !== "number") {
            res.status(400);
            return res.json({message:"Incorrect request data"});
        }
        const response = await vehicleService.onboard(vehicleId, driverId);
        res.json(response);
    }
}

module.exports = VehicleController;