const express = require ('express');
const app = express();
app.use(express.json());

const vehicles = [{
    type: "Taxi",
    carPlateNo: "SHA1111Z",
},{
    type: "Car",
    carPlateNo: "SJP2312B",
},{
    type: "Truck",
    carPlateNo:"TXD1234S",
}];

const garages = [{
    garageNo:1,
    address:"Address 1"
}];

app.get('/vehicle', function(req,res){
    res.json(vehicles);
});

app.post('/vehicle', function(req,res){
    if (vehicles.length>0 && vehicles.some(item=>item.carPlateNo===req.body.carPlateNo)) {
        res.status(409);
        return res.send(`Vehicle ${req.body.carPlateNo} already exists.`);
    } else {
        vehicles.push(req.body);
        res.json(req.body);
    }
});

app.put('/vehicle/:carPlateNo', function(req,res){
    for (let vehicle of vehicles) {
        if (vehicle.carPlateNo===req.params.carPlateNo) {
            vehicle.carPlateNo = req.body.carPlateNo;
            res.status(200);
            return res.send("Updated successfully.")
        }
    };
    res.status(404);
    return res.send(`Vehicle ${req.params.carPlateNo} does not exist.`)
});

app.post('/garage', function(req,res){
    res.status(200);
    garages.push(req.body);
    res.json(req.body);
});

app.get('/garage/:garageNo', function(req, res){
    for (let garage of garages) {
        if (parseInt(garage.garageNo)===parseInt(req.params.garageNo)) {
            res.status(200);
            res.json(garage);
        }
    };
    res.status(404);
    return res.send(`Garage ${req.params.garageNo} does not exist.`)
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});