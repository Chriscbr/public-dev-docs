"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3367],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=s(a),m=n,g=y["".concat(p,".").concat(m)]||y[m]||h[m]||l;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(8168),n=(a(6540),a(5680));const l={sidebar_position:7,title:"HTTP API reference for Momento Cache",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access serverless caching."},o="HTTP API Reference for Momento Cache",i={unversionedId:"cache/develop/api-reference/http-api",id:"cache/develop/api-reference/http-api",title:"HTTP API reference for Momento Cache",description:"Discover the HTTP API for edge computing services to access serverless caching.",source:"@site/docs/cache/develop/api-reference/http-api.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/http-api",permalink:"/cache/develop/api-reference/http-api",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/http-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"HTTP API reference for Momento Cache",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access serverless caching."},sidebar:"tutorialSidebar",previous:{title:"Auth",permalink:"/cache/develop/api-reference/auth"},next:{title:"CollectionTTL object",permalink:"/cache/develop/api-reference/collection-ttl"}},p={},s=[{value:"Authentication",id:"authentication",level:2},{value:"Regions",id:"regions",level:2},{value:"Get Value",id:"get-value",level:2},{value:"Request",id:"request",level:3},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Headers",id:"headers",level:4},{value:"Responses",id:"responses",level:3},{value:"Hit",id:"hit",level:4},{value:"Miss",id:"miss",level:4},{value:"Error",id:"error",level:4},{value:"Set Value",id:"set-value",level:2},{value:"Request",id:"request-1",level:3},{value:"Body",id:"body",level:4},{value:"Path Parameters",id:"path-parameters-1",level:4},{value:"Query Parameters",id:"query-parameters-1",level:4},{value:"Headers",id:"headers-1",level:4},{value:"Responses",id:"responses-1",level:3},{value:"Ok",id:"ok",level:4},{value:"Error",id:"error-1",level:4},{value:"Delete Value",id:"delete-value",level:2},{value:"Request",id:"request-2",level:3},{value:"Path Parameters",id:"path-parameters-2",level:4},{value:"Query Parameters",id:"query-parameters-2",level:4},{value:"Headers",id:"headers-2",level:4},{value:"Responses",id:"responses-2",level:3},{value:"Ok",id:"ok-1",level:4},{value:"Error",id:"error-2",level:4},{value:"Examples",id:"examples",level:2},{value:"Put",id:"put",level:3},{value:"Get",id:"get",level:3},{value:"Delete",id:"delete",level:3}],u={toc:s},y="wrapper";function h(e){let{components:t,...a}=e;return(0,n.yg)(y,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"http-api-reference-for-momento-cache"},"HTTP API Reference for Momento Cache"),(0,n.yg)("p",null,"Momento provides an HTTP API interface for your applications that can\u2019t use our ",(0,n.yg)("a",{parentName:"p",href:"./../"},"SDKs")," or for ones that prefer to use things like curl or fetch. For example, when deploying to edge compute services like ",(0,n.yg)("a",{parentName:"p",href:"https://workers.cloudflare.com/"},"Cloudflare Workers"),", ",(0,n.yg)("a",{parentName:"p",href:"https://www.fastly.com/products/edge-compute"},"Fastly Compute@Edge"),", etm. this API is for you. Be aware that most other applications should likely use ",(0,n.yg)("a",{parentName:"p",href:"./../"},"Momento\u2019s SDK clients"),"."),(0,n.yg)("p",null,"You can also view the Open API Specification in our ",(0,n.yg)("a",{parentName:"p",href:"https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00/definition/4765b18e-ba84-4802-9795-ecce9c408062?view=documentation"},"public workspace in Postman"),"."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"This documentation does not describe how to implement HTTP request syntax as that is different and unique to each language you might use.")),(0,n.yg)("h2",{id:"authentication"},"Authentication"),(0,n.yg)("p",null,"For each connection, you will need a Momento auth token generated via the ",(0,n.yg)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console")," or a ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine"},'token "vending machine" microservice you host'),". Momento auth tokens control access to the Momento services and can be set to expire and grant/restrict access to specific resources."),(0,n.yg)("h2",{id:"regions"},"Regions"),(0,n.yg)("p",null,"To access the Momento HTTP API, use one of the following endpoints in the region of your API token and cache."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null},"AWS Region"),(0,n.yg)("th",{parentName:"tr",align:null},"Endpoints"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},"us-west-2"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"},"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"2"),(0,n.yg)("td",{parentName:"tr",align:null},"us-east-1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com"},"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"3"),(0,n.yg)("td",{parentName:"tr",align:null},"us-east-2"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com"},"https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"4"),(0,n.yg)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com"},"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"5"),(0,n.yg)("td",{parentName:"tr",align:null},"eu-west-1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com"},"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"6"),(0,n.yg)("td",{parentName:"tr",align:null},"ap-south-1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com"},"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com"))))),(0,n.yg)("p",null,"If you do not see a Region you require, let\u2019s discuss. Please contact ",(0,n.yg)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Support"),"."),(0,n.yg)("h2",{id:"get-value"},"Get Value"),(0,n.yg)("p",null,"Gets a scalar value from a cache."),(0,n.yg)("h3",{id:"request"},"Request"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Path: /cache/{cacheName}"),(0,n.yg)("li",{parentName:"ul"},"HTTP Method: GET")),(0,n.yg)("h4",{id:"path-parameters"},"Path Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.yg)("th",{parentName:"tr",align:null},"Required?"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,n.yg)("td",{parentName:"tr",align:null},"yes"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe string"),(0,n.yg)("td",{parentName:"tr",align:null},"The name of the cache to operate on.")))),(0,n.yg)("h4",{id:"query-parameters"},"Query Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.yg)("th",{parentName:"tr",align:null},"Required?"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"key"),(0,n.yg)("td",{parentName:"tr",align:null},"no**"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.yg)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"key_base64"),(0,n.yg)("td",{parentName:"tr",align:null},"no**"),(0,n.yg)("td",{parentName:"tr",align:null},"Base64","\xa0","URL-encoded","\xa0","binary","\xa0","key"),(0,n.yg)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"token"),(0,n.yg)("td",{parentName:"tr",align:null},"no***"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe string"),(0,n.yg)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, to be used for authentication/authorization of the request.")))),(0,n.yg)("p",null,"** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key."),(0,n.yg)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.yg)("h4",{id:"headers"},"Headers"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Header","\xa0","name"),(0,n.yg)("th",{parentName:"tr",align:null},"Required?"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Authorization"),(0,n.yg)("td",{parentName:"tr",align:null},"no***"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.yg)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, is used for authentication/authorization of the request.")))),(0,n.yg)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.yg)("h3",{id:"responses"},"Responses"),(0,n.yg)("h4",{id:"hit"},"Hit"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 200 OK")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Content-Type: octet-stream"),(0,n.yg)("li",{parentName:"ul"},"Body: The binary value stored at the specified key.")),(0,n.yg)("h4",{id:"miss"},"Miss"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 404 Not Found")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'"Key Not Found" indicates that the key was not present in the cache, while "Cache Not Found" indicates that the specified cache does not exist.')),(0,n.yg)("h4",{id:"error"},"Error"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 400 Bad Request")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that the request was incorrectly specified. See the body of the message for further details.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 401 Unauthorized")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 403 Forbidden")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 429 Too Many Requests")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that account limits were exceeded. See the body of the message for further details, or contact Momento support to request a limit increase.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 500 Internal Server Error")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.")),(0,n.yg)("h2",{id:"set-value"},"Set Value"),(0,n.yg)("p",null,"Sets a scalar value in a cache."),(0,n.yg)("h3",{id:"request-1"},"Request"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Path: /cache/{cacheName}"),(0,n.yg)("li",{parentName:"ul"},"HTTP Method: PUT")),(0,n.yg)("h4",{id:"body"},"Body"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Content-Type: octet-stream"),(0,n.yg)("li",{parentName:"ul"},"The body of the request should contain the binary value to be stored in the cache at the specified key.")),(0,n.yg)("h4",{id:"path-parameters-1"},"Path Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.yg)("th",{parentName:"tr",align:null},"Required?"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,n.yg)("td",{parentName:"tr",align:null},"yes"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe string"),(0,n.yg)("td",{parentName:"tr",align:null},"The name of the cache to operate on.")))),(0,n.yg)("h4",{id:"query-parameters-1"},"Query Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.yg)("th",{parentName:"tr",align:null},"Required?"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"key"),(0,n.yg)("td",{parentName:"tr",align:null},"no**"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.yg)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"key_base64"),(0,n.yg)("td",{parentName:"tr",align:null},"no**"),(0,n.yg)("td",{parentName:"tr",align:null},"Base64","\xa0","URL-encoded","\xa0","binary","\xa0","key"),(0,n.yg)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"token"),(0,n.yg)("td",{parentName:"tr",align:null},"no***"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.yg)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, to be used for authentication/authorization of the request.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"ttl_seconds"),(0,n.yg)("td",{parentName:"tr",align:null},"yes"),(0,n.yg)("td",{parentName:"tr",align:null},"Integer"),(0,n.yg)("td",{parentName:"tr",align:null},"The TTL to be set on the key, in seconds. For more on TTL, see  ",(0,n.yg)("a",{parentName:"td",href:"./../../learn/how-it-works/expire-data-with-ttl"},"Expire Data with Time-to-Live"),".")))),(0,n.yg)("p",null,"** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key."),(0,n.yg)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.yg)("h4",{id:"headers-1"},"Headers"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Header","\xa0","name"),(0,n.yg)("th",{parentName:"tr",align:null},"Required?"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Authorization"),(0,n.yg)("td",{parentName:"tr",align:null},"no***"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.yg)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, is used for authentication/authorization of the request.")))),(0,n.yg)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.yg)("h3",{id:"responses-1"},"Responses"),(0,n.yg)("h4",{id:"ok"},"Ok"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 204 No Content")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The key-value pair was stored in the cache, but no content was returned (by design).")),(0,n.yg)("h4",{id:"error-1"},"Error"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 400 Bad Request")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that the request was incorrectly specified. See the message body for further details.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 401 Unauthorized")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 403 Forbidden")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 404 Not Found")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u201cCache Not Found\u201d indicates that the specified cache does not exist.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 429 Too Many Requests")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 500 Internal Server Error")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.")),(0,n.yg)("h2",{id:"delete-value"},"Delete Value"),(0,n.yg)("p",null,"Deletes a scalar value from a cache."),(0,n.yg)("h3",{id:"request-2"},"Request"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Path: /cache/{cacheName}"),(0,n.yg)("li",{parentName:"ul"},"HTTP Method: DELETE")),(0,n.yg)("h4",{id:"path-parameters-2"},"Path Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.yg)("th",{parentName:"tr",align:null},"Required?"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,n.yg)("td",{parentName:"tr",align:null},"yes"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe string"),(0,n.yg)("td",{parentName:"tr",align:null},"The name of the cache to operate on.")))),(0,n.yg)("h4",{id:"query-parameters-2"},"Query Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.yg)("th",{parentName:"tr",align:null},"Required?"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"key"),(0,n.yg)("td",{parentName:"tr",align:null},"no**"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.yg)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"key_base64"),(0,n.yg)("td",{parentName:"tr",align:null},"no**"),(0,n.yg)("td",{parentName:"tr",align:null},"Base64","\xa0","URL-encoded","\xa0","binary","\xa0","key"),(0,n.yg)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"token"),(0,n.yg)("td",{parentName:"tr",align:null},"no***"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.yg)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, to be used for authentication/authorization of the request.")))),(0,n.yg)("p",null,"** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key."),(0,n.yg)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.yg)("h4",{id:"headers-2"},"Headers"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Header","\xa0","name"),(0,n.yg)("th",{parentName:"tr",align:null},"Required?"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Authorization"),(0,n.yg)("td",{parentName:"tr",align:null},"no***"),(0,n.yg)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.yg)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, is used for authentication/authorization of the request.")))),(0,n.yg)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.yg)("h3",{id:"responses-2"},"Responses"),(0,n.yg)("h4",{id:"ok-1"},"Ok"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 204 No Content")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The key-value pair was stored in the cache, but no content was returned (by design).")),(0,n.yg)("h4",{id:"error-2"},"Error"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 400 Bad Request")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that the request was incorrectly specified. See the message body for further details.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 401 Unauthorized")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 403 Forbidden")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 404 Not Found")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u201cCache Not Found\u201d indicates that the specified cache does not exist.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 429 Too Many Requests")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Status Code: 500 Internal Server Error")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.")),(0,n.yg)("h2",{id:"examples"},"Examples"),(0,n.yg)("h3",{id:"put"},"Put"),(0,n.yg)("p",null,"Below is an example of a curl command that sets an item with a key of ",(0,n.yg)("em",{parentName:"p"},"example_key")," and value of ",(0,n.yg)("em",{parentName:"p"},"example value")," in the ",(0,n.yg)("em",{parentName:"p"},"default-cache")," cache in the ",(0,n.yg)("em",{parentName:"p"},"ap-south-1")," region:"),(0,n.yg)("p",null,"URL-safe Key, token provided in query parameter:"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"curl -X PUT -d 'example value' \"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com/cache/default-cache?key=example_key&ttl_seconds=300&token=<token>\"")),(0,n.yg)("p",null,"Base64 Key, token as ",(0,n.yg)("em",{parentName:"p"},"Authorization")," header:\n",(0,n.yg)("inlineCode",{parentName:"p"},'curl -X PUT -H "Authorization: <token>" -d \'example value\' "https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk&ttl_seconds=300"')),(0,n.yg)("h3",{id:"get"},"Get"),(0,n.yg)("p",null,"Below is an example of a curl command that gets an item with a key of ",(0,n.yg)("em",{parentName:"p"},"example_key")," in the ",(0,n.yg)("em",{parentName:"p"},"default-cache")," cache in the ",(0,n.yg)("em",{parentName:"p"},"eu-west-1")," region:"),(0,n.yg)("p",null,"URL-safe key, token provided in query parameter"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},'curl "https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com/cache/default-cache?key=example_key&token=<token>"')),(0,n.yg)("p",null,"Base64 Key, token provided as ",(0,n.yg)("em",{parentName:"p"},"Authorization")," header:"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},'curl -H "Authorization: <token>" "https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"')),(0,n.yg)("h3",{id:"delete"},"Delete"),(0,n.yg)("p",null,"Below is an example of a curl command that deletes an item with a key of ",(0,n.yg)("em",{parentName:"p"},"example_key")," in the ",(0,n.yg)("em",{parentName:"p"},"default-cache")," cache in the ",(0,n.yg)("em",{parentName:"p"},"us-west-2")," region:"),(0,n.yg)("p",null,"URL-safe key, token provided in query parameter:"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},'curl -X DELETE "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/default-cache?key=example_key&token=<token>"')),(0,n.yg)("p",null,"Base64 Key, token provided as ",(0,n.yg)("em",{parentName:"p"},"Authorization")," header:"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},'curl -X DELETE -H "Authorization: <token>" "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"')))}h.isMDXComponent=!0}}]);