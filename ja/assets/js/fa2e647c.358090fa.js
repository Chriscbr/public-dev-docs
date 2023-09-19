"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,T=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(T,a(a({ref:t},s),{},{components:n})):r.createElement(T,a({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const o={sidebar_position:10,sidebar_label:"CollectionTTL object",title:"CollectionTTL API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento Cache \u306e CollectionTTL \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"},a="CollectionTTL object API reference",i={unversionedId:"cache/develop/api-reference/collection-ttl",id:"cache/develop/api-reference/collection-ttl",title:"CollectionTTL API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento Cache \u306e CollectionTTL \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/api-reference/collection-ttl.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/collection-ttl",permalink:"/ja/cache/develop/api-reference/collection-ttl",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/collection-ttl.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"CollectionTTL object",title:"CollectionTTL API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento Cache \u306e CollectionTTL \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"},sidebar:"tutorialSidebar",previous:{title:"HTTP API",permalink:"/ja/cache/develop/api-reference/http-api"},next:{title:"Response objects",permalink:"/ja/cache/develop/api-reference/response-objects"}},c={},p=[{value:"Compatible data types",id:"compatible-data-types",level:2},{value:"Common method behaviors",id:"common-method-behaviors",level:2},{value:"Constructor parameters",id:"constructor-parameters",level:2},{value:"Additional constructors",id:"additional-constructors",level:2},{value:"Instance methods",id:"instance-methods",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"collectionttl-object-api-reference"},"CollectionTTL object API reference"),(0,l.kt)("p",null,"\u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001API \u30e1\u30bd\u30c3\u30c9\u306b\u6e21\u3055\u308c\u3001TTL \u3092\u66f4\u65b0\u3059\u308b\u304b\u3069\u3046\u304b\u3001\u305d\u3057\u3066\u66f4\u65b0\u3059\u308b\u5834\u5408\u306f\u65b0\u3057\u3044 TTL \u5024\u3092\u4f55\u306b\u3059\u308b\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3055\u307e\u3056\u307e\u306a\u72b6\u6cc1\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306b\u3001\u540d\u524d\u4ed8\u304d\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3068\u30b3\u30d4\u30fc\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3001\u30d7\u30ed\u30bb\u30b9\u3092\u3088\u308a\u76f4\u611f\u7684\u306b\u8a66\u305b\u307e\u3059\u3002"),(0,l.kt)("p",null,"Momento Cache \u306b\u304a\u3051\u308b TTL \u306e\u4ed5\u7d44\u307f\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u60c5\u5831\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"/ja/cache/learn/how-it-works/expire-data-with-ttl"},"TTL \u3092\u4f7f\u7528\u3057\u305f\u30c7\u30fc\u30bf\u306e\u6709\u52b9\u671f\u9650\u5207\u308c"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u3061\u3089\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u3001Momento Cache \u306b\u304a\u3044\u3066 TTL \u304c\u30c7\u30fc\u30bf\u306e\u6709\u52b9\u671f\u9650\u7ba1\u7406\u306b\u3069\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"compatible-data-types"},"Compatible data types"),(0,l.kt)("p",null,"CollectionTTL\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001",(0,l.kt)("strong",{parentName:"p"},"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u3092\u884c\u3046\u969b"),"\u3001\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u578b\u3068\u4e92\u63db\u6027\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ja/cache/develop/api-reference/dictionary-collections"},"Dictionary")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ja/cache/develop/api-reference/list-collections"},"List")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ja/cache/develop/api-reference/set-collections"},"Set")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ja/cache/develop/api-reference/sorted-set-collections"},"Sorted Set"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"dictionaryFetch")," \u3084 ",(0,l.kt)("inlineCode",{parentName:"p"},"listLength")," \u306e\u3088\u3046\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u3092\u884c\u3046\u969b\u306b\u306f\u3001CollectionTTL \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002")),(0,l.kt)("h2",{id:"common-method-behaviors"},"Common method behaviors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u3082\u3057\u3082\u95a2\u6570\u547c\u3073\u51fa\u3057\u6642\u306b CollectionTTL \u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u3057\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},"CollectionTtl.fromCacheTtl()")," \u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u5024\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u8a2d\u5b9a\u3055\u308c\u305f TTL \u3067\u3059\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u304c\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306e TTL \u306f\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"))),(0,l.kt)("h2",{id:"constructor-parameters"},"Constructor parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ttl: duration - (optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3082\u3057 TTL \u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u73fe\u5728\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b TTL \u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"))),(0,l.kt)("li",{parentName:"ul"},"refreshTtl: boolean = true",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3082\u3057 true \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306e TTL \u306f\u63d0\u4f9b\u3055\u308c\u305f\u5024\u306b\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u3082\u3057 false \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30a2\u30a4\u30c6\u30e0\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u65e2\u5b58\u306e TTL \u306f\u7dad\u6301\u3055\u308c\u307e\u3059\u3002")))),(0,l.kt)("h2",{id:"additional-constructors"},"Additional constructors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fromCacheTtl(): CollectionTtl - \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e TTL \u3092\u4f7f\u7528\u3057\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"CollectionTtl(null, true)")," \u3068\u540c\u7b49\u306e\u52d5\u4f5c\u3092\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"of(ttl: duration): CollectionTtl - ",(0,l.kt)("inlineCode",{parentName:"li"},"CollectionTtl(ttl, true)")," \u3068\u540c\u7b49\u306e\u52d5\u4f5c\u3092\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"refreshTtlIfProvided(ttl?: duration): CollectionTtl - \u3082\u3057\u5024\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30a2\u30a4\u30c6\u30e0\u306e TTL \u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\u5024\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001TTL \u306f\u66f4\u65b0\u3055\u308c\u307e\u305b\u3093\u3002")),(0,l.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ttlSeconds(): duration - TTL \u3092\u79d2\u5358\u4f4d\u3067\u8fd4\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"ttlMilliseconds(): duration - TTL \u3092\u30df\u30ea\u79d2\u5358\u4f4d\u3067\u8fd4\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"refreshTtl(): boolean - \u30a2\u30a4\u30c6\u30e0\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306b TTL \u3092\u66f4\u65b0\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"withRefreshTtlOnUpdates(): CollectionTtl - \u30b3\u30d4\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u304c\u3001\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u306f true \u3067\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"withNoRefreshTtlOnUpdates(): CollectionTtl - \u30b3\u30d4\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u304c\u3001\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u306f false \u3067\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"toString(): TTL \u3092\u79d2\u5358\u4f4d\u3067\u8868\u793a\u3057\u3001refreshTtl \u306e\u8a2d\u5b9a\u3092\u8868\u793a\u3057\u307e\u3059\u3002")))}u.isMDXComponent=!0}}]);