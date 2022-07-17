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
        }
      ]
    }
  ]
};

module.exports = { network }