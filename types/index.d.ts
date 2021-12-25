// classes

export class Statuses {
   /**
    * status utilities owo 🗨️
    * @param statuses array of PresenceData 📋
    */
   constructor(statuses: import("discord.js/typings").PresenceData[]);

   /**
    * get a random status ❓
    * @returns PresenceData 📄
    */
   getStatus(): import("discord.js/typings").PresenceData;
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
export function choice(array: any[]): any

/**
 * gets a random element from an array ❓
 * @param array array to get a random element from 📃
 * @param choices number of choices to get #️⃣
 * @returns an element of that array 📄
 */
export function choice(array: any[], choices: number): any[]

/**
 * formats a permission to a readable string
 * @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 * @param permissionString permission to format
 * @example formatPermission("BAN_MEMBERS"); // ban members 🚫
 * @returns a string of a permission that has been formatted
 */
export function formatPermission(permissionString: import("discord.js/typings").PermissionString): typeof import("discord.js/typings").PermissionString;

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
export function strip(str: string): string;

/**
 * find the sum of an array of numbers 🔢
 * @param {number[]} array array of numbers 📃
 * @returns {number}
 */
export function sum(array: number[]): number;

/**
 * pretty much "pauses" asynchronous code ⏱️
 * @param delay ms to wait for 🔢
 * @returns ⌚
 */
export async function wait(delay: number): Promise<void>;





// types
export type StatusCode = 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;

export type StatusInfo = {
   code: StatusCode | "unknown";
   shortDescription: string;
   description: string;
   fix: string;
   link: string;
};


export type ApplicationCommandInteraction = import("discord.js").CommandInteraction | import("discord.js").ButtonInteraction | import("discord.js").SelectMenuInteraction;

export interface BotErrorInfo {
   type: "interaction" | "api" | "error";
   colours: [ string, string, string ];
   webhook: {
      id: import("discord.js").Snowflake;
      token: string;
   };
   prefix: string;
   botName: string;
};

export interface BotErrorInfoInteraction extends Omit<BotErrorInfo, "type"> {
   type: "interaction";
   data: {
      interactionType: InteractionType;
      emoji: BotEmoji;
      commandName: string;
      error: string;
   };
};

export interface BotErrorInfoAPI extends Omit<BotErrorInfo, "type"> {
   type: "api";
   data: {
      interactionType: InteractionType;
      emoji: BotEmoji;
      commandName: string;
      apiName: string;
      responseCode: StatusCode | "unknown";
   };
};

export interface BotErrorInfoError extends Omit<BotErrorInfo, "type"> {
   type: "error";
   data: {
      origin: string;
      error: string;
   };
};

export type InteractionType = "chat-input" | "user" | "message" | "button" | "select-menu" | "modal";

export enum BotEmoji {
   BUN = (await import("../src/data/emojis.js")).bun,
   FOX_KIT = (await import("../src/data/emojis.js")).fox_kit
};