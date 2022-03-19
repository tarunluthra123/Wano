const router = require("express").Router();
const { Comment } = require("../../db/models");
const { getCommentsForPost } = require("../../db/getters/comment");

router.get("/", async (req, res) => {
  const comments = await getCommentsForPost(req.query.postId);
  return res.json({ data: comments });
});

router.post("/", async (req, res) => {
  const { content, postId } = req.body;
  const userId = req.user.id;
  try {
    const newComment = await Comment.create({
      content,
      PostId: postId,
      UserId: userId,
    });
    return res.status(201).json({ data: newComment });
  } catch (error) {
    return res.status(400).json({ errors: error.errors });
  }
});

module.exports = router;
