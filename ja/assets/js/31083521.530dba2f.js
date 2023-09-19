"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[421],{3043:(e,t,o)=>{o(7294)},7235:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(814),i=o(7294);const s=e=>{let{language:t,code:o}=e;return i.createElement(n.Z,{language:t},o)}},3040:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=o(7462),i=(o(7294),o(3905)),s=(o(3043),o(7235));const a={sidebar_position:2,sidebar_label:"Topics \u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",sidebar_class_name:"sidebar-item-nodejs",title:"TypeScript\u3068Node.js\u306e\u305f\u3081\u306eTopics\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"Momento Topics\u3092\u4f7f\u3063\u3066\u3001TypeScript\u3068Node.js\u3092\u4f7f\u3063\u305f\u958b\u767a\u3092\u7d20\u65e9\u304f\u59cb\u3081\u308b"},c="Node.js \u3068 Momento Topics \u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",r={unversionedId:"topics/develop/sdks/nodejs/cheat-sheet",id:"topics/develop/sdks/nodejs/cheat-sheet",title:"TypeScript\u3068Node.js\u306e\u305f\u3081\u306eTopics\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"Momento Topics\u3092\u4f7f\u3063\u3066\u3001TypeScript\u3068Node.js\u3092\u4f7f\u3063\u305f\u958b\u767a\u3092\u7d20\u65e9\u304f\u59cb\u3081\u308b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/sdks/nodejs/cheat-sheet.mdx",sourceDirName:"topics/develop/sdks/nodejs",slug:"/topics/develop/sdks/nodejs/cheat-sheet",permalink:"/ja/topics/develop/sdks/nodejs/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/sdks/nodejs/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Topics \u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",sidebar_class_name:"sidebar-item-nodejs",title:"TypeScript\u3068Node.js\u306e\u305f\u3081\u306eTopics\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"Momento Topics\u3092\u4f7f\u3063\u3066\u3001TypeScript\u3068Node.js\u3092\u4f7f\u3063\u305f\u958b\u767a\u3092\u7d20\u65e9\u304f\u59cb\u3081\u308b"},sidebar:"topicsSidebar",previous:{title:"Node.js",permalink:"/ja/topics/develop/sdks/nodejs/"},next:{title:"Observability",permalink:"/ja/topics/develop/sdks/nodejs/observability"}},p={},l=[{value:"Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30fb\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",id:"\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066 TopicClient \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066-topicclient-\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6",id:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}],d={toc:l};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodejs-\u3068-momento-topics-\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"},"Node.js \u3068 Momento Topics \u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"),(0,i.kt)("p",null,"Node.js + TypeScript \u3067 Momento Topics \u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u57fa\u672c\u7684\u306b\u5fc5\u8981\u3068\u306a\u308bAPI\u547c\u3073\u51fa\u3057\u3092\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/topics"},"Node.js SDK \u306e\u4f8b"),"\u306b\u306f\u3001\u30d3\u30eb\u30c9\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3080\u3001\u5b9f\u7528\u7684\u306a\u4f8b\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"momento-\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30fb\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,i.kt)("p",null,"\u65e2\u5b58\u306e Node.js \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30fb\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\n")),(0,i.kt)("h2",{id:"\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3059\u308b"},"\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3059\u308b"),(0,i.kt)("p",null,"Momento \u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"./../../authentication"},"Momento API key")," \u304c\u5fc5\u8981\u3067\u3059\u3002\u3067\u304d\u308c\u3070\u3001",(0,i.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web \u30b3\u30f3\u30bd\u30fc\u30eb")," \u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u305d\u308c\u3092\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your key here>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001\u30c8\u30fc\u30af\u30f3\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u683c\u7d0d\u3059\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u3059\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306b\u74b0\u5883\u5909\u6570\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066-topicclient-\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066 TopicClient \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b"),(0,i.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30e1\u30a4\u30f3\u95a2\u6570\u3001\u5fc5\u8981\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3001\u304a\u3088\u3073\u4ed6\u306e\u5404\u95a2\u6570\u304c\u547c\u3073\u51fa\u3059\u6642\u306b\u5fc5\u8981\u306b\u306a\u308b TopicClient \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)(s.Z,{language:"javascript",code:"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport {TopicClient, TopicConfigurations, CredentialProvider} from '@gomomento/sdk';\n\nfunction main() {\n  const cacheClient = new TopicClient({\n    configuration: TopicConfigurations.Default.latest(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n  });\n}\n\ntry {\n  main();\n} catch (e) {\n  console.error(`Uncaught exception while running example: ${JSON.stringify(e)}`);\n  throw e;\n}\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6"},"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6"),(0,i.kt)("p",null,'\u3053\u306e\u4f8b\u3067\u306f\u3001"test-cache" \u3068\u3044\u3046\u540d\u524d\u306e Momento Cache \u306e "test-topic" \u3068\u3044\u3046\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3057\u3001\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u304c\u6210\u529f\u3057\u305f\u3089\u305d\u306e\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002'),(0,i.kt)(s.Z,{language:"javascript",code:"const result = await topicClient.subscribe('test-cache', 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Publishing values to the topic 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nif (result instanceof TopicSubscribe.Subscription) {\n  console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n  // Publish a value\n  await topicClient.publish('test-cache', 'test-topic', 'test-value');\n\n  // Wait for published values to be received.\n  setTimeout(() => {\n    console.log('Waiting for the published values');\n  }, 2000);\n\n  // Need to close the stream before the example ends or else the example will hang.\n  result.unsubscribe();\n} else if (result instanceof TopicSubscribe.Error) {\n  throw new Error(\n    `An error occurred while attempting to subscribe to the topic 'test-topic' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"},"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples"},"GitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306eJavaScript SDK\u306b\u3042\u308bexamples"),"\u306b\u52d5\u4f5c\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u547c\u3073\u51fa\u3057\u4ee5\u5916\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/ja/topics/develop/api-reference/"},"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u3053\u306e",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/advanced.ts"},"\u30ea\u30f3\u30af"),"\u304b\u3089\u3001\u540c\u3058\u30bf\u30a4\u30d7\u306e\u3001\u3088\u308a\u9ad8\u5ea6\u306aAPI\u547c\u3073\u51fa\u3057\u306e\u30b3\u30fc\u30c9\u4f8b\u3092\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")))}m.isMDXComponent=!0}}]);