<TitleList></TitleList>

# 解决npm link本地代码后 react库存在多份实例的问题

### 非法Hook调用错误

在调试本地组件库代码时，**link**到主项目时**报错**了如下错误
```
Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 
1. You might have mismatching versions of React and the renderer (such as React DOM) 
2. You might be breaking the Rules of Hooks 
3. You might have more than one copy of React in the same app See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
```

但是将代码发布到本地仓库后，**install下来是不会有问题的**。

### 报错原因

React官方文档上解释了这个原因。

> 为了使 Hook 正常工作，你应用代码中的 react 依赖以及 react-dom 的 package 内部使用的 react 依赖，必须解析为同一个模块。

也就是说，在你的应用里找到了两份react实例，并且react-dom中引用的react实例与直接import的react实例**不是同一份**。对应到我报错的场景里，就是link到本地组件库时，组件库中import了一份react-dom, 而这一份react-dom引用的react实例，是**本地组件库中安装的react实例**。而非**主应用中安装的那一份react实例**。

### 为什么npm install 没有问题，npm link有问题

npm install在安装依赖的时候，会合并相同依赖，安装在最外层的node_modules中。所以只有一份依赖。而npm link是直接引用本地目录，本地目录的node_modules会和主项目的node_modules同时存在两份相同的引用。

### 怎么解决这个问题
要解决这个问题，就需要将组件库react-dom依赖的react指向主项目node_modules中安装的那一份react实例。我们可以通过两种方式来完成这个操作。

- **使用link的方式将组件库的react依赖指向到主项目的react依赖**
```bash
# 进入本地 npm 包根目录
cd [PACKAGE]
# 将依赖的react link 为我们主项目的react包
npm link [PROJECT]/node_modules/react
```
- **使用alias为Nodejs指定react加载目录**
```js
// /build/wepack.base.config.js
alias: {
  react: path.join(__dirname, "../node_modules/react"),
}
```


### 官方解释
[React官网警告：非法 Hook 调用](https://zh-hans.legacy.reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react)