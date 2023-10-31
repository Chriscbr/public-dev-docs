"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),u=o,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3781:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:6,sidebar_label:"Netlify",title:"Integrate Momento With Netlify",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Netlify."},r="Integrating Momento with your Netlify app",l={unversionedId:"cache/develop/integrations/netlify-integration",id:"cache/develop/integrations/netlify-integration",title:"Integrate Momento With Netlify",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Netlify.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/integrations/netlify-integration.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/netlify-integration",permalink:"/ja/cache/develop/integrations/netlify-integration",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/netlify-integration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Netlify",title:"Integrate Momento With Netlify",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Netlify."},sidebar:"tutorialSidebar",previous:{title:"\u30c7\u30fc\u30bf\u3092\u307e\u3068\u3081\u3066\u66f8\u304d\u8fbc\u3080",permalink:"/ja/cache/develop/integrations/bulk-writing-from-redis-json-csv"},next:{title:"Sequelize",permalink:"/ja/cache/develop/integrations/sequelize"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying with Netlify",id:"deploying-with-netlify",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-momento-with-your-netlify-app"},"Integrating Momento with your Netlify app"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.netlify.com/"},"Netlify")," is a popular platform for building, deploying, and scaling modern websites and apps. Their offerings include an advanced global CDN, Git-integrated CI/CD, and free automatic HTTPS support. Their deployment process integrates directly with your Git repositories, making initial deployment about as simple as choosing a repository. Once deployed, updating your sites and apps is handled automatically as you push your changes to Git. "),(0,o.kt)("p",null,"In this tutorial, we'll make use of a simple example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat"},"Next.js chat application")," from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"Javascript SDK"),". By the end of the exercise, you'll have a realtime browser-based chat application up and running at a URL you can use to invite your friends to the chat."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To get this app deployed and running, you'll need to have the following available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An account with a Git provider such as ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/"},"GitHub"),", ",(0,o.kt)("a",{parentName:"li",href:"https://gitlab.com"},"GitLab"),", or ",(0,o.kt)("a",{parentName:"li",href:"https://bitbucket.org/"},"Bitbucket"),"."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://www.netlify.com/"},"Netlify")," account."),(0,o.kt)("li",{parentName:"ul"},"A copy or fork of the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript"},"Momento Javascript SDK")," in your personal repositories.")),(0,o.kt)("p",null,"Once you have a Netlify account and a copy or fork of the Momento Javascript SDK in your Git provider account, you're ready to configure the Momento side of things using the ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com"},"Momento console"),". You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Cache")," button on the top right of the page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Cache button",src:a(6923).Z,width:"336",height:"258"})),(0,o.kt)("p",null,"Create a cache called ",(0,o.kt)("inlineCode",{parentName:"p"},"chat"),". You can create the cache in your choice of cloud provider, AWS or GCP, and in any region. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create cache form",src:a(2438).Z,width:"2990",height:"1350"})),(0,o.kt)("p",null,"After pressing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," button you'll see the new ",(0,o.kt)("inlineCode",{parentName:"p"},"chat")," cache in the list of available caches."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chat cache",src:a(6640).Z,width:"2954",height:"648"})),(0,o.kt)("p",null,"Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when you generate a Momento authentication token in the next step. Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"tokens")," page, choose the cloud provider and region you used to create your cache, choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"Super User Token")," token type, and hit the ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate Token")," button. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generate token",src:a(1204).Z,width:"2984",height:"1600"})),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auth Token")," and save it in a safe place. You'll need to use it later to configure your Netlify deployment, where you will add it as an environment variable for use in the chat app. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generated token",src:a(3679).Z,width:"2214",height:"374"})),(0,o.kt)("h2",{id:"deploying-with-netlify"},"Deploying with Netlify"),(0,o.kt)("p",null,"Now it's time to log into Netlify to configure and deploy the application. As noted before, you need a copy of the Momento Javascript SDK available in your repository. In this example, we'll deploy from a GitHub repository forked from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"the original"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fork SDK Repository",src:a(3715).Z,width:"2478",height:"84"})),(0,o.kt)("p",null,"After logging into Netlify, navigate to your team's ",(0,o.kt)("inlineCode",{parentName:"p"},"Sites")," page and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Add New Site")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Import an Existing Project"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Netlify Add Site Button",src:a(8233).Z,width:"2980",height:"362"})),(0,o.kt)("p",null,"Then choose your Git provider to display a list of your repositories."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Netlify Git providers",src:a(6388).Z,width:"1740",height:"422"})),(0,o.kt)("p",null,"From the list of repositories available to you, select ",(0,o.kt)("inlineCode",{parentName:"p"},"client-sdk-javascript"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Netlify repository list",src:a(2734).Z,width:"1742",height:"518"})),(0,o.kt)("p",null,"The next screen allows you to configure your deployment. You'll be deploying from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. Because we are deploying an example application from a subdirectory of the Momento Javascript SDK, you'll need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Base directory")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Build settings")," section of the page. The path to the chat example is ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples/web/nextjs-chat"),", so you'll enter that as the ",(0,o.kt)("inlineCode",{parentName:"p"},"Base directory"),"."),(0,o.kt)("p",null,"Assuming you've entered the base directory correctly, you should see some magic happen. Netlify has examined the contents of the base directory and detected that our project is using Next.js. That allows it to fill out the rest of the build settings form for us. The values it has chosen look good, so you can move on to the final step of configuration: environment variables."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Netlify build settings",src:a(5014).Z,width:"683",height:"1041"})),(0,o.kt)("p",null,"Recall that we generated and saved a Momento auth token earlier for use with this application. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add environment variables")," button below the build settings to add an environment variable with ",(0,o.kt)("inlineCode",{parentName:"p"},"MOMENTO_AUTH_TOKEN")," as the key and the token you generated as the value. Next, add a second environment variable with ",(0,o.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_MOMENTO_CACHE_NAME")," as the key and ",(0,o.kt)("inlineCode",{parentName:"p"},"chat")," as the value to point your app to the cache you created earlier. And that's all there is to do to configure the deployment. Press the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy client-sdk-javascript")," button to deploy the app into the wild!"),(0,o.kt)("p",null,"During the deployment, Netlify displays a detailed log showing what it's doing to build and publish your site and, if necessary, reporting on deployment failures to assist in troubleshooting. If all went as planned, you'll be directed to a page summarizing the deployment."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Netlify site published",src:a(3617).Z,width:"1344",height:"660"})),(0,o.kt)("p",null,"You're now ready to chat with your friends! Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Site overview")," in the left nav to find the URL that was generated for your site. You would, of course, set up a custom domain were this a production app, but the generated netlify.app URL is good enough for our purposes. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Netlify site overview",src:a(1564).Z,width:"2968",height:"636"})),(0,o.kt)("p",null,"Clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"https://charming-salmiakki-e07713.netlify.app/")," link in the overview (your URL will, of course, be different) reveals your chat app's lobby screen. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"chat")," as the name of the chat room. You could use any name, but using ",(0,o.kt)("inlineCode",{parentName:"p"},"chat")," makes it easy to remember and share. If it doesn't exist, the chat room will be created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chat app lobby",src:a(2966).Z,width:"708",height:"552"})),(0,o.kt)("p",null,"The final step is to choose a username for the chat. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chat app username",src:a(4387).Z,width:"758",height:"542"})),(0,o.kt)("p",null,"Now all that's left is to share the URL, cache, and room name with the people you'd like to invite to your chat!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chat app chat",src:a(746).Z,width:"3024",height:"1794"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Netlify. Feel free, of course, to dive into the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat"},"code for this chat example")," as well. We hope you'll also enjoy the simplicity of the Momento Topics feature that powers the chat, especially when compared to alternative approaches such as polling and web sockets. And we especially look forward to seeing what our customers build and deploy with Momento in the future!"))}d.isMDXComponent=!0},6640:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/console-caches-chat-ce796d1f23d2d69c009f067727eab408.png"},2438:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/console-create-cache-form-1dd5a6c37dfaa6885394f9b79c9425e5.png"},6923:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},1204:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/console-generate-token-form-b4b496c107969c7c2003c01edb6e6121.png"},3679:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/console-generate-token-result-b2c8d5c02290b410501cb50bfe27e02b.png"},3715:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github-fork-js-sdk-3950285fbebfdc6a75982998d63e70d6.png"},8233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/netlify-add-site-24baeb27ef3f6f7041b4b926c90c666b.png"},5014:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/netlify-build-settings-5c2a204a079c6a0a3c239bb45da87d79.png"},6388:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/netlify-git-providers-c88441df15cfd9b65c03a46ff3111e4c.png"},3617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/netlify-published-site-27122792a2a46c654589bfaf801d5d19.png"},2734:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/netlify-repo-list-adddc3ed2798fb9a2749a7eee29acf32.png"},1564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/netlify-site-overview-96f6971538763e0730c8ff8c54f8c289.png"},746:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nextjs-chat-app-chat-6d2b67d875c0be1200e1e583faced55c.png"},2966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nextjs-chat-app-lobby-c44d4afaf6ea9f9addfa7ca50f4d754b.png"},4387:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nextjs-chat-app-username-35a5af269bf50fa8441581c33a673661.png"}}]);