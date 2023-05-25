"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(d,r(r({ref:t},h),{},{components:n})):o.createElement(d,r({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,title:"How it works | Momento Serverless Cache",description:"Explore what makes Momento Serverless Cache work and how best to utilize it with your apps.",sidebar_label:"\u3069\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3059\u308b\u304b"},r="How it works - Momento Serverless Cache",c={unversionedId:"learn/how-it-works/index",id:"learn/how-it-works/index",title:"How it works | Momento Serverless Cache",description:"Explore what makes Momento Serverless Cache work and how best to utilize it with your apps.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/learn/how-it-works/index.mdx",sourceDirName:"learn/how-it-works",slug:"/learn/how-it-works/",permalink:"/ja/learn/how-it-works/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/learn/how-it-works/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"How it works | Momento Serverless Cache",description:"Explore what makes Momento Serverless Cache work and how best to utilize it with your apps.",sidebar_label:"\u3069\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3059\u308b\u304b"},sidebar:"tutorialSidebar",previous:{title:"Learn"},next:{title:"TTL \u3067\u30c7\u30fc\u30bf\u3092\u671f\u9650\u5207\u308c\u306b\u3059\u308b",permalink:"/ja/learn/how-it-works/expire-data-with-ttl"}},s={},l=[{value:"The CacheClient object and developing with Momento Cache",id:"the-cacheclient-object-and-developing-with-momento-cache",level:2},{value:"Control plane: simple, efficient cache management",id:"control-plane-simple-efficient-cache-management",level:3},{value:"Data plane: performant cache interactions",id:"data-plane-performant-cache-interactions",level:3},{value:"Interacting with the Momento Serverless Cache API",id:"interacting-with-the-momento-serverless-cache-api",level:2},{value:"Authentication token",id:"authentication-token",level:3},{value:"gRPC",id:"grpc",level:3},{value:"Networking",id:"networking",level:3},{value:"Default networking",id:"default-networking",level:4},{value:"Advanced networking",id:"advanced-networking",level:4},{value:"Conclusion",id:"conclusion",level:2}],h={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-it-works---momento-serverless-cache"},"How it works - Momento Serverless Cache"),(0,a.kt)("p",null,"On this page, you will learn about the concepts specific to using Momento Serverless Cache in your application. These concepts apply across languages -- while Momento has supported SDKs for Golang, JavaScript, Python, Java, and .NET, the concepts described on this page are applicable to all of them."),(0,a.kt)("p",null,"In crafting Momento Serverless Cache, we've focused on two things: simplicity and speed. Every decision we make is in service of these two goals. In describing the Momento Serverless Cache concepts below, we will also explain how these concepts make it easier or faster for you as a user."),(0,a.kt)("p",null,"On this page, we'll cover two main aspects of working with Momento Serverless Cache:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#the-simplecache-object"},"The SimpleCache object and the Momento SDK"),";")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#interacting-with-the-momento-api"},"Interacting with the Momento API"),";"))),(0,a.kt)("h2",{id:"the-cacheclient-object-and-developing-with-momento-cache"},"The CacheClient object and developing with Momento Cache"),(0,a.kt)("p",null,"In every Momento SDK, you will be using a CacheClient object to interact with the Momento Cache service. The CacheClient object will provide credential management and efficient interaction with the Momento API."),(0,a.kt)("p",null,"For more info on how to get started with the CacheClient, check out the ",(0,a.kt)("inlineCode",{parentName:"p"},"Develop")," section!"),(0,a.kt)("p",null,"A CacheClient instance can interact with both the control plane and data plane APIs in Momento Cache. Let's take a look at each of these."),(0,a.kt)("h3",{id:"control-plane-simple-efficient-cache-management"},"Control plane: simple, efficient cache management"),(0,a.kt)("p",null,"The Momento Serverless Cache control plane API is the API you will use to manage your caches overall. You can use the control plane API to create a new cache, list existing caches, or delete an unwanted cache."),(0,a.kt)("p",null,"When you hear 'control plane', you might think 'slow, management operations.' But that's not the case here -- ",(0,a.kt)("strong",{parentName:"p"},"Momento has been designed to quickly and efficiently manage caches within your account.")," You won't fire a command to create a cache and wait for the cache to be created in the background. With Momento, the cache is created synchronously, within a second. Your cache will be ready to go by the time your request to create it has returned."),(0,a.kt)("p",null,"Each cache in Momento Serverless Cache is isolated from other caches, and there's no technicel limit on the number of caches you can have in your account, but there are guardrails in place in the form of ",(0,a.kt)("a",{parentName:"p",href:"./../manage/limits"},"service limits"),". This means you can have dedicated caches for each environment for your application or even each deployed branch in your Continuous Integration/Continuous Delivery (CI/CD) system."),(0,a.kt)("h3",{id:"data-plane-performant-cache-interactions"},"Data plane: performant cache interactions"),(0,a.kt)("p",null,"The Momento control plane is very useful, but data plane operations are where the action is. The data plane API refers to operations that actually interact with the data in your cache(s). It's designed to be blazing fast -- most data plane operations take less than 1-2 milliseconds from the client's perspective."),(0,a.kt)("p",null,'The data plane includes the standard "set" and "get" cache functionality allowing you to write and retrieve a cache entry. You can also use the multi-get and multi-set commands to process multiple cached entries in a single request.'),(0,a.kt)("h2",{id:"interacting-with-the-momento-serverless-cache-api"},"Interacting with the Momento Serverless Cache API"),(0,a.kt)("p",null,"The SimpleCache object will be your main way of interacting with the Momento Serverless Cache API. Let's talk a little bit about what is happening under the hood. We'll discuss the authentication mechanism, the communication format, and the networking configuration for the Momento API."),(0,a.kt)("h3",{id:"authentication-token"},"Authentication token"),(0,a.kt)("p",null,"Your SimpleCache object will use an authentication token when communicating with the Momento Serverless Cache service. This token is a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token"},"JSON Web Token"),' (or "JWT") that contains signed account information to authenticate you when making cache requests. It also includes information like the hostname of your cache instance, which helps the SimpleCache object to make more efficient requests to the Momento service.'),(0,a.kt)("p",null,"You will receive the Momento authentication token when signing up for the Momento service. To get your Momento authentication token and begin using the Momento service, ",(0,a.kt)("a",{parentName:"p",href:"/getting-started"},"follow the quickstart here"),"."),(0,a.kt)("h3",{id:"grpc"},"gRPC"),(0,a.kt)("p",null,"Momento is a ",(0,a.kt)("a",{parentName:"p",href:"/introduction/common-caching-patterns#where-to-cache----local-vs-remote-caching"},"remote cache")," using a client-server model. Because of this, your SimpleCache client will need to communicate with your remote Momento cache. To facilitate this communication, Momento could use any number of communication methods, from a JSON API over HTTP to a custom-built RPC protocol."),(0,a.kt)("p",null,"The SimpleCache client object uses ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," to communicate with the Momento service. gRPC is a popular open source remote procedure call (RPC) framework developed at Google for fast, efficient communication. When using gRPC, you define the RPCs you want to expose and the data structures you will use in a .proto file. This .proto file is then used to build the client and server implementations of your service."),(0,a.kt)("p",null,"There are two main benefits for you of using gRPC as a Momento user."),(0,a.kt)("p",null,"First, gRPC is ",(0,a.kt)("em",{parentName:"p"},"fast"),". You may be familiar with using JSON-based REST APIs for interacting with other services. While this method is flexible, the plaintext format of the message results in a larger message size and slower performance. Conversely, gRPC uses protocol buffers by default to exchange messages between the client and server. Protocol buffers will serialize your data into a more efficient binary format, allowing for faster transport plus faster serialization and deserialization of your data. When you are using a cache like Momento, this additional speed is critical."),(0,a.kt)("p",null,"Second, gRPC has cross-language support. You can use the .proto files to quickly generate clients in a large number of supported languages. While this doesn't directly help you as a Momento user, you indirectly benefit by quickly receiving new features in your language of choice. The Momento team can generate base clients across languages, lowering the burden of maintaining SDKs for each language. We will craft a consistent, language-specific interface on top of the generated code for each language, but the baseline work of interacting with the Momento service is much lower."),(0,a.kt)("p",null,"gRPC is supported by all languages for which there is a Momento SDK. For most of these languages, you do not need to know that Momento is using gRPC -- all the dependencies and gRPC communication are handled for you by the Momento SDK. For special concerns about using the Momento Python SDK in AWS Lambda, check out our guide on ",(0,a.kt)("a",{parentName:"p",href:"./../develop/guides/caching-with-aws-lambda#python"},"using Momento in AWS Lambda"),"."),(0,a.kt)("h3",{id:"networking"},"Networking"),(0,a.kt)("p",null,"As noted above, Momento cache is a remote service from your application, and thus we need to think about the networking infrastructure to connect your application to the Momento service. In keeping with our core principles, Momento offers two networking mechanisms for interacting with your cache: the default configuration, and an advanced configuration."),(0,a.kt)("h4",{id:"default-networking"},"Default networking"),(0,a.kt)("p",null,"By default, your SimpleCache client will connect to a publicly accessible endpoint for the Momento cache service. There are two main benefits to the default networking setup."),(0,a.kt)("p",null,"First, it is simple. You can ",(0,a.kt)("a",{parentName:"p",href:"/getting-started"},"get started with Momento")," and start interacting with your cache in as little as five minutes right from your laptop. You don't have to mess with complicated network configuration to benefit from a cache in your application."),(0,a.kt)("p",null,"Second, it works well with serverless applications. Many serverless applications prioritize using services that are available using HTTPS rather than connection models that require a private VPC to control access. Part of this is due to the initial complexity and latency around using Lambda functions within a VPC, but part of it is due to the reduced complexity of avoiding complex network configurations."),(0,a.kt)("p",null,"If these benefits appeal to you, the default networking setup is perfect for you."),(0,a.kt)("h4",{id:"advanced-networking"},"Advanced networking"),(0,a.kt)("p",null,"In addition to the default networking setup, Momento provides an advanced networking configurations that allows for an optimal path between your VPC and the Momento VPC depending on what is best for your application. We can currently support both VPC Endpoints and VPC peering in AWS."),(0,a.kt)("p",null,"These are good options for your workloads if you need to keep the traffic over private addresses for compliance or if you have extreme bandwidth or latency requirements. If you're interested in using a VPC Endpoint or VPC peering with your Momento cache, please ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"contact us")," to learn more and get your account approved to try out."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"On this page, we learned the basic concepts of working with the Momento SDK and API. If you want to get started using Momento, check out our ",(0,a.kt)("a",{parentName:"p",href:"/getting-started"},"getting started guide"),"."),(0,a.kt)("p",null,"If you want to learn more about caching strategies and how to think about caching, check out our resource on ",(0,a.kt)("a",{parentName:"p",href:"./../introduction/common-caching-patterns"},"caching strategies and patterns"),"."))}u.isMDXComponent=!0}}]);