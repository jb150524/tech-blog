const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    const postData = await Post.findAll({
        where: {
            userId: req.session.userId
        },
    }),
}),

const posts = postData.