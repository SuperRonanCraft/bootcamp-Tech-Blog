const router = require('express').Router();
const withAuth = require('../utils/auth.js');

//Api
router.use('/api', require('./api/index'));

//Pages
// router.use('/signup', require('./signupRoute'));
router.use('/login', require('./loginRoute.js'));
// router.use("/dashboard", );
// router.use("/blog", );
router.use('/', require('./homeRoute.js'));

module.exports = router;
