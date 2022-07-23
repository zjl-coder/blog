<TitleList></TitleList>

# 前端工程化

## 项目代码规范
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
###### 修改工作区settings.json文件
安装VSCode插件 下载并安装 VSCode 的 Prettier - Code formatter 插件。 配置工作区
```json
{
  "prettier.eslintIntegration":true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
## Git 约定

### 分支规范
团队使用 git 分支的形式基本符合 git-flow 的规范。
### 提交规范
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
  "name": "@tencent/tea-app-diagnosis",
  "version": "1.0.0",
  "description": "The diagnosis tea app for qcloud console",
  "main": "src/app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tea dev",
    "scan": "tea scan",
    "build": "tea build",
    "deploy": "tea commit",
    "eslint": "eslint ./src --fix --ext .tsx,.ts,.js",
    "commit": "git-cz",
    "prettier": "prettier --write \"src/**/*.js\" \"src/**/*.jsx\" \"src/**/*.ts\" \"src/**/*.tsx\""
  },
  "keywords": [
    "tea",
    "app",
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
  "dependencies": {
    "@tencent/iaas-common": "^3.6.0",
    "@tencent/iaas-component": "^0.2.53",
    "@tencent/tea-app": "^2.0.0",
    "@tencent/tea-component": "^2.0.0",
    "@tencent/tea-style-cloud-api": "^1.0.4",
    "@types/react-redux": "^7.1.16",
    "lodash": "^4.17.21",
    "moment": "^2.29.1",
    "react": "^16.10.0",
    "react-dom": "^16.10.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "redux": "^4.1.0",
    "redux-logger": "^3.0.6",
    "redux-saga": "^1.1.3",
    "redux-saga-catch": "0.0.10",
    "saga-duck": "^3.4.2"
  },
  "devDependencies": {
    "@tencent/eslint-config-tencent": "^0.15.1",
    "@tencent/eslint-plugin-tea-i18n": "^0.1.1",
    "@tencent/tea-scripts": "^2.0.0",
    "@tencent/tea-types": "^0.1.0",
    "@types/lodash": "^4.14.170",
    "@types/react": "^16.8.4",
    "@types/react-dom": "^16.8.2",
    "@types/redux": "^3.6.0",
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