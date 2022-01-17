const router = require('express').Router();

const commentRoutes = require('./commentRoutes')
const postRoutes = require('./postRoutes')
const userRoutes = require('./userRoutes')


router.use('/userRoutes', userRoutes)
router.use('/postRoutes', postRoutes)
router.use('/commentRoutes', commentRoutes)
module.exports = router;