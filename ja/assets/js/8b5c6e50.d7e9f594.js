"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7393],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(o),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return o?n.createElement(m,l(l({ref:t},c),{},{components:o})):n.createElement(m,l({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[b]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5162:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(7294),r=o(6010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:o,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:o},t)}},4866:(e,t,o)=>{o.d(t,{Z:()=>y});var n=o(7462),r=o(7294),a=o(6010),l=o(2466),s=o(6550),i=o(1980),u=o(7392),c=o(12);function b(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:r}}=e;return{value:t,label:o,attributes:n,default:r}}))}function p(e){const{values:t,children:o}=e;return(0,r.useMemo)((()=>{const e=t??b(o);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function d(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const n=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function h(e){const{defaultValue:t,queryString:o=!1,groupId:n}=e,a=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[i,u]=m({queryString:o,groupId:n}),[b,h]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Nk)(o);return[n,(0,r.useCallback)((e=>{o&&a.set(e)}),[o,a])]}({groupId:n}),f=(()=>{const e=i??b;return d({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,a]),tabValues:a}}var f=o(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:o,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:b}=(0,l.o5)(),p=e=>{const t=e.currentTarget,o=c.indexOf(t),n=u[o].value;n!==s&&(b(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;t=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;t=c[o]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},t)},u.map((e=>{let{value:t,label:o,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},l,{className:(0,a.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===t})}),o??t)})))}function w(e){let{lazy:t,children:o,selectedValue:n}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=h(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",v.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},1622:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));o(4866),o(5162);const a={sidebar_position:3,sidebar_label:"Webhooks",sidebar_class_name:"sidebar-item-webhooks-overview",title:"Webhooks Overview",pagination_prev:null,description:"Learn about Webhooks, an event-driven mechanism to listen to Momento Topics"},l=void 0,s={unversionedId:"topics/webhooks/index",id:"topics/webhooks/index",title:"Webhooks Overview",description:"Learn about Webhooks, an event-driven mechanism to listen to Momento Topics",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/webhooks/index.mdx",sourceDirName:"topics/webhooks",slug:"/topics/webhooks/",permalink:"/ja/topics/webhooks/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/webhooks/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Webhooks",sidebar_class_name:"sidebar-item-webhooks-overview",title:"Webhooks Overview",pagination_prev:null,description:"Learn about Webhooks, an event-driven mechanism to listen to Momento Topics"},sidebar:"topicsSidebar",next:{title:"Develop",permalink:"/ja/topics/develop/"}},i={},u=[{value:"Webhooks \u3068\u306f\u4f55\u304b\uff1f",id:"webhooks-\u3068\u306f\u4f55\u304b",level:2},{value:"Momento \u306e Webhooks",id:"momento-\u306e-webhooks",level:2},{value:"Webhook \u306f\u3069\u3053\u3067\u4f7f\u3048\u307e\u3059\u304b\uff1f",id:"webhook-\u306f\u3069\u3053\u3067\u4f7f\u3048\u307e\u3059\u304b",level:2},{value:"Serverless Webhooks",id:"serverless-webhooks",level:3},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u30d6\u30ed\u30b0\u8a18\u4e8b",id:"\u30d6\u30ed\u30b0\u8a18\u4e8b",level:2},{value:"Webhooks\u306eAPI\u30b3\u30fc\u30eb",id:"webhooks\u306eapi\u30b3\u30fc\u30eb",level:2}],c={toc:u},b="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image of a fast moving city as Momento Topics",src:o(7339).Z,width:"1000",height:"320"})),(0,r.kt)("h2",{id:"webhooks-\u3068\u306f\u4f55\u304b"},"Webhooks \u3068\u306f\u4f55\u304b\uff1f"),(0,r.kt)("p",null,"Webhook\u306f\u3001\u30bd\u30fc\u30b9\u304b\u3089\u30c7\u30b9\u30c6\u30a3\u30cd\u30fc\u30b7\u30e7\u30f3\u306b\u9001\u4fe1\u3055\u308c\u308b\u30a2\u30a6\u30c8\u30d0\u30a6\u30f3\u30c9HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u3059\u3002Webhook\u306f\u3001\u30ea\u30c3\u30b9\u30f3\u5bfe\u8c61\u306e\u30a4\u30d9\u30f3\u30c8\u304c\u516c\u958b\u3055\u308c\u308b\u3068\u81ea\u52d5\u7684\u306b\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u307e\u3059\u3002\nWebhook\u306f\u30012\u3064\u306e\u7570\u306a\u308b\u30b7\u30b9\u30c6\u30e0\u9593\u306e\u30a4\u30d9\u30f3\u30c8\u30c9\u30ea\u30d6\u30f3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u4fc3\u9032\u3059\u308b\u91cd\u8981\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"momento-\u306e-webhooks"},"Momento \u306e Webhooks"),(0,r.kt)("p",null,"Momento\u3067\u306f\u3001Webhook\u306f\u30c8\u30d4\u30c3\u30af\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u6d88\u8cbb\u3059\u308b\u8ffd\u52a0\u306e\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Webhook \u306f\u7279\u5b9a\u306e\u30c8\u30d4\u30c3\u30af\u3092\u30ea\u30c3\u30b9\u30f3\u3057\u3066\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\n\u305d\u306e\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u308b\u3068\u3001Momento \u306f Webhook \u306e\u5b9b\u5148\u306b HTTP POST \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"webhook-\u306f\u3069\u3053\u3067\u4f7f\u3048\u307e\u3059\u304b"},"Webhook \u306f\u3069\u3053\u3067\u4f7f\u3048\u307e\u3059\u304b\uff1f"),(0,r.kt)("p",null,"Webhook\u306b\u306f\u3001\u9001\u4fe1\u5143\u3068\u9001\u4fe1\u5148\u306e2\u3064\u306e\u5074\u9762\u304c\u3042\u308a\u307e\u3059\u3002Momento\u306f\u3059\u3079\u3066\u306eWebhook\u306e\u9001\u4fe1\u5143\u306a\u306e\u3067\u3001\u9001\u4fe1\u5148\u304c\u6b8b\u308a\u307e\u3059\u3002\u9001\u4fe1\u5148\u306f\u3001Momento\u304c\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u4efb\u610f\u306ePOST URL\u3067\u3059\u3002Momento\u304cPOST\u3067\u304d\u308bURL\u3067\u3042\u308c\u3070\u3001Webhook\u306e\u9001\u4fe1\u5148\u3068\u3057\u3066\u6709\u52b9\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"serverless-webhooks"},"Serverless Webhooks"),(0,r.kt)("p",null,"API Gateway\u3067\u652f\u3048\u3089\u308c\u305fLambda/Step Function\u3092\u4f5c\u6210\u3059\u308b\u304b\u3001Cloud Run\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u305d\u308c\u3092Webhook\u3078\u306e\u30a8\u30f3\u30c8\u30ea\u30dd\u30a4\u30f3\u30c8\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Webhook\u304c\u767a\u706b\u3059\u308b\u3068\u3001Lambda/Step Function\u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u51e6\u7406\u3057\u3001\u30c7\u30fc\u30bf\u3092\u9069\u5207\u306b\u51e6\u7406\u3057\u307e\u3059\u3002\u30c7\u30fc\u30bf\u3092\u3069\u306e\u3088\u3046\u306b\u51e6\u7406\u3059\u308b\u304b\u306f\u5b8c\u5168\u306b\u3042\u306a\u305f\u6b21\u7b2c\u3067\u3059\uff01\nSlack\u3078\u306e\u6295\u7a3f\u3001\u30c7\u30fc\u30bf\u30ec\u30a4\u30af\u3078\u306e\u9001\u4fe1\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30a8\u30f3\u30c8\u30ea\u30fc\u306e\u66f4\u65b0\u306a\u3069\u3001\u53ef\u80fd\u6027\u306f\u7121\u9650\u5927\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u4f8b"},"\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/moderated-chat/"},"\u591a\u8a00\u8a9e\u306e\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3")," \u3053\u306e\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u81ea\u52d5\u7684\u306b\u8907\u6570\u306e\u8a00\u8a9e\u3067\u901a\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u3069\u306e\u8a00\u8a9e\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u8074\u304f\u304b\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9001\u4fe1\u3055\u308c\u308b\u305f\u3073\u306b\u3001\u305d\u308c\u306f\u79c1\u305f\u3061\u306e\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u8a00\u8a9e\u306b\u7ffb\u8a33\u3055\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3057\u3066\u3044\u308b\u8a00\u8a9e\u306f\u3001\u5f7c\u3089\u304c\u53d7\u3051\u53d6\u308b\u8a00\u8a9e\u3067\u3059\u3002Webhook\u306f\u3001Lambda\u95a2\u6570\u306b\u3088\u3063\u3066\u652f\u3048\u3089\u308c\u305fAPI Gateway\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3067\u3042\u308a\u3001\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\u3057\u3001\u305d\u308c\u3089\u3092\u7ffb\u8a33\u3057\u3001\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u8a00\u8a9e\u30c8\u30d4\u30c3\u30af\u306b\u305d\u308c\u3089\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"\u30d6\u30ed\u30b0\u8a18\u4e8b"},"\u30d6\u30ed\u30b0\u8a18\u4e8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app"},"Using Webhooks with API Gateway + Lambda")," - \u521d\u3081\u3066\u306eWebhook\u8a2d\u5b9a\u5165\u9580")),(0,r.kt)("h2",{id:"webhooks\u306eapi\u30b3\u30fc\u30eb"},"Webhooks\u306eAPI\u30b3\u30fc\u30eb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./develop/api-reference/webhooks"},"Webhooks\u306eAPI\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}p.isMDXComponent=!0},7339:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/webhooks-overview-8e88ba0b17506d571bfaf87e0cea2f65.png"}}]);