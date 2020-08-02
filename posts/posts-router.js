const router = require('express').Router();
const Posts = require('../models/posts-models');
const { validatePostExists, validatePostBody } = require('../middleware');

router.get('/', async (req, res) => {
  try {
    const allPosts = await Posts.get();
    res.status(200).json(allPosts)
  } catch(error) {
    console.log(error)
    res.status(500).json({ error: 'Could not retrieve posts from database' })
  }
})

router.get('/:id', validatePostExists, (req, res) => {
  res.status(200).json(req.post);
})

router.post('/', validatePostBody, async (req, res) => {
  try {
    const post = await Posts.add(req.body);
    res.status(201).json(post)
  } catch(error) {
    console.log(error)
    res.status(500).json({ error: 'Could not add post to database' })
  }
})

router.put('/:id', validatePostExists, validatePostBody, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await Posts.update(id, req.body);
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not update post in database' })
  }
})

router.delete('/:id', validatePostExists, validatePostBody, async (req, res) => {
  try {
    const { id } = req.params;
    const removedPost = await Posts.remove(id);
    res.status(200).json(removedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not update post in database' })
  }
})

module.exports = router;