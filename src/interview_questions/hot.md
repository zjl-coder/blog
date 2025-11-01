# 前端热门题

## 重要技巧 
**先大量投一些不想去的公司，拿来练手，收集题目，总结当下知识点与规律，多次后再去面想要的公司，成功率比较高。**  

以下这些题目都可以让 AI 解释一下原理，列出实际应用场景，展示具体demo等

## 思考题
- AI这么厉害，人(或者说，开发者，前端开发者)的价值在哪里？
- 如何看待AI？

## js 题
- sort 陷阱
```js
const numbers = [33, 2, 8, 444,3333,28]; 
numbers.sort(); // 执行结果
```
- 类型转换 陷阱题

```js
console.log(false == '0'); // 执行结果
```

```js
const isTrue = true == []; 
const isFalse = true == ![]; 
console.log(isTrue , isFalse); // 执行结果
```
- 为什么 typeof NaN 是一个number ？
- toLowerCase 陷阱题
```js
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase()); // 执行结果
```
- instanceof 陷阱
```js
console.log("This is a string." instanceof String);
```
- promise 八股
```js
Promise.resolve().then(() => {
    console.log(0) 
    return Promise.resolve(4)
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1)
}).then(() => {
    console.log(2) 
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(5)
}).then(() => {
    console.log(6)
}) 
// 讲解一下这段代码，为什么是 0123456
```
- Promise 的then在return Promise.resolve 的时候发生了什么？
- 什么是高阶函数和高阶组件？
- 前端面试题，讲解一下内存泄漏
    - 讲解一下堆和栈
- 讲解一下变量提升和函数提升，如果变量名和函数名是同一个，谁会覆盖谁吗？为什么函数调用在声明之前可以正常运行，而变量就是undefined
- 微前端，基于代理(Proxy)实现多实例沙箱
- js BigInt 与 Symbol 是什么
- js 的 Uint8Array
    - Buffer.from 和 Uint8Array
    - Buffer.from() 创建的就是 Uint8Array吗？
- 讲解一下 Node中的Buffer与stream
    - 详细讲解一下 stream 是什么，数据是以什么形式，怎么流动的
- 深复制与浅复制

## React
- useRef 的值放在哪里,原理是什么？
- 讲解一下fiber 和 虚拟dom，fiber是在虚拟dom上的一个进阶虚拟dom吗？
- 讲解一下react 的 render commit 和 pre-commit 以及他们的执行顺序
- useLayoutEffect 与 useEffect，他们的区别，原理，和实际应用场景
- 讲一下react 优化方式和错误处理
- react渲染底层逻辑题陷阱
```js 
[
    {key:'red',value:'red'},
    {key:'blue',value:'blue'}
]
```
react在使用map渲染这个数组时，如果单纯的value变化了，而key没有变化，会发生什么？
- diff判断key不变，节点会被复用，为什么值不会也被复用，而是更新了新值？
- react 虚拟列表的实现原理，它是怎么判断组件出现在可视区域内的
- next.js 原理
    - next.js的水合做了什么
    - 水合过程是怎么交互的
    - 客户端是怎么拿到服务端的代码进行水合的？协议是什么？
- react 构建完新的虚拟dom之后，提交给浏览器进行渲染是怎么一个流程。
    - react 生成虚拟dom 后 是直接更新页面的html，还是对页面html做局部更新？
    - react的新树根旧树做比较，只创建新改变的html dom然后替换原生dom吗？css 又是怎么替换的？
- react 是通过新旧树的比较来创建新的远程html dom来进行原生dom更新的，那么如果有额外的js修改了原生dom结构了，此时react的旧虚拟树所描绘的内容就跟原生dom不一致了，这时候是否会出错？还是react有做什么容错处理？

## 工程工具
- 讲解 一下 esbuild ， babel ，rollup，gulp，webpack 和 vite
- eslint 和 Prettier 在代码规范上有时候会有冲突，怎么解决

## 前端安全
- 怎么防范ddos，xss，csrf攻击
- 详细通俗讲解一下CSP和same site cookie
- 如何防范网站被嵌套进钓鱼网站的ifrome里面
    - X-Frame-Options 响应头


## 前端综合
- 前端面试题，有哪些性能优化的方式
- 前端开发，面试架构到底在面些什么
    - 什么是前端架构，是做哪些事情的，面试的标准是什么
    - 前端架构中的技术选型又是什么，面试标准是什么
    - 如果有一个商城的需求，作为前端架构的你会怎么做
- link 加载css 是并发还在还是顺序加载，会阻塞 dom的构建吗？dom树和css树的构建是同时进行的吗？
- js文件的加载，添加了defer 之后所有的js是并发加载的吗？
- 一个网页有多少个进程？
- img 的资源加载是否会阻塞DOM构建或阻塞页面渲染。浏览器获取文档流之后，对html进行解析，之后是优先进行dom构建还是cssom构建。还是两者同时进行，在dom构建到link时再进行css加载？img的加载也是这样吗？
- dom 和 cssom 已经构建完了，但是还有css文件正在加载中，这个时候是先构建渲染树进行绘制还是等待css文件加载完成，重新构建cssom之后再进行渲染
- 浏览器会出现边构建dom+cssom边渲染的情况吗？
- 什么是同步css 什么是异步css？
    - 预加载非关键CSS 在文件加载完整后会立即自动触发页面重排重绘吗？
- 讲解一下前端性能指标
- V8 浏览器打开一个网页时，会启动多少进程，这些进程之间的分工和配合是怎么样的？dom 的构建和cssom的构建是额外的两条进程吗？
- 讲一下对v8引擎的理解
- 我们通常说的白屏时间是指什么，怎么计算出来的

## Leader 岗位面试
- [前端 Leader 面试](https://www.mianshipai.com/docs/third-exam/leader-test.html)