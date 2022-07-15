# Webpack热更新原理解析

Hot Module Replacement（以下简称 HMR）  
[Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007)

## 为什么需要HMR
在 webpack HMR 功能之前，已经有很多 live reload 的工具或库，比如 live-server，这些库监控文件的变化，然后通知浏览器端刷新页面，那么我们为什么还需要 HMR 呢？  
- live reload 工具并不能够保存应用的状态（states），当刷新页面后，应用之前<Te d>状态丢失</Te>，例如，点击按钮出现弹窗，当浏览器刷新后，弹窗也随即消失，要恢复到之前状态，还需再次点击按钮。而 webapck HMR 则不会刷新浏览器，而是运行时对模块进行热替换，保证了应用状态不会丢失，提升了开发效率。
- 在古老的开发流程中，我们可能需要手动运行命令对代码进行打包，并且打包后再手动刷新浏览器页面，而这一系列重复的工作都可以通过 HMR <Te d>工作流</Te>来自动化完成，让更多的精力投入到业务中，而不是把时间浪费在重复的工作上。
- HMR 兼容市面上大多前端框架或库，比如 React Hot Loader，Vue-loader，能够监听 React 或者 Vue 组件的变化，实时将最新的组件更新到浏览器端。

## 疑问
1. 使用webpack HMR (即通常的npm run dev模式) 进行开发的过程中，bundle 文件或者几个 chunk 文件<Te d>没有在 dist 目录</Te>中找到，它们去哪呢？
2. 通过查看 webpack-dev-server (作为本地静态资源服务器使用) 的 package.json 文件，我们知道其依赖于 webpack-dev-middleware 库，那么 webpack-dev-middleware 在 HMR 过程中扮演什么角色？(<Te d>webpack-dev-middleware 干嘛的</Te>)
3. 使用 HMR 的过程中，通过 Chrome 开发者工具我知道浏览器是通过 websocket 和 webpack-dev-server 进行通信的，但是 websocket 的 message 中并没有发现新模块代码。打包后的新模块又是通过什么方式发送到浏览器端的呢？为什么新的模块不通过 websocket 随消息一起发送到浏览器端呢？(<Te d>浏览器是怎么拿到最新的模块代码的</Te>)
4. 浏览器拿到最新的模块代码，HMR 又是怎么将老的模块替换成新的模块，在替换的过程中怎样处理模块之间的依赖关系？(<Te d>浏览器是怎么更新模块代码的</Te>)
5. es6 转化为es5 的 import 和 export 是怎么转化的。[es6模块化代码转es5代码的模样](./es6toes5.md)
6. 当模块的热替换过程中，如果替换模块失败，有什么<Te d>回退机制</Te>吗？

## 流程总结
1. 当修改了一个或多个文件；
2. 文件系统接收更改并通知webpack；
3. webpack重新编译构建一个或多个模块，并通知HMR服务器进行更新；
4. HMR Server 使用webSocket通知HMR runtime 需要更新，HMR运行时通过HTTP请求更新jsonp；
5. HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。

### 流程图如下
![An image](./images/hmr.jpeg)  