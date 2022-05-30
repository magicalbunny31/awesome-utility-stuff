/**
 * similar to Array.filter(), except elements that don't pass the condition are returned too 🔁
 * @param {T[]} array array to partition 📃
 * @param {(value: T, index: number, array: T[]) => boolean} condition condition to evaluate for each element ❓
 * @example partition([ 1, 3, 5, 7, 9 ], num => num < 5); // [[ 1, 3 ], [ 5, 7, 9 ]]
 * @returns {[ T[], T[] ]} Array[0]: pass; Array[1]: fail - try destructuring them! 📄
 */
module.exports = (array, condition) => {
   // data validation
   if (!Array.isArray(array))
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › partition: not a valid \`array\` parameter value ⚠️`);

   if (typeof condition !== `function`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › partition: not a valid \`condition\` parameter value ⚠️`);


   // partition the array
   return array.reduce(([ pass, fail ], element) =>
      condition(element) ? [[ ...pass, element ], fail ] : [ pass, [ ...fail, element ]],
      [[], []]
   );
};