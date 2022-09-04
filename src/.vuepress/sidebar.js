const { front } = require('./menu/front');
const { server } = require('./menu/server');
const { network } = require('./menu/network');
const { safe } = require('./menu/safe');
const { algorithm } = require('./menu/algorithm');
const { app } = require('./menu/app')

// 前端组的左菜单在一起显示
const frontGroup = [front, server, network, app];

const sidebar = {
  '/front/': frontGroup,
  '/server/': frontGroup,
  '/network/': frontGroup,
  '/app/': frontGroup,
  '/safe/': [safe],
  '/algorithm/': [algorithm],
}

module.exports = { sidebar };