const { Comment } = require("../models");

function getCommentsForPost(postId) {
  return Comment.findAll({
    where: {
      PostId: postId,
    },
  });
}

module.exports = {
  getCommentsForPost,
};
