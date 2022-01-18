module.exports = class Statuses {
   /**
    * status utilities owo 🗨️
    * @param {import("discord.js/typings").ActivitiesOptions[]} statuses array of ActivitiesOptions 📋
    */
   constructor(statuses) {
      this.statuses = statuses;
   };


   /**
    * get a random status ❓
    * @returns {import("discord.js/typings").ActivitiesOptions} ActivitiesOptions 📄
    */
   getStatus() {
      const { choice } = require("../../");
      return choice(this.statuses);
   };
};