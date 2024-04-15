const router = require('express').Router();
const { User } = require('../../models/index');

router.post('/', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }
    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;
      res.status(200).json({ message: 'You are now logged in!' });
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
