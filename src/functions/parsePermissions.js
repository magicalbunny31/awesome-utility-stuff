/**
 * formats a permission to a readable string
 * @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 * @param {import("discord.js/typings").PermissionString} permissionString permission to format
 * @example parsePermissions("BAN_MEMBERS"); // ban members 🚫
 * @returns a string of a permission that has been formatted
 */
module.exports = permissionString => {
   const permissions = {
      CREATE_INSTANT_INVITE: `create invite 📩`,
      KICK_MEMBERS: `kick members 👢`,
      BAN_MEMBERS: `ban members 🚫`,
      ADMINISTRATOR: `administrator 🕴`,
      MANAGE_CHANNELS: `manage channels 📝`,
      MANAGE_GUILD: `manage server 📝`,
      ADD_REACTIONS: `add reactions 💬`,
      VIEW_AUDIT_LOG: `view audit log 📋`,
      PRIORITY_SPEAKER: `priority speaker 🔊`,
      STREAM: `video 📹`,
      VIEW_CHANNEL: `view channels 👁‍🗨`,
      SEND_MESSAGES: `send messages 📨`,
      SEND_TTS_MESSAGES: `send text-to-speech messages 📣`,
      MANAGE_MESSAGES: `manage messages 📝`,
      EMBED_LINKS: `embed links 🔗`,
      ATTACH_FILES: `attach files 📄`,
      READ_MESSAGE_HISTORY: `read message history 📋`,
      MENTION_EVERYONE: `mention @everyone, @here and all roles 💬`,
      USE_EXTERNAL_EMOJIS: `use external emojis 🦊`,
      VIEW_GUILD_INSIGHTS: `view server insights 🔮`,
      CONNECT: `connect 🔉`,
      SPEAK: `speak 💬`,
      MUTE_MEMBERS: `mute members 🔇`,
      DEAFEN_MEMBERS: `deafen members 🎧`,
      MOVE_MEMBERS: `move members 📤`,
      USE_VAD: `use voice activity 🎤`,
      CHANGE_NICKNAME: `change nickname 📛`,
      MANAGE_NICKNAMES: `manage nicknames 📝`,
      MANAGE_ROLES: `manage roles 📝`,
      MANAGE_WEBHOOKS: `manage webhooks 🔗`,
      MANAGE_EMOJIS_AND_STICKERS: `manage emojis and stickers 📝`,
      USE_APPLICATION_COMMANDS: `use application commands 🤖`,
      REQUEST_TO_SPEAK: `request to speak 👋`,
      MANAGE_THREADS: `manage threads 📝`,
      USE_PUBLIC_THREADS: `create public threads 💬`,
      USE_PRIVATE_THREADS: `create private threads 💬`,
      USE_EXTERNAL_STICKERS: `use external stickers 🦊`,
      SEND_MESSAGES_IN_THREADS: `send messages in threads 💬`,
      START_EMBEDDED_ACTIVITIES: `start activities 🎮`,
      MODERATE_MEMBERS: `moderate members 🚨`
   };

   return permissions[permissionString];
};