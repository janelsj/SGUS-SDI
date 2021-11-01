const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/vehicle.controller')

const vehicleController = new VehicleController();

router.get('/general', (request, response) => {
    response.send('You have accessed a general route.');
});

router.get('/general/vehicle', async(request, response) => {
    await vehicleController.showAll(request, response);
});

module.exports = router;
