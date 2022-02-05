/**
 * remove duplicates from an array of strings/numbers 📤
 * @param {any[]} array array of strings/numbers 📃
 * @returns {any[]} 📄
 */
module.exports = array => [ ...new Set(array) ];