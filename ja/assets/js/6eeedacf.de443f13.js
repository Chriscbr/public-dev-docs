"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3,pagination_prev:null,sidebar_label:"Python",title:"Get to know the Momento Python SDK",description:"The Momento Python SDK allows you to create server-side applications using either synchronous or asyncio APIs, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","python","asyncio"]},i="Momento Python SDK",s={unversionedId:"sdks/python/index",id:"sdks/python/index",title:"Get to know the Momento Python SDK",description:"The Momento Python SDK allows you to create server-side applications using either synchronous or asyncio APIs, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/python/index.md",sourceDirName:"sdks/python",slug:"/sdks/python/",permalink:"/ja/sdks/python/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/python/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,pagination_prev:null,sidebar_label:"Python",title:"Get to know the Momento Python SDK",description:"The Momento Python SDK allows you to create server-side applications using either synchronous or asyncio APIs, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","python","asyncio"]}},p={},l=[{value:"\u5fc5\u8981\u6761\u4ef6",id:"\u5fc5\u8981\u6761\u4ef6",level:2},{value:"\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",id:"\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-python-sdk"},"Momento Python SDK"),(0,r.kt)("p",null,"Momento Python SDK \u306f pypi \u30d1\u30c3\u30b1\u30fc\u30b8 ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/momento/"},(0,r.kt)("inlineCode",{parentName:"a"},"momento"))," \u304b\u3089\u5165\u624b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306fGitHub\u306b\u3042\u308a\u307e\u3059\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-python"},"momentohq/client-sdk-python"),"\u3002"),(0,r.kt)("h2",{id:"\u5fc5\u8981\u6761\u4ef6"},"\u5fc5\u8981\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3.7"),"\u4ee5\u4e0a\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"Momento API Key\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),"\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"\u30ea\u30bd\u30fc\u30b9"},"\u30ea\u30bd\u30fc\u30b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache"},"Getting started with Momento Cache in Python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./topics"},"Getting started with Momento Topics in Python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-python/blob/main/examples/README.md"},"Python SDK Examples"),": Python SDK\u306e\u4f7f\u3044\u65b9\u3092\u8aac\u660e\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,r.kt)("h2",{id:"\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3"},"\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-python-redis-client"},"Redis Compatibility Client for ",(0,r.kt)("inlineCode",{parentName:"a"},"redis/redis-py"))," - \u65e2\u5b58\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"redis/redis-py")," \u30b3\u30fc\u30c9\u3067 Momento Cache \u3092\u4f7f\u3048\u308b\u3088\u3046\u306b\u3059\u308b\u30c9\u30ed\u30c3\u30d7\u30a4\u30f3\u7f6e\u304d\u63db\u3048\u3067\u3059\uff01",(0,r.kt)("a",{parentName:"li",href:"/ja/cache/develop/integrations/redis-client-compatibility"},"Redis Client Compatibility")," \u30da\u30fc\u30b8\u3082\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}u.isMDXComponent=!0}}]);