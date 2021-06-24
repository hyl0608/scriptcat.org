(self.webpackChunkscriptcat_org=self.webpackChunkscriptcat_org||[]).push([[740],{8093:(e,l,i)=>{"use strict";i.r(l),i.d(l,{data:()=>c});const c={key:"v-d3de5534",path:"/change/",title:"更新日志",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"v0.4.2",slug:"v0-4-2",children:[]},{level:2,title:"v0.4.1",slug:"v0-4-1",children:[]},{level:2,title:"v0.4.0",slug:"v0-4-0",children:[]},{level:2,title:"v0.3.4",slug:"v0-3-4",children:[]},{level:2,title:"v0.3.0",slug:"v0-3-0",children:[]},{level:2,title:"v0.2.0",slug:"v0-2-0",children:[]}],filePathRelative:"change/README.md",git:{updatedTime:1624550461e3,contributors:[]}}},4767:(e,l,i)=>{"use strict";i.r(l),i.d(l,{default:()=>M});var c=i(6252);const o=(0,c.Wm)("h1",{id:"更新日志"},[(0,c.Wm)("a",{class:"header-anchor",href:"#更新日志"},"#"),(0,c.Uk)(" 更新日志")],-1),d=(0,c.Wm)("h2",{id:"v0-4-2"},[(0,c.Wm)("a",{class:"header-anchor",href:"#v0-4-2"},"#"),(0,c.Uk)(" v0.4.2")],-1),u=(0,c.Wm)("blockquote",null,[(0,c.Wm)("p",null,"优化代码,UI调整")],-1),t=(0,c.uE)("<li>界面UI调整</li><li>增加<code>GM_xmlhttpRequest</code>所支持的<code>unsafe header</code>和支持<code>arraybuffer</code>,<code>nocache</code>,<code>user</code>,<code>password</code>,<code>overrideMimeType</code>,功能</li>",2),a=(0,c.Uk)("增加运行日志查看功能,点击面板"),r=(0,c.Wm)("code",null,"运行状态",-1),n=(0,c.Uk)("栏即可查看最后一次运行日志.具体请看:"),h=(0,c.Uk)("console"),s=(0,c.Uk)("功能"),v=(0,c.Wm)("li",null,[(0,c.Uk)("修复"),(0,c.Wm)("code",null,"GM_notification"),(0,c.Uk)("的"),(0,c.Wm)("code",null,"done"),(0,c.Uk)("回调")],-1),m=(0,c.Wm)("li",null,"优化调整代码列表排序逻辑",-1),k=(0,c.Wm)("li",null,"优化最后更新栏点击可进行脚本的手动检查更新",-1),f=(0,c.uE)('<h2 id="v0-4-1"><a class="header-anchor" href="#v0-4-1">#</a> v0.4.1</h2><blockquote><p>重大bug修复</p></blockquote><ul><li>修复split导致的前台脚本无法执行的问题</li><li>增加<code>GM_xmlhttpRequest</code>所支持的<code>unsafe header</code></li></ul><h2 id="v0-4-0"><a class="header-anchor" href="#v0-4-0">#</a> v0.4.0</h2>',4),p=(0,c.Uk)("做了一些界面上的优化,增加了"),g=(0,c.Uk)("用户配置"),W=(0,c.Uk)("功能"),U=(0,c.Uk)("增加控制台的UserConfig功能,详情请看"),b=(0,c.Uk)("用户配置文档"),_=(0,c.uE)("<li>优化控制台编辑时<code>definition</code>后缀为<code>.d.ts</code>的地址,自动识别增加自动补全</li><li>优化控制台的运行日志ui</li><li>优化控制台脚本列表,<code>运行状态</code>列鼠标放置可显示下一次运行时间等描述</li><li>优化弹出页面ui,增加脚本运行数角标</li><li>优化弹出页面运行脚本页显示当前页面上所执行的脚本</li><li>优化弹出页面增加后台脚本项,可直接在弹出页上执行脚本</li><li>优化安装页面增加脚本的开启开关</li><li>支持<code>GM_registerMenuCommand</code>和<code>GM_unregisterMenuCommand</code></li><li>支持<code>GM_xmlhttpRequest</code>填写一些unsafe的header</li>",9),q=(0,c.uE)('<h2 id="v0-3-4"><a class="header-anchor" href="#v0-3-4">#</a> v0.3.4</h2><ul><li>新建脚本默认开启(从远程安装的后端脚本依旧默认为不开启)</li><li>管理面板简单的分页功能</li><li>增加开机启动自动运行</li><li>支持<code>@require-css</code>直接引入css文件</li><li>支持<code>document-menu</code>执行方式</li><li>支持<code>@include</code>和<code>@exclude</code></li><li>移除<code>@debug</code>,新增菜单条</li><li>修复若干bug</li></ul><h2 id="v0-3-0"><a class="header-anchor" href="#v0-3-0">#</a> v0.3.0</h2><blockquote><p>开始支持油猴脚本了</p></blockquote><ul><li>支持油猴脚本!暂时支持match进行匹配</li><li>支持<code>@require</code>引用其他脚本</li><li>将GM_set/getValue函数使其实时全局同步</li><li>添加了<code>CAT_click</code>API,可进行真实点击</li><li>支持了<code>GM_setClipboard</code></li></ul><h2 id="v0-2-0"><a class="header-anchor" href="#v0-2-0">#</a> v0.2.0</h2><blockquote><p>第一个可用的版本</p></blockquote><ul><li>后台脚本,可以使你的脚本持续的运行在后台.</li><li>定时脚本,可以每日定时执行,每天通过脚本定时处理事务.可用于自动签到,定时提醒等功能.</li><li>基本的API,初步规划好了API规则</li><li>脚本管理面板</li></ul>',8),M={render:function(e,l){const i=(0,c.up)("RouterLink");return(0,c.wg)(),(0,c.j4)(c.HY,null,[o,d,u,(0,c.Wm)("ul",null,[t,(0,c.Wm)("li",null,[a,r,n,(0,c.Wm)(i,{to:"/dev/meta.html#console"},{default:(0,c.w5)((()=>[h])),_:1}),s]),v,m,k]),f,(0,c.Wm)("blockquote",null,[(0,c.Wm)("p",null,[p,(0,c.Wm)(i,{to:"/dev/config.html"},{default:(0,c.w5)((()=>[g])),_:1}),W])]),(0,c.Wm)("ul",null,[(0,c.Wm)("li",null,[U,(0,c.Wm)(i,{to:"/dev/config.html"},{default:(0,c.w5)((()=>[b])),_:1})]),_]),q],64)}}}}]);