const { User, Collection, GuildChannel, Snowflake, Role } = require("discord.js");


/**
 * example names for users 👥
 */
const userNames = [
   /* ⬇⬇⬇ my bots ⬇⬇⬇ */
   `bun 🐰🐾`, `fox kit 🦊🐾`, `berry bot`, `The Lobster Bot`, `aviflight558`,
   /* ⬇⬇⬇ fwends ⬇⬇⬇ */
   `Aviation 🛫`, `Bear 🐻`,  `ChLu`,   `ema 🐱`,  `fricking j`, `lucy`,    `Lobster 🦞`, `Shadow ⚫`,     `Toasty 🍞`, `Ash`,
   `Dragun 🐉`,   `Otter 🦦`, `fox 🦊`, `blox ⏹`, `blu 💠`,    `boba 🍵`, `dor 🚪`,     `dork 🤓`,       `epic 😎`,   `fard 📘`,
   `boop 🦊`,     `Inky 🦑`,  `jooj`,   `juuz 🍊`,  `kito 🔪`,   `lil`,     `kenny`,      `Strawberry 🍓`, `keith`,      `hugo 🧨`,
   `yas ✅`,      `sylveon`,
   /* ⬇⬇⬇ bunnies ⬇⬇⬇ */
   `Brownie`, `Cutie`, `Shadoku`, `Whiteflake`, `Puffy`, `Kodiak`, `Zingo`,
   /* ⬇⬇⬇ other ⬇⬇⬇ */
   `Romeo 🦊`, `FOX 🦊🦊🦊`, `winterwolf 🐺`, `folf 🦊🐺`, `bunny 🐰`,
   /* ⬇⬇⬇ balto characters ⬇⬇⬇ */
   `Aleu`,   `Aniu`,   `Balto`, `Boris`, `Dingo`, `Dixie`, `Sylvie`, `Dakota`, `Doc`,    `Dusty`,
   `Jenna`,  `Kaltag`, `Kirby`, `Kodi`,  `Mel`,   `Dipsy`, `Morse`,  `Muk`,    `Luk`,    `Muru`,
   `Nava`,   `Niju`,   `Nikki`, `Nuk`,   `Yak`,   `Sumac`, `Ralph`,  `Saba`,   `Silver`, `Star`,
   `Steele`, `Stella`, `Tana`,  `Vike`,  `Wild Joe`
];


/**
 * example names for roles 📃
 */
const roleNames = [
   /* ⬇⬇⬇ typical role names ⬇⬇⬇ */
   `administrator`,  `administrators`,  `Administrator`,  `Administrators`,  `ADMINISTRATOR`,  `ADMINISTRATORS`,
   `admin`,          `admins`,          `Admin`,          `Admins`,          `ADMIN`,          `ADMINS`,
   `moderator`,      `moderators`,      `Moderator`,      `Moderators`,      `MODERATOR`,      `MODERATORS`,
   `mod`,            `mods`,            `Mod`,            `Mods`,            `MOD`,            `MODS`,
   `member`,         `members`,         `Member`,         `Members`,         `MEMBER`,         `MEMBERS`,
   `server booster`, `server boosters`, `Server Booster`, `Server Boosters`, `SERVER BOOSTER`, `SERVER BOOSTERS`,
   `bot`,            `bots`,            `Bot`,            `Bots`,            `BOT`,            `BOTS`,
   `muted`,                             `Muted`,                             `MUTED`,
   /* ⬇⬇⬇ Bunny FurFest 🐰🐾 ⬇⬇⬇ */
   `owner 🐰🦊🐺🦌`, `gofurs 👥`,     `[lvl 15] furry tamer 🦊`, `[lvl 5] terran 🎋`, `attendees 👥`,
   `newcomers 👥`,    `helpstaff~ 🤖`, `lewdies`,                  `uwu`,
   /* ⬇⬇⬇ BFF: Room Party 621 🐰🦊🐺🦌 ⬇⬇⬇ */
   `literal fox lord 🦊`, `party host 🎉`, `banished to the fort 🏰`, `checking in 📝`, `outsiders 🤖`, `isolation gang 🏡`,
   /* ⬇⬇⬇ other roles i found ⬇⬇⬇ */
   `Staff`,         `Strawberry Squad`, `Mulberry Marauder`, `Blackberry Bunch`, `Blueberry Brigade`, `Ripe Berries`,
   `The Berry Pet`, `Chat Reviver`,     `QoTD`,              `Developer`,        `god`,               `guests`,
   `The Crew`,      `Unpaid Interns`,   `VIP`
];


