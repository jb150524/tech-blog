const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include:
                {
                model: [User],
                },  
    })
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts', {
        posts,
        logged_in: req.session.logged_in
    });
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            attributes: ['User'],
          },
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('single-post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    // If the user whats to signup
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  module.exports = router;