# rem移动端适配
一般情况下为了适应多种屏幕分辨率，CSS样式会使用媒体查询 media query。然后手机屏幕分辨率越来越多，使得媒体查询开发起来比较麻烦。
## CSS单位
- `px` ：css 度量单位，相对长度单位，像素（Pixels）。px是屏幕设备物理上能显示出的最小的一点。这个点不是固定宽度的，是相对长度单位。在桌面浏览器中，1个像素往往是对着电脑屏幕的1个物理像素，但是在移动端，随着Retina屏的流行，分辨率提高了。css中的1px并不等于设备的1px。比如苹果三手机，分辨率是320 x 480。苹果四手机，变成了640 x 960，但是苹果四手机的实际屏幕尺寸并没有变化。这时候的1个css像素就是等于两个物理像素。

- `rem` ：css3的新度量单位，相对长度单位，相对于根元素(即html元素)font-size计算值的倍数。  

- `em`：所有现代浏览器下，默认字体尺寸都是16px。这时,1em = 16px。em会继承父级迟钝，也是相对单位。

- `vw`： css3的新度量单位，`相对视口宽度`(Viewport Width)，规定一个视口被均分为100单位的vw。`1vw = 1% * 视口宽度`。也就是说，一个视口就是100vw。  将屏幕分辨率都默认分为 100份vw, 即总的宽度为 100vw, 无论是iOS 或者Android各种屏幕，都以100vw 表示一个屏幕宽度。  

- `calc()`： css3的新函数，允许在声明 CSS 属性值时执行一些计算。  注意与`scale`区分，在css中，可以使用transfrom属性的scale()方法设置缩放，语法格式为“transfrom:scale(x轴缩放大小,y轴缩放大小)”

## vw px rem之间的换算

1. 我们假设pad的设计稿是以1920px为标准的。那么：  
   100vw = 1920px  
   1vw = 19.2px  
   我们想要： 1rem = 100px（这样方便我们在写代码的时候换算）  
   那么:  
   100px = 100vw / 19.2 = 1rem  
   *(因为100vw = 1920px，所以100vw = 19.2px x 100px)*  
   所以：  
   1rem = 5.208vw。   
   这时候，我们只要给html的根元素设置：  
   font-size: 5.208vw (或可以使用 calc(100vw / 19.2)即可。  

2. 同理的，手机端我们假设设计稿是以750px为标准的，那么:  
   100vw = 750px  
   1vw = 7.5px  
   我们想要： 1rem = 100px  
   那么：  
   100px = 100vw / 7.5 = 1rem  
   那么：  
   1rem = 13.33vw  

## 适配方案一，计算VW
设置font-size值
```css
.html {
  /*设计稿的宽度为 375px*/
  font-size: calc(100vw/3.75); 
  /* font-size: calc(100vw/7.5); 设计稿的宽度为 750px, 除数的值根据设计稿的宽度进行设置*/
}
```
设定100vw是设备的宽度，除以3.75可以让1rem的大小在iPhone6下等于100px。  

即： 1rem = 100px;

视觉稿上的尺寸是80px，则在css中写成0.8rem。（宽，高，padding margin 字体大小 等长度单位都可以写成rem，但是1px则不要写成rem, 直接写成1px）。  

之所以前面让1rem等于100px，而不是1rem等于1px，是因为在chrome下针对中文的最小字体是12px。如果calc(100vm / 375)；可能会样式出现问题。  

如果有使用sass之类的预处理器，则可以写一个函数进行换算，函数内部将参数除100再输出，则可以直接写成80rem而不用0.8rem。  

由于可能有些低版本的设备不支持vw，可以使用js进行处理一下
```js
//设计稿的宽度为 375px
document.documentElement.style.fontSize = window.innerWidth/3.75 + 'px'
```
scss 的写法
style.scss
```scss
@import "./common";
html {
  font-size: screenVw();
}

html,
body {
  background-color: #ffffff;
  height: 100%;
}
```
_common.scss
```scss
// 这个一个专为 @import而写的scss，不会独立生成css

@function rem($n) {
  @return ($n / 100) * 1rem;
}

@function screenVw() {
  @return 100vw / 3.75;
}
```
## 适配方案二，计算px
该方法也是修改html的font-size  

设计稿的标准宽度为 1920px, font-size 的值以屏幕宽度与设计稿宽度比为基准
```js
(function (doc, win) {
  const docEl = doc.documentElement;
  // 判断浏览器是否有重力感应，有的话使用重力感应进行监听
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  const resetFontSize = function () {
    // 获取屏幕宽度
    const { clientWidth } = docEl;
    if (!clientWidth) return;
    // 设计稿的标准宽度为 1920px, font-size 的值以屏幕宽度与设计稿宽度比为基准，
    // 这个比通常情况下小于12, 浏览器一般font-size 小于12px的都以12px显示，
    // 为了兼容这种情况，font-size 乘 100 倍，这样font-size一般就大于 12px了
    let docElWidth = 100 * (clientWidth / 1920);
    // 如果屏幕宽度小于1920 则以1920为最小单位，（css 一般就会去设置html的最小宽度为 min-width: 1920px）
    if (docElWidth < 100) docElWidth = 100;
    // 设置html font-size
    docEl.style.fontSize = `${docElWidth}px`;
  };
  if (!doc.addEventListener) return;
  // 动态重置 font-size
  win.addEventListener(resizeEvt, resetFontSize, false);
  // 屏幕加载时 设置 font-size
  doc.addEventListener('DOMContentLoaded', resetFontSize, false);
}(document, window));
```
scss 变量设置
```scss
$rem: 0.01rem;
```
使用的时候如下，设计稿的字体大小 或者宽度为 20px,则
```scss
width: 20 * $rem;
```
动态计算出结果

## 注意
无论方法一或者方法二，都需要重置html的line-height.  

因为 一般情况下浏览器的line-height: 1.5，font-size: 16px 即行高的实际高度为字体大小的一点五倍（实际行高 ：1.5 * 16 = 24 px）。  

如果不重置，会出现这种情况，假设 设计稿 和 屏幕都为 1920，则 font-size 将被设置为 100px，那么行高将是 1.5 * 100 = 150px。  

一般重置的计算值为：`line-height: 16 * $rem`  

16为浏览器一般默认行高，如果设计稿有特殊设置如 line-height:24px，则 line-height: 24 * $rem

*<Te d>图 line-heigth 异常</Te>*  
<img :src="$withBase('/images/rem.png')" alt="rem" style="width: 50%; border: 1px solid #ccc">