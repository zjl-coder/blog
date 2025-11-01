<TitleList></TitleList>

# 柯里化与局部应用

### 柯里化
柯里化 (Currying) 是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
###### 示例1
```js
function sum(a,b,c){
  return a + b + c;
}
// 柯里化
function curry(fn){
  return function(a){
    return function(b){
      return function (c) {
        return fn(a, b, c);
      }
    }
  }
}
/**
 * const curriedSum = curry(sum)
 * curriedSum(1)(2)(3) // 6
 * /
```
**解析**  
1. `curry(fn)` 是一个转换器，将`sum()`变成一个可以一次传一个参数的函数
2.  将`sum`函数用形参`fn`缓存起来，然后返回一个新的`函数(a)`接收一个参数
3. 然后`函数(a)`执行之后，就将接收的参数缓存在`a`中，并返回一个`函数(b)`
4. 重复**步骤3**，直到新`函数(c)`，接收着最后一个参数，并且将所有缓存的`参数`传给缓存的`函数fn`
5. 得到结果

**问题**：如果每个函数的参数长度都不统一，怎么使 `curry` 通用化
###### 示例2
**解决思路**  
关键词：参数 数组 apply
1. `curry(fn)` 缓存 `sum(...)`
2. 返回一个新`函数(a)`，接收一个参数，
3. 将`函数(a)`接收到的参数存在 数组`arr`内  
   - a. 判断数组长度，如果数组`arr`长度大于等于 `fn`参数长度，则执行`fn.apply(arr)`  
   - b. 如果数组`arr`长度小于 `fn`参数长度，则重复**步骤2**
```js
function curry(fn){
  const length = fn.length; // fn 参数长度
  const arr = []; // 柯里化需要转化为一次传一个参数，所以还没传完的参数需要先存起来
  return function curried(...args){ // 闭包形式返回一个函数，接收参数，并且缓存到 数组中
    if(args.length > 0){ 
      arr.push(args[0]) // 每次只取一个参数
    }
    if(arr.length >= length){
      return fn.apply(this, arr) // 执行结果
    } else {
      return curried; // 循环闭包
    }
  }
}
```



### 局部应用
偏函数 (Partial application) ：又叫局部应用，是指固定一个函数的一些参数，然后产生另一个更小元的函数。  

什么是元？元是指函数参数的个数，比如一个带有两个参数的函数被称为二元函数。  

### 柯里化与局部应用
- 柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。
- 局部应用则是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数。

###### 示例3
偏函数与柯里化很相似，不同之处在于，偏函数返回的函数一次可以接收 n 个参数，而柯里化只能接收一个参数  

使用**示例2** 进行简化改造即可得到 局部应用(偏函数)
```js
function curry(fn){
  const length = fn.length; // fn 参数长度
  // 闭包形式返回一个函数，接收参数，并且缓存到在参数数组 args中
  return function curried(...args){ 
    if(args.length >= length){
      return fn.apply(this, args) // 执行结果
    } else {
      // 创建一个新的函数接收参数，与上层函数的参数进行合并
      return function curried2(...args2){ 
        return curried.apply(this, [...args, ...args2]) // 循环闭包
      }; 
    }
  }
}
```