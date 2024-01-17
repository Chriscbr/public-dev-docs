"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,c=new Array(s);c[0]=u;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<s;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:11,sidebar_label:"Response objects",title:"Response object API reference in Momento Vector Indexes",description:"Learn how to interact with the response object in the Momento API for Vector Indexes."},c="Response objects from Momento APIs in Momento Vector Indexes",i={unversionedId:"vector-index/develop/api-reference/response-objects",id:"vector-index/develop/api-reference/response-objects",title:"Response object API reference in Momento Vector Indexes",description:"Learn how to interact with the response object in the Momento API for Vector Indexes.",source:"@site/docs/vector-index/develop/api-reference/response-objects.md",sourceDirName:"vector-index/develop/api-reference",slug:"/vector-index/develop/api-reference/response-objects",permalink:"/vector-index/develop/api-reference/response-objects",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/develop/api-reference/response-objects.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Response objects",title:"Response object API reference in Momento Vector Indexes",description:"Learn how to interact with the response object in the Momento API for Vector Indexes."},sidebar:"vectorSidebar",previous:{title:"Auth",permalink:"/vector-index/develop/api-reference/auth"},next:{title:"SDKs"}},a={},l=[{value:"Error",id:"error",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:3},{value:"Success",id:"success",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"response-objects-from-momento-apis-in-momento-vector-indexes"},"Response objects from Momento APIs in Momento Vector Indexes"),(0,o.kt)("p",null,"These are the baseline responses for all commands. Some commands will add more data and functionality."),(0,o.kt)("h2",{id:"error"},"Error"),(0,o.kt)("p",null,"Returned in lieu of an exception."),(0,o.kt)("h3",{id:"constructor"},"Constructor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"innerException: Exception - the exception which caused the error")),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"message(): String - a human readable error message"),(0,o.kt)("li",{parentName:"ul"},"innerException(): Exception - the original exception."),(0,o.kt)("li",{parentName:"ul"},"errorCode(): MomentoErrorCode - Momento\u2019s own category of errors such as InvalidArgument or BadRequest. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md"},"Standards And Practices - Error Handling")),(0,o.kt)("li",{parentName:"ul"},"toString(): String - alias for message()")),(0,o.kt)("h2",{id:"success"},"Success"),(0,o.kt)("p",null,"The command was successful."))}d.isMDXComponent=!0}}]);