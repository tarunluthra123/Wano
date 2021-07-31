"use strict";
const nanoid = require("../../utils/nanoid");

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    id: {
      primaryKey: true,
      unique: true,
      defaultValue: nanoid,
      type: DataTypes.STRING(21),
    },
    content: {
      type: DataTypes.STRING,
    },
  });

  Comment.associate = function (models) {
    Comment.belongsTo(models.User);
    Comment.belongsTo(models.Post);
  };

  return Comment;
};
