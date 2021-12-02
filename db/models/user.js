"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    strategy: {
      type: DataTypes.ENUM,
      values: ["local", "google", "github"],
      defaultValue: "local",
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Post);
  };

  return User;
};
