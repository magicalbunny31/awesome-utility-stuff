/**
 * get the nearest coloured paw from a hex colour value 🐾
 * @param {string} hex hex string colour value to use 🎨
 * @returns {string} nearest coloured paw emoji 🐾
 */
module.exports = hex => {
   // imports
   const { emojis } = require("../../");
   const { from: nearestColourFrom } = require("nearest-color");


   // colours
   const colours = {
      red:    `#f60000`,
      orange: `#ffc800`,
      yellow: `#ffee00`,
      green:  `#4de94c`,
      blue:   `#3783ff`,
      purple: `#4815aa`,
      pink:   `#fe83c6`
   };


   // emojis
   const paws = {
      red:    emojis.red_paws,
      orange: emojis.orange_paws,
      yellow: emojis.yellow_paws,
      green:  emojis.green_paws,
      blue:   emojis.blue_paws,
      purple: emojis.purple_paws,
      pink:   emojis.pink_paws
   };


   // get the nearest coloured paw from a hex colour value 🐾
   const nearestColour = nearestColourFrom(colours);

   const { name } = nearestColour(hex);
   const paw = paws[name];

   return paw;
};