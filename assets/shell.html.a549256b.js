import{_ as l,r as n,o as c,c as p,d as s,a,e,b as o}from"./app.3656bcf4.js";const d={},r=e(`<h1 id="docker-shell-\u81EA\u52A8\u5316\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#docker-shell-\u81EA\u52A8\u5316\u811A\u672C" aria-hidden="true">#</a> docker shell \u81EA\u52A8\u5316\u811A\u672C</h1><h3 id="\u5220\u9664docker\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664docker\u955C\u50CF" aria-hidden="true">#</a> \u5220\u9664docker\u955C\u50CF</h3><p>\u5220\u9664docker\u955C\u50CF\u7684shell\u547D\u4EE4</p><ol><li>\u6BD4\u5982\uFF0C\u6211\u4EEC\u9700\u8981\u5220\u9664\u6240\u6709\u4ED3\u5E93\u540D\u4E3A redis \u7684\u955C\u50CF</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> image <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> image <span class="token function">ls</span> -q redis<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u6216\u8005\u5220\u9664\u6240\u6709\u5728 mongo:3.2 \u4E4B\u524D\u7684\u955C\u50CF\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># -f \u540E\u9762\u4F20\u8FC7\u6EE4\u6761\u4EF6</span>
<span class="token function">docker</span> image <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> image <span class="token function">ls</span> -q -f <span class="token assign-left variable">before</span><span class="token operator">=</span>mongo:3.2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-echo\u8F93\u51FA\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#shell-echo\u8F93\u51FA\u989C\u8272" aria-hidden="true">#</a> shell echo\u8F93\u51FA\u989C\u8272</h3>`,8),u={href:"https://www.cnblogs.com/lr-ting/archive/2013/02/28/2936792.html",target:"_blank",rel:"noopener noreferrer"},m=o("shell\u811A\u672C\u4E2Decho\u663E\u793A\u5185\u5BB9\u5E26\u989C\u8272"),v=e(`<h3 id="\u81EA\u52A8\u5316\u66F4\u65B0docker\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5316\u66F4\u65B0docker\u5BB9\u5668" aria-hidden="true">#</a> \u81EA\u52A8\u5316\u66F4\u65B0docker\u5BB9\u5668</h3><p>\u81EA\u52A8\u5316\u66F4\u65B0docker\u5BB9\u5668shell\u811A\u672C</p><h6 id="\u5224\u65AD\u5BB9\u5668\u662F\u5426\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5BB9\u5668\u662F\u5426\u8FD0\u884C" aria-hidden="true">#</a> \u5224\u65AD\u5BB9\u5668\u662F\u5426\u8FD0\u884C</h6><p>\u7B2C20\u884C</p><h6 id="\u5224\u65AD\u5BB9\u5668\u662F\u5426\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5BB9\u5668\u662F\u5426\u5B58\u5728" aria-hidden="true">#</a> \u5224\u65AD\u5BB9\u5668\u662F\u5426\u5B58\u5728</h6><p>\u7B2C30\u884C</p><h6 id="\u5224\u65AD\u955C\u50CF\u662F\u5426\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u955C\u50CF\u662F\u5426\u5B58\u5728" aria-hidden="true">#</a> \u5224\u65AD\u955C\u50CF\u662F\u5426\u5B58\u5728</h6><p>\u7B2C40\u884C</p><h6 id="\u5236\u4F5C\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5236\u4F5C\u955C\u50CF" aria-hidden="true">#</a> \u5236\u4F5C\u955C\u50CF</h6><p>\u7B2C124\u884C</p><h6 id="\u542F\u52A8\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5BB9\u5668" aria-hidden="true">#</a> \u542F\u52A8\u5BB9\u5668</h6><p>\u7B2C128\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

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

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m \u5224\u65AD<span class="token variable">\${containerName}</span>\u5BB9\u5668\u662F\u5426\u5728\u8FD0\u884C <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token comment"># \u5224\u65AD\u5BF9\u5E94\u540D\u79F0\u7684\u5BB9\u5668\u662F\u5426\u5728\u8FD0\u884C\uFF0C\u662F\u5219\u5220\u9664</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> -n <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -q -f <span class="token string">&quot;name=^<span class="token variable">\${containerName}</span>$&quot;</span><span class="token variable">)</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m container is runing, stop it <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
        <span class="token function">docker</span> stop <span class="token variable">$containerName</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m container not exist <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m \u5224\u65AD<span class="token variable">\${containerName}</span>\u5BB9\u5668\u662F\u5426\u5B58\u5728 <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token comment"># \u5224\u65AD\u5BF9\u5E94\u540D\u79F0\u7684\u5BB9\u5668\u662F\u5426\u5B58\u5728\uFF0C\u5B58\u5728\u5219\u5220\u9664</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> -n <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> container <span class="token function">ls</span> -a -q -f <span class="token string">&quot;name=^<span class="token variable">\${containerName}</span>$&quot;</span><span class="token variable">)</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m container is exist, remove it <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
        <span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">$containerName</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m container not exist <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m \u5224\u65AD<span class="token variable">\${imagesName}</span>\u955C\u50CF\u662F\u5426\u5B58\u5728 <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token comment"># \u5224\u65AD\u5BF9\u5E94\u540D\u79F0\u7684\u955C\u50CF\u662F\u5426\u5B58\u5728\uFF0C\u5B58\u5728\u5219\u5220\u9664</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> -n <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images -q $<span class="token punctuation">{</span>imagesName<span class="token punctuation">}</span><span class="token variable">)</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m images is exist, remove it <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
        <span class="token function">docker</span> image <span class="token function">ls</span> -q <span class="token variable">\${imagesName}</span>
        <span class="token function">docker</span> image <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> image <span class="token function">ls</span> -q $<span class="token punctuation">{</span>imagesName<span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m images not exist <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m \u8FDB\u5165\u524D\u7AEF\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6784\u5EFA\u9879\u76EE <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token comment"># \u8FDB\u5165\u524D\u7AEF\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6784\u5EFA\u9879\u76EE</span>
<span class="token builtin class-name">cd</span> ./<span class="token variable">\${frontName}</span>

<span class="token builtin class-name">echo</span> -e  <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m --------------------------- <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token builtin class-name">pwd</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m git checkout <span class="token variable">\${branchFront}</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token function">git</span> checkout <span class="token variable">$branchFront</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m git pull <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token function">git</span> pull

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m npm i <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token function">npm</span> i

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m npm run build <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token function">npm</span> run build

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m \u8FDB\u5165node\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6784\u5EFA\u9879\u76EE <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token comment"># \u8FDB\u5165node\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6784\u5EFA\u9879\u76EE</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token variable">\${nodeName}</span>

<span class="token builtin class-name">echo</span> -e  <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m --------------------------- <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token builtin class-name">pwd</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m git checkout . <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m git checkout <span class="token variable">\${branchNode}</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token function">git</span> checkout <span class="token variable">$branchNode</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m git pull <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token function">git</span> pull

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m npm i <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token function">npm</span> i

<span class="token builtin class-name">echo</span> -e  <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m \u8FD4\u56DEshell\u811A\u672C\u6240\u5728\u76EE\u5F55 <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token comment"># \u8FDB\u5165shell\u811A\u672C\u6240\u5728\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

<span class="token builtin class-name">echo</span> -e  <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m --------------------------- <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token builtin class-name">pwd</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m cp ./<span class="token variable">\${frontName}</span>/dist/* ./<span class="token variable">\${nodeName}</span>/public <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token comment"># \u524D\u7AEF\u9759\u6001\u8D44\u6E90\u79FB\u5165node\u670D\u52A1</span>
<span class="token function">cp</span> ./<span class="token variable">\${frontName}</span>/dist/* ./<span class="token variable">\${nodeName}</span>/public

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m mv ./dockerrun.sh ./<span class="token variable">\${nodeName}</span>/dockerrun.sh <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token comment"># \u66F4\u65B0dockerrun.sh</span>
<span class="token function">cp</span> ./dockerrun.sh ./<span class="token variable">\${nodeName}</span>/dockerrun.sh

<span class="token comment"># \u66FF\u6362db.ts\u6587\u4EF6,\u53BB\u6389\u751F\u4EA7\u73AF\u5883db\u4FE1\u606F,\u8BA9\u6D4B\u8BD5\u73AF\u5883\u6267\u884C\u66F4\u5B89\u5168</span>
<span class="token function">cp</span> ./db.ts ./<span class="token variable">\${nodeName}</span>/src/config/db.ts

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m \u8FDB\u5165node\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6784\u5EFA\u955C\u50CF <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token builtin class-name">cd</span> <span class="token variable">$nodeName</span>

<span class="token builtin class-name">echo</span> -e  <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m --------------------------- <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token builtin class-name">pwd</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m \u6B63\u5728\u5236\u4F5C\u955C\u50CF <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token function">docker</span> build --network<span class="token operator">=</span>host -t <span class="token variable">\${imagesName}</span><span class="token builtin class-name">:</span><span class="token variable">\${DOCKER_VERSION}</span> <span class="token builtin class-name">.</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m \u542F\u52A8\u5BB9\u5668 <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token function">docker</span> run -d -p <span class="token number">8080</span>:3000 --name<span class="token operator">=</span><span class="token variable">\${containerName}</span> <span class="token variable">\${imagesName}</span><span class="token builtin class-name">:</span><span class="token variable">\${DOCKER_VERSION}</span>

<span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function k(b,h){const i=n("TitleList"),t=n("ExternalLinkIcon");return c(),p("div",null,[s(i),r,a("p",null,[a("a",u,[m,s(t)])]),v])}var q=l(d,[["render",k],["__file","shell.html.vue"]]);export{q as default};
