<TitleList></TitleList>

# 获取URL get参数

## 方法一 字符串切割法
```js
function getQueryVariable(variable)
{
  const query = window.location.search.substring(1); // 获取 ? 后面的字符串
  const vars = query.split("&"); // 按 & 切割成数组
  for (let i=0;i<vars.length;i++) {
          const pair = vars[i].split("="); // 按 = 切割成数组
          if(pair[0] == variable){return pair[1];} // 数组的第一个是key，第二个是 value
  }
  return(false);
}
```

## 方法二 [URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)
```js
function getQueryVariable(variable)
{
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return params.get(variable);
}
```

## 方法二 [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL)
```js
function getQueryVariable(variable)
{
  const url = new URL(window.location)
  return url.searchParams.get(variable);
}
```