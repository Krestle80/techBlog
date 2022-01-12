const  Comments  = require('../models/Comments');

const commentData = [
  {
    comment: 'CSS Borders rock, they can add so much depth to a page',
    postId: 1,
    userName: 'aPerson100'
  },
  {
    comment: 'I love bootstrap too! I use it in almost every project',
    postId: 3,
    userName: 'techGuy80'
  },
  {
    comment: 'Ok, but like how many data types are there? and do you have any examples',
    postId: 2,
    userName: 'LoveableLad<3'
  },

];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;