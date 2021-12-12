// classes

export class Statuses {
   /** @param statuses array of PresenceData */
   constructor(statuses: import("discord.js/typings").PresenceData[]);

   /** @returns PresenceData */
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
 * @returns {string[]} list of *bad* words hehe
 */
export const badWords: typeof import("../src/data/badWords.js");

/**
 * regex to match emojis in unicode 14.0
 * @returns regex to match emojis in unicode 14.0
 */
export const emoji: RegExp;

/**
 * a bunch of emojis used for my projects
 * @returns {string} an emoji in the format <a:name:id> or <:name:id>
 */
export const emojis: typeof import("../src/data/emojis.js");





// functions

/**
 * 
 */
export function choice(array: any[]): any

/**
 * covers info on (about) all erroneous status codes
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * @param {StatusCode} statusCode status code
 * @returns {StatusInfo} status info
 */
export function httpStatusInfo(statusCode?: StatusCode): StatusInfo;

/**
 * formats a permission to a readable string
 * @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 * @param permissionString permission to format
 * @example parsePermissions("BAN_MEMBERS"); // ban members 🚫
 * @returns a string of a permission that has been formatted
 */
export function parsePermissions(permissionString: import("discord.js/typings").PermissionString): string;

/**
 * strips indents off a template literal
 * @param str template literal to strip indents off of
 * @returns template literal with indents stripped
 */
export function strip(str: string): string;

/**
 * pretty much "pauses" asynchronous code
 * @param delay ms to wait for
 * @returns {Promise<void>}
 */
export async function wait(delay: number): Promise<void>;





// types
export type StatusCode = 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;

export type StatusInfo = {
   code: number | string;
   shortDescription: string;
   description: string;
   fix: string;
   link: string;
};