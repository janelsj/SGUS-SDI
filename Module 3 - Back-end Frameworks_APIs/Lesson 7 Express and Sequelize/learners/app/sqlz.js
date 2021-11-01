const {Sequelize} = require('sequelize');
const config = require('./config.js');
// DB Connection Configuration
//const sequelize = new Sequelize ([database name],[username],[password],[object parameters])
const sequelize = new Sequelize (config.pg_db, config.pg_user, config.pg_pass, {
    host: "localhost",
    dialect: "postgres",
});

module.exports = sequelize;