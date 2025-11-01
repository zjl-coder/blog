# async await 执行流程

### 终止 promise
[promise执行流程](./promise.md)  

### async await 终止流程
[Promise、Generator、Async三者的区别](https://juejin.cn/post/6844904159582355470)  

- Async 是 Generator 的一个语法糖。
- async 对应的是 * 。
- await 对应的是 yield 。
- async/await 自动进行了 Generator 的流程控制。

```js
async function foo() {
   return 1
}
```
等价于
```js
function foo() {
   return Promise.resolve(1)
}
```
所以如果代码为
```js
async function foo() {
   return new Promise(()=>{})
}
```
将返回一个一直处于**pending**状态的promise，阻塞 其他函数对他的await 调用，或者 then 将不会响应。例如
```js
async function foo() {
   return new Promise(()=>{})
}
foo().then(()=>{console.log("foo().then：这里的代码永远不会执行")});

async function test(){
    await foo();
    console.log("test：这里的代码永远不会执行")
}

test()
```