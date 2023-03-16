import{_ as e,r as a,o as c,c as l,b as t,a as n,d as s,e as u}from"./app.2d6c8007.js";var i="/blog/assets/closure-trap-1.8c9d0f53.png",r="/blog/assets/closure-trap-2.3961ced2.png",k="/blog/assets/closure-trap-3.93744292.png";const d={},v=n("h1",{id:"\u7EC4\u4EF6\u51FD\u6570\u7684\u95ED\u5305\u9677\u9631",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC4\u4EF6\u51FD\u6570\u7684\u95ED\u5305\u9677\u9631","aria-hidden":"true"},"#"),s(" \u7EC4\u4EF6\u51FD\u6570\u7684\u95ED\u5305\u9677\u9631")],-1),m=n("h3",{id:"\u95EE\u9898\u4EE3\u78011",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u95EE\u9898\u4EE3\u78011","aria-hidden":"true"},"#"),s(" \u95EE\u9898\u4EE3\u78011")],-1),b={href:"https://codesandbox.io/s/sv1eq?file=/src/index.js",target:"_blank",rel:"noopener noreferrer"},g=s("try it in codesandbox"),f=u(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span>setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> timeId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token function">clearInterval</span><span class="token punctuation">(</span>timeId<span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    	<span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token function">setCount</span><span class="token punctuation">(</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token constant">ADD</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> rootElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53 add \u6309\u94AE\u70B9\u51FB\u65F6\uFF0CUI\u4E0A\u7684\u6570\u636E\u80FD\u5F97\u5230<strong>\u6B63\u786E\u7684\u66F4\u65B0</strong>\uFF0C\u800C\u5B9A\u65F6\u5668\u4E0A\u7684 console.log \u6253\u5370\u7684\u503C\u5374\u4E00\u76F4\u662F\u521D\u59CB\u5316\u7684\u503C\uFF0C<strong>\u6CA1\u6709\u6B63\u786E\u7684\u66F4\u65B0</strong>\u3002 <img src="`+i+'" alt="an image"> \u8FD9\u79CD\u73B0\u8C61\u79F0\u4E3A<strong>\u95ED\u5305\u9677\u9631</strong></p><h3 id="\u539F\u56E0\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0\u5206\u6790" aria-hidden="true">#</a> \u539F\u56E0\u5206\u6790</h3><p>\u4E0A\u8FF0\u4EE3\u7801\u4F7F\u7528<code>useEffect(effectFn, deps)</code> \u65F6\uFF0Cdeps \u662F\u7A7A\u6570\u7EC4\uFF0C\u6240\u4EE5 effectFn \u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u4F46\u662F effectFn \u4E2D\u7684\u5B9A\u65F6\u6267\u884C\u51FD\u6570\u5F15\u7528\u4E86\u5916\u90E8\u7684count\uFF0C\u5F62\u6210\u4E86<strong>\u95ED\u5305</strong>\uFF0C\u5E76\u4E14\u4F1A\u6267\u884C\u591A\u6B21\uFF0C\u4F46\u5374<strong>\u5F15\u7528\u7684\u662F\u7B2C\u4E00\u6B21\u6267\u884C\u6808\u7684\u4E0A\u4E0B\u6587\uFF08\u8BCD\u6CD5\u73AF\u5883\uFF09</strong>\u3002</p><p>\u51FD\u6570\u7684\u6267\u884C\u8FC7\u7A0B <img src="'+r+`" alt="an image"> effectFn \u51FD\u6570\u5B9A\u4E49\u4F1A\u5B58\u5728 app fiber \u7684\u5C5E\u6027\u4E0A\uFF0C\u53EA\u5728App\u7B2C\u4E00\u6B21\u6267\u884C\u4E4B\u540E\u88AB\u5B9A\u4E49\uFF0C\u5E76\u4E14\u56E0\u4E3A effect \u51FD\u6570\u5185\u90E8\u76F4\u63A5\u5F15\u7528\u4E86\u5916\u90E8\u7684count \u6240\u4EE5\u5F62\u6210\u4E86\u95ED\u5305\uFF0C\u800C setInterval \u7684\u56DE\u8C03\u51FD\u6570\u5219\u5F62\u6210\u4E86\u95ED\u5305\u4E2D\u7684\u95ED\u5305\uFF0C\u4F46\u662F\u5F15\u7528\u7684\u76F4\u63A5\u662F\u6700\u5916\u5C42\u7684App\u51FD\u6570\u7684\u57DF\u4E2D\u7684\u5185\u5BB9\uFF0C\u6240\u4EE5\uFF0C\u7B2C\u4E00\u6B21\u7684App\u51FD\u6570\u6808\u4E00\u76F4\u90FD\u4E0D\u4F1A\u5185\u5B58\u56DE\u6536 <strong>\uFF08\u7B2C\u4E00\u6B21 \u8BCD\u6CD5\u73AF\u5883 \u4E00\u76F4\u5B58\u5728\uFF09</strong>\u3002</p><h3 id="\u4EE3\u7801\u95EE\u98982" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u95EE\u98982" aria-hidden="true">#</a> \u4EE3\u7801\u95EE\u98982</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span>setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    	<span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token function">setCount</span><span class="token punctuation">(</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token constant">ADD</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>log<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> rootElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u65E0\u8BBA count \u53D8\u5316\u591A\u5C11\u6B21\uFF0Clog \u6253\u5370\u51FA\u6765\u7684\u90FD\u662F 0\uFF0C\u8FD9\u5C31\u662F\u95ED\u5305\u9677\u9631\u3002 <img src="`+k+'" alt="an image"> \u56E0\u4E3A <code>useCallback</code> \u4E2D\u5B9A\u4E49\u7684\u53C2\u6570\u4F1A\u5728App\u7B2C\u4E00\u6B21\u6267\u884C\u65F6\uFF0C\u51FD\u6570\u4F53\u88AB\u4FDD\u5B58\u5728 App \u7684 fiber \u5C5E\u6027\u4E0A\uFF0C\u540C\u65F6\uFF0C\u4E0D\u7BA1 App \u6267\u884C\u591A\u5C11\u6B21\uFF0C\u56E0\u4E3A useCallback \u7684 deps \u662F\u7A7A\u6570\u7EC4\uFF0C\u6240\u4EE5 log \u90FD\u53EA\u4F1A\u62FF\u5230 App \u7B2C\u4E00\u6B21\u6267\u884C\u65F6\u6240\u7F13\u5B58\u4E0B\u6765\u7684\u51FD\u6570\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u51FD\u6570\u7684\u4E0A\u4E0B\u95EE\u4E00\u76F4\u6307\u5411\u7684\u662F\u7B2C\u4E00\u4E2A App \u6808(\u56E0\u4E3A\u95ED\u5305\u7684\u539F\u56E0\uFF0C\u7B2C\u4E00\u4E2A\u6808\u5C31\u4E0D\u4F1A\u88AB\u9500\u6BC1)\u3002\u5982\u679C\u6211\u4EEC\u5C06 count \u653E\u5165 deps\u4E2D <code>useCallback(fn, [count])</code>\uFF0C\u5219\u5728 count \u53D1\u751F\u53D8\u5316\u65F6\uFF0CApp fiber \u6240\u7F13\u5B58\u7684\u51FD\u6570\u5C31\u4F1A\u88AB\u66FF\u6362\u6389\u65B0\u5B9A\u4E49\u7684 fn, \u6B64\u65F6\u65B0\u7684 fn \u7684\u8BCD\u6CD5\u73AF\u5883(\u4E0A\u4E0B\u6587)\u5C31\u4F1A\u6307\u5411\u6700\u65B0\u7684 count \u4E86\uFF0C\u6B64\u65F6\u5C31\u53EF\u4EE5\u6253\u5370\u6B63\u786E\u3002</p><h3 id="hook-\u7684\u95ED\u5305\u9677\u9631" tabindex="-1"><a class="header-anchor" href="#hook-\u7684\u95ED\u5305\u9677\u9631" aria-hidden="true">#</a> hook \u7684\u95ED\u5305\u9677\u9631</h3><p>\u8FD9\u4E2A\u9677\u9631\u5728<code>useEffect</code>\u3001<code>useCallback</code>\u3001<code>useMemo</code>\u3001<code>memo</code>\u7B49\u90FD\u5B58\u5728\uFF0C\u5982\u679C\u4ED6\u4EEC\u7684 fn \u53C2\u6570\u76F4\u63A5\u8C03\u7528\u5916\u90E8\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\uFF0C\u5219\u4F1A\u5F62\u6210\u95ED\u5305\uFF0C\u4ED6\u4EEC\u7684deps\u4F9D\u8D56\u53C2\u6570\u4E3A\u7A7A\uFF0C\u5219fn\u51FD\u6570\u53EA\u4F1A\u88AB\u521B\u5EFA\u4E00\u6B21\uFF0C\u5E76\u4E14\u5F15\u7528\u7684\u5916\u90E8\u53D8\u91CF\u662F\u7B2C\u4E00\u6B21\u521B\u5EFA\u662F\u5F15\u7528\u7684\u90A3\u4E2A\u4E0A\u4E0B\u6587\uFF0C\u4E4B\u540E\u65E0\u8BBA\u6267\u884C\u591A\u5C11\u6B21\uFF0C\u90FD\u53EA\u4F1A\u5F15\u7528\u7B2C\u4E00\u6B21\u6267\u884C\u6808\u7684\u4E0A\u4E0B\u6587\u3002\u5982\u679C deps \u76D1\u542C\u4E86\u67D0\u4E2A\u53D8\u91CF\uFF0C\u5219\u4F1A\u5728\u53D8\u91CF\u53D8\u5316\u65F6\uFF0C\u66F4\u65B0\u4E0A\u4E0B\u6587\u7684\u8C03\u7528\u6808\u3002</p>',10);function h(_,y){const p=a("TitleList"),o=a("ExternalLinkIcon");return c(),l("div",null,[t(p),v,m,n("p",null,[n("a",b,[g,t(o)])]),f])}var x=e(d,[["render",h],["__file","closure-trap.html.vue"]]);export{x as default};