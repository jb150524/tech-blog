const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    try {
    const postData = await Post.findAll({
        where: {
            userId: req.session.userId
        },
}),

const posts = postData.map((post) => post.get({ plain: true }));

res.render('all-posts-admin', { 
    layout: 'dashboard',
    posts, 
    logged_in: req.session.logged_in 
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/new', withAuth async (req, res) => {
  res.render('new-post'), 
  {
    layout: 'dashboard'
  },
});