"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:8,title:"Momento Ruby SDK",pagination_prev:null,sidebar_label:"Ruby",description:"Momento Ruby SDK \u306b\u95a2\u3059\u308b\u60c5\u5831\u3067\u3059\u3002"},a="Momento Ruby SDK",l={unversionedId:"topics/develop/sdks/ruby/index",id:"topics/develop/sdks/ruby/index",title:"Momento Ruby SDK",description:"Momento Ruby SDK \u306b\u95a2\u3059\u308b\u60c5\u5831\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/sdks/ruby/index.md",sourceDirName:"topics/develop/sdks/ruby",slug:"/topics/develop/sdks/ruby/",permalink:"/ja/topics/develop/sdks/ruby/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/sdks/ruby/index.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Momento Ruby SDK",pagination_prev:null,sidebar_label:"Ruby",description:"Momento Ruby SDK \u306b\u95a2\u3059\u308b\u60c5\u5831\u3067\u3059\u3002"},sidebar:"topicsSidebar",next:{title:"Rust",permalink:"/ja/topics/develop/sdks/rust/"}},u={},p=[{value:"\u5fc5\u8981\u6761\u4ef6",id:"\u5fc5\u8981\u6761\u4ef6",level:2},{value:"\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u9023\u643a",id:"\u9023\u643a",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-ruby-sdk"},"Momento Ruby SDK"),(0,o.kt)("p",null,"\u3088\u3046\u3053\u305d\u3001Momento Ruby SDK \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3078\uff01"),(0,o.kt)("p",null,"Momento Ruby SDK \u306f ",(0,o.kt)("a",{parentName:"p",href:"https://rubygems.org/gems/momento"},(0,o.kt)("inlineCode",{parentName:"a"},"momento"))," \u306e rubygems \u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f GitHub \u306b\u3042\u308a\u307e\u3059: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-ruby"},"momentohq/client-sdk-ruby"),"\u3002"),(0,o.kt)("h2",{id:"\u5fc5\u8981\u6761\u4ef6"},"\u5fc5\u8981\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,o.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento \u30a6\u30a7\u30d6\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u304b\u3089\u53d6\u5f97\u53ef\u80fd\u3067\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"Ruby 2.7 \u4ee5\u4e0a\u3002")),(0,o.kt)("h2",{id:"\u30ea\u30bd\u30fc\u30b9"},"\u30ea\u30bd\u30fc\u30b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u307e\u3082\u306a\u304f: Ruby SDK \u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-ruby/blob/main/examples/README.md"},"Ruby SDK \u4f8b"),": Ruby SDK \u306e\u4f7f\u3044\u65b9\u3092\u304a\u898b\u305b\u3059\u308b\u305f\u3081\u306e\u52d5\u4f5c\u53ef\u80fd\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f8b\u3067\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u307e\u3082\u306a\u304f: \u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3: Ruby SDK \u3092\u4f7f\u3063\u305f\u30ed\u30ae\u30f3\u30b0\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306e\u30e1\u30c8\u30ea\u30af\u30b9"),(0,o.kt)("li",{parentName:"ul"},"\u307e\u3082\u306a\u304f: \u30b3\u30fc\u30c9\u3092\u672c\u756a\u74b0\u5883\u3078: Ruby SDK \u3067\u306e\u8a2d\u5b9a\u3068\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0")),(0,o.kt)("h2",{id:"\u9023\u643a"},"\u9023\u643a"),(0,o.kt)("p",null,"\u307e\u3082\u306a\u304f\uff01"))}c.isMDXComponent=!0}}]);