<TitleList></TitleList>

# browserify、webpack、babel、browserslist

## browserify
在**ECMAScript 6**推出官方的模块处理方案**之前**，有两种方案在实践中广泛采用：一种是**AMD**模块规范，针对模块的异步加载，主要用于浏览器端；另一种是**CommonJS**规范，针对模块的同步加载，主要用于服务器端，即node.js环境。  

browserify是一个node.js模块，主要用于**改写**现有的CommonJS模块，使得浏览器端也可以使用这些模块。

## browserify 和 webpack 
都是 AMD、 CMD、 CommonJs、 es6 module等模块打包成一个或几个bundle文件的工具。目前webpack 最受欢迎，流行度最高，生态最完善。  

[模块打包器对比](https://juejin.cn/post/6927407999312986120)

## babel
作用：将 ES6+ 版本的代码转换为 ES5代码，以便能够运行在当前环境和旧版浏览器环境中。比如转译箭头函数，和 es6+ 的还没在浏览器上实现的新语法等。  

babel 转译之后，由 webpack 打包成bundle.  

[webpack，Babel，babel-loader的关系](https://juejin.cn/post/6844904098303574023)

## browserslist
在不同的前端工具之间共用目标浏览器和 node 版本的配置工具。  

[Browserslist 基础知识](https://juejin.cn/post/6844903669524086797)