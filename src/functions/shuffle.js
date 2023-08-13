/**
 * shuffle an array 🔀
 * @param {T[]} array array to shuffle 📃
 * @returns {T[]} a shuffled version of the inputted array 📋
 */
module.exports = array => {
   // shuffle the array
   return array.sort(() => .5 - Math.random());
};