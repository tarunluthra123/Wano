const { customAlphabet } = require("nanoid");
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const nanoid = customAlphabet(ALPHABET, 5);

module.exports = nanoid;
