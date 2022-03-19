/**
 * convert a colour to hexadecimal format ➡️
 * @param {any} colourToConvert colour to convert 🎨
 * @returns {string} hex string colour value 🎨
 */
const colour = require("color");
module.exports = colourToConvert => colour(colourToConvert).hex();