const router = require("express").Router();
const Users = require("../models/users-models");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.getBy({ id });
    res.status(200).json({ ...user, password: null });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retrieve user from database" });
  }
});

module.exports = router;
