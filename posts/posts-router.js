const router = require('express').Router();
const Posts = require('../models/posts-models');

router.get('/', async (req, res) => {
  try {
    const allPosts = await Posts.get();
    res.status(200).json(allPosts)
  } catch(error) {
    console.log(error)
    res.status(500).json({ error: 'Could not retrieve posts from database' })
  }
})

router.post('/', async (req, res) => {
  try {
    const post = await Posts.add(req.body);
    res.status(201).json(post)
  } catch(error) {
    console.log(error)
    res.status(500).json({ error: 'Could not add post to database' })
  }
})


module.exports = router;