"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7706],{3043:(e,t,o)=>{o(7294)},7235:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(614),a=o(7294);const i=e=>{let{language:t,code:o}=e;return a.createElement(n.Z,{language:t},o)}},8242:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var n=o(7462),a=(o(7294),o(3905)),i=(o(3043),o(7235));const p={sidebar_position:2,title:"Momento JavaScript web SDK",pagination_prev:null,sidebar_label:"JS Web SDK",description:"Momento web SDK \u306b\u95a2\u3059\u308b\u60c5\u5831\u3067\u3059\u3002"},l="Momento web SDK for JavaScript \u3092\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067",m={unversionedId:"topics/develop/sdks/web/index",id:"topics/develop/sdks/web/index",title:"Momento JavaScript web SDK",description:"Momento web SDK \u306b\u95a2\u3059\u308b\u60c5\u5831\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/sdks/web/index.md",sourceDirName:"topics/develop/sdks/web",slug:"/topics/develop/sdks/web/",permalink:"/ja/topics/develop/sdks/web/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/sdks/web/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Momento JavaScript web SDK",pagination_prev:null,sidebar_label:"JS Web SDK",description:"Momento web SDK \u306b\u95a2\u3059\u308b\u60c5\u5831\u3067\u3059\u3002"},sidebar:"topicsSidebar",next:{title:"Python",permalink:"/ja/topics/develop/sdks/python/"}},s={},d=[{value:"\u5fc5\u8981\u6761\u4ef6",id:"\u5fc5\u8981\u6761\u4ef6",level:2},{value:"\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30bd\u30fc\u30b9",level:2},{value:"Momento web SDK \u3068 Momento Topics",id:"momento-web-sdk-\u3068-momento-topics",level:2},{value:"\u30d6\u30e9\u30a6\u30b6\u3067 web SDK \u3092\u4f7f\u3046",id:"\u30d6\u30e9\u30a6\u30b6\u3067-web-sdk-\u3092\u4f7f\u3046",level:2},{value:"\u30d6\u30e9\u30a6\u30b6\u306e\u305f\u3081\u306e\u8a8d\u8a3c\u60c5\u5831",id:"\u30d6\u30e9\u30a6\u30b6\u306e\u305f\u3081\u306e\u8a8d\u8a3c\u60c5\u5831",level:2},{value:"\u3088\u304f\u3042\u308b\u8cea\u554f",id:"\u3088\u304f\u3042\u308b\u8cea\u554f",level:2}],r={toc:d},k="wrapper";function c(e){let{components:t,...p}=e;return(0,a.kt)(k,(0,n.Z)({},r,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-web-sdk-for-javascript-\u3092\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067"},"Momento web SDK for JavaScript \u3092\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067"),(0,a.kt)("p",null,"Momento \u306f 2\u3064\u306e JavaScript SDK \u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("a",{parentName:"p",href:"/ja/topics/develop/sdks/nodejs/"},"1\u3064\u306f Node.js \u7528"),"\u3067\u3001\u3082\u3046\u4e00\u3064\u304c\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528\u3067\u3059\u30022\u3064\u306e SDK \u306f\u540c\u4e00\u306e API \u3092\u6301\u3063\u3066\u3044\u308b\u306e\u3067\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"import")," \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3092\u9664\u3051\u3070\u30b3\u30fc\u30c9\u306f\u540c\u3058\u306b\u898b\u3048\u308b\u3068\u601d\u3044\u307e\u3059\u304c\u3001\u88cf\u5074\u3067\u306f\u7570\u306a\u308b JavaScript \u5b9f\u884c\u74b0\u5883\u306b\u5bfe\u3057\u3066\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6700\u9069\u5316\u3084\u4e92\u63db\u6027\u3092\u6c42\u3081\u3066\u69cb\u7bc9\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"Node.js SDK \u306f\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u6700\u9069\u3067\u3059\u3002\u4e00\u65b9\u3001Momento web SDK \u306f\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067\u5b9f\u884c\u3055\u308c Momento \u306e\u30b5\u30fc\u30d3\u30b9\u3068\u76f4\u63a5\u901a\u4fe1\u3059\u308b JavaScript \u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u3066\u304f\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u3063\u3066\u30d6\u30e9\u30a6\u30b6\u3068 Momento \u306e\u9593\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3084\u30d1\u30d6/\u30b5\u30d6\u306e\u547c\u51fa\u3057\u3092\u4ef2\u4ecb\u3059\u308b\u30a6\u30a7\u30d6\u30b5\u30fc\u30d3\u30b9\u3092\u81ea\u8eab\u3067\u69cb\u7bc9\u3057\u305f\u308a\u904b\u7528\u3059\u308b\u5178\u578b\u7684\u306a\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u3092\u56de\u907f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u307e\u305f\u3001\u30a6\u30a7\u30d6\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306b\u304a\u3044\u30661\u30db\u30c3\u30d7\u6e1b\u3089\u305b\u308b\u3053\u3068\u3092\u610f\u5473\u3059\u308b\u306e\u3067\u3001\u30d6\u30e9\u30a6\u30b6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3088\u308a\u826f\u3044\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3055\u3048\u3082\u5f97\u3089\u308c\u307e\u3059\u3002\u4e21\u65b9\u306e\u610f\u5473\u3067\u304a\u5f97\u3067\u3059\uff01"),(0,a.kt)("p",null,"\u307e\u305f\u3001web SDK \u306f Node.js \u4ee5\u5916\u306e JavaScript \u74b0\u5883\u3067\u3082\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("p",null,"Momento web SDK \u306f ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gomomento/sdk-web"},(0,a.kt)("inlineCode",{parentName:"a"},"@gomomento/sdk-web"))," \u3067 npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f GitHub \u4e0a\u306e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"momentohq/client-sdk-javascript")," \u306b\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u5fc5\u8981\u6761\u4ef6"},"\u5fc5\u8981\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Momento API Key\u306f\u5fc5\u8981\u3067\u3059\u3002",(0,a.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web \u30b3\u30f3\u30bd\u30fc\u30eb"),"\u3067\u53d6\u5f97\u53ef\u80fd\u3067\u3059\u3002")),(0,a.kt)("h2",{id:"\u30ea\u30bd\u30fc\u30b9"},"\u30ea\u30bd\u30fc\u30b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/topics/develop/sdks/nodejs/cheat-sheet"},"Momento Node.js \u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"),": \u3053\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u306f Node.js SDK \u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3057\u3066\u3044\u307e\u3059\u304c\u3001web SDK API \u306f\u5b8c\u5168\u306b\u4e92\u63db\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/example-chat-app"},"\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u306e\u4f8b"),": web SDK \u3092\u4f7f\u3063\u3066\u4f5c\u3089\u308c\u305f\u5b8c\u5168\u6a5f\u80fd\u306e\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\uff01\n",(0,a.kt)("img",{alt:"\u30c1\u30e3\u30c3\u30c8\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:o(5677).Z,width:"761",height:"718"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/README.md"},"Web SDK \u306e\u4f8b"),": web SDK \u3092\u3069\u306e\u69d8\u306b\u4f7f\u3046\u304b\u3092\u793a\u3057\u305f\u52d5\u4f5c\u53ef\u80fd\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f8b\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u307e\u3082\u306a\u304f: \u30b3\u30fc\u30c9\u3092\u672c\u756a\u74b0\u5883\u306b\u6301\u3063\u3066\u3044\u304f: web SDK \u3067\u306e\u8a2d\u5b9a\u3068\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0")),(0,a.kt)("h2",{id:"momento-web-sdk-\u3068-momento-topics"},"Momento web SDK \u3068 Momento Topics"),(0,a.kt)("p",null,"Momento Topics \u3092\u4f7f\u3048\u3070\u30d6\u30e9\u30a6\u30b6\u5185\u3067\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e3\u30fc\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u30fc\u306e\u901a\u4fe1\u3092\u3068\u3066\u3082\u7c21\u7d20\u5316\u3057\u3066\u304f\u308c\u307e\u3059\u3002\u4f1d\u7d71\u7684\u306b\u306f\u3001\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u57cb\u3081\u8fbc\u307e\u308c\u305f\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u8005\u3092\u4f8b\u3068\u3059\u308b\u3068\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u305f\u3081\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b3\u30fc\u30c9\u3060\u3051\u3067\u306a\u304f\u3001\u5168\u3066\u306e\u901a\u4fe1\u3092\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9\u3082\u958b\u767a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"Momento Topics \u3092 Momento web SDK \u4f7f\u3063\u3066\u7d44\u307f\u8fbc\u3080\u3053\u3068\u3067\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u8907\u96d1\u3055\u3092\u53d6\u308a\u9664\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u958b\u767a\u8005\u306f\u30d6\u30e9\u30a6\u30b6\u304b\u3089\u76f4\u63a5 Momento Topics \u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3055\u308c\u308c\u3070\u3001Momento \u304c\u5168\u3066\u306e\u901a\u4fe1\u306e\u9762\u5012\u3092\u307f\u3066\u304f\u308c\u3066\u3001WebSocket \u306e\u305f\u3081\u306e\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u30a4\u30f3\u30d5\u30e9\u3092\u4f5c\u308b\u5fc5\u8981\u6027\u3092\u306a\u304f\u3057\u3066\u304f\u308c\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30d6\u30e9\u30a6\u30b6\u3067-web-sdk-\u3092\u4f7f\u3046"},"\u30d6\u30e9\u30a6\u30b6\u3067 web SDK \u3092\u4f7f\u3046"),(0,a.kt)("p",null,"API \u547c\u51fa\u3057\u306f ",(0,a.kt)("a",{parentName:"p",href:"/ja/topics/develop/sdks/nodejs/cheat-sheet"},"Momento Node.js SDK \u3068\u540c\u4e00"),"\u3067\u3059\u304c\u3001, import/require \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u306f Node.js SDK \u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"@gomomento/sdk")," \u306e\u4ee3\u308f\u308a\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"@gomomento/sdk-web")," \u30d1\u30c3\u30b1\u30fc\u30b8\u3092 npm \u304b\u3089\u4f7f\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u3061\u3089\u304c\u3001web SDK \u306e import \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u306e\u4f8b\u3067\u3059:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import {CacheClient} from \u2018@gomomento/sdk-web\u2019;")),(0,a.kt)("h2",{id:"\u30d6\u30e9\u30a6\u30b6\u306e\u305f\u3081\u306e\u8a8d\u8a3c\u60c5\u5831"},"\u30d6\u30e9\u30a6\u30b6\u306e\u305f\u3081\u306e\u8a8d\u8a3c\u60c5\u5831"),(0,a.kt)("p",null,"\u30d6\u30e9\u30a6\u30b6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c Momento \u30b5\u30fc\u30d3\u30b9\u3068\u901a\u4fe1\u3059\u308b\u305f\u3081\u306b\u3001Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u30d6\u30e9\u30a6\u30b6\u306b\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u63a8\u5968\u3068\u3057\u3066\u306f\u3001Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u30d6\u30e9\u30a6\u30b6\u30bb\u30c3\u30b7\u30e7\u30f3\u6bce\u306b\u671f\u9650\u5207\u308c\u306b\u306a\u308b\u3088\u3046\u306b\u3059\u308b\u3068\u826f\u3044\u3067\u3059\u3002\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u3001\u30c7\u30fc\u30bf\u304c\u5371\u967a\u306b\u6652\u3055\u308c\u308b\u3053\u3068\u3092\u5fc3\u914d\u305b\u305a\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30c8\u30fc\u30af\u30f3\u3092\u914d\u5e03\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d6\u30e9\u30a6\u30b6\u3067\u5229\u7528\u3059\u308b\u305f\u3081\u306e Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u4e00\u822c\u7684\u306b\u306f Node.js SDK \u306e\u69d8\u306a\u4ed6\u306e Momento SDK \u3092\u4f7f\u3063\u305f\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u7acb\u3066\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u307e\u305a\u3001Momento ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthClient")," \u3092\u751f\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"),(0,a.kt)(i.Z,{language:"javascript",code:"new AuthClient({\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("p",null,"\u305d\u3046\u3057\u305f\u3089\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"generateAuthToken")," API \u3092\u4f7f\u3063\u3066\u3001\u30d6\u30e9\u30a6\u30b6\u306b\u63d0\u4f9b\u3059\u308b\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059:"),(0,a.kt)(i.Z,{language:"javascript",code:"",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("p",null,"\u4ed6\u306b\u3082\u3001\u8a8d\u53ef\u306e\u305f\u3081\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenScope")," \u3084\u3001\u671f\u9650\u5207\u308c\u306e\u30c8\u30fc\u30af\u30f3\u3092\u3069\u3046\u3084\u3063\u3066\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3059\u308b\u304b\u3001\u306a\u3069\u3092\u542b\u3081\u305f Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u306b\u95a2\u3059\u308b\u60c5\u5831\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/topics/develop/authentication/"},"Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u3046"),"\u3092\u3054\u89a7\u4e0b\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"\u3088\u304f\u3042\u308b\u8cea\u554f"},"\u3088\u304f\u3042\u308b\u8cea\u554f"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u30d6\u30e9\u30a6\u30b6\u304b\u3089\u306e\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306f\u6697\u53f7\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u304b\uff1f"),"Momento \u30b5\u30fc\u30d3\u30b9\u306e\u5168\u3066\u306e\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3068\u540c\u69d8\u306b\u3001web SDK \u306f\u7d4c\u8def\u4e0a\u306f\u5168\u3066\u6697\u53f7\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u52a0\u3048\u308b\u3068\u3001SDK \u306f TLS 1.2+ \u6697\u53f7\u5316\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002"))}c.isMDXComponent=!0},5677:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/web-sdk-chat-app-8513418f0aa0739e6032b83489bb8882.png"}}]);