"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6586],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),s=n(6550),i=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=h({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var b=n(2389);const g="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(p(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(E,(0,r.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>s});var r=n(4866),a=n(5162),o=n(814),l=n(7294);const s=e=>{let{js:t,python:n,java:s,go:i,csharp:c,php:u,rust:p,ruby:d,elixir:m,cli:h}=e;return t||n||s||i||c||u||p||d||m||h?l.createElement(r.Z,null,t&&l.createElement(a.Z,{value:"js",label:"JavaScript"},l.createElement(o.Z,{language:"js"},t)),n&&l.createElement(a.Z,{value:"python",label:"Python"},l.createElement(o.Z,{language:"python"},n)),s&&l.createElement(a.Z,{value:"java",label:"Java"},l.createElement(o.Z,{language:"java"},s)),i&&l.createElement(a.Z,{value:"go",label:"Go"},l.createElement(o.Z,{language:"go"},i)),c&&l.createElement(a.Z,{value:"csharp",label:"C#"},l.createElement(o.Z,{language:"csharp"},c)),u&&l.createElement(a.Z,{value:"php",label:"PHP"},l.createElement(o.Z,{language:"php"},u)),p&&l.createElement(a.Z,{value:"rust",label:"Rust"},l.createElement(o.Z,{language:"rust"},p)),d&&l.createElement(a.Z,{value:"ruby",label:"Ruby"},l.createElement(o.Z,{language:"ruby"},d)),m&&l.createElement(a.Z,{value:"elixir",label:"Elixir"},l.createElement(o.Z,{language:"elixir"},m)),h&&l.createElement(a.Z,{value:"cli",label:"CLI"},l.createElement(o.Z,{language:"cli"},h))):null}},4636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=(n(3404),n(9720));const l={sidebar_position:3,sidebar_label:"SDK \u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",sidebar_class_name:"sidebar-item-api-reference",title:"SDK \u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",description:"Momento SDK \u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",pagination_next:null},s="SDK \u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",i={unversionedId:"develop/basics/error-handling-production-readiness",id:"develop/basics/error-handling-production-readiness",title:"SDK \u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",description:"Momento SDK \u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/basics/03-error-handling-production-readiness.md",sourceDirName:"develop/basics",slug:"/develop/basics/error-handling-production-readiness",permalink:"/ja/develop/basics/error-handling-production-readiness",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/basics/03-error-handling-production-readiness.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"SDK \u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",sidebar_class_name:"sidebar-item-api-reference",title:"SDK \u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",description:"Momento SDK \u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"SDK Configuration Objects",permalink:"/ja/develop/basics/client-configuration-objects"}},c={},u=[],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sdk-\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},"SDK \u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),(0,a.kt)("img",{src:"/img/error-handling.jpg",width:"90%",alt:"a technical illustration of Momento client configuration objects."}),(0,a.kt)("p",null,"\u5404 SDK \u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u306e\u500b\u5225\u306e\u30da\u30fc\u30b8\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u5de6\u306e\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u304b\u3089 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u958b\u767a")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"SDKs"),' \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u898b\u3089\u308c\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u30da\u30fc\u30b8\u3067\u3001"\u30b3\u30fc\u30c9\u3092\u672c\u756a\u74b0\u5883\u3078\u6301\u3063\u3066\u3044\u304f"\u3068\u3044\u3046\u30ea\u30f3\u30af\u304b\u3089\u3001\u305d\u306e\u8a00\u8a9e\u306b\u5fdc\u3058\u305f\u672c\u756a\u74b0\u5883\u3078\u306e\u6e96\u5099\u306e\u305f\u3081\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002'),(0,a.kt)("p",null,"\u5168\u3066\u306e SDK \u306b\u9069\u5fdc\u3067\u304d\u308b Momento \u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u4e00\u822c\u7684\u306a\u6ce8\u610f\u66f8\u304d\u304c\u3053\u3061\u3089\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CacheClient")," \u306e\u30e1\u30bd\u30c3\u30c9 (\u4f8b: Get\u3001Set\u3001Increment) \u3092\u547c\u3073\u51fa\u3059\u6642\u306b\u8d77\u3053\u308b\u30a8\u30e9\u30fc\u306f\u3001\u4f8b\u5916\u3092\u6295\u3052\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u547c\u51fa\u3057\u306e\u8fd4\u308a\u5024\u3068\u3057\u3066\u958b\u767a\u8005\u306b\u306f\u898b\u3048\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3044\u308b\u6642\u306b\u30a8\u30e9\u30fc\u3092\u3082\u3063\u3068\u898b\u3048\u3084\u3059\u304f\u3057\u3066\u304f\u308c\u3001IDE \u304c\u5bfe\u5fdc\u3059\u3079\u304d\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3057\u3066\u3044\u308b\u304b\u3092\u4fdd\u8a3c\u3059\u308b\u306e\u3092\u624b\u52a9\u3051\u3057\u3066\u304f\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u95a2\u3059\u308b\u79c1\u305f\u3061\u306e\u54f2\u5b66\u306b\u3064\u3044\u3066\u306f\u3001\u306a\u305c",(0,a.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/exceptions-are-bugs"},"\u4f8b\u5916\u306f\u30d0\u30b0"),"\u306a\u306e\u304b\u306e\u30d6\u30ed\u30b0\u6295\u7a3f\u3092\u3054\u89a7\u9802\u304d\u3001\u79c1\u305f\u3061\u306b\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u4e0b\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u3053\u308c\u306f\u5b9f\u884c\u6642\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u306a\u3044\u3053\u3068\u3092\u4fdd\u8a3c\u3059\u308b\u306e\u306b\u3082\u5f79\u7acb\u3061\u307e\u3059\u3002Momento \u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u3001\u901a\u5e38\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5229\u7528\u3067\u304d\u306a\u3044\u3068\u304d\u306b\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3067\u304d\u308b\u4fe1\u983c\u3067\u304d\u308b\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u5f93\u3063\u3066\u3001Momento SDK \u306f\u4f8b\u5916\u3092\u6295\u3052\u306a\u3044\u69d8\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u3066\u3001\u3082\u3057 try/catch \u30d6\u30ed\u30c3\u30af\u3092\u5fd8\u308c\u305f\u3068\u3057\u3066\u3082\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u4ee3\u308f\u308a\u306b\u3001Momento \u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u30f3\u30b0\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u305f ",(0,a.kt)("inlineCode",{parentName:"p"},"Hit"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Miss"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),' \u7b49\u306e\u5b50\u30bf\u30a4\u30d7\u3092\u6301\u3063\u305f\u89aa\u30af\u30e9\u30b9\u304b\u3089\u62e1\u5f35\u3055\u308c\u3066\u3044\u307e\u3059\u3002(\u3044\u304f\u3064\u304b\u306e\u8a00\u8a9e\u3067\u306f\u3001\u3053\u306e\u6982\u5ff5\u306f"\u30b7\u30fc\u30eb\u30af\u30e9\u30b9"\u3068\u547c\u3070\u308c\u305f\u308a\u3001\u4ed6\u306b\u3082"\u4ee3\u6570\u30c7\u30fc\u30bf\u578b"\u3068\u547c\u3070\u308c\u307e\u3059\u3002\u30dd\u30ea\u30e2\u30fc\u30d5\u30a3\u30ba\u30e0\u306e\u4e00\u7a2e\u306b\u306a\u308a\u307e\u3059\u3002) \u7686\u3055\u3093\u306e\u30b3\u30fc\u30c9\u306f\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u304c ',(0,a.kt)("inlineCode",{parentName:"p"},"Hit"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Miss"),"\u3001\u307e\u305f\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," \u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066\u5206\u5c90\u3057\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u53d6\u308b\u3053\u3068\u3067\u3001\u4f55\u304c\u8d77\u3053\u3063\u305f\u304b\u306e\u3088\u308a\u8a73\u3057\u3044\u60c5\u5831\u3092\u578b\u5b89\u5168\u306b\u53d6\u5f97\u3067\u304d\u307e\u3059 (\u4f8b\u3048\u3070 ",(0,a.kt)("inlineCode",{parentName:"p"},"errorCode")," \u3068\u3044\u3046\u30d7\u30ed\u30d1\u30c6\u30a3\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"Hit")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002)"),(0,a.kt)("p",null,"\u3053\u3061\u3089\u304c\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Hit"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Miss"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," \u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u3055\u305b\u308b\u65b9\u6cd5\u306e\u4f8b\u3067\u3059:"),(0,a.kt)(o.X,{js:"const result = await cacheClient.get('test-cache', 'test-key');\nif (result instanceof CacheGet.Hit) {\n  console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n} else if (result instanceof CacheGet.Miss) {\n  console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheGet.Error) {\n  throw new Error(\n    `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"final GetResponse response = cacheClient.get(\"test-cache\", \"test-key\").join();\nif (response instanceof GetResponse.Hit hit) {\n  System.out.println(\"Retrieved value for key 'test-key': \" + hit.valueString());\n} else if (response instanceof GetResponse.Miss) {\n  System.out.println(\"Key 'test-key' was not found in cache 'test-cache'\");\n} else if (response instanceof GetResponse.Error error) {\n  throw new RuntimeException(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': \"\n          + error.getErrorCode(),\n      error);\n}",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"case Momento.CacheClient.get(client, \"test-cache\", \"test-key\") do\n  {:ok, hit} ->\n    IO.puts(\"Retrieved value for key 'test-key': #{hit.value}\")\n\n  :miss ->\n    IO.puts(\"Key 'test-key' was not found in cache 'test-cache'\")\n\n  {:error, error} ->\n    IO.puts(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': #{error.error_code}\"\n    )\n\n    raise error\nend",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"\u3044\u304f\u3064\u304b\u306e API\u3001\u4f8b\u3048\u3070\u66f8\u8fbc\u307f API (\u4f8b: Set\u3001Delete)\u306f\u3001(",(0,a.kt)("inlineCode",{parentName:"p"},"Hit"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Miss")," \u306f\u306a\u304f) ",(0,a.kt)("inlineCode",{parentName:"p"},"Success")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," \u30ec\u30b9\u30dd\u30f3\u30b9\u3057\u304b\u6301\u3063\u3066\u3044\u307e\u305b\u3093\u3002\u3053\u308c\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u51e6\u7406\u3059\u308b\u4f8b\u306f\u3053\u3061\u3089\u3067\u3059:"),(0,a.kt)(o.X,{js:"const result = await cacheClient.set('test-cache', 'test-key', 'test-value');\nif (result instanceof CacheSet.Success) {\n  console.log(\"Key 'test-key' stored successfully\");\n} else if (result instanceof CacheSet.Error) {\n  throw new Error(\n    `An error occurred while attempting to store key 'test-key' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:'final SetResponse response = cacheClient.set("test-cache", "test-key", "test-value").join();\nif (response instanceof SetResponse.Success) {\n  System.out.println("Key \'test-key\' stored successfully");\n} else if (response instanceof SetResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': "\n          + error.getErrorCode(),\n      error);\n}',go:"",csharp:"",php:"",rust:"",ruby:"",elixir:'case Momento.CacheClient.set(client, "test-cache", "test-key", "test-value") do\n  {:ok, _} ->\n    IO.puts("Key \'test-key\' stored successfully")\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"\u5168\u3066\u306e\u5834\u5408\u3067\u3001IDE \u306f\u5404 API \u3067\u3069\u3093\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u578b\u304c\u5229\u7528\u53ef\u80fd\u304b\u3001\u5404\u30ec\u30b9\u30dd\u30f3\u30b9\u578b\u3067\u3069\u3093\u306a\u30d7\u30ed\u30d1\u30c6\u30a3/\u30e1\u30bd\u30c3\u30c9\u304c\u5229\u7528\u53ef\u80fd\u304b\u306e\u30d2\u30f3\u30c8\u3092\u4e0e\u3048\u3066\u304f\u308c\u308b\u3067\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u30a8\u30e9\u30fc\u30fb\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u4ed5\u7d44\u307f\u3068\u4f7f\u3044\u65b9\u306e\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001\u3053\u3061\u3089\u306e\u30d3\u30c7\u30aa\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff1a"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h9FiNCxlZso",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}d.isMDXComponent=!0}}]);