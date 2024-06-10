"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,pagination_prev:null,sidebar_label:"Node.js",title:"Get to know the Momento Node.js SDK",description:"The Momento Node.js SDK allows you to create server-side applications in TypeScript or JavaScript, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","server-side"]},i="Momento Node.js SDK",s={unversionedId:"sdks/nodejs/index",id:"sdks/nodejs/index",title:"Get to know the Momento Node.js SDK",description:"The Momento Node.js SDK allows you to create server-side applications in TypeScript or JavaScript, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",source:"@site/docs/sdks/nodejs/index.md",sourceDirName:"sdks/nodejs",slug:"/sdks/nodejs/",permalink:"/sdks/nodejs/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/nodejs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,pagination_prev:null,sidebar_label:"Node.js",title:"Get to know the Momento Node.js SDK",description:"The Momento Node.js SDK allows you to create server-side applications in TypeScript or JavaScript, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","server-side"]}},d={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Integrations",id:"integrations",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-nodejs-sdk"},"Momento Node.js SDK"),(0,r.kt)("p",null,"The Momento Node.js SDK is available via the npm package ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gomomento/sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"@gomomento/sdk")),"."),(0,r.kt)("p",null,"The source code can be found on GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"momentohq/client-sdk-javascript"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node version ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"16 or higher")," is required."),(0,r.kt)("li",{parentName:"ul"},"A Momento API Key is required; you can get one from the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/nodejs/cache"},"Getting started with Momento Cache in JavaScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/nodejs/topics"},"Getting started with Momento Topics in JavaScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/nodejs/compression"},"Using compression with the Node.js SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/nodejs/config-and-error-handling"},"Node.js SDK Configuration and Error Handling"),": Taking your code to production"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/nodejs/style-guide"},"Node.js SDK Style Guide"),": Learn about the two different code styles you can use to interact with Momento"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/nodejs/observability"},"Node.js SDK Observability"),": Logging and Client-side Metrics with the Node.js SDK")),(0,r.kt)("h2",{id:"integrations"},"Integrations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine"},"Node.js Token Vending Machine"),": provides temporary, restricted scope Momento Auth tokens that can be used by browsers running apps written against the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/packages/client-sdk-web"},"Momento Web SDK"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-redis-client"},"Redis Compatibility Client for ",(0,r.kt)("inlineCode",{parentName:"a"},"@redis/client"))," - a drop-in replacement that allows you to use Momento Cache with your existing ",(0,r.kt)("inlineCode",{parentName:"li"},"@redis/client")," code! See also our ",(0,r.kt)("a",{parentName:"li",href:"/cache/develop/integrations/redis-client-compatibility"},"Redis Client Compatibility")," page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-ioredis-client"},"Redis Compatibility Client for ",(0,r.kt)("inlineCode",{parentName:"a"},"ioredis"))," - a drop-in replacement that allows you to use Momento Cache with your existing ",(0,r.kt)("inlineCode",{parentName:"li"},"ioredis")," code! See also our ",(0,r.kt)("a",{parentName:"li",href:"/cache/develop/integrations/redis-client-compatibility"},"Redis Client Compatibility")," page.")))}p.isMDXComponent=!0}}]);