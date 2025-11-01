const { front } = require('./menu/front');
const { server } = require('./menu/server');
const { network } = require('./menu/network');
const { safe } = require('./menu/safe');
const { algorithm } = require('./menu/algorithm');
const { app } = require('./menu/app');
const { interviewQuestions } = require('./menu/interview_questions');

// 前端组的左菜单在一起显示
const frontGroup = [front, server, network, app];

const sidebar = {
  '/front/': frontGroup,
  '/server/': frontGroup,
  '/network/': frontGroup,
  '/app/': frontGroup,
  '/safe/': [safe],
  '/algorithm/': [algorithm],
  '/interview_questions/': [interviewQuestions],
};

module.exports = { sidebar };
