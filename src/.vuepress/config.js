const { defaultTheme } = require('@vuepress/theme-default');
const { searchPlugin } = require('@vuepress/plugin-search');

module.exports = {
  lang: 'zh-CN',
  title: '风时雨',
  description: '风时雨博客',
  base: '/blog/',
  dest: 'docs',
  theme: defaultTheme({
    navbar:[
      {
        text: 'Foo',
        link: '/foo/',
      }
    ],
    sidebar: [
      {
        text: '前端',
        link: '/front/',
        children: [
          {
            text: 'js',
            link: '/front/js',
            children: [
              {
                text: 'console 颜色',
                link: '/front/js/console-log.md',
              }
            ]
          },
          {
            text: 'css',
            link: '/front/css',
          },
        ]
      }
    ],
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
      maxSuggestions: 100,
    }),
  ],
}