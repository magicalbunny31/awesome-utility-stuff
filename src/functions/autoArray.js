/**
 * automatically create an array with values filled via a function 🔁
 * @param {number} length how long this array should be #️⃣
 * @param {() => T} func function to run for each element of this array 📃
 * @returns {T[]} array with values filled via a function 📄
 */
module.exports = (length, func) => {
   // create the array
   return Array.from({ length }, func);
};