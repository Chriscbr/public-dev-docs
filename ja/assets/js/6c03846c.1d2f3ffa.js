"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3360],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(t),g=a,y=h["".concat(s,".").concat(g)]||h[g]||m[g]||o;return t?r.createElement(y,c(c({ref:n},p),{},{components:t})):r.createElement(y,c({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[h]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(8168),a=(t(6540),t(5680));const o={sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","python","asyncio"]},c="Python\u3067Momento Cache\u3092\u59cb\u3081\u308b",i={unversionedId:"sdks/python/cache",id:"sdks/python/cache",title:"Getting started with Momento Cache in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Cache.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/python/cache.md",sourceDirName:"sdks/python",slug:"/sdks/python/cache",permalink:"/ja/sdks/python/cache",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/python/cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","python","asyncio"]}},s={},l=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"API\u30ad\u30fc\u306e\u8a2d\u5b9a",id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059",level:2},{value:"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u3002",id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b",id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u9805\u76ee\u306e\u5024\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u9805\u76ee\u306e\u5024\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b",level:2},{value:"\u4f7f\u7528\u4e0a\u306e\u6ce8\u610f",id:"\u4f7f\u7528\u4e0a\u306e\u6ce8\u610f",level:2}],p={toc:l},h="wrapper";function m(e){let{components:n,...o}=e;return(0,a.yg)(h,(0,r.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"python\u3067momento-cache\u3092\u59cb\u3081\u308b"},"Python\u3067Momento Cache\u3092\u59cb\u3081\u308b"),(0,a.yg)("p",null,"Python\u3068Momento Cache\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u3053\u306e\u30da\u30fc\u30b8\u306e\u3059\u3079\u3066\u306e\u95a2\u6570\u30921\u3064\u306epython\u30d5\u30a1\u30a4\u30eb\u306b\u307e\u3068\u3081\u308b\u3068\u3001\u4ed6\u306epython\u30b3\u30fc\u30c9\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u95a2\u6570\u306e\u4e2d\u5fc3\u7684\u306a\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u3053\u306e\u30b3\u30fc\u30c9\u3092\u672c\u756a\u3067\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001print() \u547c\u3073\u51fa\u3057\u3092 python \u306e logging \u30e9\u30a4\u30d6\u30e9\u30ea (",(0,a.yg)("inlineCode",{parentName:"p"},"import logging"),") \u3092\u4f7f\u7528\u3057\u305f\u3082\u306e\u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,a.yg)("a",{target:"_blank",href:t(2832).A},"\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044"),"\u3002")),(0,a.yg)("h2",{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,a.yg)("p",null,"Momento Python SDK \u306f ",(0,a.yg)("a",{parentName:"p",href:"https://pypi.org/project/momento/"},"pypi as ",(0,a.yg)("inlineCode",{parentName:"a"},"momento"))," \u304b\u3089\u5165\u624b\u3067\u304d\u307e\u3059\u3002"),(0,a.yg)("p",null,"Python\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306bpip\u7d4c\u7531\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"pip install momento\n")),(0,a.yg)("h2",{id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a"},"API\u30ad\u30fc\u306e\u8a2d\u5b9a"),(0,a.yg)("p",null,"Momento\u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f",(0,a.yg)("a",{parentName:"p",href:"/cache/develop/authentication/api-keys"},"Momento API key"),"\u304c\u5fc5\u8981\u3067\u3059\u3002\u3067\u304d\u308c\u3070\u3001",(0,a.yg)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console")," \u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento token here>\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note"),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001\u30c8\u30fc\u30af\u30f3\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u683c\u7d0d\u3059\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3060\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059"),(0,a.yg)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30dd\u30fc\u30c8\u3001\u30af\u30e9\u30b9\u5b9a\u7fa9\u3001\u304a\u3088\u3073\u4ed6\u306e\u5404\u95a2\u6570\u304c\u547c\u3073\u51fa\u3059\u5fc5\u8981\u306e\u3042\u308b CacheClient \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3092\u4f7f\u7528\u3057\u3066\u30af\u30e9\u30b9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"from datetime import timedelta\nfrom momento import CacheClient, Configurations, CredentialProvider\nfrom momento.responses import CacheGet, CacheSet, CreateCache, ListCaches, CacheIncrement\n\nimport os\n\ndef create_client():\n  momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_API_KEY')\n  ttl  = timedelta(seconds=int(os.getenv('MOMENTO_TTL_SECONDS', '600')))\n  config = {\n    'configuration': Configurations.Laptop.v1(),\n    'credential_provider': momento_auth_token,\n    'default_ttl':  ttl\n  }\n  return CacheClient.create(**config)\n")),(0,a.yg)("h2",{id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"},"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u3002"),(0,a.yg)("p",null,"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'def create_cache(client, cache_name: str) -> None:\n  resp = client.create_cache(cache_name)\n  match resp:\n    case CreateCache.Success():\n        print("Cache created.")\n    case CreateCache.Error() as error:\n        print(f"Error creating cache: {error.message}")\n    case _ as error:\n        print(f"Unreachable with {error.message}")\n')),(0,a.yg)("h2",{id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b"),(0,a.yg)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001\u4e0a\u8a18\u306eclient\u95a2\u6570\u3092\u4f7f\u3063\u3066client\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3057\u3001\u305d\u308c\u3092\u4f7f\u3063\u3066\u3053\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u3059\u3079\u3066\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'def list_caches(client) -> None:\n    print("Listing caches:")\n    list_caches_response = client.list_caches()\n    match list_caches_response:\n        case ListCaches.Success() as success:\n            for cache_info in success.caches:\n                print(f"- {cache_info.name!r}")\n        case ListCaches.Error() as error:\n            print(f"Error listing caches: {error.message}")\n        case _:\n            print("Unreachable")\n    print("")\n')),(0,a.yg)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080"),(0,a.yg)("p",null,"\u30bb\u30c3\u30c8\u64cd\u4f5c\u306e\u7c21\u5358\u306a\u4f8b\u3002client.set\u547c\u3073\u51fa\u3057\u3067\u306f\u3001TTL\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002TTL\u3092\u6e21\u3059\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u30c7\u30d5\u30a9\u30eb\u30c8\u306eTTL\u5024\u304c\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'def set(client, cache_name, key, value, ttl=None):\n  resp = client.set(cache_name, key, value, ttl)\n  match resp:\n    case CacheSet.Success():\n        pass\n    case CacheSet.Error() as error:\n        print(f"Error setting value: {error.message}")\n    case _:\n        print("Unreachable")\n')),(0,a.yg)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"),(0,a.yg)("p",null,"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u5358\u7d14\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306e\u4f8b\u3067\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'def get(client, cache_name, key):\n  resp = client.get(cache_name, key)\n  match resp:\n    case CacheGet.Hit():\n        print("value is " + resp.value_string)\n    case CacheGet.Miss() as error:\n        print(f"Error getting key: {error.message}")\n    case _:\n        print("Unreachable")\n')),(0,a.yg)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u9805\u76ee\u306e\u5024\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u9805\u76ee\u306e\u5024\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b"),(0,a.yg)("p",null,"\u30ad\u30fc\u306e\u5024\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b\u4f8b\u3002\u6b63\u307e\u305f\u306f\u8ca0\u306e\u6574\u6570\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'def incr(client, cache_name, key, value:int = 1):\n  resp = client.increment(cache_name, key, value)\n  match resp:\n    case CacheIncrement.Success():\n        pass\n    case CacheIncrement.Error() as error:\n        print(f"Error incrementing value: {error.message}")\n    case _:\n        print("Unreachable")\n')),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.yg)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/"},"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.yg)("h2",{id:"\u4f7f\u7528\u4e0a\u306e\u6ce8\u610f"},"\u4f7f\u7528\u4e0a\u306e\u6ce8\u610f"),(0,a.yg)("p",null,"\u3053\u308c\u3089\u306e\u95a2\u6570\u3067\u306f\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u95a2\u6570 ",(0,a.yg)("inlineCode",{parentName:"p"},"create_client()")," \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u305d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5f8c\u7d9a\u306e\u95a2\u6570\u306b\u6e21\u3057\u307e\u3059\u3002\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u3001Momento \u3078\u306e\u8907\u6570\u306e\u547c\u3073\u51fa\u3057\u3067 CacheClient \u3092\u518d\u5229\u7528\u3059\u308b\u305f\u3081\u3001\u547c\u3073\u51fa\u3057\u304c\u3088\u308a\u52b9\u7387\u7684\u306b\u306a\u308a\u307e\u3059\u3002",(0,a.yg)("a",{target:"_blank",href:t(2832).A},"\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af"),"\u3059\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u5b9a\u7fa9\u304c\u542b\u307e\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))}m.isMDXComponent=!0},2832:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/MomentoBasics-e45a5a4f32b6f056b3f6568cabbe07b8.py"}}]);