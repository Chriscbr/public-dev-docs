"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7987],{3043:(e,t,i)=>{i(7294)},7235:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(614),n=i(7294);const s=e=>{let{language:t,code:i}=e;return n.createElement(o.Z,{language:t},i)}},2290:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=i(7462),n=(i(7294),i(3905)),s=(i(3043),i(7235));const a={sidebar_position:1,sidebar_label:"Topics Cheat Sheet",title:"Topics cheat sheet for Swift",description:"Get started really quickly coding using Swift with Momento Topics"},r="Cheat Sheet for Swift with Momento Topics",c={unversionedId:"topics/develop/sdks/swift/cheat-sheet",id:"topics/develop/sdks/swift/cheat-sheet",title:"Topics cheat sheet for Swift",description:"Get started really quickly coding using Swift with Momento Topics",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/sdks/swift/cheat-sheet.mdx",sourceDirName:"topics/develop/sdks/swift",slug:"/topics/develop/sdks/swift/cheat-sheet",permalink:"/ja/topics/develop/sdks/swift/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/sdks/swift/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics Cheat Sheet",title:"Topics cheat sheet for Swift",description:"Get started really quickly coding using Swift with Momento Topics"},sidebar:"topicsSidebar",previous:{title:"Swift",permalink:"/ja/topics/develop/sdks/swift/"},next:{title:"Ruby",permalink:"/ja/topics/develop/sdks/ruby/"}},l={},p=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}],u={toc:p};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cheat-sheet-for-swift-with-momento-topics"},"Cheat Sheet for Swift with Momento Topics"),(0,n.kt)("p",null,"If you need to get going quickly with Swift and Momento Topics, this page contains the basic API calls you'll need. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-swift/tree/main/Examples"},"Check the Swift SDK examples")," for complete, working code samples."),(0,n.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,n.kt)("p",null,"The latest version of the Momento Swift SDK is available on GitHub: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-swift"},"momentohq/client-sdk-swift"),"."),(0,n.kt)("h2",{id:"get-your-momento-api-key"},"Get your Momento API key"),(0,n.kt)("p",null,"You'll need a Momento API key. You can get one from the ",(0,n.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your api key here>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,n.kt)("h2",{id:"set-up-a-topicclient"},"Set up a TopicClient"),(0,n.kt)("p",null,"This code creates the TopicClient that you will use to interact with your pub/sub topic."),(0,n.kt)(s.Z,{language:"swift",code:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let topicClient = TopicClient(\n        configuration: TopicClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider\n    )\n} catch {\n    print("Unable to create topic client: \\(error)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"publish-a-message-to-a-topic"},"Publish a message to a topic"),(0,n.kt)("p",null,'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'),(0,n.kt)(s.Z,{language:"swift",code:'let result = await topicClient.publish(\n    cacheName: cacheName,\n    topicName: "topic",\n    value: "value"\n)\nswitch result {\ncase .success(_):\n    print("Successfully published message!")\ncase .error(let err):\n    print("Unable to publish message: \\(err)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"subscribe-to-a-topic"},"Subscribe to a topic"),(0,n.kt)("p",null,'This is an example of subscribing to a topic called "topic", then catching the return value to check if it was successful. If a subscription was received, a ',(0,n.kt)("inlineCode",{parentName:"p"},"for try await")," loop is used to asynchronously receive and print the messages that are published to this topic."),(0,n.kt)(s.Z,{language:"swift",code:'let subscribeResponse = await topicClient.subscribe(cacheName: cacheName, topicName: "topic")\n\n#if swift(>=5.9)\nlet subscription = switch subscribeResponse {\n    case .error(let err): fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub): sub\n}\n#else \nlet subscription: TopicSubscription\nswitch subscribeResponse {\n    case .error(let err):\n        fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub):\n        subscription = sub\n}\n#endif\n\n// unsubscribe in 5 seconds\nTask {\n    try await Task.sleep(nanoseconds: 5_000_000_000)\n    subscription.unsubscribe()\n}\n\n// loop over messages as they are received\nfor try await item in subscription.stream {\n    var value: String = ""\n    switch item {\n    case .itemText(let textItem):\n        value = textItem.value\n        print("Subscriber recieved text message: \\(value)")\n    case .itemBinary(let binaryItem):\n        value = String(decoding: binaryItem.value, as: UTF8.self)\n        print("Subscriber recieved binary message: \\(value)")\n    case .error(let err):\n        print("Subscriber received error: \\(err)")\n    }\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"running-the-code"},"Running the code"),(0,n.kt)("p",null,"You can find complete, working examples in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-swift/tree/main/examples"},"Swift SDK GitHub repo examples directory"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,n.kt)("a",{parentName:"p",href:"./../../api-reference"},"API reference page")," for more information on the full assortment of Momento API calls.")))}h.isMDXComponent=!0}}]);