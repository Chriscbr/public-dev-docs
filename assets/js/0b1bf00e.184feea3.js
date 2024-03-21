"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7791],{2821:(e,t,o)=>{o(6540)},503:(e,t,o)=>{o.d(t,{F:()=>s});var n=o(2355),i=o(6540);const s=e=>{let{language:t,code:o}=e;return i.createElement(n.A,{language:t},o)}},859:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=o(8168),i=(o(6540),o(5680)),s=(o(2821),o(503));const a={sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","go","golang"]},r="Getting Started with Momento Topics in Go",c={unversionedId:"sdks/go/topics",id:"sdks/go/topics",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Topics.",source:"@site/docs/sdks/go/topics.mdx",sourceDirName:"sdks/go",slug:"/sdks/go/topics",permalink:"/sdks/go/topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/go/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","go","golang"]}},l={},p=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,n.A)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"getting-started-with-momento-topics-in-go"},"Getting Started with Momento Topics in Go"),(0,i.yg)("p",null,"If you need to get going quickly with Go and Momento Topics, this page contains the basic API calls you'll need. ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples"},"Check the Go SDK examples")," for complete, working code samples."),(0,i.yg)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,i.yg)("p",null,"After you have ",(0,i.yg)("a",{parentName:"p",href:"https://go.dev/doc/code#Command"},"created your Go project"),", install the Momento Go SDK."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cli"},"go get github.com/momentohq/client-sdk-go\n")),(0,i.yg)("h2",{id:"get-your-momento-api-key"},"Get your Momento API key"),(0,i.yg)("p",null,"You'll need a Momento API key. You can get one from the ",(0,i.yg)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your api key here>\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note"),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,i.yg)("h2",{id:"set-up-a-topicclient"},"Set up a TopicClient"),(0,i.yg)("p",null,"This code creates the TopicClient that you will use to interact with your pub/sub topic."),(0,i.yg)(s.F,{language:"go",code:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err := momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,i.yg)("h2",{id:"publish-a-message-to-a-topic"},"Publish a message to a topic"),(0,i.yg)("p",null,'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'),(0,i.yg)(s.F,{language:"go",code:'_, err := client.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif err != nil {\n\tpanic(err)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,i.yg)("h2",{id:"subscribe-to-a-topic"},"Subscribe to a topic"),(0,i.yg)("p",null,'This is an example of subscribing to a topic called "topic". When messages are published to this topic, the code here receives and prints them asynchronously.'),(0,i.yg)(s.F,{language:"go",code:'// Instantiate subscriber\nsub, subErr := client.Subscribe(ctx, &momento.TopicSubscribeRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n})\nif subErr != nil {\n\tpanic(subErr)\n}\n\ntime.Sleep(time.Second)\n_, pubErr := client.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif pubErr != nil {\n\tpanic(pubErr)\n}\ntime.Sleep(time.Second)\n\nitem, err := sub.Item(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch msg := item.(type) {\ncase momento.String:\n\tfmt.Printf("received message as string: \'%v\'\\n", msg)\ncase momento.Bytes:\n\tfmt.Printf("received message as bytes: \'%v\'\\n", msg)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,i.yg)("h2",{id:"running-the-code"},"Running the code"),(0,i.yg)("p",null,"You can find complete, working examples in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-go/tree/main/examples"},"Go SDK GitHub repo examples directory"),"."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,i.yg)("a",{parentName:"p",href:"/develop/api-reference"},"API reference page")," for more information on the full assortment of Momento API calls.")))}d.isMDXComponent=!0}}]);