// connects to the database using sequelize
const Sequelize = require("sequelize");
require("dotenv").config();

// PLEASE NOTE EVERYONE WILL HAVE THEIR OWN ENV PASS CODES< EVERYONE MUST HAVE ENV FILE

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );

module.exports = sequelize;
