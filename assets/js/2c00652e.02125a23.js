"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4,sidebar_label:"Service Limits",title:"Service limits",pagination_next:null,description:"Explore Momento Cache and Momento Topics's service limits, the default values, and how to get them changed if you need."},i="Service Limits for Momento Cache and Momento Topics",l={unversionedId:"manage/limits",id:"manage/limits",title:"Service limits",description:"Explore Momento Cache and Momento Topics's service limits, the default values, and how to get them changed if you need.",source:"@site/docs/manage/limits.md",sourceDirName:"manage",slug:"/manage/limits",permalink:"/manage/limits",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/manage/limits.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Service Limits",title:"Service limits",pagination_next:null,description:"Explore Momento Cache and Momento Topics's service limits, the default values, and how to get them changed if you need."},sidebar:"tutorialSidebar",previous:{title:"Pricing and free tier",permalink:"/manage/pricing"}},s={},m=[{value:"Soft limits and support",id:"soft-limits-and-support",level:2}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"service-limits-for-momento-cache-and-momento-topics"},"Service Limits for Momento Cache and Momento Topics"),(0,r.kt)("p",null,"Momento Cache and Momento Topics seek to provide protection for its customers and itself when it comes to service resources. To do this, every account, cache, and topic has service limits, or what we call guardrails (like a curvy mountain road), to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Momento Cache limits"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API rate per cache (data plane)"),(0,r.kt)("td",{parentName:"tr",align:null},"100 requests/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API rate per customer (control plane)"),(0,r.kt)("td",{parentName:"tr",align:null},"5 requests/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Throughput per cache"),(0,r.kt)("td",{parentName:"tr",align:null},"1MB/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum item size"),(0,r.kt)("td",{parentName:"tr",align:null},"1MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max cache count (per account)"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Time to live (TTL)"),(0,r.kt)("td",{parentName:"tr",align:null},"1 day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Per ",(0,r.kt)("a",{parentName:"td",href:"https://docs.momentohq.com/develop/datatypes#collection-data-types-cdts"},"collection (CDT)")," element size limit"),(0,r.kt)("td",{parentName:"tr",align:null},"128KB")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Momento Topics limits"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribers per cache"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message size"),(0,r.kt)("td",{parentName:"tr",align:null},"4KiB per published message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Throughput per cache"),(0,r.kt)("td",{parentName:"tr",align:null},"10 publish requests/sec")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As Momento Topics utilizes Momento Cache, all Cache limits apply to Topics as well.")),(0,r.kt)("h2",{id:"soft-limits-and-support"},"Soft limits and support"),(0,r.kt)("p",null,"The limits on this page are soft limits that can be altered. If you need these limits adjusted, please reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento Support"),". Please include your login email, the name of the cache(s) to be altered, the cloud+region the cache is located in (e.g. AWS eu-west-1), and which limits from the list you\u2019d like increased."))}c.isMDXComponent=!0}}]);