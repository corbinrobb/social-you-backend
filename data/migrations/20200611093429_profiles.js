
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
    tbl.increments();
    tbl.string('username', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128).notNullable();
    tbl.string('email', 128)
      .notNullable()
      .unique();
    tbl.string('full_name', 128).notNullable();
    tbl.text('bio');
    tbl.string('location', 128);
    tbl.string('company', 128);
    tbl.string('profile_pic_url');
  })
  .createTable('posts', tbl => {
    tbl.increments();
    tbl.timestamp('posted_at').defaultTo(knex.fn.now());
    tbl.text('contents').notNullable();
    tbl.string('post_pic_url')
    tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('profiles');
};
