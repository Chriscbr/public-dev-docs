"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),h=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=h(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=h(a),u=r,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||n;return a?o.createElement(m,c(c({ref:t},l),{},{components:a})):o.createElement(m,c({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var h=2;h<n;h++)c[h]=a[h];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:5,sidebar_label:"Eviction vs Expiration",title:"Cache Concepts - Cache eviction vs expiration with Momento Cache",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache",pagination_next:null},c="Cache Concepts: Cache eviction vs. cache expiration",i={unversionedId:"learn/courses/cache-concepts/cache-eviction-vs-cache-expiration",id:"learn/courses/cache-concepts/cache-eviction-vs-cache-expiration",title:"Cache Concepts - Cache eviction vs expiration with Momento Cache",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache",source:"@site/docs/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration.md",sourceDirName:"learn/courses/cache-concepts",slug:"/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration",permalink:"/ja/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Eviction vs Expiration",title:"Cache Concepts - Cache eviction vs expiration with Momento Cache",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Time to Live",permalink:"/ja/learn/courses/cache-concepts/time-to-live"}},s={},h=[{value:"Video",id:"video",level:2},{value:"Transcript",id:"transcript",level:2}],l={toc:h};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cache-concepts-cache-eviction-vs-cache-expiration"},"Cache Concepts: Cache eviction vs. cache expiration"),(0,r.kt)("h2",{id:"video"},"Video"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/76qpwvn262g",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"transcript"},"Transcript"),(0,r.kt)("p",null,"A database cache has a temporary storage area for frequently accessed data from a database. The purpose of a database cache is to reduce the number of times the database must be accessed in order to retrieve data. Database caches are used to improve the performance of applications that rely on a database for data storage and retrieval. They can help to reduce the load in the database server and improve the scalability and availability of your application."),(0,r.kt)("p",null,"Now that we've established that, let's talk about cache eviction and cache expiration. These two concepts are related, but they are quite different. Cache eviction is the cache service removing data to make room for other data. This can happen when the cache is full, and there is no more room to store new data."),(0,r.kt)("p",null,"Cache eviction policies determine which data gets removed from the cache when that happens. Some example cache eviction policies include, least recently used (LRU), least frequently used (LFU), and random eviction. Cache expiration is the process of removing data from the cache because it's no longer considered fresh or up-to-date. This is typically determined by a value called the cache time to live or TTL. This value is assigned to each piece of data when it is stored in the cache. When the TTL value is reached, the data is considered expired and is removed from the cache by the service."),(0,r.kt)("p",null,"To summarize, cache eviction is the process of removing data from the cache to make room for new data while cache expiration is deleting data from the cache because it is no longer considered fresher up to date. Both of these concepts are important for ensuring the efficiency and effectiveness of a caching system."),(0,r.kt)("p",null,"Now that you know these two terms, let's quickly talk about them as they relate to Momento Cache service. Momento considers cache evictions to be a key indicator of service quality degradation. The service continually monitors this and will add capacity to maintain a buffer for all customers. The service level objective of Momento Cache is to respect the TTL expiry of all cached items and not evict data."),(0,r.kt)("p",null,"For cache expiration, Momento Cache requires a time to live value in seconds for every object inserted into the cache. There are two places to set that value. Number one, when you establish the connection to the cache in your call to the SDK, you can specify that value. And number two, when you do a write operation, you can override that value on a per-object basis. If you do not set a TTL value in the write operation, the SDK uses the value from the connection object. By default, the maximum value for TTL is 24 hours."),(0,r.kt)("p",null,'For more information, see "',(0,r.kt)("a",{parentName:"p",href:"/learn/how-it-works/cache-eviction-vs-expiration"},"Cache eviction vs. cache expiration"),'" documentation.'))}p.isMDXComponent=!0}}]);