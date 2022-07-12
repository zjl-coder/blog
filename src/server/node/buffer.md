# 理解node buffer 
```js
/**
 * JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
 * 但在处理像TCP流或文件流时，必须使用到二进制数据。
 * 因此在 Node.js中，定义了一个 Buffer 类，
 * 该类用来创建一个专门存放二进制数据的缓存区。
 * 
 * Buffer 库为 Node.js 带来了一种存储原始数据的方法，
 * 可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，
 * 就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。
 * 一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
 * 
 * 在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，
 * 但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，所以在v6.0以后，
 * 官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。
 */

const buf1 = Buffer.alloc(10);
const buf5 = Buffer.from('test');
console.log(buf1.length, buf5.length); // 10 4
buf1.write('1234567890abc');
buf5.write('1234567890abc');
console.log(buf1.length, buf5.length); // 10 4
console.log(buf1.toString(), buf5.toString()); // 1234567890 1234

/**
 * Buffer.alloc 可以自定义申请空间大小
 * Buffer.from 空间大小取决于初始化时的字符串大小
 */
```