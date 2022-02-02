// classes

export class HelpUsage {
   /**
    * help usage utilities ❓
    */
   constructor() {};

   /**
    * get a random four-digit number string that can be used as a discord tag #️⃣
    * @returns 🆔
    */
   private static getDiscriminator(): string;

   /**
    * get a random seventeen-to-nineteen-digit string that can be used as a discord id #️⃣
    * @returns 🆔
    */
   private static getId(): string;

   /**
    * example names for users 👥
    */
   private static userNames: string[];

   /**
    * example names for roles 📃
    */
   private static roleNames: string[];

   /**
    * example names for discord text channels 📃
    */
   private static textChannelNames: string[];

   /**
    * example names for discord voice channels 📃
    */
   private static voiceChannelNames: string[];

   /**
    * example names for discord category channels 📃
    */
   private static categoryChannelNames: string[];

   /**
    * returns data that can be resolved into the following: `@user`, `username#tag`, `username`, `id` 👤
    * @param user the command user 🗨️
    * @returns `@user`, `username#tag`, `username`, `id` 🦊
    */
   static userResolvable(user: import("discord.js").User): string;

   /**
    * returns data that can be resolved into the following: `@user` 🆔
    * @param} user the command user 🗨️
    * @returns `@user` 🦊
    */
   static userMention(user: import("discord.js").User): string;

   /**
    * returns data that can be resolved into the following: `username#tag` 🆔
    * @param user the command user 🗨️
    * @returns `username#tag` 🦊
    */
   static userTag(user: import("discord.js").User): string;

   /**
    * returns data that can be resolved into the following: `username` 🆔
    * @param user the command user 🗨️
    * @returns `username` 🦊
    */
   static userUsername(user: import("discord.js").User): string;

