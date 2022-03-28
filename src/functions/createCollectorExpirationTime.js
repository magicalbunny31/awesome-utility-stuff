/**
 * creates a discord.js Collector expiration time from a timestamp ⏳
 *
 * this time will be roughly when the interaction's token invalidates ❌
 * @param {number} timestamp timestamp (in ms) of the interaction ⌚
 * @returns {number} period of time in 15 minutes from the timestamp but minus 3 seconds for good measure owo 🕑
 */
module.exports = timestamp => {
   // timestamp of when this interaction's token will become invalidated
   // in 15 minutes but minus 3 seconds for good measure owo
   const invalidatedTimestamp = timestamp + 900000 - 3000;

   const tokenInvalidatedInSeconds = invalidatedTimestamp - Date.now();

   return tokenInvalidatedInSeconds;
};