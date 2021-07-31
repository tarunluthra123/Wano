const localRouter = require("./local");
const router = require("express").Router();

router.use("/local", localRouter);

module.exports = router;
