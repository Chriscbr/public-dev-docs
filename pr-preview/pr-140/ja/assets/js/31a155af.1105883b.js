"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[56],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:1,sidebar_label:"\u5c0e\u5165\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",title:"\u5c0e\u5165\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},o="\u5c0e\u5165\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",i={unversionedId:"develop/tutorials/serverless-cache-walkthrough/adding-a-cache-to-serverless",id:"develop/tutorials/serverless-cache-walkthrough/adding-a-cache-to-serverless",title:"\u5c0e\u5165\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",description:"\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001AWS Lambda \u3092\u4f7f\u3063\u305f\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3069\u306e\u3088\u3046\u306b\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u8ffd\u52a0\u3057\u3066\u3044\u304f\u304b\u3092\u5b66\u3076\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u6df1\u304f\u9023\u643a\u3059\u308b\u305f\u3081\u306b\u4f5c\u3089\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u30b5\u30fc\u30d3\u30b9\u306e1\u3064\u3067\u3042\u308bMomento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u5229\u7528\u3057\u3066\u3044\u304d\u307e\u3059\u3002Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u3059\u3050\u306b\u4f7f\u3048\u3066\u5f3e\u529b\u6027\u306e\u3042\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u5f93\u91cf\u8ab2\u91d1\u30e2\u30c7\u30eb\u3067\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u3001\u3068\u3066\u3082\u9ad8\u3044\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u767a\u63ee\u3057\u3066\u304f\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/tutorials/serverless-cache-walkthrough/1-adding-a-cache-to-serverless.md",sourceDirName:"develop/tutorials/serverless-cache-walkthrough",slug:"/develop/tutorials/serverless-cache-walkthrough/adding-a-cache-to-serverless",permalink:"/ja/develop/tutorials/serverless-cache-walkthrough/adding-a-cache-to-serverless",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/tutorials/serverless-cache-walkthrough/1-adding-a-cache-to-serverless.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u5c0e\u5165\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",title:"\u5c0e\u5165\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},sidebar:"tutorialSidebar",previous:{title:"Adding a cache to a serverless application"},next:{title:"\u57fa\u672c\u7684\u306a\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4",permalink:"/ja/develop/tutorials/serverless-cache-walkthrough/deploying-a-basic-serverless-application"}},p={},s=[{value:"\u3053\u308c\u304b\u3089\u4f5c\u3063\u3066\u3044\u304f\u3082\u306e",id:"\u3053\u308c\u304b\u3089\u4f5c\u3063\u3066\u3044\u304f\u3082\u306e",level:2},{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2}],c={toc:s};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5c0e\u5165\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"\u5c0e\u5165\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,n.kt)("p",null,"\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001AWS Lambda \u3092\u4f7f\u3063\u305f\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3069\u306e\u3088\u3046\u306b\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u8ffd\u52a0\u3057\u3066\u3044\u304f\u304b\u3092\u5b66\u3076\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u6df1\u304f\u9023\u643a\u3059\u308b\u305f\u3081\u306b\u4f5c\u3089\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u30b5\u30fc\u30d3\u30b9\u306e1\u3064\u3067\u3042\u308bMomento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u5229\u7528\u3057\u3066\u3044\u304d\u307e\u3059\u3002Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u3059\u3050\u306b\u4f7f\u3048\u3066\u5f3e\u529b\u6027\u306e\u3042\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u5f93\u91cf\u8ab2\u91d1\u30e2\u30c7\u30eb\u3067\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u3001\u3068\u3066\u3082\u9ad8\u3044\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u767a\u63ee\u3057\u3066\u304f\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u9032\u3081\u308b\u4e2d\u3067\u3001\u7686\u3055\u3093\u306b\u306f\u30b7\u30f3\u30d7\u30eb\u306a\u30a2\u30ab\u30a6\u30f3\u30c8\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u3092\u4f5c\u3063\u3066\u9802\u304d\u307e\u3059\u3002\u305d\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u306f\u30e6\u30fc\u30b6\u30fc\u306e\u4f5c\u6210\u3001\u7d44\u7e54\u306e\u4f5c\u6210\u3001\u305d\u3057\u3066\u30e1\u30f3\u30d0\u30fc\u30b7\u30c3\u30d7\u3092\u5229\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u3092\u7d44\u7e54\u306b\u8ffd\u52a0\u3059\u308b\u3001\u3068\u3044\u3046\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u7fa4\u3092\u4f5c\u308a\u307e\u3059\u3002\u305d\u3046\u3059\u308b\u3068\u3001\u3042\u308b\u30e6\u30fc\u30b6\u30fc\u304c\u3042\u308b\u7d44\u7e54\u306b\u6240\u5c5e\u3057\u3066\u3044\u308b\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3068\u3044\u3046\u3001\u983b\u7e41\u306b\u4f7f\u308f\u308c\u3066\u3044\u308b\u8a8d\u53ef\u306e\u30d1\u30bf\u30fc\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306b\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306e\u6982\u5ff5\u7684\u306a\u60c5\u5831\u3060\u3051\u3067\u306a\u304f\u3001\u524d\u8ff0\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u969b\u306b\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u4f7f\u3063\u3066\u307f\u308b\u307e\u3067\u306e\u9806\u3092\u8ffd\u3063\u305f\u624b\u9806\u3082\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u308c\u304b\u3089\u5b66\u3093\u3067\u3044\u304f\u4e2d\u306b\u51fa\u3066\u304f\u308b\u4e00\u3064\u306e\u5927\u4e8b\u306a\u6982\u5ff5\u3068\u3057\u3066\u3001\u7570\u306a\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u3092\u4f7f\u3046\u969b\u306e\u30c8\u30ec\u30fc\u30c9\u30aa\u30d5\u3092\u542b\u3081\u305f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3078\u306e\u8907\u6570\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u304c\u3042\u3052\u3089\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3064\u3044\u3066\u3082\u3063\u3068\u5b66\u3073\u305f\u3044\u6642\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"./../../../introduction/common-caching-patterns"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6226\u7565\u3068\u30d1\u30bf\u30fc\u30f3")," \u3082\u4f75\u305b\u3066\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"\u52a0\u3048\u3066\u3001\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306fMomento \u3068AWS Lambda \u3092\u9023\u643a\u3055\u305b\u308b\u969b\u306e\u5b9f\u8df5\u7684\u306a\u9762\u3082\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3082\u3063\u3068\u7c21\u6f54\u306a\u60c5\u5831\u3092\u304a\u63a2\u3057\u3067\u3057\u305f\u3089\u3001",(0,n.kt)("a",{parentName:"p",href:"./../../guides/caching-with-aws-lambda"},"AWS Lambda \u3067\u30ad\u30e3\u30c3\u30b7\u30e5"),"\u3082\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306b\u306f5\u3064\u306e\u30b9\u30c6\u30c3\u30d7\u304c\u3042\u308a\u307e\u3059:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u7d39\u4ecb\u3068\u74b0\u5883\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"API Gateway\u3001Lambda\u3001DynamoDB \u3092\u4f7f\u3063\u305f\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Momento \u3092\u305d\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d44\u307f\u8fbc\u3093\u3067\u8a2d\u5b9a\u3059\u308b\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Read-aside \u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5b9f\u88c5\u3059\u308b\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write-aside \u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u3063\u3066\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u9bae\u5ea6\u3092\u6539\u5584\u3059\u308b\u3002"))),(0,n.kt)("h2",{id:"\u3053\u308c\u304b\u3089\u4f5c\u3063\u3066\u3044\u304f\u3082\u306e"},"\u3053\u308c\u304b\u3089\u4f5c\u3063\u3066\u3044\u304f\u3082\u306e"),(0,n.kt)("p",null,"\u3053\u308c\u304b\u3089\u3001\u5de8\u5927\u306aSaaS \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u3092\u69cb\u7bc9\u3057\u3066\u3044\u3053\u3046\u3068\u601d\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u79c1\u305f\u3061\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u3068\u7d44\u7e54\u306e\u4e21\u65b9\u3092\u6301\u3063\u3066\u3044\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u7d44\u7e54\u306e\u4ee3\u308f\u308a\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u9054\u6210\u3059\u308b\u305f\u3081\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u591a\u304f\u306e\u5834\u9762\u3067\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u7279\u5b9a\u306e\u7d44\u7e54\u306b\u5c5e\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u4fdd\u969c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"System architecture",src:r(3564).Z,width:"1260",height:"890"})),(0,n.kt)("p",null,"\u3053\u306e\u8981\u4ef6\u3092\u6271\u3046\u305f\u3081\u306b\u3001\u30b5\u30fc\u30d3\u30b9\u4e0a\u306b3\u3064\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30e2\u30c7\u30ea\u30f3\u30b0\u3057\u3066\u3044\u304d\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u30e6\u30fc\u30b6\u30fc\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3: \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4e0a\u306e1\u4eba\u306e\u4eba\u9593\u3092\u8868\u73fe\u3057\u3066\u3044\u307e\u3059")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7d44\u7e54\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3: \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u7ba1\u7406\u3067\u304d\u308b\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u307e\u3068\u307e\u308a\u3092\u8868\u73fe\u3057\u3066\u3044\u307e\u3059")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u30e1\u30f3\u30d0\u30fc\u30b7\u30c3\u30d7\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3: \u30e6\u30fc\u30b6\u30fc\u3068\u7d44\u7e54\u306e\u9593\u306e\u95a2\u9023\u3092\u8868\u73fe\u3057\u3066\u3044\u3066\u3001\u305d\u306e\u30e6\u30fc\u30b6\u306f\u305d\u306e\u7d44\u7e54\u5185\u306e\u7279\u5b9a\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u884c\u3046\u3053\u3068\u3092\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u3059\u3002"))),(0,n.kt)("p",null,"\u3053\u308c\u3089\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u305f\u3081\u306b\u3001\u4ee5\u4e0b\u306eHTTP \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"CreateUser")," (",(0,n.kt)("inlineCode",{parentName:"p"},"POST /users"),"): \u30e6\u30fc\u30b6\u30fc\u306e\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u306b\u4f7f\u308f\u308c\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"CreateOrganization")," (",(0,n.kt)("inlineCode",{parentName:"p"},"POST /organization"),"): \u30e6\u30fc\u30b6\u30fc\u304c\u65b0\u3057\u3044\u7d44\u7e54\u3092\u4f5c\u308b\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"AddUserToOrganization")," (",(0,n.kt)("inlineCode",{parentName:"p"},"POST /organization/{organizationName}/members"),"): \u3042\u308b\u7d44\u7e54\u306b\u65b0\u3057\u3044\u30e6\u30fc\u30b6\u30fc\u3092\u8ffd\u52a0\u3059\u308b\u305f\u3081\u306b\u3001\u7d44\u7e54\u5185\u306e\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"UserInOrganization")," (",(0,n.kt)("inlineCode",{parentName:"p"},"GET /organization/{organizationName}/members/{username}"),"): \u3042\u308b\u30e6\u30fc\u30b6\u304c\u3042\u308b\u7d44\u7e54\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\u30c1\u30a7\u30c3\u30af\u3057\u3066\u3001\u305d\u306e\u7d44\u7e54\u5185\u3067\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u5f79\u5272\u306e\u8a73\u7d30\u3092\u53d6\u5f97\u3059\u308b\u6642\u306b\u4f7f\u308f\u308c\u307e\u3059\u3002"))),(0,n.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u9375\u3068\u306a\u308b\u30dd\u30a4\u30f3\u30c8\u3092\u304a\u4f1d\u3048\u3059\u308b\u3053\u3068\u306b\u96c6\u4e2d\u3059\u308b\u305f\u3081\u306b\u3001\u5fc5\u8981\u6700\u4f4e\u9650\u306b\u7c21\u7d20\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u3084\u7d44\u7e54\u3092\u66f4\u65b0\u3059\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3001\u5168\u3066\u306e\u30e6\u30fc\u30b6\u3068\u7d44\u7e54\u3092\u4e00\u89a7\u3059\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3001\u304a\u3088\u3073\u30e6\u30fc\u30b6\u30fc\u3092\u7d44\u7e54\u304b\u3089\u524a\u9664\u3059\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002\u3055\u3089\u306b\u3001\u672c\u7269\u306e\u8a8d\u8a3c\u30b7\u30b9\u30c6\u30e0\u3082\u306a\u304f\u3066\u3001HTTP \u30d8\u30c3\u30c0\u30fc\u3067\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u6e21\u3059\u3088\u3046\u306a\u5927\u96d1\u628a\u306a\u65b9\u6cd5\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,n.kt)("p",null,"\u306f\u3058\u3081\u308b\u524d\u306b\u3001\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u3053\u306e\u5f8c\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u5f93\u3063\u3066\u9032\u3081\u3089\u308c\u308b\u69d8\u306b\u3001\u74b0\u5883\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,"\u307e\u305a\u4e00\u3064\u76ee\u306b\u3001\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306fNode.js \u3068\u95a2\u9023\u3059\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u305d\u308c\u3092\u7686\u3055\u3093\u306e\u30de\u30b7\u30f3\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js \u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30da\u30fc\u30b8")," \u306b\u3042\u308b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"\u4e8c\u3064\u76ee\u306b\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u3057\u3066\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u305f\u3081\u306b\u3001",(0,n.kt)("a",{parentName:"p",href:"https://www.serverless.com/framework/docs"},"Serverless Framework")," \u3092\u5229\u7528\u3057\u3066\u3044\u304d\u307e\u3059\u3002Serverless Framework \u306fNode.js \u3067\u66f8\u304b\u308c\u305fCLI \u30c4\u30fc\u30eb\u3067\u306a\u306e\u3067\u3001\u30bf\u30fc\u30df\u30ca\u30eb\u4e0a\u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install -g serverless\n")),(0,n.kt)("p",null,"\u4e09\u3064\u76ee\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3053\u308c\u304b\u3089Amazon Web Services (AWS) \u306b\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u3044\u304d\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u3001AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u8a8d\u8a3c\u60c5\u5831\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\u3082\u3057\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306bAWS \u8a8d\u8a3c\u60c5\u5831\u3092\u307e\u3060\u8a2d\u5b9a\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u3001Serverless Framework \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3042\u308b",(0,n.kt)("a",{parentName:"p",href:"https://www.serverless.com/framework/docs/providers/aws/guide/credentials/"},"\u74b0\u5883\u3092\u8a2d\u5b9a\u3059\u308b"),"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30ac\u30a4\u30c9\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"\u6700\u5f8c\u306b\u3001\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u7528\u306e\u5168\u3066\u306e\u30b3\u30fc\u30c9\u306fGitHub \u30ec\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066\u3001\u30de\u30b7\u30f3\u306b\u30b3\u30fc\u30c9\u3092\u30af\u30ed\u30fc\u30f3\u3057\u3066\u304f\u3060\u3055\u3044:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone git@github.com:momentohq/serverless-tutorial.git\n")),(0,n.kt)("p",null,"\u3053\u308c\u3067\u74b0\u5883\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u304c\u3067\u304d\u307e\u3057\u305f\u3002\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u9032\u3093\u3067\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"))}m.isMDXComponent=!0},3564:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture-d18fda14b76897b0667227fa9c189210.png"}}]);