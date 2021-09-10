const router = require('express').Router();
const userRoutes = require('./user-Routes');
const postRoutes = require('./post-Routes');
const commentRoutes = require('./comment-Routes');

router.use('/users', userRoutes);
router.use('/post', projectRoutes);

module.exports = router;