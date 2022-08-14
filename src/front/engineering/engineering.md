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

###### eslint 静态语法检查

##### css 规范

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
- 凡是用到 `git commit` 命令，一律改为使用 `git cz` 。这时，就会出现选项，用来生成符合格式的 Commit message。并且在每次 commit 时执行 commitlint 检查我们输入的 message。

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