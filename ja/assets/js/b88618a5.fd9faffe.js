"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2366],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,y=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(8168),o=(n(6540),n(5680));const i={sidebar_position:1,sidebar_label:"Cloud Linter",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","lint","cloud","cloud lint","cloud linter","cost","redis","serverless"]},l="Cloud Linter \u3068\u306f?",a={unversionedId:"cloud-linter/index",id:"cloud-linter/index",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cloud-linter/index.md",sourceDirName:"cloud-linter",slug:"/cloud-linter/",permalink:"/ja/cloud-linter/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cloud-linter/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cloud Linter",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","lint","cloud","cloud lint","cloud linter","cost","redis","serverless"]},sidebar:"cloudLinterSidebar"},c={},u=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:u},s="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cloud-linter-\u3068\u306f"},"Cloud Linter \u3068\u306f?"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Cloud Linter"),"\u306f\u3001\u30af\u30e9\u30a6\u30c9\u306e\u30d5\u30c3\u30c8\u30d7\u30ea\u30f3\u30c8\u3092\u81ea\u52d5\u7684\u306b\u691c\u67fb\u3057\u3001\u4e00\u822c\u7684\u306a\u975e\u52b9\u7387\u6027\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u305f\u3081\u306e\u30a6\u30a7\u30d6\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002"),(0,o.yg)("p",null,"\u30af\u30e9\u30a6\u30c9\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3092\u4f01\u696d\u898f\u6a21\u3067\u904b\u7528\u3059\u308b\u3053\u3068\u306f\u3001\u30ac\u30d0\u30ca\u30f3\u30b9\u3068\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u306e\u8ab2\u984c\u3067\u3059\u3002Cloud Linter\u306e\u3088\u3046\u306a\u81ea\u52d5\u5316\u30c4\u30fc\u30eb\u306f\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u30c1\u30fc\u30e0\u304c\u5927\u898f\u6a21\u306a\u76e3\u67fb\u3092\u5b9f\u65bd\u3057\u305f\u308a\u3001\u88fd\u54c1\u30c1\u30fc\u30e0\u304c\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u81ea\u5df1\u8a55\u4fa1\u3057\u305f\u308a\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u5c0f\u898f\u6a21\u306a\u958b\u767a\u30c1\u30fc\u30e0\u306b\u3068\u3063\u3066\u306f\u3001\u84c4\u7a4d\u3055\u308c\u305f\u5c02\u9580\u77e5\u8b58\u306e\u81a8\u5927\u306a\u30d7\u30fc\u30eb\u306b\u5373\u5ea7\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"),(0,o.yg)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.yg)("p",null,"Cloud Linter\u306f\u3001\u30b3\u30fc\u30c9\u30fb\u30ea\u30f3\u30bf\u30fc\u3092\u30e2\u30c7\u30eb\u306b\u3057\u3066\u304a\u308a\u3001\u691c\u51fa\u3055\u308c\u308b\u3082\u306e\u306f\u5fc5\u305a\u3057\u3082\u9593\u9055\u3063\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3001\u7591\u308f\u3057\u3044\u3082\u306e\u3001\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u3082\u306e\u3060\u3051\u3067\u3059\u3002Momento\u30c1\u30fc\u30e0\u306e\u6570\u5341\u5e74\u306b\u308f\u305f\u308b\u30b0\u30ed\u30fc\u30d0\u30eb\u30fb\u30b9\u30b1\u30fc\u30eb\u306e\u30a4\u30f3\u30d5\u30e9\u904b\u7528\u306e\u7d4c\u9a13\u3084\u3001\u6280\u8853\u696d\u754c\u5168\u4f53\u306e\u30c7\u30b6\u30a4\u30f3\u30fb\u30d1\u30bf\u30fc\u30f3\u3084\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u30fb\u30c7\u30fc\u30bf\u306e\u53ef\u8996\u6027\u304b\u3089\u5f97\u3089\u308c\u305f\u5b66\u7fd2\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.yg)("p",null,"Cloud Linter\u304c\u8a2d\u5b9a\u3068\u4f7f\u7528\u30c7\u30fc\u30bf\u306b\u9069\u7528\u3059\u308b",(0,o.yg)("a",{parentName:"p",href:"/ja/cloud-linter/rules/"},"\u30eb\u30fc\u30eb"),"\u306f\u3001\u6700\u3082\u5b9f\u7528\u7684\u306a\u6d1e\u5bdf\u3092\u8868\u9762\u5316\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30d2\u30e5\u30fc\u30ea\u30b9\u30c6\u30a3\u30c3\u30af\u306f\u507d\u967d\u6027\uff08\u3064\u307e\u308a\u60aa\u3044\u63a8\u5968\uff09\u3092\u6e1b\u3089\u3059\u3053\u3068\u306b\u504f\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u30a8\u30c3\u30b8\u30b1\u30fc\u30b9\u306e\u6a5f\u4f1a\u3092\u898b\u9003\u3059\u30ea\u30b9\u30af\u3082\u3042\u308a\u307e\u3059\u3002\u57fa\u672c\u7684\u306a\u539f\u5247\u3092\u7406\u89e3\u3057\u3001\u3088\u308a\u5e83\u304f\u9069\u7528\u3059\u308b\u305f\u3081\u306b\u3001\u5404\u30eb\u30fc\u30eb\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u3055\u3089\u306b\u8abf\u3079\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,o.yg)("p",null,"Cloud Linter\u306f\u3001\u30a4\u30f3\u30d1\u30af\u30c8\u3092\u793a\u3059\u6700\u3082\u660e\u78ba\u306a\u6307\u6a19\u3068\u3057\u3066\u3001\u30b3\u30b9\u30c8\u306e\u6700\u9069\u5316\u3092\u512a\u5148\u3057\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u6700\u7d42\u7684\u306a\u76ee\u6a19\u306f\u9867\u5ba2\u306b\u30ef\u30fc\u30eb\u30c9\u30af\u30e9\u30b9\u306e\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3042\u308b\u3068\u8a8d\u8b58\u3057\u3066\u3044\u307e\u3059\u3002\u5f93\u3063\u3066\u3001\u30eb\u30fc\u30eb\u306b\u3088\u3063\u3066\u306f\u3001\u305f\u3068\u3048\u30b3\u30b9\u30c8\u304c\u5897\u52a0\u3059\u308b\u3068\u3057\u3066\u3082\u3001\u53ef\u7528\u6027\u3084\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u306a\u3069\u3001\u4ed6\u306e\u91cd\u8981\u306a\u6307\u6a19\u3092\u6539\u5584\u3059\u308b\u63d0\u6848\u3092\u884c\u3046\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.yg)("h2",{id:"whats-next"},"What's next?"),(0,o.yg)("p",null,"Cloud Linter\u306f\u751f\u304d\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002\u65b0\u3057\u3044\u30eb\u30fc\u30eb\u3084\u3001\u3088\u308a\u591a\u304f\u306e\u30ea\u30bd\u30fc\u30b9\u30bf\u30a4\u30d7\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u983b\u7e41\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u6700\u65b0\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306e\u305f\u3081\u306b\u983b\u7e41\u306b\u3053\u3053\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\uff01"))}p.isMDXComponent=!0}}]);