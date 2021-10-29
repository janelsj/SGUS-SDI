const {Model, DataTypes} = require('sequelize');
const sequelize = require('../app/sqlz');

//Put in methods for functionality:
class Driver extends Model {
    displayDriverInfo() {
        const {carLicenseNo, fullName} = this;
        return `${carLicenseNo} ${fullName}`;
    }
};

//Define the schema and hook up to the database:
Driver.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        carLicenseNo: {
            type: DataTypes.STRING,
            allowNull:false,
            field: "car_license_number",
        }, 
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "full_name",
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
        modelName: 'Driver',
        tableName: 'drivers',
    }
);

module.exports = Driver;