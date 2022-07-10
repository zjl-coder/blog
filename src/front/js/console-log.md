# console.log 打印颜色
## node 端 console.log输出规则

```js
console.log('\x1B[31m%s\x1B[0m', '这是红色'); // node 终端，推荐
console.log('\x1B[36m%s\x1B[0m', '这是青色'); // node 终端，推荐
```
## 规则说明
- <Te d>\x1B[31m </Te>是一个转义序列，它将被您的终端拦截并指示它切换到红色。
- <Te d>\x1B </Te>是不可打印控制字符 的代码escape。
- <Te d>%s </Te>是字符串（第二个参数）被注入的位置。
- <Te d>\x1B[0m </Te>表示重置终端颜色，使其在此之后不再继续成为所选颜色；
- 仅处理颜色和样式的转义序列也称为[ANSI转义码](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)并且是标准化的，因此它们（应该）可以在任何平台上工作。这里可以指定多种样式<Te d> \x1B[31m\x1B[42m</Te>;
上述代码还可以这样写：  
```js
console.log('\x1B[31m这是红色\x1B[0m'); // node 终端，不推荐
console.log('\x1B[36m这是青色\x1B[0m'); // node 终端，不推荐
```
## 平台支持的颜色
在chrome下的颜色值与node不一样，可以分别在两个平台运营以下代码获取值  
```js
for(let i=1;i<120;i++){
  console.log(`\x1B[${i}m%s\x1B[0m`, i);
}
```
## 封装颜色打印工具
```js
// 使用多参数可以不破坏console.log的参数
// 使用%可以不破坏console.log的打印结构
function warnLog(...infos) {
  infos.map((info) => {
    console.log('\x1B[33m%s\x1B[0m', info); // node
    return null;
  });
}

function successLog(...infos) {
  infos.map((info) => {
    console.log('\x1B[32m%s\x1B[0m', info); // node
    return null;
  });
}
```

***
*现成的npm包：chalk，color.js*