const router = require('express').Router();
const { User } = require('../../models/index');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((data) => data.dataValues);
    res.status(200).json(users);
    console.log('Users');
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
