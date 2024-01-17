"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8148],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return t?o.createElement(m,a(a({ref:n},c),{},{components:t})):o.createElement(m,a({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(7462),i=(t(7294),t(3905));const r={sidebar_position:6,sidebar_label:"Building and deploying Topics listeners on AWS",title:"Building and deploying Topics listeners on AWS",description:"Learn how to build and deploy Topics listeners on AWS",pagination_next:null},a="Building and Deploying Topics listeners on AWS",s={unversionedId:"topics/develop/guides/building-and-deploying-topics-listeners-on-aws",id:"topics/develop/guides/building-and-deploying-topics-listeners-on-aws",title:"Building and deploying Topics listeners on AWS",description:"Learn how to build and deploy Topics listeners on AWS",source:"@site/docs/topics/develop/guides/building-and-deploying-topics-listeners-on-aws.md",sourceDirName:"topics/develop/guides",slug:"/topics/develop/guides/building-and-deploying-topics-listeners-on-aws",permalink:"/topics/develop/guides/building-and-deploying-topics-listeners-on-aws",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/guides/building-and-deploying-topics-listeners-on-aws.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Building and deploying Topics listeners on AWS",title:"Building and deploying Topics listeners on AWS",description:"Learn how to build and deploy Topics listeners on AWS",pagination_next:null},sidebar:"topicsSidebar",previous:{title:"Guides"}},l={},p=[{value:"Organizing Topics listeners",id:"organizing-topics-listeners",level:2},{value:"Deploying Topics listeners on AWS",id:"deploying-topics-listeners-on-aws",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-and-deploying-topics-listeners-on-aws"},"Building and Deploying Topics listeners on AWS"),(0,i.kt)("h2",{id:"organizing-topics-listeners"},"Organizing Topics listeners"),(0,i.kt)("p",null,"When developing Topics listeners, the two most common approaches to follow are to deploy all Topic listeners within a single monolithic application or to split off the Topic listeners into microservices. There\u2019s no one size fits all answer, the decision should be made given the details of your workload and the application\u2019s complexity. Start by building a single subscriber application that listens to multiple topics. Once the traffic and business logic complexity of your application grows, re-evaluate your approach and consider splitting up the Topics listeners into microservices."),(0,i.kt)("h2",{id:"deploying-topics-listeners-on-aws"},"Deploying Topics listeners on AWS"),(0,i.kt)("p",null,"Momento Topics listeners require stateful connections to a Momento Cache to pick up new messages in a topic. The absence of stateful connections in AWS Lambda makes it unsuitable for listening to Topics, necessitating deployment in a container. As you might\u2019ve heard, there are quite a few ways to deploy container-based applications on AWS. Let\u2019s talk through a few common options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AWS App Runner"),(0,i.kt)("li",{parentName:"ul"},"Amazon ECS on AWS Fargate")),(0,i.kt)("p",null,"AWS App Runner is an AWS service that provides a fast, simple, and cost-effective way to deploy from source code or a container image directly to a scalable and secure Momento Topics listener application on AWS. AWS App Runner is a great one to use when building new applications, especially if you\u2019re prototyping, if you don\u2019t need all the custom options of other container services, or if you\u2019re new to container-based applications."),(0,i.kt)("p",null,"For larger workloads, we recommend deploying your application with Amazon ECS on AWS Fargate. Fargate abstracts away the overhead of scaling, patching, securing, and managing servers, allowing you to focus on developing your application. Fargate is a better fit for heavier workloads compared to AWS App Runner if you\u2019re expecting steady levels of high traffic."),(0,i.kt)("p",null,"If you\u2019re not sure about which container service to choose for your listener application, please get in touch! We\u2019d be happy to review your application requirements with you and figure out the best fit."),(0,i.kt)("p",null,"Considerations for deploying your Topics listener on AWS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Credential management",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Consider how you\u2019ll store your Momento auth token for retrieval by your listener application. "),(0,i.kt)("li",{parentName:"ul"},"We recommend using AWS Secrets Manager to store and retrieve your token."),(0,i.kt)("li",{parentName:"ul"},"You can cache your secret in memory to reduce Secrets Manager cost."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"./../authentication"},"here")," for more on Momento authentication."))),(0,i.kt)("li",{parentName:"ul"},"Runtime selection (AWS App Runner only)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ensure the runtime is supported on AWS App Runner and the Momento SDK."))),(0,i.kt)("li",{parentName:"ul"},"Infrastructure as code",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can deploy Momento caches in the IaC frameworks we support today."),(0,i.kt)("li",{parentName:"ul"},"CDK"),(0,i.kt)("li",{parentName:"ul"},"SAM")))))}u.isMDXComponent=!0}}]);