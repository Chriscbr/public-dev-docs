"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1056],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},731:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:2,title:"Authentication and access control with Momento",pagination_prev:null,sidebar_label:"Authentication",description:"Discover how to authenticate with Momento and control access to resources."},i=void 0,c={unversionedId:"topics/develop/authentication/index",id:"topics/develop/authentication/index",title:"Authentication and access control with Momento",description:"Discover how to authenticate with Momento and control access to resources.",source:"@site/docs/topics/develop/authentication/index.mdx",sourceDirName:"topics/develop/authentication",slug:"/topics/develop/authentication/",permalink:"/topics/develop/authentication/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/authentication/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Authentication and access control with Momento",pagination_prev:null,sidebar_label:"Authentication",description:"Discover how to authenticate with Momento and control access to resources."},sidebar:"topicsSidebar",next:{title:"API Keys",permalink:"/topics/develop/authentication/api-keys"}},s={},l=[],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You've decided to try out Momento, yeehaw! Let's talk about how you're going to make your first call and subsequently allow your app users to make calls."),(0,r.kt)("p",null,"We have a bunch of different ways you can interact with our services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In your browser via the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com"},"Momento Console")),(0,r.kt)("li",{parentName:"ul"},"Long-term stored usage with ",(0,r.kt)("a",{parentName:"li",href:"/topics/develop/authentication/api-keys"},"API keys")),(0,r.kt)("li",{parentName:"ul"},"Short-term and limited scope with ",(0,r.kt)("a",{parentName:"li",href:"/topics/develop/authentication/tokens"},"tokens"))),(0,r.kt)("p",null,"Each one of these methods comes with their own range of use cases and varying implementations. Based on the type of application you're building, you might choose to issue a bunch of short-lived, limited scope tokens to your users. If that's the case, then check out our page on ",(0,r.kt)("a",{parentName:"p",href:"/topics/develop/authentication/tokens"},"tokens"),". Maybe you're interested in creating a key and forgetting about it for a year. Hop over to our ",(0,r.kt)("a",{parentName:"p",href:"/topics/develop/authentication/api-keys"},"API keys")," page."),(0,r.kt)("p",null,"Need help deciding which one is for you? We got you \ud83d\udc47"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Table of differences between API keys and tokens",src:o(755).Z,width:"1600",height:"1391"})),(0,r.kt)("p",null,"Still confused? Stay a while and check out our detailed documentation on the next page or send us a message in ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/3HkAKjUZGq"},"Discord"),"!"))}u.isMDXComponent=!0},755:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/api-keys-vs-tokens-32246185f7f1d832ffc0f3d006caaa9a.png"}}]);