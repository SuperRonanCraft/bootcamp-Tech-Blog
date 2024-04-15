const { User } = require('../models/index');

const data = [
  {
    username: 'robert',
    password: 'keyphrase',
  },
  {
    username: 'chris',
    password: 'password123',
  },
  {
    username: 'steve',
    password: 'minecraft',
  },
  {
    username: 'David',
    password: 'icancode',
  },
];

function seedUser() {
  User.bulkCreate(data);
}

module.exports = { seedUser };
