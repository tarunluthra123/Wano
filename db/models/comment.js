"use strict";

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
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
