const router = require('express').Router();
const { Blog, User } = require('../models/index');

router.get('/', (req, res) => {
  try {
    Blog.findAll({
      include: [{ model: User }],
    }).then((data) => {
      const blogs = data.map((blog) => blog.get({ plain: true }));
      res.render('homepage', {
        blogs,
        loggedIn: req.session.loggedIn,
      });
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
