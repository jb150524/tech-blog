const router = require('express').Router();
const { post } = require('.');
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    try {
    const postData = await Post.findAll({
        where: {
            userId: req.session.userId
        },
}),

const posts = postData.map((postData) => post.get({ plain: true }));
res.render('homepage', { 
    projects, 
    logged_in: req.session.logged_in 
  });
} catch (err) {
  res.status(500).json(err);
}
});
