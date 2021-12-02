const { v4: uuidv4 } = require("uuid");

function generateArray(length) {
  return Array.from({ length }, () => uuidv4());
}

const userIds = generateArray(5);
const postIds = generateArray(5);

module.exports = {
  userIds,
  postIds,
};
