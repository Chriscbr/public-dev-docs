"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:6,sidebar_label:"Sequelize",title:"Integrate Momento With Sequelize ORM",description:"Supercharge your sequelize backed databases with Momento cache"},i="Integrating Momento with your Sequelize backed database",l={unversionedId:"cache/develop/integrations/sequelize",id:"cache/develop/integrations/sequelize",title:"Integrate Momento With Sequelize ORM",description:"Supercharge your sequelize backed databases with Momento cache",source:"@site/docs/cache/develop/integrations/sequelize.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/sequelize",permalink:"/cache/develop/integrations/sequelize",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/sequelize.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Sequelize",title:"Integrate Momento With Sequelize ORM",description:"Supercharge your sequelize backed databases with Momento cache"},sidebar:"tutorialSidebar",previous:{title:"Netlify",permalink:"/cache/develop/integrations/netlify-integration"},next:{title:"Vercel",permalink:"/cache/develop/integrations/vercel-integration"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integrating the wrapper in your application",id:"integrating-the-wrapper-in-your-application",level:2},{value:"Examples",id:"examples",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-momento-with-your-sequelize-backed-database"},"Integrating Momento with your Sequelize backed database"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/"},"Sequelize")," is a popular ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more."),(0,o.kt)("p",null,"In this tutorial, we'll walk through our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-sequelize-cache"},"Momento sequelize model cache wrapper"),". By the end of the exercise, you'll be able to seamlessly cache your sequelize-backed ORM databases with minimal code changes."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To use Momento with Sequelize in your app, you'll need to have the following available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node version 16 and above installed on your machine ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download")),(0,o.kt)("li",{parentName:"ul"},"Configure the Momento side of things using the ",(0,o.kt)("a",{parentName:"li",href:"https://console.gomomento.com"},"Momento console"),". You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Create Cache")," button on the top right of the page:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Cache button",src:n(6923).Z,width:"336",height:"258"})),(0,o.kt)("p",null,"Create a cache called ",(0,o.kt)("inlineCode",{parentName:"p"},"model-cache"),". You can create the cache in your choice of cloud provider, AWS or GCP, and in any region."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create cache form",src:n(4539).Z,width:"3406",height:"1402"})),(0,o.kt)("p",null,"After pressing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," button you'll see the new ",(0,o.kt)("inlineCode",{parentName:"p"},"model-cache")," cache in the list of available caches."),(0,o.kt)("p",null,"Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when you generate a Momento authentication token in the next step. Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/api_keys"},"api_keys")," page, choose the cloud provider and region you used to create your cache, choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"Super User API Key")," key type, and hit the ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate API Key")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generate token",src:n(2904).Z,width:"3416",height:"1670"})),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"API Key")," and save it in a safe place. You'll need to use it later to run your application, where you will add it as an environment variable."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generated token",src:n(903).Z,width:"2704",height:"416"})),(0,o.kt)("h2",{id:"integrating-the-wrapper-in-your-application"},"Integrating the wrapper in your application"),(0,o.kt)("p",null,"To integrate the Momento wrapper in your sequelize-backed application, let's first install the latest release of the wrapper."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @gomomento-poc/momento-sequelize-cache\n")),(0,o.kt)("p",null,"Now you're ready to add the necessary imports and ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," your Sequelize models such that it will be backed by Momento as a read-aside cache.\nCreating a Momento wrapper over your Sequelize backed database simply involves creating a Momento client and passing it to a factory method. Remember to export your copied ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiKey")," as an environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"MOMENTO_API_KEY"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Configurations, CredentialProvider } from "@gomomento/sdk";\nimport { modelCacheFactory, MomentoClientGenerator} from "@gomomento-poc/momento-sequelize-cache";\n\nconst momentoClient = MomentoClientGenerator.getInstance({\n        configuration: Configurations.Laptop.latest(),\n        credentialProvider: CredentialProvider.fromEnvironmentVariable({environmentVariableName: \'MOMENTO_API_KEY\'}),\n        defaultTtlSeconds: 60,    \n});\n\nconst modelCache = await modelCacheFactory(momentoClient);\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"modelCache")," object provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," method that you can use to wrap any existing Sequelize model. From that point, the wrapped object provides the same familiar APIs that your Sequelize model object would. For example, to fetch a User (from a ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," model) by the primary key, the call looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await modelCache.wrap(User).findByPk(1);\n")),(0,o.kt)("p",null,"This call orchestrates the read-aside caching lifecycle: prioritizing cache retrieval, resorting to the Sequelize database on cache misses, and subsequently updating the cache for future requests. You can quickly get started by running one of our examples with various queries."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Ready to jump in and explore more functionalities? You can also get started with our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-sequelize-cache/tree/main/examples"},"examples")," by forking the repo and running the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/momentohq/momento-sequelize-cache\ncd examples\nnpm install\nMOMENTO_API_KEY="yourApiKey" npm run basic\n')),(0,o.kt)("p",null,"This example demonstrates various Sequelize operations supported by the wrapper such as ",(0,o.kt)("inlineCode",{parentName:"p"},"findByPk"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"findOne"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"count"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"findAll"),". It also demonstrates ",(0,o.kt)("inlineCode",{parentName:"p"},"joins")," between different tables whose queries can be cached."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"A read-aside cache can significantly improve the performance of applications. It not only accelerates data retrieval but also lightens the load on primary data stores, resulting in benefits for both developers and end-users. With Momento enhancing your Sequelize applications, you're set to experience a harmonious blend of speed and efficiency."))}u.isMDXComponent=!0},903:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/console-api-key-result-4b58c13d256f6d072db0c9fdf98fe4bc.png"},4539:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/console-create-cache-model-cache-1e6e63c196e0ecb774431504b3f757ce.png"},6923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},2904:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/console-generate-api-key-fa04c960370ff9c839806a6154d75aad.png"}}]);