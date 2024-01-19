/**
 * check if two arrays are equal 🔀
 *
 * this function won't work if the arrays contain [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)s ⚠️
 * @param {A[]} a array to compare 📃
 * @param {B[]} b array to compare 📃
 * @returns {boolean} `true` if these arrays are equal (and vice versa) ❓
 */
module.exports = (a, b) => {
   //? these two arguments are the same
   if (a === b)
      return true;

   //? either of these arguments don't exist
   if (!a || !b)
      return false;

   //? different number of elements
   if (a.length !== b.length)
      return false;

   //? check all elements
   return a.every(element => b.includes(element)) && b.every(element => a.includes(element));
};