const {Model, DataTypes} = require('sequelize');
const sequelize = require('../app/sqlz');
const Driver = require('./driver');

//Put in methods for functionality:
class Vehicle extends Model {
    displayVehicleInfo() {
        const {driverId, type, carPlateNo} = this;
        return `${driverId} ${type} ${carPlateNo}`;
    }
};

//Define the schema and hook up to the database:
Vehicle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        driverId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: "driver_id",
            references: {
                model: Driver,
                key: 'id',
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "type",
        }, 
        carPlateNo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "car_plate_number",
        }, 
        createdAt: {
            type: DataTypes.DATE,
            field: "created_at",
        }, 
        updatedAt: {
            type: DataTypes.DATE,
            field: "updated_at",
        },
    }, {
        sequelize,
        modelName: 'Vehicle',
        tableName: 'vehicles',
    }
);

module.exports = Vehicle;