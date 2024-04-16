const router = require('express').Router();

//User
router.use('/logout', require('./logoutRoute'));
router.use('/login', require('./loginRoute'));
router.use('/user', require('./usersRoute'));

//Content
router.use('/blog', require('./blogRoute'));
// router.use('/comment');

module.exports = router;
