/**
 * pretty much "pauses" asynchronous code
 * @param {number} delay ms to wait for
 * @returns {Promise<void>}
 */
module.exports = async delay => void await new Promise(resolve => setTimeout(resolve, delay));