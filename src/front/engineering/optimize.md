<TitleList></TitleList>

# 前端优化方案

## 雅虎前端优化的35条军规

[雅虎前端优化的35条军规](https://www.cnblogs.com/xianyulaodi/p/5755079.html#_label0)

#### 内容部分
1. 尽量减少HTTP请求数
2. 减少DNS查找
3. 避免重定向
4. 让Ajax可缓存 (Gzip组件、减少DNS查找、压缩JavaScript、避免重定向、配置ETags)
5. 延迟加载组件
6. 预加载组件
7. 减少DOM元素的数量
8. 跨域分离组件
9. 尽量少用iframe
10. 杜绝404 (HTTP请求代价高昂，完全没有必要用一个HTTP请求去获取一个无用的响应（比如404 Not Found）)

#### css部分
11. 避免使用CSS表达式
12. 选择`<link>`舍弃@import
13. 避免使用滤镜
14. 把样式表放在顶部

#### js部分
15. 去除重复脚本
16. 尽量减少DOM访问
17. 用智能的事件处理器 (推荐使用事件委托)
18. 把脚本放在底部

#### javascript, css 
19. 把JavaScript和CSS放到外面
20. 压缩JavaScript和CSS

#### 图片
21.  优化图片 (尝试把GIF格式转换成PNG格式)
22.  优化CSS Sprite （雪碧图）
23.  不要用HTML缩放图片
24.  用小的可缓存的favicon.ico（P.S. 收藏夹图标）

#### cookie
25. 给Cookie减肥
26. 把组件放在不含cookie的域下 （当浏览器发送对静态图像的请求时，cookie也会一起发送，而服务器根本不需要这些cookie）

#### 移动端 
27. 保证所有组件都小于25K
28. 把组件打包到一个复合文档里

#### 服务器
29. Gzip组件
30. 避免图片src属性为空 (空地址会导致浏览器每次都向服务器发送另一个请求)
31. 配置ETags (弱缓存)
32. 对Ajax用GET请求
33. 尽早清空缓冲区 （当用户请求一个页面时，服务器需要用大约200到500毫秒来组装HTML页面，在这期间，浏览器闲等着数据到达。这个操作适用与PHP时代，前后端分离的时代不需要考虑）
34. 使用CDN（内容分发网络）
35. 添上Expires或者Cache-Control HTTP头 (强缓存)

## 高性能JavaScript

#### 加载和运行
1. 将所有`<script>`标签放在尽可能接近`</body>` 标签上方的位置，尽量减少对整个页面下载的影响。
2. 由于每个`<script>`标签下载时**阻塞**页面解析过程，所以**限制**页面的`<script>`总数也可以改善性能。
3. 采用非阻塞脚本，在` window `的` load `事件发出之后开始下载代码。
4. 延期脚本，HTML 4 为`<script>`标签定义了一个扩展属性:**defer**。这个 defer 属性指明元素中所包含的脚本不打算修 改 DOM，因此代码可以稍后执行。任何带有 defer 属性的`<script>`元素在 DOM 加载完成之前不会被执行，不论是内联脚本还是外部脚本文 件，都是这样。只被部分浏览器支持，非跨浏览器解决方案。**defer在onload之前执行**。
5. 动态脚本元素。在js中动态创建`<script>`加载文件，不会阻塞其他页面的处理过程（因为需要等到当前的JavaScript运行完毕进程才会空闲，才会处理加载文件。）当文档进行动态`<script>`下载时,如果文件是自运行的，则运行正常。如果是只包含供页面其他脚本调用的接口，则会带来问题。需要跟踪`<script>`下载完成并且准备妥善的情况。`<script>`会在节点接收完成之后发出一个**load事件**。你可以监听这一 事件，以得到脚本准备好的通知。Internet Explorer 支持另一种实现方式，它发出一个 **readystatechange 事件**。`<script>`元素有一个 **readyState 属性**，它的值随着下载外部文件的过程而改变。readyState 有五种取值。  

    动态加载js文件的函数封装，兼容标准和IE  

```js
function loadScript(url, callback) {
var script = document.createElement("script");
script.type = "text/javascript";
if (script.readyState) {
    //IE
    script.onreadystatechange = function() {
    if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
    }
    };
} else {
    //Others
    script.onload = function() {
    callback();
    };
}
script.src = url;
document.getElementsByTagName_r("head")[0].appendChild(script);
}
```
此函数接收两个参数:JavaScript 文件的 URL，和一个当 JavaScript 接收完成时触发的回调函数。属性 检查用于决定监视哪种事件。最后一步，设置 src 属性，并将`<script>`元素添加至页面。此 loadScript()函数 使用方法如下:
```js
loadScript("file1.js", function() {
  alert("File is loaded!");
});
```
你可以在页面中动态加载很多 JavaScript 文件，但要注意，浏览器不保证文件加载的顺序。所有主流浏 览器之中，只有 Firefox 和 Opera 保证脚本按照你指定的顺序执行。其他浏览器将按照服务器返回它们的次 序下载并运行不同的代码文件。你可以将下载操作串联在一起以保证他们的次序，如下:
```js
loadScript("file1.js", function() {
  loadScript("file2.js", function() {
    loadScript("file3.js", function() {
      alert("All files are loaded!");
    });
  });
});
```
6. XHR脚本注入。通过创建xhr对象或者ajax动态下载JavaScript文件，然后创建`<script>`注入页面。(缺点：JavaScript文件必须与页面防止在同一个域内)
7. React处理方式：代码分割，懒加载。React.lazy。webpack bundle分割，动态加载，预取模块（未来可能用到这个文件），预加载模块（当前页面可能需要资源）。借助工具对bundle 分析。具体可查看[webpack代码分离](https://webpack.docschina.org/guides/code-splitting/)章节。

#### Data Access 数据访问
在 JavaScript 中，数据存储位置可以对代码整体性能产生重要影响。有四种数据访问类型:直接量，变 量，数组项，对象成员。它们有不同的性能考虑。

1. 直接量和局部变量访问速度非常快，数组项和对象成员需要更长时间。
2. 局部变量比域外变量快，因为它位于作用域链的第一个对象中。变量在作用域链中的位置越深，访问所需的时间就越长。全局变量总是最慢的，因为它们总是位于作用域链的最后一环。
3. 由于对象成员可能包含其它成员，例如不太常见的写法 window.location.href 这种模式。每遇到一个点号， JavaScript 引擎就要在对象成员上执行一次解析过程。成员嵌套越深，访问速度越慢。location.href 总是快于 window.location.href，而后者也要 比 window.location.href.toString()更快。

嵌套对象成员会造成重大性能影响，尽量少用。

4. 一个属性或方法在原形链中的位置越深，访问它的速度就越慢。
5. 缓存对象成员的值

**注意**：以上是八股文，在实际开发中并不会去考虑数据访问的性能，而更注重项目的可读性、可维护性、可拓展性、健壮性等。

#### DOM 编程
1. 最小化 DOM 访问，在 JavaScript 端做尽可能多的事情。
2. 在反复访问的地方使用局部变量存放 DOM 引用，不需要使用时，变量复制为null，便于垃圾回收
3. 小心地处理 HTML 集合，因为他们表现出“存在性”，总是对底层文档重新查询。将集合的 length 属性缓 存到一个变量中，在迭代中使用这个变量。如果经常操作这个集合，可以将集合拷贝到数组中。
4.  如果可能的话，使用速度更快的 API，诸如 querySelectorAll()和 firstElementChild。
5.  注意<Te d>重绘</Te>和<Te d>重排</Te>版;批量修改风格，离线操作 DOM 树，缓存并减少对布局信息的访问。
6.  动画中使用绝对坐标，使用拖放代理。
7.  使用**事件托管**技术最小化事件句柄数量。

#### 算法和流程控制
- for，while，do-while 循环的性能特性相似，谁也不比谁更快或更慢。

- 除非你要迭代遍历一个属性未知的对象，否则不要使用 for-in 循环。

- 改善循环性能的最好办法是减少每次迭代中的运算量，并减少循环迭代次数。

减少迭代次数
```js
var i = items.length % 8;
while (i) {
  process(items[i--]);
}
i = Math.floor(items.length / 8);
while (i) {
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
  process(items[i--]);
}
```
减少每次迭代中的运算量
```js
// 将 items.length提取到局部变量
// 倒序循环
for (var i = items.length; i--; ) {
  process(items[i]);
}
var j = items.length;
while (j--) {
  process(items[j]);
}
var k = items.length - 1;
do {
  process(items[k]);
} while (k--);
```

- 一般来说，switch 总是比 if-else 更快，但并不总是最好的解决方法。

- 当判断条件较多时，查表法比 if-else 或者 switch 更快。

- 浏览器的调用栈尺寸限制了递归算法在 JavaScript 中的应用;栈溢出错误导致其他代码也不能正常执行。

- 如果你遇到一个栈溢出错误，将方法修改为一个迭代算法或者使用制表法可以避免重复工作。

- 运行的代码总量越大，使用这些策略所带来的性能提升就越明显。

#### React 性能优化 （16版本）
1. SSR：服务端渲染（Server-Side Rendering），一般只渲染首页，其他页面由前端路由控制渲染
2. class组件的render函数里面尽量减少新建变量和bind函数
3. 组件传递参数尽量减少
4. 定制shouldComponentUpdate函数
  
shouldComponentUpdate是决定react组件什么时候能够不重新渲染的函数，但是这个函数默认的实现方式就是简单的返回一个true。也就是说，默认每次更新的时候都要调用所用的生命周期函数，包括render函数，重新渲染。

1. 多个react组件，key的优化

