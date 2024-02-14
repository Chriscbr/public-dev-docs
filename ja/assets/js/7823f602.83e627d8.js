"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3157],{3043:(e,t,o)=>{o(7294)},7235:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(614),i=o(7294);const s=e=>{let{language:t,code:o}=e;return i.createElement(n.Z,{language:t},o)}},3068:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7462),i=(o(7294),o(3905)),s=(o(3043),o(7235));const a={sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Topics in your native Android applications, or your JVM server-side applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","mobile","kotlin","java","jvm"]},r="Getting Started with Momento Topics in Kotlin",l={unversionedId:"sdks/kotlin/topics",id:"sdks/kotlin/topics",title:"Getting started with Momento Topics in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Topics in your native Android applications, or your JVM server-side applications.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/kotlin/topics.mdx",sourceDirName:"sdks/kotlin",slug:"/sdks/kotlin/topics",permalink:"/ja/sdks/kotlin/topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/kotlin/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Topics in your native Android applications, or your JVM server-side applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","mobile","kotlin","java","jvm"]}},c={},p=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-momento-topics-in-kotlin"},"Getting Started with Momento Topics in Kotlin"),(0,i.kt)("p",null,"If you need to get going quickly with Kotlin and Momento Topics, this page contains the basic API calls you'll need. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples"},"Check the Kotlin SDK examples")," for complete, working code samples."),(0,i.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,i.kt)("p",null,"The Momento SDK is available on Maven Central: ",(0,i.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk"},"`software.momento.kotlin/sdk"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk"},"Maven Central")," to find the latest available version of the SDK.")),(0,i.kt)("p",null,"Install the client library in an existing Kotlin project:"),(0,i.kt)("h3",{id:"gradle"},"Gradle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("software.momento.kotlin:sdk:x.x.x")\n')),(0,i.kt)("h3",{id:"maven"},"Maven"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>software.momento.kotlin</groupId>\n    <artifactId>sdk</artifactId>\n    <version>x.x.x</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"get-your-momento-api-key"},"Get your Momento API key"),(0,i.kt)("p",null,"You'll need a Momento API key. You can get one from the ",(0,i.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your api key here>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,i.kt)("h2",{id:"set-up-a-topicclient"},"Set up a TopicClient"),(0,i.kt)("p",null,"This code creates the TopicClient that you will use to interact with your pub/sub topic."),(0,i.kt)(s.Z,{language:"kotlin",code:'TopicClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), TopicConfigurations.Laptop.latest\n).use { topicClient ->\n    //...\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"publish-a-message-to-a-topic"},"Publish a message to a topic"),(0,i.kt)("p",null,'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'),(0,i.kt)(s.Z,{language:"kotlin",code:'when (val response = topicClient.publish("test-cache", "test-topic", "test-message")) {\n    is TopicPublishResponse.Success -> println("Message published successfully")\n    is TopicPublishResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to publish message to topic \'test-topic\': ${response.errorCode}",\n        response\n    )\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"subscribe-to-a-topic"},"Subscribe to a topic"),(0,i.kt)("p",null,'This is an example of subscribing to a topic called "topic". When messages are published to this topic, the code here receives and prints them asynchronously.'),(0,i.kt)(s.Z,{language:"kotlin",code:'when (val response = topicClient.subscribe("test-cache", "test-topic")) {\n    is TopicSubscribeResponse.Subscription -> coroutineScope {\n        launch {\n            withTimeoutOrNull(2000) {\n                response.collect { item ->\n                    when (item) {\n                        is TopicMessage.Text -> println("Received text message: ${item.value}")\n                        is TopicMessage.Binary -> println("Received binary message: ${item.value}")\n                        is TopicMessage.Error -> throw RuntimeException(\n                            "An error occurred reading messages from topic \'test-topic\': ${item.errorCode}", item\n                        )\n                    }\n                }\n            }\n        }\n    }\n\n    is TopicSubscribeResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to subscribe to topic \'test-topic\': ${response.errorCode}", response\n    )\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"running-the-code"},"Running the code"),(0,i.kt)("p",null,"You can find complete, working examples in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples"},"Kotlin SDK GitHub repo examples directory"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,i.kt)("a",{parentName:"p",href:"/develop/api-reference"},"API reference page")," for more information on the full assortment of Momento API calls.")))}m.isMDXComponent=!0}}]);