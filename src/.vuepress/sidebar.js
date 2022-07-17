const { front } = require('./menu/front');
const { server } = require('./menu/server');
const { network } = require('./menu/network');
const { safe } = require('./menu/safe')

const sidebar = {
  '/front/': [front, server, network],
  '/server/': [front, server, network],
  '/network/': [front, server, network],
  '/safe/': [safe],
}

module.exports = { sidebar };