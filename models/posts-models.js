const db = require("../data/dbConfig");

const get = async () => {
  return await db("posts")
    .join("users", "users.id", "posts.user_id")
    .select("posts.*", "users.username");
};

const getById = async (id) => {
  return await db("posts").where({ id }).first();
};

const add = async (post) => {
  const [id] = await db("posts").insert(post, "id");
  return getById(id);
};

const update = async (id, post) => {
  await db("posts").where({ id }).update(post);
  return await db("posts").where({ id });
};

const remove = async (id) => {
  const ticket = await getById(id);
  await db("posts").where({ id }).del();
  return ticket;
};

module.exports = {
  get,
  getById,
  add,
  update,
  remove,
};
