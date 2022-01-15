/**
 * discord.js >13.4.x broke emojis in constructors, so here's a helper function! 🔁
 * @see https://github.com/discordjs/discord.js/blob/main/packages/discord.js/src/util/Util.js#L293-L298
 * @param {string} emoji text emoji string to parse 🦊
 * @returns {{ animated: boolean, name: string, id: string? }} an object that matches the discord api emoji format 📋
 */
module.exports = emoji => {
   if (emoji.includes(`%`)) emoji = decodeURIComponent(emoji);

   if (!emoji.includes(`:`)) return { animated: false, emoji: emoji, id: null }; // this is a unicode emoji

   const match = emoji.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
   return match && { animated: !!match[1], name: match[2], id: match[3] ?? null };
};