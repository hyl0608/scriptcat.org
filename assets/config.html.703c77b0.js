import{r as a,c as r,a as n,b as l,F as p,d as s,e as i,o as c}from"./app.80aa7b9b.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";var t="/config/image-20210621213013631.png";const o={},u=n("h1",{id:"\u7528\u6237\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7528\u6237\u914D\u7F6E","aria-hidden":"true"},"#"),s(" \u7528\u6237\u914D\u7F6E")],-1),m=n("code",null,"==UserConfig==",-1),d=s(" \u4E2D\u7684\u5185\u5BB9,\u5E94\u8BE5\u5728"),_=n("code",null,"==UserScript==",-1),f=s(" \u540E\u65B9,\u8868\u793A\u811A\u672C\u7684\u4E00\u4E9B\u7528\u6237\u914D\u7F6E.\u914D\u7F6E\u4FE1\u606F\u7684\u63CF\u8FF0\u4F7F\u7528"),g={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},h=s("yaml"),v=s("\u683C\u5F0F\u6765\u8FDB\u884C\u7F16\u5199:"),x=i(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* ==UserConfig==
group1:
  configA:                                # \u952E\u503C\u4E3Agroup.config,\u4F8B\u5982\u672C\u952E\u4E3A:group1.configA
    title: \u914D\u7F6EA                          # \u914D\u7F6E\u7684\u6807\u9898
    description: \u8FD9\u662F\u4E00\u4E2A\u6587\u672C\u7C7B\u578B\u7684\u914D\u7F6E     # \u914D\u7F6E\u7684\u63CF\u8FF0\u5185\u5BB9
    type: text                            # \u9009\u9879\u7C7B\u578B,\u5982\u679C\u4E0D\u586B\u5199\u4F1A\u6839\u636E\u6570\u636E\u81EA\u52A8\u8BC6\u522B
    default: \u9ED8\u8BA4\u503C                       # \u914D\u7F6E\u7684\u9ED8\u8BA4\u503C
    min: 2                                # \u6587\u672C\u6700\u77ED2\u4E2A\u5B57\u7B26
    max: 18                               # \u6587\u672C\u6700\u957F18\u4E2A\u5B57\u7B26
    password: true                        # \u8BBE\u7F6E\u4E3A\u5BC6\u7801
  configB:
    title: \u914D\u7F6EB
    description: \u8FD9\u662F\u4E00\u4E2A\u9009\u62E9\u6846\u7684\u914D\u7F6E
    type: checkbox
    default: true
  configC:
    title: \u914D\u7F6EC
    description: \u8FD9\u662F\u4E00\u4E2A\u5217\u8868\u9009\u62E9\u7684\u914D\u7F6E
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: \u914D\u7F6ED
    description: \u8FD9\u662F\u4E00\u4E2A\u52A8\u6001\u5217\u8868\u9009\u62E9\u7684\u914D\u7F6E
    type: select
    bind: $cookies                       # \u52A8\u6001\u663E\u793A\u7ED1\u5B9A\u7684values,\u503C\u662F\u4EE5$\u5F00\u5934\u7684key,value\u9700\u8981\u662F\u4E00\u4E2A\u6570\u7EC4
  configE:
    title: \u914D\u7F6EE
    description: \u8FD9\u662F\u4E00\u4E2A\u591A\u9009\u5217\u8868\u7684\u914D\u7F6E
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: \u914D\u7F6EF
    description: \u8FD9\u662F\u4E00\u4E2A\u52A8\u6001\u591A\u9009\u5217\u8868\u7684\u914D\u7F6E
    type: mult-select
    bind: $cookies
  configG:
    title: \u914D\u7F6EG
    description: \u8FD9\u662F\u4E00\u4E2A\u6570\u5B57\u7684\u914D\u7F6E
    type: number
    default: 1
    min: 10  # \u6700\u5C0F\u503C
    max: 16  # \u6700\u5927\u503C
    unit: \u5206 # \u8868\u793A\u5355\u4F4D
---
group2:
  configX:
    title: \u914D\u7F6EA
    description: \u8FD9\u662F\u4E00\u4E2A\u6587\u672C\u7C7B\u578B\u7684\u914D\u7F6E
    default: \u9ED8\u8BA4\u503C
 ==/UserConfig== */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>\u5728\u6B64\u5904\u5B9A\u4E49\u5B8C\u6210\u540E,\u5C06\u4F1A\u5728\u63A7\u5236\u9762\u677F\u4E2D\u663E\u793A\u914D\u7F6E\u6309\u94AE,\u4F9B\u7528\u6237\u914D\u7F6E,\u5F00\u53D1\u8005\u4F7F\u7528<code>GM_getValue</code>\u83B7\u53D6\u914D\u7F6E\u7684\u503C,key\u4F7F\u7528<code>group.config</code>\u6765\u8868\u793A.</p><p><img src="`+t+'" alt="" loading="lazy"></p>',3);function y(k,C){const e=a("ExternalLinkIcon");return c(),r(p,null,[u,n("p",null,[m,d,_,f,n("a",g,[h,l(e)]),v]),x],64)}var V=b(o,[["render",y],["__file","config.html.vue"]]);export{V as default};
