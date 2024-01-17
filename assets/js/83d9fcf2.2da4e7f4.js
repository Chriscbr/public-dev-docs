"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5975],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(h,s(s({ref:t},p),{},{components:r})):o.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:11,sidebar_label:"Response objects",title:"Response object API reference | Momento Cache",description:"Learn how to interact with the response object in the Momento API for Momento Cache."},s="Response objects from Momento APIs",i={unversionedId:"cache/develop/api-reference/response-objects",id:"cache/develop/api-reference/response-objects",title:"Response object API reference | Momento Cache",description:"Learn how to interact with the response object in the Momento API for Momento Cache.",source:"@site/docs/cache/develop/api-reference/response-objects.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/response-objects",permalink:"/cache/develop/api-reference/response-objects",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/response-objects.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Response objects",title:"Response object API reference | Momento Cache",description:"Learn how to interact with the response object in the Momento API for Momento Cache."},sidebar:"tutorialSidebar",previous:{title:"CollectionTTL object",permalink:"/cache/develop/api-reference/collection-ttl"},next:{title:"Language Support",permalink:"/cache/develop/api-reference/language-support"}},c={},l=[{value:"Error",id:"error",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:3},{value:"Success",id:"success",level:2},{value:"Hit",id:"hit",level:2},{value:"Miss",id:"miss",level:2},{value:"Set",id:"set",level:2},{value:"NotSet",id:"notset",level:2},{value:"Stored",id:"stored",level:2},{value:"NotStored",id:"notstored",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"response-objects-from-momento-apis"},"Response objects from Momento APIs"),(0,n.kt)("p",null,"These are the baseline responses for all commands. Some commands will add more data and functionality."),(0,n.kt)("p",null,"Commands fall ",(0,n.kt)("em",{parentName:"p"},"generally")," into two categories. Those which respond with: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Success or Error")," - An example is a Set operation. Either the item was successfully written to the cache or it errored."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Hit, Miss, or Error")," - An example is a Get operation. If the requested item is in the cache, you have a cache Hit. If it is not in the cache, you get a cache Miss. If there is some sort of error, you get an Error.")),(0,n.kt)("h2",{id:"error"},"Error"),(0,n.kt)("p",null,"Returned in lieu of an exception."),(0,n.kt)("h3",{id:"constructor"},"Constructor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"innerException: Exception - the exception which caused the error")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"message(): String - a human readable error message"),(0,n.kt)("li",{parentName:"ul"},"innerException(): Exception - the original exception."),(0,n.kt)("li",{parentName:"ul"},"errorCode(): MomentoErrorCode - Momento\u2019s own category of errors such as InvalidArgument or BadRequest. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md"},"Standards And Practices - Error Handling")),(0,n.kt)("li",{parentName:"ul"},"toString(): String - alias for message()")),(0,n.kt)("h2",{id:"success"},"Success"),(0,n.kt)("p",null,"The command was successful."),(0,n.kt)("h2",{id:"hit"},"Hit"),(0,n.kt)("p",null,"The key or field exists in the cache. Usually extended to return a value."),(0,n.kt)("h2",{id:"miss"},"Miss"),(0,n.kt)("p",null,"The key or field does not exist in the cache."),(0,n.kt)("h2",{id:"set"},"Set"),(0,n.kt)("p",null,"For TTL commands, the update was applied successfully."),(0,n.kt)("h2",{id:"notset"},"NotSet"),(0,n.kt)("p",null,"For TTL commands, the update was not applied and no change was made to the existing TTL."),(0,n.kt)("h2",{id:"stored"},"Stored"),(0,n.kt)("p",null,"For setIfNotExists commands, the key did not exist and the value was set."),(0,n.kt)("h2",{id:"notstored"},"NotStored"),(0,n.kt)("p",null,"For setIfNotExists commands, the key existed and no value was set."))}d.isMDXComponent=!0}}]);