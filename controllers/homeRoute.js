const router = require('express').Router();
const { Blog } = require('../models/index');

router.get('/', (req, res) => {
  try {
    Blog.findAll({
      include: [{ model: models_1.User }],
    }).then((data) => {
      const blogs = data.map((blog) => blog.get({ plain: true }));
      res.render('homepage', {
        blogs,
        loggedIn: req.session.loggedIn,
      });
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
});

module.exports = router;
