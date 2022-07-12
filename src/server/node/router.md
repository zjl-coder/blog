# 理解node router路由中间件的原理
最原始的路由写法
```js
const http = require("http");
const url = require("url");
const util = require("util");
const fs = require("fs");
const path = require("path");

let count = 0;

function onRequest(request, response) {
  const urlObj = url.parse(request.url);
  const pathname = urlObj.pathname;
  const query = urlObj.query;
  console.log('----------------');
  console.log(pathname);
  console.log(++count);
  if (pathname === '/favicon.ico') {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("get \n");
    response.write("pathname: " + pathname + '\n');
    response.end();
    return;
  } else if (pathname === '/api') {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("get \n");
    response.write("pathname: " + pathname + '\n');
    if (query) {
      response.write("query: " + util.inspect(urlQuery(query)) + '\n');
    }
    response.write("urlObj: " + util.inspect(urlObj) + '\n');
    const whatwg = new URL("http://"+request.headers.host + request.url);
    response.write("whatwg URL: " + util.inspect(whatwg) + '\n');
    response.end();
    return;
  }
}

// 解析 get URL 参数
function urlQuery(query) {
  if (!query) {
    return {};
  }
  const list = query.split("&");
  const len = list.length;
  const res = {};
  for (let i = 0; i < len; i++) {
    const item = list[i].split("=");
    res[item[0]] = item[1];
  }
  return res;
}

http.createServer(onRequest).listen(8888);
console.log("Server has started -- http://127.0.0.1:8888");

```