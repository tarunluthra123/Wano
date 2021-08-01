const passport = require("../../utils/passport");
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
const router = require("express").Router();

router.post("/login", passport.authenticate("local"), function (req, res) {
  if (req.user) return res.send({ data: req.user });
  else return res.status(401).send({ error: "Unauthorized" });
});

router.post("/register", async function (req, res) {
  let { username, password, firstName, lastName } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password must be provided" });
  }
  password = bcrypt.hashSync(password, 10);

  const [user, created] = await User.findOrCreate({
    where: { username },
    defaults: {
      username,
      firstName,
      lastName,
      password,
    },
  });

  if (!created) {
    return res.status(400).json({ error: "Username already taken" });
  }
  return res.status(201).json({ data: user });
});

module.exports = router;
