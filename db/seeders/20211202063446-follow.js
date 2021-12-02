const { v4: uuidv4 } = require("uuid");
const { userIds } = require("../../utils/seed_id");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Follows", [
      {
        FollowerId: userIds[0],
        FollowedId: userIds[1],
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        FollowerId: userIds[1],
        FollowedId: userIds[0],
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        FollowerId: userIds[0],
        FollowedId: userIds[2],
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Follows", null, {});
  },
};
