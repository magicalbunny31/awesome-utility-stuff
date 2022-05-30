/**
 * pretty much "pauses" asynchronous code ⏱️
 * @param {number} delay ms delay to wait for 🔢
 * @returns {Promise<void>} a "pause" in the asynchronous code!! ⌚
 */
module.exports = delay => {
   // data validation
   if (typeof delay !== `number`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › wait: not a valid \`delay\` parameter value ⚠️`);


   // wait..
   return new Promise(resolve => setTimeout(resolve, delay))
};