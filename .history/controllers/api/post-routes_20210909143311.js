const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const body = await Project.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newProject);
      } catch (err) {
        res.status(400).json(err);
      }
    });
});