"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2623],{2821:(e,t,i)=>{i(6540)},503:(e,t,i)=>{i.d(t,{F:()=>s});var n=i(2355),o=i(6540);const s=e=>{let{language:t,code:i}=e;return o.createElement(n.A,{language:t},i)}},9950:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=i(8168),o=(i(6540),i(5680)),s=(i(2821),i(503));const r={sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Swift",description:"Learn the basic building blocks for writing Swift code to interact with Momento Topics in your native iOS applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","swift","ios","mobile"]},a="Swift\u3067Momento Topics\u3092\u59cb\u3081\u308b",c={unversionedId:"sdks/swift/topics",id:"sdks/swift/topics",title:"Getting started with Momento Topics in Swift",description:"Learn the basic building blocks for writing Swift code to interact with Momento Topics in your native iOS applications.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/swift/topics.mdx",sourceDirName:"sdks/swift",slug:"/sdks/swift/topics",permalink:"/ja/sdks/swift/topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/swift/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Swift",description:"Learn the basic building blocks for writing Swift code to interact with Momento Topics in your native iOS applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","swift","ios","mobile"]}},l={},p=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"Momento API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",id:"momento-api\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"TopicClient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"topicclient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",id:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",level:2},{value:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b",id:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,o.yg)(d,(0,n.A)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"swift\u3067momento-topics\u3092\u59cb\u3081\u308b"},"Swift\u3067Momento Topics\u3092\u59cb\u3081\u308b"),(0,o.yg)("p",null,"Swift\u3068Momento\u30c8\u30d4\u30c3\u30af\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5b8c\u5168\u3067\u52d5\u4f5c\u3059\u308b\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.yg)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-swift/tree/main/Examples"},"Swift SDK \u306e\u30b5\u30f3\u30d7\u30eb\u3092\u78ba\u8a8d\u3059\u308b"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,o.yg)("h2",{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,o.yg)("p",null,"Momento Swift SDK\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306fGitHub\u3067\u5165\u624b\u53ef\u80fd\u3067\u3059\uff1a ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-swift"},"momentohq/client-sdk-swift"),"\u3002"),(0,o.yg)("h2",{id:"momento-api\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b"},"Momento API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b"),(0,o.yg)("p",null,"Momento API\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,o.yg)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),"\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your api key here>\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note"),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001API\u30ad\u30fc\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u5165\u308c\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3060\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306bAPI\u30ad\u30fc\u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002"),(0,o.yg)("h2",{id:"topicclient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"TopicClient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,o.yg)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30d1\u30d6/\u30b5\u30d6\u30fb\u30c8\u30d4\u30c3\u30af\u3068\u306e\u5bfe\u8a71\u306b\u4f7f\u7528\u3059\u308b TopicClient \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.yg)(s.F,{language:"swift",code:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let topicClient = TopicClient(\n        configuration: TopicClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider\n    )\n} catch {\n    print("Unable to create topic client: \\(error)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,o.yg)("h2",{id:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b"},"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b"),(0,o.yg)("p",null,'\u3053\u308c\u306f\u3001"topic "\u3068\u3044\u3046\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u884c\u3057\u3001\u305d\u306e\u8fd4\u308a\u5024\u3092\u30ad\u30e3\u30c3\u30c1\u3057\u3066\u767a\u884c\u304c\u6210\u529f\u3057\u305f\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u4f8b\u3067\u3059\u3002'),(0,o.yg)(s.F,{language:"swift",code:'let result = await topicClient.publish(\n    cacheName: cacheName,\n    topicName: "topic",\n    value: "value"\n)\nswitch result {\ncase .success(_):\n    print("Successfully published message!")\ncase .error(let err):\n    print("Unable to publish message: \\(err)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,o.yg)("h2",{id:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b"},"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b"),(0,o.yg)("p",null,'\u3053\u308c\u306f\u3001"topic "\u3068\u3044\u3046\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b\u4f8b\u3067\u3042\u308b\u3002\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3055\u308c\u308b\u3068\u3001\u3053\u3053\u306e\u30b3\u30fc\u30c9\u306f\u305d\u308c\u3092\u975e\u540c\u671f\u306b\u53d7\u4fe1\u3057\u3066\u8868\u793a\u3057\u307e\u3059\u3002'),(0,o.yg)(s.F,{language:"swift",code:'let subscribeResponse = await topicClient.subscribe(cacheName: cacheName, topicName: "topic")\n\n#if swift(>=5.9)\nlet subscription = switch subscribeResponse {\n    case .error(let err): fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub): sub\n}\n#else \nlet subscription: TopicSubscription\nswitch subscribeResponse {\n    case .error(let err):\n        fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub):\n        subscription = sub\n}\n#endif\n\n// unsubscribe in 5 seconds\nTask {\n    try await Task.sleep(nanoseconds: 5_000_000_000)\n    subscription.unsubscribe()\n}\n\n// loop over messages as they are received\nfor try await item in subscription.stream {\n    var value: String = ""\n    switch item {\n    case .itemText(let textItem):\n        value = textItem.value\n        print("Subscriber recieved text message: \\(value)")\n    case .itemBinary(let binaryItem):\n        value = String(decoding: binaryItem.value, as: UTF8.self)\n        print("Subscriber recieved binary message: \\(value)")\n    case .error(let err):\n        print("Subscriber received error: \\(err)")\n    }\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,o.yg)("h2",{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"},"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-swift/tree/main/examples"},"Swift SDK GitHub repo examples directory"),"\u3067\u3001\u5b8c\u5168\u306a\u3001\u52d5\u4f5c\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.yg)("a",{parentName:"p",href:"/develop/api-reference"},"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}u.isMDXComponent=!0}}]);