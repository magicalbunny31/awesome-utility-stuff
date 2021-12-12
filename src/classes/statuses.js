module.exports = class Statuses {
   /**
    * status utilities owo
    * @param {import("discord.js/typings").PresenceData[]} statuses array of PresenceData
    */
   constructor(statuses) {
      this.statuses = statuses;
   };


   /**
    * get a random status
    * @returns {import("discord.js/typings").PresenceData} PresenceData
    */
   getStatus() {
      return this.statuses[Math.floor(Math.random() * this.statuses.length)];
   };
};