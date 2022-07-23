<TitleList></TitleList>

# es6模块化代码转es5代码的模样
babel 将es6 转成es5 时，模块化的代码发生了什么

## 本地尝试最简单的es6转es5配置
```bash
mkdir test
cd test
npm init -y
npm install -D babel-loader @babel/core @babel/preset-env webpack webpack-cli
```
**package.json**
```json
{
  "name": "es6-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.18.6",
    "@babel/preset-env": "^7.18.6",
    "babel-loader": "^8.2.5",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0"
  }
}
```
**webapck.config.js**
```js
var path = require('path');

module.exports = {
   entry: {
      app: './src/index.js'
   },
   output: {
      path: path.resolve(__dirname, 'dist'), // 编译后的代码将输出在 dist目录下
      filename: 'index-bundle.js' // 输出的文件名
   },
   mode:'development', // 使用这个模式可以看到webpack的过程
   // mode:'production',
   module: {
      rules: [
         {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: {
               loader: 'babel-loader',
               options: {
                 presets: ['@babel/preset-env'],
               }
            }
         }
      ]
   }
};
```
### 业务代码
**src/index.js**
```js
import add from './add';
import { multiply } from './multiply'

let a = add(10,20);
let b = multiply(40,10);

console.log("%c"+a,"font-size:30px;color:green;");
console.log("%c"+b,"font-size:30px;color:green;");
```
**src/add.js**
```js
import { multiply } from './multiply'

var add = (x,y) => {
  return x+y;
}

export default add;
```
**src/multiply.js**
```js
export function multiply (x,y) {
  return x*y;
};
```
**/index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  hello es5 <br/>
  F12 看浏览器的console控制台
  <script src="./dist/index-bundle.js"></script>
</body>
</html>
```
浏览器运行index.html

##  bundle.js文件
```js
(() => {
  // webpackBootstrap
  'use strict';
  var __webpack_modules__ = {
    './src/add.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiply */ "./src/multiply.js");\n\n\nvar add = function add(x, y) {\n  return x + y;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);\n\n//# sourceURL=webpack://es6-test/./src/add.js?'
      );
    },

    './src/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./src/add.js");\n/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiply */ "./src/multiply.js");\n\n\nvar a = (0,_add__WEBPACK_IMPORTED_MODULE_0__["default"])(10, 20);\nvar b = (0,_multiply__WEBPACK_IMPORTED_MODULE_1__.multiply)(40, 10);\nconsole.log("%c" + a, "font-size:30px;color:green;");\nconsole.log("%c" + b, "font-size:30px;color:green;");\n\n//# sourceURL=webpack://es6-test/./src/index.js?'
      );
    },

    './src/multiply.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "multiply": () => (/* binding */ multiply)\n/* harmony export */ });\nfunction multiply(x, y) {\n  return x * y;\n}\n;\n\n//# sourceURL=webpack://es6-test/./src/multiply.js?'
      );
    },
  };
  /************************************************************************/
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /************************************************************************/
  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();

  /************************************************************************/

  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__('./src/index.js');
})();
```
### 从编译后的文件可以看出
1. 整个项目被闭包封装并执行 `(()=>{...})()`，下面的代码分析都在这个闭包环境内
2. 第四行代码声明`__webpack_modules__`对象，key是文件路径，value是对应的文件代码，文件代码经过编译之后收集成字符串，只用`eval`来作为运行时的解析引擎，并使用`(...) => {...}`一个闭包函数封装。通过这种方式收集每个文件的代码到一个对象里。
3. 第7行的add.js代码格式化之后如下，`export`被转译成`__webpack_require__`，该对象在bundle文件里有声明(第28行)，由webpack自动生成，`import`(下面代码第9行)则转译成一个变量承载`eval`执行后的结果。
```js
__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
  /* harmony export */
  default: () => __WEBPACK_DEFAULT_EXPORT__,
  /* harmony export */
});
/* harmony import */
var _multiply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
  /*! ./multiply */
  './src/multiply.js'
);

var add = function add(x, y) {
  return x + y;
};

/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = add;

//# sourceURL=webpack://es6-test/./src/add.js?
```
4. bundle文件的启动代码位于82行，直接eval运行index代码.

### 热更新模块替换原理
对应源文件代码被修改时，构建文件之后，将对应的 hash，key(文件路径),value(构建后的es5代码)发通给浏览器，替换bundle里面__webpack_modules__对应的属性。