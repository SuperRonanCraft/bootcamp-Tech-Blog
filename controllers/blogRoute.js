const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    fetch('/api/blog', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        res.render('blog', {
          blog,
          loggedIn: req.session.loggedIn,
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
