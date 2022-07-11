import{_ as n,o as s,c as a,e}from"./app.e0375087.js";const i={},l=e(`<h1 id="docker-shell-\u81EA\u52A8\u5316\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#docker-shell-\u81EA\u52A8\u5316\u811A\u672C" aria-hidden="true">#</a> docker shell \u81EA\u52A8\u5316\u811A\u672C</h1><h2 id="\u5220\u9664docker\u955C\u50CF\u7684shell\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664docker\u955C\u50CF\u7684shell\u547D\u4EE4" aria-hidden="true">#</a> \u5220\u9664docker\u955C\u50CF\u7684shell\u547D\u4EE4</h2><ol><li>\u6BD4\u5982\uFF0C\u6211\u4EEC\u9700\u8981\u5220\u9664\u6240\u6709\u4ED3\u5E93\u540D\u4E3A redis \u7684\u955C\u50CF</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> image <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> image <span class="token function">ls</span> -q redis<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u6216\u8005\u5220\u9664\u6240\u6709\u5728 mongo:3.2 \u4E4B\u524D\u7684\u955C\u50CF\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># -f \u540E\u9762\u4F20\u8FC7\u6EE4\u6761\u4EF6</span>
<span class="token function">docker</span> image <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> image <span class="token function">ls</span> -q -f <span class="token assign-left variable">before</span><span class="token operator">=</span>mongo:3.2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u52A8\u5316\u66F4\u65B0docker\u5BB9\u5668shell\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5316\u66F4\u65B0docker\u5BB9\u5668shell\u811A\u672C" aria-hidden="true">#</a> \u81EA\u52A8\u5316\u66F4\u65B0docker\u5BB9\u5668shell\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># \u955C\u50CF\u540D\u79F0</span>
<span class="token assign-left variable">imagesName</span><span class="token operator">=</span><span class="token string">&quot;blockchain-oms&quot;</span>
<span class="token comment"># \u955C\u50CF\u7248\u672C</span>
<span class="token assign-left variable">DOCKER_VERSION</span><span class="token operator">=</span><span class="token string">&quot;test&quot;</span>
<span class="token comment"># \u5BB9\u5668\u540D\u79F0</span>
<span class="token assign-left variable">containerName</span><span class="token operator">=</span><span class="token string">&quot;bcotest&quot;</span>
<span class="token comment"># \u524D\u7AEF\u9879\u76EE\u540D\u79F0</span>
<span class="token assign-left variable">frontName</span><span class="token operator">=</span><span class="token string">&quot;blockchain-oms-front&quot;</span>
<span class="token comment"># \u524D\u7AEF\u9879\u76EE\u5206\u652F</span>
<span class="token assign-left variable">branchFront</span><span class="token operator">=</span><span class="token string">&quot;dev&quot;</span>
<span class="token comment"># \u540E\u7AEF\u9879\u76EE\u540D\u79F0</span>
<span class="token assign-left variable">nodeName</span><span class="token operator">=</span><span class="token string">&quot;blockchain-oms&quot;</span>
<span class="token comment"># \u540E\u7AEF\u9879\u76EE\u5206\u652F</span>
<span class="token assign-left variable">branchNode</span><span class="token operator">=</span><span class="token string">&quot;dev&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5224\u65AD<span class="token variable">\${containerName}</span>\u5BB9\u5668\u662F\u5426\u5728\u8FD0\u884C&quot;</span>

<span class="token comment"># \u5224\u65AD\u5BF9\u5E94\u540D\u79F0\u7684\u5BB9\u5668\u662F\u5426\u5728\u8FD0\u884C\uFF0C\u662F\u5219\u5220\u9664</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> -n <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -q -f <span class="token string">&quot;name=^<span class="token variable">\${containerName}</span>$&quot;</span><span class="token variable">)</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;container is runing, stop it&quot;</span>
        <span class="token function">docker</span> stop <span class="token variable">$containerName</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;container not exist&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5224\u65AD<span class="token variable">\${containerName}</span>\u5BB9\u5668\u662F\u5426\u5B58\u5728&quot;</span>

<span class="token comment"># \u5224\u65AD\u5BF9\u5E94\u540D\u79F0\u7684\u5BB9\u5668\u662F\u5426\u5B58\u5728\uFF0C\u5B58\u5728\u5219\u5220\u9664</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> -n <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> container <span class="token function">ls</span> -a -q -f <span class="token string">&quot;name=^<span class="token variable">\${containerName}</span>$&quot;</span><span class="token variable">)</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;container is exist, remove it&quot;</span>
        <span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">$containerName</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;container not exist&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5224\u65AD<span class="token variable">\${imagesName}</span>\u955C\u50CF\u662F\u5426\u5B58\u5728&quot;</span>

<span class="token comment"># \u5224\u65AD\u5BF9\u5E94\u540D\u79F0\u7684\u955C\u50CF\u662F\u5426\u5B58\u5728\uFF0C\u5B58\u5728\u5219\u5220\u9664</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> -n <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images -q $<span class="token punctuation">{</span>imagesName<span class="token punctuation">}</span><span class="token variable">)</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;images is exist, remove it&quot;</span>
        <span class="token function">docker</span> image <span class="token function">ls</span> -q <span class="token variable">\${imagesName}</span>
        <span class="token function">docker</span> image <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> image <span class="token function">ls</span> -q $<span class="token punctuation">{</span>imagesName<span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;images not exist&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8FDB\u5165\u524D\u7AEF\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6784\u5EFA\u9879\u76EE&quot;</span>

<span class="token comment"># \u8FDB\u5165\u524D\u7AEF\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6784\u5EFA\u9879\u76EE</span>
<span class="token builtin class-name">cd</span> ./<span class="token variable">\${frontName}</span>

<span class="token builtin class-name">echo</span> <span class="token builtin class-name">pwd</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;git checkout <span class="token variable">\${branchFront}</span>&quot;</span>

<span class="token function">git</span> checkout <span class="token variable">$branchFront</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;git pull&quot;</span>

<span class="token function">git</span> pull

<span class="token builtin class-name">echo</span> <span class="token string">&quot;npm i&quot;</span>

<span class="token function">npm</span> i

<span class="token builtin class-name">echo</span> <span class="token string">&quot;npm run build&quot;</span>

<span class="token function">npm</span> run build

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8FDB\u5165node\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6784\u5EFA\u9879\u76EE&quot;</span>

<span class="token comment"># \u8FDB\u5165node\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6784\u5EFA\u9879\u76EE</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token variable">\${nodeName}</span>

<span class="token builtin class-name">echo</span> <span class="token builtin class-name">pwd</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;git checkout .&quot;</span>

<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;git checkout <span class="token variable">\${branchNode}</span>&quot;</span>

<span class="token function">git</span> checkout <span class="token variable">$branchNode</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;git pull&quot;</span>

<span class="token function">git</span> pull

<span class="token builtin class-name">echo</span> <span class="token string">&quot;npm i&quot;</span>

<span class="token function">npm</span> i

<span class="token builtin class-name">echo</span>  <span class="token string">&quot;\u8FD4\u56DEshell\u811A\u672C\u6240\u5728\u76EE\u5F55&quot;</span>

<span class="token comment"># \u8FDB\u5165shell\u811A\u672C\u6240\u5728\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

<span class="token builtin class-name">echo</span> <span class="token builtin class-name">pwd</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;cp ./<span class="token variable">\${frontName}</span>/dist/* ./<span class="token variable">\${nodeName}</span>/public&quot;</span>
<span class="token comment"># \u524D\u7AEF\u9759\u6001\u8D44\u6E90\u79FB\u5165node\u670D\u52A1</span>
<span class="token function">cp</span> ./<span class="token variable">\${frontName}</span>/dist/* ./<span class="token variable">\${nodeName}</span>/public

<span class="token builtin class-name">echo</span> <span class="token string">&quot;mv ./dockerrun.sh ./<span class="token variable">\${nodeName}</span>/dockerrun.sh&quot;</span>
<span class="token comment"># \u66F4\u65B0dockerrun.sh</span>
<span class="token function">mv</span> ./dockerrun.sh ./<span class="token variable">\${nodeName}</span>/dockerrun.sh

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8FDB\u5165node\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6784\u5EFA\u955C\u50CF&quot;</span>

<span class="token builtin class-name">cd</span> <span class="token variable">$nodeName</span>

<span class="token builtin class-name">echo</span> <span class="token builtin class-name">pwd</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6B63\u5728\u5236\u4F5C\u955C\u50CF&quot;</span>

<span class="token function">docker</span> build --network<span class="token operator">=</span>host -t <span class="token variable">\${imagesName}</span><span class="token builtin class-name">:</span><span class="token variable">\${DOCKER_VERSION}</span> <span class="token builtin class-name">.</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u542F\u52A8\u5BB9\u5668&quot;</span>

<span class="token function">docker</span> run -d -p <span class="token number">8080</span>:3000 --name<span class="token operator">=</span><span class="token variable">\${containerName}</span> <span class="token variable">\${imagesName}</span><span class="token builtin class-name">:</span><span class="token variable">\${DOCKER_VERSION}</span>

<span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[l];function t(o,p){return s(),a("div",null,c)}var r=n(i,[["render",t],["__file","shell.html.vue"]]);export{r as default};
