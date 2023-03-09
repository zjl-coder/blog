import{_ as n,o as s,c as a,e as p}from"./app.10ac55eb.js";const e={},t=p(`<h1 id="\u6C42\u51FA\u548C\u6700\u5927\u7684\u8FDE\u7EED\u5B50\u6570\u7EC4\u7684\u4E0B\u6807" tabindex="-1"><a class="header-anchor" href="#\u6C42\u51FA\u548C\u6700\u5927\u7684\u8FDE\u7EED\u5B50\u6570\u7EC4\u7684\u4E0B\u6807" aria-hidden="true">#</a> \u6C42\u51FA\u548C\u6700\u5927\u7684\u8FDE\u7EED\u5B50\u6570\u7EC4\u7684\u4E0B\u6807</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getMaxSumArr</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u5047\u8BBE\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E0D\u9700\u8981\u4E0E\u5176\u4ED6\u5143\u7D20\u76F8\u52A0\u5373\u662F\u548C\u7684\u6700\u5927\u503C</span>
  <span class="token keyword">var</span> maxStart <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>   <span class="token comment">// \u5219\u5F00\u59CB\u7684\u4E0B\u6807\u4E3A0</span>
  <span class="token keyword">var</span> maxEnd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>     <span class="token comment">// \u5219\u7ED3\u675F\u4E0B\u6807\u4E3A0</span>
  <span class="token keyword">var</span> maxSum <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// \u6700\u5927\u548C\u4E3A\u7B2C\u4E00\u4E2A\u5143\u7D20</span>

  <span class="token keyword">var</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// \u6E38\u6807\uFF0C\u6807\u8BB0\u6709\u53EF\u80FD\u6210\u4E3A\u5F00\u59CB\u4E0B\u6807\u7684\u4E00\u4E2A\u6807\u91CF</span>

  <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// \u6240\u6C42\u7684\u548C</span>

  <span class="token comment">// \u5BF9\u6570\u7EC4\u8FDB\u884C\u5FAA\u73AF</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u6BCF\u4E2A\u5143\u7D20\u4E0E\u4E4B\u524D\u7684\u5143\u7D20\u548C\u8FDB\u884C\u76F8\u52A0</span>
    sum <span class="token operator">=</span> sum <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5224\u65AD\u662F\u5426\u5927\u4E8E\u539F\u6765\u7684\u6700\u5927\u503C</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> maxSum<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// \u5927\u4E8E\uFF0C\u5219\u8BBE\u7F6E\u65B0\u7684\u6700\u5927\u503C</span>
      maxSum <span class="token operator">=</span> sum<span class="token punctuation">;</span>
      <span class="token comment">// \u5E76\u5C06\u7ED3\u675F\u4E0B\u6807\u6807\u8BB0\u5728\u8BE5\u5143\u7D20\u4E0B\uFF0C\u8868\u793A\u5230\u76EE\u524D\u4E3A\u6B62\u53EF\u4EE5\u5F97\u5230\u7684\u6700\u5927\u503C\u7684\u4E0B\u6807</span>
      maxEnd <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u989D\u5916\u8BF4\u660E\uFF0C\u5982\u679C\u4E0B\u6807\u4E0D</span>

    <span class="token comment">// \u7ED3\u675F\u4E0B\u6807\u5982\u679C\u6BD4\u6E38\u6807\u5927\u6216\u7B49\u4E8E\uFF0C\u5219\u8868\u793A\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6E38\u6807\u5230\u7ED3\u675F\u4E0B\u6807\u4E4B\u95F4\u7684\u6570\u7EC4\u5143\u7D20\u548C\u662F\u6700\u5927\u503C\uFF0C</span>
    <span class="token comment">// \u5219\u5C06\u5F00\u59CB\u4E0B\u6807\u4E0E\u6E38\u6807\u8FDB\u884C\u540C\u6B65\uFF0C\u5426\u5219\uFF0C\u6E38\u6807\u6BD4\u7ED3\u675F\u4E0B\u6807\u5927\uFF0C\u5219\u8BF4\u660E\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6CA1\u6709\u8D85\u8FC7\u4E4B\u524D\u7684\u6700\u5927\u503C\uFF0C\u5F00\u59CB\u548C\u7ED3\u675F\u7684\u4E0B\u6807\u90FD\u6CA1\u6709\u53D8\u5316</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>maxEnd <span class="token operator">&gt;=</span> idx<span class="token punctuation">)</span><span class="token punctuation">{</span>
      maxStart <span class="token operator">=</span> idx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5982\u679C\u6240\u52A0\u4E4B\u548C\u51FA\u73B0\u5C0F\u4E8E0\u7684\u60C5\u51B5\uFF0C\u5219\u8BF4\u660E\u540E\u7EED\u76F8\u52A0\u7684\u5143\u7D20\u90FD\u4F1A\u6BD4\u4E0D\u52A0\u4E4B\u524D\u7684sum\u7684\u503C\u66F4\u5927\u3002</span>
    <span class="token comment">// \u6807\u660E\u8BE5\u5143\u7D20\u662F\u4E2A\u8D1F\u6570</span>
    <span class="token comment">// \u90A3\u4E48\u5C06sum\u7684\u548C\u7F6E\u96F6\uFF0C\u8868\u793A\u4ECE\u65B0\u5F00\u59CB\u7D2F\u52A0\uFF0C\u5982\u679C\u4E00\u76F4\u662F\u8D1F\u6570\uFF0C\u5219\u4E00\u76F4\u91CD\u7F6E\u96F6</span>
    <span class="token comment">// \u5C06\u6E38\u6807\u6807\u5411\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u5982\u679C\u4E00\u76F4\u662F\u8D1F\u6570\uFF0C\u5219\u4E00\u76F4\u5F80\u4E0B\u6807\uFF0C\uFF08\u867D\u7136\u4E00\u76F4\u5F80\u4E0B\u6807\uFF0C\u4F46\u662F\u5F00\u59CB\u548C\u7ED3\u675F\u7684\u4E0B\u6807\u4E0D\u4E00\u5B9A\u4F1A\u8DDF\u7740\u53D8\u5316\uFF09</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      idx <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>maxStart<span class="token punctuation">,</span> maxEnd<span class="token punctuation">,</span> maxSum<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">41</span><span class="token punctuation">,</span><span class="token number">59</span><span class="token punctuation">,</span><span class="token number">26</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">53</span><span class="token punctuation">,</span><span class="token number">58</span><span class="token punctuation">,</span><span class="token number">97</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">93</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">84</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token function">getMaxSumArr</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","1.html.vue"]]);export{r as default};