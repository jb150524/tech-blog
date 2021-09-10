const router = require('express').Router();
const { post } = require('.');
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    try {}
    const postData = await Post.findAll({
        where: {
            userId: req.session.userId
        },
    }),
}),

const posts = postData.map((postData) => post.get({ plain: true }));

