const router = require("express").Router();
const auth = require("./auth");
const protected = require("./protected");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send({ error: "Unauthorized" });
}

router.get("/ping", (req, res) => {
  return res.status(200).send({ msg: "Server up and running." });
});

router.use("/auth", auth);
router.use("/protected", ensureAuthenticated, protected);

module.exports = router;
