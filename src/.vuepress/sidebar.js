const sidebar = [
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
          {
            text: 'BFC、IFC、GFC、FFC',
            link: '/front/css/bigf.md',
          },
          {
            text: 'rem移动端适配',
            link: '/front/css/rem.md',
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
            text: 'es6模块化代码转es5代码的模样',
            link: '/front/engineering/es6toes5.md',
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
];

module.exports = { sidebar };