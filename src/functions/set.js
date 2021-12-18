/**
 * remove duplicates from an array of strings/numbers 📤
 * @param {(string | number)[]} array array of strings/numbers 📃
 * @returns {(string | number)[]}
 */
module.exports = array => [ ...new Set(array) ];