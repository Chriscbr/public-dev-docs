"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4147],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=s.createContext({}),l=function(e){var t=s.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=l(e.components);return s.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),m=l(a),p=n,d=m["".concat(i,".").concat(p)]||m[p]||u[p]||o;return a?s.createElement(d,r(r({ref:t},h),{},{components:a})):s.createElement(d,r({ref:t},h))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2,sidebar_label:"Common Caching Use Cases",title:"Cache Concepts | Common caching use cases",description:"Learn about the common use cases for a cache and how to use them in your daily work."},r="Cache Concepts: Common caching use cases",c={unversionedId:"learn/courses/cache-concepts/common-caching-use-cases",id:"learn/courses/cache-concepts/common-caching-use-cases",title:"Cache Concepts | Common caching use cases",description:"Learn about the common use cases for a cache and how to use them in your daily work.",source:"@site/docs/learn/courses/cache-concepts/common-caching-use-cases.md",sourceDirName:"learn/courses/cache-concepts",slug:"/learn/courses/cache-concepts/common-caching-use-cases",permalink:"/ja/learn/courses/cache-concepts/common-caching-use-cases",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/learn/courses/cache-concepts/common-caching-use-cases.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Common Caching Use Cases",title:"Cache Concepts | Common caching use cases",description:"Learn about the common use cases for a cache and how to use them in your daily work."},sidebar:"tutorialSidebar",previous:{title:"Cache Concepts",permalink:"/ja/learn/courses/cache-concepts/"},next:{title:"Why Use a Serverless Managed Service",permalink:"/ja/learn/courses/cache-concepts/why-use-serverless-services"}},i={},l=[{value:"Video",id:"video",level:2},{value:"Transcript",id:"transcript",level:2}],h={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cache-concepts-common-caching-use-cases"},"Cache Concepts: Common caching use cases"),(0,n.kt)("h2",{id:"video"},"Video"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/IlVRBF96Ci0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h2",{id:"transcript"},"Transcript"),(0,n.kt)("p",null,"In this module, we'll discuss common use cases for caching and how they might work with caching."),(0,n.kt)("p",null,"The first common use case is API responses. This is where you cache commonly used API calls to improve application performance and reduce calls to those APIs that generate somewhat static content. For example, consider an e-commerce website that uses an API to a microservice to retrieve product information."),(0,n.kt)("p",null,"This API is called every time a user visits a product detail page. To reduce the load on the server and improve the performance of the website, the API response can be cached. So when a user visits the product detail page, the website can check the cache to see if the response has already been stored. If it has, the cached response can be returned immediately without calling the API again."),(0,n.kt)("p",null,"The second use case is caching database query results. And this one might be one of the most common and important that I see. This is where you cache commonly used data to reduce the load on the database and improve application performance. For example, consider a news website that has a database of articles. When a user visits, the home page, the website should present the latest articles. If these articles are in the cache, the customer is served faster and with less overall load and cost on the entire system."),(0,n.kt)("p",null,"The third use case is caching static assets. In this use case, we're discussing caching, image files, data files, configuration files, scripts, and the like. Some of these assets might be cached in a caching server, while others make sense to cache in a user's client. These items don't change often, but they are often used and likely need to be available very quickly to the user."),(0,n.kt)("p",null,"Since it is user-facing, it is critical the data is available very fast and can be changed. Many times, data like this is ephemeral; for example, after a user session is over, the data is no longer needed. Therefore a cache is a fantastic place to store exactly this. Set of time to live value, and when the user session times out, their cached data is deleted by the cache on your behalf."),(0,n.kt)("p",null,"The final scenario is user session and personalization data. This is not strictly caching at all. It's more like a primary data store, but one that doesn't need the level of durability that a typical database provides and can thus benefit from a lower cost and better performance of a cache. This can be web or app usage, data shopping cart info, site preferences, and the like. Some of this data might be static, but most times, it changes quickly as the user navigates through a website or an app."),(0,n.kt)("p",null,"These four common use cases for caching or just the beginning of how you might cache data to give your users a better experience, lower your own costs, and manage your architecture better."))}u.isMDXComponent=!0}}]);