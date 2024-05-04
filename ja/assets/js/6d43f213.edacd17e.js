"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4606],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return t?o.createElement(h,a(a({ref:n},p),{},{components:t})):o.createElement(h,a({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2480:(e,n,t)=>{t.d(n,{A:()=>p});var o=t(6540);const r="card_Yy4i",s="cardLink_tPnZ",a="cardContent_l93Q",i="cardTitle_gz5m",c="cardDescription_RQFX",l="cardBody_MLn8",p=e=>{let{title:n,description:t,link:p,icon:d,variation:m="normal"}=e,u="",h="";if("dense"===m.toLowerCase())u="0",h="15em";return o.createElement("div",{className:r,style:{width:h}},o.createElement("a",{href:p,target:"_blank",className:s},o.createElement("div",{className:l},d&&o.createElement("img",{src:d,height:"32px",width:"32px"}),o.createElement("div",{className:a},o.createElement("h3",{className:i},n),o.createElement("p",{className:c,style:{marginBottom:u}},t)))))}},3572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(8168),r=(t(6540),t(5680)),s=t(2480);const a={sidebar_position:30,title:"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",sidebar_label:"Identifying unique resources",description:"Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.",keywords:["topics","webhooks","eda","momento","event-driven architecture"]},i="\u30a4\u30d9\u30f3\u30c8\u99c6\u52d5\u578b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067Momento\u30c8\u30d4\u30c3\u30af\u3001Webhook\u3001\u30c8\u30fc\u30af\u30f3\u3092\u6d3b\u7528\u3059\u308b",c={unversionedId:"topics/patterns/token_id_webhook",id:"topics/patterns/token_id_webhook",title:"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",description:"Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/patterns/token_id_webhook.md",sourceDirName:"topics/patterns",slug:"/topics/patterns/token_id_webhook",permalink:"/ja/topics/patterns/token_id_webhook",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/patterns/token_id_webhook.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",sidebar_label:"Identifying unique resources",description:"Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.",keywords:["topics","webhooks","eda","momento","event-driven architecture"]},sidebar:"topicsSidebar",previous:{title:"Running background tasks",permalink:"/ja/topics/patterns/running-background-tasks"},next:{title:"Develop",permalink:"/ja/topics/develop/"}},l={},p=[{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",level:2},{value:"See More",id:"see-more",level:2}],d={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,o.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u30a4\u30d9\u30f3\u30c8\u99c6\u52d5\u578b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067momento\u30c8\u30d4\u30c3\u30afwebhook\u30c8\u30fc\u30af\u30f3\u3092\u6d3b\u7528\u3059\u308b"},"\u30a4\u30d9\u30f3\u30c8\u99c6\u52d5\u578b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067Momento\u30c8\u30d4\u30c3\u30af\u3001Webhook\u3001\u30c8\u30fc\u30af\u30f3\u3092\u6d3b\u7528\u3059\u308b"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"../"},"Momento Topics"),"\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30c8\u30d4\u30c3\u30af\u4e0a\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8cfc\u8aad\u3057\u3001\u5225\u306e\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,r.yg)("a",{parentName:"p",href:"../webhooks/overview"},"Webhooks"),"\u306f\u3001\u3053\u308c\u3089\u306e\u30c8\u30d4\u30c3\u30af\u306b\u767a\u884c\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u5fdc\u7b54\u3057\u3066\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u308bHTTP\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3068\u3057\u3066\u6a5f\u80fd\u3057\u3001\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u30b3\u30f3\u30b7\u30e5\u30fc\u30de\u30fc\u3068\u3057\u3066\u52d5\u4f5c\u3057\u307e\u3059\u3002",(0,r.yg)("a",{parentName:"p",href:"../../cache/develop/authentication/tokens"},"\u30c8\u30fc\u30af\u30f3"),"\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u3068\u3084\u308a\u3068\u308a\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u3084\u30b5\u30fc\u30d3\u30b9\u306b\u3001\u77ed\u6642\u9593\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u30fb\u30c8\u30fc\u30af\u30f3\u3092\u63d0\u4f9b\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u5404\u30c8\u30fc\u30af\u30f3\u306b\u4e00\u610f\u306e\u8b58\u5225\u5b50 (",(0,r.yg)("inlineCode",{parentName:"p"},"token_id"),") \u3092\u57cb\u3081\u8fbc\u3080\u3053\u3068\u3067\u3001\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u5b89\u5168\u3067\u8ffd\u8de1\u53ef\u80fd\u306a\u30a2\u30af\u30bb\u30b9\u3092\u4fdd\u8a3c\u3057\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u3053\u3053\u3067\u91cd\u8981\u306a\u306e\u306f\u3001Topics \u3092\u4f7f\u3063\u3066\u77ed\u547d\u306e\u30c8\u30fc\u30af\u30f3\u3092\u4ed8\u4e0e\u3059\u308b\u3053\u3068\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u9593\u306e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306a\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4fc3\u9032\u3067\u304d\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u30c8\u30fc\u30af\u30f3\u306b\u306f\u30e6\u30fc\u30b6\u30fc\u60c5\u5831 (",(0,r.yg)("inlineCode",{parentName:"p"},"token_id"),") \u3092\u57cb\u3081\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u308b\u3068\u3001Webhook \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u4ecb\u3057\u3066 Momento \u30ad\u30e3\u30c3\u30b7\u30e5\u306a\u3069\u306e\u5171\u6709\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u6d3b\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"token_id")," \u3092\u4f7f\u3063\u3066\u30e6\u30fc\u30b6\u30fc\u3092\u7279\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001Momento \u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13\u3092\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u60c5\u5831\u3092\u57cb\u3081\u8fbc\u3080\u3053\u3068\u3067\u30012\u3064\u306e\u5927\u304d\u306a\u5229\u70b9\u304c\u5f97\u3089\u308c\u307e\u3059\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u5f37\u5316\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u306a\u308a\u3059\u307e\u3057\u3092\u9632\u3050\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u30c8\u30fc\u30af\u30f3\u81ea\u4f53\u306b\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u304c\u57cb\u3081\u8fbc\u307e\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u30c7\u30fc\u30bf\u8ee2\u9001\u30b3\u30b9\u30c8\u304c\u524a\u6e1b\u3055\u308c\u308b\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Architecture",src:t(4999).A,width:"547",height:"520"})),(0,r.yg)("h2",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://console.gomomento.com/caches/create"},"Momento\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/topics/webhooks/creating-a-webhook"},"\u30a6\u30a7\u30d6\u30d5\u30c3\u30af\u3092\u4f5c\u6210\u3059\u308b")," \u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002Webhook \u306e\u5b9b\u5148\u3092\u516c\u958b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5272\u308a\u5f53\u3066\u307e\u3059\u3002\u3053\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f POST \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u5165\u308c\u3001Momento \u304b\u3089\u306e\u7740\u4fe1\u30b3\u30fc\u30eb\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u69cb\u9020\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.yg)("a",{parentName:"li",href:"../webhooks/overview#example-event"},"\u3053\u3061\u3089")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u30a4\u30f3\u30d5\u30e9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u4ee5\u4e0b\u306f\u30a6\u30a7\u30d6\u30d5\u30c3\u30af\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30e9\u30e0\u30c0\u95a2\u6570URL\u3092\u4f5c\u6210\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002\u307e\u305f\n\u307e\u305f\u3001AWS secrets manager \u306b Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"\nimport * as path from 'path';\nimport * as cdk from 'aws-cdk-lib';\nimport {Construct} from 'constructs';\nimport * as lambda from 'aws-cdk-lib/aws-lambda';\nimport * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';\nimport * as secrets from 'aws-cdk-lib/aws-secretsmanager';\nimport {CfnOutput} from \"aws-cdk-lib\";\n\nexport class MomentoWebhookStack extends cdk.Stack {\n    constructor(scope: Construct, id: string, props?: cdk.StackProps) {\n        super(scope, id, props);\n\n        const momentoApiKeyParam = new cdk.CfnParameter(this, 'MomentoApiKey', {\n            type: 'String',\n            description: 'The Momento API key that will be used to read from the cache.',\n            noEcho: true,\n        });\n\n        const momentoSecretStringParam = new cdk.CfnParameter(this, 'MomentoSecretString', {\n            type: 'String',\n            description: 'The Momento Webhook Secret String that will be used to validate the caller',\n            noEcho: true,\n        });\n\n        const apiKeySecret = new secrets.Secret(this, 'MomentoWebhookHandlerApiKey', {\n            secretName: 'MomentoWebhookHandlerApiKey',\n            secretStringValue: new cdk.SecretValue(momentoApiKeyParam.valueAsString),\n        });\n\n        const secretStringSecret = new secrets.Secret(this, 'MomentoWebhookHandlerSecretString', {\n            secretName: 'MomentoWebhookHandlerSecretString',\n            secretStringValue: new cdk.SecretValue(momentoSecretStringParam.valueAsString),\n        });\n\n        const webhookHandlerLambda = new lambdaNodejs.NodejsFunction(this, 'MomentoWebhookHandler', {\n            functionName: 'MomentoWebhookHandler',\n            runtime: lambda.Runtime.NODEJS_18_X,\n            entry: path.join(__dirname, '../../lambda/webhook-handler/handler.ts'),\n            projectRoot: path.join(__dirname, '../../lambda/webhook-handler'),\n            depsLockFilePath: path.join(__dirname, '../../lambda/webhook-handler/package-lock.json'),\n            handler: 'handler',\n            timeout: cdk.Duration.seconds(30),\n            memorySize: 128,\n            environment: {\n                MOMENTO_API_KEY_SECRET_NAME: apiKeySecret.secretName,\n                THE_SIGNING_SECRET: secretStringSecret.secretName,\n            },\n        });\n\n        const serviceLambda = new lambdaNodejs.NodejsFunction(this, 'ServiceLambda', {\n            functionName: 'ServiceLambda',\n            runtime: lambda.Runtime.NODEJS_18_X,\n            entry: path.join(__dirname, '../../lambda/service-topics/handler.ts'),\n            projectRoot: path.join(__dirname, '../../lambda/service-topics'),\n            depsLockFilePath: path.join(__dirname, '../../lambda/service-topics/package-lock.json'),\n            handler: 'handler',\n            timeout: cdk.Duration.seconds(30),\n            memorySize: 128,\n            environment: {\n                MOMENTO_API_KEY_SECRET_NAME: apiKeySecret.secretName\n            },\n        });\n\n        // \ud83d\udc47 Setup lambda url\n        const lambdaUrl = webhookHandlerLambda.addFunctionUrl({\n            authType: lambda.FunctionUrlAuthType.NONE,\n        });\n\n        apiKeySecret.grantRead(webhookHandlerLambda);\n        apiKeySecret.grantRead(serviceLambda);\n        secretStringSecret.grantRead(webhookHandlerLambda);\n\n        new CfnOutput(this, 'FunctionUrl ', { value: lambdaUrl.url });\n    }\n}\n\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Webhook \u306b\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u3066\u3001\u53d7\u4fe1\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u51e6\u7406\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u3001Webhook \u30da\u30a4\u30ed\u30fc\u30c9\u304b\u3089\u30e6\u30fc\u30b6\u306e ",(0,r.yg)("inlineCode",{parentName:"li"},"token_id")," \u3092\u62bd\u51fa\u3057\u3001Momento \u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b Webhook \u30e9\u30e0\u30c0\u30cf\u30f3\u30c9\u30e9\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002\u307e\u305f\u3001Webhook \u306e\u547c\u3073\u51fa\u3057\u5143\u304c\u672c\u5f53\u306b Momento \u3067\u3042\u308b\u3053\u3068\u3092\u3001\u7f72\u540d\u306e\u79d8\u5bc6\u3092\u901a\u3057\u3066\u78ba\u8a8d\u3057\u307e\u3059\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"\nimport {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';\nimport {CacheClient, CacheGet, CacheListPushFront, Configurations, CredentialProvider, WebhookUtils} from '@gomomento/sdk';\nimport * as crypto from \"crypto\";\n\nconst _secretsClient = new SecretsManagerClient({});\nconst _cachedSecrets = new Map<string, string>();\nlet _cacheClient: CacheClient | undefined = undefined;\n\nconst cacheName = 'course-comments';\n\nexport const handler = async (event: any) => {\n  try {\n\n    const secretStringSecretName = process.env.THE_SIGNING_SECRET;\n\n    if (secretStringSecretName === undefined) {\n      throw new Error(\"Missing required env var 'THE_SIGNING_SECRET\");\n    }\n\n    const secretString = await getSecret(secretStringSecretName);\n    const authorized = WebhookUtils.validateWebhookRequest(\n        {\n            signature: event.headers['momento-signature'],\n            signingSecret: secretString,\n            body: event.body\n        }\n    );\n\n    if (authorized !== WebhookUtils.RequestValidation.VALID ) {\n      return {\n        statusCode: 403,\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: '{\"message\": \"Access Denied!\"}',\n      };\n    }\n\n    const payload = JSON.parse(event.body)\n    const userID = payload.token_id\n    const message = JSON.parse(payload.text)\n\n    console.log('Storing user comment for userID ' + userID + ' and courseId ' + message.courseId);\n    console.log('Comment: ' + message.comment);\n\n    const cacheClient = await getCacheClient();\n    if (_cacheClient === undefined) {\n      throw new Error('Cache client is undefined');\n    }\n\n    const listResp = await cacheClient.listPushFront(cacheName, String(message.courseId),\n      JSON.stringify({userID: userID, comment: message.comment}));\n    if (listResp instanceof CacheListPushFront.Success) {\n      console.log('Successfully persisted comment for course');\n    } else if (listResp instanceof CacheListPushFront.Error) {\n      console.log('Error while publishing comment for course ' + listResp.message());\n    }\n\n    return {\n      statusCode: 200,\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: '{}',\n    };\n  } catch (err) {\n    console.log(err);\n    return {\n      statusCode: 500,\n      body: JSON.stringify({\n        message: 'An error occurred!' + err\n      }),\n    };\n  }\n};\n\n\nasync function getSecret(secretName: string): Promise<string> {\n  if (!_cachedSecrets.has(secretName)) {\n    const secretResponse = await _secretsClient.send(new GetSecretValueCommand({SecretId: secretName}));\n    if (secretResponse) {\n      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n      _cachedSecrets.set(secretName, secretResponse.SecretString!);\n    } else {\n      throw new Error(`Unable to retrieve secret: ${secretName}`);\n    }\n  }\n  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n  return _cachedSecrets.get(secretName)!;\n}\n\nasync function getCacheClient(): Promise<CacheClient> {\n  const apiKeySecretName = process.env.MOMENTO_API_KEY_SECRET_NAME;\n  if (apiKeySecretName === undefined) {\n    throw new Error(\"Missing required env var 'MOMENTO_API_KEY_SECRET_NAME\");\n  }\n  if (_cacheClient === undefined) {\n    const momentoApiKey = await getSecret(apiKeySecretName);\n    console.log('Retrieved secret!');\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment\n    _cacheClient = await CacheClient.create({\n      configuration: Configurations.Lambda.latest(),\n      credentialProvider: CredentialProvider.fromString({apiKey: momentoApiKey}),\n      defaultTtlSeconds: 60,\n    });\n  }\n  return _cacheClient;\n}\n")),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"\u6700\u5f8c\u306b\u3001\u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3057\u3066\u30c8\u30d4\u30c3\u30af\u306b\u30e6\u30fc\u30b6\u30fc\u30fb\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u30fb\u30b3\u30fc\u30c9\u3092\u4ee5\u4e0b\u306b\u793a\u3059\u3002\u73fe\u5b9f\u306e\u4e16\u754c\u3067\u306f\n\u3053\u308c\u3089\u306f\u7406\u60f3\u7684\u306b\u306f\u5225\u3005\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306b\u4f4f\u307f\u308f\u3051\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';\nimport {\n  AuthClient, Configurations, CredentialProvider, DisposableTokenScopes,\n  ExpiresIn, GenerateDisposableToken, TopicClient, TopicPublish\n} from '@gomomento/sdk';\n\nconst _secretsClient = new SecretsManagerClient({});\nconst _cachedSecrets = new Map<string, string>();\nlet _authClient: AuthClient | undefined = undefined;\nlet _topicClient: TopicClient | undefined = undefined;\n\nconst cacheName = 'course-comments';\nconst topicName = 'comment';\n\nexport const handler = async (event: any) => {\n  try {\n\n    const authClient = await getAuthClient();\n\n    const eventsPublishToken = await authClient.generateDisposableToken(\n      DisposableTokenScopes.topicPublishOnly(cacheName, topicName),\n      ExpiresIn.minutes(30),\n      {tokenId: 'taylor'},\n    )\n\n    if (eventsPublishToken instanceof GenerateDisposableToken.Success) {\n      console.log('Generated a disposable API key with access to the \"events\" topic in the \"cache\" cache!');\n      // logging only a substring of the tokens, because logging security credentials is not advisable :)\n      //console.log(`API key starts with: ${eventsPublishToken.authToken.substring(0, 10)}`);\n      //console.log(`Expires At: ${eventsPublishToken.expiresAt.epoch()}`);\n      console.log('Publishing to the \"events\" topic in the \"cache\" cache! using the generated disposable token');\n      const topicClient = await getTopicClient(eventsPublishToken.authToken);\n      const message = JSON.stringify({\n        comment: 'This course and video is awesome!',\n        courseId: 123,\n      });\n      console.log(\"Message: \"  + message);\n      const publishResponse = await topicClient.publish(cacheName, topicName, message);\n      if (publishResponse instanceof TopicPublish.Success) {\n        console.log('Published to the \"events\" topic in the \"cache\" cache!');\n      } else if (publishResponse instanceof TopicPublish.Error) {\n        throw new Error(\n          `An error occurred while attempting to publish to the \"events\" topic in the \"cache\" cache: ${publishResponse.errorCode()}: ${publishResponse.toString()}`\n        );\n      }\n    } else if (eventsPublishToken instanceof GenerateDisposableToken.Error) {\n      throw new Error(\n        `An error occurred while attempting to call generateApiKey with disposable token scope: ${eventsPublishToken.errorCode()}: ${eventsPublishToken.toString()}`\n      );\n    }\n    return {\n      statusCode: 200,\n      headers: {\n        'Content-Type': 'application/json',\n        'Access-Control-Allow-Origin': '*',\n      },\n      body: '{}',\n    };\n  } catch (err) {\n    console.log(err);\n    return {\n      statusCode: 500,\n      body: JSON.stringify({\n        message: 'An error occurred!',\n      }),\n    };\n  }\n}\n\nasync function getAuthClient(): Promise<AuthClient> {\n  const apiKeySecretName = process.env.MOMENTO_API_KEY_SECRET_NAME;\n  if (apiKeySecretName === undefined) {\n    throw new Error(\"Missing required env var 'MOMENTO_API_KEY_SECRET_NAME\");\n  }\n  if (_authClient === undefined) {\n    const momentoApiKey = await getSecret(apiKeySecretName);\n    console.log('Retrieved secret!');\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment\n    _authClient = new AuthClient({\n      credentialProvider: CredentialProvider.fromString({apiKey: momentoApiKey}),\n    });\n  }\n  return _authClient;\n}\n\nasync function getTopicClient(disposableTokenKey: string): Promise<TopicClient> {\n  if (_topicClient === undefined) {\n    console.log('Retrieved secret!');\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment\n    _topicClient = new TopicClient({\n      configuration: Configurations.Lambda.latest(),\n      credentialProvider: CredentialProvider.fromString({apiKey: disposableTokenKey}),\n    });\n  }\n\n  return _topicClient;\n}\n\nasync function getSecret(secretName: string): Promise<string> {\n  if (!_cachedSecrets.has(secretName)) {\n    const secretResponse = await _secretsClient.send(new GetSecretValueCommand({SecretId: secretName}));\n    if (secretResponse) {\n      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n      _cachedSecrets.set(secretName, secretResponse.SecretString!);\n    } else {\n      throw new Error(`Unable to retrieve secret: ${secretName}`);\n    }\n  }\n  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n  return _cachedSecrets.get(secretName)!;\n}\n\n")),(0,r.yg)("h2",{id:"see-more"},"See More"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Momento\u30c8\u30d4\u30c3\u30af\u3001\u30a6\u30a7\u30d6\u30d5\u30c3\u30af\u3001\u30c8\u30fc\u30af\u30f3\u3092\u7d71\u5408\u3059\u308b\u3053\u3068\u3067\u3001\u30bb\u30ad\u30e5\u30a2\u3067\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u975e\u540c\u671f\u30b7\u30b9\u30c6\u30e0\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u898f\u7d04\u306f\u3001\u591a\u8a00\u8a9e\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u30dd\u30fc\u30ea\u30f3\u30b0\u3001\u30a4\u30d9\u30f3\u30c8\u99c6\u52d5\u578b\u30b7\u30b9\u30c6\u30e0\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u9069\u7528\u3067\u304d\u307e\u3059\u3002")),(0,r.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"20px",marginBottom:"20px"}},(0,r.yg)(s.A,{title:"Multi-language chat app",link:"https://github.com/momentohq/moderated-chat/",description:"Explore the source code of our live-translation chat app using webhooks.",mdxType:"ReferenceCard"}),(0,r.yg)(s.A,{title:"Use webhooks with API Gateway + Lambda",link:"https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app",description:"Learn how to integrate Momento webhooks with Amazon API Gateway and Lambda functions",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0},4999:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/token-id-webhook-06b7252991e86f2953c2aba0f917efbf.png"}}]);