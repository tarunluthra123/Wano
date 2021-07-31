"use strict";
const nanoid = require("../../utils/nanoid");

module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define("Follow", {
    id: {
      primaryKey: true,
      unique: true,
      defaultValue: nanoid,
      type: DataTypes.STRING(21),
    },
  });

  Follow.associate = function (models) {
    Follow.belongsTo(models.User, { as: "Follower" });
    Follow.belongsTo(models.User, { as: "Followed" });
  };

  return Follow;
};
