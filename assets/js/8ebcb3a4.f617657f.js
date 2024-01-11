"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:3,sidebar_label:"Service Limits",title:"Service Limits",pagination_next:null,description:"Explore Momento Vector Index service limits, the default values, and how to get them changed if you need.",hide_title:!0},a="Service Limits for Momento Vector Index",l={unversionedId:"vector-index/limits",id:"vector-index/limits",title:"Service Limits",description:"Explore Momento Vector Index service limits, the default values, and how to get them changed if you need.",source:"@site/docs/vector-index/limits.md",sourceDirName:"vector-index",slug:"/vector-index/limits",permalink:"/vector-index/limits",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/limits.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Service Limits",title:"Service Limits",pagination_next:null,description:"Explore Momento Vector Index service limits, the default values, and how to get them changed if you need.",hide_title:!0},sidebar:"vectorSidebar",previous:{title:"Cheat Sheet",permalink:"/vector-index/develop/sdks/python/cheat-sheet"}},s={},c=[{value:"Soft limits and support",id:"soft-limits-and-support",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"service-limits-for-momento-vector-index"},"Service Limits for Momento Vector Index"),(0,o.kt)("p",null,'Momento Vector Index seeks to protect itself and their customers when it comes to service resources. To do this, every account and index have service limits, or what we call "guardrails" (like a curvy mountain road) to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:'),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Momento Vector Index limits"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Total Indexes"),(0,o.kt)("td",{parentName:"tr",align:null},"5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Vector Max Dimensions"),(0,o.kt)("td",{parentName:"tr",align:null},"2500")))),(0,o.kt)("h2",{id:"soft-limits-and-support"},"Soft limits and support"),(0,o.kt)("p",null,"The limits on this page are soft limits that can be altered unless specifically denoted. If you need limits adjusted, please reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento Support"),". Please include your login email, the name of the index(es) to be altered, the cloud+region the index is located in (e.g. AWS us-west-2), and which limits from the list you\u2019d like increased."))}p.isMDXComponent=!0}}]);