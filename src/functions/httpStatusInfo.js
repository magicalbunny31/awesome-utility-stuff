/**
 * covers info on (about) all erroneous status codes 📋
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status 🔗
 * @param {string} api name of the api 🦊
 * @param {import("../../types/index").StatusCode} statusCode status code #️⃣
 * @returns {import("../../types/index").StatusInfo} status info 🗨️
 */
module.exports = (api, statusCode) => {
   const statusCodes = {
      400: {
         code: 400,
         shortDescription: `Bad Request`,
         description: `**\`${api}\`** couldn't understand my request..`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400`
      },

      401: {
         code: 401,
         shortDescription: `Unauthorized`,
         description: `i was unable to authenticate my identity; and, as such, the request was rejected..`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401`
      },

      402: {
         code: 402,
         shortDescription: `Payment Required`,
         description: `i'm not sure why **\`${api}\`** has sent me this; this isn't meant to be in use!`,
         fix: `i'll go ask my owner how this has happened, this issue should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402`
      },

      403: {
         code: 403,
         shortDescription: `Forbidden`,
         description: `i was unauthorized to access the content..`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403`
      },

      404: {
         code: 404,
         shortDescription: `Not Found`,
         description: `**\`${api}\`** couldn't find the requested content i asked for..`,
         fix: `try sending the command again, if that doesn't work then try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404`
      },

      405: {
         code: 405,
         shortDescription: `Method Not Allowed`,
         description: `**\`${api}\`** couldn't understand what i was trying to request..`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405`
      },

      406: {
         code: 406,
         shortDescription: `Not Acceptable`,
         description: `**\`${api}\`** couldn't accept my request..`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406`
      },

      407: {
         code: 407,
         shortDescription: `Proxy Authentication Required`,
         description: `**\`${api}\`** couldn't accept my request because i have yet to authenticate myself..`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407`
      },

      408: {
         code: 408,
         shortDescription: `Request Timeout`,
         description: `it took me too long to complete my request, so **\`${api}\`** shut down the connection on me..`,
         fix: `try sending the command again, if that doesn't work then try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408`
      },

      409: {
         code: 409,
         shortDescription: `Conflict`,
         description: `**\`${api}\`** isn't accepting my request as it conflicts with the state of the resource`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409`
      },

      410: {
         code: 410,
         shortDescription: `Gone`,
         description: `the stuff i was looking for in **\`${api}\`** is no longer available..`,
         fix: `try using the command again; if that doesn't work then try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410`
      },

      411: {
         code: 411,
         shortDescription: `Length Required`,
         description: `**\`${api}\`** is asking me for more information, but i'm not sure how to respond`,
         fix: `i'll go ask my owner for advice on what to do next, so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411`
      },

      412: {
         code: 412,
         shortDescription: `Precondition Failed`,
         description: `**\`${api}\`** is telling me that something i sent didn't add up on their end`,
         fix: `try sending the command again, if that doesn't work then try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412`
      },

      413: {
         code: 413,
         shortDescription: `Payload Too Large`,
         description: `the connection was shut on me due to me requesting too much from **\`${api}\`**!`,
         fix: `i'll go ask my owner for advice on what to do next, so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413`
      },

      414: {
         code: 414,
         shortDescription: `URI Too Long`,
         description: `something i requested from **\`${api}\`** got denied because it was too long`,
         fix: `i'll go ask my owner for advice on what to do next, so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414`
      },

      415: {
         code: 415,
         shortDescription: `Unsupported Media Type`,
         description: `**\`${api}\`** refused to take what i was uploading to them!`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415`
      },

      416: {
         code: 416,
         shortDescription: `Range Not Satisfiable`,
         description: `**\`${api}\`** was unable to get for what i was asking for..`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416`
      },

      417: {
         code: 417,
         shortDescription: `Expectation Failed`,
         description: `**\`${api}\`** was unable to meet my expectations for the content i asked for`,
         fix: `i'll go ask my owner for advice on what to do next, so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417`
      },

      418: {
         code: 418,
         shortDescription: `I'm a teapot`,
         description: `**\`${api}\`** didn't seem to want to handle my request and sent me something stupid in return`,
         fix: `well....i guess i'll go ask my owner on what to do next, so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418`
      },

      421: {
         code: 421,
         shortDescription: `Misdirected Request`,
         description: `**\`${api}\`** redirected me to a server which couldn't produce a response`,
         fix: `i'll go ask my owner for advice on what to do next, so this should be fixed soon`,
         link: null
      },

      422: {
         code: 422,
         shortDescription: `Unprocessable Entity`,
         description: null,
         fix: null,
         link: null
      },

      423: {
         code: 423,
         shortDescription: `Locked`,
         description: null,
         fix: null,
         link: null
      },

      424: {
         code: 424,
         shortDescription: `Failed Dependency`,
         description: null,
         fix: null,
         link: null
      },

      425: {
         code: 425,
         shortDescription: `Too Early`,
         description: `**\`${api}\`** is unwilling to risk processing my request..`,
         fix: `i'll go ask my owner for advice on what to do next, so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425`
      },

      426: {
         code: 426,
         shortDescription: `Upgrade Required`,
         description: `**\`${api}\`** is telling me that i'm outdated!`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426`
      },

      428: {
         code: 428,
         shortDescription: `Precondition Required`,
         description: `**\`${api}\`** is asking me for more information to complete the request!`,
         fix: `i'll go ask my owner for advice on what to do next, so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428`
      },

      429: {
         code: 429,
         shortDescription: `Too Many Requests`,
         description: `**\`${api}\`** is telling me that i'm sending too many requests!`,
         fix: `try sending the command again, if that doesn't work then try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429`
      },

      431: {
         code: 431,
         shortDescription: `Request Header Fields Too Large`,
         description: `**\`${api}\`** is refusing to listen to me because my request is too large..`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431`
      },

      451: {
         code: 451,
         shortDescription: `Unavailable For Legal Reasons`,
         description: `**\`${api}\`** tells me that the requested resource cannot be legally provided - an example of this is content censored by a government..`,
         fix: `don't worry, you're not in trouble! i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431`
      },





      500: {
         code: 500,
         shortDescription: `Internal Server Error`,
         description: `**\`${api}\`** encountered an error..`,
         fix: `try sending the command again, if that doesn't work then try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500`
      },

      501: {
         code: 501,
         shortDescription: `Not Implemented`,
         description: `**\`${api}\`** was unable to understand what i was saying..`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501`
      },

      502: {
         code: 502,
         shortDescription: `Bad Gateway`,
         description: `**\`${api}\`** got a response it couldn't understand from its server..`,
         fix: `try sending the command again, if that doesn't work then try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502`
      },

      503: {
         code: 503,
         shortDescription: `Service Unavailable`,
         description: `**\`${api}\`** is down..`,
         fix: `sounds like **\`${api}\`** needs to rest for a bit, go give it a couple of minutes to recover before trying again`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503`
      },

      504: {
         code: 504,
         shortDescription: `Gateway Timeout`,
         description: `it took **\`${api}\`**'s upstream server too long to complete its request, so it timed out`,
         fix: `try sending the command again, if that doesn't work then try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504`
      },

      505: {
         code: 505,
         shortDescription: `HTTP Response Not Supported`,
         description: `the HTTP version i used isn't supported by **\`${api}\`**..`,
         fix: `this indicates an error on the code-side of things; i've notified my owner in the meantime so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505`
      },

      506: {
         code: 506,
         shortDescription: `Variant Also Negotiates`,
         description: `**\`${api}\`** seems to have had an internal configuration error`,
         fix: `this indicates an error on **\`${api}\`**'s side of things; it's best to try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506`
      },

      507: {
         code: 507,
         shortDescription: `Insufficient Storage`,
         description: `**\`${api}\`** doesn't have enough storage to store the representation for my request`,
         fix: `this indicates an error on **\`${api}\`**'s side of things; it's best to try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507`
      },

      508: {
         code: 508,
         shortDescription: `Loop Detected`,
         description: `**\`${api}\`** is currently panicking about finding an infinite loop..`,
         fix: `this indicates an error on **\`${api}\`**'s side of things; it's best to try again later`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508`
      },

      510: {
         code: 510,
         shortDescription: `Not Extended`,
         description: `**\`${api}\`** couldn't access what i wanted due to policy: it's asking me to send another request now`,
         fix: `i won't ask for it again; instead i'll go ask my owner for advice on what to do next, so this should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510`
      },

      511: {
         code: 511,
         shortDescription: `Network Authentication Required`,
         description: `**\`${api}\`** is asking me to authenticate to....gain network access?`,
         fix: `this doesn't even apply to me! i'll go ask my owner why this has happened, so this issue should be fixed soon`,
         link: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511`
      },





      unknown: {
         code: `unknown`,
         shortDescription: ``,
         description: `an error has occurred..`,
         fix: `try using the command again, if that doesn't work then try again later`,
         link: null
      }
   };

   return statusCodes[statusCode];
};