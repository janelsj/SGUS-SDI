const {Model, DataTypes} = require('sequelize');

module.exports = function(connection) {
  class User extends Model {}

  User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "email",
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "password",
        },
        isActive:{
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          field: "created_at",
        },
        updatedAt: {
          type: DataTypes.DATE,
          field: "updated_at",
        },
      },
      {
        sequelize: connection,
        modelName: "User",
        tableName: "users",
      }
    );
    return User;
}