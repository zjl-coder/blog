import{_ as l,r as t,o as i,c as r,d as a,a as n,w as u,b as s,e as p}from"./app.1c571ae5.js";var k="/blog/assets/sort.0e02a465.png";const d={},h=n("h1",{id:"\u6392\u5E8F\u7B97\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6392\u5E8F\u7B97\u6CD5","aria-hidden":"true"},"#"),s(" \u6392\u5E8F\u7B97\u6CD5")],-1),m={href:"https://www.cnblogs.com/onepixel/p/7674659.html",target:"_blank",rel:"noopener noreferrer"},v=s("\u5341\u5927\u7ECF\u5178\u6392\u5E8F\u7B97\u6CD5\uFF08\u52A8\u56FE\u6F14\u793A\uFF09"),b=p('<p><strong>\u7A33\u5B9A\u6027</strong></p><p>\u7A33\u5B9A\u6027\u7684\u610F\u601D\u5C31\u662F\u5BF9\u4E8E<strong>\u76F8\u540C\u503C</strong>\u6765\u8BF4\uFF0C\u76F8\u5BF9<strong>\u987A\u5E8F\u4E0D\u80FD\u6539\u53D8</strong>\u3002\u901A\u4FD7\u7684\u8BB2\u6709\u4E24\u4E2A<strong>\u76F8\u540C\u7684\u6570 A \u548C B</strong>\uFF0C\u5728\u6392\u5E8F\u4E4B\u524D A \u5728 B \u7684\u524D\u9762\uFF0C \u800C\u7ECF\u8FC7\u6392\u5E8F\u4E4B\u540E\uFF0CB \u8DD1\u5230\u4E86 A \u7684\u524D\u9762\uFF0C\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u6211\u4EEC\u7BA1\u4ED6\u53EB\u505A\u6392\u5E8F\u7684\u4E0D\u7A33\u5B9A\u6027\u3002</p><p><img src="'+k+'" alt="An image"></p><h3 id="\u5192\u6CE1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a> \u5192\u6CE1\u6392\u5E8F</h3><p>\u5C06\u76F8\u90BB\u7684\u4E24\u4E2A\u5143\u7D20\u8FDB\u884C\u6BD4\u8F83\uFF0C\u987A\u5E8F\u76F8\u53CD\u5219\u8FDB\u884C\u4F4D\u7F6E\u4EA4\u6362\uFF0C\u76F4\u5230\u5C06\u6700\u5927\uFF0C\u6216\u6700\u5C0F\u7684\u5143\u7D20\u63A8\u5230\u6700\u9876\u7AEF\u3002\u6BCF\u4E00\u8F6E\u6BD4\u8F83\u90FD\u4ECE\u5934\u5F00\u59CB\uFF0C\u5E76\u4E14\u6BCF\u6B21\u7684\u6B65\u957F\u52A01\u3002</p><p>\u590D\u6742\u5EA6\u4E3A O(n\xB2)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A O(1)<br> \u7A33\u5B9A\u6392\u5E8F</p><h3 id="\u9009\u62E9\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u6392\u5E8F" aria-hidden="true">#</a> \u9009\u62E9\u6392\u5E8F</h3><p>\u6BCF\u4E00\u8D9F\u4ECE\u5F85\u6392\u5E8F\u7684\u6570\u636E\u5143\u7D20\u4E2D\u9009\u62E9\u6700\u5C0F\uFF08\u6216\u6700\u5927\uFF09\u7684\u4E00\u4E2A\u5143\u7D20\u4E0E\u5F53\u524D\u5143\u7D20\u8FDB\u884C\u4F4D\u7F6E\u4EA4\u6362\uFF0C\u7136\u540E\u6B65\u957F\u52A01\uFF0C\u76F4\u5230\u6240\u6709\u5143\u7D20\u6392\u5B8C\u4E3A\u6B62\u3002</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n\xB2)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A O(1)<br> \u4E0D\u662F\u7A33\u5B9A\u6392\u5E8F</p><h3 id="\u63D2\u5165\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a> \u63D2\u5165\u6392\u5E8F</h3><p>\u5C06\u6BCF\u4E00\u4E2A\u5143\u7D20\u63D2\u5165\u5230\u524D\u9762\u6392\u597D\u5E8F\u7684\u5E8F\u5217\u4E2D\u53BB\uFF0C\u5177\u4F53\u64CD\u4F5C\u662F\uFF0C\u5C06\u5F53\u524D\u5143\u7D20n\u4E0E\u524D\u9762 [n-1,n-2 ... n-0] \u7684\u5143\u7D20\u6BD4\u8F83\uFF0C\u5982\u679C\u5C0F\u4E8E\uFF08\u6216\u5927\u4E8E\uFF09\u5219\u5C06 [n-1,n-2 ... n-0] \u7684\u5143\u7D20\u4F4D\u7F6E\u5F80\u540E\u632A\u4E00\u4F4D\uFF0C\u76F4\u5230\u6709\u5408\u9002\u7684\u7A7A\u51FA\u4F4D\u7F6E\uFF0C\u5B58\u5165\u5143\u7D20n</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n\xB2)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A O(1)<br> \u7A33\u5B9A\u6392\u5E8F</p><h3 id="\u5E0C\u5C14\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5E0C\u5C14\u6392\u5E8F" aria-hidden="true">#</a> \u5E0C\u5C14\u6392\u5E8F</h3>',13),g=s("\u63D2\u5165\u6392\u5E8F"),f=p(`\u7684\u4E00\u79CD\u4F18\u5316\u6392\u5E8F\uFF0C\u4F7F\u63D2\u5165\u6392\u5E8F\u66F4\u52A0\u9AD8\u6548\u3002 <p>\u5177\u4F53\u64CD\u4F5C\u662F\uFF1A</p><ul><li>\u5047\u8BBE\u6570\u7EC4\u957F\u5EA6\u4E3A10</li><li>\u6309\u7167\u6570\u7EC4\u7684\u957F\u5EA6\u8FDB\u884C\u5206\u7EC4\uFF0C\u6BD4\u5982\u6BCF\u4E24\u4E2A\u5143\u7D20\u4E3A1\u7EC4\uFF0C\u53EF\u4EE5\u5206\u4E3A5\u7EC4\uFF0C\u8FDB\u884C\u63D2\u5165\u6392\u5E8F</li><li>\u6392\u5E8F\u4E4B\u540E\uFF0C\u53C8\u5BF9\u6570\u7EC4\u8FDB\u884C<strong>\u589E\u91CF\u5206\u7EC4</strong>\uFF0C\u6BD4\u5982\u5206\u7EC4\u6570\u91CF\u51CF\u534A\uFF0C\u5219\u53EF\u4EE55/2\uFF0C\u5C06\u6570\u7EC4\u5206\u4E3A2\u7EC4\uFF0C\u56E0\u4E3A\u4E4B\u524D\u5DF2\u7ECF\u6709\u90E8\u5206\u6392\u597D\u5E8F\u4E86\uFF0C\u6240\u4EE5\u91CD\u65B0\u5206\u7684\u4E24\u7EC4\u5E8F\u5217\u5DF2\u7ECF\u6709\u90E8\u5206\u5143\u7D20\u6392\u597D\u5E8F\u4E86\uFF0C\u4E0D\u9700\u8981\u518D\u4EA4\u6362\u4F4D\u7F6E\uFF0C\u8FDB\u884C\u63D2\u5165\u6392\u5E8F\uFF0C\u901F\u5EA6\u6BD4\u8F83\u5FEB\u3002</li><li>\u76F4\u5230\u5C06\u589E\u91CF\u5206\u7EC4\u4E3A1\uFF0C\u5373\u4E0D\u518D\u5206\u7EC4\uFF0C\u76F4\u63A5\u5BF9\u6570\u7EC4\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6B64\u65F6\u5F88\u591A\u5143\u7D20\u5DF2\u7ECF\u6392\u597D\u5E8F\u4E86\uFF0C\u53EA\u6709\u5C11\u91CF\u7684\u5143\u7D20\u9700\u8981\u6362\u4F4D\u7F6E\uFF0C\u6240\u4EE5\u8FDB\u884C\u63D2\u5165\u6392\u5E8F\u7684\u6548\u7387\u53C8\u66F4\u9AD8\u4E86\u3002</li></ul><p>\u603B\u4E4B\uFF0C\u5E0C\u5C14\u6392\u5E8F\u7684\u76EE\u7684\u5C31\u662F\u5C3D\u91CF\u51CF\u5C11\u63D2\u5165\u6392\u5E8F\u65F6\uFF0C\u9700\u8981\u6EDA\u52A8\u5DF2\u6392\u597D\u5E8F\u7684\u6570\u7EC4\u7684\u6B21\u6570\u3002</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(nlogN)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A O(1)<br> \u4E0D\u662F\u7A33\u5B9A\u6392\u5E8F</p><h3 id="\u5F52\u5E76\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5F52\u5E76\u6392\u5E8F" aria-hidden="true">#</a> \u5F52\u5E76\u6392\u5E8F</h3><p>\u91C7\u7528\u7ECF\u5178\u7684\u5206\u6CBB\u7B56\u7565\u3002\u9012\u5F52\u7684\u5C06\u6570\u7EC4\u4E24\u4E24\u5206\u5F00\u76F4\u5230\u53EA\u5305\u542B\u4E00\u4E2A\u5143\u7D20\uFF0C\u7136\u540E \u5C06\u6570\u7EC4\u6392\u5E8F\u5408\u5E76\uFF0C\u6700\u7EC8\u5408\u5E76\u4E3A\u6392\u5E8F\u597D\u7684\u6570\u7EC4\u3002</p><p>\u5728\u9012\u5F52\u62C6\u5206\u6570\u7EC4\u4E4B\u540E\uFF0C\u6BCF\u6B21\u5BF9\u4E24\u4E2A\u6570\u7EC4\u540C\u65F6\u8FDB\u884C\u5FAA\u73AF\uFF0C\u6BD4\u8F83\u4E24\u4E2A\u6570\u7EC4\u7684\u5143\u7D20\uFF08\u540C\u4E00\u4E2A\u6570\u7EC4\u5DF2\u6392\u597D\u5E8F\uFF09\uFF0C\u8F83\u5C0F\u7684\u5148\u5B58\u5165\u65B0\u6570\u7EC4\u3002\u8F83\u5927\u7684\u90A3\u4E2A\u5143\u7D20\u4E0E\u53E6\u5916\u7684\u6570\u7EC4\u7684\u4E0B\u4E00\u4E2A\u5143\u7D20\u8FDB\u884C\u6BD4\u8F83\u3002\u5143\u7D20\u5B58\u5165\u540E\uFF0C\u5BF9\u5E94\u6570\u7EC4\u7684\u6E38\u6807 +1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> length <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C\u4E0D\u662F\u6570\u7EC4\u6216\u8005\u6570\u7EC4\u957F\u5EA6\u5C0F\u4E8E\u7B49\u4E8E0\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4E0D\u9700\u8981\u6392\u5E8F </span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token operator">||</span> length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> array<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>length <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u627E\u5230\u4E2D\u95F4\u7D22\u5F15\u503C</span>
    left <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u622A\u53D6\u5DE6\u534A\u90E8\u5206</span>
    right <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>mid<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u622A\u53D6\u53F3\u534A\u90E8\u5206</span>

  <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token function">mergeSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9012\u5F52\u5206\u89E3\u540E\uFF0C\u8FDB\u884C\u6392\u5E8F\u5408\u5E76</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">leftArray<span class="token punctuation">,</span> rightArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u7528\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u88C5\u6392\u5E8F\u7684\u5E8F\u5217</span>
  <span class="token keyword">let</span> leftLength <span class="token operator">=</span> leftArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> rightLength <span class="token operator">=</span> rightArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> il <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u5DE6\u6570\u7EC4\u6E38\u6807</span>
  <span class="token keyword">let</span> ir <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u53F3\u6570\u7EC4\u6E38\u6807</span>
  <span class="token comment">// \u5DE6\u53F3\u4E24\u4E2A\u6570\u7EC4\u7684\u5143\u7D20\u4F9D\u6B21\u6BD4\u8F83\uFF0C\u5C06\u8F83\u5C0F\u7684\u5143\u7D20\u52A0\u5165\u7ED3\u679C\u6570\u7EC4\u4E2D\uFF0C\u76F4\u5230\u5176\u4E2D\u4E00\u4E2A\u6570\u7EC4\u7684\u5143\u7D20\u5168\u90E8\u52A0\u5165\u5B8C\u5219\u505C\u6B62</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>il <span class="token operator">&lt;</span> leftLength <span class="token operator">&amp;&amp;</span> ir <span class="token operator">&lt;</span> rightLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftArray<span class="token punctuation">[</span>il<span class="token punctuation">]</span> <span class="token operator">&lt;</span> rightArray<span class="token punctuation">[</span>ir<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>leftArray<span class="token punctuation">[</span>il<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5DE6\u6570\u7EC4\u5143\u7D20\u88AB\u5B58\u5165\u540E\uFF0C\u5DE6\u6570\u7EC4\u6E38\u6807 + 1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rightArray<span class="token punctuation">[</span>ir<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53F3\u6570\u7EC4\u5143\u7D20\u88AB\u5B58\u5165\u540E\uFF0C\u53F3\u6570\u7EC4\u6E38\u6807 + 1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5982\u679C\u662F\u5DE6\u8FB9\u6570\u7EC4\u8FD8\u6709\u5269\u4F59\uFF0C\u5219\u628A\u5269\u4F59\u7684\u5143\u7D20\u5168\u90E8\u52A0\u5165\u5230\u7ED3\u679C\u6570\u7EC4\u4E2D\u3002</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>il <span class="token operator">&lt;</span> leftLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>leftArray<span class="token punctuation">[</span>il<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5982\u679C\u662F\u53F3\u8FB9\u6570\u7EC4\u8FD8\u6709\u5269\u4F59\uFF0C\u5219\u628A\u5269\u4F59\u7684\u5143\u7D20\u5168\u90E8\u52A0\u5165\u5230\u7ED3\u679C\u6570\u7EC4\u4E2D\u3002</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>ir <span class="token operator">&lt;</span> rightLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rightArray<span class="token punctuation">[</span>ir<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(nlogn)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A O(n)<br> \u7A33\u5B9A\u6392\u5E8F</p><h3 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a> \u5FEB\u901F\u6392\u5E8F</h3><p>\u5206\u6CBB\u7B56\u7565\u7684\u4E00\u79CD\uFF0C\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3A\u4E2D\u95F4\u5143\u7D20(\u4E00\u822C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5143\u7D20)\uFF0C\u5176\u4ED6\u5143\u7D20\u4E0E\u4E2D\u95F4\u5143\u7D20\u5143\u7D20\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5206\u6210\u4E24\u6570\u7EC4\uFF0C\u7136\u540E\u5BF9\u6570\u7EC4\u8FDB\u884C\u9012\u5F52\u5206\u6CBB\u3002\u5728\u9012\u5F52\u5B8C\u540E\uFF0C\u5BF9\u56DE\u5F52\u7684\u6570\u7EC4\u4E0E\u4E2D\u95F4\u503C\u8FDB\u884C\u7EC4\u5408 [...left, \u4E2D\u95F4\u5143\u7D20, ...right]\uFF0C\u5F97\u5230\u6392\u5E8F\u7ED3\u679C</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(nlogn)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A O(logn)<br> \u4E0D\u662F\u7A33\u5B9A\u6392\u5E8F</p><h3 id="\u5F52\u5E76\u4E0E\u5FEB\u6392\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u5F52\u5E76\u4E0E\u5FEB\u6392\u533A\u522B" aria-hidden="true">#</a> \u5F52\u5E76\u4E0E\u5FEB\u6392\u533A\u522B</h3><ul><li>\u3010\u5F52\u5E76\u6392\u5E8F\u3011\u5728\u5BF9\u6570\u7EC4\u5206\u6CBB\u65F6\uFF0C\u4E0D\u5148\u9009\u53D6\u4E2D\u95F4\u503C\u8FDB\u884C\u5DE6\u5C0F\u53F3\u5927\u5206\u6CBB\uFF0C\u800C\u5728\u5206\u6CBB\u6570\u7EC4\u4E2D\u8FDB\u884C\u5143\u7D20\u6BD4\u8F83</li><li>\u3010\u5FEB\u901F\u6392\u5E8F\u3011\u662F\u9009\u62E9\u4E00\u4E2A\u4E2D\u95F4\u503C <strong>n/2</strong>\uFF0C\u6570\u7EC4\u8FDB\u884C\u9012\u5F52\u4E8C\u5206\u5206\u6CBB\u65F6\uFF0C\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E0E<strong>n/2</strong>\u5143\u6BD4\u8F83\uFF0C\u8F83\u5C0F\u7684\u5143\u7D20\u653E\u5DE6\u8FB9\uFF0C\u957F\u5EA6\u4E3A <strong>n/2 - 1</strong>\uFF0C\u8F83\u5927\u7684\u653E\u53F3\u8FB9\uFF0C\u957F\u5EA6\u4E3A <strong>n/2 + 1</strong>\uFF0C\u7136\u540E\u8FDB\u884C\u6570\u7EC4\u62FC\u63A5 [...[n/2 - 1], n/2, ...n/2 + 1]\u3002</li></ul><h3 id="\u5806\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5806\u6392\u5E8F" aria-hidden="true">#</a> \u5806\u6392\u5E8F</h3>`,16),_={href:"https://www.cnblogs.com/chengxiao/p/6129630.html",target:"_blank",rel:"noopener noreferrer"},y=s("\u56FE\u89E3\u6392\u5E8F\u7B97\u6CD5\xB7\u5806\u6392\u5E8F"),w=n("br",null,null,-1),x=s(" \u5728\u6570\u7EC4\u4E2D\u8868\u793A\u4E8C\u53C9\u6811\u7684 \u516C\u793A arr[i] \u7684left\u5143\u7D20 arr[2i+1] \uFF0Cright\u5143\u7D20 arr[2i+2]"),O=p('<p>\u5173\u952E\u516C\u5F0F</p><p>\u5927\u9876\u5806\uFF1A<code>arr[i] &gt;= arr[2i+1] &amp;&amp; arr[i] &gt;= arr[2i+2]</code></p><p>\u5C0F\u9876\u5806\uFF1A<code>arr[i] &lt;= arr[2i+1] &amp;&amp; arr[i] &lt;= arr[2i+2]</code></p><p>\u6700\u540E\u4E00\u4E2A\u975E\u53F6\u5B50\u8282\u70B9\uFF1A<code>parseInt(arr.length / 2) - 1</code></p><p>\u5806\u5143\u7D20\u7684\u76EE\u7684\u662F\u6784\u9020\u5927\u9876\u5806\uFF0C\u901A\u8FC7\u5927\u9876\u5806\u6765\u6392\u5E8F</p><p>\u4ECE\u6700\u540E\u4E00\u4E2A\u975E\u53F6\u5B50\u8282\u70B9\u5F00\u59CB\uFF0C\u904D\u5386\u6BCF\u4E2A\u975E\u53F6\u5B50\u8282\u70B9\uFF0C\u5C06\u975E\u53F6\u5B50\u8282\u70B9\u4E0E\u5B83\u7684\u5DE6\u53F3\u8282\u70B9\u5143\u7D20\u8FDB\u884C\u6BD4\u8F83\u4EA4\u6362\u4F4D\u7F6E\uFF0C\u6700\u7EC8\u5F97\u5230\u8DDF\u8282\u70B9\u5143\u7D20(\u4E0B\u6807\u4E3A0\u7684\u5143\u7D20)\u6700\u5927\u3002</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(nlogn)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A O(1)<br> \u4E0D\u662F\u7A33\u5B9A\u6392\u5E8F</p><h3 id="\u5806\u6392\u5E8F\u4E0E\u9009\u62E9\u6392\u5E8F\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u5806\u6392\u5E8F\u4E0E\u9009\u62E9\u6392\u5E8F\u7684\u533A\u522B" aria-hidden="true">#</a> \u5806\u6392\u5E8F\u4E0E\u9009\u62E9\u6392\u5E8F\u7684\u533A\u522B</h3><p>\u9009\u62E9\u6392\u5E8F\u662F\u76F4\u63A5\u4ECE\u5F85\u6392\u5E8F\u6570\u7EC4\u4E2D\u9009\u62E9\u6700\u5927\u6216\u6700\u5C0F\u503C\u4E0E\u5F53\u524D\u5143\u7D20\u8FDB\u884C\u4F4D\u7F6E\u4EA4\u6362\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4E0D\u9700\u8981\u6784\u9020\u5806</p><h3 id="\u57FA\u6570\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u57FA\u6570\u6392\u5E8F" aria-hidden="true">#</a> \u57FA\u6570\u6392\u5E8F</h3><ol><li>\u5BF9\u6570\u7EC4\u7684\u6BCF\u4E2A\u5143\u7D20\uFF0C\u90FD\u6309\u7167\u4F4D\u8FDB\u884C\u6392\u5E8F</li><li>\u9009\u62E9\u9488\u5BF9\u5143\u7D20\u7684\u4E2A\u4F4D\u6570\u8FDB\u884C\u6BD4\u8F83\uFF0C\u6392\u5E8F \u5F97\u5230\u65B0\u7684\u6392\u5E8F\u6570\u7EC4\uFF0C</li><li>\u7136\u540E\u5BF9\u65B0\u6570\u7EC4\u7684\u5341\u4F4D\u6570\u8FDB\u884C\u6BD4\u8F83\u6392\u5E8F\uFF0C\u5F97\u5230\u65B0\u7684\u6570\u7EC4\uFF0C\u5C0F\u4E8E\u5341\u7684\u5143\u7D20\uFF0C\u5219\u5341\u4F4D\u7F6E\u4E3A0\uFF0C</li><li>\u7136\u540E\u518D\u5BF9\u65B0\u6570\u7EC4\u7684 \u767E\u4F4D\u6570\u8FDB\u884C\u6BD4\u8F83\u6392\u5E8F\uFF0C\u5F97\u5230\u65B0\u7684\u6570\u7EC4\uFF0C\u5C0F\u4E8E\u767E\u7684\u5143\u7D20\uFF0C\u5219\u767E\u4F4D\u7F6E\u4E3A0\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u76F4\u5230\u904D\u5386\u5B8C\u6700\u9AD8\u4F4D\u6570\u957F\u5EA6\uFF0C\u5F97\u5230\u6392\u597D\u7684\u5E8F\u5217\u3002</li></ol><p>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(nk)\uFF0Ck \u4E3A\u6700\u5927\u5143\u7D20\u7684\u957F\u5EA6<br> \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A O(n)<br> \u7A33\u5B9A\u6392\u5E8F</p><h3 id="\u8BA1\u6570\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u6570\u6392\u5E8F" aria-hidden="true">#</a> \u8BA1\u6570\u6392\u5E8F</h3><ul><li>\u6570\u7EC4\u6709\u786E\u5B9A\u8303\u56F4</li><li>\u627E\u51FA\u5F85\u6392\u5E8F\u6570\u7EC4\u7684\u6700\u5927\u548C\u6700\u5C0F\u5143\u7D20</li><li>\u4EE5\u6700\u5C0F\u5143\u7D20\u4E3A\u5F00\u59CB\u952E\uFF0C\u5230\u6700\u5927\u5143\u7D20\u4E3A\u7ED3\u675F\u5EFA\uFF0C\u6784\u9020map\uFF08\u5982\u6700\u5C0F\u5143\u7D20\u662F3\uFF0C\u6700\u5927\u5143\u7D20\u662F10\uFF0C\u5219\u6784\u9020<code>map = {4: 0, 5: 0, 6: 0 ... 10: 0}</code></li><li>\u5C06\u5F85\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u5143\u7D20\u904D\u5386\u8BA1\u6570\uFF0C\u7136\u540E\u5728\u5BF9\u5E94\u7684map key \u4E2D \u589E\u52A0\u7D2F\u8BA1\u503C\u3002</li><li>\u5C06\u7D2F\u8BA1\u597D\u4E4B\u540E\u7684map \u6309\u7167key \u4EE5\u53CAkey\u7684\u6B21\u6570\uFF0C\u8F93\u51FA\u5230\u6570\u7EC4\u4E2D\uFF0C\u5F97\u5230\u65B0\u6392\u5E8F\u6570\u7EC4\u3002</li></ul><p>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(n+k)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3AO(n+k) \u4E0D\u662F\u7A33\u5B9A\u6392\u5E8F</p><h3 id="\u6876\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6876\u6392\u5E8F" aria-hidden="true">#</a> \u6876\u6392\u5E8F</h3><p>\u8BA1\u6570\u6392\u5E8F\u7684\u4E00\u79CD\u5347\u7EA7\u7248\uFF0C\u4F7F\u7528\u5206\u6CBB\u65B9\u5F0F\u8FDB\u884C\u8BA1\u6570\u6392\u5E8F</p><p>[0,2,1,9,53,2,232,43,234,1,22,43]</p><ul><li>\u5BF9\u5F85\u6392\u5E8F\u6570\u7EC4\u5206\u6CBB(\u5206\u6876) <ul><li>\u5BF9\u4E8E\u4E00\u4F4D\u6570\u5143\u7D20\uFF0C\u5206\u4E3A\u4E00\u6876\uFF0C\u8FDB\u884C\u6392\u5E8F(\u5373 \u767E\u4F4D\u4E3A0\uFF0C\u5341\u4F4D\u4E3A0\u7684\u6876)</li><li>\u5BF9\u4E8E\u4E8C\u4F4D\u6570\u5143\u7D20\uFF0C\u5206\u4E3A10\u6876\uFF0C\u5206\u522B\u8FDB\u884C\u6392\u5E8F(\u5373 \u767E\u4F4D\u4E3A0\uFF0C\u5341\u4F4D\u4E3A1,2,3 ... 9\u7684\u6876)</li><li>\u5BF9\u4E8E\u4E09\u4F4D\u6570\u5143\u7D20\uFF0C\u5206\u4E3A100\u6876\uFF0C\u5206\u522B\u8FDB\u884C\u6392\u5E8F(\u5373 \u767E\u4F4D\u4E3A1,2,3 ... 9\u7684\u6876)\uFF0C\u518D\u5BF9\u6BCF\u4E2A\u6876\u8FDB\u884C\u7EC6\u5206\uFF0C\u6309\u7167\u5341\u4F4D\u8FDB\u884C\u5206\u6876(\u5341\u4F4D\u4E3A0,1,2,3 ... 9\u7684\u6876)</li><li>\u6700\u540E\u628A\u4E0D\u7A7A\u7684\u6876\u62FC\u63A5\u8D77\u6765</li></ul></li></ul><p>\u4EE5\u4E0A\u53EA\u662F\u5206\u6876\u7684\u4E00\u79CD\u7B56\u7565\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u7528\u5206\u8FD9\u4E48\u7EC6\uFF0C\u6216\u8005\u6362\u79CD\u65B9\u5F0F\u5206\u6876\uFF0C\u4E0D\u540C\u7684\u7B56\u7565\u5BF9\u6392\u5E8F\u7684\u7A7A\u95F4\u590D\u6742\u5EA6\u548C\u6027\u80FD\u5F71\u54CD\u90FD\u5F88\u5927\u3002<br> \u65F6\u95F4\u590D\u6742\u5EA6 O(n)<br> \u4E0D\u662F\u7A33\u5B9A\u6392\u5E8F</p>',20);function A(L,B){const o=t("TitleList"),e=t("ExternalLinkIcon"),c=t("Te");return i(),r("div",null,[a(o),h,n("p",null,[n("a",m,[v,a(e)])]),b,a(c,{d:""},{default:u(()=>[g]),_:1}),f,n("p",null,[n("a",_,[y,a(e)]),w,x]),O])}var T=l(d,[["render",A],["__file","sort.html.vue"]]);export{T as default};
