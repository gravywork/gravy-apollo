const NODE_ENV = process.env.NODE_ENV || 'development'
const settings = require(`./${NODE_ENV}`)

module.exports = settings
