# JavaScript中的Error类型

## Error 类型
js 中的错误类型主要有以下 6 种：
- SyntaxError
- TypeError
- ReferenceError
- RangeError
- EvalError
- URIError

这些错误类型继承自 Error ， 构造一个新的 Error 对象：
```js
new Error([message[, fileName[, lineNumber]]])
```
当错误产生时，Error 的实例对象会被抛出。

## 6 种不同错误类型的示例
1. ### SyntaxError：语法错误
```js
// Uncaught SyntaxError: Unexpected identifier
123consloe.log(123)   
// Uncaught SyntaxError: Unexpected number
console.123)          

// 注意，下面这种不是语法错误：
// Uncaught ReferenceError: consloe is not defined
consloe.log(123)      
```
2. ### TypeError：类型错误，即值的类型非预期类型
```js
// 下面的例子 a 为 number 类型，强行以函数方式调用 a
let a = 123;
// Uncaught TypeError: a is not a function
a();                
```
3. ### ReferenceError：引用错误，引用一个不存在的变量
```js
// RHS
// Uncaught ReferenceError: b is not defined
let a = b;            
```
4. ### RangeError：溢出错误，值超出了有效范围
```js
// Uncaught RangeError: Invalid array length
let a = new Array(-1);  

// 注意，下面这种不是溢出错误，因为数组是一种特殊的对象
let a = [1,2,3];
// undefined
console.log(a[-1]);   
```
5. ### EvalError：eval 函数执行错误
这个API 是为了向下兼容。现在 eval() 程序出错，引擎也会提示上面提到的具体错误，而不会抛出 EvalError，除非手动 new EvalError() 触发错误。

6. ### URIError：URI 相关函数错误使用
```js
// Uncaught URIError: URI malformed
decodeURI('%1')        
```
*来自 MDN 的第七种错误，InternalError：JavaScript 引擎内部错误，大部分浏览器都没有实现这个 API。*