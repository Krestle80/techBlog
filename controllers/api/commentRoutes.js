const router = require('express').Router();
const Posts  = require('../../models/Posts');
const User = require('../../models/Users')
const Comments = require('../../models/Comments')
router.post('/', async (req, res) => {
    try {
        //   if(!req.session.user_id){
            //       console.log('you are not logged in')
            //       res.json("error, you are not signed in")
            //   }
            let idNum = parseInt(req.body.postId)
    let userData = await User.findOne({
        where: {
            'id': req.session.user_id
        }})
        let userName = userData.name
        let commentBody = ({'comment': req.body.comment, 'postId': idNum, 'userName' : userName})
        const commentData = await Comments.create(commentBody);
        res.json(commentData)
} catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router