(self.webpackChunkscriptcat_org=self.webpackChunkscriptcat_org||[]).push([[740],{8093:(e,l,i)=>{"use strict";i.r(l),i.d(l,{data:()=>d});const d={key:"v-d3de5534",path:"/change/",title:"更新日志",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"v0.6.2",slug:"v0-6-2",children:[]},{level:2,title:"v0.6.1",slug:"v0-6-1",children:[]},{level:2,title:"v0.6.0",slug:"v0-6-0",children:[]},{level:2,title:"v0.5.3",slug:"v0-5-3",children:[]},{level:2,title:"v0.5.2",slug:"v0-5-2",children:[]},{level:2,title:"v0.5.1",slug:"v0-5-1",children:[]},{level:2,title:"v0.5.0",slug:"v0-5-0",children:[]},{level:2,title:"v0.4.4",slug:"v0-4-4",children:[]},{level:2,title:"v0.4.2",slug:"v0-4-2",children:[]},{level:2,title:"v0.4.1",slug:"v0-4-1",children:[]},{level:2,title:"v0.4.0",slug:"v0-4-0",children:[]},{level:2,title:"v0.3.4",slug:"v0-3-4",children:[]},{level:2,title:"v0.3.0",slug:"v0-3-0",children:[]},{level:2,title:"v0.2.0",slug:"v0-2-0",children:[]}],filePathRelative:"change/README.md",git:{updatedTime:1633591457e3,contributors:[]}}},3232:(e,l,i)=>{"use strict";i.r(l),i.d(l,{default:()=>Z});var d=i(6252);const o=(0,d.uE)('<h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1><h2 id="v0-6-2" tabindex="-1"><a class="header-anchor" href="#v0-6-2" aria-hidden="true">#</a> v0.6.2</h2><blockquote><p>添加油猴<code>resource</code>的支持和修复bug</p></blockquote><ul><li>添加<code>GM_getResourceText</code>和<code>GM_getResourceURL</code></li><li>修复沙盒set属性问题</li><li>修复<code>GM_registerMenuCommand</code>重复注册显示的问题</li><li>修复更新页面脚本开启状态不一致的问题</li></ul><h2 id="v0-6-1" tabindex="-1"><a class="header-anchor" href="#v0-6-1" aria-hidden="true">#</a> v0.6.1</h2><blockquote><p>一些bug修复</p></blockquote><ul><li>用户信息管理页</li><li>油猴window.onxxxx兼容</li><li>优化安装页面显示</li><li>优化登录登出</li><li>修复弹出页新建脚本bug</li><li>修复老版本安装的脚本新版本无法正常执行的问题</li></ul><h2 id="v0-6-0" tabindex="-1"><a class="header-anchor" href="#v0-6-0" aria-hidden="true">#</a> v0.6.0</h2>',8),c=(0,d.Wm)("p",null,"两个大功能,订阅功能与云同步.(导入导出到本地在下两个小版本中发布,导入导出到云盘等其它存储计划中)",-1),u=(0,d.Wm)("p",null,"云同步暂时只支持脚本与脚本订阅同步,用户配置同步后续会支持.不会支持value同步,开发者需要注意.",-1),a=(0,d.Wm)("p",null,"新设备同步安装的脚本会根据: 前台脚本默认开启,后台脚本默认关闭的方式进行安装,脚本开启状态不会同步,需要用户重新开启或者关闭.",-1),t=(0,d.Uk)("关于这方面有什么意见可以提"),r={href:"https://github.com/scriptscat/scriptcat/issues",target:"_blank",rel:"noopener noreferrer"},n=(0,d.Uk)("issue"),h=(0,d.Uk)("反馈"),s=(0,d.Uk)("增加"),v=(0,d.Uk)("脚本订阅"),m=(0,d.Uk)("功能"),k=(0,d.uE)("<li>增加脚本云同步功能</li><li>优化脚本更新确认界面使用静默方式打开</li><li>优化脚本新建</li><li>修改脚本列表页<code>特性</code>栏为<code>来源</code></li><li>修复油猴兼容性bug</li><li>修复无<code>namespace</code>的脚本会导致安装错误的问题</li><li>修复<code>resource</code>资源加载和释放问题</li><li>修复两位版本号对比失败的问题</li>",8),b=(0,d.uE)('<h2 id="v0-5-3" tabindex="-1"><a class="header-anchor" href="#v0-5-3" aria-hidden="true">#</a> v0.5.3</h2><blockquote><p>修复bug</p></blockquote><ul><li>修复面板基本设置编辑不生效的问题</li><li>修复更新脚本选择脚本状态无效的问题</li><li>修复脚本更新运行状态显示错误</li></ul><h2 id="v0-5-2" tabindex="-1"><a class="header-anchor" href="#v0-5-2" aria-hidden="true">#</a> v0.5.2</h2><blockquote><p>cookie操作增强</p></blockquote><ul><li>支持对隐身窗口的cookie操作</li><li>增强<code>GM_cookie</code>函数,支持<code>delete/set/store</code>操作</li><li><code>GM_addValueChangeListener</code>支持返回tabid(后台脚本中)</li><li>增加<code>GM_getCookieStore</code>通过tabid,获取cookie store</li><li>增加<code>storageName</code>来规定value共享,移除原来的<code>namespace</code>共享</li><li>修复浏览器打开时脚本加载问题</li></ul><h2 id="v0-5-1" tabindex="-1"><a class="header-anchor" href="#v0-5-1" aria-hidden="true">#</a> v0.5.1</h2><blockquote><p>优化界面UI,优化调试模式</p></blockquote>',8),p=(0,d.Wm)("li",null,"更新界面UI,优化页面逻辑",-1),W=(0,d.Uk)("优化后台脚本"),g=(0,d.Uk)("调试模式"),f=(0,d.Wm)("li",null,"修复cron表达式错误的时候,脚本列表不显示",-1),U=(0,d.Wm)("li",null,[(0,d.Uk)("移除"),(0,d.Wm)("code",null,"@console")],-1),q=(0,d.Wm)("h2",{id:"v0-5-0",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#v0-5-0","aria-hidden":"true"},"#"),(0,d.Uk)(" v0.5.0")],-1),x=(0,d.Wm)("strong",null,"重大更新",-1),_=(0,d.Uk)(",开始支持"),M=(0,d.Uk)("CloudCat"),C=(0,d.Uk)("支持"),G=(0,d.Uk)("CloudCat"),E=(0,d.Wm)("li",null,"编辑操作增加导出/导入功能",-1),w=(0,d.Wm)("li",null,"添加通知信息",-1),R=(0,d.Wm)("li",null,"优化列表状态栏",-1),A=(0,d.Wm)("li",null,"沙盒优化",-1),I=(0,d.Wm)("li",null,"修复油猴API兼容问题",-1),P=(0,d.Wm)("li",null,[(0,d.Uk)("修复"),(0,d.Wm)("code",null,"match"),(0,d.Uk)("问题")],-1),y=(0,d.uE)('<h2 id="v0-4-4" tabindex="-1"><a class="header-anchor" href="#v0-4-4" aria-hidden="true">#</a> v0.4.4</h2><blockquote><p>v0.4.3 兼容Firefox处理以过审核.</p></blockquote><ul><li>处理Firefox sandbox逻辑</li><li>优化安装/权限确认页面UI</li><li>优化编辑器快捷键和工具条</li><li>修复某些情况下安装或更新时不显示脚本名的bug</li><li>修复<code>GM_xmlhttpRequest</code>的<code>arraybuffer,blob</code>支持</li><li>修复若干兼容油猴的bug</li></ul><h2 id="v0-4-2" tabindex="-1"><a class="header-anchor" href="#v0-4-2" aria-hidden="true">#</a> v0.4.2</h2><blockquote><p>优化代码,UI调整</p></blockquote>',5),L=(0,d.uE)("<li>界面UI调整</li><li>增加<code>GM_xmlhttpRequest</code>所支持的<code>unsafe header</code>和支持<code>arraybuffer</code>,<code>nocache</code>,<code>user</code>,<code>password</code>,<code>overrideMimeType</code>,功能</li>",2),T=(0,d.Uk)("增加运行日志查看功能,点击面板"),F=(0,d.Wm)("code",null,"运行状态",-1),N=(0,d.Uk)("栏即可查看最后一次运行日志.具体请看:"),V=(0,d.Uk)("console"),j=(0,d.Uk)("功能"),z=(0,d.Wm)("li",null,[(0,d.Uk)("修复"),(0,d.Wm)("code",null,"GM_notification"),(0,d.Uk)("的"),(0,d.Wm)("code",null,"done"),(0,d.Uk)("回调")],-1),B=(0,d.Wm)("li",null,"优化调整代码列表排序逻辑",-1),D=(0,d.Wm)("li",null,"优化最后更新栏点击可进行脚本的手动检查更新",-1),H=(0,d.uE)('<h2 id="v0-4-1" tabindex="-1"><a class="header-anchor" href="#v0-4-1" aria-hidden="true">#</a> v0.4.1</h2><blockquote><p>重大bug修复</p></blockquote><ul><li>修复split导致的前台脚本无法执行的问题</li><li>增加<code>GM_xmlhttpRequest</code>所支持的<code>unsafe header</code></li></ul><h2 id="v0-4-0" tabindex="-1"><a class="header-anchor" href="#v0-4-0" aria-hidden="true">#</a> v0.4.0</h2>',4),O=(0,d.Uk)("做了一些界面上的优化,增加了"),S=(0,d.Uk)("用户配置"),Y=(0,d.Uk)("功能"),J=(0,d.Uk)("增加控制台的UserConfig功能,详情请看"),K=(0,d.Uk)("用户配置文档"),Q=(0,d.uE)("<li>优化控制台编辑时<code>definition</code>后缀为<code>.d.ts</code>的地址,自动识别增加自动补全</li><li>优化控制台的运行日志ui</li><li>优化控制台脚本列表,<code>运行状态</code>列鼠标放置可显示下一次运行时间等描述</li><li>优化弹出页面ui,增加脚本运行数角标</li><li>优化弹出页面运行脚本页显示当前页面上所执行的脚本</li><li>优化弹出页面增加后台脚本项,可直接在弹出页上执行脚本</li><li>优化安装页面增加脚本的开启开关</li><li>支持<code>GM_registerMenuCommand</code>和<code>GM_unregisterMenuCommand</code></li><li>支持<code>GM_xmlhttpRequest</code>填写一些unsafe的header</li>",9),X=(0,d.uE)('<h2 id="v0-3-4" tabindex="-1"><a class="header-anchor" href="#v0-3-4" aria-hidden="true">#</a> v0.3.4</h2><ul><li>新建脚本默认开启(从远程安装的后端脚本依旧默认为不开启)</li><li>管理面板简单的分页功能</li><li>增加开机启动自动运行</li><li>支持<code>@require-css</code>直接引入css文件</li><li>支持<code>document-menu</code>执行方式</li><li>支持<code>@include</code>和<code>@exclude</code></li><li>移除<code>@debug</code>,新增菜单条</li><li>修复若干bug</li></ul><h2 id="v0-3-0" tabindex="-1"><a class="header-anchor" href="#v0-3-0" aria-hidden="true">#</a> v0.3.0</h2><blockquote><p>开始支持油猴脚本了</p></blockquote><ul><li>支持油猴脚本!暂时支持match进行匹配</li><li>支持<code>@require</code>引用其他脚本</li><li>将GM_set/getValue函数使其实时全局同步</li><li>添加了<code>CAT_click</code>API,可进行真实点击</li><li>支持了<code>GM_setClipboard</code></li></ul><h2 id="v0-2-0" tabindex="-1"><a class="header-anchor" href="#v0-2-0" aria-hidden="true">#</a> v0.2.0</h2><blockquote><p>第一个可用的版本</p></blockquote><ul><li>后台脚本,可以使你的脚本持续的运行在后台.</li><li>定时脚本,可以每日定时执行,每天通过脚本定时处理事务.可用于自动签到,定时提醒等功能.</li><li>基本的API,初步规划好了API规则</li><li>脚本管理面板</li></ul>',8),Z={render:function(e,l){const i=(0,d.up)("OutboundLink"),Z=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.j4)(d.HY,null,[o,(0,d.Wm)("blockquote",null,[c,u,a,(0,d.Wm)("p",null,[t,(0,d.Wm)("a",r,[n,(0,d.Wm)(i)]),h])]),(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[s,(0,d.Wm)(Z,{to:"/dev/subscribe.html"},{default:(0,d.w5)((()=>[v])),_:1}),m]),k]),b,(0,d.Wm)("ul",null,[p,(0,d.Wm)("li",null,[W,(0,d.Wm)(Z,{to:"/dev/background.html#%E8%84%9A%E6%9C%AC%E8%B0%83%E8%AF%95"},{default:(0,d.w5)((()=>[g])),_:1})]),f,U]),q,(0,d.Wm)("blockquote",null,[(0,d.Wm)("p",null,[x,_,(0,d.Wm)(Z,{to:"/dev/cloudcat.html"},{default:(0,d.w5)((()=>[M])),_:1})])]),(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[C,(0,d.Wm)(Z,{to:"/dev/cloudcat.html"},{default:(0,d.w5)((()=>[G])),_:1})]),E,w,R,A,I,P]),y,(0,d.Wm)("ul",null,[L,(0,d.Wm)("li",null,[T,F,N,(0,d.Wm)(Z,{to:"/dev/meta.html#console"},{default:(0,d.w5)((()=>[V])),_:1}),j]),z,B,D]),H,(0,d.Wm)("blockquote",null,[(0,d.Wm)("p",null,[O,(0,d.Wm)(Z,{to:"/dev/config.html"},{default:(0,d.w5)((()=>[S])),_:1}),Y])]),(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[J,(0,d.Wm)(Z,{to:"/dev/config.html"},{default:(0,d.w5)((()=>[K])),_:1})]),Q]),X],64)}}}}]);