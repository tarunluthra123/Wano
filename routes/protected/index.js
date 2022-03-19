const router = require("express").Router();
const profileRouter = require("./profile");
const postsRouter = require("./posts");
const followRouter = require("./follow");
const commentRouter = require("./comment");

router.use("/profile", profileRouter);
router.use("/posts", postsRouter);
router.use("/follow", followRouter);
router.use("/comment", commentRouter);

module.exports = router;
