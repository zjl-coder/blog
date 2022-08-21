import{_ as l,r as o,o as u,c as r,d as a,a as s,w as e,e as p,b as n}from"./app.1c1deeab.js";var d="/blog/assets/wp14.c7cee66f.png",k="/blog/assets/wp15.de28d634.png",m="/blog/assets/wp18.67ef6f12.png",h="/blog/assets/wp19.ece55a64.png";const v={},b=p(`<h1 id="webpack-plugin\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#webpack-plugin\u63D2\u4EF6" aria-hidden="true">#</a> webpack plugin\u63D2\u4EF6</h1><h3 id="\u63D2\u4EF6\u4E09\u95EE" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u4E09\u95EE" aria-hidden="true">#</a> \u63D2\u4EF6\u4E09\u95EE</h3><ul><li>WHAT: \u4EC0\u4E48\u662F\u63D2\u4EF6</li><li>WHEN: \u4EC0\u4E48\u65F6\u95F4\u70B9\u4F1A\u6709\u4EC0\u4E48\u94A9\u5B50\u88AB\u89E6\u53D1</li><li>HOW: \u5728\u94A9\u5B50\u56DE\u8C03\u4E2D\uFF0C\u5982\u4F55\u5F71\u54CD\u7F16\u8BD1\u72B6\u6001</li></ul><h3 id="\u4EC0\u4E48\u662F\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u63D2\u4EF6" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u63D2\u4EF6</h3><p>webpack \u7684\u63D2\u4EF6\u67B6\u6784\u7C7B\u4F3C\u201C\u4E8B\u4EF6/\u8BA2\u9605\u201D\u6A21\u5F0F\uFF0C\u4F46\u53C8\u4E0D\u5B8C\u5168\u4E00\u6837\u3002</p><p>\u8BA2\u9605\u6A21\u5F0F\u662F\u4E00\u79CD<strong>\u677E\u8026\u5408\u67B6\u6784</strong>\uFF0C\u53D1\u5E03\u5668\u53EA\u662F\u5728\u7279\u5B9A\u65F6\u673A\u53D1\u5E03\u4E8B\u4EF6\u6D88\u606F\uFF0C\u8BA2\u9605\u8005\u5E76\u4E0D\u6216\u8005\u5F88\u5C11\u4E0E\u4E8B\u4EF6\u76F4\u63A5\u53D1\u751F\u4EA4\u4E92\uFF0C<strong>\u5F88\u5C11\u8C03\u7528\u4E0A\u4E0B\u6587</strong>\u64CD\u4F5C\u3002</p><p>webpack \u7684\u94A9\u5B50\u4F53\u7CFB\u662F\u4E00\u79CD<strong>\u5F3A\u8026\u5408\u67B6\u6784</strong>\uFF0C\u5B83\u5728\u7279\u5B9A\u65F6\u673A\u89E6\u53D1\u94A9\u5B50\u65F6\u4F1A<strong>\u9644\u5E26</strong>\u4E0A\u8DB3\u591F\u7684<strong>\u4E0A\u4E0B\u6587\u4FE1\u606F</strong>\uFF0C\u63D2\u4EF6\u5B9A\u4E49\u7684\u94A9\u5B50\u56DE\u8C03\u4E2D\uFF0C\u80FD\u4E5F\u53EA\u80FD\u4E0E\u8FD9\u4E9B\u4E0A\u4E0B\u6587\u80CC\u540E\u7684\u6570\u636E\u7ED3\u6784\u3001\u63A5\u53E3\u4EA4\u4E92<strong>\u4EA7\u751F side effect</strong>\uFF0C\u8FDB\u800C<strong>\u5F71\u54CD\u5230\u7F16\u8BD1\u72B6\u6001\u548C\u540E\u7EED\u6D41\u7A0B</strong>\u3002</p><h6 id="\u63D2\u4EF6\u7684\u5F62\u6001" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u7684\u5F62\u6001" aria-hidden="true">#</a> \u63D2\u4EF6\u7684\u5F62\u6001</h6><p>\u4ECE\u5F62\u6001\u4E0A\u770B\uFF0C\u63D2\u4EF6\u901A\u5E38\u662F\u4E00\u4E2A\u5E26\u6709 apply \u51FD\u6570\u7684\u7C7B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">SomePlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),_=s("code",null,"apply",-1),g=n(" \u51FD\u6570\u8FD0\u884C\u65F6\u4F1A\u5F97\u5230\u53C2\u6570 "),f=s("code",null,"compiler",-1),y=n(" \uFF0C\u4EE5\u6B64\u4E3A"),w=n("\u8D77\u70B9"),x=n("\u53EF\u4EE5\u8C03\u7528 hook \u5BF9\u8C61"),E=n("\u6CE8\u518C(\u76D1\u542C)"),j=n("\u5404\u79CD\u94A9\u5B50\u56DE\u8C03\uFF0C\u4F8B\u5982\uFF1A "),q=s("code",null,"compiler.hooks.make.tapAsync",-1),A=n(" \uFF0C\u8FD9\u91CC\u9762 make \u662F\u94A9\u5B50\u540D\u79F0\uFF0CtapAsync \u5B9A\u4E49\u4E86\u94A9\u5B50\u7684\u8C03\u7528\u65B9\u5F0F\uFF0Cwebpack \u7684\u63D2\u4EF6\u67B6\u6784\u57FA\u4E8E\u8FD9\u79CD\u6A21\u5F0F\u6784\u5EFA\u800C\u6210\uFF0C\u63D2\u4EF6\u5F00\u53D1\u8005\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u6A21\u5F0F\u5728\u94A9\u5B50\u56DE\u8C03\u4E2D\uFF0C\u63D2\u5165\u7279\u5B9A\u4EE3\u7801\u3002"),P=n("webpack \u5404\u79CD\u5185\u7F6E\u5BF9\u8C61\u90FD\u5E26\u6709 hooks \u5C5E\u6027\uFF0C\u6BD4\u5982 "),T=s("code",null,"compilation",-1),z=n(" \u5BF9\u8C61("),H=n("\u4E0D\u6B62compiler\u5E26\u6709hooks\u5C5E\u6027"),M=n(")"),S=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">SomePlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>thisCompilation<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;SomePlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          compilation<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>optimizeChunkAssets<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">&#39;SomePlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),N=n("\u94A9\u5B50\u7684\u6838\u5FC3\u903B\u8F91\u5B9A\u4E49\u5728 "),C={href:"https://github.com/webpack/tapable",target:"_blank",rel:"noopener noreferrer"},W=n("Tapable"),B=n(" \u4ED3\u5E93\uFF0C\u5185\u90E8\u5B9A\u4E49\u4E86\u5982\u4E0B\u7C7B\u578B\u7684\u94A9\u5B50"),L=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  SyncHook<span class="token punctuation">,</span>
  SyncBailHook<span class="token punctuation">,</span>
  SyncWaterfallHook<span class="token punctuation">,</span>
  SyncLoopHook<span class="token punctuation">,</span>
  AsyncParallelHook<span class="token punctuation">,</span>
  AsyncParallelBailHook<span class="token punctuation">,</span>
  AsyncSeriesHook<span class="token punctuation">,</span>
  AsyncSeriesBailHook<span class="token punctuation">,</span>
  AsyncSeriesWaterfallHook
 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;tapable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u540C\u7C7B\u578B\u7684\u94A9\u5B50\u6839\u636E\u5176\u5E76\u884C\u5EA6\u3001\u7194\u65AD\u65B9\u5F0F\u3001\u540C\u6B65\u5F02\u6B65\uFF0C\u8C03\u7528\u65B9\u5F0F\u4F1A\u7565\u6709\u4E0D\u540C\uFF0C\u63D2\u4EF6\u5F00\u53D1\u8005\u9700\u8981\u6839\u636E\u8FD9\u4E9B\u7684\u7279\u6027\uFF0C\u7F16\u5199\u4E0D\u540C\u7684\u4EA4\u4E92\u903B\u8F91</p><h3 id="\u4EC0\u4E48\u65F6\u5019\u4F1A\u89E6\u53D1\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u65F6\u5019\u4F1A\u89E6\u53D1\u94A9\u5B50" aria-hidden="true">#</a> \u4EC0\u4E48\u65F6\u5019\u4F1A\u89E6\u53D1\u94A9\u5B50</h3><p>\u6E90\u7801\u91CC\u9762\u6709237\u4E2A\u94A9\u5B50\uFF0C\u4F46\u5B98\u7F51\u53EA\u4ECB\u7ECD\u4E86\u4E0D\u5230100\u4E2A\uFF0C\u4E14\u5B98\u7F51\u5BF9\u6BCF\u4E2A\u94A9\u5B50\u7684\u8BF4\u660E\u90FD\u592A\u7B80\u77ED</p><h6 id="\u94A9\u5B50\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50\u793A\u4F8B" aria-hidden="true">#</a> \u94A9\u5B50\u793A\u4F8B</h6><ul><li><code>compiler.hooks.compilation</code> \uFF1A <ul><li>\u65F6\u673A\uFF1A\u542F\u52A8\u7F16\u8BD1\u521B\u5EFA\u51FA compilation \u5BF9\u8C61\u540E\u89E6\u53D1</li><li>\u53C2\u6570\uFF1A\u5F53\u524D\u7F16\u8BD1\u7684 compilation \u5BF9\u8C61</li><li>\u793A\u4F8B\uFF1A\u5F88\u591A\u63D2\u4EF6\u57FA\u4E8E\u6B64\u4E8B\u4EF6\u83B7\u53D6 compilation \u5B9E\u4F8B</li></ul></li><li><code>compiler.hooks.make</code>\uFF1A <ul><li>\u65F6\u673A\uFF1A\u6B63\u5F0F\u5F00\u59CB\u7F16\u8BD1\u65F6\u89E6\u53D1</li><li>\u53C2\u6570\uFF1A\u540C\u6837\u662F\u5F53\u524D\u7F16\u8BD1\u7684 compilation \u5BF9\u8C61</li><li>\u793A\u4F8B\uFF1Awebpack \u5185\u7F6E\u7684 EntryPlugin \u57FA\u4E8E\u6B64\u94A9\u5B50\u5B9E\u73B0 entry \u6A21\u5757\u7684\u521D\u59CB\u5316</li></ul></li><li><code>compilation.hooks.optimizeChunks</code> \uFF1A <ul><li>\u65F6\u673A\uFF1A seal \u51FD\u6570\u4E2D\uFF0Cchunk \u96C6\u5408\u6784\u5EFA\u5B8C\u6BD5\u540E\u89E6\u53D1</li><li>\u53C2\u6570\uFF1Achunks \u96C6\u5408\u4E0E chunkGroups \u96C6\u5408</li><li>\u793A\u4F8B\uFF1A SplitChunksPlugin \u63D2\u4EF6\u57FA\u4E8E\u6B64\u94A9\u5B50\u5B9E\u73B0 chunk \u62C6\u5206\u4F18\u5316</li></ul></li><li><code>compiler.hooks.done</code>\uFF1A <ul><li>\u65F6\u673A\uFF1A\u7F16\u8BD1\u5B8C\u6210\u540E\u89E6\u53D1</li><li>\u53C2\u6570\uFF1A stats \u5BF9\u8C61\uFF0C\u5305\u542B\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u7684\u5404\u7C7B\u7EDF\u8BA1\u4FE1\u606F</li><li>\u793A\u4F8B\uFF1A webpack-bundle-analyzer \u63D2\u4EF6\u57FA\u4E8E\u6B64\u94A9\u5B50\u5B9E\u73B0\u6253\u5305\u5206\u6790</li></ul></li></ul><h3 id="\u94A9\u5B50\u5B66\u4E60\u4E09\u8981\u7D20" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50\u5B66\u4E60\u4E09\u8981\u7D20" aria-hidden="true">#</a> \u94A9\u5B50\u5B66\u4E60\u4E09\u8981\u7D20</h3><ul><li>\u89E6\u53D1\u65F6\u673A</li><li>\u4F20\u9012\u53C2\u6570</li><li>\u793A\u4F8B\u4EE3\u7801</li></ul><h4 id="\u89E6\u53D1\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1\u65F6\u673A" aria-hidden="true">#</a> \u89E6\u53D1\u65F6\u673A</h4><p>\u89E6\u53D1\u65F6\u673A\u4E0E webpack \u5DE5\u4F5C\u8FC7\u7A0B\u7D27\u5BC6\u76F8\u5173\uFF0C\u5927\u4F53\u4E0A\u4ECE\u542F\u52A8\u5230\u7ED3\u675F\uFF0Ccompiler \u5BF9\u8C61\u9010\u6B21\u89E6\u53D1\u5982\u4E0B\u94A9\u5B50</p><h6 id="compiler\u94A9\u5B50\u89E6\u53D1\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#compiler\u94A9\u5B50\u89E6\u53D1\u987A\u5E8F" aria-hidden="true">#</a> compiler\u94A9\u5B50\u89E6\u53D1\u987A\u5E8F</h6><p><img src="`+d+'" alt="An image"></p><h6 id="compilation\u94A9\u5B50\u89E6\u53D1\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#compilation\u94A9\u5B50\u89E6\u53D1\u987A\u5E8F" aria-hidden="true">#</a> compilation\u94A9\u5B50\u89E6\u53D1\u987A\u5E8F</h6><p>\u800C compilation \u5BF9\u8C61\u9010\u6B21\u89E6\u53D1 <img src="'+k+'" alt="An image"></p><h6 id="compiler\u4E0Ecompilation\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#compiler\u4E0Ecompilation\u987A\u5E8F" aria-hidden="true">#</a> compiler\u4E0Ecompilation\u987A\u5E8F</h6><p>\u4ECE\u4E0A\u56FE\u53EF\u4EE5\u770B\u5230\uFF0C<code>compiler.hooks.make</code> \u6267\u884C\u4E4B\u540E\uFF0C\u5C31\u8FDB\u5165 <code>compilation.addEntry</code> \u5165\u53E3 \u76F4\u5230 <code>compilation.processModuleDependencies</code> \u9000\u51FA <strong>compilation \u9636\u6BB5</strong> \u5C06\u6267\u884C\u6743\u4EA4\u8FD8\u7ED9 <strong>compiler</strong>\uFF0C compiler \u4ECE <code>compiler.hooks.finishMake</code> \u5F00\u59CB\u6267\u884C\u5269\u4E0B\u7684\u751F\u547D\u5468\u671F\u3002</p>',16),O=s("code",null,"compilation.processModuleDependencies",-1),D=n(" \u4F9D\u636E\u4E0A\u4E0B\u6587\u60C5\u51B5\u6709\u53EF\u80FD\u8C03\u7528 "),F=s("code",null,"compilation.addEntry",-1),V=n(" \u8FDB\u5165 "),I=s("strong",null,"compilation \u9636\u6BB5",-1),R=n("\u7684"),G=n("\u5FAA\u73AF"),J=p(`<h4 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h4><p>\u4F20\u9012\u53C2\u6570\u4E0E\u5177\u4F53\u7684\u94A9\u5B50\u5F3A\u76F8\u5173</p><p><strong>\u793A\u4F8B</strong></p><p><code>compilation.hooks.optimizeTree</code> \u53EF\u4EE5\u5728 webpack \u6E90\u7801\u4E2D\u641C\u7D22 hooks.optimizeTree.call \u5173\u952E\u5B57\uFF0C\u5C31\u53EF\u4EE5\u627E\u5230\u8C03\u7528\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// lib/compilation.js#2297</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>optimizeTree<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>chunks<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modules<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u5408\u4EE3\u7801\u6240\u5728\u7684\u4E0A\u4E0B\u6587\uFF0C\u53EF\u4EE5\u5224\u65AD\u51FA\u6B64\u65F6\u4F20\u9012\u7684\u662F\u7ECF\u8FC7\u4F18\u5316\u7684 <strong>chunks</strong> \u53CA <strong>modules</strong> \u96C6\u5408\u3002</p><h4 id="\u627E\u5230\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u627E\u5230\u793A\u4F8B" aria-hidden="true">#</a> \u627E\u5230\u793A\u4F8B</h4><p>Webpack \u7684\u94A9\u5B50\u590D\u6742\u7A0B\u5EA6\u4E0D\u4E00\uFF0C\u6211\u8BA4\u4E3A\u6700\u597D\u7684\u5B66\u4E60\u65B9\u6CD5\u8FD8\u662F\u5E26\u7740\u76EE\u7684\u53BB\u67E5\u8BE2\u5176\u4ED6\u63D2\u4EF6\u4E2D\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u94A9\u5B50\u3002\u4F8B\u5982\uFF0C\u5728 <code>compilation.seal</code> \u51FD\u6570\u5185\u90E8\u6709 <strong>optimizeModules</strong> \u548C <strong>afterOptimizeModules</strong> \u8FD9\u4E00\u5BF9\u770B\u8D77\u6765\u5F88\u5BF9\u5076\u7684\u94A9\u5B50\uFF0CoptimizeModules \u4ECE\u5B57\u9762\u4E0A\u53EF\u4EE5\u7406\u89E3\u4E3A\u7528\u4E8E\u4F18\u5316\u5DF2\u7ECF\u7F16\u8BD1\u51FA\u7684 modules \uFF0C\u90A3 afterOptimizeModules \u5462\uFF1F</p><p>\u4ECE webpack \u6E90\u7801\u4E2D\u552F\u4E00\u641C\u7D22\u5230\u7684\u7528\u9014\u662F ProgressPlugin \uFF0C\u5927\u4F53\u4E0A\u903B\u8F91\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>compilation<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>afterOptimizeModules<span class="token punctuation">.</span><span class="token function">intercept</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ProgressPlugin&quot;</span><span class="token punctuation">,</span>
  <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handler</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> <span class="token string">&quot;sealing&quot;</span><span class="token punctuation">,</span> title<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    progressReporters<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>compiler<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">handler</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> <span class="token string">&quot;sealing&quot;</span><span class="token punctuation">,</span> title<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handler</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> <span class="token string">&quot;sealing&quot;</span><span class="token punctuation">,</span> title<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handler</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> <span class="token string">&quot;sealing&quot;</span><span class="token punctuation">,</span> title<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">tap</span><span class="token punctuation">(</span><span class="token parameter">tap</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// p is percentage from 0 to 1</span>
    <span class="token comment">// args is any number of messages in a hierarchical matter</span>
    progressReporters<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>compilation<span class="token punctuation">.</span>compiler<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">handler</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> <span class="token string">&quot;sealing&quot;</span><span class="token punctuation">,</span> title<span class="token punctuation">,</span> tap<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">handler</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> <span class="token string">&quot;sealing&quot;</span><span class="token punctuation">,</span> title<span class="token punctuation">,</span> tap<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u672C\u4E0A\u53EF\u4EE5\u731C\u6D4B\u51FA\uFF0C<strong>afterOptimizeModules</strong> \u7684\u8BBE\u8BA1\u521D\u8877\u5C31\u662F\u7528\u4E8E\u901A\u77E5\u4F18\u5316\u884C\u4E3A\u7684\u7ED3\u675F</p>`,11),K=s("strong",null,"apply",-1),Q=n(" \u867D\u7136\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F46\u662F\u4ECE\u8BBE\u8BA1\u4E0A\u5C31\u53EA\u6709\u8F93\u5165\uFF0Cwebpack "),U=n("\u4E0D care \u8F93\u51FA"),X=n("\uFF0C\u6240\u4EE5\u5728\u63D2\u4EF6\u4E2D"),Y=n("\u53EA\u80FD\u901A\u8FC7"),Z=n("\u8C03\u7528"),$=s("strong",null,"\u7C7B\u578B\u5B9E\u4F53",-1),nn=n("\u7684\u5404\u79CD"),sn=s("strong",null,"\u65B9\u6CD5",-1),an=n("\u6765\u6216\u8005\u66F4\u6539\u5B9E\u4F53\u7684"),tn=s("strong",null,"\u914D\u7F6E\u4FE1\u606F",-1),en=n("\uFF0C\u53D8\u66F4\u7F16\u8BD1\u884C\u4E3A\u3002\u4F8B\u5982"),pn=s("ul",null,[s("li",null,"compilation.addModule \uFF1A\u6DFB\u52A0\u6A21\u5757\uFF0C\u53EF\u4EE5\u5728\u539F\u6709\u7684 module \u6784\u5EFA\u89C4\u5219\u4E4B\u5916\uFF0C\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6A21\u5757"),s("li",null,"compilation.emitAsset\uFF1A\u76F4\u8BD1\u662F\u201C\u63D0\u4EA4\u8D44\u4EA7\u201D\uFF0C\u529F\u80FD\u53EF\u4EE5\u7406\u89E3\u5C06\u5185\u5BB9\u5199\u5165\u5230\u7279\u5B9A\u8DEF\u5F84")],-1),on=s("h3",{id:"\u5982\u4F55\u5F71\u54CD\u7F16\u8BD1\u72B6\u6001",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5982\u4F55\u5F71\u54CD\u7F16\u8BD1\u72B6\u6001","aria-hidden":"true"},"#"),n(" \u5982\u4F55\u5F71\u54CD\u7F16\u8BD1\u72B6\u6001")],-1),cn=n("webpack \u7684\u63D2\u4EF6\u4F53\u7CFB\u4E0E\u5E73\u5E38\u6240\u89C1\u7684 \u8BA2\u9605/\u53D1\u5E03 \u6A21\u5F0F\u5DEE\u522B\u5F88\u5927\uFF0C\u662F\u4E00\u79CD\u975E\u5E38\u5F3A\u8026\u5408\u7684\u8BBE\u8BA1\uFF0Chooks \u56DE\u8C03\u7531 webpack \u51B3\u5B9A\u4F55\u65F6\uFF0C\u4EE5\u4F55\u79CD\u65B9\u5F0F\u6267\u884C\uFF1B\u800C\u5728 hooks \u56DE\u8C03\u5185\u90E8\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u72B6\u6001\u3001\u8C03\u7528\u4E0A\u4E0B\u6587 api \u7B49\u65B9\u5F0F\u5BF9 webpack \u4EA7\u751F "),ln=n("side effect"),un=n("\u3002"),rn=p(`<h6 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h6><p>EntryPlugin \u63D2\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">EntryPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compilation<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span>
      <span class="token string">&quot;EntryPlugin&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> <span class="token punctuation">{</span> normalModuleFactory <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        compilation<span class="token punctuation">.</span>dependencyFactories<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>
          EntryDependency<span class="token punctuation">,</span>
          normalModuleFactory
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>make<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">&quot;EntryPlugin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> entry<span class="token punctuation">,</span> options<span class="token punctuation">,</span> context <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> dep <span class="token operator">=</span> EntryPlugin<span class="token punctuation">.</span><span class="token function">createDependency</span><span class="token punctuation">(</span>entry<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
      compilation<span class="token punctuation">.</span><span class="token function">addEntry</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> dep<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7247\u6BB5\u8C03\u7528\u4E86\u4E24\u4E2A\u5F71\u54CD compilation \u5BF9\u8C61\u72B6\u6001\u7684\u63A5\u53E3\uFF1A</p><ul><li>compilation.dependencyFactories.set</li><li>compilation.addEntry</li></ul>`,5),dn=n("\u64CD\u4F5C\u7684\u5177\u4F53\u542B\u4E49\u53EF\u4EE5\u5148\u5FFD\u7565\uFF0C\u8FD9\u91CC\u8981\u7406\u89E3\u7684\u91CD\u70B9\u662F\uFF0Cwebpack \u4F1A\u5C06\u4E0A\u4E0B\u6587\u4FE1\u606F\u4EE5"),kn=n("\u53C2\u6570"),mn=n("\u6216 "),hn=n("this (compiler \u5BF9\u8C61)"),vn=n(" \u5F62\u5F0F"),bn=s("strong",null,"\u4F20\u9012",-1),_n=n("\u7ED9\u94A9\u5B50\u56DE\u8C03\uFF0C\u5728\u56DE\u8C03\u4E2D\u53EF\u4EE5\u8C03\u7528\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u65B9\u6CD5\u6216\u8005\u76F4\u63A5\u4FEE\u6539\u4E0A\u4E0B\u6587\u5BF9\u8C61\u5C5E\u6027\u7684\u65B9\u5F0F\uFF0C\u5BF9\u539F\u5B9A\u7684\u6D41\u7A0B\u4EA7\u751F side effect\u3002\u6240\u4EE5\u60F3\u7EAF\u719F\u5730\u7F16\u5199\u63D2\u4EF6\uFF0C\u9664\u4E86\u8981\u7406\u89E3\u8C03\u7528\u65F6\u673A\uFF0C\u8FD8\u9700\u8981\u4E86\u89E3\u6211\u4EEC\u53EF\u4EE5\u7528\u54EA\u4E00\u4E9Bapi"),gn=p(`<p><strong>\u4F8B\u5982</strong></p><ul><li>compilation.addModule\uFF1A\u6DFB\u52A0\u6A21\u5757\uFF0C\u53EF\u4EE5\u5728\u539F\u6709\u7684 module \u6784\u5EFA\u89C4\u5219\u4E4B\u5916\uFF0C\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6A21\u5757</li><li>compilation.emitAsset\uFF1A\u76F4\u8BD1\u662F\u201C\u63D0\u4EA4\u8D44\u4EA7\u201D\uFF0C\u529F\u80FD\u53EF\u4EE5\u7406\u89E3\u5C06\u5185\u5BB9\u5199\u5165\u5230\u7279\u5B9A\u8DEF\u5F84</li><li>compilation.addEntry\uFF1A\u6DFB\u52A0\u5165\u53E3\uFF0C\u529F\u80FD\u4E0A\u4E0E\u76F4\u63A5\u5B9A\u4E49 entry \u914D\u7F6E\u76F8\u540C</li><li>module.addError\uFF1A\u6DFB\u52A0\u7F16\u8BD1\u9519\u8BEF\u4FE1\u606F</li></ul><h3 id="tapable" tabindex="-1"><a class="header-anchor" href="#tapable" aria-hidden="true">#</a> Tapable</h3><p>Webpack \u672C\u8D28\u4E0A\u662F\u4E00\u79CD\u4E8B\u4EF6\u6D41\u7684\u673A\u5236\uFF0C\u5B83\u7684\u5DE5\u4F5C\u6D41\u7A0B\u5C31\u662F\u5C06\u5404\u4E2A\u63D2\u4EF6\u4E32\u8054\u8D77\u6765\uFF0C\u800C\u5B9E\u73B0\u8FD9\u4E00\u5207\u7684\u6838\u5FC3\u5C31\u662F Tapable\u3002</p><p>Compiler \u548C Compilation \u90FD\u662F Tapable \u7684\u5B50\u7C7B\uFF0C\u5E76\u4E14\u5B9E\u4F8B\u5185\u90E8\u7684\u751F\u547D\u5468\u671F\u4E5F\u662F\u901A\u8FC7 Tapable \u5E93\u63D0\u4F9B\u7684\u94A9\u5B50\u7C7B\u5B9E\u73B0\u7684\u3002</p><h6 id="tapable\u4E0Eeventemitter\u7C7B\u4F3C" tabindex="-1"><a class="header-anchor" href="#tapable\u4E0Eeventemitter\u7C7B\u4F3C" aria-hidden="true">#</a> Tapable\u4E0EEventEmitter\u7C7B\u4F3C</h6><p>\u6211\u4EEC\u77E5\u9053 Node.js \u7684\u7279\u70B9\u662F\u4E8B\u4EF6\u9A71\u52A8\uFF0C\u5B83\u662F\u901A\u8FC7\u5185\u90E8\u7684 EventEmitter \u7C7B\u5B9E\u73B0\u7684\uFF0C\u8FD9\u4E2A\u7C7B\u80FD\u591F\u8FDB\u884C\u4E8B\u4EF6\u7684\u76D1\u542C\u4E0E\u89E6\u53D1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> EventEmitter <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;eventName&#39;</span><span class="token punctuation">,</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;eventName \u89E6\u53D1:&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;eventName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello, eventName&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tapable \u7684\u529F\u80FD\u4E0E EventEmitter \u7C7B\u4F3C\uFF0C\u4F46\u662F\u66F4\u52A0\u5F3A\u5927\uFF0C\u5B83\u5305\u542B\u4E86\u591A\u79CD\u4E0D\u540C\u7684\u76D1\u542C\u548C\u89E6\u53D1\u4E8B\u4EF6\u7684\u65B9\u5F0F\u3002</p><h6 id="tapable-hook-\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#tapable-hook-\u5206\u7C7B" aria-hidden="true">#</a> Tapable hook \u5206\u7C7B</h6><p>Hook \u7684\u7C7B\u578B\u53EF\u4EE5\u6309\u7167 \u4E8B\u4EF6\u56DE\u8C03\u7684\u8FD0\u884C\u903B\u8F91 \u6216\u8005 \u89E6\u53D1\u4E8B\u4EF6\u7684\u65B9\u5F0F \u6765\u5206\u7C7B\u3002</p><p>\u4E8B\u4EF6\u56DE\u8C03\u7684\u8FD0\u884C\u903B\u8F91\uFF1A <img src="`+m+'" alt="An image"></p><p>\u89E6\u53D1\u4E8B\u4EF6\u7684\u65B9\u5F0F\uFF1A <img src="'+h+'" alt="An image"></p>',13),fn={href:"https://zhuanlan.zhihu.com/p/100974318",target:"_blank",rel:"noopener noreferrer"},yn=n("Webpack \u6838\u5FC3\u5E93 Tapable \u7684\u4F7F\u7528\u4E0E\u539F\u7406\u89E3\u6790");function wn(xn,En){const i=o("TitleList"),t=o("Te"),c=o("ExternalLinkIcon");return u(),r("div",null,[a(i),b,s("p",null,[_,g,f,y,a(t,{d:""},{default:e(()=>[w]),_:1}),x,a(t,{d:""},{default:e(()=>[E]),_:1}),j,q,A]),s("p",null,[P,T,z,a(t,{d:""},{default:e(()=>[H]),_:1}),M]),S,s("p",null,[N,s("a",C,[W,a(c)]),B]),L,s("p",null,[O,D,F,V,I,R,a(t,{d:""},{default:e(()=>[G]),_:1})]),J,s("p",null,[K,Q,a(t,{d:""},{default:e(()=>[U]),_:1}),X,a(t,{d:""},{default:e(()=>[Y]),_:1}),Z,$,nn,sn,an,tn,en]),pn,on,s("p",null,[cn,a(t,{d:""},{default:e(()=>[ln]),_:1}),un]),rn,s("p",null,[dn,a(t,{d:""},{default:e(()=>[kn]),_:1}),mn,a(t,{d:""},{default:e(()=>[hn]),_:1}),vn,bn,_n]),gn,s("p",null,[s("a",fn,[yn,a(c)])])])}var qn=l(v,[["render",wn],["__file","webpack-plugin.html.vue"]]);export{qn as default};
