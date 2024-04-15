const router = require('express').Router();

//User
router.use('/logout', require('./logoutRoute'));
router.use('/login', require('./loginRoute'));

//Content
// router.use('/blog');
// router.use('/comment');

module.exports = router;
