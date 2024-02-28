"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5324],{3043:(e,t,n)=>{n(7294)},7235:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(614),a=n(7294);const i=e=>{let{language:t,code:n}=e;return a.createElement(o.Z,{language:t},n)}},6671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=n(7462),a=(n(7294),n(3905)),i=(n(3043),n(7235));const s={sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Cache in your native Android applications, or your JVM server-side applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","mobile","kotlin","jvm","java"]},r="Kotlin\u3067Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u59cb\u3081\u308b",c={unversionedId:"sdks/kotlin/cache",id:"sdks/kotlin/cache",title:"Getting started with Momento Cache in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Cache in your native Android applications, or your JVM server-side applications.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/kotlin/cache.mdx",sourceDirName:"sdks/kotlin",slug:"/sdks/kotlin/cache",permalink:"/ja/sdks/kotlin/cache",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/kotlin/cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Cache in your native Android applications, or your JVM server-side applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","mobile","kotlin","jvm","java"]}},l={},p=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"API\u30ad\u30fc\u306e\u8a2d\u5b9a",id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059",level:2},{value:"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002",id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kotlin\u3067momento\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u59cb\u3081\u308b"},"Kotlin\u3067Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u59cb\u3081\u308b"),(0,a.kt)("p",null,"Kotlin\u3068Momento Cache\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30d3\u30eb\u30c9\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3080\u5b8c\u5168\u3067\u5b9f\u7528\u7684\u306a\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples"},"Kotlin SDK examples")," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,a.kt)("p",null,"Momento SDK\u306fMaven Central\u3067\u5165\u624b\u3067\u304d\u307e\u3059: ",(0,a.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk"},"`software.momento.kotlin/sdk"),"\u306b\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk"},"Maven Central"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001SDK\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u898b\u3064\u3051\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"Install the client library in an existing Kotlin project:"),(0,a.kt)("h3",{id:"gradle"},"Gradle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("software.momento.kotlin:sdk:x.x.x")\n')),(0,a.kt)("h3",{id:"maven"},"Maven"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>software.momento.kotlin</groupId>\n    <artifactId>sdk</artifactId>\n    <version>x.x.x</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a"},"API\u30ad\u30fc\u306e\u8a2d\u5b9a"),(0,a.kt)("p",null,"Momento\u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f\u3001Momento API\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002 Momento Web Console](",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches)%E3%81%8B%E3%82%89%E5%8F%96%E5%BE%97%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82"},"https://console.gomomento.com/caches)\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),"\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento API key here>\n")),(0,a.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059"),(0,a.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30e1\u30a4\u30f3\u95a2\u6570\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30dd\u30fc\u30c8\u3001\u304a\u3088\u3073\u4ed6\u306e\u5404\u95a2\u6570\u304c\u547c\u3073\u51fa\u3059\u5fc5\u8981\u306e\u3042\u308b CacheClient \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)(i.Z,{language:"kotlin",code:'package software.momento.example.doc_examples\n\nimport kotlinx.coroutines.runBlocking\nimport software.momento.kotlin.sdk.CacheClient\nimport software.momento.kotlin.sdk.auth.CredentialProvider\nimport software.momento.kotlin.sdk.config.Configurations\nimport software.momento.kotlin.sdk.responses.cache.GetResponse\nimport kotlin.time.Duration.Companion.seconds\n\nfun main() = runBlocking {\n    CacheClient(\n        CredentialProvider.fromEnvVar("MOMENTO_API_KEY"),\n        Configurations.Laptop.latest,\n        60.seconds\n    ).use { client ->\n        //...\n    }\n}\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"},"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)(i.Z,{language:"kotlin",code:'when (val response = cacheClient.createCache("test-cache")) {\n    is CacheCreateResponse.Success -> println("Cache \'test-cache\' created")\n    is CacheCreateResponse.AlreadyExists -> println("Cache \'test-cache\' already exists")\n    is CacheCreateResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to create cache \'test-cache\': ${response.errorCode}", response\n    )\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059"},"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u5358\u7d14\u306a\u30ea\u30b9\u30c8"),(0,a.kt)(i.Z,{language:"kotlin",code:'when (val response: CacheListResponse = cacheClient.listCaches()) {\n    is CacheListResponse.Success -> {\n        val caches: String = response.caches.joinToString("\\n") { cacheInfo -> cacheInfo.name }\n        println("Caches:\\n$caches")\n    }\n\n    is CacheListResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to list caches: ${response.errorCode}", response\n    )\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080"),(0,a.kt)("p",null,"\u30bb\u30c3\u30c8\u64cd\u4f5c\u306e\u7c21\u5358\u306a\u4f8b\u3002client.set\u547c\u3073\u51fa\u3057\u3067\u306f\u3001TTL\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002TTL\u3092\u6e21\u3059\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u30c7\u30d5\u30a9\u30eb\u30c8\u306eTTL\u5024\u304c\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)(i.Z,{language:"kotlin",code:'when (val response = cacheClient.set("test-cache", "test-key", "test-value")) {\n    is SetResponse.Success -> println("Key \'test-key\' stored successfully")\n    is SetResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': ${response.errorCode}",\n        response\n    )\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"),(0,a.kt)("p",null,"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u5358\u7d14\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306e\u4f8b\u3067\u3059\u3002"),(0,a.kt)(i.Z,{language:"kotlin",code:"when (val response = cacheClient.get(\"test-cache\", \"test-key\")) {\n    is GetResponse.Hit -> println(\"Retrieved value for key 'test-key': ${response.value}\")\n    is GetResponse.Miss -> println(\"Key 'test-key' was not found in cache 'test-cache'\")\n    is GetResponse.Error -> throw RuntimeException(\n        \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${response.errorCode}\",\n        response\n    )\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"},"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples"},"Kotlin SDK github repo examples directory"),"\u306b\u5b8c\u5168\u306a\u52d5\u4f5c\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/"},"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);