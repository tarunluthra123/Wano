const bcrypt = require("bcrypt");
const { userIds } = require("../../utils/seed_id");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        username: "johndoe",
        password: bcrypt.hashSync("abc", 10),
        firstName: "John",
        lastName: "Doe",
        id: userIds[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "janedoe",
        password: bcrypt.hashSync("def", 10),
        firstName: "Jane",
        lastName: "Doe",
        id: userIds[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "mugiwara",
        password: bcrypt.hashSync("strawhat", 10),
        firstName: "Luffy",
        lastName: "Monkey D.",
        id: userIds[2],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
