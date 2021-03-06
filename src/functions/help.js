const { User, Collection, GuildChannel, Snowflake, Role, Interaction } = require("discord.js");


/**
 * example names for users ๐ฅ
 */
const userNames = [
   /* โฌโฌโฌ my bots โฌโฌโฌ */
   `bun ๐ฐ๐พ`, `fox kit ๐ฆ๐พ`, `berry bot`, `The Lobster Bot`, `aviflight558`,
   /* โฌโฌโฌ fwends โฌโฌโฌ */
   `Aviation ๐ซ`, `Bear ๐ป`,  `ChLu`,   `ema ๐ฑ`,  `fricking j`, `lucy`,    `Lobster ๐ฆ`, `Shadow โซ`,     `Toasty ๐`, `Ash`,
   `Dragun ๐`,   `Otter ๐ฆฆ`, `fox ๐ฆ`, `blox โน`, `blu ๐ `,    `boba ๐ต`, `dor ๐ช`,     `dork ๐ค`,       `epic ๐`,   `fard ๐`,
   `boop ๐ฆ`,     `Inky ๐ฆ`,  `jooj`,   `juuz ๐`,  `kito ๐ช`,   `lil`,     `kenny`,      `Strawberry ๐`, `keith`,      `hugo ๐งจ`,
   `yas โ`,      `sylveon`,
   /* โฌโฌโฌ bunnies โฌโฌโฌ */
   `Brownie`, `Cutie`, `Shadoku`, `Whiteflake`, `Puffy`, `Kodiak`, `Zingo`,
   /* โฌโฌโฌ other โฌโฌโฌ */
   `Romeo ๐ฆ`, `FOX ๐ฆ๐ฆ๐ฆ`, `winterwolf ๐บ`, `folf ๐ฆ๐บ`, `bunny ๐ฐ`,
   /* โฌโฌโฌ balto characters โฌโฌโฌ */
   `Aleu`,   `Aniu`,   `Balto`, `Boris`, `Dingo`, `Dixie`, `Sylvie`, `Dakota`, `Doc`,    `Dusty`,
   `Jenna`,  `Kaltag`, `Kirby`, `Kodi`,  `Mel`,   `Dipsy`, `Morse`,  `Muk`,    `Luk`,    `Muru`,
   `Nava`,   `Niju`,   `Nikki`, `Nuk`,   `Yak`,   `Sumac`, `Ralph`,  `Saba`,   `Silver`, `Star`,
   `Steele`, `Stella`, `Tana`,  `Vike`,  `Wild Joe`
];


/**
 * example names for roles ๐
 */
const roleNames = [
   /* โฌโฌโฌ typical role names โฌโฌโฌ */
   `administrator`,  `administrators`,  `Administrator`,  `Administrators`,  `ADMINISTRATOR`,  `ADMINISTRATORS`,
   `admin`,          `admins`,          `Admin`,          `Admins`,          `ADMIN`,          `ADMINS`,
   `moderator`,      `moderators`,      `Moderator`,      `Moderators`,      `MODERATOR`,      `MODERATORS`,
   `mod`,            `mods`,            `Mod`,            `Mods`,            `MOD`,            `MODS`,
   `member`,         `members`,         `Member`,         `Members`,         `MEMBER`,         `MEMBERS`,
   `server booster`, `server boosters`, `Server Booster`, `Server Boosters`, `SERVER BOOSTER`, `SERVER BOOSTERS`,
   `bot`,            `bots`,            `Bot`,            `Bots`,            `BOT`,            `BOTS`,
   `muted`,                             `Muted`,                             `MUTED`,
   /* โฌโฌโฌ Bunny FurFest ๐ฐ๐พ โฌโฌโฌ */
   `owner ๐ฐ๐ฆ๐บ๐ฆ`, `gofurs ๐ฅ`,     `[lvl 15] furry tamer ๐ฆ`, `[lvl 5] terran ๐`, `attendees ๐ฅ`,
   `newcomers ๐ฅ`,    `helpstaff~ ๐ค`, `lewdies`,                  `uwu`,
   /* โฌโฌโฌ BFF: Room Party 621 ๐ฐ๐ฆ๐บ๐ฆ โฌโฌโฌ */
   `literal fox lord ๐ฆ`, `party host ๐`, `banished to the fort ๐ฐ`, `checking in ๐`, `outsiders ๐ค`, `isolation gang ๐ก`,
   /* โฌโฌโฌ other roles i found โฌโฌโฌ */
   `Staff`,         `Strawberry Squad`, `Mulberry Marauder`, `Blackberry Bunch`, `Blueberry Brigade`, `Ripe Berries`,
   `The Berry Pet`, `Chat Reviver`,     `QoTD`,              `Developer`,        `god`,               `guests`,
   `The Crew`,      `Unpaid Interns`,   `VIP`
];


