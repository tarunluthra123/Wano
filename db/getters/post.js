const { Post } = require("../models");
const { Op } = require("sequelize");
const { getFollowingList } = require("./follow");

async function getPostsFromList(followingList) {
  const listOfUsers = followingList.map((followObj) => followObj.FollowedId);
  const posts = await Post.findAll({
    where: {
      UserId: {
        [Op.in]: listOfUsers,
      },
    },
  });

  return posts;
}

async function getFollowingPosts(id) {
  const followingList = await getFollowingList(id);
  const posts = await getPostsFromList(followingList);
  return posts;
}

async function getAllPostsOfUser(id) {
  const posts = await Post.findAll({ where: { UserId: id } });
  return posts;
}

module.exports = {
  getPostsFromList,
  getFollowingPosts,
  getAllPostsOfUser,
};
