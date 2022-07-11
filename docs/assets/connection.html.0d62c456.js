import{_ as r,r as c,o as i,c as h,a as e,d as a,w as n,b as t,e as d}from"./app.e0375087.js";var l="/blog/assets/1.fd5c7933.png",_="/blog/assets/2.7fbf4adf.png";const p={},T=e("h1",{id:"http\u957F\u8FDE\u63A5\u3001\u77ED\u8FDE\u63A5\u548Cwebsocket",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http\u957F\u8FDE\u63A5\u3001\u77ED\u8FDE\u63A5\u548Cwebsocket","aria-hidden":"true"},"#"),t(" HTTP\u957F\u8FDE\u63A5\u3001\u77ED\u8FDE\u63A5\u548Cwebsocket")],-1),b={href:"https://www.cnblogs.com/0201zcr/p/4694945.html",target:"_blank",rel:"noopener noreferrer"},u=t("HTTP\u957F\u8FDE\u63A5\u548C\u77ED\u8FDE\u63A5"),k=d('<h6 id="\u8BFE\u5916\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u8BFE\u5916\u77E5\u8BC6" aria-hidden="true">#</a> \u8BFE\u5916\u77E5\u8BC6</h6><ul><li>HTTP \u4F7F\u7528\u77ED\u8FDE\u63A5</li><li>\u6570\u636E\u5E93\u8FDE\u63A5\u4F7F\u7528\u957F\u8FDE\u63A5</li></ul><h3 id="\u77ED\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u77ED\u8FDE\u63A5" aria-hidden="true">#</a> \u77ED\u8FDE\u63A5</h3><p>\u6BCF\u6B21Http\u8BF7\u6C42\u90FD\u4F1A\u5EFA\u7ACBTcp\u8FDE\u63A5\uFF0C\u7BA1\u7406\u5BB9\u6613</p><h3 id="\u957F\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u957F\u8FDE\u63A5" aria-hidden="true">#</a> \u957F\u8FDE\u63A5</h3><p>\u53EA\u9700\u8981\u5EFA\u7ACB\u4E00\u6B21Tcp\u8FDE\u63A5\uFF0C\u4EE5\u540EHttp\u8BF7\u6C42\u91CD\u590D\u4F7F\u7528\u540C\u4E00\u4E2ATcp\u8FDE\u63A5\uFF0C\u7BA1\u7406\u96BE</p><h3 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h3><p>\u670D\u52A1\u7AEF\u53EF\u8BBE\u7F6E\u8FDE\u63A5\u7684\u4FDD\u6D3B\u65F6\u95F4\uFF0C\u5728\u4FDD\u6D3B\u65F6\u95F4\u5185\uFF0C\u5982\u679C\u518D\u6B21\u53D1\u8D77\u8FDE\u63A5\u4F1A\u590D\u7528\u8FDE\u63A5\u3002\u670D\u52A1\u7AEF\u4E3B\u52A8\u544A\u8BC9\u5BA2\u670D\u7AEF\u8D85\u65F6\u65F6\u95F4\u3002\u5982\u679C\u670D\u52A1\u5668\u6CA1\u6709\u544A\u8BC9\u5BA2\u6237\u7AEF\u8D85\u65F6\u65F6\u95F4\u4E5F\u6CA1\u5173\u7CFB\uFF0C\u670D\u52A1\u7AEF\u53EF\u80FD\u4E3B\u52A8\u53D1\u8D77\u56DB\u6B21\u6325\u624B\u65AD\u5F00TCP\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u80FD\u591F\u77E5\u9053\u8BE5TCP\u8FDE\u63A5\u5DF2\u7ECF\u65E0\u6548\uFF1B\u53E6\u5916TCP\u8FD8\u6709\u5FC3\u8DF3\u5305\u6765\u68C0\u6D4B\u5F53\u524D\u8FDE\u63A5\u662F\u5426\u8FD8\u6D3B\u7740\uFF0C\u65B9\u6CD5\u5F88\u591A\uFF0C\u907F\u514D\u6D6A\u8D39\u8D44\u6E90\u3002</p><p>\u957F\u8FDE\u63A5\u548C\u77ED\u8FDE\u63A5\u7684\u4EA7\u751F\u5728\u4E8Eclient\u548Cserver\u91C7\u53D6\u7684\u5173\u95ED\u7B56\u7565</p><h2 id="\u77ED\u8FDE\u63A5\u548C\u957F\u8FDE\u63A5\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u77ED\u8FDE\u63A5\u548C\u957F\u8FDE\u63A5\u533A\u522B" aria-hidden="true">#</a> \u77ED\u8FDE\u63A5\u548C\u957F\u8FDE\u63A5\u533A\u522B</h2><p>\u77ED\u8FDE\u63A5\u548C\u957F\u8FDE\u63A5\u6709\u672C\u8D28\u533A\u522B\u3002\u957F\u3001\u77ED\u8FDE\u63A5\u662F\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u5EFA\u7ACB\u548C\u4FDD\u6301TCP\u8FDE\u63A5\u7684\u673A\u5236\uFF1B\u800C\u957F\u3001\u77ED\u8F6E\u8BE2\u662F\u6307\u5BA2\u6237\u7AEF\u8BF7\u6C42\u670D\u52A1\u7AEF\uFF0C\u670D\u52A1\u7AEF\u7ED9\u4E88\u5E94\u7B54\u7684\u65B9\u5F0F\u3002</p><ul><li><strong>\u77ED\u8F6E\u8BE2</strong>\uFF1A\u91CD\u590D\u53D1\u9001Http\u8BF7\u6C42\uFF0C\u67E5\u8BE2\u76EE\u6807\u4E8B\u4EF6\u662F\u5426\u5B8C\u6210\uFF0C\u4F18\u70B9\uFF1A\u7F16\u5199\u7B80\u5355\uFF0C\u7F3A\u70B9\uFF1A\u6D6A\u8D39\u5E26\u5BBD\u548C\u670D\u52A1\u5668\u8D44\u6E90</li><li><strong>\u957F\u8F6E\u8BE2</strong>\uFF1A\u5728\u670D\u52A1\u7AEFhold\u4F4FHttp\u8BF7\u6C42\uFF08\u6B7B\u5FAA\u73AF\u6216\u8005sleep\u7B49\u7B49\u65B9\u5F0F\uFF09\uFF0C\u7B49\u5230\u76EE\u6807\u65F6\u95F4\u53D1\u751F(\u4FDD\u6301\u8FD9\u4E2A\u8BF7\u6C42\u7B49\u5F85\u6570\u636E\u5230\u6765\u6216\u8005\u6070\u5F53\u7684\u8D85\u65F6)\uFF0C\u8FD4\u56DEHttp\u54CD\u5E94\u3002\u4F18\u70B9\uFF1A\u5728\u65E0\u6D88\u606F\u7684\u60C5\u51B5\u4E0B\u4E0D\u4F1A\u9891\u7E41\u7684\u8BF7\u6C42\uFF0C\u7F3A\u70B9\uFF1A\u7F16\u5199\u590D\u6742</li></ul><h2 id="websocket\u548Chttp\u957F\u8FDE\u63A5\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#websocket\u548Chttp\u957F\u8FDE\u63A5\u533A\u522B" aria-hidden="true">#</a> WebSocket\u548CHTTP\u957F\u8FDE\u63A5\u533A\u522B</h2>',13),f=e("li",null,"HTTP1.1\u901A\u8FC7\u4F7F\u7528Connection:keep-alive\u8FDB\u884C\u957F\u8FDE\u63A5\uFF0CHTTP 1.1\u9ED8\u8BA4\u8FDB\u884C\u6301\u4E45\u8FDE\u63A5\u3002\u5728\u4E00\u6B21 TCP \u8FDE\u63A5\u4E2D\u53EF\u4EE5\u5B8C\u6210\u591A\u4E2A HTTP \u8BF7\u6C42\uFF0C\u4F46\u662F\u5BF9\u6BCF\u4E2A\u8BF7\u6C42\u4ECD\u7136\u8981\u5355\u72EC\u53D1 header\uFF0CKeep-Alive\u4E0D\u4F1A\u6C38\u4E45\u4FDD\u6301\u8FDE\u63A5\uFF0C\u5B83\u6709\u4E00\u4E2A\u4FDD\u6301\u65F6\u95F4\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u670D\u52A1\u5668\u8F6F\u4EF6\uFF08\u5982Apache\uFF09\u4E2D\u8BBE\u5B9A\u8FD9\u4E2A\u65F6\u95F4\u3002",-1),H=t("websocket\u7684\u957F\u8FDE\u63A5\uFF0C\u662F\u4E00\u4E2A"),m=t("\u771F\u7684\u5168\u53CC\u5DE5"),P=t("\uFF0C\u7B2C\u4E00\u6B21tcp\u94FE\u8DEF\u5EFA\u7ACB\u4E4B\u540E\uFF0C\u540E\u7EED\u6570\u636E\u53EF\u4EE5\u53CC\u65B9\u90FD\u8FDB\u884C\u53D1\u9001\uFF0C\u4E0D\u9700\u8981\u53D1\u9001\u8BF7\u6C42\u5934\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8FDE\u63A5\u4F1A\u6301\u7EED\u5B58\u5728\u76F4\u5230\u5BA2\u6237\u7AEF\u6216\u8005\u670D\u52A1\u5668\u7AEF\u7684\u67D0\u4E00\u65B9\u4E3B\u52A8\u5173\u95ED\u8FDE\u63A5\uFF0C"),S=t("\u4E0EHTTP\u957F\u8FDE\u63A5\u4E0D\u540C\uFF0CWebSocket\u53EF\u4EE5\u66F4\u7075\u6D3B\u7684\u63A7\u5236\u8FDE\u63A5\u5173\u95ED\u7684\u65F6\u673A\uFF0C\u800C\u4E0D\u662FHTTP\u534F\u8BAE\u7684Keep-Alive\u4E00\u5230\uFF0C\u670D\u52A1\u7AEF\u7ACB\u9A6C\u5C31\u5173\u95ED"),g=t("\uFF08\u8FD9\u6837\u5F88\u4E0D\u4EBA\u6027\u5316\uFF09"),x=e("h3",{id:"websocket\u8FDE\u63A5\u5EFA\u7ACB",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#websocket\u8FDE\u63A5\u5EFA\u7ACB","aria-hidden":"true"},"#"),t(" WebSocket\u8FDE\u63A5\u5EFA\u7ACB")],-1),A=e("p",null,[t("\u5EFA\u7ACBWebSocket\u8FDE\u63A5\u65F6\uFF0C\u9700\u8981\u901A\u8FC7\u5BA2\u6237\u7AEF\u6216\u8005\u6D4F\u89C8\u5668\u53D1\u51FA\u63E1\u624B\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u6D88\u606F\u793A\u4F8B\u5982\u56FE\uFF1A "),e("img",{src:l,alt:"An image"})],-1),w=e("p",null,[t("\u670D\u52A1\u7AEF\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u7684\u5E94\u7B54\u6D88\u606F\u5982\u56FE\uFF1A "),e("img",{src:_,alt:"An image"})],-1),C=e("p",null,"\u4E3A\u4E86\u5EFA\u7ACB\u4E00\u4E2AWebSocket\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u9996\u5148\u8981\u5411\u670D\u52A1\u5668\u53D1\u8D77\u4E00\u4E2AHTTP\u8BF7\u6C42\uFF0C\u8FD9\u4E2A\u8BF7\u6C42\u548C\u901A\u5E38\u7684HTTP\u8BF7\u6C42\u4E0D\u540C\uFF0C\u5305\u542B\u4E86\u4E00\u4E9B\u9644\u52A0\u5934\u4FE1\u606F\uFF0C\u5176\u4E2D\u9644\u52A0\u5934\u4FE1\u606F\u201CUpgrade: WebSocket\u201D\u8868\u660E\u8FD9\u662F\u4E00\u4E2A\u7533\u8BF7\u534F\u8BAE\u5347\u7EA7\u7684HTTP\u8BF7\u6C42\u3002\u670D\u52A1\u5668\u7AEF\u89E3\u6790\u8FD9\u4E9B\u9644\u52A0\u7684\u5934\u4FE1\u606F\uFF0C\u7136\u540E\u751F\u6210\u5E94\u7B54\u4FE1\u606F\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u7684WebSocket\u8FDE\u63A5\u5C31\u5EFA\u7ACB\u8D77\u6765\u4E86\uFF0C\u53CC\u65B9\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u8FDE\u63A5\u901A\u9053\u81EA\u7531\u5730\u4F20\u9012\u4FE1\u606F\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8FDE\u63A5\u4F1A\u6301\u7EED\u5B58\u5728\u76F4\u5230\u5BA2\u6237\u7AEF\u6216\u8005\u670D\u52A1\u5668\u7AEF\u7684\u67D0\u4E00\u65B9\u4E3B\u52A8\u5173\u95ED\u8FDE\u63A5\u3002",-1),v=e("p",null,"\u8BF7\u6C42\u6D88\u606F\u4E2D\u7684\u201CSec-WebSocket-Key\u201D\u662F\u968F\u673A\u7684\uFF0C\u670D\u52A1\u5668\u7AEF\u4F1A\u7528\u8FD9\u4E9B\u6570\u636E\u6765\u6784\u9020\u51FA\u4E00\u4E2ASHA-1\u7684\u4FE1\u606F\u6458\u8981\uFF0C\u628A\u201CSec-WebSocket-Key\u201D\u52A0\u4E0A\u4E00\u4E2A\u9B54\u5E7B\u5B57\u7B26\u4E32\u201C258EAFA5-E914- 47DA-95CA-C5AB0DC85B11\u201D\u3002\u4F7F\u7528SHA-1\u52A0\u5BC6\uFF0C\u7136\u540E\u8FDB\u884CBASE-64\u7F16\u7801\uFF0C\u5C06\u7ED3\u679C\u505A\u4E3A\u201CSec-WebSocket-Accept\u201D\u5934\u7684\u503C\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002",-1);function W(B,E){const s=c("ExternalLinkIcon"),o=c("Te");return i(),h("div",null,[T,e("p",null,[e("a",b,[u,a(s)])]),k,e("ul",null,[f,e("li",null,[H,a(o,{d:""},{default:n(()=>[m]),_:1}),P,a(o,{d:""},{default:n(()=>[S]),_:1}),g])]),x,A,w,C,v])}var N=r(p,[["render",W],["__file","connection.html.vue"]]);export{N as default};
