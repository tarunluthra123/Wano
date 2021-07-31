const nanoid = require("../../utils/nanoid");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        username: "johndoe",
        password: "abc",
        firstName: "John",
        lastName: "Doe",
        id: nanoid(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "janedoe",
        password: "def",
        firstName: "Jane",
        lastName: "Doe",
        id: nanoid(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "mugiwara",
        password: "strawhat",
        firstName: "Luffy",
        lastName: "Monkey D.",
        id: nanoid(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
