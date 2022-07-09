# console.log 打印颜色
## node 端 console.log输出规则

```js
console.log('\x1B[31m%s\x1B[0m', '这是红色'); // node 终端，推荐
console.log('\x1B[36m%s\x1B[0m', '这是青色'); // node 终端，推荐
```