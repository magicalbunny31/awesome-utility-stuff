// classes
const Statuses = require("../../src/classes/statuses.js");

// data
const badWords = require("../../src/data/badWords.js");
const emoji = require("../../src/data/emoji.js");
const emojis = require("../../src/data/emojis.js");
const url = require("../../src/data/url.js");

// functions
const autoArray = require("../../src/functions/autoArray.js");
const choice = require("../../src/functions/choice.js");
const formatPermission = require("../../src/functions/formatPermission.js");
const getNearestColourPaw = require("../../src/functions/getNearestColourPaw.js");
const help = require("../../src/functions/help.js");
const httpStatusInfo = require("../../src/functions/httpStatusInfo.js");
const noop = require("../../src/functions/noop.js");
const number = require("../../src/functions/number.js");
const partialEmoji = require("../../src/functions/partialEmoji");
const partition = require("../../src/functions/partition.js");
const sendBotError = require("../../src/functions/sendBotError.js");
const set = require("../../src/functions/set.js");
const shuffle = require("../../src/functions/shuffle.js");
const strip = require("../../src/functions/strip.js");
const sum = require("../../src/functions/sum.js");
const toDecimal = require("../../src/functions/toDecimal.js");
const toHexadecimal = require("../../src/functions/toHexadecimal.js");
const wait = require("../../src/functions/wait.js");


module.exports = {
   // classes
   Statuses,

   // data
   badWords,
   emoji,
   emojis,
   url,

   // functions
   autoArray,
   choice,
   formatPermission,
   getNearestColourPaw,
   help,
   httpStatusInfo,
   noop,
   number,
   partialEmoji,
   partition,
   sendBotError,
   set,
   shuffle,
   strip,
   sum,
   toDecimal,
   toHexadecimal,
   wait
};