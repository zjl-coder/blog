const navbar = [
  {
    text: '风雨夜航',
    children: [
      {
        text: '前端',
        link: '/front/',
      },
      {
        text: '服务端',
        link: '/server/',
      },
      {
        text: '网络',
        link: '/network/',
      },
      {
        text: '应用端',
        link: '/app/',
      },
    ],
  },
  {
    text: '安全',
    link: '/safe/',
  },
  {
    text: '面试题',
    children: [
      {
        text: '八股文',
        link: '/interview_questions/',
      },
      {
        text: '设计模式',
        link: 'https://zjl-coder.github.io/design-pattern/',
      },
      {
        text: '算法',
        link: '/algorithm/',
      },
    ],
  },
  {
    text: '工具',
    link: '/tool.md',
  },
];

module.exports = { navbar };
