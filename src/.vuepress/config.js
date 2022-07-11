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
        text: '设计模式',
        link: 'https://zjl-coder.github.io/design-pattern/',
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
              },
              {
                text: 'browserify、webpack、babel、browserslist',
                link: '/front/js/bwbb.md',
              },
              {
                text: 'JavaScript中的Error类型',
                link: '/front/js/error.md',
              },
            ]
          },
          {
            text: 'css',
            link: '/front/css',
          },
          {
            text: 'react',
            link: '/front/react',
            children: [
              {
                text: '非受控组件 react',
                link: '/front/react/uncontrolled-components.md',
              },
              {
                text: 'react渲染出0的问题',
                link: '/front/react/react-0.md',
              }
            ]
          },
          {
            text: '性能',
            link: '/front/performance',
            children: [
              {
                text: '性能指标',
                link: '/front/performance/index.md',
              }
            ]
          },
        ]
      },
      {
        text: '服务端',
        link: '/server/',
        children: [
          {
            text: 'nginx',
            link: '/server/nginx/',
            children: [
              {
                text: '前端nginx知识',
                link: '/server/nginx/nginx.md',
              }
            ]
          }
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