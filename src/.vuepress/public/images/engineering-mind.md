---
markmap:
  colorFreezeLevel: 2
---

# 前端工程化
## 脚手架
### 快捷创建项目
### 项目模板统一

## 构建工具
### webpack
#### css 预处理
##### sass
##### less
##### postcss
#### es6+转es5
#### ts转es
#### 模块化打包
#### 管理模块依赖
##### import / export 是es6+的语法，es5 没有，webpack 转 es5 时，提供webpack自己实现的函数替换
### vite

## MOCK服务
### 数据拦截型
#### 模拟真实请求
##### mockjs
#### 抓包软件
##### whistle
### json-server服务型
#### json文件作为一个具备全RESTful风格的API
##### json-server
### 可视化接口管理平台
#### YApi
#### Swagger

## 开发规范
### 公共代码
#### npm 包
#### sdk
#### 组件库
### 代码规范
#### 代码风格
##### prettier
#### 静态代码检查(语法、词法等)
##### eslint
##### stylelint
### git规范
#### 分支管理规范
##### git flow
#### git commit 规范
##### angular 规范
#### husky
##### git hooks
###### pre-commit
- lint-staged
  - prettier --write
  - eslint --fix
  - 运行自动化测试(自动化测试工作量大，一般不做这一步)
###### commit-msg
- 校验commit 规范工具
  - commitlint
- commit 模板互动式命令行
  - commitizen
  - cz-conventional-changelog

## 自动化测试
### 单元测试
#### jest
#### Mocha
#### 子主题
### TDD 测试驱动开发
#### 提前把测试代码写好，然后根据测试代码实现功能。（需求常改，不现实）

## 部署项目
### ci 部署流程
#### 发展史
##### 文档记载
##### shell 脚本自动化
##### 可视化编排
###### 自动化安装环境
###### 语法检测
###### linux 构建
###### 发布审批
#### devops
##### 常用平台
###### 蓝鲸·蓝盾
###### Github Actions
### to C
#### CND发布
##### 测试环境
##### 灰度发布
###### 无账号灰度
- ip机器 数量百分比叠加
###### 有账号灰度
- 指定账号白名单
  - 百分百命中
- ip机器 数量百分比叠加
##### 发布
### to B / G
#### docker 部署

## 监控
### 错误监控
### 性能监控
### 数据收集
#### UV（Unique visitor）
#### PV（Page View）
#### 子主题
#### 子主题
##### document.documentElement.scrollTop 属性以及屏幕高度，可以判断用户是否浏览完网站内容
#### 页面跳转来源
##### document.referrer 属性，可以知道用户是从哪个网站跳转而来
### 平台推荐
#### sentry
##### 开源
##### 部分功能免费
##### 可私有化部署

## 重构
### 原则
#### 代码重复，事不过三，三则重构
#### 一段代码让人很难看懂
#### 非常繁琐或者不够好
#### 过长的函数
#### 子主题
### 手法
#### 提取重复代码，封装成函数
#### 拆分太长或功能太多的函数

## 项目运营化
### 对项目的用户数据进行运营
### 对代码的一些数据配置进行运营
### 对代码的一些定制功能进行开关化运营