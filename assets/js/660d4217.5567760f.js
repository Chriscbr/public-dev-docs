"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6332],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),l=a(7294),r=a(6010),s=a(2466),i=a(6550),o=a(1980),c=a(7392),m=a(12);function u(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function p(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,c]=h({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,m.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),N=(()=>{const e=o??u;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{N&&i(N)}),[N]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var N=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=m.indexOf(t),n=c[a].value;n!==i&&(u(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:p},s,{className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(b,(0,n.Z)({},e,t)))}function y(e){const t=(0,N.Z)();return l.createElement(v,(0,n.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>i});var n=a(4866),l=a(5162),r=a(614),s=a(7294);const i=e=>{let{js:t,python:a,java:i,go:o,csharp:c,php:m,rust:u,ruby:p,elixir:d,swift:h,cli:k}=e;return t||a||i||o||c||m||u||p||d||h||k?s.createElement(n.Z,null,t&&s.createElement(l.Z,{value:"js",label:"JavaScript"},s.createElement(r.Z,{language:"js"},t)),a&&s.createElement(l.Z,{value:"python",label:"Python"},s.createElement(r.Z,{language:"python"},a)),i&&s.createElement(l.Z,{value:"java",label:"Java"},s.createElement(r.Z,{language:"java"},i)),o&&s.createElement(l.Z,{value:"go",label:"Go"},s.createElement(r.Z,{language:"go"},o)),c&&s.createElement(l.Z,{value:"csharp",label:"C#"},s.createElement(r.Z,{language:"csharp"},c)),m&&s.createElement(l.Z,{value:"php",label:"PHP"},s.createElement(r.Z,{language:"php"},m)),u&&s.createElement(l.Z,{value:"rust",label:"Rust"},s.createElement(r.Z,{language:"rust"},u)),p&&s.createElement(l.Z,{value:"ruby",label:"Ruby"},s.createElement(r.Z,{language:"ruby"},p)),d&&s.createElement(l.Z,{value:"elixir",label:"Elixir"},s.createElement(r.Z,{language:"elixir"},d)),h&&s.createElement(l.Z,{value:"swift",label:"Swift"},s.createElement(r.Z,{language:"swift"},h)),k&&s.createElement(l.Z,{value:"cli",label:"CLI"},s.createElement(r.Z,{language:"cli"},k))):null}},4510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),r=(a(3404),a(9720));const s={sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache."},i="Set API reference for Momento Cache",o={unversionedId:"cache/develop/api-reference/set-collections",id:"cache/develop/api-reference/set-collections",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache.",source:"@site/docs/cache/develop/api-reference/set-collections.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/set-collections",permalink:"/cache/develop/api-reference/set-collections",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/set-collections.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache."},sidebar:"tutorialSidebar",previous:{title:"Lists",permalink:"/cache/develop/api-reference/list-collections"},next:{title:"Sorted sets",permalink:"/cache/develop/api-reference/sorted-set-collections"}},c={},m=[{value:"Set methods",id:"set-methods",level:2},{value:"SetAddElement",id:"setaddelement",level:3},{value:"SetAddElements",id:"setaddelements",level:3},{value:"SetFetch",id:"setfetch",level:3},{value:"SetRemoveElement",id:"setremoveelement",level:3},{value:"SetRemoveElements",id:"setremoveelements",level:3},{value:"SetContainsElement",id:"setcontainselement",level:3},{value:"SetContainsElements",id:"setcontainselements",level:3},{value:"SetLength",id:"setlength",level:3}],u={toc:m},p="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"set-api-reference-for-momento-cache"},"Set API reference for Momento Cache"),(0,l.kt)("p",null,"A set is a collection of elements, but each element can appear only once and order is not guaranteed."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Momento collection types use a ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL"),' to specify their TTL behavior. This is an optional argument for all "write" operations.')),(0,l.kt)("p",null,"Example: if your set contains ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]")," and you add 2, the set remains ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3].")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/basics/datatypes#set-collections"},"Sets")," for more information on their usage."),(0,l.kt)("h2",{id:"set-methods"},"Set methods"),(0,l.kt)("h3",{id:"setaddelement"},"SetAddElement"),(0,l.kt)("p",null,"Adds an element to a set. If the set item does not already exist, this method will create one."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"element"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Element to be added by this operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"const result = await cacheClient.setAddElement('test-cache', 'test-set', 'test-element');\nif (result instanceof CacheSetAddElement.Success) {\n  console.log(\"Element added successfully to set 'test-set'\");\n} else if (result instanceof CacheSetAddElement.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetAddElement on set 'test-set' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"setaddelements"},"SetAddElements"),(0,l.kt)("p",null,"Adds multiple elements to a set item. If the set item does not already exist, this method will create one."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elements"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Elements to be added by this operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"const result = await cacheClient.setAddElements('test-cache', 'test-set', ['test-element1', 'test-element2']);\nif (result instanceof CacheSetAddElements.Success) {\n  console.log(\"Elements added successfully to set 'test-set'\");\n} else if (result instanceof CacheSetAddElements.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetAddElements on set 'test-set' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"setfetch"},"SetFetch"),(0,l.kt)("p",null,"Gets a set item from a cache."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the set item to be retrieved.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"The response object for SetFetch returns three possible options, a cache hit, miss, or an error."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"valueSetBytes(): Bytes[]"),(0,l.kt)("li",{parentName:"ul"},"valueSetString(): String[]"),(0,l.kt)("li",{parentName:"ul"},"toString(): String"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.setAddElements('test-cache', 'test-set', ['test-element1', 'test-element2']);\nconst result = await cacheClient.setFetch('test-cache', 'test-set');\nif (result instanceof CacheSetFetch.Hit) {\n  console.log('Set fetched successfully- ');\n  result.valueSet().forEach((value, key) => {\n    console.log(`${key} : ${value}`);\n  });\n} else if (result instanceof CacheSetFetch.Miss) {\n  console.log(\"Set 'test-set' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheSetFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetFetch on set 'test-set' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"setremoveelement"},"SetRemoveElement"),(0,l.kt)("p",null,"Removes a single element from an existing set item. If the set is emptied as a result, the item is deleted."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"element"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Element to be removed by this operation.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.setAddElement('test-cache', 'test-set', 'test-element');\nconst result = await cacheClient.setRemoveElement('test-cache', 'test-set', 'test-element');\nif (result instanceof CacheSetRemoveElement.Success) {\n  console.log(\"Element 'test-element' removed successfully from set 'test-set'\");\n} else if (result instanceof CacheSetRemoveElement.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetRemoveElement on set 'test-set' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"setremoveelements"},"SetRemoveElements"),(0,l.kt)("p",null,"Removes multiple elements from an existing set item. If the set is emptied as a result, the item is deleted."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"element"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Elements to be removed by this operation.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.setAddElements('test-cache', 'test-set', ['test-element1', 'test-element2']);\nconst result = await cacheClient.setRemoveElements('test-cache', 'test-set', ['test-element1', 'test-element2']);\nif (result instanceof CacheSetRemoveElements.Success) {\n  console.log(\"Elements 'test-element1' and 'test-element2' removed successfully from set 'test-set'\");\n} else if (result instanceof CacheSetRemoveElements.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetRemoveElements on set 'test-set' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"setcontainselement"},"SetContainsElement"),(0,l.kt)("p",null,"Checks if a provided element is in the given set."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"element"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the element to check existence of.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"The response object for SetContainsElement returns three possible options, a cache hit, miss, or an error."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"containsElement(): bool"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"setcontainselements"},"SetContainsElements"),(0,l.kt)("p",null,"Checks if provided elements are in the given set."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elements"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of element names to check existence of.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"The response object for SetContainsElements returns three possible options, a cache hit, miss, or an error."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"containsElements(): bool[]"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"setlength"},"SetLength"),(0,l.kt)("p",null,"Get the length of an existing set item"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item to be checked.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}d.isMDXComponent=!0}}]);