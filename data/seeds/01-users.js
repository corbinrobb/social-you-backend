exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "steve",
      password: "$2y$08$oc6u/r0E6s.3GakGP.3bV.4xp5HzpQBp1Lbe.4Zhc/i89aoWNyvRe",
      email: "steve@email.com",
      full_name: "Steve Fakename",
    },
  ]);
};
