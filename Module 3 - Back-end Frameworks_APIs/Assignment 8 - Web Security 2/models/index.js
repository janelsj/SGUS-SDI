const sequelize = require('../app/sequelize.js');
const hash = require('../app/fn.hash.js');

// Test connection function
async function testConnection() {
  try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      addDataToDB();
      return true;
  } catch (error) {
      console.error("Unable to connect to the database:", error);
      return false;
  }
}

// Import model(s)
const User = require("./user.model")(sequelize);

async function addDataToDB(){
  try {
      await sequelize.sync({force:true});
      await User.create({
        email: 'john@hotmail.com',
        password: await hash('12345'),
      });
      await User.create({
        email: 'mary@hotmail.com',
        password: await hash('abc321'),
      });
      const usersInDatabase = await User.findAll();
      usersInDatabase.forEach(async(user) => {
        console.log(user.id, user.email, user.password);
      });    
    } catch (error) {
      console.log(error);
  }
};

testConnection();

// Exports (remember enhanced object literal)
module.exports = {
  sequelize,
  testConnection,
  User,
};
