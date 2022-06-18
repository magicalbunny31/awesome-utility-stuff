/**
 * get a partial emoji object with `id`, `name` and `animated` - perfect for message components! 🔁
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object
 * @param {string} emoji text emoji string to parse 🦊
 * @returns {{ animated: boolean, name: string, id: string? }} object that matches the discord api emoji format 📋
 */
module.exports = emoji => {
   // data validation
   if (typeof emoji !== `string`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › partialEmoji: not a valid \`emoji\` parameter value ⚠️`);


   // return the partial emoji
   if (emoji.includes(`%`)) emoji = decodeURIComponent(emoji);

   if (!emoji.includes(`:`)) return { animated: false, emoji: emoji, id: null }; // this is a unicode emoji

   const match = emoji.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
   return match && { animated: !!match[1], name: match[2], id: match[3] ?? null };
};