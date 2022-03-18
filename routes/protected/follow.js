const router = require("express").Router();
const { Follow } = require("../../db/models");
const {
  getFollowingList,
  getFollowerList,
} = require("../../db/getters/follow");

// Follow someone
router.post("/", async (req, res) => {
  const follower = req.user.id;
  const followed = req.body.id;
  try {
    const result = await Follow.create({
      FollowerId: follower,
      FollowedId: followed,
    });

    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(400).json({ errors: error.errors });
  }
});

// Get list of followings and followers
router.get("/", async (req, res) => {
  const followingList = await getFollowingList(req.user.id);
  const followerList = await getFollowerList(req.user.id);

  return res.json({ data: { followingList, followerList } });
});

module.exports = router;
