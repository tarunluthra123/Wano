const { Follow } = require("../models");

async function getFollowingList(id) {
  const followingList = await Follow.findAll({
    where: {
      FollowerId: id,
    },
  });

  return followingList;
}

async function getFollowerList(id) {
  const followerList = await Follow.findAll({
    where: {
      FollowedId: id,
    },
  });

  const filteredList = followerList.map((followObj) => ({
    id: followObj.id,
    FollowerId: followObj.FollowerId,
  }));

  return filteredList;
}

module.exports = {
  getFollowingList,
  getFollowerList,
};
