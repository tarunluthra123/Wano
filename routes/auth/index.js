const router = require("express").Router();
const localRouter = require("./local");
const googleRouter = require("./google");

router.use("/local", localRouter);
router.use("/google", googleRouter);

router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.send({ data: "Successfully logged out" });
});

module.exports = router;
