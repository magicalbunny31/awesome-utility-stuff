/**
 * similar to Array.filter(), except elements that don't pass the condition are returned too 🔁
 * @param {T[]} array array to partition 📃
 * @param {(value?: T, index?: number, array?: T[]) => boolean} condition condition to evaluate for each element ❓
 * @example partition([ 1, 3, 5, 7, 9 ], num => num < 5); // [[ 1, 3 ], [ 5, 7, 9 ]]
 * @returns {[ T[], T[] ]} Array[0]: pass; Array[1]: fail - try destructuring them! 📄
 */
module.exports = (array, condition) => {
   // partition the array
   return array.reduce(([ pass, fail ], element, index, array) =>
      condition(element, index, array) ? [[ ...pass, element ], fail ] : [ pass, [ ...fail, element ]],
      [[], []]
   );
};