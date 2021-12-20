/**
 * shuffle an array 🔀
 * @param {any[]} array array to shuffle 📃
 * @returns {any[]} a shuffled version of the inputted array 📋
 */
module.exports = array => array.sort(() => .5 - Math.random());