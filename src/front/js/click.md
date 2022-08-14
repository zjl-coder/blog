# click回调的异步与同步

### 问题1：手动点击click
```js
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('1a'));
  console.log('1b');
});
btn.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('2a'));
  console.log('2b');
});
```
当鼠标点击 **btn** 元素时，控制台会打印什么  

答案是  
1b  
1a  
2b  
2a  
### 问题2： JS 模拟点击事件
```js
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('1a'));
  console.log('1b');
});
btn.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('2a'));
  console.log('2b');
});
btn.click();
```
**注意**：问题1与问题2的回调函数是一样的  

此时浏览器会打印什么？  

答案：  
1b  
2b  
1a  
2a  

### 手动点击与js模拟的区别
为什么手动点击事件与js模拟点击出来的代码执行顺序不同呢？

- “原生”事件被 **DOM 触发**，会通过时间循环来**异步执行**回调函数  
- **JS 触发**的事件，和 EventTarget.dispatchEvent() 一样，是**同步**触发的。dispatchEvent() 同步地调用事件处理函数。所有的可以执行的回调函数会在调用 dispatchEvent() 后执行，然后在代码继续之前返回。  

回调函数为什么分同步执行和异步执行呢？  
###### 同步执行回调
```js
function invokeFnSync(fn) {
  fn();
}

console.log('1');
invokeFnSync(() => console.log('2'));
console.log('3');
```
打印： 1, 2, 3   

该段代码的回调函数 () => console.log('2') 是同步执行的，因此代码执行的顺序会按照 1, 2, 3 的打印顺序进行。也就是说，回调函数会**阻塞**当前的任务的执行，执行完返回之后，才会继续执行下面的代码。 
###### 异步执行回调
```js
function invokeFnAsync(fn) {
  setTimeout(fn, 0);
}

console.log('1');
invokeFnAsync(() => console.log('2'));
console.log('3');
```  
这段代码中的回调函数 () => console.log('2') 会异步执行。也就是说，会被加入任务队列，等当前所有的任务执行完，调用栈清空时，才会调用这个回调函数。因此打印的顺序将是 1, 3, 2。   

我们再回头看一下 dispatchEvent() 函数。该函数执行时，不像手动点击触发事件那样把回调函数一次加入任务队列。该函数会同步执行所有的回调函数，等所有的函数同步地执行完毕之后，dispatchEvent() 才会返回。因此调用 btn.click() 时，相当于直接执行了以下代码：
```js
Promise.resolve().then(() => console.log('1a'));
console.log('1b');
Promise.resolve().then(() => console.log('2a'));
console.log('2b');
```