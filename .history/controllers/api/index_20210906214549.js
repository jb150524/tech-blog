const router = require('express').Router();
const userRouter = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects')