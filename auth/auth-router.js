const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../models/users-models');
const generateToken = require('./generate-token.js');

router.post('/register', async (req, res) => {
  try {
    const { password } = req.body;

    const hash = await bcrypt.hashSync(password, process.env.HASH_ROUNDS || 8);

    const newUser = await Users.add({ ...req.body, password: hash });

    res.status(201).json({ message: 'Succesfully created new user!'})
  } catch(error) {
    console.log(error)
    res.status(500).json({ error: 'Could not add user to the database'})
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ error: 'Provide both a username and password' });

  try {
    const user = await Users.getBy({ username });
    if(!user) return res.status(404).json({ error: 'Could not find user with that username' })

    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ id: user.id, username, token });
    } else {
      res.status(401).json({ error: 'Password is incorrect' });
    }

  } catch(error) {
    console.log(err);
    res.status(500).json({ message: "Could not retrieve user from database" });
  }
})

module.exports = router;