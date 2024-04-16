const router = require('express').Router();
const { Blog, Comment } = require('../../models/index');

router.post('/', async (req, res) => {
  try {
    const blogId = req.body.blog_id;
    const comment = req.body.comment;
    if (!blogId || !comment) {
      res.status(500).json({
        posted: false,
        message: 'Invalid data entry!',
      });
      return;
    }
    if (!req.session.userId) {
      res.status(500).json({
        posted: false,
        message: 'Not logged in!',
      });
      return;
    }
    const commentData = await Comment.create({
      author_id: req.session.userId,
      blog_id: blogId,
      content: comment,
    });
    res.status(200).json({
      posted: true,
      message: 'Posted comment',
      comment: commentData,
    });
    console.log('New comment posted!', comment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
