"use strict";
const nanoid = require("../../utils/nanoid");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    content: DataTypes.TEXT,
    id: {
      primaryKey: true,
      unique: true,
      defaultValue: nanoid,
      type: DataTypes.STRING(21),
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  Post.associate = function (models) {
    Post.belongsTo(models.User);
  };

  return Post;
};
