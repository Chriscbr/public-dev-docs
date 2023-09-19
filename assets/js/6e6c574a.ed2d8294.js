"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:9,title:"Momento Rust SDK",pagination_prev:null,sidebar_label:"Rust",description:"Information about the Momento Rust SDK"},a="Momento Rust SDK",s={unversionedId:"topics/develop/sdks/rust/index",id:"topics/develop/sdks/rust/index",title:"Momento Rust SDK",description:"Information about the Momento Rust SDK",source:"@site/docs/topics/develop/sdks/rust/index.md",sourceDirName:"topics/develop/sdks/rust",slug:"/topics/develop/sdks/rust/",permalink:"/topics/develop/sdks/rust/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/sdks/rust/index.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Momento Rust SDK",pagination_prev:null,sidebar_label:"Rust",description:"Information about the Momento Rust SDK"},sidebar:"topicsSidebar",next:{title:"Manage"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Integrations",id:"integrations",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-rust-sdk"},"Momento Rust SDK"),(0,o.kt)("img",{src:"/img/rust.png",width:"90%",alt:"a picture of abstract shapes as building and nodes of data connecting them at high speed"}),(0,o.kt)("p",null,"Welcome to the Momento Rust SDK documentation!"),(0,o.kt)("p",null,"The Momento Rust SDK is available via the crates.io package ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/momento"},(0,o.kt)("inlineCode",{parentName:"a"},"momento")),"."),(0,o.kt)("p",null,"The source code can be found on github: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-rust"},"momentohq/client-sdk-rust"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Momento Auth Token is required; you can get one from the ",(0,o.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"COMING SOON: Rust SDK Cheat Sheet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-rust/blob/main/example/README.md"},"Rust SDK Examples"),": working example projects that illustrate how to use the Rust SDK"),(0,o.kt)("li",{parentName:"ul"},"COMING SOON: Observability: Logging and Client-side Metrics with the Rust SDK"),(0,o.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: Configuration and Error handling in the Rust SDK")),(0,o.kt)("h2",{id:"integrations"},"Integrations"),(0,o.kt)("p",null,"COMING SOON"))}p.isMDXComponent=!0}}]);