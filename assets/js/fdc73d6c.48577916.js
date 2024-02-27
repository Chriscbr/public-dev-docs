"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4427],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7,pagination_prev:null,sidebar_label:"Dart",title:"Get to know The Momento Dart SDK for Flutter",description:"The Momento Dart SDK allows you to build Flutter client applications, and take advantage of caching and pub-sub features without the need for server-side infrastructure. You can target browsers, iOS, and Android from a single code base. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","android","ios","dart","flutter","web","browser","mobile"]},i="Momento Dart SDK",s={unversionedId:"sdks/dart/index",id:"sdks/dart/index",title:"Get to know The Momento Dart SDK for Flutter",description:"The Momento Dart SDK allows you to build Flutter client applications, and take advantage of caching and pub-sub features without the need for server-side infrastructure. You can target browsers, iOS, and Android from a single code base. Find resources and examples here!",source:"@site/docs/sdks/dart/index.md",sourceDirName:"sdks/dart",slug:"/sdks/dart/",permalink:"/sdks/dart/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/dart/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,pagination_prev:null,sidebar_label:"Dart",title:"Get to know The Momento Dart SDK for Flutter",description:"The Momento Dart SDK allows you to build Flutter client applications, and take advantage of caching and pub-sub features without the need for server-side infrastructure. You can target browsers, iOS, and Android from a single code base. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","android","ios","dart","flutter","web","browser","mobile"]}},l={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-dart-sdk"},"Momento Dart SDK"),(0,a.kt)("p",null,"Welcome to the Momento Dart SDK documentation!"),(0,a.kt)("p",null,"The Momento Dart SDK and source code are available via GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dart"},"momentohq/client-sdk-dart"),"."),(0,a.kt)("p",null,"Dart packages are published to ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/momento"},"pub.dev as ",(0,a.kt)("inlineCode",{parentName:"a"},"momento")),". "),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dart.dev/get-dart"},"Dart version 3")," or higher is required."),(0,a.kt)("li",{parentName:"ul"},"A Momento API key is required; you can get one from the ",(0,a.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdks/dart/cache"},"Getting started with Momento Cache in Dart")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdks/dart/topics"},"Getting started with Momento Topics in Dart")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dart/tree/main/example"},"Dart SDK examples"),": working example projects that illustrate how to use the Dart SDK")))}u.isMDXComponent=!0}}]);