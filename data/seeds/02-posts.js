exports.seed = function (knex) {
  return knex("posts").insert([
    {
      contents:
        "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
      user_id: 1,
    },
  ]);
};
