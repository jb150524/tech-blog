const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Project };