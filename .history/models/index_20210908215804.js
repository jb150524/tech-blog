const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  Project.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Project };