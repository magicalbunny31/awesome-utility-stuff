/**
 * formats a permission to a readable string 📝
 * @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags 🔗
 * @param {import("discord.js").PermissionFlagsBits[] | number | bigint} permissionsInput permission to format 🗨️
 * @example
 * formatPermission([ PermissionFlagsBits.BanMembers, PermissionFlagsBits.KickMembers ]);
 * formatPermission(0x6);
 * formatPermission(0x6n);
 * // [ `Ban Members 🚫`, `Kick Members 👢` ]
 * @returns {string[]} array of a permission strings that have been formatted 📄
 */
module.exports = permissionsInput => {
   // imports
   const { sum } = require("../../");


   // data validation
   if (
      Array.isArray(permissionsInput)
         ? !permissionsInput.every(permission => typeof permission === `bigint`)
         : ![ `number`, `bigint` ].includes(typeof permissionsInput)
   )
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › formatPermissions: not a valid \`permissionsInput\` parameter value ⚠️`);


   // get the permissionsInput as a BigInt
   const permissions = Array.isArray(permissionsInput)
      ? sum(permissionsInput, 0n)
      : BigInt(permissionsInput);


   // list of permissions
   const permissionsList = {
      // general server permissions
      [0x0000000000000400]: `View Channels 👁‍🗨`,
      [0x0000000000000010]: `Manage Channels 📝`,
      [0x0000000010000000]: `Manage Roles 🏷️`,
      [0x0000000040000000]: `Manage Emojis and Stickers 🦊`,
      [0x0000000000000080]: `View Audit Log 📋`,
      [0x0000000000080000]: `View Server Insights 🔮`,
      [0x0000000020000000]: `Manage Webhooks 📢`,
      [0x0000000000000020]: `Manage Server 🔧`,

      // membership permissions
      [0x0000000000000001]: `Create Invite 📨`,
      [0x0000000004000000]: `Change Nickname 📛`,
      [0x0000000008000000]: `Manage Nicknames 👥`,
      [0x0000000000000002]: `Kick Members 👢`,
      [0x0000000000000004]: `Ban Members 🚫`,
      [0x0000010000000000]: `Moderate Members 🚨`,

      // text channel permissions
      [0x0000000000000800]: `Send Messages 📨`,
      [0x0000004000000000]: `Send Messages in Threads 🧵`,
      [0x0000000800000000]: `Create Public Threads 🔓`,
      [0x0000001000000000]: `Create Private Threads 🔒`,
      [0x0000000000004000]: `Embed Links 🔗`,
      [0x0000000000008000]: `Attach Files 📄`,
      [0x0000000000000040]: `Add Reactions 🙀`,
      [0x0000000000040000]: `Use External Emojis 🐱`,
      [0x0000002000000000]: `Use External Stickers 🖼️`,
      [0x0000000000020000]: `Mention @everyone, @here and All Roles ❗`,
      [0x0000000000002000]: `Manage Messages 🗃️`,
      [0x0000000400000000]: `Manage Threads 📂`,
      [0x0000000000010000]: `Read Message History 📃`,
      [0x0000000000001000]: `Send Text-to-speech Messages 📣`,
      [0x0000000080000000]: `Use Application Commands 🤖`,

      // voice channel permissions
      [0x0000000000100000]: `Connect 📲`,
      [0x0000000000200000]: `Speak 🔉`,
      [0x0000000000000200]: `Video 📹`,
      [0x0000008000000000]: `Use Activities 🚀`,
      [0x0000000002000000]: `Use Voice Activity 🎙️`,
      [0x0000000000000100]: `Priority Speaker 🔊`,
      [0x0000000000400000]: `Mute Members 🔇`,
      [0x0000000000800000]: `Deafen Members 🎧`,
      [0x0000000001000000]: `Move Members 📥`,

      // stage channel permissions
      [0x0000000100000000]: `Request to Speak 👋`,

      // events permissions
      [0x0000000200000000]: `Manage Events 🗓️`,

      // advanced
      [0x0000000000000008]: `Administrator 💼`
   };


   // array of permission strings
   const permissionStrings = [];


   // check permissions against permissionsList
   for (const value in permissionsList) {
      const permission = permissionsList[value];

      if ((permissions & BigInt(value)) === BigInt(value))
         permissionStrings.push(permission);
   };


   // return the array of permission strings
   return permissionStrings;
};