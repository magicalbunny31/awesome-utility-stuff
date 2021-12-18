/**
 * gets a random element from an array ❓
 * @param {any[]} array array to get a random element from 📃
 * @param {number} choices number of choices to get #️⃣
 * @returns {any} an element of that array 📄
 */
module.exports = (array, choices) => {
   if (choices) return array.sort(() => .5 - Math.random()).slice(0, choices); // get n random choices
   else return  array[Math.floor(Math.random() * array.length)]; // get 1 random choice
};