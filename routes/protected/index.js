const router = require("express").Router();
const me = require("./me");

router.use("/me", me);

module.exports = router;
