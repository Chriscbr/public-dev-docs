"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8744],{3043:(e,t,a)=>{a(7294)},7235:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(614),n=a(7294);const i=e=>{let{language:t,code:a}=e;return n.createElement(o.Z,{language:t},a)}},6855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=a(7462),n=(a(7294),a(3905)),i=(a(3043),a(7235));const s={sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Cache in Java",description:"Learn the basic building blocks for writing Java code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","java","jvm"]},r="Getting Started with Momento Topics in Java",c={unversionedId:"sdks/java/topics",id:"sdks/java/topics",title:"Getting started with Momento Cache in Java",description:"Learn the basic building blocks for writing Java code to interact with Momento Cache.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/java/topics.mdx",sourceDirName:"sdks/java",slug:"/sdks/java/topics",permalink:"/ja/sdks/java/topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/java/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Cache in Java",description:"Learn the basic building blocks for writing Java code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","java","jvm"]}},l={},p=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-momento-topics-in-java"},"Getting Started with Momento Topics in Java"),(0,n.kt)("p",null,"If you need to get going quickly with Java and Momento Topics, this page contains the basic API calls you'll need. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-java/tree/main/examples"},"Check the Java SDK examples")," for complete, working code samples."),(0,n.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,n.kt)("p",null,"The Momento SDK is available on Maven Central: ",(0,n.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/software.momento.java/sdk"},"`software.momento.java/sdk"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Visit ",(0,n.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/software.momento.java/sdk"},"Maven Central")," to find the latest available version of the SDK.")),(0,n.kt)("p",null,"Install the client library in an existing Java project:"),(0,n.kt)("h3",{id:"gradle"},"Gradle"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("software.momento.java:sdk:1.x.x")\n')),(0,n.kt)("h3",{id:"maven"},"Maven"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>software.momento.java</groupId>\n    <artifactId>sdk</artifactId>\n    <version>1.x.x</version>\n</dependency>\n")),(0,n.kt)("h2",{id:"get-your-momento-api-key"},"Get your Momento API key"),(0,n.kt)("p",null,"You'll need a Momento API key. You can get one from the ",(0,n.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your api key here>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,n.kt)("h2",{id:"set-up-a-topicclient"},"Set up a TopicClient"),(0,n.kt)("p",null,"This code creates the TopicClient that you will use to interact with your pub/sub topic."),(0,n.kt)(i.Z,{language:"java",code:"",mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"publish-a-message-to-a-topic"},"Publish a message to a topic"),(0,n.kt)("p",null,'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'),(0,n.kt)(i.Z,{language:"java",code:"",mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"subscribe-to-a-topic"},"Subscribe to a topic"),(0,n.kt)("p",null,'This is an example of subscribing to a topic called "topic". When messages are published to this topic, the code here receives and prints them asynchronously.'),(0,n.kt)(i.Z,{language:"java",code:"",mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"running-the-code"},"Running the code"),(0,n.kt)("p",null,"You can find complete, working examples in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-java/tree/main/examples"},"Java SDK GitHub repo examples directory"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,n.kt)("a",{parentName:"p",href:"/develop/api-reference"},"API reference page")," for more information on the full assortment of Momento API calls.")))}m.isMDXComponent=!0}}]);