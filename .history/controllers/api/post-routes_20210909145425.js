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

    router.put('/:id', withAuth, async (req, res) => {
        try {
          // Find the logged in user based on the session ID
          const postData = await Post.update(req.session.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
              },
          });
      
          .then(affectedRows => {
            if (!affectedRows > 0) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
              }
          })
        } catch (err) {
          res.status(500).json(err);
        }
      });


