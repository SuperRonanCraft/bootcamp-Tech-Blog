const Blog = require('./Blog');
const Comment = require('./Comment');
const Account = require('./Account');

Account.hasMany(Blog, {
  foreignKey: 'author_id',
});

Blog.belongsTo(Account, {
  foreignKey: 'author_id',
});

Account.hasMany(Comment, {
  foreignKey: 'author_id',
});

Comment.belongsTo(Account, {
  foreignKey: 'author_id',
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

module.exports = { User: Account, Comment, Blog };
