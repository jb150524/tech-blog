const router = require('express').Router();
const userRoutes = require('./user-Routes');
const postRoutes = require('./post-Routes');
const commentRoutes = require('./post-Routes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;