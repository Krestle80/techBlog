const router = require('express').Router();

const commentRoutes = require('./commentRoutes')
const postRoutes = require('./postRoutes')
const userRoutes = require('./userRoutes')


router.use('/userRoutes', userRoutes)
router.use('/postRoutes', postRoutes)
module.exports = router;