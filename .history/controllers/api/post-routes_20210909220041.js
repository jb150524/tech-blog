const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        // const newPost = req.body;

        const newPost = await Post.create({
          ...req.body,
          userId: req.session.userId,
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
      
          if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
          }
      
          res.status(200).json(postData);
        } catch (err) {
          res.status(500).json(err);
        }
      });

      router.delete('/:id', withAuth, async (req, res) => {
        try {
          const postData = await Post.destroy({
            where: {
              id: req.params.id,
              userId: req.session.userId,
            },
          });

          if (!postData) {
            res.status(404).json({ message: 'No Post found with this id!' });
            return;
          }
      
          res.status(200).json(userData);
        } catch (err) {
          res.status(500).json(err);
        }
      });
    
    module.exports = router;

