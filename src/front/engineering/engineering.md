<TitleList></TitleList>

# 前端工程化

### vscode 快捷设置
[vscode的设置settings.json](https://juejin.cn/post/7087515141197004813)  

`项目根目录/.vscode/settings.json` 文件会覆盖vscode编辑器的全局设置，配置只会作用于当前项目。  

以下是常用配置  
```json
{
  "eslint.validate": [  // 用 eslint 插件检测以下几种语言，如果vscode 没有按照eslint插件则不起作用
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.formatOnSave": false, // 设置保存文件时是否自动格式化，true表示自动格式化,需要配置格式化器(formatter)才可使用
  "eslint.alwaysShowStatus": true, 
  "editor.codeActionsOnSave": {  // 设置保存时要做的事情
    "source.fixAll.eslint": true // 保存时自动修复eslint规则错误的那部分代码
  }
}
```

显示vscode eslint 插件的状态
```json
"eslint.alwaysShowStatus": true,
```
![An image](./images/engineering1.png)

`项目根目录/.vscode/launch.json` vscode用于调试时使用，一般node下作用比较大。  
[【VScode】里的launch.json是干什么用的](https://juejin.cn/post/7063655822965866527)   
[vscode调试入门](https://juejin.cn/post/6956832271236071431)  

### 项目代码规范
#### eslint 静态js检查工具
[eslint 文档](https://cn.eslint.org/)  

- `npm install eslint` 代码包的eslint，提供eslint检查的功能和规则 
- `vsCode eslint 插件` 根据 npm eslint 包自动检查代码，并将错误高亮显示，提供可视化的eslint 操作代码功能。优先识别项目本地的 eslint npm 包，没有再识别全局的 eslint 包。

###### eslint配置文件
在根目录创建eslint配置文件的三种方法  
- `.\node_modules\.bin\eslint --init ` 用本地eslint包初始化配置文件
- `eslint --init` 用全局eslint包初始化配置文件
- `npx eslint --init` 用本地eslint模块，没有就远程下载个临时包执行

::: danger eslint配置错误问题
- 'plugins' doesn't add plugins to configuration to load. Please use the 'overrideConfig.plugins' option instead.  
- 通常是vscode哪个地方默认传了错误参数的格式，多见于vcCode插件已经废弃了，版本落后导致的，一般重新装插件，或者重装vsCode可解决。
:::

[ESLint 配置文件字段解释](https://juejin.cn/post/7012798266089668645#heading-6)

###### --ext 检查文件
```bash
# 检查多个文件
npx eslint file1.js file2.js

# 使用 glob 正则，检查目录下所有文件
npx eslint lib/**

# --ext用于指定检测的文件范围。以下命令表示检测src文件夹下的js和vue结尾的文件。
npx eslint --ext .js,.vue src/
```

###### --fix
自动修复可修复的问题
```bash
# index.js 中可自动修复的问题会被修复并忽略
npx eslint --fix index.js
```
#### css 规范

#### 代码格式
prettier   
eslint 自带  
stylelint 自带  

**代码规范标准**：基于 Airbnb 的公司编码规范来统一代码规范  

**配置关键**：搭配使用 ESlint + Prettier + Husky+ Lint-staged  

- `Prettier` 格式化代码风格
- `ESlint` 检查语法
- `Husky` 实现各种各种 git-hook 。这里主要使用 pre-commit，在每次 commit 之前执行 prettier 的格式化和 ESLint 的校验
- `Lint-staged` 用于对 Git 暂存区中的文件执行代码检测
- ` eslint-config-prettier` 和一般的 eslint-config-xxx 不同，它不是用来共享 ESlint 配置的，而是用来关闭 ESLint 的样式规则的，避免 ESLint 的样式规则和 Prettier 冲突。使用该配置后，对代码进行 prettier 和 eslint 就不会冲突了。但要注意一定要把它放在 extends 中最后的位置，避免后续的配置又把相关规则打开了。 需要配置 .eslintrc.js 和 .prettierrc.js ，另外需要配置 .eslintignore 和 .prettierignore 来忽略掉那些你不想校验的文件，用法和 git 的 .gitignore 一样。

```bash
npm i -D eslint prettier eslint-config-prettier husky lint-staged
```
###### 修改项目 .eslintrcs 文件
```json
{
  extends: [
    // 各种你需要继承的配置列在前面
    "@tencent/eslint-config-tencent"
    // prettier 规则列在最后
    "prettier"
  ]
}
```   

### Git 规范

###### 分支管理规范
团队使用 git 分支的形式基本符合 git-flow 的规范。
###### commit规范
- 团队之间遵守同一套 commit message 规范， Angular 规范。
- 搭配使用：commitizen + cz-conventional-changelog + commitlint + husky
- 凡是用到 `git commit` 命令，一律改为使用 `git cz` 。这时，交互式commit模板，用来生成符合格式的 Commit message。并且在每次 commit 时执行 commitlint 检查我们输入的 message。

#### git commit 规范工具
###### git生命周期工具 husky
类似于前端框架中的**生命周期钩子**，git在某些特定事件发生前或后也会有某些执行特定功能的钩子，githooks就是在git执行特定事件（如commit、push、receive等）时触发运行的脚本。  

githooks 保存在 .git 文件夹中  

`husky` 是一个让配置 git 钩子变得更简单的工具。支持所有的git钩子。

husky 8.x 使用教程
- 安装husky `npm install husky --save-dev`
- 要在安装后自动启用钩子，我们需要执行`npm set-script prepare "husky install"`
- 执行完上一步的命令之后可以在package.json 文件的scripts配置项中看到如下代码：
  ```json
  {
    "scripts": {
      "prepare": "husky install"
    }
  }
  ```
- 初始化 husky `npx husky-init` 或 `npm run prepare`
- 创建钩子，比如我们创建一个commit-msg钩子 `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`(在 commit-msg 时 执行 npx --no-install commitlint --edit "$1")
  - 安装其他 git 钩子只需要执行 `husky add .husky/钩子名字 "npm test"`就行了
###### commit 校验工具 commitlint
- `commitlint`: 可以帮助我们 lint commit messages, 如果我们提交的不符合指向的规范, 直接拒绝提交  
- `@commitlint/cli`: [使用方式](https://www.npmjs.com/package/@commitlint/cli)。命令行校验文本信息是否符合 `commitlint`规则。(可装可不装)
- `@commitlint/config-angular` angular 规范的规则  

创建commitlint校验规则配置文件
项目根目录下创建 commitlint.config.js
```bash
npm install --save-dev @commitlint/config-angular
echo "module.exports = {extends: ['@commitlint/config-angular']};" > commitlint.config.js
```

经过husky的commit-msg配置好钩子，并且配置好commit之后，git commit -m "xxx" 就会进行文案是否符合angular规范的校验了。  

但是规范有时候很难写，可以提供一下互动式命令行。
###### commit 模板 commitizen 
- `commitizen` 一个帮助撰写规范 commit messages 的工具，只有纯命令行文本显示。
- `cz-conventional-changelog` 交互式commit适配器，通过交互式命令提供约定的commit格式，不同的需求，可以使用不同的适配器。  

初始化Conventional Commits规范适配器
```bash
npx commitizen init cz-conventional-changelog --save-dev --save-exact

npm set-script commit "cz"
```
`cz`与`git-cz`是相同的命令，cz-conventional-changelog 的启动命令
![An image](./images/engineering2.png)
在package.json会生成以下信息
```json
{
  "scripts": {
    "prepare": "husky install",
    "commit": "git-cz"
  },
  ...
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```
通过`npm run commit` 可以代替 `git commit -m "feat:xxx"`  

有些人熟悉模板格式，可以直接 `git commit -m "feat:xxx"` ，不熟悉模板格式的 可以使用 `npm run commit`。是一种推荐的方式。

###### 强制git-cz
即 强制 git commit -m ""时，进行交互式命令，这种方式不推荐。  

注册 prepare-commit-msg 钩子
```bash
npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && node_modules/.bin/cz --hook || true'
```
这样就可以刪除 package.json的属性 script 中的 commit 命令了  

控制终端(/dev/tty)  

###### cz-customizable
[自定义提交规范 提示文案](https://juejin.cn/post/6844903831893966856#heading-14)
### lint-staged

###### cz日志生成器
conventional-changelog

###### 自动生成变更日志
release-it  


*vscode IDE prettier插件 快捷键  shift + option + f*
##### prettier.config.js
```js
module.exports = {
  // 一行最多 120 字符
  printWidth: 120,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾需要逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'lf',
};
```
##### package.json
```json
{
  "name": "diagnosis",
  "version": "1.0.0",
  "description": "The diagnosis tea app for qcloud console",
  "main": "src/app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "eslint": "eslint ./src --fix --ext .tsx,.ts,.js",
    "commit": "git-cz",
    "prettier": "prettier --write \"src/**/*.js\" \"src/**/*.jsx\" \"src/**/*.ts\" \"src/**/*.tsx\""
  },
  "keywords": [
    "diagnosis"
  ],
  "engines": {
    "typescript": ">3.3"
  },
  "license": "UNLICENSED",
  "browserslist": [
    "defaults",
    "last 3 versions",
    "not ie < 11"
  ],
  "dependencies": {},
  "devDependencies": {
    "@tencent/eslint-config-tencent": "^0.15.1",
    "@typescript-eslint/eslint-plugin": "^4.28.1",
    "@typescript-eslint/parser": "^4.28.1",
    "eslint": "^7.29.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-html": "^6.1.2",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-react": "^7.21.5",
    "git-cz": "^4.7.6",
    "husky": "^6.0.0",
    "lint-staged": "^11.0.0",
    "prettier": "^2.3.0",
    "typescript": "^3.3.3333"
  },
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "lint-staged": {
    "src/**/*{.ts,.tsx,.js,jsx}": [
      "eslint --fix --ext .tsx,.ts,.js"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```