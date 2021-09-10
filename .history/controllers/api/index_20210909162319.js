const router = require('express').Router();
const userRoutes = require('./user-Routes');
const postRoutes = require('./post-Routes');
const commentRoutes = require('./comment-Routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;