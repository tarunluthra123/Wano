const nanoid = require("../../utils/nanoid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Follows", [
      {
        FollowerId: "A",
        FollowedId: "B",
        id: nanoid(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        FollowerId: "B",
        FollowedId: "A",
        id: nanoid(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        FollowerId: "A",
        FollowedId: "C",
        id: nanoid(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Follows", null, {});
  },
};
