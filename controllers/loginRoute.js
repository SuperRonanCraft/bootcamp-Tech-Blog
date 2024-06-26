const router = require('express').Router();

router.get('/', (req, res) => {
  const loggedIn = req.session.loggedIn;
  if (loggedIn) {
    res.location('/');
  } else {
    res.render('login');
  }
});

module.exports = router;
