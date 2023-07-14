"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1549],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const s="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>A});var a=n(7462),o=n(7294),s=n(6010),r=n(2466),l=n(6550),i=n(1980),c=n(7392),p=n(12);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,c]=k({queryString:n,groupId:a}),[u,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=i??u;return m({value:e,tabValues:s})?e:null})();(0,o.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),d(e)}),[c,d,s]),tabValues:s}}var g=n(2389);const b="tabList__CuJ",f="tabItem_LNqP";function T(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),h=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(u(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:h},r,{className:(0,s.Z)("tabs__item",f,r?.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=d(e);return o.createElement("div",{className:(0,s.Z)("tabs-container",b)},o.createElement(T,(0,a.Z)({},e,t)),o.createElement(N,(0,a.Z)({},e,t)))}function A(e){const t=(0,g.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>l});var a=n(4866),o=n(5162),s=n(814),r=n(7294);const l=e=>{let{js:t,python:n,java:l,go:i,csharp:c,php:p,rust:u,ruby:h,elixir:m,cli:k}=e;return t||n||l||i||c||p||u||h||m||k?r.createElement(a.Z,null,t&&r.createElement(o.Z,{value:"js",label:"JavaScript"},r.createElement(s.Z,{language:"js"},t)),n&&r.createElement(o.Z,{value:"python",label:"Python"},r.createElement(s.Z,{language:"python"},n)),l&&r.createElement(o.Z,{value:"java",label:"Java"},r.createElement(s.Z,{language:"java"},l)),i&&r.createElement(o.Z,{value:"go",label:"Go"},r.createElement(s.Z,{language:"go"},i)),c&&r.createElement(o.Z,{value:"csharp",label:"C#"},r.createElement(s.Z,{language:"csharp"},c)),p&&r.createElement(o.Z,{value:"php",label:"PHP"},r.createElement(s.Z,{language:"php"},p)),u&&r.createElement(o.Z,{value:"rust",label:"Rust"},r.createElement(s.Z,{language:"rust"},u)),h&&r.createElement(o.Z,{value:"ruby",label:"Ruby"},r.createElement(s.Z,{language:"ruby"},h)),m&&r.createElement(o.Z,{value:"elixir",label:"Elixir"},r.createElement(s.Z,{language:"elixir"},m)),k&&r.createElement(o.Z,{value:"cli",label:"CLI"},r.createElement(s.Z,{language:"cli"},k))):null}},7737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),s=(n(3404),n(9720));const r={sidebar_position:7,title:"Auth API reference information",sidebar_label:"Auth",description:"Learn the Auth API calls you need to know about and how to use them with Momento services."},l="Auth API reference",i={unversionedId:"develop/api-reference/auth-tokens",id:"develop/api-reference/auth-tokens",title:"Auth API reference information",description:"Learn the Auth API calls you need to know about and how to use them with Momento services.",source:"@site/docs/develop/api-reference/auth-tokens.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/auth-tokens",permalink:"/ja/develop/api-reference/auth-tokens",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/auth-tokens.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Auth API reference information",sidebar_label:"Auth",description:"Learn the Auth API calls you need to know about and how to use them with Momento services."},sidebar:"tutorialSidebar",previous:{title:"Topics (Pub/Sub)",permalink:"/ja/develop/api-reference/topics"},next:{title:"CollectionTTL object",permalink:"/ja/develop/api-reference/collections/collectionttl"}},c={},p=[{value:"GenerateAuthToken API",id:"generateauthtoken-api",level:2},{value:"RefreshAuthToken API",id:"refreshauthtoken-api",level:2},{value:"TokenScope objects",id:"tokenscope-objects",level:2},{value:"Permission objects",id:"permission-objects",level:2},{value:"CachePermission",id:"cachepermission",level:3},{value:"TokenScope example for a CachePermission object",id:"tokenscope-example-for-a-cachepermission-object",level:4},{value:"TopicPermission",id:"topicpermission",level:3},{value:"TokenScope example for a TopicPermission object",id:"tokenscope-example-for-a-topicpermission-object",level:4},{value:"FAQ",id:"faq",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"auth-api-reference"},"Auth API reference"),(0,o.kt)("img",{src:"/img/access-tokens.jpg",width:"90%",alt:"a technical illustration of a bank vault representing security, authorization, and authentication."}),(0,o.kt)("p",null,"The auth APIs create and manage authorization tokens for Momento services, known as ",(0,o.kt)("em",{parentName:"p"},"Momento auth tokens"),". Tokens can be scoped to have one or more permissions to grant access to one or more caches or topics."),(0,o.kt)("img",{src:"/img/momento-auth-tokens.png",width:"60%"}),(0,o.kt)("h2",{id:"generateauthtoken-api"},"GenerateAuthToken API"),(0,o.kt)("p",null,"Generates a new Momento auth token with the specified permissions and expiry."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scope"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#tokenscope"},"TokenScope")),(0,o.kt)("td",{parentName:"tr",align:null},"The permissions to grant to the new token. Pre-built TokenScope objects are provided by the SDKs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,o.kt)("td",{parentName:"tr",align:null},"Number ","|"," ExpiresIn object"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of seconds until the token expires or an ExpiresIn object representing a duration by calling the ",(0,o.kt)("inlineCode",{parentName:"td"},"ExpiresIn.never()"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"ExpiresIn.minutes()"),", or ",(0,o.kt)("inlineCode",{parentName:"td"},"ExpiresIn.hours()")," methods.")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Method response object"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Success",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"authToken"),": string - the new auth token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"refreshToken"),": string - a refresh token that can be used with the ",(0,o.kt)("a",{parentName:"li",href:"#refreshauthtoken"},"RefreshAuthToken API")," to refresh a token before it expires"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expiresAt"),": Timestamp - the timestamp at which the token will expire"))),(0,o.kt)("li",{parentName:"ul"},"Error")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./response-objects"},"response objects")," for specific information.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Tokens to access the Momento control plane APIs can only be generated using the ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento console"),".")),(0,o.kt)(s.X,{js:"// Generate a token that allows all data plane APIs on all caches and topics.\nconst allDataRWTokenResponse = await authClient.generateAuthToken(AllDataReadWrite, ExpiresIn.minutes(30));\nif (allDataRWTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with AllDataReadWrite scope!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${allDataRWTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${allDataRWTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${allDataRWTokenResponse.expiresAt.epoch()}`);\n} else if (allDataRWTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with AllDataReadWrite scope: ${allDataRWTokenResponse.errorCode()}: ${allDataRWTokenResponse.toString()}`\n  );\n}\n\n// Generate a token that can only call read-only data plane APIs on a specific cache foo. No topic apis (publish/subscribe) are allowed.\nconst singleCacheROTokenResponse = await authClient.generateAuthToken(\n  TokenScopes.cacheReadOnly('foo'),\n  ExpiresIn.minutes(30)\n);\nif (singleCacheROTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with read-only access to cache foo!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${singleCacheROTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${singleCacheROTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${singleCacheROTokenResponse.expiresAt.epoch()}`);\n} else if (singleCacheROTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with single cache read-only scope: ${singleCacheROTokenResponse.errorCode()}: ${singleCacheROTokenResponse.toString()}`\n  );\n}\n\n// Generate a token that can call all data plane APIs on all caches. No topic apis (publish/subscribe) are allowed.\nconst allCachesRWTokenResponse = await authClient.generateAuthToken(\n  TokenScopes.cacheReadWrite(AllCaches),\n  ExpiresIn.minutes(30)\n);\nif (allCachesRWTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with read-write access to all caches!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${allCachesRWTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${allCachesRWTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${allCachesRWTokenResponse.expiresAt.epoch()}`);\n} else if (allCachesRWTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with all caches read-write scope: ${allCachesRWTokenResponse.errorCode()}: ${allCachesRWTokenResponse.toString()}`\n  );\n}\n\n// Generate a token that can call publish and subscribe on all topics within cache bar\nconst singleCacheAllTopicsRWTokenResponse = await authClient.generateAuthToken(\n  TokenScopes.topicPublishSubscribe({name: 'bar'}, AllTopics),\n  ExpiresIn.minutes(30)\n);\nif (singleCacheAllTopicsRWTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with publish-subscribe access to all topics within cache bar!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${singleCacheAllTopicsRWTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${singleCacheAllTopicsRWTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${singleCacheAllTopicsRWTokenResponse.expiresAt.epoch()}`);\n} else if (singleCacheAllTopicsRWTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with read-write scope for all topics in a single cache: ${singleCacheAllTopicsRWTokenResponse.errorCode()}: ${singleCacheAllTopicsRWTokenResponse.toString()}`\n  );\n}\n\n// Generate a token that can only call subscribe on topic where_is_mo within cache mo_nuts\nconst oneCacheOneTopicRWTokenResponse = await authClient.generateAuthToken(\n  TokenScopes.topicSubscribeOnly('mo_nuts', 'where_is_mo'),\n  ExpiresIn.minutes(30)\n);\nif (oneCacheOneTopicRWTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with subscribe-only access to topic where_is_mo within cache mo_nuts!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${oneCacheOneTopicRWTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${oneCacheOneTopicRWTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${oneCacheOneTopicRWTokenResponse.expiresAt.epoch()}`);\n} else if (oneCacheOneTopicRWTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with read-write scope for single topic in a single cache: ${oneCacheOneTopicRWTokenResponse.errorCode()}: ${oneCacheOneTopicRWTokenResponse.toString()}`\n  );\n}\n\n// Generate a token with multiple permissions\nconst cachePermission1 = {\n  role: CacheRole.ReadWrite, // Managed role that grants access to read as well as write apis on caches\n  cache: 'acorns', // Scopes the access to a single cache named 'acorns'\n};\nconst cachePermission2 = {\n  role: CacheRole.ReadOnly, // Managed role that grants access to only read data apis on caches\n  cache: AllCaches, // Built-in value for access to all caches in the account\n};\nconst topicPermission1 = {\n  role: TopicRole.PublishSubscribe, // Managed role that grants access to subscribe as well as publish apis\n  cache: 'walnuts', // Scopes the access to a single cache named 'walnuts'\n  topic: 'mo_favorites', // Scopes the access to a single topic named 'mo_favorites' within cache 'walnuts'\n};\nconst topicPermission2 = {\n  role: TopicRole.SubscribeOnly, // Managed role that grants access to only subscribe api\n  cache: AllCaches, // Built-in value for all cache(s) in the account.\n  topic: AllTopics, // Built-in value for access to all topics in the listed cache(s).\n};\n\nconst permissions = {\n  permissions: [cachePermission1, cachePermission2, topicPermission1, topicPermission2],\n};\n\nconst multiplePermsTokenResponse = await authClient.generateAuthToken(permissions, ExpiresIn.minutes(30));\nif (multiplePermsTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with multiple cache and topic permissions!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${multiplePermsTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${multiplePermsTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${multiplePermsTokenResponse.expiresAt.epoch()}`);\n} else if (multiplePermsTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with multiple permissions: ${multiplePermsTokenResponse.errorCode()}: ${multiplePermsTokenResponse.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("h2",{id:"refreshauthtoken-api"},"RefreshAuthToken API"),(0,o.kt)("p",null,"Refreshes an existing, unexpired Momento auth token.  Produces a new auth token with the same permissions and expiry duration as the original auth token."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"refreshToken"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"The refreshToken for the current auth token, acquired from the original call to ",(0,o.kt)("inlineCode",{parentName:"td"},"GenerateAuthToken"),".")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Method response object"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Success",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"authToken"),": string - the new auth token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"refreshToken"),": string - a refresh token that can be used with the ",(0,o.kt)("a",{parentName:"li",href:"#refreshauthtoken"},"RefreshAuthToken API")," to refresh the token before it expires"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expiresAt"),": Timestamp - the timestamp at which the token will expire"))),(0,o.kt)("li",{parentName:"ul"},"Error")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./response-objects"},"response objects")," for specific information.")),(0,o.kt)(s.X,{js:"const generateTokenResponse = await authClient.generateAuthToken(AllDataReadWrite, ExpiresIn.minutes(30));\nif (generateTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated auth token; refreshing!');\n  const refreshAuthClient = new AuthClient({\n    credentialProvider: CredentialProvider.fromString({authToken: generateTokenResponse.authToken}),\n  });\n  const refreshTokenResponse = await refreshAuthClient.refreshAuthToken(generateTokenResponse.refreshToken);\n  if (refreshTokenResponse instanceof RefreshAuthToken.Success) {\n    console.log('Auth token refreshed!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`Refreshed auth token starts with: ${refreshTokenResponse.authToken.substring(0, 10)}`);\n    console.log(`New refresh token starts with: ${refreshTokenResponse.refreshToken.substring(0, 10)}`);\n    console.log(`Refreshed auth token expires At: ${refreshTokenResponse.expiresAt.epoch()}`);\n  }\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("h2",{id:"tokenscope-objects"},"TokenScope objects"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"permissions"),(0,o.kt)("td",{parentName:"tr",align:null},"List <",(0,o.kt)("a",{parentName:"td",href:"#permission-objects"},"Permission"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"The permissions to grant to the new token.")))),(0,o.kt)("p",null,"A TokenScope is an list of ",(0,o.kt)("a",{parentName:"p",href:"#permission-objects"},"permission objects"),". The list can have permissions that are of type ",(0,o.kt)("a",{parentName:"p",href:"#cachepermission"},"CachePermission")," or ",(0,o.kt)("a",{parentName:"p",href:"#topicpermission"},"TopicPermission"),", and can contain ",(0,o.kt)("a",{parentName:"p",href:"../../manage/limits"},"up to ten")," permission objects. A permission only grants access to the Momento data plane APIs (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"set"),", etc.). When an auth token is created with multiple permission objects, any matching permission will grant access. For example, if a single token is created with two permission objects:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A permission object that allows ReadWrite access to all caches for the account "),(0,o.kt)("li",{parentName:"ol"},"A permission object that allows ReadOnly access to cache ",(0,o.kt)("inlineCode",{parentName:"li"},"foo"))),(0,o.kt)("p",null,"In this case, the token will still allow use of data manipulation APIs (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"set"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DictionarySetFields"),", etc.) on cache ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," because of the first permission."),(0,o.kt)("h2",{id:"permission-objects"},"Permission objects"),(0,o.kt)("p",null,"These objects define the specific role with cache or topic information and are then assigned to a ",(0,o.kt)("a",{parentName:"p",href:"#tokenscope"},"TokenScope"),". "),(0,o.kt)("h3",{id:"cachepermission"},"CachePermission"),(0,o.kt)("p",null,"A component of a ",(0,o.kt)("a",{parentName:"p",href:"#tokenscope"},"TokenScope")," object that defines permissions for a cache."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"role"),(0,o.kt)("td",{parentName:"tr",align:null},"ReadOnly ","|"," ReadWrite"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of access granted by the permission.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cache"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AllCaches")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"CacheName")),(0,o.kt)("td",{parentName:"tr",align:null},"A permission can be restricted to a select cache by name using a ",(0,o.kt)("inlineCode",{parentName:"td"},"CacheName")," object or ",(0,o.kt)("inlineCode",{parentName:"td"},"AllCaches")," built-in value.")))),(0,o.kt)("p",null,"For role, using ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheRole.ReadOnly")," allows access to all read data plane APIs on caches (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DictionaryGetField"),", etc.) defined in the CacheSelector. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheRole.ReadWrite")," allows access for all read and write data plane APIs on the caches defined in the CacheSelector. Custom roles are not supported."),(0,o.kt)("p",null,"For cache, the value can be the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"AllCaches")," or a string value containing the name of the cache this permission is for."),(0,o.kt)("h4",{id:"tokenscope-example-for-a-cachepermission-object"},"TokenScope example for a CachePermission object"),(0,o.kt)("p",null,"This is an example of creating a TokenScope with just CachePermissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const CachePermissions = {\n    permissions: [\n        {\n            role: CacheRole.ReadWrite, // Managed role\n            cache: "MyCache" // grants access to a specific cache\n        },\n        {\n            role: CacheRole.ReadOnly, // Managed role\n            cache: AllCaches // Built-in value for access to all caches in the account.\n        },\n    ],\n};\n')),(0,o.kt)("h3",{id:"topicpermission"},"TopicPermission"),(0,o.kt)("p",null,"A component of a ",(0,o.kt)("a",{parentName:"p",href:"#tokenscope"},"TokenScope")," object that defines permissions for a token."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"role"),(0,o.kt)("td",{parentName:"tr",align:null},"SubscribeOnly ","|"," PublishSubscribe"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of access granted by the permission.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cache"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AllCaches")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"CacheName")),(0,o.kt)("td",{parentName:"tr",align:null},"A permission can be restricted to a select cache by name using a ",(0,o.kt)("inlineCode",{parentName:"td"},"CacheName")," object or to all caches in the account by using the ",(0,o.kt)("inlineCode",{parentName:"td"},"AllCaches")," built-in value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"topic"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AllTopics")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"TopicName")),(0,o.kt)("td",{parentName:"tr",align:null},"A permission can be restricted to a select topic by name using a ",(0,o.kt)("inlineCode",{parentName:"td"},"TopicName")," object or to all topics in the above cache(s) by using the ",(0,o.kt)("inlineCode",{parentName:"td"},"AllTopics")," built-in value.")))),(0,o.kt)("p",null,"For role, there are two managed roles to assign, ",(0,o.kt)("inlineCode",{parentName:"p"},"TopicRole.PublishSubscribe")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TopicRole.SubscribeOnly"),". Custom roles are not supported. Using the SubscribeOnly role allows only subscribing to topics, whereas using the PublishSubscribe role allows publishing and subscribing to topics."),(0,o.kt)("p",null,"For cache, only topics within that cache's namespace are allowed by the permission. This can be set to the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"AllCaches")," value or a string specifically naming a cache."),(0,o.kt)("p",null,"For topic, this can be set to the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"AllTopics")," value, which gives access to all topics in the cache(s) defined in cache or it can be a string with a specific topic name."),(0,o.kt)("h4",{id:"tokenscope-example-for-a-topicpermission-object"},"TokenScope example for a TopicPermission object"),(0,o.kt)("p",null,"This is an example of creating a TokenScope with just TopicPermissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const TopicsPermissions = {\n    permissions: [\n      {\n        role: TopicRole.PublishSubscribe, // Managed role\n        cache: 'the-great-wall', // grants access to a specific cache\n        topic: 'highlights', // grants access to a specific topic\n      },\n      {\n        role: TopicRole.SubscribeOnly, // Managed role\n        cache: AllCaches, // This is a built-in value for access to all caches in the account\n        topic: AllTopics, // This is a built-in value for access to all topic in the listed cache(s).\n      },\n    ],\n};\n")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Can I create a custom role for a cache or topic permission?"),(0,o.kt)("p",null,"No. We only support the managed roles listed above for each permission.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Do these tokens control access to the Momento control plane APIs?"),(0,o.kt)("p",null,"Access tokens generated with the ",(0,o.kt)("a",{parentName:"p",href:"#generateauthtoken"},"GenerateAuthToken")," API only control access to the Momento data plane APIs. A token for access to Momento's control plane APIs must be generated using the ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento console"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Can I have write only or publish only permissions?"),(0,o.kt)("p",null,"We do not support 'write only' or 'publish only' permissions. If this is something you need, please ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"contact us")," and let's discuss your needs.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you have any questions not answered here, please jump on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/2c24SK6W"},"our Discord server")," and ask our experts in the support channel.")))}h.isMDXComponent=!0}}]);