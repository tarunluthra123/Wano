const config = require("../config");
const redis = require("redis");
const util = require("util");
if (config.REDIS_URL) {
  var client = redis.createClient({
    url: config.REDIS_URL,
  });
} else {
  var client = redis.createClient();
}

const REDIS_EXPIRY_TIME = 3600;

client.on("error", (error) => {
  console.error(error);
});

client.on("ready", (msg) => {
  console.log(msg);
});

client.get = util.promisify(client.get);

client.set = function (key, obj, time = REDIS_EXPIRY_TIME) {
  return client.setex(key, time, JSON.stringify(obj));
};

module.exports = client;
