const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/vehicle.controller')

const vehicleController = new VehicleController();

router.get('/protected', (request, response) => {
    response.send('You have accessed a protected route.');
});

router.post('/protected/onboard', async (req,res) => await vehicleController.onboard(req,res));

module.exports = router;