<TitleList></TitleList>

# webpack loader

### 生效的位置
loader在编译流程中的生效的位置  
![An image](./images/wp16.png)
流程图中， `runLoaders` 会调用用户所配置的 loader 集合读取、转译资源，此前的内容可以千奇百怪，但转译之后理论上应该输出标准 JavaScript 文本或者 AST 对象，webpack 才能继续处理模块依赖。  

loader 的职责不外乎是将内容 A 转化为内容 B，但是在具体用法层面还挺多讲究的，有 pitch、pre、post、inline 等概念用于应对各种场景。

### 案例分析
[Webpack 案例 —— vue-loader 原理分析](https://juejin.cn/post/6937125495439900685)

### loader执行流程
一个loader可以定义两类函数，一个默认导出的函数normalLoader，一个用于阻断常规流程的函数pitchLoader，定义方式如下：  
```js
// a-loader.js
// normal loader:
function aLoader(resource) {
  // ...
  return resource
}
// pitch loader:
aLoader.pitch = function() {}
module.exports = aLoader
```
如果我们配置use: [ 'a-loader', 'b-loader', 'c-loader' ]，且三个loader都没有pitchLoader或pitchLoader无返回值，loader将会以以下流程执行：
```js
// |- a-loader `pitch` 没有或无返回值
//   |- b-loader `pitch` 没有或无返回值
//     |- c-loader `pitch` 没有或无返回值
//       |- load resource
//     |- c-loader normal execution
//   |- b-loader normal execution
// |- a-loader normal execution
```
如果在b-loader的pitch函数返回了某个值，流程将会变成下面这样：
```js
// |- a-loader `pitch`
//   |- b-loader `pitch` 有返回值
// |- a-loader normal execution
```
### 同步/异步
loader可以支持以同步或异步(callback, Promise)方式运行，调用this.async()获取回调，并在执行完毕后调用。
```js
module.exports = function(resource) {
  const callback = this.async()
  asyncFunc((err, res) => {
      callback(err, res)
  })
}
```
### loader.raw
我们可以通过这个参数指定loader接收一个buffer类型的资源或string类型的资源。

### 监听文件改变 addDependency
在Webpack启用watch监听时，如果loader添加文件依赖，那么文件改变时会重新触发loader。

### loader-runner
[loader-runner 核心源码解析](https://juejin.cn/post/6844904058591920141#heading-6)