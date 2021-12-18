/**
 * get a random number! #️⃣
 * @param {number} min minimum number to generate (inclusive) 🔢
 * @param {number} max maximum number to generate 🔢
 * @returns {number}
 */
module.exports = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);