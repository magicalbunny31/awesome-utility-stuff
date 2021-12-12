/**
 * strips indents off a template literal
 * @param {string} str template literal to strip indents off of
 * @returns {string} template literal with indents stripped
 */
module.exports = str => str.replace(/^[^\S\n]+|[^\S\n]+$|^\n/gm, ``);