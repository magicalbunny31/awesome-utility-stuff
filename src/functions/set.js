/**
 * remove duplicates from an array of values 📤
 * @param {T[]} array array of values (presumably with duplicates, duh) 📃
 * @returns {T[]} array of values (except there aren't any duplicate values in them owo) 📄 📄
 */
module.exports = array => {
   // data validation
   if (!Array.isArray(array))
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › set: not a valid \`array\` parameter value ⚠️`);


   // remove duplicates from the array
   return [ ...new Set(array) ];
};