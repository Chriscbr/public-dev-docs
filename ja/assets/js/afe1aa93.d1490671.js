"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3391],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=d({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??p;return b({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var g=n(2389);const v="tabList__CuJ",f="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:b,onClick:m},o,{className:(0,i.Z)("tabs__item",f,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function T(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(T,(0,a.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>l});var a=n(4866),r=n(5162),i=n(814),o=n(7294);const l=e=>{let{js:t,python:n,java:l,go:s,csharp:c,php:u,rust:p,ruby:m,elixir:b,cli:d}=e;return t||n||l||s||c||u||p||m||b||d?o.createElement(a.Z,null,t&&o.createElement(r.Z,{value:"js",label:"JavaScript"},o.createElement(i.Z,{language:"js"},t)),n&&o.createElement(r.Z,{value:"python",label:"Python"},o.createElement(i.Z,{language:"python"},n)),l&&o.createElement(r.Z,{value:"java",label:"Java"},o.createElement(i.Z,{language:"java"},l)),s&&o.createElement(r.Z,{value:"go",label:"Go"},o.createElement(i.Z,{language:"go"},s)),c&&o.createElement(r.Z,{value:"csharp",label:"C#"},o.createElement(i.Z,{language:"csharp"},c)),u&&o.createElement(r.Z,{value:"php",label:"PHP"},o.createElement(i.Z,{language:"php"},u)),p&&o.createElement(r.Z,{value:"rust",label:"Rust"},o.createElement(i.Z,{language:"rust"},p)),m&&o.createElement(r.Z,{value:"ruby",label:"Ruby"},o.createElement(i.Z,{language:"ruby"},m)),b&&o.createElement(r.Z,{value:"elixir",label:"Elixir"},o.createElement(i.Z,{language:"elixir"},b)),d&&o.createElement(r.Z,{value:"cli",label:"CLI"},o.createElement(i.Z,{language:"cli"},d))):null}},9426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=(n(3404),n(9720));const o={sidebar_position:4,sidebar_label:"Topics (Pub/Sub)",title:"Topics (pub/sub) API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento Topics pub/sub API \u3068\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3084\u308a\u3068\u308a\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002"},l="Momento Topics\uff08pub/sub\uff09API \u3092\u4f7f\u7528\u3059\u308b",s={unversionedId:"topics/develop/api-reference/index",id:"topics/develop/api-reference/index",title:"Topics (pub/sub) API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento Topics pub/sub API \u3068\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3084\u308a\u3068\u308a\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/api-reference/index.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/",permalink:"/ja/topics/develop/api-reference/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Topics (Pub/Sub)",title:"Topics (pub/sub) API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento Topics pub/sub API \u3068\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3084\u308a\u3068\u308a\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002"},sidebar:"topicsSidebar",previous:{title:"Permissions",permalink:"/ja/topics/develop/authentication/permissions"},next:{title:"Auth",permalink:"/ja/topics/develop/api-reference/auth"}},c={},u=[{value:"Topics \u306e\u30e1\u30bd\u30c3\u30c9",id:"topics-\u306e\u30e1\u30bd\u30c3\u30c9",level:2},{value:"Subscribe",id:"subscribe",level:3},{value:"Publish",id:"publish",level:3},{value:"TopicClient",id:"topicclient",level:2},{value:"Example apps using Momento Topics APIs",id:"example-apps-using-momento-topics-apis",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("Tabs"),b=p("TabItem"),d={toc:u};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-topicspubsubapi-\u3092\u4f7f\u7528\u3059\u308b"},"Momento Topics\uff08pub/sub\uff09API \u3092\u4f7f\u7528\u3059\u308b"),(0,r.kt)("p",null,"Momento Topics \u306f\u3001\u5206\u6563\u578b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5404\u90e8\u5206\u9593\u3067\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u901a\u4fe1\u3092\u53ef\u80fd\u306b\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002\u30c8\u30d4\u30c3\u30af\u306e\u5024\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5(\u30d7\u30ed\u30c7\u30e5\u30fc\u30b9)\u3057\u3001\u30c8\u30d4\u30c3\u30af\u304b\u3089\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6(\u30b3\u30f3\u30b7\u30e5\u30fc\u30e0)\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento Topics \u3067\u64cd\u4f5c\u3059\u308b\u305f\u3081\u306e Momento API \u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image showing the movement of lots of data, messages published, moved to where they need to go quickly and accurately.",src:n(7630).Z,width:"1000",height:"203"})),(0,r.kt)("p",null,"\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/topics/"},"Momento Topics"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"topics-\u306e\u30e1\u30bd\u30c3\u30c9"},"Topics \u306e\u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("h3",{id:"subscribe"},"Subscribe"),(0,r.kt)("p",null,"\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u306f\u3001\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u306a\u63a5\u7d9a\u3092\u7528\u3044\u3066\u65b0\u3057\u3044\u5024\u3092\u53d7\u3051\u53d6\u308b\u305f\u3081\u306b\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30c8\u30d4\u30c3\u30af\u304c\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308b\u30c8\u30d4\u30c3\u30af\u306e\u540d\u524d")))),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(b,{value:"golang",label:"Go",default:!0,mdxType:"TabItem"},"\u3053\u308c\u304c ",(0,r.kt)("a",{href:"https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L26"},"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"),"\u3067\u3059\u3002"),(0,r.kt)(b,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u30e1\u30bd\u30c3\u30c8\u3099\u306e\u30ec\u30b9\u30db\u309a\u30f3\u30b9\u30aa\u30d5\u3099\u30b7\u3099\u30a7\u30af\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success - \u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,r.kt)("a",{parentName:"p",href:"./api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u8fd4\u3055\u308c\u305f\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092for\u30eb\u30fc\u30d7\u306b\u7f6e\u304f\u3068\u3001\u65b0\u3057\u3044\u5024\u304c\u30c8\u30d4\u30c3\u30af\u306b\u516c\u958b\u3055\u308c\u308b\u6642\u306b\u30b3\u30fc\u30c9\u306b\u30a4\u30d9\u30f3\u30c8\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)(i.X,{js:"const result = await topicClient.subscribe('test-cache', 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Publishing values to the topic 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nif (result instanceof TopicSubscribe.Subscription) {\n  console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n  // Publish a value\n  await topicClient.publish('test-cache', 'test-topic', 'test-value');\n\n  // Wait for published values to be received.\n  setTimeout(() => {\n    console.log('Waiting for the published values');\n  }, 2000);\n\n  // Need to close the stream before the example ends or else the example will hang.\n  result.unsubscribe();\n} else if (result instanceof TopicSubscribe.Error) {\n  throw new Error(\n    `An error occurred while attempting to subscribe to the topic 'test-topic' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'subscription = await topic_client.subscribe("cache", "my_topic")\nmatch subscription:\n    case TopicSubscribe.Error():\n        print("Error subscribing to topic: ", subscription.message)\n    case TopicSubscribe.SubscriptionAsync():\n        await topic_client.publish("cache", "my_topic", "my_value")\n        async for item in subscription:\n            match item:\n                case TopicSubscriptionItem.Text():\n                    print(f"Received message as string: {item.value}")\n                    return\n                case TopicSubscriptionItem.Binary():\n                    print(f"Received message as bytes: {item.value}")\n                    return\n                case TopicSubscriptionItem.Error():\n                    print("Error with received message:", item.inner_exception.message)\n                    return',java:"",go:'// Instantiate subscriber\nsub, subErr := client.Subscribe(ctx, &momento.TopicSubscribeRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n})\nif subErr != nil {\n\tpanic(subErr)\n}\n\ntime.Sleep(time.Second)\n_, pubErr := client.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif pubErr != nil {\n\tpanic(pubErr)\n}\ntime.Sleep(time.Second)\n\nitem, err := sub.Item(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch msg := item.(type) {\ncase momento.String:\n\tfmt.Printf("received message as string: \'%v\'\\n", msg)\ncase momento.Bytes:\n\tfmt.Printf("received message as bytes: \'%v\'\\n", msg)\n}',csharp:'var produceCancellation = new CancellationTokenSource();\nproduceCancellation.CancelAfter(2000);\n\nvar subscribeResponse = await topicClient.SubscribeAsync("test-cache", "test-topic");\nswitch (subscribeResponse)\n{\n    case TopicSubscribeResponse.Subscription subscription:\n        var cancellableSubscription = subscription.WithCancellation(produceCancellation.Token);\n\n        await Task.Delay(1_000);\n        await topicClient.PublishAsync("test-cache", "test-topic", "test-topic-value");\n        await Task.Delay(1_000);\n\n        await foreach (var message in cancellableSubscription)\n        {\n            switch (message)\n            {\n                case TopicMessage.Binary:\n                    Console.WriteLine("Received unexpected binary message from topic.");\n                    break;\n                case TopicMessage.Text text:\n                    Console.WriteLine($"Received string message from topic: {text.Value}");\n                    break;\n                case TopicMessage.Error error:\n                    throw new Exception($"An error occurred while receiving topic message: {error.ErrorCode}: {error}");\n                default:\n                    throw new Exception("Bad message received");\n            }\n        }\n        subscription.Dispose();\n        break;\n    case TopicSubscribeResponse.Error error:\n        throw new Exception($"An error occurred subscribing to a topic: {error.ErrorCode}: {error}");\n}\n',php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"publish"},"Publish"),(0,r.kt)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30c8\u30d4\u30c3\u30af\u304c\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5024\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u30c8\u30d4\u30c3\u30af\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String / bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u3000\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u5024")))),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(b,{value:"golang",label:"Go",default:!0,mdxType:"TabItem"},"\u3053\u3061\u3089\u304c",(0,r.kt)("a",{href:"https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L95"},"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"),"\u3067\u3059\u3002"),(0,r.kt)(b,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u30e1\u30bd\u30c3\u30c8\u3099\u306e\u30ec\u30b9\u30db\u309a\u30f3\u30b9\u30aa\u30d5\u3099\u30b7\u3099\u30a7\u30af\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,r.kt)("a",{parentName:"p",href:"./api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)(i.X,{js:"const result = await topicClient.publish('test-cache', 'test-topic', 'test-topic-value');\nif (result instanceof TopicPublish.Success) {\n  console.log(\"Value published to topic 'test-topic'\");\n} else if (result instanceof TopicPublish.Error) {\n  throw new Error(\n    `An error occurred while attempting to publish to the topic 'test-topic' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await topic_client.publish("cache", "my_topic", "my_value")\nmatch response:\n    case TopicPublish.Success():\n        print("Successfully published a message")\n    case TopicPublish.Error():\n        print("Error publishing a message: ", response.message)',java:"",go:'_, err := client.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif err != nil {\n\tpanic(err)\n}',csharp:'ar publishResponse =\n    await topicClient.PublishAsync("test-cache", "test-topic", "test-topic-value");\nswitch (publishResponse)\n{\n    case TopicPublishResponse.Success:\n        Console.WriteLine("Successfully published message to \'test-topic\'");\n        break;\n    case TopicPublishResponse.Error error:\n        throw new Exception($"An error occurred while publishing topic message: {error.ErrorCode}: {error}");\n}\n',php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h2",{id:"topicclient"},"TopicClient"),(0,r.kt)("p",null,"\u307b\u3068\u3093\u3069\u306e Momento Cache API \u30b3\u30fc\u30eb\u3067\u306f CacheClient \u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001Topics \u306b\u3064\u3044\u3066\u306f TopicClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)(i.X,{js:"new TopicClient({\n  configuration: TopicConfigurations.Default.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});",python:'topic_client = TopicClientAsync(\n    TopicConfigurations.Default.latest(),\n    CredentialProvider.from_environment_variable("MOMENTO_AUTH_TOKEN")\n)',java:"",go:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err := momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}',csharp:'new TopicClient(\n    TopicConfigurations.Laptop.latest(), \n    new EnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN")\n);\n',php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h2",{id:"example-apps-using-momento-topics-apis"},"Example apps using Momento Topics APIs"),(0,r.kt)("p",null,"A growing list of example apps using the Momento Topics."),(0,r.kt)("p",null,"Momento Topics\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u306e\u4f8b\u304c\u7d9a\u3005\u3068\u5897\u3048\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice"},"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3067\u4f5c\u6210\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9")," \u3053\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306fTypeScript\u3067\u66f8\u304b\u308c\u3001API Gateway\u3001Lambda\u95a2\u6570\u3001Momento Topics\u3092\u4f7f\u3063\u3066AWS\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308b\u3002(API Gateway\u4e0a\u3067\u9069\u5207\u306a\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308c\u3070\uff09\u4ed6\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u3082\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u69d8\u3005\u306a\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u884c\u3057\u3066\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u8cfc\u8aad\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e API \u306b ",(0,r.kt)("inlineCode",{parentName:"li"},"topicName")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"li"},"topicValue")," \u3092\u6e21\u3059\u3068\u3001\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u306f\u305d\u306e\u5024\u3092\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002")))}h.isMDXComponent=!0},7630:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/topics-api-98374b6744ad0aa1699f94c2937d9fdc.jpg"}}]);