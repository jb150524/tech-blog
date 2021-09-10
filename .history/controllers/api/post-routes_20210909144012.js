const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const body = req.body;

        const postData = await Post.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newPost);
      } catch (err) {
        res.status(400).json(err);
      }
    });

    router.get('/', withAuth, async (req, res) => {
        try {
          // Find the logged in user based on the session ID
          const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
          });
      
          const user = userData.get({ plain: true });
      
          res.render('profile', {
            ...user,
            logged_in: true
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });


