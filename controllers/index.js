const router = require('express').Router();

// api routes
router.use('/api', require('./api/index'));
// page routes
router.use('/signup', require('./signup-route'));
// router.use("/login", );
// router.use("/dashboard", );
// router.use("/blog", );
// router.use("/", );

module.exports = router;
