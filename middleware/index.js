const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

const Posts = require("../models/posts-models");

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
      if (err)
        return res.status(401).json({ error: "Incorrect token provided" });
      req.decoded = decoded;
      next();
    });
  } else {
    return res
      .status(400)
      .json({ error: "Must provide a token in authorization header" });
  }
};

const validatePostExists = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Posts.getById(id);
    req.post = post;
    next();
  } catch (error) {
    res.status(404).json({ error: "Could not find post with that id" });
  }
};

const validatePostBody = (req, res, next) => {
  const { contents, user_id } = req.body;

  if (!contents || !user_id) {
    return res.status(400).json({ error: "Provide contents and user_id" });
  }

  next();
};

module.exports = {
  authenticateUser,
  validatePostExists,
  validatePostBody,
};
