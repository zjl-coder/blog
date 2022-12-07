# Readme

## 博客地址
[https://zjl-coder.github.io/blog/](https://zjl-coder.github.io/blog/)

## 分支
- `master` 源码管理分支，不能作为**发布分支**，会被 github actions workflow 发布后的代码所覆盖
- `gh-pages` 发布代码分支，Github Actions workflow 执行后 存放的代码，然后 page-build-deployment 执行发布文档.[github ci 流程](https://github.com/zjl-coder/blog/actions)

## access token
只有7七天时间，需要及时更新  

- [token 生成地址](https://github.com/settings/tokens)
- [token 更新地址](https://github.com/zjl-coder/blog/settings/secrets/actions)
- 更新 Repository secrets 框的 ACCESS_TOKEN

## 组件

#### 在线预览office
```html
<Office src="http://可公开访问的远程文件地址" />
```

#### 在线pdf
```html
<Pdf :src="$withBase('/images/文件.pdf')"/>
```

#### 在线预览思维导图
```html
<Mind :src="$withBase('/images/文件.md')" />
```
官方预览地址 [https://markmap.js.org/repl](https://markmap.js.org/repl)  

[百度脑图](https://naotu.baidu.com/)创建之后可以导出 md 文件  

#### 文本颜色
```html
<Te b w>黄色背景文字</Te>
```
- b 开启背景色
- w warn 黄色
- s success 绿色
- d danger 红色
- i info 蓝色

#### 自动右侧菜单
```html
<!-- 在文件第一行 -->
<TitleList></TitleList>
```

#### 容器
```md
::: <type> [title]
[content]
:::
```
type 类型  
- tip
- warning
- danger
- details
