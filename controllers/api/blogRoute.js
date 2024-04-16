const router = require('express').Router();
const { Blog } = require('../../models/index');

router.get('/', async (req, res) => {
  try {
    const data = await Blog.findAll({
      include: require('../../utils/helpers').includeData,
    });
    // const blogs = blogData.map((blog) => {
    //   blog.getDataValue();
    // });

    const blogs = data.map((blog) => blog.get({ plain: true }));
    res.status(200).json({ blogs });
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await Blog.findOne({
      where: {
        id: req.params.id,
      },
      include: require('../../utils/helpers').includeData,
    });
    // const blogs = blogData.map((blog) => {
    //   blog.getDataValue();
    // });

    const blog = data.get({ plain: true });
    res.status(200).json({ blog });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
