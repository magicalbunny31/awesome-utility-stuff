/**
 * check if the correct user responds to a MessageComponent and, if not, responds to it 📋
 * @param {import("discord.js").User} expectedUser the user that should be able to interact with this MessageComponent 👤
 * @param {import("discord.js").User} receivedUser the user that ended up interacting with this MessageComponent 👥
 * @param {import("discord.js").MessageComponentInteraction} interaction the interaction to respond to 💬
 * @returns {Promise<void>} nothing, or the interaction responded to ✅
 */
module.exports = async (expectedUser, receivedUser, interaction) => {
   // imports
   const { EmbedBuilder } = require("discord.js");
   const { colours, emojis, choice, strip } = require("../../");


   // the expectedUser is the receivedUser
   if (expectedUser.id === receivedUser.id)
      return;


   // interaction type
   const type = (() => {
      switch (true) {
         case interaction.isAnySelectMenu?.(): return `select menu`;
         case interaction.isButton?.():        return `button`;
         default:                              return `message component`;
      };
   })();


   // responses
   const response = choice([
      `${emojis.pout} literally 1984`,
      `${emojis.aie} NO TOUCHIES!!`,
      `${emojis.oi} how'd ya like it if i interacted with YOUR components??`,
      `${emojis.boooo} grrr`,
      `${emojis.blushy} uhm....you're not ${expectedUser}..`,
      `${emojis.scree} wah!`,
      `${emojis.ow} think you're tough now, tough guy?`,
      `${emojis.claps} wow that's so funny yeah`,
      `${emojis.hwat} skill issue`,
      `${emojis.rip} *CRY SOME MORE!*`,
      `${emojis.why} you couldn't resist....huh?`,
      `${emojis.bap} keep those boopers to yourself!`,
      `${emojis.yeet} what the heck man`,
      `${emojis.shrug} well i didn't expect *that*!`,
      `${emojis.furthinking} ${expectedUser} ≠ ${receivedUser}`,
      `${emojis.why} no, no, no!`
   ]);


   // embeds
   const embeds = [
      new EmbedBuilder()
         .setColor(colours.red)
         .setDescription(strip`
            ### ${emojis.no} only ${expectedUser} can interact with this ${type} - not you!
            > ${response} 
         `)
         .setFooter({
            text: `🆔 ${interaction.id}`
         })
   ];


   // respond to the interaction
   await interaction.reply({
      embeds,
      ephemeral: true
   });
};