const router = require('express').Router();
const { post } = require('.');
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include:
                {
                model: [User],
                },  
    })
    const projects = projectData.map((project) => project.get({ plain}))