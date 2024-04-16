const router = require('express').Router();
const withAuth = require('../utils/auth.js');
const { Blog, User } = require('../models/index');

router.get('/', withAuth, (req, res) => {
  try {
    Blog.findAll({
      where: {
        author_id: res.session.userId,
      },
      include: [{ model: User }],
    }).then((data) => {
      const blogs = data.map((blog) => blog.get({ plain: true }));
      res.render('dashboard', {
        blogs,
        loggedIn: req.session.loggedIn,
      });
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
