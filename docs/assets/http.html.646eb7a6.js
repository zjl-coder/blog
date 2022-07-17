import{_ as n,o as s,c as a,e}from"./app.6b9547a4.js";const t={},i=e(`<h1 id="\u7406\u89E3node-http" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3node-http" aria-hidden="true">#</a> \u7406\u89E3node http</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u5982\u679C\u6211\u4EEC\u4F7F\u7528 PHP \u6765\u7F16\u5199\u540E\u7AEF\u7684\u4EE3\u7801\u65F6\uFF0C
 * \u9700\u8981 Apache \u6216\u8005 Nginx \u7684 HTTP \u670D\u52A1\u5668\uFF0C
 * \u5E76\u914D\u4E0A mod_php5 \u6A21\u5757\u548C php-cgi\u3002
 * \u4ECE\u8FD9\u4E2A\u89D2\u5EA6\u770B\uFF0C\u6574\u4E2A&quot;\u63A5\u6536 HTTP \u8BF7\u6C42\u5E76\u63D0\u4F9B Web \u9875\u9762&quot;\u7684\u9700\u6C42\u5C31\u4E0D\u9700\u8981 PHP \u6765\u5904\u7406\u3002
 * 
 * 
 * \u4E0D\u8FC7\u5BF9 Node.js \u6765\u8BF4\uFF0C\u6982\u5FF5\u5B8C\u5168\u4E0D\u4E00\u6837\u4E86\u3002
 * \u4F7F\u7528 Node.js \u65F6\uFF0C\u6211\u4EEC\u4E0D\u4EC5\u4EC5 \u5728\u5B9E\u73B0\u4E00\u4E2A\u5E94\u7528\uFF0C
 * \u540C\u65F6\u8FD8\u5B9E\u73B0\u4E86\u6574\u4E2A HTTP \u670D\u52A1\u5668\u3002
 * \u4E8B\u5B9E\u4E0A\uFF0C\u6211\u4EEC\u7684 Web \u5E94\u7528\u4EE5\u53CA\u5BF9\u5E94\u7684 Web \u670D\u52A1\u5668\u57FA\u672C\u4E0A\u662F\u4E00\u6837\u7684\u3002
 * 
 * Node.js \u5E94\u7528\u662F\u7531\u54EA\u51E0\u90E8\u5206\u7EC4\u6210\u7684\uFF1A
 * [\u5F15\u5165 required \u6A21\u5757]\uFF1A\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 require \u6307\u4EE4\u6765\u8F7D\u5165 Node.js \u6A21\u5757\u3002
 * [\u521B\u5EFA\u670D\u52A1\u5668]\uFF1A\u670D\u52A1\u5668\u53EF\u4EE5\u76D1\u542C\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF0C\u7C7B\u4F3C\u4E8E Apache \u3001Nginx \u7B49 HTTP \u670D\u52A1\u5668\u3002
 * [\u63A5\u6536\u8BF7\u6C42\u4E0E\u54CD\u5E94\u8BF7\u6C42] \u670D\u52A1\u5668\u5F88\u5BB9\u6613\u521B\u5EFA\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668\u6216\u7EC8\u7AEF\u53D1\u9001 HTTP \u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u63A5\u6536\u8BF7\u6C42\u540E\u8FD4\u56DE\u54CD\u5E94\u6570\u636E\u3002
 * 
 */</span>

<span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u53D1\u9001 HTTP \u5934\u90E8 </span>
    <span class="token comment">// HTTP \u72B6\u6001\u503C: 200 : OK</span>
    <span class="token comment">// \u5185\u5BB9\u7C7B\u578B: text/plain</span>
    response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u53D1\u9001\u54CD\u5E94\u6570\u636E &quot;Hello World&quot;</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7EC8\u7AEF\u6253\u5370\u5982\u4E0B\u4FE1\u606F</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Server running at http://127.0.0.1:8888/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function c(l,o){return s(),a("div",null,p)}var d=n(t,[["render",c],["__file","http.html.vue"]]);export{d as default};
