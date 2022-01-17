const router = require('express').Router();
const  Posts = require('../models/Posts');
const Users = require('../models/Users');
const Comments = require('../models/Comments')
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts 
    const postData = await Posts.findAll();
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    if( req.session.logged_in == true){
      // Pass serialized data and session flag into template with login data
      res.render('home', { 
        posts,
        logged_in: true
      });}
    else{
      res.render('home', { 
        posts
    })
    }
    }
  catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', async (req, res)=> {
 res.render('login')
})

router.get('/signUp', async (req, res) =>{
  res.render('signUp')
})

router.get('/dashBoard', async (req, res) => {
      // Get all posts by this user 
      if(req.session.logged_in == true){
        let userId = req.session.user_id
        const userData = await Users.findOne({
          where: {'id' : userId}
        });
        const postData = await Posts.findAll({
          where:{
            userName: userData.name
          }
      })
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashBoard', {
      posts,
      logged_in: true
  })}
  else res.render('loginSignUpChoice')
  
})


router.get('/post/:id', async (req, res)=>{

    //getting the data from sequalize
    
    const postData = await Posts.findByPk(req.params.id,);
    let id = req.params.id
    const commentData = await Comments.findAll({
      where: {postId: id}
    })


    const post = postData.get({ plain: true });
    const comments =  commentData.map((comment) => comment.get({ plain: true }))
    if(req.session.logged_in == true){
      res.render('postPage', {
        post,
        comments,
        logged_in:true
      })
    }
    else 
    res.render('postPage', {
      post,
      comments
    })
})
// router.get('/post/:id', async (req, res) => {
//   try {
//     const projectData = await Posts.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
