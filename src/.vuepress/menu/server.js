const server = {
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
};

module.exports = { server }