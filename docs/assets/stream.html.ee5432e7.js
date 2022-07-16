import{_ as n,o as s,c as a,e as t}from"./app.033c9e78.js";const e={},c=t(`<h1 id="\u7406\u89E3node-stream\u6D41" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3node-stream\u6D41" aria-hidden="true">#</a> \u7406\u89E3node stream\u6D41</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Stream \u6709\u56DB\u79CD\u6D41\u7C7B\u578B\uFF1A
 * Readable - \u53EF\u8BFB\u64CD\u4F5C\u3002
 * Writable - \u53EF\u5199\u64CD\u4F5C\u3002
 * Duplex - \u53EF\u8BFB\u53EF\u5199\u64CD\u4F5C.
 * Transform - \u64CD\u4F5C\u88AB\u5199\u5165\u6570\u636E\uFF0C\u7136\u540E\u8BFB\u51FA\u7ED3\u679C\u3002
 * 
 * \u6240\u6709\u7684 Stream \u5BF9\u8C61\u90FD\u662F EventEmitter \u7684\u5B9E\u4F8B\u3002\u5E38\u7528\u7684\u4E8B\u4EF6\u6709\uFF1A
 * data - \u5F53\u6709\u6570\u636E\u53EF\u8BFB\u65F6\u89E6\u53D1\u3002
 * end - \u6CA1\u6709\u66F4\u591A\u7684\u6570\u636E\u53EF\u8BFB\u65F6\u89E6\u53D1\u3002
 * error - \u5728\u63A5\u6536\u548C\u5199\u5165\u8FC7\u7A0B\u4E2D\u53D1\u751F\u9519\u8BEF\u65F6\u89E6\u53D1\u3002
 * finish - \u6240\u6709\u6570\u636E\u5DF2\u88AB\u5199\u5165\u5230\u5E95\u5C42\u7CFB\u7EDF\u65F6\u89E6\u53D1\u3002
 * 
 */</span>

 <span class="token comment">// \u7BA1\u9053\u6D41 https://www.runoob.com/nodejs/nodejs-stream.html \u5B9E\u73B0\u5927\u6587\u4EF6\u590D\u5236\u8FC7\u7A0B</span>
 <span class="token comment">// \u94FE\u5F0F\u6D41 \u6587\u4EF6\u7684\u538B\u7F29\u548C\u89E3\u538B\u8FC7\u7A0B</span>

 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> __filename <span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">memoryUsage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">uptime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">hrtime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[c];function o(i,l){return s(),a("div",null,p)}var d=n(e,[["render",o],["__file","stream.html.vue"]]);export{d as default};
