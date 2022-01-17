const router = require('express').Router();
const Posts  = require('../../models/Posts');
const User = require('../../models/Users')
router.post('/', async (req, res) => {
  try {
      
    let userData = await User.findOne({
        where: {
            'id': req.session.user_id
        }})
    let userName = userData.name
    let postBody = ({'title': req.body.title, 'content': req.body.content, 'userName' : userName})
    console.log(postBody)
    const postData = await Posts.create(postBody);
    console.log(postData)
    res.json(postData)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/update', async (req, res) => {
  console.log(req.body,"postRoutes")
  try {
    let postId = parseInt(req.body.targetPostId)
    let postData = await Posts.findOne({
        where: {
            'id': postId
        }})
        console.log(postData)
    postData.title = req.body.title
    postData.content = req.body.content
    await postData.save()
        res.json('success')
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router