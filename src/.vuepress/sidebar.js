const { front } = require('./menu/front');
const { server } = require('./menu/server');
const { network } = require('./menu/network');
const { safe } = require('./menu/safe');
const { algorithm } = require('./menu/algorithm')

const sidebar = {
  '/front/': [front, server, network],
  '/server/': [front, server, network],
  '/network/': [front, server, network],
  '/safe/': [safe],
  '/algorithm/': [algorithm],
}

module.exports = { sidebar };