"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[940],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||n;return a?o.createElement(b,s(s({ref:t},c),{},{components:a})):o.createElement(b,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,s[1]=d;for(var l=2;l<n;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:1,sidebar_label:"Momento Leaderboards",title:"Leaderboards",description:"Learn about Momento's purpose-built Leaderboard API",pagination_next:null,hide_title:!0,keywords:["momento","leaderboard","gaming","serverless"]},s=void 0,d={unversionedId:"leaderboards/index",id:"leaderboards/index",title:"Leaderboards",description:"Learn about Momento's purpose-built Leaderboard API",source:"@site/docs/leaderboards/index.md",sourceDirName:"leaderboards",slug:"/leaderboards/",permalink:"/leaderboards/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Momento Leaderboards",title:"Leaderboards",description:"Learn about Momento's purpose-built Leaderboard API",pagination_next:null,hide_title:!0,keywords:["momento","leaderboard","gaming","serverless"]},sidebar:"leaderboardSidebar"},i={},l=[{value:"What is Momento Leaderboards?",id:"what-is-momento-leaderboards",level:2},{value:"Getting Started with Momento Leaderboards",id:"getting-started-with-momento-leaderboards",level:2},{value:"Step 1: Create your Momento API key and cache",id:"step-1-create-your-momento-api-key-and-cache",level:3},{value:"Step 2: Create a Momento Leaderboards",id:"step-2-create-a-momento-leaderboards",level:3},{value:"Step 3: Upsert, fetch, and remove elements",id:"step-3-upsert-fetch-and-remove-elements",level:3},{value:"Frequently asked questions about Momento Leaderboards",id:"frequently-asked-questions-about-momento-leaderboards",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-momento-leaderboards"},"What is Momento Leaderboards?"),(0,r.kt)("p",null,"Momento Leaderboards is a serverless leaderboard service that supports tens of millions of items and rapid ingestion/querying/updates. While many databases approximate leaderboards via general purpose data structures like sorted set or range queries, Momento Leaderboard is a first-class, full-fledged service that you can quickly and easily integrate with your application."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Leaderboard items will have a 7-day TTL by default. For persistence (unlimited TTL), please contact our team through the ",(0,r.kt)("a",{parentName:"p",href:"https://www.gomomento.com/contact-us"},"contact form"),", on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/3HkAKjUZGq"},"Discord"),", or by emailing ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"support@momentohq.com"),".")),(0,r.kt)("h2",{id:"getting-started-with-momento-leaderboards"},"Getting Started with Momento Leaderboards"),(0,r.kt)("h3",{id:"step-1-create-your-momento-api-key-and-cache"},"Step 1: Create your Momento API key and cache"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console")," and follow the instructions to log in with your email address, Google account, or GitHub account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image of Momento console landing page",src:a(5176).Z,width:"700",height:"337"})),(0,r.kt)("p",null,"Click on the Create Cache button and create a cache using the cloud provider and region you want to use for your Momento Leaderboards."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image of Momento console Create Cache form",src:a(2438).Z,width:"2990",height:"1350"})),(0,r.kt)("p",null,"Then follow our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/cache/develop/authentication/api-keys"},"step-by-step instructions")," to create an API key via the ",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com"},"Momento console"),"."),(0,r.kt)("h3",{id:"step-2-create-a-momento-leaderboards"},"Step 2: Create a Momento Leaderboards"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a new leaderboard client, which you can use to create\n// as many leaderboards as you wish\nconst client = new PreviewLeaderboardClient({\n  configuration: LeaderboardConfigurations.Laptop.v1(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});\n\n// Create a new leaderboard with the given cache and leaderboard name\nconst leaderboard = client.leaderboard('my-cache', 'my-leaderboard');\n")),(0,r.kt)("h3",{id:"step-3-upsert-fetch-and-remove-elements"},"Step 3: Upsert, fetch, and remove elements"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/leaderboards/develop/api-reference/"},"API reference")," page for documentation on each available leaderboard API."),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/leaderboard.ts"},"Node.js example")," for a runnable program that includes examples of how to call each API."),(0,r.kt)("h1",{id:"language-support-for-momento-leaderboards"},"Language Support for Momento Leaderboards"),(0,r.kt)("p",null,"Learn more about the SDKs available for different programming languages on our ",(0,r.kt)("a",{parentName:"p",href:"/leaderboards/develop/language-support/"},"Language Support Page"),"."),(0,r.kt)("h2",{id:"frequently-asked-questions-about-momento-leaderboards"},"Frequently asked questions about Momento Leaderboards"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What's the difference between Momento Leaderboards and a Sorted Set?"),"Momento Leaderboards has a much more efficient memory footprint, allowing us to scale to tens of millions of records, and the APIs were built with gaming use cases specifically in mind."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Do Momento Leaderboards items expire?"),"Momento Leaderboards items have a 7-day TTL by default. If the default TTL for leaderboard items doesn\u2019t work for you, reach out to support@momentohq.com to discuss removing limits."))}m.isMDXComponent=!0},2438:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/console-create-cache-form-1dd5a6c37dfaa6885394f9b79c9425e5.png"},5176:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"}}]);