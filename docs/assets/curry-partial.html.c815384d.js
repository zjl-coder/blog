import{_ as s,r as a,o as e,c as t,d as p,e as c}from"./app.89b298a7.js";const o={},i=c(`<h1 id="\u67EF\u91CC\u5316\u4E0E\u5C40\u90E8\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u67EF\u91CC\u5316\u4E0E\u5C40\u90E8\u5E94\u7528" aria-hidden="true">#</a> \u67EF\u91CC\u5316\u4E0E\u5C40\u90E8\u5E94\u7528</h1><h3 id="\u67EF\u91CC\u5316" tabindex="-1"><a class="header-anchor" href="#\u67EF\u91CC\u5316" aria-hidden="true">#</a> \u67EF\u91CC\u5316</h3><p>\u67EF\u91CC\u5316 (Currying) \u662F\u4E00\u79CD\u5C06\u4F7F\u7528\u591A\u4E2A\u53C2\u6570\u7684\u4E00\u4E2A\u51FD\u6570\u8F6C\u6362\u6210\u4E00\u7CFB\u5217\u4F7F\u7528\u4E00\u4E2A\u53C2\u6570\u7684\u51FD\u6570\u7684\u6280\u672F</p><h6 id="\u793A\u4F8B1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B1" aria-hidden="true">#</a> \u793A\u4F8B1</h6><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u67EF\u91CC\u5316</span>
<span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * const curriedSum = curry(sum)
 * curriedSum(1)(2)(3) // 6
 * /
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6790</strong></p><ol><li><code>curry(fn)</code> \u662F\u4E00\u4E2A\u8F6C\u6362\u5668\uFF0C\u5C06<code>sum()</code>\u53D8\u6210\u4E00\u4E2A\u53EF\u4EE5\u4E00\u6B21\u4F20\u4E00\u4E2A\u53C2\u6570\u7684\u51FD\u6570</li><li>\u5C06<code>sum</code>\u51FD\u6570\u7528\u5F62\u53C2<code>fn</code>\u7F13\u5B58\u8D77\u6765\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684<code>\u51FD\u6570(a)</code>\u63A5\u6536\u4E00\u4E2A\u53C2\u6570</li><li>\u7136\u540E<code>\u51FD\u6570(a)</code>\u6267\u884C\u4E4B\u540E\uFF0C\u5C31\u5C06\u63A5\u6536\u7684\u53C2\u6570\u7F13\u5B58\u5728<code>a</code>\u4E2D\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A<code>\u51FD\u6570(b)</code></li><li>\u91CD\u590D<strong>\u6B65\u9AA43</strong>\uFF0C\u76F4\u5230\u65B0<code>\u51FD\u6570(c)</code>\uFF0C\u63A5\u6536\u7740\u6700\u540E\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E76\u4E14\u5C06\u6240\u6709\u7F13\u5B58\u7684<code>\u53C2\u6570</code>\u4F20\u7ED9\u7F13\u5B58\u7684<code>\u51FD\u6570fn</code></li><li>\u5F97\u5230\u7ED3\u679C</li></ol><p><strong>\u95EE\u9898</strong>\uFF1A\u5982\u679C\u6BCF\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u957F\u5EA6\u90FD\u4E0D\u7EDF\u4E00\uFF0C\u600E\u4E48\u4F7F <code>curry</code> \u901A\u7528\u5316</p><h6 id="\u793A\u4F8B2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B2" aria-hidden="true">#</a> \u793A\u4F8B2</h6><p><strong>\u89E3\u51B3\u601D\u8DEF</strong><br> \u5173\u952E\u8BCD\uFF1A\u53C2\u6570 \u6570\u7EC4 apply</p><ol><li><code>curry(fn)</code> \u7F13\u5B58 <code>sum(...)</code></li><li>\u8FD4\u56DE\u4E00\u4E2A\u65B0<code>\u51FD\u6570(a)</code>\uFF0C\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF0C</li><li>\u5C06<code>\u51FD\u6570(a)</code>\u63A5\u6536\u5230\u7684\u53C2\u6570\u5B58\u5728 \u6570\u7EC4<code>arr</code>\u5185 <ul><li>a. \u5224\u65AD\u6570\u7EC4\u957F\u5EA6\uFF0C\u5982\u679C\u6570\u7EC4<code>arr</code>\u957F\u5EA6\u5927\u4E8E\u7B49\u4E8E <code>fn</code>\u53C2\u6570\u957F\u5EA6\uFF0C\u5219\u6267\u884C<code>fn.apply(arr)</code></li><li>b. \u5982\u679C\u6570\u7EC4<code>arr</code>\u957F\u5EA6\u5C0F\u4E8E <code>fn</code>\u53C2\u6570\u957F\u5EA6\uFF0C\u5219\u91CD\u590D<strong>\u6B65\u9AA42</strong></li></ul></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// fn \u53C2\u6570\u957F\u5EA6</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u67EF\u91CC\u5316\u9700\u8981\u8F6C\u5316\u4E3A\u4E00\u6B21\u4F20\u4E00\u4E2A\u53C2\u6570\uFF0C\u6240\u4EE5\u8FD8\u6CA1\u4F20\u5B8C\u7684\u53C2\u6570\u9700\u8981\u5148\u5B58\u8D77\u6765</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">curried</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \u95ED\u5305\u5F62\u5F0F\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u6536\u53C2\u6570\uFF0C\u5E76\u4E14\u7F13\u5B58\u5230 \u6570\u7EC4\u4E2D</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u6BCF\u6B21\u53EA\u53D6\u4E00\u4E2A\u53C2\u6570</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> length<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u7ED3\u679C</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> curried<span class="token punctuation">;</span> <span class="token comment">// \u5FAA\u73AF\u95ED\u5305</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C40\u90E8\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u5E94\u7528" aria-hidden="true">#</a> \u5C40\u90E8\u5E94\u7528</h3><p>\u504F\u51FD\u6570 (Partial application) \uFF1A\u53C8\u53EB\u5C40\u90E8\u5E94\u7528\uFF0C\u662F\u6307\u56FA\u5B9A\u4E00\u4E2A\u51FD\u6570\u7684\u4E00\u4E9B\u53C2\u6570\uFF0C\u7136\u540E\u4EA7\u751F\u53E6\u4E00\u4E2A\u66F4\u5C0F\u5143\u7684\u51FD\u6570\u3002</p><p>\u4EC0\u4E48\u662F\u5143\uFF1F\u5143\u662F\u6307\u51FD\u6570\u53C2\u6570\u7684\u4E2A\u6570\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5E26\u6709\u4E24\u4E2A\u53C2\u6570\u7684\u51FD\u6570\u88AB\u79F0\u4E3A\u4E8C\u5143\u51FD\u6570\u3002</p><h3 id="\u67EF\u91CC\u5316\u4E0E\u5C40\u90E8\u5E94\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u67EF\u91CC\u5316\u4E0E\u5C40\u90E8\u5E94\u7528-1" aria-hidden="true">#</a> \u67EF\u91CC\u5316\u4E0E\u5C40\u90E8\u5E94\u7528</h3><ul><li>\u67EF\u91CC\u5316\u662F\u5C06\u4E00\u4E2A\u591A\u53C2\u6570\u51FD\u6570\u8F6C\u6362\u6210\u591A\u4E2A\u5355\u53C2\u6570\u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u5C06\u4E00\u4E2A n \u5143\u51FD\u6570\u8F6C\u6362\u6210 n \u4E2A\u4E00\u5143\u51FD\u6570\u3002</li><li>\u5C40\u90E8\u5E94\u7528\u5219\u662F\u56FA\u5B9A\u4E00\u4E2A\u51FD\u6570\u7684\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u53C2\u6570\uFF0C\u4E5F\u5C31\u662F\u5C06\u4E00\u4E2A n \u5143\u51FD\u6570\u8F6C\u6362\u6210\u4E00\u4E2A n - x \u5143\u51FD\u6570\u3002</li></ul><h6 id="\u793A\u4F8B3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B3" aria-hidden="true">#</a> \u793A\u4F8B3</h6><p>\u504F\u51FD\u6570\u4E0E\u67EF\u91CC\u5316\u5F88\u76F8\u4F3C\uFF0C\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0C\u504F\u51FD\u6570\u8FD4\u56DE\u7684\u51FD\u6570\u4E00\u6B21\u53EF\u4EE5\u63A5\u6536 n \u4E2A\u53C2\u6570\uFF0C\u800C\u67EF\u91CC\u5316\u53EA\u80FD\u63A5\u6536\u4E00\u4E2A\u53C2\u6570</p><p>\u4F7F\u7528<strong>\u793A\u4F8B2</strong> \u8FDB\u884C\u7B80\u5316\u6539\u9020\u5373\u53EF\u5F97\u5230 \u5C40\u90E8\u5E94\u7528(\u504F\u51FD\u6570)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// fn \u53C2\u6570\u957F\u5EA6</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">curried</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \u95ED\u5305\u5F62\u5F0F\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u6536\u53C2\u6570\uFF0C\u5E76\u4E14\u7F13\u5B58\u5230\u5728\u53C2\u6570\u6570\u7EC4 args\u4E2D</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> length<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u7ED3\u679C</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">curried2</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\u63A5\u6536\u53C2\u6570\uFF0C\u4E0E\u4E0A\u5C42\u51FD\u6570\u7684\u53C2\u6570\u8FDB\u884C\u5408\u5E76</span>
        <span class="token keyword">return</span> <span class="token function">curried</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u5FAA\u73AF\u95ED\u5305</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function l(u,r){const n=a("TitleList");return e(),t("div",null,[p(n),i])}var k=s(o,[["render",l],["__file","curry-partial.html.vue"]]);export{k as default};
