const front = {
  text: '前端',
  link: '/front/',
  children: [
    {
      text: '职业',
      link: '/front/work',
    },
    {
      text: '前端Leader的任务',
      link: '/front/work/leader.md',
    },
    {
      text: 'js',
      link: '/front/js',
      children: [
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
          text: 'promise执行流程',
          link: '/front/js/promise.md',
        },
        {
          text: 'async await 执行流程',
          link: '/front/js/async.md',
        },
        {
          text: '柯里化与局部应用',
          link: '/front/js/curry-partial.md',
        },
        {
          text: 'click回调的异步与同步',
          link: '/front/js/click.md',
        },
        {
          text: 'three.js',
          link: '/front/js/threejs.md',
        },
        {
          text: '*.d.ts全局类型声明',
          link: '/front/js/d-ts.md',
        },
        {
          text: '跨端技术的本质与现状',
          link: '/front/js/cross-terminal.md',
        },
        {
          text: 'i18next',
          link: '/front/js/i18next.md',
        },
      ],
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
        {
          text: '动画函数区分',
          link: '/front/css/animation.md',
        },
        {
          text: 'inline-block 元素下移现象',
          link: '/front/css/inline-block.md',
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
        },
        {
          text: '组件函数的闭包陷阱',
          link: '/front/react/closure-trap.md',
        },
        {
          text: 'npm link导致react库存在多实例',
          link: '/front/react/npm-link-bug.md',
        },
      ],
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
          link: '/front/engineering/ast.md',
        },
        {
          text: 'Babel基本知识',
          link: '/front/engineering/babel.md',
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
          text: '前端错误监控',
          link: '/front/engineering/error-monitor.md',
        },
        {
          text: '前端性能监控',
          link: '/front/engineering/performance-monitor.md',
        },
        {
          text: '性能指标',
          link: '/front/engineering/performance.md',
        },
        {
          text: '前端优化方案',
          link: '/front/engineering/optimize.md',
        },
        {
          text: '对web项目的思考',
          link: '/front/engineering/web.md',
        },
        {
          text: 'git常用命令',
          link: '/front/engineering/git.md',
        },
        {
          text: 'npm和yarn的危险行为',
          link: '/front/engineering/npm-dangerous-act.md',
        },
        {
          text: '录屏与源码定位',
          link: '/front/engineering/record.md',
        },
      ],
    },
  ],
};

module.exports = { front };
