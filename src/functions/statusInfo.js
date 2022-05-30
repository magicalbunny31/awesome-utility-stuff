/**
 * covers info on http status codes 📋
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status 🔗
 * @param {string | number} statusCode status code to view info on #️⃣
 * @returns {import("@types/index").StatusInfo} some awesome status info 🗨️
 */
module.exports = status => {
   // imports
   const { STATUS_CODES } = require("http");


   // this isn't a valid status
   if (!STATUS_CODES[status])
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › statusInfo: not a valid \`status\` parameter value ⚠️`);


   // base url for http status infos
   const httpStatusInfoBaseLink = `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status`;


   // return some info
   return {
      status,
      statusText: STATUS_CODES[status],
      link: `${httpStatusInfoBaseLink}/${status}`
   };
};