"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,u=m["".concat(d,".").concat(h)]||m[h]||p[h]||o;return n?i.createElement(u,a(a({ref:t},c),{},{components:n})):i.createElement(u,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Cheat Sheet for Python + Momento Vector Index",description:"Everything to get you going with coding using Python and Momento Vector Index"},a="Cheat Sheet for Python with Momento Vector Index",s={unversionedId:"vector-index/develop/sdks/python/cheat-sheet",id:"vector-index/develop/sdks/python/cheat-sheet",title:"Cheat Sheet for Python + Momento Vector Index",description:"Everything to get you going with coding using Python and Momento Vector Index",source:"@site/docs/vector-index/develop/sdks/python/cheat-sheet.md",sourceDirName:"vector-index/develop/sdks/python",slug:"/vector-index/develop/sdks/python/cheat-sheet",permalink:"/vector-index/develop/sdks/python/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/develop/sdks/python/cheat-sheet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Cheat Sheet for Python + Momento Vector Index",description:"Everything to get you going with coding using Python and Momento Vector Index"},sidebar:"vectorSidebar",previous:{title:"Python",permalink:"/vector-index/develop/sdks/python/"},next:{title:"Service Limits",permalink:"/vector-index/limits"}},d={},l=[{value:"Import libraries and instantiate a vector index client",id:"import-libraries-and-instantiate-a-vector-index-client",level:2},{value:"Create a new index in Momento Vector Index",id:"create-a-new-index-in-momento-vector-index",level:2},{value:"Get list of existing indexes in your account",id:"get-list-of-existing-indexes-in-your-account",level:2},{value:"Write a batch of items to the index",id:"write-a-batch-of-items-to-the-index",level:2},{value:"Searching the index",id:"searching-the-index",level:2},{value:"Deleting items from the index",id:"deleting-items-from-the-index",level:2},{value:"Deleting an index",id:"deleting-an-index",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cheat-sheet-for-python-with-momento-vector-index"},"Cheat Sheet for Python with Momento Vector Index"),(0,r.kt)("p",null,"If you need to get going quickly with Python and Momento Vector Index, this page contains the basic API calls you'll need."),(0,r.kt)("h2",{id:"import-libraries-and-instantiate-a-vector-index-client"},"Import libraries and instantiate a vector index client"),(0,r.kt)("p",null,"This code sets up the class with the necessary imports, the class definition, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"PreviewVectorIndexClient")," instantiation that each of the other functions will need to call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from momento import (\n    CredentialProvider,\n    PreviewVectorIndexClient,\n    VectorIndexConfigurations,\n)\n\nfrom momento.requests.vector_index import (\n    ALL_METADATA,\n    Item,\n    SimilarityMetric\n)\nfrom momento.responses.vector_index import (\n    UpsertItemBatch,\n    CreateIndex,\n    DeleteIndex,\n    DeleteItemBatch,\n    ListIndexes,\n    Search,\n)\n\nclient = PreviewVectorIndexClient(\n    configuration=VectorIndexConfigurations.Default.latest(),\n    credential_provider=CredentialProvider.from_environment_variable('MOMENTO_API_KEY')\n  )\n")),(0,r.kt)("p",null,"The following examples assume that you have already instantiated a ",(0,r.kt)("inlineCode",{parentName:"p"},"PreviewVectorIndexClient")," as shown above."),(0,r.kt)("h2",{id:"create-a-new-index-in-momento-vector-index"},"Create a new index in Momento Vector Index"),(0,r.kt)("p",null,"Use this snippet to create a new index in your account. The ",(0,r.kt)("inlineCode",{parentName:"p"},"similarity_metric")," parameter is optional and defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"SimilarityMetric.COSINE_SIMILARITY"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'index_name = "my_index"\n # The number of dimensions in your vectors\nnum_dimensions = 2\nsimilarity_metric = SimilarityMetric.COSINE_SIMILARITY\n\ncreate_index_response = client.create_index(index_name, num_dimensions, similarity_metric)\nif isinstance(create_index_response, CreateIndex.Success):\n    print(f"Index with name {index_name!r} successfully created!")\nelif isinstance(create_index_response, CreateIndex.IndexAlreadyExists):\n    print(f"Index with name {index_name!r} already exists")\nelif isinstance(create_index_response, CreateIndex.Error):\n    print(f"Error while creating index: {create_index_response.message}")\n')),(0,r.kt)("h2",{id:"get-list-of-existing-indexes-in-your-account"},"Get list of existing indexes in your account"),(0,r.kt)("p",null,"In this example, we list the indexes in your account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'list_indexes_response = client.list_indexes()\nif isinstance(list_indexes_response, ListIndexes.Success):\n    for index in list_indexes_response.index_names:\n        print(f"Account has an index with name: {index!r}")\nelif isinstance(list_indexes_response, ListIndexes.Error):\n    print(f"Error while listing indexes: {list_indexes_response.message}")\n')),(0,r.kt)("h2",{id:"write-a-batch-of-items-to-the-index"},"Write a batch of items to the index"),(0,r.kt)("p",null,"A simple example of doing an ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert_item_batch")," operation. This operation will insert the items if they don't exist, or replace them if they do."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'index_name = "my_index"\nitems = [\n        Item(id="test_item_1", vector=[1.0, 2.0], metadata={"key1": "value1"}),\n        Item(id="test_item_2", vector=[3.0, 4.0], metadata={"key2": "value2"}),\n        Item(id="test_item_3", vector=[5.0, 6.0], metadata={"key1": "value3", "key3": "value3"}),\n]\n\nprint(f"Upserting items {items}")\nupsert_response = client.upsert_item_batch(\n    index_name,\n    items=items,\n)\nif isinstance(upsert_response, UpsertItemBatch.Success):\n    print("Successfully upserted items")\nelif isinstance(upsert_response, UpsertItemBatch.Error):\n    print(f"Error while adding items to index {index_name!r}: {upsert_response.message}")\n')),(0,r.kt)("h2",{id:"searching-the-index"},"Searching the index"),(0,r.kt)("p",null,"This is an example of a search operation to get the top-k items from the index matching the ",(0,r.kt)("inlineCode",{parentName:"p"},"query_vector"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata_fields")," parameter is optional and can be used to specify which metadata fields to return in the response."),(0,r.kt)("p",null,"Here we use a ",(0,r.kt)("inlineCode",{parentName:"p"},"query_vector")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"[1.0, 2.0]")," and ask for the top 2 results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'index_name = "my_index"\nquery_vector = [1.0, 2.0]\ntop_k = 2\n\nprint(f"Searching index {index_name} with query_vector {query_vector} and top {top_k} elements")\nsearch_response = client.search(index_name, query_vector=query_vector, top_k=top_k, metadata_fields=ALL_METADATA)\nif isinstance(search_response, Search.Success):\n    print(f"Search succeeded with {len(search_response.hits)} matches")\nelif isinstance(search_response, Search.Error):\n    print(f"Error while searching on index {index_name}: {search_response.message}")\n')),(0,r.kt)("h2",{id:"deleting-items-from-the-index"},"Deleting items from the index"),(0,r.kt)("p",null,"An example of deleting the items from an index using ",(0,r.kt)("inlineCode",{parentName:"p"},"delete_item_batch"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'index_name = "my_index"\nitem_ids_to_delete = ["test_item_1", "test_item_3"]\n\ndelete_response = client.delete_item_batch(index_name, ids=item_ids_to_delete)\nif isinstance(delete_response, DeleteItemBatch.Success):\n    print("Successfully deleted items")\nelif isinstance(delete_response, DeleteItemBatch.Error):\n    print(f"Error while deleting items {delete_response.message}")\n')),(0,r.kt)("h2",{id:"deleting-an-index"},"Deleting an index"),(0,r.kt)("p",null,"An example of deleting an index using ",(0,r.kt)("inlineCode",{parentName:"p"},"delete_index"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'index_name = "my_index"\n\ndelete_response = client.delete_index(index_name)\nif isinstance(delete_response, DeleteIndex.Success):\n    print("Successfully deleted index")\nelif isinstance(delete_response, DeleteIndex.Error):\n    print(f"Error while deleting index {delete_response.message}")\n')))}p.isMDXComponent=!0}}]);