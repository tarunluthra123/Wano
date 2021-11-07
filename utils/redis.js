const config = require("../config");
const redis = require("redis");
const client = redis.createClient(config.REDIS_PORT);
const util = require("util");

client.on("error", (error) => {
  console.error(error);
});

client.on("ready", (msg) => {
  console.log(msg);
});

client.get = util.promisify(client.get);

module.exports = client;
