"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4729],{3043:(e,t,n)=>{n(7294)},7235:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(614),o=n(7294);const a=e=>{let{language:t,code:n}=e;return o.createElement(r.Z,{language:t},n)}},9145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=(n(3043),n(7235));const i={sidebar_position:3,sidebar_label:"Observability",title:"Observability for TypeScript and Node.js",description:"Instrument your Momento-enabled Node.js code with Logs, Metrics, and Traces"},s="Observability with Momento in Node.js",l={unversionedId:"topics/develop/sdks/nodejs/observability",id:"topics/develop/sdks/nodejs/observability",title:"Observability for TypeScript and Node.js",description:"Instrument your Momento-enabled Node.js code with Logs, Metrics, and Traces",source:"@site/docs/topics/develop/sdks/nodejs/observability.mdx",sourceDirName:"topics/develop/sdks/nodejs",slug:"/topics/develop/sdks/nodejs/observability",permalink:"/topics/develop/sdks/nodejs/observability",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/sdks/nodejs/observability.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Observability",title:"Observability for TypeScript and Node.js",description:"Instrument your Momento-enabled Node.js code with Logs, Metrics, and Traces"},sidebar:"topicsSidebar",previous:{title:"Topics Cheat Sheet",permalink:"/topics/develop/sdks/nodejs/cheat-sheet"},next:{title:"JS Web SDK",permalink:"/topics/develop/sdks/web/"}},d={},p=[{value:"Logging",id:"logging",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Traces",id:"traces",level:2}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"observability-with-momento-in-nodejs"},"Observability with Momento in Node.js"),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Our goal for all of the Momento SDKs is to make sure that developers can direct Momento log output to the same destination that they are using for the rest of their application logs; therefore, we aim to be compatible with all of the popular logging frameworks for a given programming language."),(0,o.kt)("p",null,"There are many different logging libraries available for node.js. Some popular ones include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pinojs/pino"},"Pino")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/winstonjs/winston"},"Winston")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/trentm/node-bunyan"},"Bunyan")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/expressjs/morgan"},"Morgan"))),(0,o.kt)("p",null,"To ensure that Momento is compatible with all of these libraries (and more!), we provide a light-weight logging facade that you can use to wrap your favorite logging client. To use it, you simply need to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"MomentoLoggerFactory")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MomentoLogger")," interfaces:"),(0,o.kt)(a.Z,{language:"javascript",code:"export interface MomentoLogger {\n  error(msg: string, ...args: unknown[]): void;\n  warn(msg: string, ...args: unknown[]): void;\n  info(msg: string, ...args: unknown[]): void;\n  debug(msg: string, ...args: unknown[]): void;\n  trace(msg: string, ...args: unknown[]): void;\n}\n\nexport interface MomentoLoggerFactory {\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n  getLogger(loggerName: string | any): MomentoLogger;\n}\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("p",null,"Your implementation will just be a thin wrapper around your logging library of choice. We provide a complete, working example implementation that uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},(0,o.kt)("inlineCode",{parentName:"a"},"pino"))," logger; you can find the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/observability/pino-logger.ts"},"source code for that here"),"."),(0,o.kt)("p",null,"Once you have defined your ",(0,o.kt)("inlineCode",{parentName:"p"},"MomentoLoggerFactory")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MomentoLogger"),", the last step is to configure your Momento client to use your preferred logger, like this:"),(0,o.kt)(a.Z,{language:"javascript",code:"return new CacheClient({\n  configuration: Configurations.Laptop.v1(\n    new PinoMomentoLoggerFactory({\n      transport: {\n        target: 'pino-pretty',\n        options: {\n          colorize: true,\n        },\n      },\n    })\n  ),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_API_KEY'}),\n  defaultTtlSeconds: 60,\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("p",null,"Then you should see log messages from Momento coming through your pino logging environment. In this case you should see log messages that look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[1685649962168] INFO (CacheClient/4386 on mycomputer.local): Creating Momento CacheClient\n[1685649962168] INFO (ControlClient/4386 on mycomputer.local): Creating cache: test-cache\n")),(0,o.kt)("h2",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Metrics are measurements that provide quantitative information about system performance and behavior. They are numerical values captured and recorded over regular intervals, providing statistical data to aid in understanding the trends and patterns in a system."),(0,o.kt)("p",null,"For Momento specifically, you might desire to capture metrics on the number of requests made, their duration, request or response size, or failure rates. Capture these in the Node.js SDK using a middleware, which intercepts the Momento gRPC calls and responses. Here is an example that uses OpenTelemetry and Prometheus to capture request count faceted by request type:"),(0,o.kt)("p",null,"First, set up metrics in your application:"),(0,o.kt)(a.Z,{language:"javascript",code:"const resource = Resource.default();\n\nconst metricsExporter = new PrometheusExporter({}, () => {\n  console.log('prometheus scrape endpoint: http://localhost:9464/metrics');\n});\n\nconst meterProvider = new MeterProvider({\n  resource: resource,\n});\n\nmeterProvider.addMetricReader(metricsExporter);\n\nmetrics.setGlobalMeterProvider(meterProvider);",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("p",null,"Then, create a middleware that captures the metric:"),(0,o.kt)(a.Z,{language:"javascript",code:"import {Middleware, MiddlewareRequestHandler} from '@gomomento/sdk';\nimport {metrics} from '@opentelemetry/api';\nimport {Counter} from '@opentelemetry/api/build/src/metrics/Metric';\nimport {\n  MiddlewareMessage,\n  MiddlewareMetadata,\n  MiddlewareStatus,\n} from '@gomomento/sdk/dist/src/config/middleware/middleware';\n\nclass ExampleMetricMiddlewareRequestHandler implements MiddlewareRequestHandler {\n  private requestCounter: Counter;\n  constructor(requestCounter: Counter) {\n    this.requestCounter = requestCounter;\n  }\n  onRequestMetadata(metadata: MiddlewareMetadata): Promise<MiddlewareMetadata> {\n    return Promise.resolve(metadata);\n  }\n\n  onRequestBody(request: MiddlewareMessage): Promise<MiddlewareMessage> {\n    const requestType = request.constructor.name;\n    this.requestCounter.add(1, {'request.type': requestType});\n    return Promise.resolve(request);\n  }\n\n  onResponseMetadata(metadata: MiddlewareMetadata): Promise<MiddlewareMetadata> {\n    return Promise.resolve(metadata);\n  }\n\n  onResponseBody(response: MiddlewareMessage | null): Promise<MiddlewareMessage | null> {\n    return Promise.resolve(response);\n  }\n\n  onResponseStatus(status: MiddlewareStatus): Promise<MiddlewareStatus> {\n    return Promise.resolve(status);\n  }\n}\n\n/**\n * Basic middleware implementation that captures a request count metric. See experimental-metrics-csv-middleware.ts for\n * more comprehensive metrics, although be aware that that class is meant for troubleshooting and will eat disk space quickly.\n */\nexport class ExampleMetricMiddleware implements Middleware {\n  private readonly requestCounter: Counter;\n  constructor() {\n    const meter = metrics.getMeter('metric-middleware-meter');\n\n    this.requestCounter = meter.createCounter('momento_requests_counter', {\n      description: 'Momento GRPC requests',\n    });\n  }\n\n  onNewRequest(): MiddlewareRequestHandler {\n    return new ExampleMetricMiddlewareRequestHandler(this.requestCounter);\n  }\n}\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("p",null,"When you create the Momento ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheClient"),", add the middleware and the metric will be incremented with each request:"),(0,o.kt)(a.Z,{language:"javascript",code:"new CacheClient({\n  configuration: Configurations.Laptop.v1().addMiddleware(new ExampleMetricMiddleware()),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n  defaultTtlSeconds: 60,\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("p",null,"Here is an example of the Grafana UI displaying a graph of get and set requests made against Momento:\n",(0,o.kt)("img",{alt:"image",src:n(973).Z,width:"3018",height:"810"})),(0,o.kt)("h2",{id:"traces"},"Traces"),(0,o.kt)("p",null,"Traces provide a detailed timeline of processes within an application, showing the relationship between different components and services involved in a specific request or operation. They allow developers to analyze the sequence and duration of these operations, facilitating a better understanding of how data flows through the system."),(0,o.kt)("p",null,"The Momento Node.js SDK uses gRPC internally to communicate with the Momento servers. OpenTelemetry provides a capability for auto-instrumenting all gRPC calls with traces. You don't need to add any middleware code to produce these traces, like you do for the metrics. Here is an example that automatically generates traces for these calls and exports them to Zipkin:"),(0,o.kt)(a.Z,{language:"javascript",code:"const resource = Resource.default();\n\nconst provider = new NodeTracerProvider({\n  resource: resource,\n});\n\nconst exporter = new ZipkinExporter();\n\nprovider.addSpanProcessor(new SimpleSpanProcessor(exporter));\nprovider.register();\n\nregisterInstrumentations({\n  instrumentations: [new GrpcInstrumentation()],\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("p",null,"This needs to run before any Momento code."),(0,o.kt)("p",null,"Here is an example of the Zipkin UI displaying traces for a cache creation, a get, and a set:\n",(0,o.kt)("img",{alt:"image",src:n(2010).Z,width:"2500",height:"850"})),(0,o.kt)("p",null,"If the performance of your application is impacted by trace generation, you should consider sampling them to cut down on the number of traces generated. You can do this with OpenTelemetry by setting two environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},'export OTEL_TRACES_SAMPLER="traceidratio"\nexport OTEL_TRACES_SAMPLER_ARG="0.1"\n')),(0,o.kt)("p",null,"Setting these will ensure that only 10% of traces are created."))}m.isMDXComponent=!0},973:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/grafana_screenshot-022d7e4d1e9611ecd5856c3d9c729f9d.png"},2010:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/zipkin_screenshot-a7215ab6d563ef7b97e5b3dbe46e9731.png"}}]);