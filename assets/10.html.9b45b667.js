import{_ as l,r as n,o as a,c as o,a as e,d as r,b as i,e as d}from"./app.1f34b824.js";const c={},s=e("h1",{id:"\u5BFB\u627E\u91CD\u590D\u6570",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5BFB\u627E\u91CD\u590D\u6570","aria-hidden":"true"},"#"),i(" \u5BFB\u627E\u91CD\u590D\u6570")],-1),h={href:"https://leetcode.cn/leetbook/read/top-interview-questions-hard/xwz4lj/",target:"_blank",rel:"noopener noreferrer"},u=i("\u9898\u76EE"),_=d('<h6 id="\u89E3\u9898\u601D\u8DEF\u4E00-\u66B4\u529B\u53CC\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF\u4E00-\u66B4\u529B\u53CC\u5FAA\u73AF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF\u4E00\uFF0C\u66B4\u529B\u53CC\u5FAA\u73AF</h6><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6 O(n2)</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6 O(1)</li></ul><h6 id="\u89E3\u9898\u601D\u8DEF\u4E8C-\u4E8C\u5206\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF\u4E8C-\u4E8C\u5206\u6CD5" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF\u4E8C\uFF0C\u4E8C\u5206\u6CD5</h6><ul><li>\u8BA1\u7B97 n \u7684\u4E2D\u503C const mid = Math.ceil(n/2) <ul><li>n \u4E3A \u5947\u6570 <ul><li>\u904D\u5386 \u6570\u7EC4\uFF0C\u7EDF\u8BA1 \u5927\u4E8E mid \u7684\u5143\u7D20\u6570\u91CF rightCount\u3001\u5C0F\u4E8E mid \u7684\u5143\u7D20\u6570\u91CF, leftCount \u548C \u7B49\u4E8E mid \u7684\u5143\u7D20 count.</li><li>\u5982\u679C count \u5927\u4E8E 1\uFF0C\u5219\u8BE5mid\u5143\u7D20\u662F\u91CD\u590D\u7684</li><li>\u5982\u679C lefCount &gt;= mid \u5219 \u91CD\u590D\u7684\u6570\u5728\u5DE6\u8FB9\u3002\u7EE7\u7EED\u4E8C\u5206 (star + mid)/2</li><li>\u5982\u679C rightCount &gt;= mid \u5219 \u91CD\u590D\u7684\u6570\u5728\u53F3\u8FB9\u3002\u7EE7\u7EED\u4E8C\u5206 (mid + end)/2</li></ul></li><li>n \u4E3A \u5076\u6570 <ul><li>\u904D\u5386 \u6570\u7EC4\uFF0C\u7EDF\u8BA1 \u5927\u4E8E mid \u7684\u5143\u7D20\u6570\u91CF rightCount\u3001\u5C0F\u4E8E\u7B49\u4E8E mid \u7684\u5143\u7D20\u6570\u91CF, leftCount.</li><li>\u5224\u65AD lefCount &gt; mid \u8FD8\u662F rightCount &gt; mid\uFF0C\u7136\u540E\u7EE7\u7EED\u4E8C\u5206\u904D\u5386</li></ul></li></ul></li><li>\u65F6\u95F4\u590D\u6742\u5EA6 O(n log n)</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6 O(1)</li></ul>',4);function m(f,g){const t=n("ExternalLinkIcon");return a(),o("div",null,[s,e("p",null,[e("a",h,[u,r(t)])]),_])}var x=l(c,[["render",m],["__file","10.html.vue"]]);export{x as default};
