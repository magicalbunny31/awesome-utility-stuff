/**
 * convert a colour to decimal format ➡️
 * @param {any} colourToConvert colour to convert 🎨
 * @returns {number} decimal number (integer) colour value 🎨
 */
const colour = require("color");
module.exports = colourToConvert => colour(colourToConvert).rgbNumber();