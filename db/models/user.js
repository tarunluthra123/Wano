"use strict";
const nanoid = require("../../utils/nanoid");

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
      type: DataTypes.STRING(30),
      defaultValue: nanoid,
    },
    strategy: {
      type: DataTypes.STRING,
      defaultValue: "local",
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Post);
  };

  return User;
};
