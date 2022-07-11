# react渲染出0的问题
## react 模板中 使用与运算符&& 时 渲染出 0 的问题
### 前置知识
- 在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。
因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
- false, null, undefined, and true 是合法的子元素。但它们并不会被渲染。

### 示例讲解
在下面示例中，render 方法渲染的是 `<div>{false}</div>`。
```js
render() {  
  const count = false;  
  return (
    <div>{ count && <h1>Messages: {count}</h1>}</div>
  );
}
```
请注意，返回 false 的表达式会使 && 后面的元素被跳过，但会返回 false 表达式。在下面示例中，render 方法的返回值是 `<div>0</div>`。

### 解决办法
统一解决出现0的问题的方式：  
1. 使用三元运算符  ? :
2. `!! count && <div>xxx</div>`

