<TitleList></TitleList>

# 前端错误监控

## 流程
采集 --> 存储 --> 分析 --> 报警

前端一般只负责采集阶段，并且按照一定的存储方案组织好数据格式上报给后端，后端接收数据并存储，然后进行分析，分析阶段有可能是后端做，也有可能是前端做，这个看监控系统的业务安排。然后报警。

## 前端异常分类
- 出错
- 呆滞
- 损坏
- 假死
- 崩溃

## 处理
根据规定设置好异常等级，整理好数据，并上报

## 错误监控实现
- 重写 window.addEventListener("error",function(){},true); 
- 重写 window.onerror; 
- 重写 unhandledrejection 事件; 
- 重写 console.error();

## 关于React的错误监控
React可以实现一个错误边界组件，实现两个生命周期`static getDerivedStateFromError()` 或 `componentDidCatch()`即可成为错误边界组件，与普通组件一样使用，另外再配合`try catch`，可以更好的处理react组件的错误。当抛出错误后，请使用 `static getDerivedStateFromError() `渲染备用 UI ，使用 `componentDidCatch()` 打印错误信息，也可以将错误信息发送到远程服务器。


## 前端收集 demo
```js
// 监控前端 error信息

let opt = {
// 上报地址
domain: "http://localhost/api",
// 脚本延迟上报时间
outtime: 300,
// ajax请求时需要过滤的url信息
filterUrl: [],
// 是否上报页面性能数据
isPage: true,
// 是否上报ajax性能数据
isAjax: true,
// 是否上报页面资源数据
isResource: true,
// 是否上报错误信息
isError: true,
// 提交参数
add: {}
};

let conf = {
//资源列表
resourceList: [],
// 页面性能列表
performance: {},
// 错误列表
errorList: [],
// 页面fetch数量
fetchNum: 0,
// ajax onload数量
loadNum: 0,
// 页面ajax数量
ajaxLength: 0,
// 页面fetch总数量
fetLength: 0,
// 页面ajax信息
ajaxMsg: {},
// ajax成功执行函数
goingType: "",
// 是否有ajax
haveAjax: false,
// 是否有fetch
haveFetch: false,
// 来自域名
preUrl:
document.referrer && document.referrer !== location.href
? document.referrer
: "",
// 当前页面
page: ""
};

// error default
let errordefo = {
t: "",
n: "js",
msg: "",
data: {}
};

// 重写 error 监听函数，监听资源文件错误
// img,script,css,jsonp
window.addEventListener(
"error",
function(e) {
let defaults = Object.assign({}, errordefo); // 初始化defaults
    defaults.n = "resource"; // 名称：资源文件
    defaults.t = new Date().getTime(); // 当前时间戳
    defaults.msg = e.target.localName + " is load error"; // 标签名
    defaults.method = "GET"; // 请求方式
    defaults.data = {
target: e.target.localName, // 标签名
type: e.type, // 对象类型： error
resourceUrl: e.target.href || e.target.currentSrc, // 资源文件URL
outerHtml: e.target.outerHtml, // 输出的html
offsetParent: e.target.offsetParent, // 父节点
baseURI: e.target.baseURI // 文件路由地址
};
if (e.target != window) {
// 如果报错标签不是 window（即浏览器）则将错误信息放入错误列表
      conf.errorList.push(defaults);
}
},
true //true为在捕获阶段监听，兼容性比较好
);

// 重写window.onerror,可以监听js层面的报错
// js
window.onerror = function(msg, _url, line, col, error) {
let defaults = Object.assign({}, errordefo);
// 在定时器内执行，可先将次行为暂挂到副线程，待主线程执行完毕再执行此函数
setTimeout(function() {
col = col || (window.event && window.event.errorCharacter) || 0; // 列数 || 浏览器事件对象存在 并且 事件对象里面有错误特性，则信息为 错误特性的值 || 0
    defaults.msg = error && error.stack ? error.stack.toString() : msg; // 报错信息，如果error.stack存在则信息为error.stack的值，否则为msg的信息
    defaults.method = "GET"; // 请求类型，因为js执行过程默认为get，js执行报错，method字段没有意义，所以随便定义
    defaults.data = {
resourceUrl: _url, // 报错的路由
line: line, // 报错行
col: col // 报错列
};
    defaults.t = new Date().getTime(); // 报错当前时间
    conf.errorList.push(defaults); // 放入报错列表
// 上报错误信息
if (conf.page === location.href && !conf.haveAjax) {
// 如果conf.page的地址等于当前页面地址，并且没有ajax，则上报信息
reportData(3); // 页面内错误上报
}
}, 0);
};

// 重写unhandledrejection事件，监听promise的reject抛错
window.addEventListener("unhandledrejection", function(e) {
const error = e && e.reason; // 错误原因
const message = error.message || ""; // 错误信息
const stack = error.stack || ""; // 错误stack信息
// Processing error
let resourceUrl, col, line;
let errs = stack.match(/\(.+?\)/); //  找出错误信息数组(有可能匹配到多个)
if (errs && errs.length) {
// 如果错误信息数组存在，并且长度不为0,则取出错误信息数组的第一个子元素
errs = errs[0];
}
// 找出以.js或者.html 结尾的字符串，传入回调函数
errs = errs.replace(/\w.+[js|html]/g, $1 => {
// 回调函数内，将匹配的值赋值给表示资源文件的变量
resourceUrl = $1;
// 然后将匹配结果转为控制，即删除
return "";
});
// 将错误信息分割成数组
errs = errs.split(":");
if (errs && errs.length > 1) {
//如果错误数组存在，并且长度大于1,则将错误数组的第二元素标记为行数，或者标记行数为0
line = parseInt(errs[1] || 0);
}
col = parseInt(errs[2] || 0); // 将错误数组的第三元素标记为列数，或者标记列数为0
let defaults = Object.assign({}, errordefo);
  defaults.msg = message;
  defaults.method = "GET";
  defaults.t = new Date().getTime();
  defaults.data = {
resourceUrl: resourceUrl,
line: col,
col: line
};
  conf.errorList.push(defaults);
if (conf.page === location.href && !conf.haveAjax) {
reportData(3); // 页面内错误上报
}
});

// 重写console.error
const oldError = console.error;
console.error = function(e) {
let defaults = Object.assign({}, errordefo);
setTimeout(function() {
    defaults.msg = e;
    defaults.method = "GET";
    defaults.t = new Date().getTime();
    defaults.data = {
resourceUrl: location.href
};
    conf.errorList.push(defaults);
if (conf.page === location.href && !conf.haveAjax) {
reportData(3); // 页面内错误上报
}
}, 0);
return oldError.apply(console, arguments); // 将console.error的打印结果还原
};
```
详细的方案可参考此文章：[前端异常监控解决方案研究](https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/)