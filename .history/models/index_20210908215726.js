const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Project.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Project };