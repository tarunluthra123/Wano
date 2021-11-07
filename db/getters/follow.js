const { Follow } = require("../models");

async function getFollowingList(id) {
  const followingList = await Follow.findAll({
    where: {
      FollowerId: id,
    },
  });

  const filteredList = followingList.map((followObj) => ({
    id: followObj.id,
    FollowedId: followObj.FollowedId,
  }));

  return filteredList;
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
