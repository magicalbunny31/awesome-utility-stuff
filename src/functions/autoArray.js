/**
 * automatically create an array with values filled via a function 🔁
 * @param {number} length how long this array should be #️⃣
 * @param {() => value is any} func function to run for each element of this array 📃
 * @returns {any[]} array with values filled via a function 📄
 */
module.exports = (length, func) =>
   Array.from({ length }, func);