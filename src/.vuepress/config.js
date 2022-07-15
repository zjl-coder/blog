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
    contributors: false,
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
            children: [
              {
                text: 'BFC、浮动float、clear',
                link: '/front/css/bfc.md',
              },
            ],
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
            text: '工程',
            link: '/front/engineering',
            children: [
              {
                text: 'Webpack热更新原理解析',
                link: '/front/engineering/hmr.md',
              },
              {
                text: '前端工程化',
                link: '/front/engineering/engineering.md',
              },
              {
                text: '性能指标',
                link: '/front/engineering/performance.md',
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
            text: 'node',
            link: '/server/node/',
            children: [
              {
                text: '理解node buffer',
                link: '/server/node/buffer.md',
              },
              {
                text: '理解node http',
                link: '/server/node/http.md',
              },
              {
                text: '理解node router路由中间件的原理',
                link: '/server/node/router.md',
              },
              {
                text: '理解node stream流',
                link: '/server/node/stream.md',
              }
            ]
          },
          {
            text: 'nginx',
            link: '/server/nginx/',
            children: [
              {
                text: '前端nginx知识',
                link: '/server/nginx/nginx.md',
              }
            ]
          },
          {
            text: '系统',
            link: '/server/system/',
            children: [
              {
                text: '进程和线程',
                link: '/server/system/process-thread.md',
              }
            ]
          },
          {
            text: 'docker',
            link: '/server/docker/',
            children: [
              {
                text: 'docker shell 自动化脚本',
                link: '/server/docker/shell.md',
              }
            ]
          }
        ]
      },
      {
        text: '网络',
        link: '/network/',
        children: [
          {
            text: 'tcp',
            link: '/network/tcp',
            children: [
              {
                text: 'HTTP长连接、短连接和websocket',
                link: '/network/tcp/connection.md',
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