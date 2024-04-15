const router = require('express').Router();

//Api
router.use('/api', require('./api/index'));

//Pages
// router.use('/signup', require('./signupRoute'));
// router.use("/login", );
// router.use("/dashboard", );
// router.use("/blog", );
// router.use("/", );

module.exports = router;
