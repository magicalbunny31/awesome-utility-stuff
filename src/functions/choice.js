/**
 * gets a random element from an array ❓
 * @param {T[]} array array to get a random element from 📃
 * @param {number} [choices] number of choices to get #️⃣
 * @returns {T | T[]} an element of that array 📄
 */
module.exports = (array, choices) => {
   // imports
   const { shuffle } = require("../../");


   // data validation
   if (!Array.isArray(array))
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › choice: not a valid \`array\` parameter value ⚠️`);

   if (choices && typeof choices !== `number`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › choice: not a valid \`choices\` parameter value ⚠️`);


   // get choices
   if (choices) return shuffle(array).slice(0, choices); // get n random choices
   else         return array[Math.floor(Math.random() * array.length)]; // get 1 random choice
};