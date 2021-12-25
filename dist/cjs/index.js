// classes
const Statuses = require("../../src/classes/statuses.js");

// data
const badWords = require("../../src/data/badWords.js");
const emoji = require("../../src/data/emoji.js");
const emojis = require("../../src/data/emojis.js");

// functions
const choice = require("../../src/functions/choice.js");
const formatPermission = require("../../src/functions/formatPermission.js");
const httpStatusInfo = require("../../src/functions/httpStatusInfo.js");
const noop = require("../../src/functions/noop.js");
const number = require("../../src/functions/number.js");
const sendBotError = require("../../src/functions/sendBotError.js");
const set = require("../../src/functions/set.js");
const shuffle = require("../../src/functions/shuffle.js");
const strip = require("../../src/functions/strip.js");
const sum = require("../../src/functions/sum.js");
const wait = require("../../src/functions/wait.js");


module.exports = {
   // classes
   Statuses,

   // data
   badWords,
   emoji,
   emojis,

   // functions
   choice,
   formatPermission,
   httpStatusInfo,
   noop,
   number,
   sendBotError,
   set,
   shuffle,
   strip,
   sum,
   wait
};