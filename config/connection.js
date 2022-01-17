const Sequelize = require('sequelize');
const {PORT} = require('../server')
require('dotenv').config();
console.log(PORT,"congig 3")
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: PORT,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
  
  

module.exports = sequelize;
