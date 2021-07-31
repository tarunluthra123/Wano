"use strict";
const nanoid = require("../../utils/nanoid");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    content: DataTypes.TEXT,
    id: {
      primaryKey: true,
      unique: true,
      defaultValue: nanoid(),
      type: DataTypes.STRING(5),
    },
  });

  Post.associate = function (models) {
    Post.belongsTo(models.User);
  };

  return Post;
};
