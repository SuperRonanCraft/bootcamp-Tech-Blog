const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Blog, {
  foreignKey: 'author_id',
});

Blog.belongsTo(User, {
  foreignKey: 'author_id',
});

User.hasMany(Comment, {
  foreignKey: 'author_id',
});

Comment.belongsTo(User, {
  foreignKey: 'author_id',
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

module.exports = { User, Comment, Blog };
