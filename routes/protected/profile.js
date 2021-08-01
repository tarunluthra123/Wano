const router = require("express").Router();
const { User } = require("../../db/models");
const {
  getFollowerList,
  getFollowingList,
} = require("../../db/getters/follow");

async function getProfile(id) {
  const user = await User.findByPk(id);
  const profile = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
  };

  const followers = await getFollowerList(id);
  const following = await getFollowingList(id);
  return {
    profile,
    followers,
    following,
  };
}

router.get("/", async (req, res) => {
  const userProfile = await getProfile(req.body.id);

  return res.json({ data: userProfile });
});

router.get("/me", async (req, res) => {
  const userProfile = await getProfile(req.user.id);

  return res.json({ data: userProfile });
});

module.exports = router;
