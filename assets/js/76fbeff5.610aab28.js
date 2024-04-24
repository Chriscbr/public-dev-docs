"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7634],{2821:(e,t,o)=>{o(6540)},503:(e,t,o)=>{o.d(t,{F:()=>n});var a=o(2355),i=o(6540);const n=e=>{let{language:t,code:o}=e;return i.createElement(a.A,{language:t},o)}},3004:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=o(8168),i=(o(6540),o(5680));o(2821),o(503);const n={sidebar_position:2,sidebar_label:"Observability",title:"Observability for .NET SDK",description:"Instrument your Momento-enabled .NET code with Logs, Metrics, and Traces"},r="Observability with Momento in .NET",s={unversionedId:"sdks/dotnet/observability",id:"sdks/dotnet/observability",title:"Observability for .NET SDK",description:"Instrument your Momento-enabled .NET code with Logs, Metrics, and Traces",source:"@site/docs/sdks/dotnet/observability.mdx",sourceDirName:"sdks/dotnet",slug:"/sdks/dotnet/observability",permalink:"/sdks/dotnet/observability",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/dotnet/observability.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Observability",title:"Observability for .NET SDK",description:"Instrument your Momento-enabled .NET code with Logs, Metrics, and Traces"}},l={},d=[{value:"Logging",id:"logging",level:2},{value:"Metrics",id:"metrics",level:2}],m={toc:d},c="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"observability-with-momento-in-net"},"Observability with Momento in .NET"),(0,i.yg)("h2",{id:"logging"},"Logging"),(0,i.yg)("p",null,"Our goal for all of the Momento SDKs is to make sure that developers can direct Momento log output to the same destination that they are using for the rest of their application logs; therefore, we aim to be compatible with all of the popular logging frameworks for a given programming language."),(0,i.yg)("p",null,"The .NET SDK uses the ",(0,i.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/extensions/logging?tabs=command-line"},(0,i.yg)("inlineCode",{parentName:"a"},"ILoggerFactory")," and ",(0,i.yg)("inlineCode",{parentName:"a"},"ILogger")," interfaces")," so that logs can be written to the desired destination by configuring the appropriate logging providers."),(0,i.yg)("p",null,"As long as your preferred logger implements the ",(0,i.yg)("inlineCode",{parentName:"p"},"ILogger")," interface, you can pass the logger into your Momento configuration objects. You can also use your preferred logger in any custom middleware implementation you write (",(0,i.yg)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/src/Momento.Sdk/Config/Middleware/LoggingMiddleware.cs"},"example here"),")."),(0,i.yg)("p",null,"Once configured, you should see log messages in your logging environment that look like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"[1685649962168] INFO (CacheClient/4386 on mycomputer.local): Creating Momento CacheClient\n[1685649962168] INFO (ControlClient/4386 on mycomputer.local): Creating cache: test-cache\n")),(0,i.yg)("h2",{id:"metrics"},"Metrics"),(0,i.yg)("p",null,"Metrics are measurements that provide quantitative information about system performance and behavior. They are numerical values captured and recorded over regular intervals, providing statistical data to aid in understanding the trends and patterns in a system."),(0,i.yg)("p",null,"For Momento, specifically, you might want to capture client-side metrics on the number of requests made, their duration, request or response size, or failure rates."),(0,i.yg)("p",null,"The most straightforward way to emit these metrics is to use one of the ",(0,i.yg)("inlineCode",{parentName:"p"},"ExperimentalMetricsMiddleware")," classes. These classes emit metrics in JSON format:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'(Momento: _ExperimentalMetricsLoggingMiddleware):\n{\n  "momento": {\n    "numActiveRequestsAtStart": 1,\n    "numActiveRequestsAtFinish": 1,\n    "requestType": "_GetRequest",\n    "status": 0,\n    "startTime": 1697663118489,\n    "requestBodyTime": 1697663118489,\n    "endTime": 1697663118492,\n    "duration": 3,\n    "requestSize": 32,\n    "responseSize": 2,\n    "connectionID": "0"\n  }\n}\n')),(0,i.yg)("p",null,"The metrics format is currently considered experimental; in a future release, once the format is considered stable, this class will be renamed to remove the ",(0,i.yg)("inlineCode",{parentName:"p"},"Experimental")," prefix. The two middleware classes available are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/src/Momento.Sdk/Config/Middleware/ExperimentalMetricsLoggingMiddleware.cs"},(0,i.yg)("inlineCode",{parentName:"a"},"ExperimentalMetricsLoggingMiddleware")),": will emit metrics to your chosen logger. WARNING: depending on your request volume, this middleware will produce a high volume of log output. If you are writing logs directly to local disk, be aware of disk usage and make sure you have log rotation / compression enabled via a tool such as ",(0,i.yg)("inlineCode",{parentName:"li"},"logrotate"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/src/Momento.Sdk/Config/Middleware/ExperimentalMetricsCsvMiddleware.cs"},(0,i.yg)("inlineCode",{parentName:"a"},"ExperimentalMetricsCsvMiddleware")),": will emit metrics to a CSV file. WARNING: enabling this middleware may have minor performance implications, so enable with caution. Depending on your request volume, the CSV file size may grow quickly, and neither sampling nor file compression / rotation are included at this time.")),(0,i.yg)("p",null,"Log files and CSVs can be analyzed or shared with Momento to diagnose performance issues. You may also direct your logs to an AWS CloudWatch Log Group and create a CloudWatch dashboard to monitor your Momento requests; ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/cloudwatch-metrics"},"an example of launching a Momento metrics dashboard")," and optional example application is available in the Node.js SDK. The example Node.js Lambda and Fargate applications utilize the ",(0,i.yg)("inlineCode",{parentName:"p"},"ExperimentalMetricsLoggingMiddleware")," class and CloudWatch metric filters to populate a dashboard like the one shown below, but you can deploy just the CloudWatch dashboard and populate the graphs with your own .NET application."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"An image of a CloudWatch dashboard with nine graphs populated by Momento metrics",src:o(4814).A,width:"3456",height:"2234"})))}g.isMDXComponent=!0},4814:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/cloudwatch-dashboard-0cb80aeb853a930776addddbd2e28ce6.png"}}]);