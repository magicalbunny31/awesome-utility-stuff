/**
 * pretty much "pauses" asynchronous code ⏱️
 * @param {number} delay ms delay to wait for 🔢
 * @returns {Promise<void>} a "pause" in the asynchronous code!! ⌚
 */
module.exports = delay => new Promise(resolve => setTimeout(resolve, delay));