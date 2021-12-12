// classes
const Statuses = require("../../src/classes/statuses.js");

// data
const badWords = require("../../src/data/badWords.js");
const emoji = require("../../src/data/emoji.js");
const emojis = require("../../src/data/emojis.js");

// functions
const httpStatusInfo = require("../../src/functions/httpStatusInfo.js");
const parsePermissions = require("../../src/functions/parsePermissions.js");
const strip = require("../../src/functions/strip.js");
const wait = require("../../src/functions/wait.js");


module.exports = {
   // classes
   Statuses,

   // data
   badWords,
   emoji,
   emojis,

   // functions
   httpStatusInfo,
   parsePermissions,
   strip,
   wait
};