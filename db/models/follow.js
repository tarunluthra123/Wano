"use strict";

module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define(
    "Follow",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    },
    {
      indexes: [{ unique: true, fields: ["FollowerId", "FollowedId"] }],
    }
  );

  Follow.associate = function (models) {
    Follow.belongsTo(models.User, { as: "Follower" });
    Follow.belongsTo(models.User, { as: "Followed" });
  };

  return Follow;
};
