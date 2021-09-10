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

router.get('/new', withAuth, async (req, res) => {
  try {
    const postData = await Post.create ({
      req.body,
    })
  }
    res.render('new-post'), 
  {
    layout: 'dashboard'
  },
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id)

    const post = postData.get({ plain: true });

    res.render('edit-post', 
    {
      layout: 'dashboard',
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;