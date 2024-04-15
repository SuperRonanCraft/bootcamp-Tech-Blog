const { Blog } = require('../models/index');

const data = [
  {
    title: 'Html is kida kewl',
    content: 'Reasons to hate html: 1) none',
    author_id: 1,
  },
  {
    title: 'What is Typescript?',
    content: 'To be honest, its a sin in humanity',
    author_id: 2,
  },
  {
    title: 'Backend story time',
    content:
      'Back in the day, developers only had one job, make something kewl, the end.',
    author_id: 3,
  },
  {
    title: 'Whats the deal with logs?',
    content: 'I cant stop counseling them!',
    author_id: 4,
  },
];

function seedBlog() {
  return Blog.bulkCreate(data);
}

module.exports = { seedBlog };
