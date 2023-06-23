"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6648],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(t),u=o,g=h["".concat(i,".").concat(u)]||h[u]||m[u]||a;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=h;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1,sidebar_label:"\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",sidebar_class_name:"sidebar-item-php-cheat-sheet",title:"PHP + Momento Cache \u306e\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"PHP \u3068 Momento Cache \u3092\u4f7f\u3063\u3066\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u5168\u3066"},s="Momento Cache \u3092 PHP \u3067\u4f7f\u3046\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",l={unversionedId:"develop/sdks/php/cheat-sheet",id:"develop/sdks/php/cheat-sheet",title:"PHP + Momento Cache \u306e\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"PHP \u3068 Momento Cache \u3092\u4f7f\u3063\u3066\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u5168\u3066",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/sdks/php/cheat-sheet.md",sourceDirName:"develop/sdks/php",slug:"/develop/sdks/php/cheat-sheet",permalink:"/ja/develop/sdks/php/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/sdks/php/cheat-sheet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",sidebar_class_name:"sidebar-item-php-cheat-sheet",title:"PHP + Momento Cache \u306e\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"PHP \u3068 Momento Cache \u3092\u4f7f\u3063\u3066\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u5168\u3066"},sidebar:"tutorialSidebar",previous:{title:"PHP",permalink:"/ja/develop/sdks/php/"},next:{title:"Ruby",permalink:"/ja/develop/sdks/ruby/"}},i={},p=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"PHP SDK \u3092\u4f7f\u3046\u3088\u3046\u306b composer \u3092\u8a2d\u5b9a",id:"php-sdk-\u3092\u4f7f\u3046\u3088\u3046\u306b-composer-\u3092\u8a2d\u5b9a",level:3},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u5374\u3057\u3066\u63a5\u7d9a\u3059\u308b",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u5374\u3057\u3066\u63a5\u7d9a\u3059\u308b",level:2},{value:"Momento Cache \u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",id:"momento-cache-\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30ea\u30b9\u30c8\u3059\u308b",id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30ea\u30b9\u30c8\u3059\u308b",level:2},{value:"\u9805\u76ee\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080",id:"\u9805\u76ee\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u8aad\u307f\u51fa\u3059",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u8aad\u307f\u51fa\u3059",level:2},{value:"Delete the test cache",id:"delete-the-test-cache",level:2},{value:"\u30c6\u30b9\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u524a\u9664\u3059\u308b",id:"\u30c6\u30b9\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u524a\u9664\u3059\u308b",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-cache-\u3092-php-\u3067\u4f7f\u3046\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"},"Momento Cache \u3092 PHP \u3067\u4f7f\u3046\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"),(0,o.kt)("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento Cache \u3092 PHP \u3067\u7d20\u65e9\u304f\u4f7f\u3063\u3066\u307f\u305f\u3044\u65b9\u306e\u305f\u3081\u306b\u5fc5\u8981\u3068\u306a\u308b\u57fa\u790e\u7684\u306a API \u547c\u51fa\u3057\u3092\u89e3\u8aac\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3088\u308a\u8a73\u3057\u3044\u60c5\u5831\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-php"},"GitHub \u4e0a\u306e PHP SDK")," \u3067\u3054\u78ba\u8a8d\u4e0b\u3055\u3044\u3002"),(0,o.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u5fc5\u8981\u3002",(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-cli"},"Momento CLI")," \u3092\u4f7f\u3063\u3066\u4f5c\u6210\u53ef\u80fd\u3067\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"PHP 8.0 \u4ee5\u4e0a\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc/blob/v1.46.3/src/php/README.md"},"gRPC PHP \u62e1\u5f35\u30e2\u30b8\u30e5\u30fc\u30eb")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getcomposer.org/doc/00-intro.md"},"Composer")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb - PHP \u3067\u3088\u304f\u4f7f\u308f\u308c\u3066\u3044\u308b\u4f9d\u5b58\u7ba1\u7406\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002")),(0,o.kt)("h3",{id:"php-sdk-\u3092\u4f7f\u3046\u3088\u3046\u306b-composer-\u3092\u8a2d\u5b9a"},"PHP SDK \u3092\u4f7f\u3046\u3088\u3046\u306b composer \u3092\u8a2d\u5b9a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"composer.json")," \u30d5\u30a1\u30a4\u30eb\u306b\u79c1\u9054\u306e\u30ec\u30dd\u30b8\u30c8\u30ea\u3092\u8ffd\u52a0\u3057\u3066\u3001\u79c1\u9054\u306eSDK \u3092\u4f9d\u5b58\u3068\u3057\u3066\u8a2d\u5b9a\u3057\u307e\u3059:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "momentohq/client-sdk-php": "1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"composer update")," \u3092\u5b9f\u884c\u3057\u3066\u5fc5\u8981\u306a\u524d\u63d0\u6761\u4ef6\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u5374\u3057\u3066\u63a5\u7d9a\u3059\u308b"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u5374\u3057\u3066\u63a5\u7d9a\u3059\u308b"),(0,o.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u304c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-php/blob/main/examples/example.php"},"\u3053\u3061\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u4f8b"),"\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'<?php\ndeclare(strict_types=1);\n\nrequire "vendor/autoload.php";\n\nuse Momento\\Auth\\CredentialProvider;\nuse Momento\\Cache\\CacheClient;\nuse Momento\\Config\\Configurations\\Laptop;\nuse Momento\\Logging\\StderrLoggerFactory;\nuse Psr\\Log\\LoggerInterface;\n\n$CACHE_NAME = uniqid("php-example-");\n$ITEM_DEFAULT_TTL_SECONDS = 60;\n$KEY = "MyKey";\n$VALUE = "MyValue";\n\n// Setup\n$authProvider = CredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN");\n$configuration = Laptop::latest(new StderrLoggerFactory());\n$client = new CacheClient($configuration, $authProvider, $ITEM_DEFAULT_TTL_SECONDS);\n$logger = $configuration->getLoggerFactory()->getLogger("ex:");\n\nfunction printBanner(string $message, LoggerInterface $logger): void\n{\n    $line = "******************************************************************";\n    $logger->info($line);\n    $logger->info($message);\n    $logger->info($line);\n}\n\nprintBanner("*                      Momento Example Start                     *", $logger);\n')),(0,o.kt)("h2",{id:"momento-cache-\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"},"Momento Cache \u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"),(0,o.kt)("p",null,"\u3053\u306e\u95a2\u6570\u3092\u4f7f\u3063\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$response = $client->createCache($CACHE_NAME);\nif ($response->asSuccess()) {\n    $logger->info("Created cache " . $CACHE_NAME . "\\n");\n} elseif ($response->asError()) {\n    $logger->info("Error creating cache: " . $response->asError()->message() . "\\n");\n    exit;\n} elseif ($response->asAlreadyExists()) {\n    $logger->info("Cache " . $CACHE_NAME . " already exists.\\n");\n}\n')),(0,o.kt)("h2",{id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30ea\u30b9\u30c8\u3059\u308b"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30ea\u30b9\u30c8\u3059\u308b"),(0,o.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001\u4e0a\u3067\u4f5c\u3063\u305f CacheClient \u306e\u95a2\u6570\u3092\u4f7f\u3063\u3066\u3001Momento \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u5168\u3066\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30ea\u30b9\u30c8\u3057\u3066\u3001\u5168\u3066\u306e\u30a8\u30e9\u30fc\u3092\u30c8\u30e9\u30c3\u30d7\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// List cache\n$response = $client->listCaches();\nif ($response->asSuccess()) {\n    $logger->info("SUCCESS: List caches: \\n");\n    foreach ($response->asSuccess()->caches() as $cache) {\n        $cacheName = $cache->name();\n        $logger->info("$cacheName\\n");\n    }\n    $logger->info("\\n");\n} elseif ($response->asError()) {\n    $logger->info("Error listing cache: " . $response->asError()->message() . "\\n");\n    exit;\n}\n')),(0,o.kt)("h2",{id:"\u9805\u76ee\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080"},"\u9805\u76ee\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080"),(0,o.kt)("p",null,"\u66f8\u8fbc\u307f\u64cd\u4f5c\u3092\u884c\u3046\u30b7\u30f3\u30d7\u30eb\u306a\u4f8b\u3067\u3059\u3002client.set \u547c\u51fa\u3057\u3067\u306f\u3001TTL \u306f\u30aa\u30d7\u30b7\u30e7\u30ca\u30eb\u3067\u3059\u3002\u3082\u3057 TTL \u3092\u6e21\u3059\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e TTL \u5024\u304c\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// Set\n$logger->info("Setting key: $KEY to value: $VALUE\\n");\n$response = $client->set($CACHE_NAME, $KEY, $VALUE);\nif ($response->asSuccess()) {\n    $logger->info("SUCCESS: - Set key: " . $KEY . " value: " . $VALUE . " cache: " . $CACHE_NAME . "\\n");\n} elseif ($response->asError()) {\n    $logger->info("Error setting key: " . $response->asError()->message() . "\\n");\n    exit;\n}\n')),(0,o.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u8aad\u307f\u51fa\u3059"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u8aad\u307f\u51fa\u3059"),(0,o.kt)("p",null,"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u8aad\u307f\u51fa\u3057\u64cd\u4f5c\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// Get\n$logger->info("Getting value for key: $KEY\\n");\n$response = $client->get($CACHE_NAME, $KEY);\nif ($response->asHit()) {\n    $logger->info("SUCCESS: - Get key: " . $KEY . " value: " . $response->asHit()->valueString() . " cache: " . $CACHE_NAME . "\\n");\n} elseif ($response->asMiss()) {\n    $logger->info("Get operation was a MISS\\n");\n} elseif ($response->asError()) {\n    $logger->info("Error getting cache: " . $response->asError()->message() . "\\n");\n    exit;\n}\n')),(0,o.kt)("h2",{id:"delete-the-test-cache"},"Delete the test cache"),(0,o.kt)("h2",{id:"\u30c6\u30b9\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u524a\u9664\u3059\u308b"},"\u30c6\u30b9\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u524a\u9664\u3059\u308b"),(0,o.kt)("p",null,"\u3053\u3053\u3067\u4f5c\u6210\u3057\u3066\u30c6\u30b9\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u524a\u9664\u3059\u308b\u4f8b\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// Delete test cache\n$logger->info("Deleting cache $CACHE_NAME\\n");\n$response = $client->deleteCache($CACHE_NAME);\nif ($response->asError()) {\n    $logger->info("Error deleting cache: " . $response->asError()->message() . "\\n");\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e API \u547c\u51fa\u3057\u4ee5\u4e0a\u306e\u3082\u306e\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/"},"API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3067 Momento API \u547c\u51fa\u3057\u306e\u5168\u7a2e\u985e\u306e\u8a73\u3057\u3044\u60c5\u5831\u3092\u3054\u78ba\u8a8d\u4e0b\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);