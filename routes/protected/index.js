const router = require("express").Router();
const profileRouter = require("./profile");
const postsRouter = require("./posts");
const followRouter = require("./follow");

router.use("/profile", profileRouter);
router.use("/posts", postsRouter);
router.use("/follow", followRouter);

module.exports = router;
