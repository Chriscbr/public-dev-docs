"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1171],{3905:(t,e,r)=>{r.d(e,{Zo:()=>N,kt:()=>u});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},p=Object.keys(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),k=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},N=function(t){var e=k(t.components);return a.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},i=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,p=t.originalType,m=t.parentName,N=d(t,["components","mdxType","originalType","parentName"]),i=k(r),u=n,l=i["".concat(m,".").concat(u)]||i[u]||s[u]||p;return r?a.createElement(l,o(o({ref:e},N),{},{components:r})):a.createElement(l,o({ref:e},N))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=r.length,o=new Array(p);o[0]=i;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:n,o[1]=d;for(var k=2;k<p;k++)o[k]=r[k];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}i.displayName="MDXCreateElement"},5386:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>d,toc:()=>k});var a=r(7462),n=(r(7294),r(3905));const p={sidebar_position:3,sidebar_label:"Language Support",title:"Language API Support Matrix",description:"See which Momento SDKs support the Leaderboards service",pagination_next:null},o=void 0,d={unversionedId:"leaderboards/language-support/language-support",id:"leaderboards/language-support/language-support",title:"Language API Support Matrix",description:"See which Momento SDKs support the Leaderboards service",source:"@site/docs/leaderboards/language-support/language-support.md",sourceDirName:"leaderboards/language-support",slug:"/leaderboards/language-support/",permalink:"/leaderboards/language-support/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/language-support/language-support.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Language Support",title:"Language API Support Matrix",description:"See which Momento SDKs support the Leaderboards service",pagination_next:null},sidebar:"leaderboardSidebar",previous:{title:"Response objects",permalink:"/leaderboards/api-reference/response-objects"}},m={},k=[{value:"Current Status of API support in Momento SDKs",id:"current-status-of-api-support-in-momento-sdks",level:2}],N={toc:k};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},N,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"current-status-of-api-support-in-momento-sdks"},"Current Status of API support in Momento SDKs"),(0,n.kt)("h3",null,"Leaderboard"),(0,n.kt)("p",null,"A matrix of SDK support for Momento Leaderboard APIs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"Kotlin"),(0,n.kt)("th",{parentName:"tr"},"Elixir"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"),(0,n.kt)("th",{parentName:"tr"},"Swift"),(0,n.kt)("th",{parentName:"tr"},"Dart"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"upsert"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"fetchByScore"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"fetchByRank"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"getRank"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"length"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"removeElements"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"delete"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))))}s.isMDXComponent=!0}}]);