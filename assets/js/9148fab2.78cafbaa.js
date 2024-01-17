"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4231],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:1,sidebar_label:"Data Types",title:"Supported data types",description:"Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each."},s="Supported data types in Momento Cache",i={unversionedId:"cache/develop/basics/datatypes",id:"cache/develop/basics/datatypes",title:"Supported data types",description:"Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each.",source:"@site/docs/cache/develop/basics/datatypes.md",sourceDirName:"cache/develop/basics",slug:"/cache/develop/basics/datatypes",permalink:"/cache/develop/basics/datatypes",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/basics/datatypes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Data Types",title:"Supported data types",description:"Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each."},sidebar:"tutorialSidebar",previous:{title:"Basics"},next:{title:"SDK Configuration Objects",permalink:"/cache/develop/basics/client-configuration-objects"}},l={},c=[{value:"Core data types of Momento Cache",id:"core-data-types-of-momento-cache",level:2},{value:"Byte arrays",id:"byte-arrays",level:3},{value:"Collection data types (CDTs)",id:"collection-data-types-cdts",level:3},{value:"Lists",id:"lists",level:4},{value:"Dictionaries",id:"dictionaries",level:4},{value:"Sets",id:"sets",level:4},{value:"Sorted sets",id:"sorted-sets",level:4},{value:"FAQs",id:"faqs",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supported-data-types-in-momento-cache"},"Supported data types in Momento Cache"),(0,o.kt)("p",null,"Momento Cache provides a group of core data types to match up with common types in various modern programming languages. This page has a list of the core data structures and information about each of them."),(0,o.kt)("h2",{id:"core-data-types-of-momento-cache"},"Core data types of Momento Cache"),(0,o.kt)("h3",{id:"byte-arrays"},"Byte arrays"),(0,o.kt)("p",null,"All data stored is represented as byte arrays. The Momento SDKs provide easy methods you can use to store your data as raw bytes or as portable UTF-8 strings. Those can be in the form of scalar data, such as strings, characters, numbers, and binary data, such as images and Protocol Buffers serialized arrays."),(0,o.kt)("h3",{id:"collection-data-types-cdts"},"Collection data types (CDTs)"),(0,o.kt)("p",null,"Collection Data Types are a grouping of related data into a single item. They are stored as byte array values and each has their own set of API calls in Momento SDKs. For example, DictionaryFetch, ListFetch, and SetFetch."),(0,o.kt)("img",{src:"/img/collection_data_types.png",alt:"Collection data types drawing | Momento Cache",width:"80%"}),(0,o.kt)("h4",{id:"lists"},"Lists"),(0,o.kt)("p",null,"A list is a collection of ordered elements, sorted in the sequence each element was inserted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"Hoover\u2019s Sour Cream Cookies" = [\n  "1 cup butter (2 sticks), room temperature",\n  "1 cup granulated sugar",\n  "1 cup brown sugar, packed",\n  "3 eggs, room temperature",\n  "1 cup sour cream, room temperature",\n  "1 tsp pure vanilla extract",\n  "3 cups all-purpose flour",\n  "1 tsp baking powder",\n  "1 tsp baking soda",\n  "1 tsp salt"\n]\n')),(0,o.kt)("p",null,"To learn the API methods, check the ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/list-collections"},"API reference for list collection data types"),"."),(0,o.kt)("h4",{id:"dictionaries"},"Dictionaries"),(0,o.kt)("p",null,"A dictionary is a collection of unordered elements where each element is a field:value pair."),(0,o.kt)("p",null,"An example of using a dictionary is when you need to store data together and retrieve field:value pairs by name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"truck546" = {\n    "brand" : "Ford",\n    "model": "F-350",\n    "year" : "2020",\n    "engine" : "diesel"\n}\n')),(0,o.kt)("p",null,"To learn the API methods, check the ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/dictionary-collections"},"API reference for dictionary collection data types"),"."),(0,o.kt)("h4",{id:"sets"},"Sets"),(0,o.kt)("p",null,"A set is an unordered collection of unique elements, each in string format. For example, no matter how many times you add 'sugar' to a set, there will only be one entry for 'sugar'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"myIngredients" = {\n    "water",\n    "sugar",\n    "ground cinnamon",\n    "all-purpose flour",\n    "baking soda",\n    "raisins"\n}\n')),(0,o.kt)("p",null,"To learn the API methods, check the ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/set-collections"},"API reference for set collection data types"),"."),(0,o.kt)("h4",{id:"sorted-sets"},"Sorted sets"),(0,o.kt)("p",null,"A sorted set is a collection of unique elements with a value (string) and score (signed double 64-bit float) pair. The elements in the item are ordered by score value. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"players" = {\n    "SorataABard" : 32.7,\n    "Juliversal" : 30.45,\n    "DragonNosy" : 26.8,\n    "redbyrd" : 26.8,\n    "SaltyAdjeley" : 23.25,\n    "ZachAttack" : 17.3,\n    "ElyahouBeets" : 5.0,\n    "Smashley" : 3.2"\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If elements have the same score, they are sorted ",(0,o.kt)("a",{parentName:"p",href:"https://www.dictionary.com/browse/lexicographically"},"lexicographically"),".")),(0,o.kt)("p",null,"To learn the API methods, check the ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/sorted-set-collections"},"API reference for sorted set collection data types"),"."),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"If I perform an API call to get a subset of data from a dictionary item, will the size of the entire item count toward the per GB transfer costs?"),"No, it will not. For example, if you perform the API call DictionaryGetField to get one 5-kilobyte field:value pair from a dictionary where the entire dictionary item is 50 kilobytes, only 5 kilobytes count towards your per GB transfer costs."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I store a JSON document in Momento Cache?"),"Use your favorite JSON library to serialize the JSON document into a byte array and insert that byte array into Momento Cache. You could also store each field value in your JSON document in a dictionary."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Does Momento Cache store nested data in collection data types?"),"Not directly. Your best option is to store this data as a JSON object and then use your favorite JSON library to serialize the JSON document into a byte array and insert that byte array into Momento Cache."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I format elements when using the increment APIs?"),"Elements used with increment API calls must be stored as a UTF-8 string representing a base 10 integer. If the elements are not in that format, the API calls will throw a formatting error."))}p.isMDXComponent=!0}}]);