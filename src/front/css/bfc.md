# BFC、浮动float、clear

## BFC原理
[10分钟了解BFC](https://zhuanlan.zhihu.com/p/25321647)

## clear
[CSS之clear:both深度理解](https://segmentfault.com/a/1190000021201257)

- `clear` 清除相邻浮动元素对自身的影响，但是自身的浮动属性并未改变（即，是浮动元素还是浮动元素，普通流元素还是普通流元素）
- `clear: left` 清除左侧相邻的浮动元素对自身的影响
- `clear: right` 清除右侧相邻的浮动元素对自身的影响

### 清除浮动影响 示例1 使用clear， 元素会换行
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>文档标题</title>
</head>
<body>
	<div class="div1">1</div>
  <div class="div2">2</div>
  <div class="div3">3</div>
</body>
</html>
```
```css
.div1 {
  background-color: red;
  height: 100px;
  width: 100px;
  float: right;
}
.div2 {
  background-color: green;
  height: 120px;
  width: 100px;
  float: right;
  /* 清除左右两侧浮动对自身造成的影响 */
  /* 于是div2就会换行显示，相当于识别不到div1是浮动着的 */
  clear: both;
  /* 实际上起作用的只有 clear: right; */
  /* 因为左侧虽然是div3，但是div3的浮动并未对div2造成影响  */
}
.div3 {
  background-color: blue;
  height: 130px;
  width: 100px;
  float: right;
  clear: right;
}
```

### 清除浮动影响 示例2 触发 BFC 特性，元素不会换行
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>文档标题</title>
</head>
<body>
	<div class="div1">1</div>
  <div class="div2">2，没有浮动，文字环绕div1</div>
</body>
</html>
```
```css
.div1 {
  background-color: red;
  height: 100px;
  width: 100px;
  float: left;
}
.div2 {
  background-color: green;
  height: 120px;
  width: 120px;
  /* clear: left; 会导致div2换行 */
  /* 触发第二个元素的 BFC 特性，消除文字环绕，又避免换行 */
  overflow: hidden;
}
```