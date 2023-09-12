"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5357],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(o),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2771:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:10,title:"API Keys",sidebar_label:"API Keys",description:"Learn what Momento API keys are, how to create them, and how they are used."},i="Momento API keys",s={unversionedId:"develop/authentication/api-keys",id:"develop/authentication/api-keys",title:"API Keys",description:"Learn what Momento API keys are, how to create them, and how they are used.",source:"@site/docs/develop/authentication/api-keys.md",sourceDirName:"develop/authentication",slug:"/develop/authentication/api-keys",permalink:"/ja/develop/authentication/api-keys",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/authentication/api-keys.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"API Keys",sidebar_label:"API Keys",description:"Learn what Momento API keys are, how to create them, and how they are used."},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/ja/develop/authentication/"},next:{title:"Tokens",permalink:"/ja/develop/authentication/tokens"}},l={},c=[{value:"Creating an API key",id:"creating-an-api-key",level:2},{value:"Step 1: Sign up or log into the Momento console",id:"step-1-sign-up-or-log-into-the-momento-console",level:3},{value:"Step 2: Generate your API key",id:"step-2-generate-your-api-key",level:3},{value:"Step 3: Secure it!",id:"step-3-secure-it",level:3},{value:"Expiration",id:"expiration",level:2},{value:"Use cases",id:"use-cases",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-api-keys"},"Momento API keys"),(0,a.kt)("img",{src:"/img/api-keys-page.jpg",width:"95%",alt:"a technical illustration of API keys and their use to secure your application."}),(0,a.kt)("p",null,"API keys are ",(0,a.kt)("em",{parentName:"p"},"long-lived values intended for programmatic use"),". These keys grant integrating applications access to certain caches and topics. When creating an API key, you are presented with two options via the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'A "super-user" key that grants access to everything in your account, like creating and deleting caches, setting and getting cache items, and publishing and subscribing to topics.'),(0,a.kt)("li",{parentName:"ol"},"A fine-grained access control (FGAC) key that is limited to data operations only, like setting and getting cache items or publishing and subscribing to topics.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'You are not able to create "super-user" API keys via the Momento SDK. However, you ',(0,a.kt)("em",{parentName:"p"},"can")," create fine-grain access controlled keys! Check out our ",(0,a.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/auth"},"Auth API reference page")," for more details.")),(0,a.kt)("h2",{id:"creating-an-api-key"},"Creating an API key"),(0,a.kt)("p",null,"While you are certainly allowed to create API keys via our SDK, it is generally recommended to use the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console"),". This allows you to monitor and maintain your long-lived keys visually, making sure you don't accidentally open up a security hole in your account. "),(0,a.kt)("h3",{id:"step-1-sign-up-or-log-into-the-momento-console"},"Step 1: Sign up or log into the Momento console"),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console")," and follow the instructions to log in with your email address, Google account, or GitHub account."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of Momento console landing page",src:o(5176).Z,width:"700",height:"337"})),(0,a.kt)("h3",{id:"step-2-generate-your-api-key"},"Step 2: Generate your API key"),(0,a.kt)("p",null,"In the console, select the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"API Keys")," menu option."),(0,a.kt)("p",null,"Once on the API key page, select the information that matches where your caches live:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cloud provider"),(0,a.kt)("li",{parentName:"ol"},"Region"),(0,a.kt)("li",{parentName:"ol"},"Key Type"),(0,a.kt)("li",{parentName:"ol"},"(Optional) Expiration date")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image showing the fields to create a new API key",src:o(8500).Z,width:"1100",height:"409"})),(0,a.kt)("p",null,"Once complete, click on the ",(0,a.kt)("strong",{parentName:"p"},"Generate")," button to create your API Key!"),(0,a.kt)("p",null,"You can copy the value of the key directly and store it in a secure location or you can click on the ",(0,a.kt)("strong",{parentName:"p"},"Download JSON")," button to download the key and expiration date to your machine."),(0,a.kt)("h3",{id:"step-3-secure-it"},"Step 3: Secure it!"),(0,a.kt)("p",null,"API keys are long-lived and typically grant high levels of access to the holder. With this in mind, be sure to securely store your API key in a location that encrypts the value and prevents plain-text viewing. "),(0,a.kt)("p",null,"If your application is hosted in the cloud, it is best practice to store your keys in and retrieve from services like ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS Secrets Manager"),", ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/key-vault/general/overview"},"Azure Key Vault"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"GCP Secret Manager"),". "),(0,a.kt)("p",null,"Storage of an API key is specific to your implementation and standard coding practices, but one thing is consistent across all applications - ",(0,a.kt)("em",{parentName:"p"},"keep it safe"),"!"),(0,a.kt)("h2",{id:"expiration"},"Expiration"),(0,a.kt)("p",null,"When creating an API key, you have the option to create one that never expires and one that expires after a certain amount of time. We ",(0,a.kt)("strong",{parentName:"p"},"do not recommend creating keys that never expire"),". This ends up being a security risk if the key were ever to become compromised. "),(0,a.kt)("p",null,"The Momento console offers several pre-configured options for expiration ranges or you can select your own date. Just remember to create a new API key and rotate it in your application before it expires to prevent outages!"),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("p",null,"There are many reasons to ",(0,a.kt)("strong",{parentName:"p"},"not")," use an API key for auth but there are also a few reasons to use one. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All usage is programmatic and server-side"),(0,a.kt)("li",{parentName:"ul"},"You are okay with longer-lived keys that must be rotated on a monthly/yearly basis"),(0,a.kt)("li",{parentName:"ul"},'You need to create session tokens  (must use a "super-user" token for this)')),(0,a.kt)("p",null,"Ready to get started? Head on over to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console")," and get your API key!"))}u.isMDXComponent=!0},5176:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"},8500:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/select-provider-region-be65f042e7452917eb912b64e847d47b.png"}}]);