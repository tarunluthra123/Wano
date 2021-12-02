const { v4: uuidv4 } = require("uuid");
const { userIds, postIds } = require("../../utils/seed_id");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Comments", [
      {
        id: uuidv4(),
        content: "Sample comment 1",
        UserId: userIds[0],
        PostId: postIds[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        content:
          "Sample comment 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        UserId: userIds[1],
        PostId: postIds[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        content:
          "Sample comment 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id sagittis sem, quis aliquam tellus. Mauris tempor ligula id mauris auctor, vel dignissim urna ultricies.",
        UserId: userIds[0],
        PostId: postIds[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
