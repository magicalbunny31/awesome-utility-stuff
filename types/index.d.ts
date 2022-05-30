// classes

/* nothing to see here.. */





// data

/**
 * bad boys bad boys
 *
 * whatcha gunna do
 *
 * whatcha gunna do when they cum for you
 *
 * @returns list of *bad* words hehe 📜
 */
export const badWords: typeof import("../src/data/badWords.js");

/**
 * colours that i use more than once across all projects 🎨
 */
export const colours: typeof import("../src/data/colours.js");

/**
 * regular expression to match emojis in unicode 14.0 🦊
 * @returns regular expression to match emojis in unicode 14.0 🦊
 */
export const emoji: RegExp;

/**
 * a bunch of emojis used for my projects 🦊
 * @returns an emoji in the format <a:name:id> or <:name:id> 🗨️
 */
export const emojis: typeof import("../src/data/emojis.js");

/**
 * my regular expression to match http(s) urls 🦊
 * @returns regular expression to match http(s) urls 🦊
 */
export const url: RegExp;





// functions

/**
 * automatically create an array with values filled via a function 🔁
 * @param length how long this array should be #️⃣
 * @param func function to run for each element of this array 📃
 * @returns array with values filled via a function 📄
 */
export function autoArray<T>(length: number, func: () => T): T[];

/**
 * gets a random element from an array ❓
 * @param array array to get a random element from 📃
 * @param choices number of choices to get #️⃣
 * @returns an element of that array 📄
 */
export function choice<T>(array: T[], choices?: number): T;

/**
 * creates a discord.js MessageComponentCollector expiration time from a timestamp ⏳
 *
 * this time will be roughly when the interaction's token invalidates ❌
 * @param timestamp timestamp (in ms) of the interaction ⌚
 * @returns period of time in 15 minutes from the timestamp but minus 3 seconds for good measure owo 🕑
 */
export function createCollectorExpirationTime(timestamp: number): number;

/**
 * formats a permission to a readable string 📝
 * @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags 🔗
 * @param permissions permission to format 🗨️
 * @example
 * formatPermission([ PermissionFlagsBits.BanMembers, PermissionFlagsBits.KickMembers ]);
 * formatPermission(0x6);
 * formatPermission(0x6n);
 * // [ `Ban Members 🚫`, `Kick Members 👢` ]
 * @returns array of a permission strings that have been formatted 📄
 */
export function formatPermissions(permissionsInput: import("discord.js/typings").PermissionFlagsBits[] | number | bigint): string[];

/**
 * get the nearest coloured paw from a hex colour value 🐾
 * @param hex hex string colour value to use 🎨
 * @returns nearest coloured paw emoji 🐾
 */
export function getNearestColourPaw(hex: string): string;

/**
 * help usage utilities ❓
 */
export namespace help {
   /**
    * get a random four-digit number string that can be used as a discord tag #️⃣
    * @returns 🆔
    */
   export function getDiscriminator(): string;

   /**
    * get a discord snowflake 🆔
    * @see https://discord.com/developers/docs/reference#snowflakes
    * @returns {string} 🆔
    */
   export function getId(): string;

   /**
    * returns data that can be resolved into the following: `@user`, `username#tag`, `username`, `id` 👤
    * @param user the command user 🗨️
    * @returns `@user`, `username#tag`, `username`, `id` 🦊
    */
   export function userResolvable(user: import("discord.js").User): string;

   /**
    * returns data that can be resolved into the following: `@user` 🆔
    * @param} user the command user 🗨️
    * @returns `@user` 🦊
    */
   export function userMention(user: import("discord.js").User): string;

   /**
    * returns data that can be resolved into the following: `username#tag` 🆔
    * @param user the command user 🗨️
    * @returns `username#tag` 🦊
    */
   export function userTag(user: import("discord.js").User): string;

   /**
    * returns data that can be resolved into the following: `username` 🆔
    * @param user the command user 🗨️
    * @returns `username` 🦊
    */
   export function userUsername(user: import("discord.js").User): string;

