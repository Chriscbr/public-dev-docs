"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[348],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=v({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var g=n(2389);const f="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(E,(0,a.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>l});var a=n(4866),r=n(5162),o=n(814),i=n(7294);const l=e=>{let{js:t,python:n,java:l,go:s,csharp:u,php:c,rust:d,ruby:m,elixir:p,cli:v}=e;return t||n||l||s||u||c||d||m||p||v?i.createElement(a.Z,null,t&&i.createElement(r.Z,{value:"js",label:"JavaScript"},i.createElement(o.Z,{language:"js"},t)),n&&i.createElement(r.Z,{value:"python",label:"Python"},i.createElement(o.Z,{language:"python"},n)),l&&i.createElement(r.Z,{value:"java",label:"Java"},i.createElement(o.Z,{language:"java"},l)),s&&i.createElement(r.Z,{value:"go",label:"Go"},i.createElement(o.Z,{language:"go"},s)),u&&i.createElement(r.Z,{value:"csharp",label:"C#"},i.createElement(o.Z,{language:"csharp"},u)),c&&i.createElement(r.Z,{value:"php",label:"PHP"},i.createElement(o.Z,{language:"php"},c)),d&&i.createElement(r.Z,{value:"rust",label:"Rust"},i.createElement(o.Z,{language:"rust"},d)),m&&i.createElement(r.Z,{value:"ruby",label:"Ruby"},i.createElement(o.Z,{language:"ruby"},m)),p&&i.createElement(r.Z,{value:"elixir",label:"Elixir"},i.createElement(o.Z,{language:"elixir"},p)),v&&i.createElement(r.Z,{value:"cli",label:"CLI"},i.createElement(o.Z,{language:"cli"},v))):null}},5951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=(n(3404),n(9720));const i={sidebar_position:2,sidebar_label:"Develop",sidebar_class_name:"sidebar-item-api-reference",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},l="Developing applications with Momento SDKs",s={unversionedId:"vector-index/develop/index",id:"vector-index/develop/index",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs.",source:"@site/docs/vector-index/develop/index.md",sourceDirName:"vector-index/develop",slug:"/vector-index/develop/",permalink:"/ja/vector-index/develop/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/develop/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Develop",sidebar_class_name:"sidebar-item-api-reference",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},sidebar:"vectorSidebar",previous:{title:"Momento Vector Index",permalink:"/ja/vector-index/"},next:{title:"SDKs"}},u={},c=[{value:"Constructing a Preview Momento Vector Index client",id:"constructing-a-preview-momento-vector-index-client",level:2},{value:"Instantiating credential providers using Momento api keys",id:"instantiating-credential-providers-using-momento-api-keys",level:2}],d={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developing-applications-with-momento-sdks"},"Developing applications with Momento SDKs"),(0,r.kt)("p",null,"Welcome! This page provides information about common constructs you will need in order to assemble Momento clients in all of our SDKs. This page covers how to provide your Momento credentials (called api keys), how to configure your client, and some basic information about error handling and production readiness."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"a technical illustration on a white background depicting the intersection of speed, ease of use, and security.",src:n(6947).Z,width:"1000",height:"398"})),(0,r.kt)("h2",{id:"constructing-a-preview-momento-vector-index-client"},"Constructing a Preview Momento Vector Index client"),(0,r.kt)("p",null,"Work in progress."),(0,r.kt)("h2",{id:"instantiating-credential-providers-using-momento-api-keys"},"Instantiating credential providers using Momento api keys"),(0,r.kt)("p",null,"You need to provide a Momento auth token when instantiating a Momento client. If you don't have one yet, you can get one from the ",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),". Once you have a token, provide it to Momento SDKs when you create an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider"),". There are convenient factory methods provided to construct a ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," object, either from an environment variable or from a String. Below is an example of how to instantiate ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," from an environment variable:"),(0,r.kt)(o.X,{js:"CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_API_KEY'});",python:'CredentialProvider.from_environment_variable("MOMENTO_AUTH_TOKEN")',java:'CredentialProvider.fromEnvVar("MOMENTO_AUTH_TOKEN");',go:"",csharp:"",php:'\nCredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN");',rust:"",ruby:"",elixir:'Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("p",null,"If you're storing your Momento auth token in a secret manager such as ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS Secret Manager"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"GCP Secret Manager"),", or a local config file, you must first retrieve the credentials from there and then instantiate a ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," from a string, like this:"),(0,r.kt)(o.X,{js:"const apiKey = retrieveApiKeyFromYourSecretsManager();\nCredentialProvider.fromString({apiKey: apiKey});",python:"",java:"final String authToken = retrieveAuthTokenFromYourSecretsManager();\nCredentialProvider.fromString(authToken);",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"auth_token = retrieve_auth_token_from_your_secrets_manager()\nMomento.Auth.CredentialProvider.from_string!(auth_token)",cli:"",mdxType:"SdkExampleTabsImpl"}))}m.isMDXComponent=!0},6947:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/city-d8d53a197ff46830d1bdad152a859c28.jpg"}}]);