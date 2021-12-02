"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "Follows",
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        FollowerId: {
          type: DataTypes.UUID,
          references: {
            model: "Users",
            key: "id",
          },
        },
        FollowedId: {
          type: DataTypes.UUID,
          references: {
            model: "Users",
            key: "id",
          },
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        indexes: [{ unique: true, fields: ["FollowerId", "FollowedId"] }],
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Follows");
  },
};
