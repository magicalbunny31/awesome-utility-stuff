/**
 * function to try to fetch something or return undefined instead of throwing ⏱️
 * @param {T} promise the Promise to try 📂
 * @returns {T?} the resolved Promise, or `undefined` if the Promise couldn't be resolved 📄
 */
module.exports = async promise => {
   try {
      return await promise;
   } catch {
      return undefined;
   };
};