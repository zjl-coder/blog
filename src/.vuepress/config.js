const path = require('path');
const { defaultTheme } = require('@vuepress/theme-default');
const { searchPlugin } = require('@vuepress/plugin-search');
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top');
const { externalLinkIconPlugin } = require('@vuepress/plugin-external-link-icon');
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components');

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
                text: 'console.log 打印颜色',
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
    backToTopPlugin(),
    externalLinkIconPlugin({
      locales: {
        '/': {
          openInNewWindow: 'open in new window',
        },
        '/zh/': {
          openInNewWindow: '在新窗口打开',
        },
      },
      externalLinkIcon: true,
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}

// __dirname  blog/src/.vuepress