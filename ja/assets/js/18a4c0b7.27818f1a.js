"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=l(r),u=i,d=v["".concat(s,".").concat(u)]||v[u]||h[u]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:4,sidebar_label:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u9000\u304d vs \u671f\u9650\u5207\u308c",title:"Cache eviction vs expiration",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Serverless cache"},a="Cache eviction\u3068cache expiration",c={unversionedId:"cache/learn/how-it-works/cache-eviction-vs-expiration",id:"cache/learn/how-it-works/cache-eviction-vs-expiration",title:"Cache eviction vs expiration",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Serverless cache",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/learn/how-it-works/cache-eviction-vs-expiration.md",sourceDirName:"cache/learn/how-it-works",slug:"/cache/learn/how-it-works/cache-eviction-vs-expiration",permalink:"/ja/cache/learn/how-it-works/cache-eviction-vs-expiration",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/how-it-works/cache-eviction-vs-expiration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u9000\u304d vs \u671f\u9650\u5207\u308c",title:"Cache eviction vs expiration",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Serverless cache"},sidebar:"tutorialSidebar",previous:{title:"Expiring data with TTL",permalink:"/ja/cache/learn/how-it-works/expire-data-with-ttl"},next:{title:"Security"}},s={},l=[{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u9000\u304d\u3068\u306f\uff1f",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u9000\u304d\u3068\u306f",level:2},{value:"Momento Serverless Cache and eviction",id:"momento-serverless-cache-and-eviction",level:2},{value:"Cache expiration",id:"cache-expiration",level:2}],p={toc:l};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cache-eviction\u3068cache-expiration"},"Cache eviction\u3068cache expiration"),(0,i.kt)("p",null,"\u30c7\u30fc\u30bf\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0\u306e\u6700\u3082\u91cd\u8981\u306a\u5074\u9762\u306e1\u3064\u3067\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u3053\u308c\u3092\u884c\u30462\u3064\u306e\u624b\u6bb5\u3001Cache eviction\u3068cache expiration\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3001Momento Serverless Cache\u304c\u3053\u308c\u3089\u306e\u6982\u5ff5\u3092\u3069\u306e\u3088\u3046\u306b\u63a1\u7528\u3057\u3066\u3044\u308b\u304b\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u9000\u304d\u3068\u306f"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u9000\u304d\u3068\u306f\uff1f"),(0,i.kt)("p",null,'\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u7528\u8a9e\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u66f8\u304d\u8fbc\u307f\u306b\u3088\u3063\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30c7\u30fc\u30bf\u304c\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30e2\u30ea\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u8d85\u3048\u308b\u3053\u3068\u306b\u306a\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u30b9\u30da\u30fc\u30b9\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u30c7\u30fc\u30bf\u3092\u524a\u9664\uff08"evict"\uff09\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3053\u3068\u3092eviction\u3068\u3044\u3044\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u69cb\u6210\u306b\u3088\u3063\u3066\u306f\u3001\u3053\u306e\u9000\u907f\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306f\u4f7f\u7528\u983b\u5ea6\u306e\u4f4e\u3044\u30c7\u30fc\u30bf\u3067\u3042\u3063\u305f\u308a\u3001\u5225\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u3042\u3063\u305f\u308a\u3059\u308b\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u5b9f\u88c5\u306b\u3088\u3063\u3066\u306f\u3001\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u30c7\u30fc\u30bf\u3092\u9000\u907f\u3055\u305b\u308b\u3082\u306e\u3082\u3042\u308a\u307e\u3059\u3002'),(0,i.kt)("h2",{id:"momento-serverless-cache-and-eviction"},"Momento Serverless Cache and eviction"),(0,i.kt)("p",null,"Momento Serverless Cache\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30df\u30b9\u3092\u30a8\u30e9\u30fc\u3068\u5bc6\u63a5\u306b\u95a2\u9023\u4ed8\u3051\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30c7\u30fc\u30bf\u3092\u9000\u907f\u3055\u305b\u306a\u3044\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30c7\u30fc\u30bf\u3092\u9000\u907f\u3055\u305b\u308b\u4ee3\u308f\u308a\u306b\u3001\u30b5\u30fc\u30d3\u30b9\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30ce\u30fc\u30c9\u306e1\u3064\u304c\u5bb9\u91cf\u306b\u8fd1\u3065\u304f\u3068\u3001\u30b5\u30fc\u30d3\u30b9\u304c\u304a\u5ba2\u69d8\u306b\u4ee3\u308f\u3063\u3066\u5bb9\u91cf\u3092\u8ffd\u52a0\u3059\u308b\u3088\u3046\u306b\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30df\u30b9\u7387\u3092\u4f4e\u304f\u4fdd\u3064\u305f\u3081\u306b\u30ad\u30fc\u304c\u900f\u904e\u7684\u306b\u518d\u5206\u914d\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"Momento Serverless Cache\u306b\u306f\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3084\u30ce\u30fc\u30c9\u4ea4\u63db\u306a\u3069\u306e\u904b\u7528\u4e0a\u306e\u5909\u66f4\u306f\u3001\u30b5\u30fc\u30d3\u30b9\u306b\u3088\u3063\u3066\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u81ea\u52d5\u7684\u306b\u51e6\u7406\u3055\u308c\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30d2\u30c3\u30c8\u7387\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u306a\u3044\u3088\u3046\u3001\u30d7\u30ec\u30a6\u30a9\u30fc\u30df\u30f3\u30b0\u30d7\u30ed\u30bb\u30b9\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"cache-expiration"},"Cache expiration"),(0,i.kt)("p",null,"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u7528\u8a9e\u3067\u306f\u3001\u6709\u52b9\u671f\u9650\u3068\u306f\u3001\u5404\u30c7\u30fc\u30bf\u306e\u4e00\u90e8\u306bTTL\uff08time-to-live\uff09\u5024\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u6307\u3057\u307e\u3059\u3002\u305d\u306e\u6642\u9593\u304c\u7d4c\u904e\u3059\u308b\u3068\u3001\u30b5\u30fc\u30d3\u30b9\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30c7\u30fc\u30bf\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"Momento Serverless Cache \u304c\u3053\u306e\u30c8\u30d4\u30c3\u30af\u3092\u3069\u306e\u3088\u3046\u306b\u6271\u3046\u304b\u306b\u3064\u3044\u3066\u306e\u5177\u4f53\u7684\u306a\u60c5\u5831\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"./expire-data-with-ttl"},"Time-to-Live (TTL) \u3092\u8a2d\u5b9a\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30c7\u30fc\u30bf\u3092\u5931\u52b9\u3055\u305b\u308b")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}h.isMDXComponent=!0}}]);