/**
 * example names for discord text channels ๐
 */
const textChannelNames = [
   /* โฌโฌโฌ typical channel names โฌโฌโฌ */
   `rules`,   `announcements`,  `general`,     `off-topic`, `memes`,
   `bot`,     `media`,          `art`,         `spam`,      `bugs-and-help`,
   `faq`,     `general-banter`, `screenshots`, `support`,   `info`,
   `events`,  `giveaways`,      `news`,        `sport`,     `qotd`,
   `no-mic`,  `streams`,        `fan-art`,     `server`,    `changelog`,
   `website`, `developer`,      `discord`,     `wumpus`,    `music`
];


/**
 * example names for discord voice channels ๐
 */
const voiceChannelNames = [
   /* โฌโฌโฌ typical channel names โฌโฌโฌ */
   `general`, `off topic`, `stage`,  `voice`, `music`,
   `afk`,     `lobby`,     `gaming`, `atc`,   `the bar`
];


/**
 * example names for discord category channels ๐
 */
const categoryChannelNames = [
   /* โฌโฌโฌ typical channel names โฌโฌโฌ */
   `Text Channels`,     `Voice Channels`,     `bunker`,        `misc`,    `staff`,
   `Information`,       `archived`,           `ANNOUNCEMENTS`, `uwu`,     `Other`,
   `General Chatrooms`, `server information`, `Parties`,       `English`, `gamenight`,
   `media ๐น`,          `games ๐ฎ`,          `fox ๐ฆ`,        `dev ๐ค`, `voice ๐`
];


/**
 * help usage utilities โ
 */
