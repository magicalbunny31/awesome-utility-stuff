/**
 * find similar strings/objects based off of a string 📋
 *
 * this is compared off aceakash's string-similarity, see link 👤
 * @see https://github.com/aceakash/string-similarity 🔗
 * @param {string} query string to query 📄
 * @param {(string | object)[]} targets target array 📃
 * @param {object} settings settings to include 🔧
 * @param {string} settings.key for an array of objects, the key of the object to access for the string 💬
 * @param {number} settings.limit max amounts of results to return 🔢
 * @param {number} settings.minScore filter out results with a score below this target 🗯️
 * @returns {{ score: number, [target | object]: string | T }[]} array of results of the targets sorted in similarity
 */
module.exports = (query, targets, settings = {}) => {
   // data validation
   if (typeof query !== `string`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › findSimilar: not a valid \`query\` parameter value ⚠️`);

   if (!(targets.every(target => typeof target === `string`) || targets.every(target => typeof target === `object`)))
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › choice: not a valid \`targets\` parameter value ⚠️`);


   // results array
   const results = [];


   // function to compare two strings
   const compareStrings = (query, target) => {
      // get rid of whitespace characters
      query  = query .replace(/\s+/g, ``);
      target = target.replace(/\s+/g, ``);

      // strings are identical
      if (query === target)
         return 1;

      // one of the strings are empty or one character long
      if (query.length <= 1 || target.length <= 1)
         return 0;

      // so i don't know what actually happens after this point
      // but i rewrote it to make it look nice ✨
      const bigrams = new Map();

      for (let i = 0; i < query.length - 1; i ++) {
         const bigram = query.slice(i, i + 2);

         const count = bigrams.has(bigram)
            ? bigrams.get(bigram) + 1
            : 1;

         bigrams.set(bigram, count);
      };

      let intersectionSize = 0;

      for (let i = 0; i < target.length - 1; i ++) {
         const bigram = target.slice(i, i + 2);

         const count = bigrams.has(bigram)
            ? bigrams.get(bigram)
            : 0;

         if (count > 0) {
            bigrams.set(bigram, count - 1);
            intersectionSize ++;
         };
      };

      return (2 * intersectionSize) / (query.length + target.length - 2);
   };


   // loop each of the targets
   for (const element of targets) {
      // the target to use
      const target = settings.key
         ? element[settings.key]
         : element;

      // get a score of those matches
      const score = compareStrings(query, target);

      // score is below minScore
      if (score < settings.minScore || 0)
         continue;

      // push to the results
      results.push({
         score,
         [settings.key ? `object` : `target`]: element
      });
   };


   // sort these results in the order of their score
   const sortedResults = results.sort((a, b) => b.score - a.score);


   // return these results
   return settings.limit
      ? sortedResults.slice(0, settings.limit) // if a limit was specified, slice the results array
      : sortedResults;
};