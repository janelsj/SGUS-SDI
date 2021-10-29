const {Model, DataTypes} = require('sequelize');
const sequelize = require('../app/sqlz');

//Put in methods for functionality:
class CarPark extends Model {
    displayCarParkInfo() {
        const {address, slots} = this;
        return `${address} ${slots}`;
    }
};

//Define the schema and hook up to the database:
CarPark.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        address: {
            type: DataTypes.STRING,
            allowNull:false,
            field: "address",
        }, 
        slots: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "no_of_slots",
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
        modelName: 'car_park',
        tableName: 'car_parks',
    }
);

module.exports = CarPark;