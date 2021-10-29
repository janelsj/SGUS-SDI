const {Model, DataTypes} = require('sequelize');
const sequelize = require('../app/sqlz');
const CarPark = require('./car-park');
const Vehicle = require('./vehicle');

//Put in methods for functionality:
class ParkingHistory extends Model {
    displayParkingHistoryInfo() {
        const {vehicleId, slotNo, carparkId} = this;
        return `${vehicleId} ${slotNo} ${carparkId}`;
    }
};

//Define the schema and hook up to the database:
ParkingHistory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        vehicleId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: "vehicle_id",
            references: {
                model: Vehicle,
                key: 'id',
            }
        }, 
        slotNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "slot_number",
        }, 
        carparkId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: "car_park_id",
            references: {
                model: CarPark,
                key: 'id',
            }
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
        modelName: 'Parking_History',
        tableName: 'Parking_Histories',
    }
);

module.exports = ParkingHistory;