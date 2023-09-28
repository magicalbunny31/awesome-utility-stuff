// classes

/* nothing to see here.. */





// data

/**
 * colours that i use more than once across all projects 🎨
 */
export const colours: typeof import("../src/data/colours.js");

/**
 * my regular expression to match emojis in unicode 15.0 🦊
 * @returns regular expression to match emojis in unicode 15.0 🦊
 */
export const emoji: RegExp;

/**
 * a bunch of emojis used for my projects 🦊
 * @returns an emoji in the format <a:name:id> or <:name:id> 🗨️
 */
export const emojis: typeof import("../src/data/emojis.js");

/**
 * my regular expression to match http(s) urls 🦊
 * @see https://stackoverflow.com/a/15855457 🔗
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
 * check if a member has permissions to use a (discord) chat-input application command 🔓
 * @param commandId id of the command to view permissions of 🔎
 * @param channel channel to check permissions against 💬
 * @param member member to check permissions against 👤
 * @see https://cdn.discordapp.com/attachments/697138785317814292/1042878162901672048/flowchart-for-new-permissions.png
 * @returns whether this member has permissions to use this (discord) chat-input application command 📛
 */
export async function checkChatInputCommandPermissions(commandId: string, channel: import("discord.js").GuildTextBasedChannel, member: import("discord.js").GuildMember): Promise<boolean>;

/**
 * gets a random element from an array ❓
 * @param array array to get a random element from 📃
 * @param choices number of choices to get #️⃣
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
 * defer `Discord.ActionRow` `Discord.Component`s on a `Discord.Message` 💭
 * @param customId custom_id of a `Discord.Component` to display as deferred 🚩
 * @param components `Discord.Component`s (in `Discord.ActionRow`s) to defer 🔘
 * @returns deferred `Discord.Component`s (in `Discord.ActionRow`s) ✅
 */
export function deferComponents(customId: string, components: import("discord.js").ActionRow[]): import("discord.js").ActionRow[];

/**
 * defer `Discord.ActionRow` `Discord.Component`s on a `Discord.Message` 💭
 * @param customId custom_id of a `Discord.Component` to display as deferred 🚩
 * @param values default option values of the select menu 📋
 * @param components `Discord.Component`s (in `Discord.ActionRow`s) to defer 🔘
 * @returns deferred `Discord.Component`s (in `Discord.ActionRow`s) ✅
 */
export function deferComponents(customId: string, values: string[], components: import("discord.js").ActionRow[]): import("discord.js").ActionRow[];

/**
 * find similar strings/objects based off of a string 📋
 *
 * this uses aceakash's string-similarity, see link 👤
 * @see https://github.com/aceakash/string-similarity 🔗
 * @param query string to query 📄
 * @param targets target array 📃
 * @param settings settings to include 🔧
 * @returns array of results of the targets sorted in similarity 📜
 */
export function findSimilar(query: string, targets: string[], settings: {
   /** max amounts of results to return 🔢 */
   limit?: number;

   /** filter out results with a score below this target 🗯️ */
   minScore?: number
}): { score: number, target: string }[];

/**
 * find similar strings/objects based off of a string 📋
 *
 * this uses aceakash's string-similarity, see link 👤
 * @see https://github.com/aceakash/string-similarity 🔗
 * @param query string to query 📄
 * @param targets target array 📃
 * @param settings settings to include 🔧
 * @returns array of results of the targets sorted in similarity 📜
 */
export function findSimilar<T>(query: string, targets: T[], settings: {
   /** for an array of objects, the key of the object to access for the string 💬 */
   key?: keyof T;

   /** max amounts of results to return 🔢 */
   limit?: number;

   /** filter out results with a score below this target 🗯️ */
   minScore?: number
}): { score: number, object: T }[];

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
 * similar to Array.filter(), except elements that don't pass the condition are returned too 🔁
 * @param array array to partition 📃
 * @param condition condition to evaluate for each element ❓
 * @example partition([ 1, 3, 5, 7, 9 ], num => num < 5); // [[ 1, 3 ], [ 5, 7, 9 ]]
 * @returns `Array[0]`: pass; `Array[1]`: fail - try destructuring them! 📄
 */
export function partition<T>(array: T[], condition: (value?: T, index?: number, array?: T[]) => boolean): [ T[], T[] ];

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
 * strips indents off a string 🔨
 * @param str string to strip indents off of 🗨️
 * @returns string with indents stripped 📄
 */
export function strip(str: strip): string;

/**
 * find the sum of an array (aka a quick way of running an addition reducer function) 🔢
 * @param array array of values to find the sum of (very descriptive!!) 📃
 * @param initialValue initial value for the reducer function 🏁
 * @returns sum of the array 📩
 */
export function sum<T>(array: T[], initialValue?: any): T;

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