module.exports = {
   /**
    * get a random four-digit number string that can be used as a discord tag #๏ธโฃ
    * @returns {string} ๐
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
    * get a discord snowflake ๐
    * @see https://discord.com/developers/docs/reference#snowflakes
    * @returns {string} ๐
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
    * returns data that can be resolved into the following: `@user`, `username#tag`, `username`, `id` ๐ค
    * @param {User} user the command user ๐จ๏ธ
    * @returns {string} `@user`, `username#tag`, `username`, `id` ๐ฆ
    */
   userResolvable: function(user) {
      if (!user instanceof User)
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ userResolvable: not a valid \`user\` parameter value โ ๏ธ`);

      const { choice } = require("../../");

      const mentions     = [ ...userNames.map(name => `@${name}`),                                  `@${user.username}` ];
      const usernameTags = [ ...userNames.map(name => `${name}#${module.exports.getDiscriminator()}`),  user.tag        ];
      const usernames    = [ ...userNames,                                                              user.username   ];

      const mention     = choice(mentions);
      const usernameTag = choice(usernameTags);
      const username    = choice(usernames);
      const id          = module.exports.getId();

      return choice([ mention, username, usernameTag, id ]);
   },


   /**
    * returns data that can be resolved into the following: `@user` ๐
    * @param {User} user the command user ๐จ๏ธ
    * @returns {string} `@user` ๐ฆ
    */
   userMention: function(user) {
      if (!user instanceof User)
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ userMention: not a valid \`user\` parameter value โ ๏ธ`);

      const { choice } = require("../../");

      const mentions = [ ...userNames.map(name => `@${name}`), `@${user.username}` ];

      return choice(mentions);
   },


   /**
    * returns data that can be resolved into the following: `username#tag` ๐
    * @param {User} user the command user ๐จ๏ธ
    * @returns {string} `username#tag` ๐ฆ
    */
   userTag: function(user) {
      if (!user instanceof User)
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ userTag: not a valid \`user\` parameter value โ ๏ธ`);

      const { choice } = require("../../");

      const usernameTags = [ ...userNames.map(name => `${name}#${module.exports.getDiscriminator()}`), user.tag ];

      return choice(usernameTags);
   },


   /**
    * returns data that can be resolved into the following: `username` ๐
    * @param {User} user the command user ๐จ๏ธ
    * @returns {string} `username` ๐ฆ
    */
   userUsername: function(user) {
      if (!user instanceof User)
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ userUsername: not a valid \`user\` parameter value โ ๏ธ`);

      const { choice } = require("../../");

      const usernames = [ ...userNames, user.username ];

      return choice(usernames);
   },


   /**
    * returns data that can be resolved into the following: `@role`, `role name`, `id` ๐
    * @param {Collection<Snowflake, Role>} [roles] this guild's roles, if there is a guild ๐จ๏ธ
    * @returns {string} `@role`, `role name`, `id` ๐ฆ
    */
   roleResolvable: function(roles) {
      if (roles && !roles.every(role => role instanceof Role))
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ roleResolvable: not a valid \`roles\` parameter value โ ๏ธ`);

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
      const id      = module.exports.getId();

      return choice([ mention, name, id ]);
   },


   /**
    * returns data that can be resolved into the following: `@role` ๐
    * @param {Collection<Snowflake, Role>} [roles] this guild's roles, if there is a guild ๐จ๏ธ
    * @returns {string} `@role` ๐ฆ
    */
   roleMention: function(roles) {
      if (roles && !roles.every(role => role instanceof Role))
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ roleMention: not a valid \`roles\` parameter value โ ๏ธ`);

      const { choice } = require("../../");

      const mentions =
         roles
            ? [ ...roleNames.map(name => `@${name}`), ...roles.filter(role => role.rawPosition).map(role => `@${role.name}`) ]
            : roleNames.map(name => `@${name}`);

      return choice(mentions);
   },


   /**
    * returns data that can be resolved into the following: `role name` ๐
    * @param {Collection<Snowflake, Role>} [roles] this guild's roles, if there is a guild ๐จ๏ธ
    * @returns {string} `role name` ๐ฆ
    */
   roleName: function(roles) {
      if (roles && !roles.every(role => role instanceof Role))
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ roleName: not a valid \`roles\` parameter value โ ๏ธ`);

      const { choice } = require("../../");

      const names =
         roles
            ? [ ...roleNames, ...roles.filter(role => role.rawPosition).map(role => role.name) ]
            : roleNames;

      return choice(names);
   },


   /**
    * returns data that can be resolved into the following: `text channel name` ๐
    * @param {Collection<Snowflake, GuildChannel>} [channels] this guild's channels, if there is a guild ๐จ๏ธ
    * @returns {string} `text channel name` ๐ฆ
    */
   textChannel: function(channels) {
      if (channels && !channels.every(role => role instanceof GuildChannel))
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ textChannel: not a valid \`channels\` parameter value โ ๏ธ`);

      const { choice } = require("../../");

      const textChannels =
         channels
            ? [ ...textChannelNames.map(name => `#${name}`), ...channels.filter(channel => channel.type === `GUILD_TEXT`).map(channel => `#${channel.name}`) ]
            : textChannelNames.map(name => `#${name}`);

      return choice(textChannels);
   },


   /**
    * returns data that can be resolved into the following: `voice channel name` ๐
    * @param {Collection<Snowflake, GuildChannel>} [channels] this guild's channels, if there is a guild ๐จ๏ธ
    * @returns {string} `voice channel name` ๐ฆ
    */
   voiceChannel: function(channels) {
      if (channels && !channels.every(role => role instanceof GuildChannel))
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ voiceChannel: not a valid \`channels\` parameter value โ ๏ธ`);

      const { choice } = require("../../");

      const voiceChannels =
         channels
            ? [ ...voiceChannelNames.map(name => `๐ ${name}`), ...channels.filter(channel => channel.type === `GUILD_VOICE` || channel.type === `GUILD_STAGE_VOICE`).map(channel => `๐ ${channel.name}`) ]
            : voiceChannelNames.map(name => `๐ ${name}`);

      return choice(voiceChannels);
   },


   /**
    * returns data that can be resolved into the following: `category channel name` ๐
    * @param {Collection<Snowflake, GuildChannel>} [channels] this guild's channels, if there is a guild ๐จ๏ธ
    * @returns {string} `category channel name` ๐ฆ
    */
   categoryChannel: function(channels) {
      if (channels && !channels.every(role => role instanceof GuildChannel))
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ categoryChannel: not a valid \`channels\` parameter value โ ๏ธ`);

      const { choice } = require("../../");

      const categoryChannels =
         channels ?
            [ ...categoryChannelNames, ...channels.filter(channel => channel.type === `GUILD_CATEGORY`).map(channel => channel.name) ] :
            categoryChannelNames;

      return choice(categoryChannels);
   },


   /**
    * boolean option ๐จ๏ธ
    * @returns {boolean} ๐ป
    */
   boolean: function() {
      const { choice } = require("../../");

      return choice([ true, false ]);
   },


   /**
    * returns a moderation reason ๐จ๏ธ
    * @param {"ban" | "kick" | "timeout" | "revoke-ban"} type type of moderation reason related to this command ๐
    * @returns {string} ๐
    */
   moderationReason: function(type) {
      if (![ `ban`, `kick`, `timeout`, `revoke-ban` ].includes(type))
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ moderationReason: not a valid \`type\` parameter value โ ๏ธ`);

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
    * from a @discord.js/Collection of `Command`s, get a command's possible autocomplete choices โ๏ธ
    * @param {import("discord.js").CommandInteraction} interaction this interaction ๐จ๏ธ
    * @param {import("discord.js").Collection<string, import("../../types/command").Command>} commands \@discord.js/Collection of `Command`s ๐
    * @param {string} commandName name of the command to get autocomplete choices from ๐
    * @returns {string[]} array of strings of this command's possible autocomplete choices ๐
    */
   getAutocompleteChoices: async function(interaction, commands, commandName) {
      if (interaction instanceof Interaction)
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ getAutocompleteChoices: not a valid \`interaction\` parameter value โ ๏ธ`);

      if (typeof commandName !== `string`)
         throw new TypeError(`@magicalbunny31/awesome-utility-stuff โบ help โบ getAutocompleteChoices: not a valid \`commandName\` parameter value โ ๏ธ`);

      const command = commands.get(commandName);

      const autocompleteChoicesData = await command?.getAutocompleteChoices(interaction);
      const autocompleteChoices = autocompleteChoicesData?.map(choice => choice.name);

      return autocompleteChoices;
   },


   /**
    * from a @discord.js/Collection of `Command`s, get a random command ๐จ๏ธ
    * @param {import("discord.js").Collection<string, import("../../types/command").Command>} commands \@discord.js/Collection of `Command`s ๐
    * @returns {string} command name ๐
    */
   command: function(commands) {
      return `/${commands.random().name}`;
   },


   /**
    * from a @discord.js/Collection of `Command`s, get a random command category ๐จ๏ธ
    * @param {import("discord.js").Collection<string, import("../../types/command").Command>} commands \@discord.js/Collection of `Command`s ๐
    * @returns {string} category name ๐
    */
   category: function(commands) {
      const { choice, set } = require("../../");

      return choice(set(commands.filter(cmd => cmd.category).map(cmd => cmd.category)));
   },


   /**
    * from a @discord.js/Collection of `Command`s, get a random command subcategory ๐จ๏ธ
    * @param {import("discord.js").Collection<string, import("../../types/command").Command>} commands \@discord.js/Collection of `ApplicationCommand`s ๐
    * @returns {string} subcategory name ๐
    */
   subcategory: function(commands) {
      const { choice, set } = require("../../");

      return choice(set(commands.filter(cmd => cmd.subcategory).map(cmd => cmd.subcategory)));
   },


   /**
    * random location string for command `/weather` ๐ฆ๏ธ
    * @returns {string} โ
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
    * random string to translate to owo for command `/owo` ๐ฆ
    * @returns {string} ๐ฌ
    */
   owo: function() {
      const { choice } = require("../../");

      return choice([
         `hello?`, `finally, some good frickin' uwu`, `anyone want to help`, `i'm a furry!`,  `help help`,
         `no`,     `i love you`,                      `very good!`,          `i like cheese`, `you are awesome`
      ]);
   }
};