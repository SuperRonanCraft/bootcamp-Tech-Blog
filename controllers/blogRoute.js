const router = require('express').Router();
const { Blog } = require('../models/index');

router.get('/:id', async (req, res) => {
  try {
    const data = await Blog.findOne({
      where: {
        id: req.params.id,
      },
      include: require('../utils/helpers').includeData,
    });
    // const blogs = blogData.map((blog) => {
    //   blog.getDataValue();
    // });

    const blog = data.get({ plain: true });
    res.status(200).render('blog', {
      isBlogPage: true,
      ...blog,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
