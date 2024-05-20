/**
 * format bytes into a human-readable string 📄
 * @see https://stackoverflow.com/a/18650828 🔗
 * @param {number} bytes bytes to convert into a human-readable string 🔢
 * @param {boolean} [useBytes] set to `true` if you want to use mebi- (default `false`) 🔀
 * @param {number} [decimals] amount of decimal spaces to display in the human-readable string (default `2`) #️⃣
 * @returns {string} human-readable string 📄
 */
module.exports = (bytes, useBytes = false, decimals = 2) => {
   if (!+bytes)
      return `0 ${useBytes ? `bits` : `bytes`}`;

   const k = useBytes
      ? 1024
      : 1000;

   const dm = decimals < 0
      ? 0
      : decimals;

   const sizes = useBytes
      ? [ `bytes`, `KiB`, `MiB`, `GiB`, `TiB`, `PiB`, `EiB`, `ZiB`, `YiB` ]
      : [ `bytes`, `KB`,  `MB`,  `GB`,  `TB`,  `PB`,  `EB`,  `ZB`,  `YB`  ];

   const i = Math.floor(Math.log(bytes) / Math.log(k));

   return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};