const router = require("express").Router();
const { Post } = require("../../db/models");
const {
  getAllPostsOfUser,
  getFollowingPosts,
} = require("../../db/getters/post");

// Returns posts of current user
router.get("/", async (req, res) => {
  const posts = await getAllPostsOfUser(req.user.id);
  return res.json({ data: posts });
});

// Returns feed posts of all users that current user follows
router.get("/feed", async (req, res) => {
  const posts = await getFollowingPosts(req.user.id);

  return res.json({ data: posts });
});

// Returns posts of specified user
router.get("/explore", async (req, res) => {
  const posts = await getAllPostsOfUser(req.query.id);

  return res.json({ data: posts });
});

// Create a post
router.post("/", async (req, res) => {
  const { content } = req.body;
  const newPost = await Post.create({ content, UserId: req.user.id });

  return res.status(201).json({ data: newPost });
});

module.exports = router;
