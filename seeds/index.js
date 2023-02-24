const sequelize = require("../config/connection");
const seedPets = require("./petsdata")
const seeduser = require("./userdata")



const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seeduser();
  
  await seedPets();

  process.exit(0);
};

seedAll();
