"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7738],{5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(7462),a=r(7294),l=r(6010),i=r(2466),s=r(6550),o=r(1980),c=r(7392),u=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,c]=h({queryString:r,groupId:n}),[d,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),x=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{x&&s(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,l]),tabValues:l}}var x=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==s&&(d(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function N(e){const t=(0,x.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},3404:(e,t,r)=>{r(7294)},9720:(e,t,r)=>{r.d(t,{X:()=>s});var n=r(4866),a=r(5162),l=r(614),i=r(7294);const s=e=>{let{js:t,python:r,java:s,go:o,csharp:c,php:u,rust:d,ruby:p,elixir:m,cli:h}=e;return t||r||s||o||c||u||d||p||m||h?i.createElement(n.Z,null,t&&i.createElement(a.Z,{value:"js",label:"JavaScript"},i.createElement(l.Z,{language:"js"},t)),r&&i.createElement(a.Z,{value:"python",label:"Python"},i.createElement(l.Z,{language:"python"},r)),s&&i.createElement(a.Z,{value:"java",label:"Java"},i.createElement(l.Z,{language:"java"},s)),o&&i.createElement(a.Z,{value:"go",label:"Go"},i.createElement(l.Z,{language:"go"},o)),c&&i.createElement(a.Z,{value:"csharp",label:"C#"},i.createElement(l.Z,{language:"csharp"},c)),u&&i.createElement(a.Z,{value:"php",label:"PHP"},i.createElement(l.Z,{language:"php"},u)),d&&i.createElement(a.Z,{value:"rust",label:"Rust"},i.createElement(l.Z,{language:"rust"},d)),p&&i.createElement(a.Z,{value:"ruby",label:"Ruby"},i.createElement(l.Z,{language:"ruby"},p)),m&&i.createElement(a.Z,{value:"elixir",label:"Elixir"},i.createElement(l.Z,{language:"elixir"},m)),h&&i.createElement(a.Z,{value:"cli",label:"CLI"},i.createElement(l.Z,{language:"cli"},h))):null}},9105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),l=(r(3404),r(9720));const i={sidebar_position:1,sidebar_label:"API Reference",title:"MVI API reference",description:"Learn how to interact programmatically with Momento Vector Index API."},s="Using the Momento Vector Index API",o={unversionedId:"vector-index/develop/api-reference/index",id:"vector-index/develop/api-reference/index",title:"MVI API reference",description:"Learn how to interact programmatically with Momento Vector Index API.",source:"@site/docs/vector-index/develop/api-reference/index.md",sourceDirName:"vector-index/develop/api-reference",slug:"/vector-index/develop/api-reference/",permalink:"/vector-index/develop/api-reference/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/develop/api-reference/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"API Reference",title:"MVI API reference",description:"Learn how to interact programmatically with Momento Vector Index API."},sidebar:"vectorSidebar",previous:{title:"Develop"},next:{title:"Auth",permalink:"/vector-index/develop/api-reference/auth"}},c={},u=[{value:"TopicClient",id:"topicclient",level:2},{value:"Vector Index methods",id:"vector-index-methods",level:2},{value:"Create Index",id:"create-index",level:3},{value:"Delete Index",id:"delete-index",level:3},{value:"List Indexes",id:"list-indexes",level:3},{value:"Upsert Item Batch",id:"upsert-item-batch",level:3},{value:"Search",id:"search",level:3},{value:"Delete Item Batch",id:"delete-item-batch",level:3}],d={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-the-momento-vector-index-api"},"Using the Momento Vector Index API"),(0,a.kt)("p",null,"Momento Vector Index (MVI) is a scalable, developer-friendly vector index service designed for real-time storage and retrieval of vector data for use in AI-powered applications."),(0,a.kt)("h2",{id:"topicclient"},"TopicClient"),(0,a.kt)("p",null,"To interact with Momento Vector Indexes, you must use a VectorIndexClient."),(0,a.kt)(l.X,{js:"new PreviewVectorIndexClient({\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n  configuration: VectorIndexConfigurations.Laptop.latest(),\n});",python:'PreviewVectorIndexClientAsync(\n    VectorIndexConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n',java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h2",{id:"vector-index-methods"},"Vector Index methods"),(0,a.kt)("h3",{id:"create-index"},"Create Index"),(0,a.kt)("p",null,"Creates a vector index."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"indexName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the vector index.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"numDimensions"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of dimensions per vector.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"similarityMetric"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Metric used to quantify the distance between vectors. Can be cosine similarity, inner product, or euclidean similarity. Defaults to cosine similarity.")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success"),(0,a.kt)("li",{parentName:"ul"},"AlreadyExists"),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,a.kt)(l.X,{js:"const result = await vectorClient.createIndex('test-index', 2);\nif (result instanceof CreateVectorIndex.Success) {\n  console.log(\"Index 'test-index' created\");\n} else if (result instanceof CreateVectorIndex.AlreadyExists) {\n  console.log(\"Index 'test-index' already exists\");\n} else if (result instanceof CreateVectorIndex.Error) {\n  throw new Error(\n    `An error occurred while attempting to create index 'test-index': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await vector_client.create_index("test-index", 2)\nmatch response:\n    case CreateIndex.Success():\n        print("Index \'test-index\' created")\n    case CreateIndex.IndexAlreadyExists():\n        print("Index \'test-index\' already exists")\n    case CreateIndex.Error() as error:\n        print(f"Error creating index \'test-index\': {error.message}")\n\n',java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h3",{id:"delete-index"},"Delete Index"),(0,a.kt)("p",null,"Deletes a vector index."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"indexName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the vector index.")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success"),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,a.kt)(l.X,{js:"const result = await vectorClient.deleteIndex('test-index');\nif (result instanceof DeleteVectorIndex.Success) {\n  console.log(\"Index 'test-index' deleted\");\n} else if (result instanceof DeleteVectorIndex.Error) {\n  throw new Error(\n    `An error occurred while attempting to delete index 'test-index': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await vector_client.delete_index("test-index")\nmatch response:\n    case DeleteIndex.Success():\n        print("Index \'test-index\' deleted")\n    case DeleteIndex.Error() as error:\n        print(f"Error deleting index \'test-index\': {error.message}")\n\n',java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h3",{id:"list-indexes"},"List Indexes"),(0,a.kt)("p",null,"Lists all vector indexes."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"getIndexNames(): string[]"))),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,a.kt)(l.X,{js:"const result = await vectorClient.listIndexes();\nif (result instanceof ListVectorIndexes.Success) {\n  console.log(`Indexes:\\n${result.getIndexNames().join('\\n')}\\n\\n`);\n} else if (result instanceof ListVectorIndexes.Error) {\n  throw new Error(`An error occurred while attempting to list caches: ${result.errorCode()}: ${result.toString()}`);\n}",python:'response = await vector_client.list_indexes()\nmatch response:\n    case ListIndexes.Success() as success:\n        print(f"Indexes:\\n{success.index_names}")\n    case CreateIndex.Error() as error:\n        print(f"Error listing indexes: {error.message}")\n\n',java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h3",{id:"upsert-item-batch"},"Upsert Item Batch"),(0,a.kt)("p",null,"Upserts a batch of items into a vector index."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"indexName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the vector index.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"items"),(0,a.kt)("td",{parentName:"tr",align:null},"VectorIndexItem"),(0,a.kt)("td",{parentName:"tr",align:null},"Items to upsert into the index.")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success"),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,a.kt)(l.X,{js:"const result = await vectorClient.upsertItemBatch('test-index', [\n  {\n    id: 'example_item_1',\n    vector: [1.0, 2.0],\n    metadata: {key1: 'value1'},\n  },\n  {\n    id: 'example_item_2',\n    vector: [3.0, 4.0],\n    metadata: {key2: 'value2'},\n  },\n]);\nif (result instanceof VectorUpsertItemBatch.Success) {\n  console.log('Successfully added items');\n} else if (result instanceof VectorUpsertItemBatch.Error) {\n  throw new Error(`An error occurred while adding items to index: ${result.errorCode()}: ${result.toString()}`);\n}",python:'response = await vector_client.upsert_item_batch(\'test-index\', [\n    Item(id="example_item_1", vector=[1.0, 2.0], metadata={"key1": "value1"}),\n    Item(id="example_item_2", vector=[3.0, 4.0], metadata={"key2": "value2"}),\n])\nmatch response:\n    case UpsertItemBatch.Success():\n        print("Successfully added items to index \'test-index\'")\n    case UpsertItemBatch.Error() as error:\n        print(f"Error adding items to index \'test-index\': {error.message}")\n\n',java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h3",{id:"search"},"Search"),(0,a.kt)("p",null,"Deletes a batch of items from a vector index."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"indexName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the vector index.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"queryVector"),(0,a.kt)("td",{parentName:"tr",align:null},"number[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Vector to search for.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topK"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of results to return. Defaults to 10.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadataFields"),(0,a.kt)("td",{parentName:"tr",align:null},"String[] or ALL_VECTOR_METADATA"),(0,a.kt)("td",{parentName:"tr",align:null},"A list of metadata fields to return with each result, or a value indicating all metadata should be returned. If not provided, no metadata is returned. Defaults to None.")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"hits(): SearchHit[]",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SearchHit: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"id(): string"),(0,a.kt)("li",{parentName:"ul"},"distance(): number"),(0,a.kt)("li",{parentName:"ul"},"metadata(): Map<string, string>"))))))),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,a.kt)(l.X,{js:"const result = await vectorClient.search('test-index', [1.0, 2.0], {topK: 3, metadataFields: ALL_VECTOR_METADATA});\nif (result instanceof VectorSearch.Success) {\n  console.log(`Found ${result.hits().length} matches`);\n} else if (result instanceof VectorSearch.Error) {\n  throw new Error(`An error occurred searching index test-index: ${result.errorCode()}: ${result.toString()}`);\n}",python:"response = await vector_client.search('test-index', [1.0, 2.0], top_k=3, metadata_fields=ALL_METADATA)\nmatch response:\n    case Search.Success() as success:\n        print(f\"Found {len(success.hits)} matches\")\n    case Search.Error() as error:\n        print(f\"Error searching index 'test-index': {error.message}\")\n\n",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h3",{id:"delete-item-batch"},"Delete Item Batch"),(0,a.kt)("p",null,"Deletes a batch of items from a vector index."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"indexName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the vector index.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"items"),(0,a.kt)("td",{parentName:"tr",align:null},"String[]"),(0,a.kt)("td",{parentName:"tr",align:null},"IDs of the items to be deleted.")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success"),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,a.kt)(l.X,{js:"const result = await vectorClient.deleteItemBatch('test-index', ['example_item_1', 'example_item_2']);\nif (result instanceof VectorUpsertItemBatch.Success) {\n  console.log('Successfully deleted items');\n} else if (result instanceof VectorUpsertItemBatch.Error) {\n  throw new Error(`An error occurred while deleting items: ${result.errorCode()}: ${result.toString()}`);\n}",python:"response = await vector_client.delete_item_batch('test-index', ['example_item_1', 'example_item_2'])\nmatch response:\n    case DeleteItemBatch.Success():\n        print(\"Successfully deleted items from index 'test-index'\")\n    case DeleteItemBatch.Error() as error:\n        print(f\"Error deleting items from index 'test-index': {error.message}\")\n\n",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}m.isMDXComponent=!0}}]);