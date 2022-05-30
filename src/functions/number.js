/**
 * get a random number! #️⃣
 * @param {number} min minimum number to generate 🔢
 * @param {number} max maximum number to generate 🔢
 * @returns {number}
 */
module.exports = (min, max) => {
   // data validation
   if (typeof min !== `number`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › number: not a valid \`min\` parameter value ⚠️`);

   if (typeof max !== `number`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › number: not a valid \`max\` parameter value ⚠️`);


   // get a random number
   return Math.floor(Math.random() * (max - min + 1) + min);
};