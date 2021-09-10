const router = require('express').Router();
const userRoutes = require('./user-Routes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;