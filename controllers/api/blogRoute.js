const router = require('express').Router();
const { where } = require('sequelize');
const { Blog } = require('../../models/index');

const withAuth = require('../../utils/auth.js');

router.post('/', withAuth, async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(404).json({
      posted: false,
      message: 'No title or content provided!',
    });
  } else {
    try {
      const blog = await Blog.create({
        author_id: req.session.userId,
        content,
        title,
      });
      res.status(200).json({ posted: true, blog });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
});

router.patch('/:id', async (req, res) => {
  const { title, content } = req.body;
  const blog_id = req.params.id;

  if (!title || !content || !blog_id) {
    res.status(404).json({
      updated: false,
      message: 'No title or content provided!',
    });
  } else {
    try {
      const blog = await Blog.update(
        {
          author_id: req.session.userId,
          content,
          title,
        },
        {
          where: {
            id: blog_id,
          },
        },
      );
      console.log(blog);
      res.status(200).json({ updated: true, blog });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
});

module.exports = router;
