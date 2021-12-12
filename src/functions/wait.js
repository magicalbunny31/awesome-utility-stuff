/**
 * @param {number} delay ms to wait for in code execution
 * @returns {Promise<void>}
 */
module.exports = async delay => void await new Promise(resolve => setTimeout(resolve, delay));