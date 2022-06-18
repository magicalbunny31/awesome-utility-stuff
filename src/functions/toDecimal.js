/**
 * convert a colour to decimal format ➡️
 * @param {typeof import("color")} colourToConvert colour to convert 🎨
 * @returns {number} decimal number (integer) colour value 🎨
 */
module.exports = colourToConvert => {
   // imports
   const colour = require("color");


   // convert the colour
   return colour(colourToConvert).rgbNumber();
};