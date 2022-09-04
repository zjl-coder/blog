<TitleList></TitleList>

# dart和runtime(运行时)

[为什么Flutter选择了Dart语言](https://juejin.cn/post/6870286147541696525)  
[运行时（runtime）是什么意思？应该怎样深入且直观地理解](https://www.zhihu.com/question/20607178)  

### runtime的三种含义
1. 【 程序运行的时候 】：程序生命周期中的一个阶段（程序在运行时的一个阶段）
2. 【 运行时库 】：程序在运行时所依赖的库，如 glibc 这类原生语言的标准库。C 程序的 malloc 函数实现需要由运行时提供。
3. 【 运行时系统 】：某门语言的宿主环境。如 node 是 js 的 运行时环境。

###  Dart语言
1. Dart 支持 AOT （Ahead Of Time 预先）编译
2. Dart 同时也支持 JIT （Just In Time 在运行中）编译 (这个与 解释执行的概念不同)
3. Dart 使写出 60fps 流畅运行的动画变得简单。
4. Dart 让 Flutter 不需要一种分离的声明式布局语言比如 JSX 或者 XML，也不需要分离的视觉界面构建器，因为 Dart 声明式、可编程的布局更容易阅读和视觉化
5. 单线程
6. 支持热更新