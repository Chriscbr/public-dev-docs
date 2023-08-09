"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7428],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(f,r(r({ref:t},u),{},{components:o})):n.createElement(f,r({ref:t},u))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5432:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const a={sidebar_position:2,sidebar_label:"SDK Configuration Objects",sidebar_class_name:"sidebar-item-api-reference",title:"SDK configuration objects",description:"Discover how to use the configuration objects used to initialize the Momento SDK client."},r="SDK Client configuration objects",s={unversionedId:"develop/basics/client-configuration-objects",id:"develop/basics/client-configuration-objects",title:"SDK configuration objects",description:"Discover how to use the configuration objects used to initialize the Momento SDK client.",source:"@site/docs/develop/basics/02-client-configuration-objects.md",sourceDirName:"develop/basics",slug:"/develop/basics/client-configuration-objects",permalink:"/develop/basics/client-configuration-objects",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/basics/02-client-configuration-objects.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"SDK Configuration Objects",sidebar_class_name:"sidebar-item-api-reference",title:"SDK configuration objects",description:"Discover how to use the configuration objects used to initialize the Momento SDK client."},sidebar:"tutorialSidebar",previous:{title:"Basics"},next:{title:"SDK Error Handling",permalink:"/develop/basics/error-handling-production-readiness"}},l={},c=[{value:"Pre-built configurations",id:"pre-built-configurations",level:2},{value:"Laptop",id:"laptop",level:3},{value:"Browser",id:"browser",level:3},{value:"InRegion - Default",id:"inregion---default",level:3},{value:"InRegion - Low Latency",id:"inregion---low-latency",level:3},{value:"Lambda",id:"lambda",level:3}],u=(p="SdkExampleTabsImpl",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var p;const d={toc:c};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sdk-client-configuration-objects"},"SDK Client configuration objects"),(0,i.kt)("img",{src:"/img/client-configurations.jpg",width:"90%",alt:"a technical illustration of Momento client configuration objects."}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Configuration")," objects contain the settings necessary for how a Momento client should connect to Momento services. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration")," object controls settings such as timeouts, retries, logging, middleware, and more."),(0,i.kt)("p",null,"Each SDK contains pre-built ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration")," objects to help get you up and running as quickly as possible. We did the hard work of tuning for various deployment environments so you can focus on the things unique to your business. (We even have a blog series about it! ",(0,i.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you"},"Shockingly simple: Cache clients that do the hard work for you"),")"),(0,i.kt)("p",null,"Pre-built configurations come with a ",(0,i.kt)("inlineCode",{parentName:"p"},"latest()")," version, which will always give you the latest recommended configuration for a given environment. For example,"),(0,i.kt)(u,{js:"Configurations.InRegion.Default.latest();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"latest()")," pre-built configuration may change between SDK releases as we continue to test, tune, and deliver better settings. If you would like to ensure your configuration does not change with an SDK upgrade, we provide fixed versions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"v1()"),", which are guaranteed to remain static from one release to the next. For example,"),(0,i.kt)(u,{js:"Configurations.InRegion.Default.v1();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.kt)("p",null,"If you need a custom configuration, you can build your own ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration")," object. See the examples in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configurations")," namespace in the source code of each SDK to see how they are constructed."),(0,i.kt)("p",null,"We hope these configurations will meet the needs of most use cases, but if you find them lacking in any way, please open a GitHub issue on that SDK repo, or contact us at ",(0,i.kt)("inlineCode",{parentName:"p"},"support@momentohq.com"),". We would love to hear about your use case so we can fix or extend the pre-built configurations to better support you."),(0,i.kt)("h2",{id:"pre-built-configurations"},"Pre-built configurations"),(0,i.kt)("p",null,"Here are some of the pre-built configurations that you might be interested in."),(0,i.kt)("h3",{id:"laptop"},"Laptop"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Configurations.Laptop")," is a development environment, just for poking around on your... laptop :) It has relaxed timeouts and assumes your network latencies might be a bit high."),(0,i.kt)(u,{js:"Configurations.Laptop.v1();",python:"",java:"Configurations.Laptop.v1();",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.kt)("h3",{id:"browser"},"Browser"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Configurations.Browser")," is a configuration unique to our ",(0,i.kt)("a",{parentName:"p",href:"/develop/sdks/web"},"web SDK"),". It has relaxed timeout settings since latencies can be highly variable in individual users' browsers."),(0,i.kt)("h3",{id:"inregion---default"},"InRegion - Default"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Configurations.InRegion.Default")," is the recommended configuration for most server-side use cases, where you send requests to Momento services from your apps hosted in the same cloud provider Region. It has more aggressive timeouts and retry behavior than the Laptop config, so it will fail faster and allow your application to fall back to your database or other data source more quickly. This helps ensure your applications don't bottleneck on Momento during a network or service interruption."),(0,i.kt)(u,{js:"Configurations.InRegion.Default.v1();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.kt)("h3",{id:"inregion---low-latency"},"InRegion - Low Latency"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Configurations.InRegion.LowLatency")," is a configuration that prioritizes keeping p99.9 latencies as low as possible, potentially sacrificing some throughput to achieve this. It will time out quicker than the ",(0,i.kt)("inlineCode",{parentName:"p"},"InRegion.Default")," configuration. Use this configuration if the most critical factor is to ensure that cache unavailability doesn't force unacceptably high latencies for your application, and you want to fall back to application logic or an authoritative data source more quickly if the cache hasn't responded."),(0,i.kt)(u,{js:"Configurations.InRegion.LowLatency.v1();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.kt)("h3",{id:"lambda"},"Lambda"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Configurations.Lambda")," is a configuration that is available in some SDKs, and is optimized for the AWS Lambda environment. It has configuration settings designed to pre-warm the client on Lambda cold starts, and to ensure the connection is re-established proactively if a Lambda remains idle for long enough for the connection to time out."),(0,i.kt)(u,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}m.isMDXComponent=!0}}]);