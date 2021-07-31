const { customAlphabet } = require("nanoid");
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const nanoid = customAlphabet(ALPHABET, 21);

module.exports = nanoid;
