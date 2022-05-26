/**
 * find the sum of an array 🔢
 * @param {T[]} array array of values to find the sum of (very descriptive!!) 📃
 * @param {any} [initialValue] initial value for the reducer function 🏁
 * @returns {T} sum of the array 📩
 */
module.exports = (array, initialValue) => array.reduce((accumulator, current) => accumulator + current, initialValue ?? 0);