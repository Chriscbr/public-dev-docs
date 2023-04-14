"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=a,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=f(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=n(2389);const g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),f=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(d(t),s(r))},p=e=>{var t;let n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:f},i,{className:(0,o.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},2836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={sidebar_position:4,sidebar_label:"Working with files",title:"Adding and retrieving files in a cache",description:"Learn to add and retreive files with a Momento cache",pagination_next:null},s="Add and retrieve a file to Momento Cache",c={unversionedId:"develop/guides/working-with-files-cache",id:"develop/guides/working-with-files-cache",title:"Adding and retrieving files in a cache",description:"Learn to add and retreive files with a Momento cache",source:"@site/docs/develop/guides/working-with-files-cache.md",sourceDirName:"develop/guides",slug:"/develop/guides/working-with-files-cache",permalink:"/ja/develop/guides/working-with-files-cache",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/guides/working-with-files-cache.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Working with files",title:"Adding and retrieving files in a cache",description:"Learn to add and retreive files with a Momento cache",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/ja/develop/guides/cheat-sheets/momento-cache-go-cheat-sheet"}},u={},d=[],f={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-and-retrieve-a-file-to-momento-cache"},"Add and retrieve a file to Momento Cache"),(0,a.kt)("p",null,"An item in Momento Cache is a byte array, so a cache can easily store most any file you want to write, as long as it is under the ",(0,a.kt)("a",{parentName:"p",href:"/manage/limits"},"per item limit of 1MB"),"."),(0,a.kt)("p",null,"Here is an example of reading a file from the filsystem, saving the file to an item in a cache, reading it from the cache, and then writing it to the filesystem."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\nconst { CacheClient, CacheGet, CacheSet, \n    Configurations, CredentialProvider } = require('@gomomento/sdk');\nconst dotenv = require('dotenv');\n\ndotenv.config();\n\nconst filePath = './myfile.json';\nconst fileName = 'myfile';\n\nasync function run(){\n\n    const data = fs.readFileSync(filePath);\n    // add your code to catch fs errors here.\n    const byteArray = new Uint8Array(data);\n    const CACHE_NAME = 'test-cache'\n\n    const cacheClient = new CacheClient({\n        configuration: Configurations.Laptop.v1(),\n        credentialProvider: CredentialProvider.fromEnvironmentVariable({\n          environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n        }),\n        defaultTtlSeconds: 600,\n    });\n\n    // write the file to the cache\n    const setResponse = await cacheClient.set(CACHE_NAME, fileName, byteArray);\n    if (setResponse instanceof CacheSet.Success) {\n        console.log('Key stored successfully!');\n    } else if (setResponse instanceof CacheSet.Error){\n        console.log(`Error setting key: ${setResponse.toString()}`);\n    } else {\n        console.log(`Some other error: ${setResponse.toString()}`);\n    }\n\n    // read the file from the cache\n    const fileResponse = await cacheClient.get(CACHE_NAME, fileName);\n    if (fileResponse instanceof CacheGet.Hit) {\n        console.log(`cache hit: ${fileResponse.valueString()}`);\n        const contents = fileResponse.valueUint8Array();\n        const buffer = Buffer.from(contents);\n        fs.writeFileSync(\"./myfile2.json\", buffer)\n      } else if (fileResponse instanceof CacheGet.Miss) {\n        console.log('cache miss');\n      } else if (fileResponse instanceof CacheGet.Error) {\n        console.log(`Error: ${fileResponse.message()}`);\n      }\n}\n\nrun();\n")),(0,a.kt)("p",null,"Check our ",(0,a.kt)("a",{parentName:"p",href:"/ja/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet"},"Node.js cheat sheet")," for more on using our Node.js SDK")),(0,a.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},"Coming soon.")))}p.isMDXComponent=!0}}]);