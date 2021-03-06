import{_ as s,r as a,o as t,c as e,d as p,e as o}from"./app.0971360b.js";const i={},l=o(`<h1 id="\u524D\u7AEF\u5DE5\u7A0B\u5316" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5DE5\u7A0B\u5316" aria-hidden="true">#</a> \u524D\u7AEF\u5DE5\u7A0B\u5316</h1><h2 id="\u9879\u76EE\u4EE3\u7801\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4EE3\u7801\u89C4\u8303" aria-hidden="true">#</a> \u9879\u76EE\u4EE3\u7801\u89C4\u8303</h2><p><strong>\u4EE3\u7801\u89C4\u8303\u6807\u51C6</strong>\uFF1A\u57FA\u4E8E Airbnb \u7684\u516C\u53F8\u7F16\u7801\u89C4\u8303\u6765\u7EDF\u4E00\u4EE3\u7801\u89C4\u8303</p><p><strong>\u914D\u7F6E\u5173\u952E</strong>\uFF1A\u642D\u914D\u4F7F\u7528 ESlint + Prettier + Husky+ Lint-staged</p><ul><li><code>Prettier</code> \u683C\u5F0F\u5316\u4EE3\u7801\u98CE\u683C</li><li><code>ESlint</code> \u68C0\u67E5\u8BED\u6CD5</li><li><code>Husky</code> \u5B9E\u73B0\u5404\u79CD\u5404\u79CD git-hook \u3002\u8FD9\u91CC\u4E3B\u8981\u4F7F\u7528 pre-commit\uFF0C\u5728\u6BCF\u6B21 commit \u4E4B\u524D\u6267\u884C prettier \u7684\u683C\u5F0F\u5316\u548C ESLint \u7684\u6821\u9A8C</li><li><code>Lint-staged</code> \u7528\u4E8E\u5BF9 Git \u6682\u5B58\u533A\u4E2D\u7684\u6587\u4EF6\u6267\u884C\u4EE3\u7801\u68C0\u6D4B</li><li><code> eslint-config-prettier</code> \u548C\u4E00\u822C\u7684 eslint-config-xxx \u4E0D\u540C\uFF0C\u5B83\u4E0D\u662F\u7528\u6765\u5171\u4EAB ESlint \u914D\u7F6E\u7684\uFF0C\u800C\u662F\u7528\u6765\u5173\u95ED ESLint \u7684\u6837\u5F0F\u89C4\u5219\u7684\uFF0C\u907F\u514D ESLint \u7684\u6837\u5F0F\u89C4\u5219\u548C Prettier \u51B2\u7A81\u3002\u4F7F\u7528\u8BE5\u914D\u7F6E\u540E\uFF0C\u5BF9\u4EE3\u7801\u8FDB\u884C prettier \u548C eslint \u5C31\u4E0D\u4F1A\u51B2\u7A81\u4E86\u3002\u4F46\u8981\u6CE8\u610F\u4E00\u5B9A\u8981\u628A\u5B83\u653E\u5728 extends \u4E2D\u6700\u540E\u7684\u4F4D\u7F6E\uFF0C\u907F\u514D\u540E\u7EED\u7684\u914D\u7F6E\u53C8\u628A\u76F8\u5173\u89C4\u5219\u6253\u5F00\u4E86\u3002 \u9700\u8981\u914D\u7F6E .eslintrc.js \u548C .prettierrc.js \uFF0C\u53E6\u5916\u9700\u8981\u914D\u7F6E .eslintignore \u548C .prettierignore \u6765\u5FFD\u7565\u6389\u90A3\u4E9B\u4F60\u4E0D\u60F3\u6821\u9A8C\u7684\u6587\u4EF6\uFF0C\u7528\u6CD5\u548C git \u7684 .gitignore \u4E00\u6837\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -D eslint prettier eslint-config-prettier husky lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="\u4FEE\u6539\u9879\u76EE-eslintrcs-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u9879\u76EE-eslintrcs-\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u9879\u76EE .eslintrcs \u6587\u4EF6</h6><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  extends<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u5404\u79CD\u4F60\u9700\u8981\u7EE7\u627F\u7684\u914D\u7F6E\u5217\u5728\u524D\u9762</span>
    <span class="token string">&quot;@tencent/eslint-config-tencent&quot;</span>
    <span class="token comment">// prettier \u89C4\u5219\u5217\u5728\u6700\u540E</span>
    <span class="token string">&quot;prettier&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u4FEE\u6539\u5DE5\u4F5C\u533Asettings-json\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5DE5\u4F5C\u533Asettings-json\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u5DE5\u4F5C\u533Asettings.json\u6587\u4EF6</h6><p>\u5B89\u88C5VSCode\u63D2\u4EF6 \u4E0B\u8F7D\u5E76\u5B89\u88C5 VSCode \u7684 Prettier - Code formatter \u63D2\u4EF6\u3002 \u914D\u7F6E\u5DE5\u4F5C\u533A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;prettier.eslintIntegration&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-\u7EA6\u5B9A" tabindex="-1"><a class="header-anchor" href="#git-\u7EA6\u5B9A" aria-hidden="true">#</a> Git \u7EA6\u5B9A</h2><h3 id="\u5206\u652F\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u89C4\u8303" aria-hidden="true">#</a> \u5206\u652F\u89C4\u8303</h3><p>\u56E2\u961F\u4F7F\u7528 git \u5206\u652F\u7684\u5F62\u5F0F\u57FA\u672C\u7B26\u5408 git-flow \u7684\u89C4\u8303\u3002</p><h3 id="\u63D0\u4EA4\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u89C4\u8303" aria-hidden="true">#</a> \u63D0\u4EA4\u89C4\u8303</h3><ul><li>\u56E2\u961F\u4E4B\u95F4\u9075\u5B88\u540C\u4E00\u5957 commit message \u89C4\u8303\uFF0C Angular \u89C4\u8303\u3002</li><li>\u642D\u914D\u4F7F\u7528\uFF1Acommitizen + cz-conventional-changelog + commitlint + husky</li><li>\u51E1\u662F\u7528\u5230 <code>git commit</code> \u547D\u4EE4\uFF0C\u4E00\u5F8B\u6539\u4E3A\u4F7F\u7528 <code>git cz</code> \u3002\u8FD9\u65F6\uFF0C\u5C31\u4F1A\u51FA\u73B0\u9009\u9879\uFF0C\u7528\u6765\u751F\u6210\u7B26\u5408\u683C\u5F0F\u7684 Commit message\u3002\u5E76\u4E14\u5728\u6BCF\u6B21 commit \u65F6\u6267\u884C commitlint \u68C0\u67E5\u6211\u4EEC\u8F93\u5165\u7684 message\u3002</li></ul><p><em>vscode IDE prettier\u63D2\u4EF6 \u5FEB\u6377\u952E shift + option + f</em></p><h5 id="prettier-config-js" tabindex="-1"><a class="header-anchor" href="#prettier-config-js" aria-hidden="true">#</a> prettier.config.js</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E00\u884C\u6700\u591A 120 \u5B57\u7B26</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F7F\u7528 2 \u4E2A\u7A7A\u683C\u7F29\u8FDB</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0D\u4F7F\u7528\u7F29\u8FDB\u7B26\uFF0C\u800C\u4F7F\u7528\u7A7A\u683C</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u884C\u5C3E\u9700\u8981\u6709\u5206\u53F7</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F7F\u7528\u5355\u5F15\u53F7</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5BF9\u8C61\u7684 key \u4EC5\u5728\u5FC5\u8981\u65F6\u7528\u5F15\u53F7</span>
  <span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&#39;as-needed&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx \u4E0D\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u800C\u4F7F\u7528\u53CC\u5F15\u53F7</span>
  <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u672B\u5C3E\u9700\u8981\u9017\u53F7</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5927\u62EC\u53F7\u5185\u7684\u9996\u5C3E\u9700\u8981\u7A7A\u683C</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx \u6807\u7B7E\u7684\u53CD\u5C16\u62EC\u53F7\u9700\u8981\u6362\u884C</span>
  <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7BAD\u5934\u51FD\u6570\uFF0C\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u4E5F\u9700\u8981\u62EC\u53F7</span>
  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6BCF\u4E2A\u6587\u4EF6\u683C\u5F0F\u5316\u7684\u8303\u56F4\u662F\u6587\u4EF6\u7684\u5168\u90E8\u5185\u5BB9</span>
  <span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0D\u9700\u8981\u5199\u6587\u4EF6\u5F00\u5934\u7684 @prettier</span>
  <span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0D\u9700\u8981\u81EA\u52A8\u5728\u6587\u4EF6\u5F00\u5934\u63D2\u5165 @prettier</span>
  <span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F7F\u7528\u9ED8\u8BA4\u7684\u6298\u884C\u6807\u51C6</span>
  <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&#39;preserve&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6839\u636E\u663E\u793A\u6837\u5F0F\u51B3\u5B9A html \u8981\u4E0D\u8981\u6298\u884C</span>
  <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6362\u884C\u7B26\u4F7F\u7528 lf</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&#39;lf&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h5><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@tencent/tea-app-diagnosis&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The diagnosis tea app for qcloud console&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src/app.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tea dev&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scan&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tea scan&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tea build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tea commit&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint ./src --fix --ext .tsx,.ts,.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git-cz&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write \\&quot;src/**/*.js\\&quot; \\&quot;src/**/*.jsx\\&quot; \\&quot;src/**/*.ts\\&quot; \\&quot;src/**/*.tsx\\&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;tea&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;diagnosis&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;engines&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;3.3&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UNLICENSED&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;defaults&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;last 3 versions&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;not ie &lt; 11&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@tencent/iaas-common&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.6.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@tencent/iaas-component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.2.53&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@tencent/tea-app&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@tencent/tea-component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@tencent/tea-style-cloud-api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@types/react-redux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.1.16&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.17.21&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;moment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.29.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16.10.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react-dom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16.10.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react-redux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.2.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react-router-dom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;redux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;redux-logger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;redux-saga&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;redux-saga-catch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.10&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;saga-duck&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.4.2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@tencent/eslint-config-tencent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.15.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@tencent/eslint-plugin-tea-i18n&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.1.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@tencent/tea-scripts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@tencent/tea-types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@types/lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.14.170&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@types/react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16.8.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@types/react-dom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16.8.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@types/redux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.6.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@typescript-eslint/eslint-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.28.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@typescript-eslint/parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.28.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.29.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-config-prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.3.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-plugin-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.1.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-plugin-prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.4.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-plugin-react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.21.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;git-cz&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.7.6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^11.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.3.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.3333&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;commitlint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;@commitlint/config-conventional&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;src/**/*{.ts,.tsx,.js,jsx}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;eslint --fix --ext .tsx,.ts,.js&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;commit-msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function r(c,u){const n=a("TitleList");return t(),e("div",null,[p(n),l])}var k=s(i,[["render",r],["__file","engineering.html.vue"]]);export{k as default};
