/**
 * get a random number! #️⃣
 * @param {number} min minimum number to generate 🔢
 * @param {number} max maximum number to generate 🔢
 * @returns {number}
 */
module.exports = (min, max) => {
   // get a random number
   return Math.floor(Math.random() * (max - min + 1) + min);
};