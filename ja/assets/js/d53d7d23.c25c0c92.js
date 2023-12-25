"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"Momento Vector Index Node.js SDK",pagination_prev:null,sidebar_label:"Node.js",description:"Information about the Momento Node.js SDK"},i="Momento Vector Index Node.js SDK",s={unversionedId:"vector-index/develop/sdks/nodejs/index",id:"vector-index/develop/sdks/nodejs/index",title:"Momento Vector Index Node.js SDK",description:"Information about the Momento Node.js SDK",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/vector-index/develop/sdks/nodejs/index.md",sourceDirName:"vector-index/develop/sdks/nodejs",slug:"/vector-index/develop/sdks/nodejs/",permalink:"/ja/vector-index/develop/sdks/nodejs/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/develop/sdks/nodejs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Momento Vector Index Node.js SDK",pagination_prev:null,sidebar_label:"Node.js",description:"Information about the Momento Node.js SDK"},sidebar:"vectorSidebar",next:{title:"Cheat Sheet",permalink:"/ja/vector-index/develop/sdks/nodejs/cheat-sheet"}},d={},l=[{value:"\u5fc5\u8981\u6761\u4ef6",id:"\u5fc5\u8981\u6761\u4ef6",level:2},{value:"\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30bd\u30fc\u30b9",level:2}],c={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-vector-index-nodejs-sdk"},"Momento Vector Index Node.js SDK"),(0,r.kt)("img",{src:"/img/nodes.png",width:"95%",alt:"a picture of abstract shapes as building and nodes of data connecting them at high speed"}),(0,r.kt)("p",null,"Momento Node.js SDK \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3078\u3088\u3046\u3053\u305d\uff01"),(0,r.kt)("p",null,"Momento Node.js SDK\u306fnpm\u30d1\u30c3\u30b1\u30fc\u30b8\u304b\u3089\u5165\u624b\u3067\u304d\u307e\u3059\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gomomento/sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"@gomomento/sdk")),"."),(0,r.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306fGitHub\u3067\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"momentohq/client-sdk-javascript"),"."),(0,r.kt)("h2",{id:"\u5fc5\u8981\u6761\u4ef6"},"\u5fc5\u8981\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node \u30d0\u30fc\u30b8\u30e7\u30f3 ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"14 or higher")),(0,r.kt)("li",{parentName:"ul"},"Momento Auth Token\u304c\u5fc5\u8981\u3067\u3059\uff1b \u30c8\u30fc\u30af\u30f3\u306f\u3053\u3061\u3089\u304b\u3089\u53d6\u5f97\u304c\u3067\u304d\u307e\u3059 ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,r.kt)("h2",{id:"\u30ea\u30bd\u30fc\u30b9"},"\u30ea\u30bd\u30fc\u30b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/vector-index/develop/sdks/nodejs/cheat-sheet"},"Node.js MVI SDK cheat sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/README.md"},"Node.js SDK Examples"),": Node.js SDK\u306e\u4f7f\u7528\u65b9\u6cd5\u3092\u8aac\u660e\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: \u3042\u306a\u305f\u306e\u30b3\u30fc\u30c9\u3092prod\u74b0\u5883\u3078\uff1a Node.js SDK\u306e\u8a2d\u5b9a\u3068\u30a8\u30e9\u30fc\u51e6\u7406")))}m.isMDXComponent=!0}}]);