import{_ as d,r as a,o as l,c as r,b as e,a as n,w as o,d as s,e as p}from"./app.58da4905.js";const u={},_=n("h1",{id:"d-ts\u5168\u5C40\u7C7B\u578B\u58F0\u660E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#d-ts\u5168\u5C40\u7C7B\u578B\u58F0\u660E","aria-hidden":"true"},"#"),s(" *.d.ts\u5168\u5C40\u7C7B\u578B\u58F0\u660E")],-1),h=s("\u5728ts\u4E2D\u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u7C7B\u578B\u53EA\u9700\u8981\u5728 "),m=n("strong",null,".d.ts",-1),k=s(" \u6587\u4EF6\u4E2D\u7684\u7C7B\u578B\u58F0\u660E\u524D\u52A0\u4E0A "),v=s("declare"),b=s(" \u5173\u952E\u5B57\u5373\u53EF\u3002"),f=p(`<h3 id="d-ts\u6587\u4EF6\u5931\u6548\u5E38\u89C1\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#d-ts\u6587\u4EF6\u5931\u6548\u5E38\u89C1\u539F\u56E0" aria-hidden="true">#</a> d.ts\u6587\u4EF6\u5931\u6548\u5E38\u89C1\u539F\u56E0</h3><h6 id="import-\u5BFC\u81F4\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#import-\u5BFC\u81F4\u5931\u6548" aria-hidden="true">#</a> import \u5BFC\u81F4\u5931\u6548</h6><p><strong>d.ts\u5BFC\u5165import\u5176\u5B83\u7C7B\u578B\u5BFC\u81F4\u5168\u5C40\u7C7B\u578B\u5931\u6548\u95EE\u9898\u6392\u67E5\u53CA\u89E3\u51B3\u529E\u6CD5</strong></p><p>\u5982\u679C\u58F0\u660E\u5728\u58F0\u660E\u5168\u5C40\u7C7B\u578B\u7684\u6587\u4EF6\u4E2D\u4F7F\u7528import\u5173\u952E\u5B57\u5F15\u5165\u4E86\u5176\u4ED6\u6A21\u5757\u4E2D\u7684\u7C7B\u578B\uFF0C\u5C31\u4F1A\u53D1\u73B0\u5168\u5C40\u53D8\u91CF\u7C7B\u578B\u58F0\u660E\u5931\u6548\u4E86\u3002</p><p>\u539F\u56E0\u5728\u4E8E\uFF0C\u5728\u4E00\u4E2A.d.ts\u6587\u4EF6\u4E2D\u5F15\u5165\u4E86\u5176\u4ED6\u6A21\u5757\uFF0C\u5C31\u4F1A\u4F7Fts\u7C7B\u578B\u7CFB\u7EDF\u5C06\u5176\u89C6\u4E3A\u4E00\u4E2A\u6A21\u5757\uFF0C\u5BFC\u81F4\u5176\u4E2D\u7684\u6240\u6709\u7C7B\u578B\u5373\u4F7F\u6DFB\u52A0\u4E86declare\u5173\u952E\u5B57\u4E5F\u4E0D\u80FD\u76F4\u63A5\u5168\u5C40\u4F7F\u7528\u3002</p><p>custom.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CustomProps</span> <span class="token punctuation">{</span>
  loading<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typings.d.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CustomProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;custom.ts&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
  store<span class="token operator">:</span> <span class="token punctuation">{</span>
    state<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),g=s("\u5728\u4F7F\u7528 "),y=s("window.store"),x=s(" \u7684\u5730\u65B9\u5C31\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0Cstore \u5728\u7C7B\u578B "),w=s("Window"),j=s(" \u4E0A\u4E0D\u5B58\u5728\u3002 "),T=n("code",null,"typing.d.ts",-1),q=s("\u6587\u4EF6\u5931\u6548\u4E86\u3002"),C=n("strong",null,"\u89E3\u51B3\u529E\u6CD5",-1),L=s("\uFF1A"),N={href:"https://juejin.cn/post/6981281393812701191",target:"_blank",rel:"noopener noreferrer"},V=s("*.d.ts\u5BFC\u5165import\u5176\u5B83\u7C7B\u578B\u5BFC\u81F4\u5168\u5C40\u7C7B\u578B\u5931\u6548\u95EE\u9898\u6392\u67E5\u53CA\u89E3\u51B3\u529E\u6CD5"),B=n("h3",{id:"ts-node-\u6216nodemon-\u627E\u4E0D\u5230d-ts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ts-node-\u6216nodemon-\u627E\u4E0D\u5230d-ts","aria-hidden":"true"},"#"),s(" ts-node(\u6216nodemon)\u627E\u4E0D\u5230d.ts")],-1),E=n("p",null,"ts-node \u9ED8\u8BA4\u4E0D\u4F7F\u7528 tsconfig.json \u4E2D\u7684 files\uFF0C include \u6216\u8005 exclude \u914D\u7F6E\uFF0C\u800C\u662F\u4ECE\u5165\u53E3\u6587\u4EF6\u5F00\u59CB\uFF0C\u6839\u636E\u6587\u4EF6\u4F9D\u8D56\u8DEF\u5F84\u53BB\u67E5\u627E\u7F16\u8BD1\u6587\u4EF6\u3002",-1),I=n("p",null,[s("\u5F00\u53D1\u8005\u5728\u5199ts node \u4EE3\u7801\u65F6\uFF0C\u6CA1\u6709\u5F15\u5165 "),n("strong",null,".d.ts"),s(" \u7684\u58F0\u660E\uFF0C\u4F1A\u5B58\u5728 *.d.ts \u6CA1\u6709\u88AB\u81EA\u52A8\u8BC6\u522B\u5E76\u62A5\u9519\u7C7B\u578B\u5B9A\u4E49\u627E\u4E0D\u5230\u7684\u95EE\u9898\u3002")],-1),P=s("\u89E3\u51B3\u65B9\u6848\uFF1A"),S={href:"https://juejin.cn/post/7075525132998934559",target:"_blank",rel:"noopener noreferrer"},W=s("ts-node\uFF08\u6216nodemon\uFF09 \u63D0\u793A\u627E\u4E0D\u5230 TypeScript \u7C7B\u578B\u58F0\u660E\uFF1F4\u4E2A\u89E3\u51B3\u65B9\u6848\u5B8C\u6574\u4EE3\u7801\u5949\u4E0A"),O=p(`<p>\u65B9\u68482\uFF1A\u4F7F\u7528 ts-node: { files } \u914D\u7F6E \u6700\u65B9\u4FBF</p><p>tsconfig.json</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
  <span class="token property">&quot;ts-node&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u589E\u52A0\u8FD9\u4E00\u6761\u914D\u7F6E\u5373\u53EF\uFF0C\u5176\u4ED6\u540C\u9ED8\u8BA4\u914D\u7F6E</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function z(A,D){const c=a("TitleList"),t=a("Te"),i=a("ExternalLinkIcon");return l(),r("div",null,[e(c),_,n("p",null,[h,m,k,e(t,{d:""},{default:o(()=>[v]),_:1}),b]),f,n("p",null,[g,e(t,{d:""},{default:o(()=>[y]),_:1}),x,e(t,{d:""},{default:o(()=>[w]),_:1}),j,T,q]),n("p",null,[C,L,n("a",N,[V,e(i)])]),B,E,I,n("p",null,[P,n("a",S,[W,e(i)])]),O])}var G=d(u,[["render",z],["__file","d-ts.html.vue"]]);export{G as default};