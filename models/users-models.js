const db = require('../data/dbConfig');


const get = async () => {
  return await db('users');
}

const getBy = async filter => {
  return await db('users').where(filter).first();
}

const add = async user => {
  const [id] = await db('users').insert(user, "id");
  return getBy({ id })
}


module.exports = {
  get,
  getBy,
  add
}