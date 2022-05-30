/**
 * convert a colour to hexadecimal format ➡️
 * @param {typeof import("color")} colourToConvert colour to convert 🎨
 * @returns {string} hex string colour value 🎨
 */
module.exports = colourToConvert => {
   // imports
   const colour = require("color");

   // convert the colour
   return colour(colourToConvert).hex();
};