/**
 * pretty much "pauses" asynchronous code ⏱️
 * @param {number} delay ms to wait for 🔢
 * @returns {Promise<void>} ⌚
 */
module.exports = delay => new Promise(resolve => setTimeout(resolve, delay));