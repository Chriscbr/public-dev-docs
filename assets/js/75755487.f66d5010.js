"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9942],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=d({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=s??p;return b({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var f=a(2389);const g="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:m},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>i});var n=a(4866),r=a(5162),l=a(814),o=a(7294);const i=e=>{let{js:t,python:a,java:i,go:s,csharp:u,php:c,rust:p,ruby:m,cli:b}=e;return t||a||i||s||u||c||p||m||b?o.createElement(n.Z,null,t&&o.createElement(r.Z,{value:"js",label:"JavaScript"},o.createElement(l.Z,{language:"js"},t)),a&&o.createElement(r.Z,{value:"python",label:"Python"},o.createElement(l.Z,{language:"python"},a)),i&&o.createElement(r.Z,{value:"java",label:"Java"},o.createElement(l.Z,{language:"java"},i)),s&&o.createElement(r.Z,{value:"go",label:"Go"},o.createElement(l.Z,{language:"go"},s)),u&&o.createElement(r.Z,{value:"csharp",label:"C#"},o.createElement(l.Z,{language:"csharp"},u)),c&&o.createElement(r.Z,{value:"php",label:"PHP"},o.createElement(l.Z,{language:"php"},c)),p&&o.createElement(r.Z,{value:"rust",label:"Rust"},o.createElement(l.Z,{language:"rust"},p)),m&&o.createElement(r.Z,{value:"ruby",label:"Ruby"},o.createElement(l.Z,{language:"ruby"},m)),b&&o.createElement(r.Z,{value:"cli",label:"CLI"},o.createElement(l.Z,{language:"cli"},b))):null}},4871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=(a(3404),a(9720));const o={sidebar_position:4,sidebar_label:"Topics (Pub/Sub)",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API.",slug:"/develop/api-reference/topics"},i="Using the Momento Topics (pub/sub) API with Momento Cache",s={unversionedId:"develop/api-reference/topics",id:"develop/api-reference/topics",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API.",source:"@site/docs/develop/api-reference/topics.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/topics",permalink:"/develop/api-reference/topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/topics.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Topics (Pub/Sub)",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API.",slug:"/develop/api-reference/topics"},sidebar:"tutorialSidebar",previous:{title:"Sorted sets",permalink:"/develop/api-reference/collections/sortedsets"},next:{title:"CollectionTTL object",permalink:"/develop/api-reference/collections/collectionttl"}},u={},c=[{value:"Topics methods",id:"topics-methods",level:2},{value:"Subscribe",id:"subscribe",level:3},{value:"Publish",id:"publish",level:3},{value:"TopicClient",id:"topicclient",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("Tabs"),b=p("TabItem"),d={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-momento-topics-pubsub-api-with-momento-cache"},"Using the Momento Topics (pub/sub) API with Momento Cache"),(0,r.kt)("p",null,"Momento Topics is a messaging pattern that allows for real-time communication between parts of a distributed application. It enables you to publish (produce) values to a topic, as well as subscribe (consume) from a topic. This page details the Momento API methods for interacting with Momento Topics."),(0,r.kt)("p",null,"For in-depth information, see ",(0,r.kt)("a",{parentName:"p",href:"/introduction/momento-topics"},"Momento Topics"),"."),(0,r.kt)("h2",{id:"topics-methods"},"Topics methods"),(0,r.kt)("h3",{id:"subscribe"},"Subscribe"),(0,r.kt)("p",null,"This method subscribes to a topic to receive new values with a stateful connection."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache where the topic exists.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the topic to subscribe to.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success - Returns a subscription object."),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information."),(0,r.kt)("p",null,"With the returned subscription object, once put in a for loop, your code will receive an event when a new value is published to the Topic.")),(0,r.kt)(l.X,{js:"const result = await topicClient.subscribe('test-cache', 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Publishing values to the topic 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nif (result instanceof TopicSubscribe.Subscription) {\n  console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n  // Publish a value\n  await topicClient.publish('test-cache', 'test-topic', 'test-value');\n\n  // Wait for published values to be received.\n  setTimeout(() => {\n    console.log('Waiting for the published values');\n  }, 2000);\n\n  // Need to close the stream before the example ends or else the example will hang.\n  result.unsubscribe();\n} else if (result instanceof TopicSubscribe.Error) {\n  throw new Error(\n    `An error occurred while attempting to subscribe to the topic 'test-topic' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"publish"},"Publish"),(0,r.kt)("p",null,"Publishes a message to a topic."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache where the topic exists.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the topic to publish the value to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String / bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Value to publish to the topic.")))),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(b,{value:"golang",label:"Go",default:!0,mdxType:"TabItem"},"This is ",(0,r.kt)("a",{href:"https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L95"},"example code"),"."),(0,r.kt)(b,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(l.X,{js:"const result = await topicClient.publish('test-cache', 'test-topic', 'test-topic-value');\nif (result instanceof TopicPublish.Success) {\n  console.log(\"Value published to topic 'test-topic'\");\n} else if (result instanceof TopicPublish.Error) {\n  throw new Error(\n    `An error occurred while attempting to publish to the topic 'test-topic' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h2",{id:"topicclient"},"TopicClient"),(0,r.kt)("p",null,"Instead of the CacheClient, as used in most Momento Cache API calls, for Topics you use a TopicClient object."),(0,r.kt)(l.X,{js:"new TopicClient({\n  configuration: TopicConfigurations.Default.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n  }),\n});",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}h.isMDXComponent=!0}}]);