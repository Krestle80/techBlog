const  Users  = require('../models/Users');

const userData = [
  {
    name: 'techGuy80',
    password: 'Password'
  },
  {
    name: 'aPerson100',
    password: 'Password'
  },
  {
    name: 'LoveableLad<3',
    password: 'Password'
  },

];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;