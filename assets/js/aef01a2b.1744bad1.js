"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7426],{3043:(e,t,a)=>{a(7294)},7235:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(614),o=a(7294);const c=e=>{let{language:t,code:a}=e;return o.createElement(n.Z,{language:t},a)}},6696:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var n=a(7462),o=(a(7294),a(3905)),c=(a(3043),a(7235));const r={sidebar_position:1,sidebar_label:"Cache Cheat Sheet",title:"Cheat sheet for .NET SDK",description:"Get started really quickly coding using the .NET SDK with Momento Cache"},i="Cheat sheet for .NET with Momento Cache",s={unversionedId:"cache/develop/sdks/dotnet/cheat-sheet",id:"cache/develop/sdks/dotnet/cheat-sheet",title:"Cheat sheet for .NET SDK",description:"Get started really quickly coding using the .NET SDK with Momento Cache",source:"@site/docs/cache/develop/sdks/dotnet/cheat-sheet.mdx",sourceDirName:"cache/develop/sdks/dotnet",slug:"/cache/develop/sdks/dotnet/cheat-sheet",permalink:"/cache/develop/sdks/dotnet/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/dotnet/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache Cheat Sheet",title:"Cheat sheet for .NET SDK",description:"Get started really quickly coding using the .NET SDK with Momento Cache"},sidebar:"tutorialSidebar",previous:{title:".NET",permalink:"/cache/develop/sdks/dotnet/"},next:{title:"Observability",permalink:"/cache/develop/sdks/dotnet/observability"}},l={},h=[{value:"Install the Momento client library",id:"install-the-momento-client-library",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and create a CacheClient object",id:"import-libraries-and-create-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}],d={toc:h};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cheat-sheet-for-net-with-momento-cache"},"Cheat sheet for .NET with Momento Cache"),(0,o.kt)("p",null,"If you need to get going quickly with .NET and Momento Cache, this page contains the basic API calls you'll need. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples"},"Check the .NET SDK examples")," for complete, working examples including build configuration files."),(0,o.kt)("h2",{id:"install-the-momento-client-library"},"Install the Momento client library"),(0,o.kt)("p",null,"Install the client library in an existing .NET project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"dotnet add package Momento.Sdk\n")),(0,o.kt)("h2",{id:"set-up-your-api-key"},"Set up your API key"),(0,o.kt)("p",null,"You'll need a Momento API key to authenticate with Momento.  You can get one from the ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console"),".\nOnce you have your API key, store it in an environment variable so that the Momento client can consume it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento API key here>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,o.kt)("h2",{id:"import-libraries-and-create-a-cacheclient-object"},"Import libraries and create a CacheClient object"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/MomentoUsage/Program.cs"},"This example file")," pulls in the necessary imports, reads the API key from an environment variable, and instantiates the CacheClient that is used to interact with a cache."),(0,o.kt)("h2",{id:"create-a-new-cache-in-momento-cache"},"Create a new cache in Momento Cache"),(0,o.kt)("p",null,"Use this function to create a new cache in your account."),(0,o.kt)(c.Z,{language:"csharp",code:'var result = await cacheClient.CreateCacheAsync("test-cache");\nif (result is CreateCacheResponse.Success)\n{\n    Console.WriteLine("Cache \'test-cache\' created");\n}\nelse if (result is CreateCacheResponse.CacheAlreadyExists)\n{\n    Console.WriteLine("Cache \'test-cache\' already exists");\n}\nelse if (result is CreateCacheResponse.Error error)\n{\n    throw new Exception($"An error occurred while attempting to create cache \'test-cache\': {error.ErrorCode}: {error}");\n}\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"list-the-names-of-existing-caches-in-your-account"},"List the names of existing caches in your account"),(0,o.kt)("p",null,"A simple list of the names of caches for the account."),(0,o.kt)(c.Z,{language:"csharp",code:'var result = await cacheClient.ListCachesAsync();\nif (result is ListCachesResponse.Success success)\n{\n    Console.WriteLine($"Caches:\\n{string.Join("\\n", success.Caches.Select(c => c.Name))}\\n\\n");\n}\nelse if (result is ListCachesResponse.Error error)\n{\n    throw new Exception($"An error occurred while attempting to list caches: {error.ErrorCode}: {error}");\n}\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"write-an-item-to-a-cache"},"Write an item to a cache"),(0,o.kt)("p",null,"A simple example of doing a set operation. In the client.set call, the TTL is optional. If you did pass it in, this would override the default TTL value set with the client connection object."),(0,o.kt)(c.Z,{language:"csharp",code:'var result = await cacheClient.SetAsync("test-cache", "test-key", "test-value");\nif (result is CacheSetResponse.Success)\n{\n    Console.WriteLine("Key \'test-key\' stored successfully");\n}\nelse if (result is CacheSetResponse.Error error)\n{\n    throw new Exception($"An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': {error.ErrorCode}: {error}");\n}\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"read-an-item-from-a-cache"},"Read an item from a cache"),(0,o.kt)("p",null,"This is an example of a simple read operation to get an item from a cache."),(0,o.kt)(c.Z,{language:"csharp",code:"var result = await cacheClient.GetAsync(\"test-cache\", \"test-key\");\nif (result is CacheGetResponse.Hit hit)\n{\n    Console.WriteLine($\"Retrieved value for key 'test-key': {hit.ValueString}\");\n}\nelse if (result is CacheGetResponse.Miss)\n{\n    Console.WriteLine(\"Key 'test-key' was not found in cache 'test-cache'\");\n}\nelse if (result is CacheGetResponse.Error error)\n{\n    throw new Exception($\"An error occurred while attempting to get key 'test-key' from cache 'test-cache': {error.ErrorCode}: {error}\");\n}\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"running-the-code"},"Running the code"),(0,o.kt)("p",null,"You can find complete, working examples in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples"},"csharp SDK GitHub repo examples directory"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/"},"API reference page")," for more information on the full assortment of Momento API calls."),(0,o.kt)("p",{parentName:"admonition"},"Check out this example code for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/MomentoApplication/Program.cs"},"more advanced calls"),".")))}m.isMDXComponent=!0}}]);