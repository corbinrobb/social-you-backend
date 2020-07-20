const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');


const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Incorrect token provided' });
      req.decoded = decoded;
      next()
    })
  } else {
    return res.status(400).json({ error: 'Must provide a token in authorization header' })
  }
}

module.exports = {
  authenticateUser
}