const { Comment } = require('../models/index');

const data = [
  {
    content: 'I like that one',
    blog_id: 1,
    author_id: 3,
  },
  {
    content: 'wish I can give this 5 stars',
    blog_id: 2,
    author_id: 2,
  },
  {
    content: 'What a great story!',
    blog_id: 3,
    author_id: 1,
  },
  {
    content: 'Hey, thats totally me!',
    blog_id: 4,
    author_id: 4,
  },
];

function seedComment() {
  return Comment.bulkCreate(data);
}

module.exports = { seedComment };
