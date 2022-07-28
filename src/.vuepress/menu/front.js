const front = {
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
        {
          text: '获取URL get参数',
          link: '/front/js/search-params.md',
        },
        {
          text: '浏览器运行环境与web worker',
          link: 'https://docs.qq.com/slide/DQVhscEl1aHlqTlpz',
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
          text: 'Webpack基本知识',
          link: '/front/engineering/webpack.md',
        },
        {
          text: 'webpack plugin插件',
          link: '/front/engineering/webpack-plugin.md',
        },
        {
          text: 'webpack loader',
          link: '/front/engineering/webpack-loader.md',
        },
        {
          text: 'Webpack热更新原理解析',
          link: '/front/engineering/hmr.md',
        },
        {
          text: 'AST抽象语法树',
          link: '/front/engineering/ast.md'
        },
        {
          text: 'Babel基本知识',
          link: '/front/engineering/babel.md'
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
        },
        {
          text: '对web项目的思考',
          link: '/front/engineering/web.md',
        }
      ]
    },
  ]
}

module.exports = { front }