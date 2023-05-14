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
   const { PermissionFlagsBits } = require("discord.js");


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
      [PermissionFlagsBits.ViewChannel]:            `View Channels 👁‍🗨`,
      [PermissionFlagsBits.ManageChannels]:         `Manage Channels 📝`,
      [PermissionFlagsBits.ManageRoles]:            `Manage Roles 🏷️`,
      [PermissionFlagsBits.ManageGuildExpressions]: `Manage Expressions 🦊`,
      [PermissionFlagsBits.ViewAuditLog]:           `View Audit Log 📋`,
      [PermissionFlagsBits.ViewGuildInsights]:      `View Server Insights 🔮`,
      [PermissionFlagsBits.ManageWebhooks]:         `Manage Webhooks 📢`,
      [PermissionFlagsBits.ManageGuild]:            `Manage Server 🔧`,

      // membership permissions
      [PermissionFlagsBits.CreateInstantInvite]: `Create Invite 📨`,
      [PermissionFlagsBits.ChangeNickname]:      `Change Nickname 📛`,
      [PermissionFlagsBits.ManageNicknames]:     `Manage Nicknames 👥`,
      [PermissionFlagsBits.KickMembers]:         `Kick Members 👢`,
      [PermissionFlagsBits.BanMembers]:          `Ban Members 🚫`,
      [PermissionFlagsBits.ModerateMembers]:     `Moderate Members 🚨`,

      // text channel permissions
      [PermissionFlagsBits.SendMessages]:           `Send Messages 📨`,
      [PermissionFlagsBits.SendMessagesInThreads]:  `Send Messages in Threads 🧵`,
      [PermissionFlagsBits.CreatePublicThreads]:    `Create Public Threads 🔓`,
      [PermissionFlagsBits.CreatePrivateThreads]:   `Create Private Threads 🔒`,
      [PermissionFlagsBits.EmbedLinks]:             `Embed Links 🔗`,
      [PermissionFlagsBits.AttachFiles]:            `Attach Files 📄`,
      [PermissionFlagsBits.AddReactions]:           `Add Reactions 🙀`,
      [PermissionFlagsBits.UseExternalEmojis]:      `Use External Emojis 🐱`,
      [PermissionFlagsBits.UseExternalStickers]:    `Use External Stickers 🖼️`,
      [PermissionFlagsBits.MentionEveryone]:        `Mention @everyone, @here and All Roles ❗`,
      [PermissionFlagsBits.ManageMessages]:         `Manage Messages 🗃️`,
      [PermissionFlagsBits.ManageThreads]:          `Manage Threads 📂`,
      [PermissionFlagsBits.ReadMessageHistory]:     `Read Message History 📃`,
      [PermissionFlagsBits.SendTTSMessages]:        `Send Text-to-speech Messages 📣`,
      [PermissionFlagsBits.UseApplicationCommands]: `Use Application Commands 🤖`,
      [PermissionFlagsBits.SendVoiceMessages]:      `Send Voice Messages 🗣️`,

      // voice channel permissions
      [PermissionFlagsBits.Connect]:               `Connect 📲`,
      [PermissionFlagsBits.Speak]:                 `Speak 🔉`,
      [PermissionFlagsBits.Stream]:                `Video 📹`,
      [PermissionFlagsBits.UseEmbeddedActivities]: `Use Activities 🚀`,
      [PermissionFlagsBits.UseSoundboard]:         `Use Soundboard 🎉`,
      [PermissionFlagsBits.UseExternalSounds]:     `Use External Sounds 🔉`,
      [PermissionFlagsBits.UseVAD]:                `Use Voice Activity 🎙️`,
      [PermissionFlagsBits.PrioritySpeaker]:       `Priority Speaker 🔊`,
      [PermissionFlagsBits.MuteMembers]:           `Mute Members 🔇`,
      [PermissionFlagsBits.DeafenMembers]:         `Deafen Members 🎧`,
      [PermissionFlagsBits.MoveMembers]:           `Move Members 📥`,

      // stage channel permissions
      [PermissionFlagsBits.RequestToSpeak]: `Request to Speak 👋`,

      // events permissions
      [PermissionFlagsBits.ManageEvents]: `Manage Events 🗓️`,

      // advanced
      [PermissionFlagsBits.Administrator]: `Administrator 💼`,

      // idk
      [PermissionFlagsBits.ViewCreatorMonetizationAnalytics]: `View Creator Monetization Analytics 📈`
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