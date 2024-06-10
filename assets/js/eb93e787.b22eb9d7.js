"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2101],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),h=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=h(o),m=a,u=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return o?n.createElement(u,r(r({ref:t},d),{},{components:o})):n.createElement(u,r({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var h=2;h<i;h++)r[h]=o[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5859:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=o(7462),a=(o(7294),o(3905));const i={sidebar_position:1,sidebar_label:"Amazon EventBridge",title:"Integrate Momento Topics with Amazon EventBridge",pagination_prev:null,description:"How to deploy an AWS Lambda function that handles the webhook payload published by Momento.  The handler exposes the Function over a URL that when executed puts the Momento webhook payload on a configured AWS EventBridge Bus.",hide_title:!0,keywords:["momento","topics","event-driven architecture","eda","webhook","serverless"]},r="Configure Momento Topics to publish events to Amazon EventBridge",l={unversionedId:"topics/integrations/lambda-handler",id:"topics/integrations/lambda-handler",title:"Integrate Momento Topics with Amazon EventBridge",description:"How to deploy an AWS Lambda function that handles the webhook payload published by Momento.  The handler exposes the Function over a URL that when executed puts the Momento webhook payload on a configured AWS EventBridge Bus.",source:"@site/docs/topics/integrations/lambda-handler.mdx",sourceDirName:"topics/integrations",slug:"/topics/integrations/lambda-handler",permalink:"/topics/integrations/lambda-handler",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/integrations/lambda-handler.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Amazon EventBridge",title:"Integrate Momento Topics with Amazon EventBridge",pagination_prev:null,description:"How to deploy an AWS Lambda function that handles the webhook payload published by Momento.  The handler exposes the Function over a URL that when executed puts the Momento webhook payload on a configured AWS EventBridge Bus.",hide_title:!0,keywords:["momento","topics","event-driven architecture","eda","webhook","serverless"]},sidebar:"topicsSidebar",next:{title:"AWS Secrets Manager",permalink:"/topics/integrations/aws-secrets-manager"}},s={},h=[{value:"Architecture",id:"architecture",level:2},{value:"Installing the handler",id:"installing-the-handler",level:2},{value:"Deploying the Lambda function via one-click CloudFormation",id:"deploying-the-lambda-function-via-one-click-cloudformation",level:3},{value:"Update the Momento webhook URL",id:"update-the-momento-webhook-url",level:3},{value:"Verifying the payload",id:"verifying-the-payload",level:2},{value:"Example event",id:"example-event",level:3},{value:"Event structure",id:"event-structure",level:3},{value:"detail-type",id:"detail-type",level:4},{value:"source",id:"source",level:4},{value:"detail",id:"detail",level:4},{value:"Considerations",id:"considerations",level:2}],d={toc:h};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-momento-topics-to-publish-events-to-amazon-eventbridge"},"Configure Momento Topics to publish events to Amazon EventBridge"),(0,a.kt)("p",null,"Momento ",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/topics/webhooks/overview"},"webhooks")," are a serverless way to connect a topic to a stateless consumer. Below is a guide on how to deploy an AWS Lambda function with a public URL that puts the message onto an Amazon EventBridge bus."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"The goal of the webhook handler is to process the notification from Momento as quickly and securely as possible with the ultimate destination being AWS EventBridge. By getting the message onto a bus, the possibilities for how to handle that data open up tremendously. The message could be persisted into more durable storage or even propagated to other consumers for further actions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Webhook architecture",src:o(4663).Z,width:"1338",height:"614"})),(0,a.kt)("h2",{id:"installing-the-handler"},"Installing the handler"),(0,a.kt)("p",null,"Before starting the process, follow the steps below to complete the deployment."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/topics/webhooks/creating-a-webhook"},"Create the Momento webhook"),". ",(0,a.kt)("em",{parentName:"li"},"Set the Webhook Destination to a dummy value like ",(0,a.kt)("a",{parentName:"em",href:"https://none.com"},"https://none.com")," as it will be updated once the CloudFormation is deployed"),"."),(0,a.kt)("li",{parentName:"ol"},"Set up an AWS account with the ability to run CloudFormation. The CloudFormation template performs the following tasks:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Deploy a Lambda function"),(0,a.kt)("li",{parentName:"ul"},"Create the IAM Role for the function"),(0,a.kt)("li",{parentName:"ul"},"Create a Lambda Function URL"),(0,a.kt)("li",{parentName:"ul"},"Create an SQS queue which serves as the Dead-Letter Queue (DLQ)"),(0,a.kt)("li",{parentName:"ul"},"(Optional) The ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," Event Bus will be used but if an alternate is desired, that needs to be created ahead of time."))),(0,a.kt)("li",{parentName:"ol"},"Update the Momento webhook with the CloudFormation output containing the Lambda Function URL")),(0,a.kt)("h3",{id:"deploying-the-lambda-function-via-one-click-cloudformation"},"Deploying the Lambda function via one-click CloudFormation"),(0,a.kt)("p",null,"Momento has taken care of the heavy lifting when it comes to building a Lambda webhook handler in addition to supplying a CloudFormation stack for deploying the resources. Initiating the deployment is as simple as clicking this button. ",(0,a.kt)("a",{href:"https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-webhook-handler&templateURL=https://us-west-2-momento-webhook-bucket.s3.us-west-2.amazonaws.com/template.yaml"},(0,a.kt)("img",{src:"/img/cloudformation-launch-stack.png",target:"_blank",alt:"CloudFormation One-Click"}))),(0,a.kt)("p",null,"Deploying the stack will require signing into the ",(0,a.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/"},"AWS Console"),". Once that is completed, the CloudFormation Create Stack Screen should appear."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CloudFormation Create",src:o(3923).Z,width:"3326",height:"1588"})),(0,a.kt)("p",null,"The stack will take care of the detailed parts of launching the infrastructure, but there are opportunities to customize it."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stack Name"),": Name of the stack when deployed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"EventBridgeBus"),": If using a custom bus, enter the name here. By default, the `default`` bus is used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"MomentoSecretString"),": The secret string that Momento uses to sign the payload and sends as a part of the HTTP Headers in the webhook POST. This secret string is available in the Momento Webhook Console. Copy from the below screen and paste it into this parameter")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Momento Webhook Secret",src:o(4589).Z,width:"2216",height:"1088"})),(0,a.kt)("h3",{id:"update-the-momento-webhook-url"},"Update the Momento webhook URL"),(0,a.kt)("p",null,"Upon completion of the deployment, take the Function URL from the CloudFormation output and update the Momento webhook URL in the Momento console like the image one section above. Below is what the CloudFormation Output will look like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CloudFormation Output",src:o(8357).Z,width:"2252",height:"412"})),(0,a.kt)("h2",{id:"verifying-the-payload"},"Verifying the payload"),(0,a.kt)("p",null,"The ultimate destination for this webhook handler is AWS EventBridge. When working with EventBridge, Rules are the configuration point that drives what is filtered and what targets are provided the message to act upon."),(0,a.kt)("p",null,"The Momento Lambda webhook handler puts each event from the webhook on the Event Bus with the following structure."),(0,a.kt)("h3",{id:"example-event"},"Example event"),(0,a.kt)("p",null,"Below is a sample payload representing an EventBridge message as triggered from a Momento webhook. Note that this is a template and specific values will differ in your implementation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "0",\n    "id": "7c7ce805-51c3-4a66-b6e0-39e4e558e6d8",\n    "detail-type": "sample-a#sample-a",\n    "source": "Momento",\n    "account": "252703795646",\n    "time": "2024-01-13T14:56:16Z",\n    "region": "us-west-2",\n    "resources": [],\n    "detail": {\n        "cache": "sample-a",\n        "topic": "sample-a",\n        "event_timestamp": 1705157775308,\n        "publish_timestamp": 1705157775308,\n        "topic_sequence_number": 2,\n        "token_id": "",\n        "text": "{\\"someKey\\":\\"someValue\\"}"\n    }\n}\n')),(0,a.kt)("h3",{id:"event-structure"},"Event structure"),(0,a.kt)("p",null,"The properties of the EventBridge message are listed below along with the function they provide."),(0,a.kt)("h4",{id:"detail-type"},"detail-type"),(0,a.kt)("p",null,"detail-type is used to help filter out messages based on the cache and topic source. Since the webhook handler can be used as a single gateway for multiple webhooks, filtering in EventBridge to drive certain values to certain targets is useful. This value will always be a concatenated string in the format of ",(0,a.kt)("inlineCode",{parentName:"p"},"{cache-name}#{topic-name}")," which is sourced from the webhook payload. Note the ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," in the middle of the dynamic values."),(0,a.kt)("h4",{id:"source"},"source"),(0,a.kt)("p",null,"The source will always be ",(0,a.kt)("inlineCode",{parentName:"p"},"Momento"),". This property helps determine the origination point of the message."),(0,a.kt)("h4",{id:"detail"},"detail"),(0,a.kt)("p",null,"The message detail will contain the actual payload as supplied from the webhook. By not removing elements from the message, maximum detail is provided to all consuming applications. For reference, the Momento webhook payload fields are ",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/topics/webhooks/overview#example-event"},"described here.")),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"There are two details in the implementation that need to be considered when deploying this Lambda webhook handler."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The handler is designed to reject requests whose published timestamps are ",(0,a.kt)("strong",{parentName:"li"},"older than 60 seconds"),". This helps protect spamming the handler with outdated messages in ",(0,a.kt)("a",{parentName:"li",href:"https://docs.momentohq.com/topics/webhooks/security#replay-attacking"},"replay attacks"),"."),(0,a.kt)("li",{parentName:"ol"},"The Lambda function is deployed in an Amazon Managed Linux 2 environment built for ARM64 and the Graviton chipset. It is natively compiled from Rust using the AWS SDK built for Rust.")),(0,a.kt)("p",null,"With a webhook handler that publishes into an EventBridge bus, the extensions are practically endless. By leveraging a purely serverless implementation, resources expand as needed and costs are $0 when messages aren't consumed."))}p.isMDXComponent=!0},8357:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cloudformation_output-8ea410a40eb0d3bc892a1bed8feb4f61.jpg"},3923:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/momento_stack-f88f2856c44761ac3d4f7ffce82f4960.png"},4663:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/webhook_arch-65185a7328e91d395388252799182302.jpg"},4589:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/webhook_settings-fe46f0acfa5be4f7110f2a07078d6a44.jpg"}}]);