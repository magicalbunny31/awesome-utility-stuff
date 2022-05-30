/**
 * find the sum of an array (aka a quick way of running an addition reducer function) 🔢
 * @param {T[]} array array of values to find the sum of (very descriptive!!) 📃
 * @param {any} [initialValue] initial value for the reducer function 🏁
 * @returns {T} sum of the array 📩
 */
module.exports = (array, initialValue) => {
   // data validation
   if (!Array.isArray(array))
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › sum: not a valid \`array\` parameter value ⚠️`);


   // reduce the array
   return array.reduce((accumulator, current) => accumulator + current, initialValue ?? 0);
};