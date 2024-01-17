"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),k=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=k(e.components);return o.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=k(n),c=a,u=m["".concat(p,".").concat(c)]||m[c]||h[c]||r;return n?o.createElement(u,l(l({ref:t},s),{},{components:n})):o.createElement(u,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var k=2;k<r;k++)l[k]=n[k];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:6,title:"Webhook API reference information",sidebar_label:"Webhooks",description:"Learn the Webhook API calls you need to know about and how to use them with Momento services."},l="Webhook API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",i={unversionedId:"topics/develop/api-reference/webhooks",id:"topics/develop/api-reference/webhooks",title:"Webhook API reference information",description:"Learn the Webhook API calls you need to know about and how to use them with Momento services.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/api-reference/webhooks.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/webhooks",permalink:"/ja/topics/develop/api-reference/webhooks",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/webhooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Webhook API reference information",sidebar_label:"Webhooks",description:"Learn the Webhook API calls you need to know about and how to use them with Momento services."},sidebar:"topicsSidebar",previous:{title:"Topics (Pub/Sub)",permalink:"/ja/topics/develop/api-reference/"},next:{title:"Auth",permalink:"/ja/topics/develop/api-reference/auth"}},p={},k=[{value:"Put Webhook API",id:"put-webhook-api",level:2},{value:"\u4f8b",id:"\u4f8b",level:3},{value:"List Webhook API",id:"list-webhook-api",level:2},{value:"\u4f8b",id:"\u4f8b-1",level:3},{value:"Delete Webhook API",id:"delete-webhook-api",level:2},{value:"\u4f8b",id:"\u4f8b-2",level:3},{value:"Get Webhook Secret API",id:"get-webhook-secret-api",level:2},{value:"\u4f8b",id:"\u4f8b-3",level:3},{value:"Webhook object",id:"webhook-object",level:2},{value:"WebhookId object",id:"webhookid-object",level:2},{value:"WebhookDestination object",id:"webhookdestination-object",level:2},{value:"FAQ",id:"faq",level:2}],s={toc:k};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webhook-api-\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"},"Webhook API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),(0,a.kt)("img",{src:"/img/topics/webhooks-page.png",width:"90%",alt:"minified javascript code with the text 'Trigger the hook'"}),(0,a.kt)("p",null,"Webhook\u306f\u3001\u30c8\u30d4\u30c3\u30af\u4e0a\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4f7f\u3046\u305f\u3081\u306b\u8ffd\u52a0\u3055\u308c\u305f\u65b9\u6cd5\u3067\u3059\u3002Webhook \u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u30c8\u30d4\u30c3\u30af\u306b\u30a2\u30bf\u30c3\u30c1\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u308b\u3068\u3001Webhook \u30b3\u30fc\u30eb\u30d0\u30c3\u30af url \u306b\u9001\u4fe1 http \u30b3\u30fc\u30eb\u304c POST \u3055\u308c\u307e\u3059\u3002Webhook\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u3001Momento\u304c\u30ea\u30af\u30a8\u30b9\u30c8\u3092POST\u3067\u304d\u308b\u3088\u3046\u306b\u4e00\u822c\u306b\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u53d7\u4fe1\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001\u5143\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u3057\u3066\u7a7a\u306e HTTP 2xx \u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u30025 \u79d2\u4ee5\u5185\u306b\u78ba\u8a8d\u304c\u53d6\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u524a\u9664\u3057\u3066\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3068\u3057\u307e\u3059\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Webhook \u306b\u9001\u4fe1\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308c\u3070\u53d7\u4fe1\u53ef\u80fd\u3067\u3059\u3002")),(0,a.kt)("h2",{id:"put-webhook-api"},"Put Webhook API"),(0,a.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f webhook \u3067\u65b0\u3057\u3044 webhook \u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"webhook"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#webhook-object"},"Webhook")),(0,a.kt)("td",{parentName:"tr",align:null},"The webhook object to be created.")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secretString"),": string - the signing secret for the webhook"))),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/topics/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Webhook \u306f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u66f4\u65b0\u3068\u901a\u77e5\u306b\u4e0d\u53ef\u6b20\u3067\u3059\u3002\u6210\u529f\u6642\u306b\u6e21\u3055\u308c\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"secretString")," \u306f\u3001Webhook \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u306e\u3067\u3001\u5b89\u5168\u306b\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h3",{id:"\u4f8b"},"\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const exampleWebhook: Webhook = {\n  id: {\n    cacheName: 'exampleCache',\n    webhookName: 'exampleWebhook',\n  },\n  topicName: 'exampleTopic',\n  destination: new PostUrlWebhookDestination('https://example.com/webhook'),\n};\n\nconst result = await webhookClient.putWebhook(exampleWebhook);\nif (result instanceof PutWebhook.Success) {\n  console.log('Webhook created successfully. Secret:', result.secret);\n} else {\n  console.error('Error creating webhook:', result.error.message);\n}\n")),(0,a.kt)("h2",{id:"list-webhook-api"},"List Webhook API"),(0,a.kt)("p",null,"\u7279\u5b9a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306eWebhook\u306e\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cache"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Webhook\u306e\u4e00\u89a7\u3092\u8868\u793a\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"webhooks"),": array of ",(0,a.kt)("a",{parentName:"li",href:"#webhook-object"},"Webhook")," - the list of webhooks for the specified cache."))),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/topics/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"List Webhook API \u306f\u3001Webhook \u306e\u6700\u65b0\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u983b\u5ea6\u3067\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u4e0d\u8981\u306a API \u547c\u3073\u51fa\u3057\u3092\u6e1b\u3089\u3057\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b\u305f\u3081\u306b\u3001\u7d50\u679c\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h3",{id:"\u4f8b-1"},"\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const cacheName: string = 'exampleCache';\n\nconst result = await webhookClient.listWebhooks(cacheName);\nif (result instanceof ListWebhooks.Success) {\n  console.log('Webhooks retrieved successfully:', result.webhooks);\n} else {\n  console.error('Error retrieving webhooks:', result.error.message);\n}\n")),(0,a.kt)("h2",{id:"delete-webhook-api"},"Delete Webhook API"),(0,a.kt)("p",null,"\u6307\u5b9a\u3057\u305f\u8b58\u5225\u5b50\u306eWebhook\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#webhookid-object"},"WebhookId")),(0,a.kt)("td",{parentName:"tr",align:null},"\u524a\u9664\u3059\u308bWebhook\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No additional data on success."))),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/topics/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Webhook \u304c\u524a\u9664\u3055\u308c\u308b\u3068\u3001\u305d\u306e Webhook \u306f\u30a2\u30af\u30c6\u30a3\u30d6\u3067\u306f\u306a\u304f\u306a\u308a\u3001\u524a\u9664\u3055\u308c\u305f Webhook \u3078\u306e\u53d7\u4fe1\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"\u4f8b-2"},"\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const webhookId: WebhookId = {\n  cacheName: 'exampleCache',\n  webhookName: 'exampleWebhook',\n};\n\nconst result = await webhookClient.deleteWebhook(webhookId);\nif (result instanceof DeleteWebhook.Success) {\n  console.log('Webhook deleted successfully');\n} else {\n  console.error('Error deleting webhook:', result.error.message);\n}\n")),(0,a.kt)("h2",{id:"get-webhook-secret-api"},"Get Webhook Secret API"),(0,a.kt)("p",null,"\u7279\u5b9a\u306eWebhook\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u79d8\u5bc6\u306e\u6587\u5b57\u5217\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#webhookid-object"},"WebhookId")),(0,a.kt)("td",{parentName:"tr",align:null},"\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u53d6\u5f97\u3059\u308bWebhook\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50\u3002")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secret"),": string - the signing secret for the webhook."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"webhookName"),": string - the name of the webhook."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cacheName"),": string - the name of the cache associated with the webhook."))),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/topics/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7f72\u540d\u79d8\u5bc6\u306f\u3001\u53d7\u4fe1\u3059\u308bWebhook\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u306b\u4e0d\u53ef\u6b20\u3067\u3059\u3002\u53d6\u5f97\u3057\u305f\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u5b89\u5168\u306b\u4fdd\u7ba1\u30fb\u7ba1\u7406\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h3",{id:"\u4f8b-3"},"\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const webhookId: WebhookId = {\n  cacheName: 'exampleCache',\n  webhookName: 'exampleWebhook',\n};\n\nconst result = await webhookClient.getWebhookSecret(webhookId);\nif (result instanceof GetWebhookSecret.Success) {\n  console.log('Webhook secret retrieved successfully:', result.secret);\n} else {\n  console.error('Error retrieving webhook secret:', result.error.message);\n}\n")),(0,a.kt)("h2",{id:"webhook-object"},"Webhook object"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Webhook")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001Webhook \u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#webhookid-object"},"WebhookId")),(0,a.kt)("td",{parentName:"tr",align:null},"Webhook\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"destination"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#webhookdestination-object"},"WebhookDestination")),(0,a.kt)("td",{parentName:"tr",align:null},"webhook\u30da\u30a4\u30ed\u30fc\u30c9\u306e\u9001\u4fe1\u5148\u3002\u30d1\u30d6\u30ea\u30c3\u30af\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topicName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Webhook \u304c\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3055\u308c\u3066\u3044\u308b\u30c8\u30d4\u30c3\u30af\u306e\u540d\u524d\u3002")))),(0,a.kt)("h2",{id:"webhookid-object"},"WebhookId object"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebhookId")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306fWebhook\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50\u3092\u8868\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Webhook\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"webhookName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Webhook\u306e\u540d\u524d\u3002")))),(0,a.kt)("h2",{id:"webhookdestination-object"},"WebhookDestination object"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebhookDestination")," object\u306f\u3001Webhook \u30da\u30a4\u30ed\u30fc\u30c9\u306e\u9001\u4fe1\u5148\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u4fdd\u6301\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"postUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP POST\u3092\u4f7f\u7528\u3057\u3066\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u9001\u4fe1\u3059\u308bURL\u3002")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u53d7\u4fe1\u3057\u305fWebhook\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u691c\u8a3c\u3059\u308b\u306b\u306f\uff1f"),(0,a.kt)("p",null,"\u4f5c\u6210\u3055\u308c\u305fWebhook\u306b\u306f\u3001\u305d\u308c\u305e\u308c\u56fa\u6709\u306e\u7f72\u540d\u79d8\u5bc6\u304c\u4ed8\u4e0e\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u7f72\u540d\u79d8\u5bc6\u3092\u4f7f\u3063\u3066\u3001\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u304cMomento\u304b\u3089\u6765\u305f\u3082\u306e\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Momento \u304c\u9001\u4fe1\u3059\u308b\u5404 HTTP \u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"momento-signature")," \u30d8\u30c3\u30c0\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u3053\u306e\u7f72\u540d\u306f\u3001\u6a19\u6e96\u7684\u306a HMAC \u30cf\u30c3\u30b7\u30e5\u3092\u4f7f\u3063\u3066\u7f72\u540d\u79d8\u5bc6\u3068\u30ea\u30af\u30a8\u30b9\u30c8\u672c\u6587\u3092\u7d50\u5408\u3059\u308b\u3053\u3068\u3067\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u691c\u8a3c\u306e\u30b9\u30c6\u30c3\u30d7"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u30ea\u30af\u30a8\u30b9\u30c8\u304b\u3089 ",(0,a.kt)("inlineCode",{parentName:"li"},"momento-signature")," \u30d8\u30c3\u30c0\u3092\u53d6\u5f97\u3057\u3001Webhook \u306e\u7f72\u540d\u79d8\u5bc6\u9375\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002(\u79d8\u5bc6\u9375\u4fdd\u7ba1\u5eab\u307e\u305f\u306f\u74b0\u5883\u5909\u6570\u306b\u683c\u7d0d)\u3002"),(0,a.kt)("li",{parentName:"ol"},"HMAC SHA3-256\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u3092\u30cf\u30c3\u30b7\u30e5\u5316\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8a08\u7b97\u3055\u308c\u305f\u7f72\u540d\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u306e ",(0,a.kt)("inlineCode",{parentName:"li"},"momento-signature")," \u30d8\u30c3\u30c0\u30fc\u3068\u6bd4\u8f03\u3057\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as crypto from 'crypto';\n\nconst didRequestComeFromMomento = (req: Request): boolean => {\n  const hash = crypto.createHmac(\"SHA3-256\", \"the signing secret\");\n  const hashed = hash.update(req.rawBody).digest('hex');\n  return hashed === req.headers['momento-signature'];\n}\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"POST\u306ebody\u69cb\u9020\u306f\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  cache: string;\n  topic: string;\n  event_timestamp: number;\n  publish_timestamp: number;\n  topic_sequence_number: number;\n  token_id: string; // is an empty string if the message was published with an api key that does not contain a token_id\n  text: string; // this is the message that was published\n}\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Webhook\u306e\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f"),(0,a.kt)("p",null,"Webhook\u306eURL\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u3066\u6709\u52b9\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3088\u304f\u3042\u308b\u554f\u984c\u3068\u3057\u3066\u306f\u3001\u9593\u9055\u3063\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u3084\u30c8\u30d4\u30c3\u30af\u540d\u3001\u3042\u308b\u3044\u306f\u63d0\u4f9b\u3055\u308c\u305f ",(0,a.kt)("inlineCode",{parentName:"p"},"postUrl")," \u306e\u554f\u984c\u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("p",null,"\u3053\u3053\u306b\u306a\u3044\u8cea\u554f\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/2c24SK6W"},"\u79c1\u305f\u3061\u306eDiscord\u30b5\u30fc\u30d0\u30fc"),"\u306b\u9023\u7d61\u3057\u3001\u30b5\u30dd\u30fc\u30c8\u30c1\u30e3\u30f3\u30cd\u30eb\u3067\u79c1\u305f\u3061\u306e\u5c02\u9580\u5bb6\u306b\u8cea\u554f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}h.isMDXComponent=!0}}]);