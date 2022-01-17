const Sequelize = require('sequelize');
require('dotenv').config();
console.log(process.env.PSQL_HOST,"congig 3")
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.PSQL_HOST ,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
  
  

module.exports = sequelize;
