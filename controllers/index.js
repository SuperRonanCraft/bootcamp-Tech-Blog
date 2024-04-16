const router = require('express').Router();

//Api
router.use('/api', require('./api/index'));

//Pages
router.use('/signup', require('./signupRoute'));
router.use('/login', require('./loginRoute.js'));
router.use('/blog', require('./blogRoute.js'));
router.use('/dashboard', require('./dashRoute.js'));
// router.use("/blog", );
router.use('/', require('./homeRoute.js'));

module.exports = router;
