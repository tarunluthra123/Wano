const router = require("express").Router();
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/callback", passport.authenticate("google"), (req, res) => {
  console.log("hi");
  return res.send({ msg: "fuck yeah", user: req.user });
});

module.exports = router;