/**
 * example names for discord text channels 📃
 */
const textChannelNames = [
   /* ⬇⬇⬇ typical channel names ⬇⬇⬇ */
   `rules`,   `announcements`,  `general`,     `off-topic`, `memes`,
   `bot`,     `media`,          `art`,         `spam`,      `bugs-and-help`,
   `faq`,     `general-banter`, `screenshots`, `support`,   `info`,
   `events`,  `giveaways`,      `news`,        `sport`,     `qotd`,
   `no-mic`,  `streams`,        `fan-art`,     `server`,    `changelog`,
   `website`, `developer`,      `discord`,     `wumpus`,    `music`
];


/**
 * example names for discord voice channels 📃
 */
const voiceChannelNames = [
   /* ⬇⬇⬇ typical channel names ⬇⬇⬇ */
   `general`, `off topic`, `stage`,  `voice`, `music`,
   `afk`,     `lobby`,     `gaming`, `atc`,   `the bar`
];


/**
 * example names for discord category channels 📃
 */
const categoryChannelNames = [
   /* ⬇⬇⬇ typical channel names ⬇⬇⬇ */
   `Text Channels`,     `Voice Channels`,     `bunker`,        `misc`,    `staff`,
   `Information`,       `archived`,           `ANNOUNCEMENTS`, `uwu`,     `Other`,
   `General Chatrooms`, `server information`, `Parties`,       `English`, `gamenight`,
   `media 📹`,          `games 🎮`,          `fox 🦊`,        `dev 🤖`, `voice 🔉`
];


/**
 * help usage utilities ❓
 */
