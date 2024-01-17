"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4,sidebar_label:"Service Limits",title:"Service Limits for Momento Topics",pagination_next:null,description:"Explore Momento Topic's service limits, the default values, and how to get them changed if you need.",hide_title:!0},i="Service limits for Momento Topics/Webhooks",l={unversionedId:"topics/limits",id:"topics/limits",title:"Service Limits for Momento Topics",description:"Explore Momento Topic's service limits, the default values, and how to get them changed if you need.",source:"@site/docs/topics/limits.md",sourceDirName:"topics",slug:"/topics/limits",permalink:"/topics/limits",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/limits.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Service Limits",title:"Service Limits for Momento Topics",pagination_next:null,description:"Explore Momento Topic's service limits, the default values, and how to get them changed if you need.",hide_title:!0},sidebar:"topicsSidebar",previous:{title:"Language Support",permalink:"/topics/develop/language-support/"}},s={},p=[{value:"Soft limits and support",id:"soft-limits-and-support",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"service-limits-for-momento-topicswebhooks"},"Service limits for Momento Topics/Webhooks"),(0,a.kt)("p",null,'Momento Topics seek to protect themselves and their customers when it comes to service resources. To do this, every account, topic, and cache has service limits, or what we call "guardrails" (like on a curvy mountain road) to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Momento Topics limits"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Subscribers per cache"),(0,a.kt)("td",{parentName:"tr",align:null},"100")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message size"),(0,a.kt)("td",{parentName:"tr",align:null},"4KiB per published message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Throughput per cache"),(0,a.kt)("td",{parentName:"tr",align:null},"10 publish requests/sec")))),(0,a.kt)("p",null,"In addition to the topic limits, there are a few additional limits that apply to webhooks"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Webhooks limits"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Number of Webhooks"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Throughput per webhook"),(0,a.kt)("td",{parentName:"tr",align:null},"5 requests/sec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Request Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"5 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"128 characters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},"1024 characters")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Since Topics and Webhooks utilize Momento Cache, all ",(0,a.kt)("a",{parentName:"p",href:"/cache/limits"},"Cache limits")," apply to them as well.")),(0,a.kt)("h2",{id:"soft-limits-and-support"},"Soft limits and support"),(0,a.kt)("p",null,"The limits on this page are soft limits that can be altered unless specifically denoted. If you need limits adjusted, please reach out to ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento Support"),". Please include your login email, the name of the cache(s) to be altered, the cloud+region the cache is located in (e.g. AWS eu-west-1), and which limits from the list you\u2019d like increased."))}m.isMDXComponent=!0}}]);