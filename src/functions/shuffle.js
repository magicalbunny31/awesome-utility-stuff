/**
 * shuffle an array 🔀
 * @param {T[]} array array to shuffle 📃
 * @returns {T[]} a shuffled version of the inputted array 📋
 */
module.exports = array => {
   // data validation
   if (!Array.isArray(array))
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › shuffle: not a valid \`array\` parameter value ⚠️`);


   // shuffle the array
   return array.sort(() => .5 - Math.random());
};