const  Posts  = require('../models/Posts');

const postData = [
  {
    title: 'CSS Borders',
    content: 'By using the border comand you can add a border to any html object',
    userName: 'techGuy80'
  },
  {
    title: 'JS Datatypes',
    content: 'There are a variety of data types',
    userName: 'LoveableLad<3'
  },
  {
    title: 'Bootstrap claps',
    content: 'Using bootstrap has increased the speed at which i can whip up a page by ten fold',
    userName: 'aPerson100'
  },

];

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;