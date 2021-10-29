const {Sequelize} = require('sequelize');
const config = require('./config.js');
//const sequelize = new Sequelize ([database name],[username],[password],[object parameters])
const sequelize = new Sequelize (config.pg_db, config.pg_user, config.pg_pass, {
    dialect: "postgres",
});

module.exports = sequelize;