const sequelize = require('../config/connection');
const { seedBlog } = require('./blogData');
const { seedComment } = require('./commentData');
const { seedUser } = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedBlog();
  await seedComment();

  console.log('Seeded all data!');
  setTimeout(function () {
    process.exit(0);
  }, 1000);
};

seedAll();
