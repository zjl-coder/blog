const network = {
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
        },
        {
          text: 'HTTP教程',
          link: '/network/tcp/http.md',
        },
      ],
    },
    {
      text: 'DNS解析过程',
      link: '/network/dns.md',
    },
  ],
};

module.exports = { network };
