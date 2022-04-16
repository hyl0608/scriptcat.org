import{r as p,c as t,a as n,b as o,F as c,e as a,d as s,o as l}from"./app.a5fac565.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var u="/background/image-20210621214143661.png",i="/background/image-20210621214124685.png",k="/background/image-20210903141601057.png",m="/background/image-20210903144155450.png";const b={},d=a('<h1 id="\u540E\u53F0\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u540E\u53F0\u811A\u672C" aria-hidden="true">#</a> \u540E\u53F0\u811A\u672C</h1><p>\u540E\u53F0\u811A\u672C\u9002\u7528\u4E8E\u6301\u7EED\u8FD0\u884C\u7C7B\u578B\u7684\u811A\u672C.\u540E\u53F0\u811A\u672C\u662F\u811A\u672C\u732B\u7279\u6709\u7684\u811A\u672C,\u540E\u53F0\u811A\u672C\u8FD0\u884C\u5728\u6C99\u76D2\u4E2D,\u65E0\u6CD5\u64CD\u4F5Cdom\u5BF9\u8C61.\u53EF\u4F7F\u7528\u4E0E\u6CB9\u7334\u4E00\u81F4\u7684GM API\u8FDB\u884C\u5F00\u53D1,\u5BF9\u4E8E\u517C\u5BB9\u6027\u4F1A\u5728\u6587\u6863\u4E2D\u6807\u51FA.</p><h2 id="\u540E\u53F0\u811A\u672C-1" tabindex="-1"><a class="header-anchor" href="#\u540E\u53F0\u811A\u672C-1" aria-hidden="true">#</a> \u540E\u53F0\u811A\u672C</h2><p>\u540E\u53F0\u811A\u672C\u7531<code>@background</code>\u5C5E\u6027\u58F0\u660E,\u540E\u53F0\u811A\u672C\u5C06\u5141\u8BB8\u5728\u5F00\u542F\u811A\u672C\u6216\u8005\u6D4F\u89C8\u5668\u542F\u52A8\u540E,\u8BA9\u811A\u672C\u5728\u540E\u53F0\u6301\u7EED\u8FD0\u884C.</p><h2 id="\u5B9A\u65F6\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u811A\u672C" aria-hidden="true">#</a> \u5B9A\u65F6\u811A\u672C</h2><blockquote><p>\u5B9A\u65F6\u811A\u672C\u4E5F\u5C5E\u4E8E\u540E\u53F0\u811A\u672C\u7684\u4E00\u79CD,\u5B9A\u65F6\u811A\u672C\u9002\u7528\u4E8E\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u6267\u884C\u4E00\u6B21\u7684\u811A\u672C.</p></blockquote><p>\u5B9A\u65F6\u811A\u672C\u7531<code>@crontab</code>\u5C5E\u6027\u58F0\u660E,\u53EF\u4EE5\u7CBE\u786E\u5230\u79D2\u7EA7\u8C03\u7528,\u63D0\u4F9B\u4E86\u4E00\u4E2A<code>once</code>\u53C2\u6570,\u8868\u793A\u67D0\u4E2A\u65F6\u95F4\u6BB5\u5185\u4F1A\u6267\u884C\u4E00\u6B21(\u8003\u8651\u6D4F\u89C8\u5668\u672A\u6253\u5F00\u7684\u60C5\u51B5).\u5EFA\u8BAE\u811A\u672C\u7684\u8FD0\u884C\u65F6\u95F4\u548C\u91CD\u8BD5\u65F6\u95F4\u4E0D\u8981\u5927\u4E8E\u5B9A\u65F6\u65F6\u95F4\u7684\u95F4\u9694.</p>',7),h=s("\u53EF\u4F7F\u7528\u5728\u7EBF\u5DE5\u5177\u6D4B\u8BD5cron\u8868\u8FBE\u5F0F,\u6269\u5C55\u4E2D\u7684"),g=n("code",null,"once",-1),_=s("\u66FF\u6362\u6210"),v=n("code",null,"*",-1),f=s(":"),y={href:"https://tool.lu/crontab/",target:"_blank",rel:"noopener noreferrer"},w=s("cron\u5728\u7EBF\u6D4B\u8BD5"),x=a(`<p>\u5728\u63A7\u5236\u53F0\u9875\u9762,\u9F20\u6807\u653E\u7F6E<code>\u8FD0\u884C\u72B6\u6001</code>\u680F\u65F6\u4F1A\u663E\u793A\u4E0B\u4E00\u6B21\u7684\u8FD0\u884C\u65F6\u95F4.</p><h3 id="crontab-\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#crontab-\u4F8B\u5B50" aria-hidden="true">#</a> Crontab \u4F8B\u5B50</h3><blockquote><p>\u8BF7\u6CE8\u610F\u4E00\u4E2A\u811A\u672C\u4E2D\u53EA\u6709\u7B2C\u4E00\u4E2Acrontab\u8868\u8FBE\u5F0F\u751F\u6548,<code>once</code>\u8BED\u4E49\u4E3A\u53EA\u5728\u5F53\u524D\u7684\u65F6\u95F4\u4F4D\u4E0A\u8FD0\u884C\u4E00\u6B21</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//@crontab * * * * * * \u6BCF\u79D2\u8FD0\u884C\u4E00\u6B21</span>
<span class="token comment">//@crontab * * * * * \u6BCF\u5206\u949F\u8FD0\u884C\u4E00\u6B21</span>
<span class="token comment">//@crontab 0 */6 * * * \u6BCF6\u5C0F\u65F6\u76840\u5206\u65F6\u6267\u884C\u4E00\u6B21</span>
<span class="token comment">//@crontab 15 */6 * * * \u6BCF6\u5C0F\u65F6\u768415\u5206\u65F6\u6267\u884C\u4E00\u6B21</span>
<span class="token comment">//@crontab * once * * * \u6BCF\u5C0F\u65F6\u8FD0\u884C\u4E00\u6B21</span>
<span class="token comment">//@crontab * * once * * \u6BCF\u5929\u8FD0\u884C\u4E00\u6B21</span>
<span class="token comment">//@crontab * 10 once * * \u6BCF\u592910\u70B9-10:59\u4E2D\u8FD0\u884C\u4E00\u6B21,\u5047\u8BBE\u5F5310:04\u65F6\u8FD0\u884C\u4E86\u4E00\u6B21,10:05-10:59\u7684\u540E\u7EED\u7684\u65F6\u95F4\u5C06\u4E0D\u4F1A\u518D\u8FD0\u884C</span>
<span class="token comment">//@crontab * 1,3,5 once * * \u6BCF\u59291\u70B93\u70B95\u70B9\u4E2D\u8FD0\u884C\u4E00\u6B21,\u5047\u8BBE\u5F531\u70B9\u65F6\u8FD0\u884C\u4E86\u4E00\u6B21,3,5\u70B9\u5C06\u4E0D\u4F1A\u518D\u8FD0\u884C</span>
<span class="token comment">//@crontab * */4 once * * \u6BCF\u5929\u6BCF\u96944\u5C0F\u65F6\u68C0\u6D4B\u8FD0\u884C\u4E00\u6B21,\u5047\u8BBE\u5F534\u70B9\u65F6\u8FD0\u884C\u4E86\u4E00\u6B21,8,12,16,20,24\u70B9\u7B49\u540E\u7EED\u7684\u65F6\u95F4\u5C06\u4E0D\u4F1A\u518D\u8FD0\u884C</span>
<span class="token comment">//@crontab * 10-23 once * * \u6BCF\u592910\u70B9-23:59\u4E2D\u8FD0\u884C\u4E00\u6B21,\u5047\u8BBE\u5F5310:04\u65F6\u8FD0\u884C\u4E86\u4E00\u6B21,10:05-23:59\u7684\u540E\u7EED\u65F6\u95F4\u5C06\u4E0D\u4F1A\u518D\u8FD0\u884C</span>
<span class="token comment">//@crontab * once 13 * * \u6BCF\u4E2A\u6708\u768413\u53F7\u7684\u6BCF\u5C0F\u65F6\u8FD0\u884C\u4E00\u6B21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7" aria-hidden="true">#</a> \u65E5\u5FD7</h2><p>\u5728\u811A\u672C\u5217\u8868\u9875\u9762\uFF0C\u9F20\u6807\u653E\u7F6E<code>\u8FD0\u884C\u72B6\u6001\u680F</code>\u4F1A\u63D0\u793A\u811A\u672C\u7684\u8FD0\u884C\u72B6\u6001,\u70B9\u51FB\u53EF\u5F39\u51FA\u901A\u8FC7<code>GM_log</code>\u6253\u5370\u7684\u65E5\u5FD7\u5185\u5BB9</p><p><img src="`+u+'" alt="" loading="lazy"></p><p><img src="'+i+'" alt="" loading="lazy"></p><h2 id="\u811A\u672C\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u811A\u672C\u8C03\u8BD5" aria-hidden="true">#</a> \u811A\u672C\u8C03\u8BD5</h2><p>\u540E\u53F0\u811A\u672C\u53EF\u76F4\u63A5\u5728\u811A\u672C\u7F16\u8F91\u9875\u9762\u8FDB\u884C\u8C03\u8BD5,\u4F46\u662F\u5B58\u5728\u4E0B\u9762\u95EE\u9898: value\u65E0\u6CD5\u6B63\u5E38\u540C\u6B65,registerMenu\u83DC\u5355\u65E0\u6CD5\u6B63\u5E38\u89E6\u53D1.</p><p><img src="'+k+'" alt="" loading="lazy"></p><p>\u5982\u679C\u662F\u8FD0\u884C\u7684\u73AF\u5883\u8BF7\u524D\u5F80\u6269\u5C55\u5F00\u542F<strong>\u5F00\u53D1\u4EBA\u5458\u6A21\u5F0F</strong>\u7136\u540E\u5728\u70B9\u51FB\u6269\u5C55\u7684background.html\u8FDB\u884C\u8C03\u8BD5\uFF0C\u8FD0\u884C\u65F6\u4EA7\u751F\u7684\u9519\u8BEF\u4E5F\u53EF\u4EE5\u5728\u8FD0\u884C\u65E5\u5FD7\u4E2D\u67E5\u770B</p><p><img src="'+m+`" alt="image-20210903144155450" loading="lazy"></p><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2><p>\u5341\u5206\u63A8\u8350\u8FD9\u79CD\u5199\u6CD5,\u4E5F\u4FBF\u4E8E\u811A\u672C\u7BA1\u7406\u5668\u7684\u811A\u672C\u76D1\u63A7,\u5BF9\u4E8E\u6709\u5F02\u6B65\u6267\u884C\u7684,\u5FC5\u987B\u4F7F\u7528<code>Promise</code>.</p><p>\u811A\u672C\u8FD4\u56DE<code>Promise</code>\u5BF9\u8C61,\u7BA1\u7406\u5668\u4E5F\u53EF\u4EE5\u5C06\u8FD4\u56DE\u7684\u5185\u5BB9\u5F53\u4F5C\u65E5\u5FD7\u8BB0\u5F55\u4E0B\u6765.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         \u540E\u53F0\u811A\u672C</span>
<span class="token comment">// @namespace    wyz</span>
<span class="token comment">// @version      1.0.0</span>
<span class="token comment">// @author       wyz</span>
<span class="token comment">// @background</span>
<span class="token comment">// ==/UserScript==</span>
<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u6267\u884C\u6210\u529F</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u6267\u884C\u5931\u8D25,\u5E76\u8FD4\u56DE\u9519\u8BEF\u539F\u56E0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         \u6BCF\u5929\u8FD0\u884C\u4E00\u6B21\u7684\u5B9A\u65F6\u811A\u672C</span>
<span class="token comment">// @namespace    wyz</span>
<span class="token comment">// @version      1.0.0</span>
<span class="token comment">// @author       wyz</span>
<span class="token comment">// @crontab      * * once * *</span>
<span class="token comment">// ==/UserScript==</span>
<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u6267\u884C\u6210\u529F</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u6267\u884C\u5931\u8D25,\u5E76\u8FD4\u56DE\u9519\u8BEF\u539F\u56E0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8BF7\u6CE8\u610F\u5C06<code>resolve/reject</code>\u7684\u64CD\u4F5C\u653E\u5165\u6267\u884C\u5B8C\u6BD5\u540E\u7684\u6B65\u9AA4\u4E2D,<code>resolve/reject</code>\u540E\u7BA1\u7406\u5668\u4F1A\u8BA4\u4E3A\u811A\u672C\u6267\u884C\u5B8C\u6BD5,\u540E\u7EED\u7684\u6240\u6709GM\u64CD\u4F5C\u5C06\u4E0D\u4F1A\u751F\u6548.\u5982\u679C\u662F\u5E0C\u671B\u6301\u7EED\u8FD0\u884C\u7684\u540E\u53F0\u811A\u672C,\u53EF\u4EE5\u4E0D\u8C03\u7528<code>resolve</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         \u8BF7\u6C42API</span>
<span class="token comment">// @namespace    wyz</span>
<span class="token comment">// @version      1.0.0</span>
<span class="token comment">// @author       wyz</span>
<span class="token comment">// @crontab      * * once * *</span>
<span class="token comment">// ==/UserScript==</span>
<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">GM_xmlhttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://bbs.tampermonkey.net.cn/&#39;</span><span class="token punctuation">,</span>
        <span class="token function">onload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u6267\u884C\u6210\u529F</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">onerror</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u6267\u884C\u5931\u8D25,\u5E76\u8FD4\u56DE\u9519\u8BEF\u539F\u56E0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,20);function j(q,z){const e=p("ExternalLinkIcon");return l(),t(c,null,[d,n("p",null,[h,g,_,v,f,n("a",y,[w,o(e)])]),x],64)}var S=r(b,[["render",j],["__file","background.html.vue"]]);export{S as default};
