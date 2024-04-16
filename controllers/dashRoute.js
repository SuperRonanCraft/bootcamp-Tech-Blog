const router = require('express').Router();
const withAuth = require('../utils/auth.js');
const { Blog, User } = require('../models/index');

router.use(withAuth);

router.get('/', (req, res) => {
  try {
    Blog.findAll({
      where: {
        author_id: req.session.userId,
      },
      include: [{ model: User }],
    }).then((data) => {
      const blogs = data.map((blog) => blog.get({ plain: true }));
      res.render('dashboard/dashboard', {
        blogs,
        loggedIn: req.session.loggedIn,
      });
    });
  } catch (err) {
    console.error(err);
  }
});

router.get('/create', (req, res) => {
  res.render('dashboard/create', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/:id', (req, res) => {
  try {
    Blog.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: User }],
    }).then((data) => {
      const blog = data.get({ plain: true });
      res.render('dashboard/edit', {
        ...blog,
        loggedIn: req.session.loggedIn,
      });
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
