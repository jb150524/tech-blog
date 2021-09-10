const router = require('express').Router();
const userRoutes = require('./user-Routes');
const postRoutes = require('./post-Routes');
const commentRoutes = require('./comment-Routes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/post', Routes);

module.exports = router;