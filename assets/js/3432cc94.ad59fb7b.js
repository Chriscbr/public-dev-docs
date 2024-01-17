"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(a),p=i,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:2,sidebar_label:"Common Caching Patterns",title:"Common Caching Patterns",description:"Learn what serverless is in terms of caching and what Momento Cache can be your simple, fast cache for your apps."},r="Common caching patterns",c={unversionedId:"cache/introduction/common-caching-patterns",id:"cache/introduction/common-caching-patterns",title:"Common Caching Patterns",description:"Learn what serverless is in terms of caching and what Momento Cache can be your simple, fast cache for your apps.",source:"@site/docs/cache/introduction/common-caching-patterns.md",sourceDirName:"cache/introduction",slug:"/cache/introduction/common-caching-patterns",permalink:"/cache/introduction/common-caching-patterns",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/introduction/common-caching-patterns.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Common Caching Patterns",title:"Common Caching Patterns",description:"Learn what serverless is in terms of caching and what Momento Cache can be your simple, fast cache for your apps."},sidebar:"tutorialSidebar",previous:{title:"What is Serverless Caching?",permalink:"/cache/introduction/what-is-serverless-caching"},next:{title:"Common Caching Strategies",permalink:"/cache/introduction/common-caching-strategies"}},s={},l=[{value:"Caching choices",id:"caching-choices",level:2},{value:"Where to cache -- local vs. remote caching",id:"where-to-cache----local-vs-remote-caching",level:3},{value:"When to cache -- read vs. write caching",id:"when-to-cache----read-vs-write-caching",level:3},{value:"How to cache -- inline vs. aside caching",id:"how-to-cache----inline-vs-aside-caching",level:3}],h={toc:l};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"common-caching-patterns"},"Common caching patterns"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Caching is fast")),"."),(0,i.kt)("p",null,"With an in-memory system optimized for key-value access, you can get sub-millisecond p99 response times ",(0,i.kt)("em",{parentName:"p"},"as measured by the client"),". That's fast. And because it's so fast \u2026"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Caching is fun"),".")),(0,i.kt)("p",null,"Nobody likes a slow website. Slow websites lead to bored users and ",(0,i.kt)("a",{parentName:"p",href:"https://www.gigaspaces.com/blog/amazon-found-every-100ms-of-latency-cost-them-1-in-sales/"},"lost sales"),". Developers don't want to work on a slow website or deal with unhappy users. Caching can help your slow website by lowering the latency of complicated requests or reducing the load on your database. But you need to be careful when caching, because \u2026"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Caching can be a ",(0,i.kt)("a",{parentName:"em",href:"https://twitter.com/forrestbrazeal/status/1451189473383890946?lang=en"},"footgun")),".")),(0,i.kt)("p",null,"There are effective ways to add caching, and there are ineffective ways to add caching. But even worse than ineffective caching strategies are harmful caching strategies -- ones that confuse your users via stale, inconsistent data or that reduce your application availability."),(0,i.kt)("p",null,"There are many different ways to implement a cache, and the caching strategy for your application will depend on a number of factors."),(0,i.kt)("p",null,"In this post, you will learn how to design a caching strategy that works for your application. First, we'll look at the different choices you need to make when designing a caching strategy. Then, we'll review some common caching strategies and when you should use or avoid specific strategies."),(0,i.kt)("h2",{id:"caching-choices"},"Caching choices"),(0,i.kt)("p",null,"Before we discuss specific caching patterns you may use in your application, let's discuss some of the key choices you'll need to make when adding caching to your application."),(0,i.kt)("p",null,"The three main choices are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Where to cache")," -- local vs. remote;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"When to cache")," -- read vs. write;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"How to cache")," -- inline vs. aside."))),(0,i.kt)("p",null,"Let's discuss each of these in order."),(0,i.kt)("h3",{id:"where-to-cache----local-vs-remote-caching"},"Where to cache -- local vs. remote caching"),(0,i.kt)("p",null,"The first caching choice you need to make is on where to cache your data."),(0,i.kt)("p",null,"In thinking about caching, we often jump to a centralized, remote cache that is used like a faster, less durable version of our database. But a cache need not be a separate piece of infrastructure. You can add caching locally to your application, whether on your ",(0,i.kt)("a",{parentName:"p",href:"#local-backend-caching"},"backend servers")," or even on your ",(0,i.kt)("a",{parentName:"p",href:"#local-browser-caching"},"users' browsers"),". When we say 'local' caching, we mean caching that is local to some compute and that is inaccessible from other compute instances."),(0,i.kt)("p",null,"In general, the question of a local vs. remote cache comes down to utility vs. simplicity. A local cache is usually easier to add to an application than pulling in a new piece of infrastructure. Additionally, a new piece of infrastructure brings additional challenges around availability and application uptime that a local cache will generally avoid."),(0,i.kt)("p",null,"On the other hand, a local cache is less useful than a centralized cache. If you are caching on your backend servers, the chance that a request will be served by a machine that has previously cached the data is reduced as the size of your fleet increases. This is even more true due to the ephemerality of modern cloud-based applications. Serverless functions, containers, or instances are becoming more and more short-lived as applications scale up and down dynamically to match demand. A fresh instance of your application has no local cache and thus has no benefit for the initial requests to the application."),(0,i.kt)("p",null,"Finally, a local cache can make it harder to manage stale data. When data is altered or deleted, it is easier to make a corresponding update to the cached data in a centralized, remote cache. It is more difficult to indicate updates to cached data that are distributed on local application instances or client browsers. Because of this, a local cache may only work for certain types of cached data or with low time-to-live (TTL) configurations."),(0,i.kt)("p",null,"A remote, centralized cache does not have these downsides. It can be used by any servers that are handling a piece of work, making it more broadly useful for your application. Further, remote caches generally have mechanisms to expire data on-demand, allowing your write path to purge data after it has been altered. The downsides of a remote cache are centered on the operational challenges of maintaining a separate piece of infrastructure."),(0,i.kt)("h3",{id:"when-to-cache----read-vs-write-caching"},"When to cache -- read vs. write caching"),(0,i.kt)("p",null,'The second caching choice to consider is when to cache the data. Again, you have two choices -- cache the data when it is read the first time (often called "lazy-loading"), or cache the data when it is written.'),(0,i.kt)("p",null,"The most popular caching pattern is likely the ",(0,i.kt)("a",{parentName:"p",href:"#read-aside-caching"},"read-aside pattern"),". For this pattern, your application first attempts to read and return data from the cache on a request. If the data is not currently in the cache, the application falls back to the database to read the data. It then stores it in the cache before returning the response so that the retrieved data is available for the next request that needs this data."),(0,i.kt)("p",null,"The opposite pattern is to load your cache following a successful write. After a write succeeds, you would proactively push it to the cache in anticipation of imminent use."),(0,i.kt)("p",null,"The benefits of caching data when it is read are its flexibility and space efficiency. Lazy loading is a flexible pattern that can work for almost any dataset. You can use it to cache individual objects, a result set of multiple objects, or an aggregated value. Whether caching results directly from a database or some results after computation, read-aside caching is easy to implement as you simply cache the final response before returning to the client."),(0,i.kt)("p",null,"This is more difficult when proactively caching on the write side. While caching individual items on writes can be straightforward, it is more difficult to proactively cache result sets or aggregated values as it requires a deeper knowledge of what the read patterns are and how those patterns are affected by writes."),(0,i.kt)("p",null,"Additionally, lazy loading is a more space efficient use of your cache. Rather than loading data into your cache at write time, regardless of whether it will be read again, you are only caching data once it is read. In many applications, reads of individual data are correlated across time. Something that is read once is more likely to be read soon after. By only caching data once it has been requested at least once, you are optimizing for caching more frequently accessed data."),(0,i.kt)("p",null,"The downsides of caching data when it is read are the slowness of the initial read along with the possibility of returning stale data. Because you are only loading the cache once data is read, it means that each piece of requested data will need to make at least one request through the slower, non-cached path. Depending on your application needs, this may be suboptimal."),(0,i.kt)("p",null,"Further, a pattern that only caches data on the read side will be subject to returning stale data to clients. If the underlying data has changed without a corresponding eviction of the cached data, users could see confusing results. Applications can mitigate this by caching data for a shorter time, though that exacerbates the downside noted above where there is a cache miss."),(0,i.kt)("h3",{id:"how-to-cache----inline-vs-aside-caching"},"How to cache -- inline vs. aside caching"),(0,i.kt)("p",null,"The final consideration in choosing your caching strategy is whether to use an inline cache or a side cache."),(0,i.kt)("p",null,"In the previous section, we talked about a read-aside cache. An aside cache is the most straightforward type of remote cache, where it stores data explicitly given to it by your service. It usually has simple get & set semantics that can flexibly store any piece of data that you want, but you must store that data specifically. If the data does not exist in the cache, your service is responsible for finding the underlying data elsewhere and updating the cache, if desired."),(0,i.kt)("p",null,"On the other hand, an inline cache is one that is transparent to your service that is calling to retrieve the data. Your application will hit the inline cache directly to retrieve the item. If the cache does not have the requested data, the cache itself will do the work to fetch the data from the upstream data source."),(0,i.kt)("p",null,"You can see why these caches get the name from the architecture diagrams below. The aside cache sits ",(0,i.kt)("em",{parentName:"p"},"aside")," your application and is called separately from your data source. Alternatively, the inline cache is used inline with your request to the data source."),(0,i.kt)("p",null,"Aside caches are more common due to their flexibility for nearly any use case. Additionally, they are decoupled from your end datastore and allow you to choose how to handle failures at the caching layer."),(0,i.kt)("p",null,"The benefit of an inline cache is simplicity within your application. Your application doesn't need to worry about multiple different stores and the corresponding logic to fallback to a database in the event of a cache miss."),(0,i.kt)("p",null,"The downside of an inline cache is the reduced availability for your application. You're adding in an additional piece of infrastructure that not only adds caching functionality but also takes responsibility for talking to your database. If your cache goes down, you may have trouble falling back to your database as the cache itself was talking to your database."),(0,i.kt)("p",null,"Another downside of the inline cache is the availability of such services. An inline cache has a tight integration with the downstream data source that it is fronting. As such, someone needs to specifically build a cache that integrates with the primary data source. Because of this, inline caches are generally reserved for generic protocols or as proprietary add-ons to a specific database."))}d.isMDXComponent=!0}}]);