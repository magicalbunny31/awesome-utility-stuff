/**
 * strips indents off a string 🔨
 * @param {string} str string to strip indents off of 🗨️
 * @returns {string} string with indents stripped 📄
 */
const { stripIndents } = require("common-tags");
module.exports = stripIndents;



// believe me, i tried so hard to make my own script!
// alas, template literals and tagged templates are --way-- too confusing to me for now..

// todo
// str.join(``).replace(/^[^\S\n]+|[^\S\n]+$|^\n/gm, ``);