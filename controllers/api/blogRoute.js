const router = require('express').Router();
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

module.exports = router;
