const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        username: "johndoe",
        password: bcrypt.hashSync("abc", 10),
        firstName: "John",
        lastName: "Doe",
        id: "A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "janedoe",
        password: bcrypt.hashSync("def", 10),
        firstName: "Jane",
        lastName: "Doe",
        id: "B",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "mugiwara",
        password: bcrypt.hashSync("strawhat", 10),
        firstName: "Luffy",
        lastName: "Monkey D.",
        id: "C",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
