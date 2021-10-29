const {Model, DataTypes} =  require('sequelize');
const sequelize = require('../app/sqlz');

//Put in methods for functionality:
class Vehicle extends Model {
    displayVehicleInfo() {
        const {type, carPlateNo} = this;
        return `${type} ${carPlateNo}`
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
        carPlateNo: {
            type: DataTypes.STRING,
            allowNull:false,
            field: "car_plate_number",
        }, 
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "type",
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