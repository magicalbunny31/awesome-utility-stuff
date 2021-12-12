/**
 * gets a random element from an array
 * @param {any[]} array array to get a random element from
 * @returns {any}
 */
module.exports = array => array[Math.floor(Math.random() * array.length)];