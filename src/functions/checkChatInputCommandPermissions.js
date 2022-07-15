/**
 * 🔎 the following code is ludicrously verbose
 * 📖 however, it's exceptionally readable!!
 * ✨ we (or i) *love* readable code~ ,':3
 */


/**
 * check if a member has permissions to use a (discord) chat-input application command ✅
 * @param {string} commandId id of the command to view permissions of 🔎
 * @param {import("discord.js").GuildMember} member check if this member has permissions to use this (discord) chat-input application command 👥
 * @param {import("discord.js").NewsChannel | import("discord.js").TextChannel | import("discord.js").VoiceChannel} channel channel to check permissions against 💬
 * @param {import("discord.js").PermissionResolvable} [defaultMemberPermission=0n] default member permissions for this (discord) chat-input application command 📃
 * @returns {boolean} whether this member has permissions to use this (discord) chat-input application command 📛
 */
module.exports = async (commandId, member, channel, defaultMemberPermissions = 0n) => {
   // imports
   const { GuildMember, GuildChannel, ChannelType, PermissionsBitField, PermissionFlagsBits, ApplicationCommandPermissionType } = require("discord.js");


   // data validation
   if (typeof commandId !== `string`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › checkChatInputCommandPermissions: not a valid \`commandId\` parameter value ⚠️`);

   if (!member instanceof GuildMember)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › checkChatInputCommandPermissions: not a valid \`member\` parameter value ⚠️`);

   if (!channel instanceof GuildChannel || ![ ChannelType.GuildText, ChannelType.GuildVoice, ChannelType.GuildNews ].includes(channel.type))
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › checkChatInputCommandPermissions: not a valid \`channel\` parameter value ⚠️`);

   if (
      !(
         Array.isArray(defaultMemberPermissions)
            ? defaultMemberPermissions.every(defaultMemberPermission => defaultMemberPermission instanceof PermissionsBitField || [ `string`, `bigint` ].includes(typeof defaultMemberPermission))
            : defaultMemberPermissions instanceof PermissionsBitField || [ `string`, `bigint` ].includes(typeof defaultMemberPermissions)
      )
   )
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › checkChatInputCommandPermissions: not a valid \`defaultMemberPermissions\` parameter value ⚠️`);


   // function to manually fetch command permissions (discord.js REST module is being a crybaby and keeps throwing)
   const fetchCommandPermissions = async commandId => {
      try {
         // https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions
         const applicationId = member.client.application.id;
         const guildId = member.guild.id;
         const { permissions } = await member.client.rest.get(`/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`);
         return permissions;

      } catch {
         // no set permissions
         return undefined;
      };
   };


   // get permissions
   const guildId  = member.guild.id;
   const clientId = member.client.user.id;

   // https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
   //                  command with explicit overwrites           commands without explicit overwrites      no set permissions
   const permissions = await fetchCommandPermissions(commandId) || await fetchCommandPermissions(clientId) || [];


   // permission constants
   const AllMembers  =           guildId;
   const AllChannels = `${BigInt(guildId) - 1n}`;


   // restore default permissions if none are set
   if (!permissions.length)
      permissions.push({
         id: AllMembers,
         permission: true,
         type: ApplicationCommandPermissionType.User
      }, {
         id: AllChannels,
         permission: true,
         type: ApplicationCommandPermissionType.Channel
      });


   // this member has administrator permissions: they're granted explicit permissions to use the command
   if (member.permissions.has(PermissionFlagsBits.Administrator))
      return true;


   // this command is denied for all members and this member isn't an exception (and no granted roles are included)
   if (
      !permissions.find(permission => permission.id === AllMembers)?.permission
      && !permissions.find(permission => permission.id === member.id)?.permission
      && !permissions.filter(permission => permission.id !== AllMembers && permission.type === ApplicationCommandPermissionType.Role && permission.permission)?.length
   )
      return false;


   // this command is denied in all channels and this channel isn't an exception
   if (
      !permissions.find(permission => permission.id === AllChannels)?.permission
      && !permissions.find(permission => permission.id === channel.id)?.permission
   )
      return false;


   // this member is explicitly granted permissions to use this command
   if (permissions.find(permission => permission.id === member.id)?.permission)
      return true;


   // this member's roles grant this member permissions to use this command
   if (
      member.roles.cache
         .filter(role => role.id !== AllMembers)                                                // don't check their @everyone role
         .filter(role => permissions.find(permission => permission.id === role.id)?.permission) // this role is granted permissions (as long as one of their roles grant permissions, they'll be able to use the command)
         .size
   )
      return true;


   // this member lacks the default member permissions to use this command
   if (!member.permissions.has(defaultMemberPermissions))
      return false;


   // this is member is denied permissions to use this command
   return false;
};