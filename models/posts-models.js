const db = require('../data/dbConfig');

const get = async () => {
  return await db('posts')
}


module.exports = {
  get,
}