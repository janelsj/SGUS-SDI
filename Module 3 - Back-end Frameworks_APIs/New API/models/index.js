const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const User = require('./user.model')(sequelize);

(async() => {
    try{
        await sequelize.authenticate();
        await sequelize.sync({force:true});
        console.log('Connection is successful.')
    } catch(error){
        console.error("Unsuccessful connection:", error);
        throw error;
    }
})();

module.exports = {
    User,
};