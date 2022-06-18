// classes
/* nothing to see here.. */

// data
const badWords = require("../../src/data/badWords.js");
const colours = require("../../src/data/colours.js");
const emoji = require("../../src/data/emoji.js");
const emojis = require("../../src/data/emojis.js");
const url = require("../../src/data/url.js");

// functions
const autoArray = require("../../src/functions/autoArray.js");
const checkChatInputCommandPermissions = require("../../src/functions/checkChatInputCommandPermissions.js");
const choice = require("../../src/functions/choice.js");
const createCollectorExpirationTime = require("../../src/functions/createCollectorExpirationTime.js");
const formatPermissions = require("../../src/functions/formatPermissions.js");
const getNearestColourPaw = require("../../src/functions/getNearestColourPaw.js");
const help = require("../../src/functions/help.js");
const noop = require("../../src/functions/noop.js");
const number = require("../../src/functions/number.js");
const partialEmoji = require("../../src/functions/partialEmoji");
const partition = require("../../src/functions/partition.js");
const sendBotError = require("../../src/functions/sendBotError.js");
const set = require("../../src/functions/set.js");
const shuffle = require("../../src/functions/shuffle.js");
const statusInfo = require("../../src/functions/statusInfo.js");
const strip = require("../../src/functions/strip.js");
const sum = require("../../src/functions/sum.js");
const toDecimal = require("../../src/functions/toDecimal.js");
const toHexadecimal = require("../../src/functions/toHexadecimal.js");
const wait = require("../../src/functions/wait.js");


module.exports = {
   // classes
   /* nothing to see here.. */

   // data
   badWords,
   colours,
   emoji,
   emojis,
   url,

   // functions
   autoArray,
   checkChatInputCommandPermissions,
   choice,
   createCollectorExpirationTime,
   formatPermissions,
   getNearestColourPaw,
   help,
   noop,
   number,
   partialEmoji,
   partition,
   sendBotError,
   set,
   shuffle,
   statusInfo,
   strip,
   sum,
   toDecimal,
   toHexadecimal,
   wait
};