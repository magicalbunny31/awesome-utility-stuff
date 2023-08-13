/**
 * remove duplicates from an array of values 📤
 * @param {T[]} array array of values (presumably with duplicates, duh) 📃
 * @returns {T[]} array of values (except there aren't any duplicate values in them owo) 📄 📄
 */
module.exports = array => {
   // remove duplicates from the array
   return [ ...new Set(array) ];
};