   /**
    * returns data that can be resolved into the following: `@role`, `role name`, `id` 🆔
    * @param roles this guild's roles, if there is a guild 🗨️
    * @returns `@role`, `role name`, `id` 🦊
    */
   static roleResolvable(roles?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").Role>): string;

   /**
    * returns data that can be resolved into the following: `@role` 🆔
    * @param roles this guild's roles, if there is a guild 🗨️
    * @returns `@role` 🦊
    */
   static roleMention(roles?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").Role>): string;

   /**
    * returns data that can be resolved into the following: `role name` 🆔
    * @param roles this guild's roles, if there is a guild 🗨️
    * @returns `role name` 🦊
    */
   static roleName(roles?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").Role>): string;

   /**
    * gets a discord snowflake 🆔
    * @see https://discord.com/developers/docs/reference#snowflakes
    * @returns 🆔
    */
   static id(): string;

   /**
    * returns data that can be resolved into the following: `text channel name` 🆔
    * @param channels this guild's channels, if there is a guild 🗨️
    * @returns `text channel name` 🦊
    */
   static textChannel(channels?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").GuildChannel>): string;

   /**
    * returns data that can be resolved into the following: `voice channel name` 🆔
    * @param channels this guild's channels, if there is a guild 🗨️
    * @returns `voice channel name` 🦊
    */
   static voiceChannel(channels?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").GuildChannel>): string;

   /**
    * returns data that can be resolved into the following: `category channel name` 🆔
    * @param channels this guild's channels, if there is a guild 🗨️
    * @returns `category channel name` 🦊
    */
   static categoryChannel(channels?: import("discord.js").Collection<import("discord.js").Snowflake, import("discord.js").GuildChannel>): string;

   /**
    * boolean option 🗨️
    * @returns 💻
    */
   static boolean(): boolean;

   /**
    * returns a moderation reason 🗨️
    * @param type type of moderation reason related to this command 📋
    * @returns {string} 📃
    */
   static moderationReason(type: "ban" | "kick" | "timeout" | "revoke-ban"): string;

   /**
    * from a @discord.js/Collection, get a command's autocomplete choices ✏️
    * @param interaction this interaction 🗨️
    * @param commands \@discord.js/Collection of `ApplicationCommand`s 📋
    * @param commandName name of the command to get autocomplete choices from 🆔
    * @returns 📄
    */
   static getAutocompleteChoices(interaction: import("../").ApplicationCommandInteraction, commands: import("discord.js").Collection<string, import("./command").Command>, commandName: string): Promise<import("discord.js").ApplicationCommandData[]>;

   /**
    * from a @discord.js/Collection, get a random command 🗨️
    * @param commands \@discord.js/Collection of `ApplicationCommand`s 📋
    * @returns command name 📄
    */
   static command(commands: import("discord.js").Collection<string, import("./command").Command>): string;

   /**
    * from a @discord.js/Collection, get a random command category 🗨️
    * @param commands \@discord.js/Collection of `ApplicationCommand`s 📋
    * @returns category name 📄
    */
   static category(commands: import("discord.js").Collection<string, import("./command").Command>): string;

   /**
    * from a @discord.js/Collection, get a random command subcategory 🗨️
    * @param commands \@discord.js/Collection of `ApplicationCommand`s 📋
    * @returns subcategory name 📄
    */
   static subcategory(commands: import("discord.js").Collection<string, import("./command").Command>): string;

   /**
    * random location string for command `/weather` 🌦️
    * @returns ⛅
    */
   static location(): string;

   /**
    * random string to translate to owo for command `/owo` 🦊
    * @returns 💬
    */
   static owo(): string;
};

export class Statuses {
   /**
    * status utilities owo 🗨️
    * @param statuses array of ActivitiesOptions 📋
    */
   constructor(statuses: import("discord.js").ActivitiesOptions[]);

   /**
    * get a random status ❓
    * @returns ActivitiesOptions 📄
    */
   getStatus(): import("discord.js").ActivitiesOptions;
};





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
 * regex to match emojis in unicode 14.0 🦊
 * @returns regex to match emojis in unicode 14.0 🦊
 */
export const emoji: RegExp;

/**
 * a bunch of emojis used for my projects 🦊
 * @returns an emoji in the format <a:name:id> or <:name:id> 🗨️
 */
export const emojis: typeof import("../src/data/emojis.js");





// functions

/**
 * gets a random element from an array ❓
 * @param array array to get a random element from 📃
 * @returns an element of that array 📄
 */
export function choice<T>(array: T[]): T;

/**
 * gets a random element from an array ❓
 * @param array array to get a random element from 📃
 * @param choices number of choices to get #️⃣
 * @returns an element of that array 📄
 */
export function choice<T>(array: T[], choices: number): T[];

/**
 * formats a permission to a readable string
 * @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 * @param permissionString permission to format
 * @example formatPermission("BAN_MEMBERS"); // ban members 🚫
 * @returns a string of a permission that has been formatted 📄
 */
export function formatPermission(permissionString: import("discord.js").PermissionString): string;

/**
 * covers info on (about) all erroneous status codes 📋
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status 🔗
 * @param api of the api 🦊
 * @param statusCode status code #️⃣
 * @returns status info 🗨️
 */
export function httpStatusInfo(api: string, statusCode?: StatusCode | "unknown"): StatusInfo;

/**
 * glorious no operation arrow function 💫
 * @example
 * () => {};
 */
export function noop(): void;

/**
 * get a random number! #️⃣
 * @param min minimum number to generate (inclusive) 🔢
 * @param max maximum number to generate 🔢
 */
export function number(min: number, max: number): number;

/**
 * similar to Array.filter(), except elements that don't pass the condition are returned too 🔁
 * @param array array to partition 📃
 * @param condition condition to evaluate for each element ❓
 * @example partition([ 1, 3, 5, 7, 9 ], num => num < 5); // [[ 1, 3 ], [ 5, 7, 9 ]]
 * @returns Array[0]: pass; Array[1]: fail - try destructuring them! 📄
 */
export function partition(array: any[], condition: (value: any, index: number, array: any[]) => value is any): [ any[], any[] ];

/**
 * send an error response ❗
 * @param interaction interaction to edit 🗨️
 * @param data data to send for this error 📋
 */
export async function sendBotError(interaction: ApplicationCommandInteraction, data: BotErrorInfoInteraction | BotErrorInfoAPI | BotErrorInfoError): Promise<void>;

/**
 * remove duplicates from an array of strings/numbers 📤
 * @param array array of strings/numbers 📃
 */
export function set(array: (string | number)[]): (string | number)[];

/**
 * shuffle an array 🔀
 * @param array array to shuffle 📃
 * @returns a shuffled version of the inputted array 📋
 */
export function shuffle(array: any[]): any[];

/**
 * strips indents off a string 🔨
 * @param str string to strip indents off of 🗨️
 * @returns string with indents stripped 📄
 */
export function strip(str: import("common-tags").TemplateTag): string;

/**
 * find the sum of an array of numbers 🔢
 * @param array array of numbers 📃
 */
export function sum(array: number[]): number;

/**
 * discord.js >13.4.x broke emojis in constructors, so here's a helper function! 🔁
 * @see https://github.com/discordjs/discord.js/blob/main/packages/discord.js/src/util/Util.js#L293-L298
 * @param emoji text emoji string to parse 🦊
 * @returns an object that matches the discord api emoji format 📋
 */
export function toRawEmoji(emoji: string): { animated: boolean, name: string, id: string? }

/**
 * pretty much "pauses" asynchronous code ⏱️
 * @param delay ms to wait for 🔢
 * @returns ⌚
 */
export async function wait(delay: number): Promise<void>;





// types
type StatusCode = 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;

type StatusInfo = {
   code: StatusCode | "unknown";
   shortDescription: string;
   description: string;
   fix: string;
   link: string;
};


type ApplicationCommandInteraction = import("discord.js").CommandInteraction | import("discord.js").ButtonInteraction | import("discord.js").SelectMenuInteraction;

interface BotErrorInfo {
   type: "interaction" | "api" | "error";
   colours: string[];
   webhook: {
      id: import("discord.js").Snowflake;
      token: string;
   };
   prefix: string;
   botName: string;
};

interface BotErrorInfoInteraction extends Omit<BotErrorInfo, "type"> {
   type: "interaction";
   data: {
      interactionType: InteractionType;
      emoji: BotEmoji;
      commandName: string;
      error: string | Error;
   };
};

interface BotErrorInfoAPI extends Omit<BotErrorInfo, "type"> {
   type: "api";
   data: {
      interactionType: InteractionType;
      emoji: BotEmoji;
      commandName: string;
      apiName: string;
      responseCode: StatusCode | "unknown";
   };
};

interface BotErrorInfoError extends Omit<BotErrorInfo, "type" | "prefix"> {
   type: "error";
   data: {
      origin: string;
      error: string | Error;
   };
};

type InteractionType = "chat-input" | "user" | "message" | "button" | "select-menu" | "modal";

enum BotEmoji {
   BUN = (await import("../src/data/emojis.js")).bun,
   FOX_KIT = (await import("../src/data/emojis.js")).fox_kit
};