   /**
    * returns data that can be resolved into the following: `@role`, `role name`, `id` 🆔
    * @param roles this guild's roles, if there is a guild 🗨️
    * @returns `@role`, `role name`, `id` 🦊
    */
   export function roleResolvable(roles?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").Role>): string;

   /**
    * returns data that can be resolved into the following: `@role` 🆔
    * @param roles this guild's roles, if there is a guild 🗨️
    * @returns `@role` 🦊
    */
   export function roleMention(roles?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").Role>): string;

   /**
    * returns data that can be resolved into the following: `role name` 🆔
    * @param roles this guild's roles, if there is a guild 🗨️
    * @returns `role name` 🦊
    */
   export function roleName(roles?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").Role>): string;

   /**
    * returns data that can be resolved into the following: `text channel name` 🆔
    * @param channels this guild's channels, if there is a guild 🗨️
    * @returns `text channel name` 🦊
    */
   export function textChannel(channels?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").GuildChannel>): string;

   /**
    * returns data that can be resolved into the following: `voice channel name` 🆔
    * @param channels this guild's channels, if there is a guild 🗨️
    * @returns `voice channel name` 🦊
    */
   export function voiceChannel(channels?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").GuildChannel>): string;

   /**
    * returns data that can be resolved into the following: `category channel name` 🆔
    * @param channels this guild's channels, if there is a guild 🗨️
    * @returns `category channel name` 🦊
    */
   export function categoryChannel(channels?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").GuildChannel>): string;

   /**
    * boolean option 🗨️
    * @returns 💻
    */
   export function boolean(): boolean;

   /**
    * returns a moderation reason 🗨️
    * @param type type of moderation reason related to this command 📋
    * @returns {string} 📃
    */
   export function moderationReason(type: "ban" | "kick" | "timeout" | "revoke-ban"): string;

   /**
    * from a @discord.js/Collection of `Command`s, get a command's possible autocomplete choices ✏️
    * @param interaction this interaction 🗨️
    * @param commands \@discord.js/Collection of `Command`s 📋
    * @param commandName name of the command to get autocomplete choices from 🆔
    * @returns array of strings of this command's possible autocomplete choices 📄
    */
   export function getAutocompleteChoices(interaction: import("discord.js").CommandInteraction, commands: import("discord.js").Collection<string, import("./command").Command>, commandName: string): Promise<string[]>;

   /**
    * from a @discord.js/Collection of `Command`s, get a random command 🗨️
    * @param commands \@discord.js/Collection of `Command`s 📋
    * @returns command name 📄
    */
   export function command(commands: import("discord.js").Collection<string, import("./command").Command>): string;

   /**
    * from a @discord.js/Collection of `Command`s, get a random command category 🗨️
    * @param commands \@discord.js/Collection of `ApplicationCommand`s 📋
    * @returns category name 📄
    */
   export function category(commands: import("discord.js").Collection<string, import("./command").Command>): string;

   /**
    * from a @discord.js/Collection of `Command`s, get a random command subcategory 🗨️
    * @param commands \@discord.js/Collection of `ApplicationCommand`s 📋
    * @returns subcategory name 📄
    */
   export function subcategory(commands: import("discord.js").Collection<string, import("./command").Command>): string;

   /**
    * random location string for command `/weather` 🌦️
    * @returns ⛅
    */
   export function location(): string;

   /**
    * random string to translate to owo for command `/owo` 🦊
    * @returns 💬
    */
   export function owo(): string;
};

/**
 * glorious no operation arrow function 💫
 * @example
 * () => {};
 */
export function noop(): void;

/**
 * get a random number! #️⃣
 * @param min minimum number to generate 🔢
 * @param max maximum number to generate 🔢
 */
export function number(min: number, max: number): number;

/**
 * get a partial emoji object with `id`, `name` and `animated` - perfect for message components! 🔁
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object
 * @param emoji text emoji string to parse 🦊
 * @returns object that matches the discord api emoji format 📋
 */
export function partialEmoji(emoji: string): { animated: boolean, name: string, id: string? };

/**
 * similar to Array.filter(), except elements that don't pass the condition are returned too 🔁
 * @param array array to partition 📃
 * @param condition condition to evaluate for each element ❓
 * @example partition([ 1, 3, 5, 7, 9 ], num => num < 5); // [[ 1, 3 ], [ 5, 7, 9 ]]
 * @returns `Array[0]`: pass; `Array[1]`: fail - try destructuring them! 📄
 */
export function partition<T>(array: T[], condition: (value?: T, index?: number, array?: T[]) => boolean): [ T[], T[] ];

/**
 * send an error response ❗
 * @param interaction this interaction 🗨️
 * @param webhookData webhook to send this error to 📋
 * @param error the error that happened 📣
 * @param sendInteractionResponse whether to use the interaction to show an error (to the user) or not 🗯️
 * @returns an error sent to the webhook, plus a response to the user if specified 📋
 */
export async function sendBotError(interaction: import("discord.js").Interaction, webhookData: import("discord.js").WebhookClientData, error: Error, sendInteractionResponse?: boolean=true): Promise<void>;

/**
 * send an error response ❗
 * @param interaction this interaction 🗨️
 * @param webhookData webhook to send this error to 📋
 * @param error the error that happened 📣
 * @param sendInteractionResponse whether to use the interaction to show an error (to the user) or not 🗯️
 * @returns an error sent to the webhook, plus a response to the user if specified 📋
 */
export async function sendBotError(interaction: string, webhookData: import("discord.js").WebhookClientData, error: Error): Promise<void>;

/**
 * remove duplicates from an array of values 📤
 * @param array array of values (presumably with duplicates, duh) 📃
 * @returns array of values (except there aren't any duplicate values in them owo) 📄
 */
export function set<T>(array: T[]): T[];

/**
 * shuffle an array 🔀
 * @param array array to shuffle 📃
 * @returns a shuffled version of the inputted array 📋
 */
export function shuffle<T>(array: T[]): T[];

/**
 * covers info on http status codes 📋
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status 🔗
 * @param statusCode status code to view info on #️⃣
 * @returns some awesome status info 🗨️
 */
export function statusInfo(statusCode: string | number): StatusInfo;

/**
 * strips indents off a string 🔨
 * @param str string to strip indents off of 🗨️
 * @returns string with indents stripped 📄
 */
export function strip(str: strip): string;

/**
 * find the sum of an array ((aka a quick way of running an addition reducer function)) 🔢
 * @param array array of values to find the sum of (very descriptive!!) 📃
 * @param initialValue initial value for the reducer function 🏁
 * @returns sum of the array 📩
 */
export function sum<T>(array: T[], initialValue?: any): T;

/**
 * convert a colour to decimal format ➡️
 * @param colourToConvert colour to convert 🎨
 * @returns decimal number (integer) colour value 🎨
 */
export async function toDecimal(colourToConvert: typeof import("color")): number;

/**
 * convert a colour to hexadecimal format ➡️
 * @param colourToConvert colour to convert 🎨
 * @returns hex string colour value 🎨
 */
export async function toHexadecimal(colourToConvert: typeof import("color")): string;

/**
 * pretty much "pauses" asynchronous code ⏱️
 * @param delay ms delay to wait for 🔢
 * @returns a "pause" in the asynchronous code!! ⌚
 */
export async function wait(delay: number): Promise<void>;





// types

type StatusInfo = {
   status: string | number;
   statusText: string;
   link: string;
};