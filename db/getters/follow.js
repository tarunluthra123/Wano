const { Follow } = require("../models");

async function getFollowingList(id) {
  const followingList = await Follow.findAll({
    where: {
      FollowerId: id,
    },
  });

  const filteredList = followingList.map((followObj) => followObj.FollowedId);

  return filteredList;
}

async function getFollowerList(id) {
  const followerList = await Follow.findAll({
    where: {
      FollowedId: id,
    },
  });

  const filteredList = followerList.map((followObj) => followObj.FollowerId);

  return filteredList;
}

module.exports = {
  getFollowingList,
  getFollowerList,
};
