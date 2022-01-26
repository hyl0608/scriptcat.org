(self.webpackChunkscriptcat_org=self.webpackChunkscriptcat_org||[]).push([[675],{4499:(e,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>s});const s={key:"v-090359c2",path:"/dev/subscribe.html",title:"订阅模式",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"订阅更新与脚本更新",slug:"订阅更新与脚本更新",children:[]},{level:2,title:"静默安装",slug:"静默安装",children:[]},{level:2,title:"metadata",slug:"metadata",children:[{level:3,title:"name",slug:"name",children:[]},{level:3,title:"description",slug:"description",children:[]},{level:3,title:"version",slug:"version",children:[]},{level:3,title:"connect",slug:"connect",children:[]},{level:3,title:"scriptUrl",slug:"scripturl",children:[]}]}],filePathRelative:"dev/subscribe.md",git:{updatedTime:1643210347e3,contributors:[]}}},3512:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>c});const s=(0,a(6252).uE)('<h1 id="订阅模式" tabindex="-1"><a class="header-anchor" href="#订阅模式" aria-hidden="true">#</a> 订阅模式</h1><p>文件开头必须使用<code>UserSubscribe</code>而不是<code>UserScript</code>，安装时的链接推荐使用<code>user.sub.js</code>后缀，必须使用<code>https</code>链接。</p><p>订阅脚本仅会在安装时弹出安装界面由用户确认订阅，但后续的更新采用静默更新的方式，除非<code>connect</code>权限发生改变，否则不会弹出更新界面由用户确认。</p><p>一个订阅脚本可以描述所需要的多个脚本的安装链接，通过订阅模式安装的脚本使用静默安装，不会弹出确认安装页面，所安装的脚本也会展示在脚本列表中，但是<code>connect</code>权限会使用订阅中所声明的<code>connect</code>，而不会使用脚本自身的<code>connect</code>权限。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ==UserSubscribe==</span>\n<span class="token comment">// @name         xxx</span>\n<span class="token comment">// @description  订阅xxx系列脚本</span>\n<span class="token comment">// @version      0.1.0</span>\n<span class="token comment">// @author       You</span>\n<span class="token comment">// @connect      www.baidu.com</span>\n<span class="token comment">// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js</span>\n<span class="token comment">// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js</span>\n<span class="token comment">// ==/UserSubscribe==</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="订阅更新与脚本更新" tabindex="-1"><a class="header-anchor" href="#订阅更新与脚本更新" aria-hidden="true">#</a> 订阅更新与脚本更新</h2><p>根据用户设置的<code>更新间隔</code>，定时通过订阅的链接去进行检查更新，必须配置<code>version</code>才能生效。</p><p>订阅每次更新和变化会使用脚本链接与已安装的脚本进行比对，新的订阅中没有的脚本会进行删除，新增的脚本会进行静默安装。脚本的更新通过脚本自身的<code>version</code>去更新，与用户正常安装脚本的更新逻辑一致。</p><h2 id="静默安装" tabindex="-1"><a class="header-anchor" href="#静默安装" aria-hidden="true">#</a> 静默安装</h2><p>订阅的脚本使用静默的方式进行安装，订阅新增/删除脚本时仅会弹出一个通知，不会再次由用户进行确认，脚本的更新机制不发生变化需要由用户确认，若用户勾选了<code>设置-&gt;非重要变更静默更新脚本</code>的选项，则按照改规则进行更新。由于静默更新的机制，请选择安全且值得信任的订阅方。</p><h2 id="metadata" tabindex="-1"><a class="header-anchor" href="#metadata" aria-hidden="true">#</a> metadata</h2><p>订阅脚本中的某些metadata含义也将发生改变</p><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>订阅名称（在订阅列表中也可以自行进行修改）</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3><p>订阅描述，用于描述本订阅所作用途</p><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><p>订阅版本，如果忽略则将使用订阅脚本的内容是否发生改变去更新</p><h3 id="connect" tabindex="-1"><a class="header-anchor" href="#connect" aria-hidden="true">#</a> connect</h3><p>获取网站的访问权限,请看<code>GM_cookie</code>和<code>GM_xmlhttpRequest</code>，通过订阅模式所安装的脚本中的<code>connect</code>会被订阅的<code>connect</code>所覆盖</p><h3 id="scripturl" tabindex="-1"><a class="header-anchor" href="#scripturl" aria-hidden="true">#</a> scriptUrl</h3><p>订阅所需要安装的脚本链接</p>',22),c={render:function(e,n){return s}}}}]);