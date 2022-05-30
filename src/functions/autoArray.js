/**
 * automatically create an array with values filled via a function 🔁
 * @param {number} length how long this array should be #️⃣
 * @param {() => T} func function to run for each element of this array 📃
 * @returns {T[]} array with values filled via a function 📄
 */
module.exports = (length, func) => {
   // data validation
   if (typeof length !== `number`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › autoArray: not a valid \`length\` parameter value ⚠️`);

   if (typeof func !== `function`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › autoArray: not a valid \`func\` parameter value ⚠️`);


   // create the array
   return Array.from({ length }, func);
};