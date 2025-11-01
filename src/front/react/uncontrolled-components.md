<TitleList></TitleList>

# 非受控组件 react
react <Te d>非受控组件</Te>，意思就是 组件的value值不受开发者控制。

## 非受控组件实现
非受控组件需要借助<Te d>input</Te>才可以实现。  

非受控组件是在组件<Te d>内部</Te>封装维护了自己的<Te d>state</Te>，并且state <Te d>不对外暴露</Te>，即<Te d>无法</Te>通过传入 onchange 等函数将value值传出来。<Te d>只能通过 React.createRef() </Te>获取 input的ref 然后 通过 ref.current.value 或者 ref.current.defaultValue 两个属性获得值。

### 非受控组件封装示例
```js
import React, {  useState, forwardRef } from 'react';

const Input = forwardRef((props, ref)=>{
  const {defaultValue} = props
  return <input ref={ref} defaultValue={defaultValue}/>
})

const NumberInput = forwardRef((props, ref)=>{
  const {defaultValue} = props;

  const [value, setValue] = useState(defaultValue)

  const changeHanle = (e)=>{
    setValue(e.target.value + 1)
  }
  return <input ref={ref} defaultValue={value} onChange={changeHanle}/>
})
```
### 非受控组件使用示例
如上有两个封装好的非受控组件，使用如下
```js
const render = ()=>{
  const inputRef = React.createRef();
  const numberInputRef = React.createRef();

  useEffect(()=>{
    // 只能通过这种方式获得值， 无法通过传入onchange 来控制 input的行为，如 value -1。
    console.log(inputRef.current.value); 
    // 获得的值永远+1，无法改变这个行为。
    console.log(numberInputRef.current.value); 
  }, [])

  return (
    <>
      <Input ref={inputRef} defaultValue={1}/>
      <NumberInput ref={numberInputRef} defaultValue={1}/>
    </>
  );
}
```
- input 输入是什么，得到的就是什么，行为<Te d>不受开发者控制</Te>（无法通过onChange，onInput 等事件改变Input 的值）。  
- defaultValue 是设置input的默认值。

## react 受控组件
<Te s>受控组件</Te>则是我们通常使用的，传入 value 和 onchange 两个属性，然后通过 onChange 改变 input 自身行为的组件。内部不维护 state。

### 受控组件示例
```js
import React, {  useState, forwardRef } from 'react';

const Input = forwardRef((props, ref)=>{
  const {value, onChange} = props
  return <input value={value} onChange={(e)=>onChange(e.target.value)}/>
})
```
开发者通过 onChange 函数 可以控制Input 组件得到的值。