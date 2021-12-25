/**
 * similar to Array.filter(), except elements that don't pass the condition are returned too 🔁
 * @param {any[]} array array to partition 📃
 * @param {(value: any, index: number, array: any[]) => value is any} condition condition to evaluate for each element ❓
 * @example partition([ 1, 3, 5, 7, 9 ], num => num < 5); // [[ 1, 3 ], [ 5, 7, 9 ]]
 * @returns {[ any[], any[] ]} Array[0]: pass; Array[1]: fail - try destructuring them! 📄
 */
module.exports = (array, condition) =>
   array.reduce(([ pass, fail ], element) =>
      condition(element) ? [[ ...pass, element ], fail ] : [ pass, [ ...fail, element ]],
      [[], []]
   );