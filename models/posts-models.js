const db = require('../data/dbConfig');

const get = async () => {
  return await db('posts')
}

const getById = async filter => {
  return await db('posts').where(filter);
}

const add = async post => {
  const [id] = await db('posts').insert(post, 'id');
  return getById({id});
}

module.exports = {
  get,
  getById,
  add
}