module.exports = {
   /**
    * get a random four-digit number string that can be used as a discord tag #️⃣
    * @returns {string} 🆔
    */
   getDiscriminator: function() {
      const generateDiscriminator = () => {
         let tag = Math.random().toString().slice(2, 6);
         if (!+tag) tag = generateDiscriminator(); // re-roll if this tag resolves in `0000`

         return tag;
      };
      return generateDiscriminator();
   },


   /**
    * get a discord snowflake 🆔
    * @see https://discord.com/developers/docs/reference#snowflakes
    * @returns {string} 🆔
    */
   getId: function() {
      const { number } = require("../../");

      const generateId = () => {
         let id = ``;

         for (let i = 0; i < number(17, 19); i ++) {
            const digit =
               id.length
                  ? number(0, 9)  // random number between 0 and 9
                  : number(1, 9); // random number between 1 and 9

            id += digit;
         };

         if (!+id) id = generateId(); // re-roll if this tag resolves in all "0"s

         return id;
      };
      return generateId();
   },


   /**
    * returns data that can be resolved into the following: `@user`, `username#tag`, `username`, `id` 👤
    * @param {User} user the command user 🗨️
    * @returns {string} `@user`, `username#tag`, `username`, `id` 🦊
    */
   userResolvable: function(user) {
      const { choice } = require("../../");

      const mentions     = [ ...userNames.map(name => `@${name}`),                        `@${user.username}` ];
      const usernameTags = [ ...userNames.map(name => `${name}#${this.getDiscriminator()}`),  user.tag        ];
      const usernames    = [ ...userNames,                                                    user.username   ];

      const mention     = choice(mentions);
      const usernameTag = choice(usernameTags);
      const username    = choice(usernames);
      const id          = this.getId();

      return choice([ mention, username, usernameTag, id ]);
   },


   /**
    * returns data that can be resolved into the following: `@user` 🆔
    * @param {User} user the command user 🗨️
    * @returns {string} `@user` 🦊
    */
   userMention: function(user) {
      const { choice } = require("../../");

      const mentions = [ ...userNames.map(name => `@${name}`), `@${user.username}` ];

      return choice(mentions);
   },


   /**
    * returns data that can be resolved into the following: `username#tag` 🆔
    * @param {User} user the command user 🗨️
    * @returns {string} `username#tag` 🦊
    */
   userTag: function(user) {
      const { choice } = require("../../");

      const usernameTags = [ ...userNames.map(name => `${name}#${this.getDiscriminator()}`), user.tag ];

      return choice(usernameTags);
   },


   /**
    * returns data that can be resolved into the following: `username` 🆔
    * @param {User} user the command user 🗨️
    * @returns {string} `username` 🦊
    */
   userUsername: function(user) {
      const { choice } = require("../../");

      const usernames = [ ...userNames, user.username ];

      return choice(usernames);
   },


   /**
    * returns data that can be resolved into the following: `@role`, `role name`, `id` 🆔
    * @param {Collection<Snowflake, Role>} [roles] this guild's roles, if there is a guild 🗨️
    * @returns {string} `@role`, `role name`, `id` 🦊
    */
   roleResolvable: function(roles) {
      const { choice } = require("../../");

      const mentions =
         roles
            ? [ ...roleNames.map(name => `@${name}`), ...roles.filter(role => role.rawPosition).map(role => `@${role.name}`) ]
            : roleNames.map(name => `@${name}`);

      const names =
         roles
            ? [ ...roleNames, ...roles.filter(role => role.rawPosition).map(role => role.name) ]
            : roleNames;

      const mention = choice(mentions);
      const name    = choice(names);
      const id      = this.getId();

      return choice([ mention, name, id ]);
   },


   /**
    * returns data that can be resolved into the following: `@role` 🆔
    * @param {Collection<Snowflake, Role>} [roles] this guild's roles, if there is a guild 🗨️
    * @returns {string} `@role` 🦊
    */
   roleMention: function(roles) {
      const { choice } = require("../../");

      const mentions =
         roles
            ? [ ...roleNames.map(name => `@${name}`), ...roles.filter(role => role.rawPosition).map(role => `@${role.name}`) ]
            : roleNames.map(name => `@${name}`);

      return choice(mentions);
   },


   /**
    * returns data that can be resolved into the following: `role name` 🆔
    * @param {Collection<Snowflake, Role>} [roles] this guild's roles, if there is a guild 🗨️
    * @returns {string} `role name` 🦊
    */
   roleName: function(roles) {
      const { choice } = require("../../");

      const names =
         roles
            ? [ ...roleNames, ...roles.filter(role => role.rawPosition).map(role => role.name) ]
            : roleNames;

      return choice(names);
   },


   /**
    * returns data that can be resolved into the following: `text channel name` 🆔
    * @param {Collection<Snowflake, GuildChannel>} [channels] this guild's channels, if there is a guild 🗨️
    * @returns {string} `text channel name` 🦊
    */
   textChannel: function(channels) {
      const { choice } = require("../../");

      const textChannels =
         channels
            ? [ ...textChannelNames.map(name => `#${name}`), ...channels.filter(channel => channel.type === `GUILD_TEXT`).map(channel => `#${channel.name}`) ]
            : textChannelNames.map(name => `#${name}`);

      return choice(textChannels);
   },


   /**
    * returns data that can be resolved into the following: `voice channel name` 🆔
    * @param {Collection<Snowflake, GuildChannel>} [channels] this guild's channels, if there is a guild 🗨️
    * @returns {string} `voice channel name` 🦊
    */
   voiceChannel: function(channels) {
      const { choice } = require("../../");

      const voiceChannels =
         channels
            ? [ ...voiceChannelNames.map(name => `🔉 ${name}`), ...channels.filter(channel => channel.type === `GUILD_VOICE` || channel.type === `GUILD_STAGE_VOICE`).map(channel => `🔉 ${channel.name}`) ]
            : voiceChannelNames.map(name => `🔉 ${name}`);

      return choice(voiceChannels);
   },


   /**
    * returns data that can be resolved into the following: `category channel name` 🆔
    * @param {Collection<Snowflake, GuildChannel>} [channels] this guild's channels, if there is a guild 🗨️
    * @returns {string} `category channel name` 🦊
    */
   categoryChannel: function(channels) {
      const { choice } = require("../../");

      const categoryChannels =
         channels ?
            [ ...categoryChannelNames, ...channels.filter(channel => channel.type === `GUILD_CATEGORY`).map(channel => channel.name) ] :
            categoryChannelNames;

      return choice(categoryChannels);
   },


   /**
    * boolean option 🗨️
    * @returns {boolean} 💻
    */
   boolean: function() {
      const { choice } = require("../../");

      return choice([ true, false ]);
   },


   /**
    * returns a moderation reason 🗨️
    * @param {"ban" | "kick" | "timeout" | "revoke-ban"} type type of moderation reason related to this command 📋
    * @returns {string} 📃
    */
   moderationReason: function(type) {
      const { choice } = require("../../");

      if (type === `ban` || type === `kick`)
         return choice([
            `bad at the game`, `leave!!`,               `Get out`, `bai bai`,       `swearing`,
            `racism`,          `profanity`,             `R6`,      `Broke Rules`,   `No.`,
            `goodbye`,         `said endgame spoilers`, `NSFW`,    `too much yiff`, `too many warnings`
         ]);

      else if (type === `timeout`)
         return choice([
            `shut up`,   `stop trolling`, `haha`,          `shh`,          `we don't need to hear you`,
            `Be quiet.`, `spam`,          `spamming yiff`, `Take A Break`, `lmao`
         ]);

      else if (type === `revoke-ban`)
         return choice([
            `sorry :(`, `appealed`,  `time up`, `Last chance.`,  `yeah!!`,
            `man`,      `deez nuts`, `why`,     `i was told to`, `asked for it`
         ]);
   },


   /**
    * from a @discord.js/Collection, get a command's autocomplete choices ✏️
    * @param {import("../../types").ApplicationCommandInteraction} interaction this interaction 🗨️
    * @param {import("discord.js").Collection<string, import("../../types/command").Command>} commands \@discord.js/Collection of `ApplicationCommand`s 📋
    * @param {string} commandName name of the command to get autocomplete choices from 🆔
    * @returns {import("discord.js").ApplicationCommandData[]} 📄
    */
   getAutocompleteChoices: async function(interaction, commands, commandName) {
      const command = commands.get(commandName);

      const autocompleteChoicesData = await command?.getAutocompleteChoices(interaction);
      const autocompleteChoices = autocompleteChoicesData?.map(choice => choice.name);

      return autocompleteChoices;
   },


   /**
    * from a @discord.js/Collection, get a random command 🗨️
    * @param {import("discord.js").Collection<string, import("../../types/command").Command>} commands \@discord.js/Collection of `ApplicationCommand`s 📋
    * @returns {string} command name 📄
    */
   command: function(commands) {
      return `/${commands.random().name}`;
   },


   /**
    * from a @discord.js/Collection, get a random command category 🗨️
    * @param {import("discord.js").Collection<string, import("../../types/command").Command>} commands \@discord.js/Collection of `ApplicationCommand`s 📋
    * @returns {string} category name 📄
    */
   category: function(commands) {
      const { choice, set } = require("../../");

      return choice(set(commands.filter(cmd => cmd.category).map(cmd => cmd.category)));
   },


   /**
    * from a @discord.js/Collection, get a random command subcategory 🗨️
    * @param {import("discord.js").Collection<string, import("../../types/command").Command>} commands \@discord.js/Collection of `ApplicationCommand`s 📋
    * @returns {string} subcategory name 📄
    */
   subcategory: function(commands) {
      const { choice, set } = require("../../");

      return choice(set(commands.filter(cmd => cmd.subcategory).map(cmd => cmd.subcategory)));
   },


   /**
    * random location string for command `/weather` 🌦️
    * @returns {string} ⛅
    */
   location: function() {
      const { choice } = require("../../");

      return choice([
         `Weymouth, GB`,     `Manila, PH`,      `London, CA`,        `Birmingham, GB`, `Sydney, AU`,
         `Wellington, NZ`,   `Toronto, CA`,     `Nome, US`,          `Paris, AR, US`,  `Brooklyn, NY, US`,
         `Portland, OR, US`, `Chicago, IL, US`, `New York City, US`, `Hamburg, DE`,    `Alicante, ES`
      ]);
   },


   /**
    * random string to translate to owo for command `/owo` 🦊
    * @returns {string} 💬
    */
   owo: function() {
      const { choice } = require("../../");

      return choice([
         `hello?`, `finally, some good frickin' uwu`, `anyone want to help`, `i'm a furry!`,  `help help`,
         `no`,     `i love you`,                      `very good!`,          `i like cheese`, `you are awesome`
      ]);
   }
};