"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4540],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var o=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,y=m["".concat(l,".").concat(k)]||m[k]||c[k]||s;return n?o.createElement(y,a(a({ref:t},d),{},{components:n})):o.createElement(y,a({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=k;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:i,a[1]=r;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var o=n(8168),i=n(6540),s=n(5680);const a={card:"card_WUDs",cardLink:"cardLink_rYck",cardContent:"cardContent_UCXZ",imageCardContent:"imageCardContent_E5wX",cardDescription:"cardDescription_S2tZ",cardImage:"cardImage_zjC4",navigationIcon:"navigationIcon_mUHh",alphaTag:"alphaTag_yL43"};var r=n(4328);const l=e=>{let{text:t,link:n,imgSrc:o,altText:s,openInNewTab:l=!1,isAlpha:p=!1}=e;return o&&s?i.createElement("div",{className:a.card},i.createElement("a",{href:n,target:l?"_blank":"_self",className:a.cardLink},i.createElement("div",{className:a.imageCardContent},i.createElement("img",{src:o,alt:s,className:a.image}),p&&i.createElement("span",{className:a.alphaTag},"Alpha")))):i.createElement("div",{className:a.card},i.createElement("a",{href:n,target:l?"_blank":"_self",className:a.cardLink},i.createElement("div",{className:a.cardContent},i.createElement("div",{className:a.cardDescription},t),l?i.createElement(r.rDs,{className:a.navigationIcon}):i.createElement(r.Fx8,{className:a.navigationIcon}))))},p={title:"Find the Right Momento SDK for your Language and Use Case",description:"Momento provides SDKs for a wide variety of languages and target platforms. Find the right SDK for your use case!",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","python","go","php","java","kotlin","android","jvm","rust","ruby","elixir","swift","ios","dart","flutter","dotnet",".net","c#","csharp","c-sharp"]},d="Momento SDKs",m={unversionedId:"sdks/index",id:"sdks/index",title:"Find the Right Momento SDK for your Language and Use Case",description:"Momento provides SDKs for a wide variety of languages and target platforms. Find the right SDK for your use case!",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/index.md",sourceDirName:"sdks",slug:"/sdks/",permalink:"/ja/sdks/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/index.md",tags:[],version:"current",frontMatter:{title:"Find the Right Momento SDK for your Language and Use Case",description:"Momento provides SDKs for a wide variety of languages and target platforms. Find the right SDK for your use case!",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","python","go","php","java","kotlin","android","jvm","rust","ruby","elixir","swift","ios","dart","flutter","dotnet",".net","c#","csharp","c-sharp"]}},c={},k=[{value:"Client-Side SDKs",id:"client-side-sdks",level:2},{value:"Web SDK (Browser)",id:"web-sdk-browser",level:3},{value:"Swift SDK (iOS)",id:"swift-sdk-ios",level:3},{value:"Kotlin SDK (Android)",id:"kotlin-sdk-android",level:3},{value:"Dart SDK (Flutter)",id:"dart-sdk-flutter",level:3},{value:"Server-Side SDKs",id:"server-side-sdks",level:2},{value:"Node.js SDK",id:"nodejs-sdk",level:3},{value:".NET SDK (C#)",id:"net-sdk-c",level:3},{value:"Python SDK",id:"python-sdk",level:3},{value:"Java SDK",id:"java-sdk",level:3},{value:"Kotlin SDK (JVM)",id:"kotlin-sdk-jvm",level:3},{value:"Go SDK",id:"go-sdk",level:3},{value:"PHP SDK",id:"php-sdk",level:3},{value:"Elixir SDK",id:"elixir-sdk",level:3},{value:"Rust SDK",id:"rust-sdk",level:3},{value:"Ruby SDK",id:"ruby-sdk",level:3}],y={toc:k},u="wrapper";function x(e){let{components:t,...n}=e;return(0,s.yg)(u,(0,o.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"momento-sdks"},"Momento SDKs"),(0,s.yg)("p",null,"Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30e2\u30d0\u30a4\u30eb \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30b5\u30fc\u30d0\u30fc \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u3044\u305a\u308c\u3092\u69cb\u7bc9\u3057\u3066\u3044\u308b\u304b\u306b\u95a2\u4fc2\u306a\u304f\u3001\u304a\u6c17\u306b\u5165\u308a\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3067 Momento Cache \u304a\u3088\u3073 Momento Topics \u3068\u5bfe\u8a71\u3059\u308b\u30b3\u30fc\u30c9\u3092\u8a18\u8ff0\u3057\u307e\u3059\uff01"),(0,s.yg)("h2",{id:"client-side-sdks"},"Client-Side SDKs"),(0,s.yg)("p",null,"Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9SDK\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u76f4\u63a5Momento Cache\u3084Momento Topics\u3092\u64cd\u4f5c\u3067\u304d\u307e\u3059\uff01\u308f\u305a\u304b\u6570\u884c\u306e\u30b3\u30fc\u30c9\u3067\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u540c\u58eb\u304c\u901a\u4fe1\u3067\u304d\u308b\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u305d\u306e\u4ed6\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u6a5f\u80fd\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\uff01"),(0,s.yg)("h3",{id:"web-sdk-browser"},"Web SDK (Browser)"),(0,s.yg)("p",null,"Momento Web SDK\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001TypeScript\u307e\u305f\u306fJavaScript\u3067\u30ea\u30c3\u30c1\u306a\u30d6\u30e9\u30a6\u30b6\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/web",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/nodejs/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Topics",link:"/sdks/nodejs/topics.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Vector Index",link:"/sdks/nodejs/vector-index.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"API Tokens",link:"/sdks/web#credentials-for-browsers",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://www.npmjs.com/package/@gomomento/sdk-web",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-javascript",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"swift-sdk-ios"},"Swift SDK (iOS)"),(0,s.yg)("p",null,"Momento Swift SDK\u3092\u4f7f\u7528\u3057\u3066\u30cd\u30a4\u30c6\u30a3\u30d6iOS\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/swift",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/swift/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Topics",link:"/sdks/swift/topics.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-swift/tree/main/Examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://github.com/momentohq/client-sdk-swift/releases",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-swift",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"kotlin-sdk-android"},"Kotlin SDK (Android)"),(0,s.yg)("p",null,"Momento Kotlin SDK\u3092\u4f7f\u7528\u3057\u3066\u30cd\u30a4\u30c6\u30a3\u30d6Android\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/kotlin",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/kotlin/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Topics",link:"/sdks/kotlin/topics.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/README.md",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-kotlin",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"dart-sdk-flutter"},"Dart SDK (Flutter)"),(0,s.yg)("p",null,"Flutter\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067Momento Cache\u3068Topics\u3092\u4f7f\u3048\u3070\u3001\u5358\u4e00\u306e\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u3067\u30d6\u30e9\u30a6\u30b6\u3001iOS\u3001Android\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3067\u304d\u308b\u3002"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/dart",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/dart/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Topics",link:"/sdks/dart/topics.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-dart/tree/main/example",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://pub.dev/packages/momento",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-dart",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h2",{id:"server-side-sdks"},"Server-Side SDKs"),(0,s.yg)("p",null,"Momento\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9SDK\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089Momento\u306e\u4f4e\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u30c8\u30d4\u30c3\u30af\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u3001\u53ef\u80fd\u306a\u9650\u308a\u6700\u9ad8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3068\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u3088\u3046\u306b\u8abf\u6574\u3055\u308c\u3066\u304a\u308a\u3001\u4ed6\u306e\u591a\u304f\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3088\u308a\u3082\u306f\u308b\u304b\u306b\u5c11\u306a\u3044TCP\u63a5\u7d9a\u3067\u6e08\u307f\u307e\u3059\u3002"),(0,s.yg)("h3",{id:"nodejs-sdk"},"Node.js SDK"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/nodejs",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/nodejs/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Topics",link:"/sdks/nodejs/topics.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Vector Index",link:"/sdks/nodejs/vector-index.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-nodejs/tree/main/examples/nodejs",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://www.npmjs.com/package/@gomomento/sdk",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-javascript",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"net-sdk-c"},".NET SDK (C#)"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/dotnet",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/dotnet/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Topics",link:"/sdks/dotnet/topics.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-dotnet/tree/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://www.nuget.org/packages/Momento.Sdk",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-dotnet",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"python-sdk"},"Python SDK"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/python",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/python/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Topics",link:"/sdks/python/topics.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Vector Index",link:"/sdks/python/vector-index.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-python/tree/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://pypi.org/project/momento/",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-python",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"java-sdk"},"Java SDK"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/java",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/java/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Topics",link:"/sdks/java/topics.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-java/tree/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-java",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"kotlin-sdk-jvm"},"Kotlin SDK (JVM)"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/kotlin",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/kotlin/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Topics",link:"/sdks/kotlin/topics.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/README.md",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-kotlin",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"go-sdk"},"Go SDK"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/go",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/go/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Topics",link:"/sdks/go/topics.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-go/blob/main/examples/README.md",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://github.com/momentohq/client-sdk-go/releases",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-go",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"php-sdk"},"PHP SDK"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/php",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/php/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-php/blob/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://packagist.org/packages/momentohq/client-sdk-php",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-php",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"elixir-sdk"},"Elixir SDK"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/elixir",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Cache",link:"/sdks/elixir/cache.html",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-elixir/blob/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://hex.pm/packages/gomomento",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-elixir",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"rust-sdk"},"Rust SDK"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/rust",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-rust/blob/main/example",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://crates.io/crates/momento",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-rust",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.yg)("h3",{id:"ruby-sdk"},"Ruby SDK"),(0,s.yg)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.yg)(l,{text:"Overview",link:"/sdks/ruby",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Examples",link:"https://github.com/momentohq/client-sdk-ruby/blob/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Packages",link:"https://rubygems.org/gems/momento",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.yg)(l,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-ruby",openInNewTab:"true",mdxType:"LinkButton"})))}x.isMDXComponent=!0}}]);