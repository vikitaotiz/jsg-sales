import{Q as m,a as le}from"./QTr.da10a9bf.js";import{r as d,j as ne,aI as _,a5 as x,u as v,P as r,a3 as A,bb as l,b as re,d as t,ac as i,bD as D,bE as g,a6 as y,a4 as E}from"./index.43b29598.js";import{Q as V}from"./QInput.50502b6a.js";import{Q as oe}from"./QBtnGroup.8ab77508.js";import{Q as ue,c as R,p as ie,d as C,f as j,e as se}from"./paginations.d31396ff.js";import{a as F,Q as S}from"./QBadge.c37ec33e.js";import{a as G,Q as w}from"./QCard.287aa4cb.js";import{e as de,a as ce}from"./excel.5d19a2ad.js";import{a as me}from"./use-quasar.811db318.js";import{a as pe,u as Y}from"./index.fe5141b8.js";import{u as ve}from"./inventory-store.b30b785a.js";import{u as ye}from"./product-store.37496ad2.js";import"./use-dark.ad1ce312.js";import"./QSeparator.00910b71.js";import"./rtl.e3274486.js";import"./module_calls.e16012c0.js";import"./helpers.01ee3f07.js";const H=[{name:"product",required:!0,label:"Product",align:"left",field:I=>I.name,format:I=>`${I}`,sortable:!0},{name:"buying_price",align:"center",label:"Buying Price",field:"buying_price",sortable:!0},{name:"quantity",align:"center",label:"Quantity",field:"quantity",sortable:!0},{name:"total",align:"center",label:"Total",field:"total",sortable:!0},{name:"measurement",align:"center",label:"Measurement",field:"measurement",sortable:!0},{name:"department",align:"center",label:"Department",field:"department",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const fe={class:"q-pa-md"},_e={key:0},ge={key:1},be={class:"text-center error_msg"},Qe={class:"text-h6"},ke={key:0},Ve={class:"text-center error_msg"},ze={__name:"Inventories",setup(I){const N=me(),B=pe(),q=ve(),$=ye(),P=ie(10),b=d(!1),p=d(!1),Q=d(!1),h=d(!1),T=d(""),k=d(""),u=d(1),s=d(1),o=ne({product_id:"",measurement_id:""}),U=d(""),f=d(""),{data:M,isLoading:J,isError:z}=Y("inventories",()=>q.fetchInventories()),{data:K}=Y("products",()=>$.fetchProducts()),W=async n=>{if(confirm(`Continue with the operation. Delete ${n.name} ?`)){const e=await q.deleteInventory({uuid:n.uuid});e.status==="success"?(B.refetchQueries("inventories"),c(e.message,"green","top")):c("There was an error","red","top-right")}},X=()=>{$.products.length===0?c("You need to create at least one PRODUCT in order to create inventories!","orange","top"):(k.value="Create Inventory",b.value=!0,h.value=!1)},Z=n=>{u.value=n.quantity,s.value=n.buying_price,k.value=`Update Actual Quantity for  ${n.product}`,U.value=n,Q.value=!0},ee=async()=>{p.value=!0,f.value="";const n={product_uuid:o.product_id.uuid,measurement_name:o.product_id.measurement,quantity:u.value,buying_price:s.value};if(n.product_uuid&&n.measurement_name&&n.quantity&&n.buying_price){const a=await q.createInventory(n);a.status==="success"?(B.refetchQueries("inventories"),o.product_id="",o.measurement_id="",u.value=1,o.buying_price=1,b.value=!1,p.value=!1,c(a.message,"green","top")):(f.value=a.message,c(a.message,"red","top-right"))}else p.value=!1,f.value="Product, Quantity and Buying Price are required!",c("Product, Quantity and Buying Price are required!","red","top-right")},L=async()=>{p.value=!0;const n={quantity:Number(u.value),buying_price:Number(s.value),inventory_uuid:U.value.uuid};if(n.quantity&&n.buying_price){const a=await q.updateInventory(n);a.status==="success"?(B.refetchQueries("inventories"),u.value=1,s.value=1,b.value=!1,Q.value=!1,h.value=!1,k.value="",p.value=!1,c(a.message,"green","top")):c("There was an error","red","top-right")}else p.value=!1,f.value="Quantity and Buying price are required!",c("Quantity and Buying price are required!","red","top-right")},O=()=>{b.value=!1,Q.value=!1,o.product_id="",u.value=1,s.value=1,U.value="",f.value=""},c=(n,a,e)=>{N.notify({message:n,color:a,position:e})},te=n=>{const a=n.map(e=>({name:e.name,inventories:e.inventories.length,created_at:e.created_at}));de(a,H,ce,N,"InventoriesData")};return(n,a)=>(_(),x("div",fe,[v(J)?(_(),x("div",_e,"Loading inventories...")):v(z)?(_(),x("div",ge,"An error has occurred: "+r(v(z)),1)):(_(),A(ue,{key:2,title:"Inventories",rows:v(M),columns:v(H),pagination:v(P),"onUpdate:pagination":a[2]||(a[2]=e=>re(P)?P.value=e:null),separator:"cell","row-key":"name",filter:T.value,dense:""},{body:l(e=>[t(le,{props:e},{default:l(()=>[t(m,{key:"product",props:e},{default:l(()=>[i(r(e.row.product),1)]),_:2},1032,["props"]),t(m,{key:"buying_price",props:e},{default:l(()=>[i(r(e.row.buying_price),1)]),_:2},1032,["props"]),t(m,{key:"quantity",props:e},{default:l(()=>[i(r(e.row.quantity),1)]),_:2},1032,["props"]),t(m,{key:"total",props:e},{default:l(()=>[i(r(e.row.total),1)]),_:2},1032,["props"]),t(m,{key:"measurement",props:e},{default:l(()=>[i(r(e.row.measurement),1)]),_:2},1032,["props"]),t(m,{key:"department",props:e},{default:l(()=>[i(r(e.row.department),1)]),_:2},1032,["props"]),t(m,{key:"user",props:e},{default:l(()=>[i(r(e.row.user),1)]),_:2},1032,["props"]),t(m,{key:"created_at",props:e},{default:l(()=>[i(r(e.row.created_at),1)]),_:2},1032,["props"]),t(m,{key:"actions",props:e},{default:l(()=>[t(D,{color:"blue",name:"edit",onClick:ae=>Z(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(D,{color:"red",name:"delete",onClick:ae=>W(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":l(()=>[t(V,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:T.value,"onUpdate:modelValue":a[0]||(a[0]=e=>T.value=e),placeholder:"Search",class:"q-mr-md"},{append:l(()=>[t(D,{name:"search"})]),_:1},8,["modelValue"]),t(oe,null,{default:l(()=>[t(g,{onClick:X,dense:"",color:"primary",icon:"add",label:"Add"}),t(g,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=e=>te(v(M)))})]),_:1})]),_:1},8,["rows","columns","pagination","filter"])),t(R,{modelValue:Q.value,"onUpdate:modelValue":a[5]||(a[5]=e=>Q.value=e),persistent:""},{default:l(()=>[t(G,{style:{width:"500px"}},{default:l(()=>[t(F,null,{default:l(()=>[i(r(k.value)+" ",1),t(C),y("small",null,[t(S,null,{default:l(()=>[i("Total: "+r(u.value*s.value),1)]),_:1})])]),_:1}),t(w,null,{default:l(()=>[t(V,{dense:"",outlined:"",modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=e=>u.value=e),label:"Actual Quantity",type:"number"},null,8,["modelValue"])]),_:1}),t(w,null,{default:l(()=>[t(V,{dense:"",outlined:"",modelValue:s.value,"onUpdate:modelValue":a[4]||(a[4]=e=>s.value=e),label:"Buying Price",type:"number"},null,8,["modelValue"])]),_:1}),y("div",be,[y("small",null,r(f.value),1)]),t(j,{align:"right"},{default:l(()=>[t(g,{flat:"",label:"Cancel",color:"red",onClick:O}),t(C),t(g,{flat:"",label:"Edit Inventory",color:"primary",onClick:L})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(R,{modelValue:b.value,"onUpdate:modelValue":a[9]||(a[9]=e=>b.value=e),persistent:""},{default:l(()=>[t(G,{style:{width:"600px"}},{default:l(()=>[t(F,null,{default:l(()=>[y("div",Qe,r(k.value),1),t(C),y("small",null,[y("i",null,"Total: "+r(u.value*o.buying_price),1)]),t(C),o.product_id?(_(),x("small",ke,[t(S,{class:"q-mr-sm"},{default:l(()=>[i("Measurement: "+r(o.product_id.measurement),1)]),_:1}),t(S,null,{default:l(()=>[i("Available Quantity: "+r(o.product_id.quantity),1)]),_:1})])):E("",!0)]),_:1}),t(w,null,{default:l(()=>[t(se,{dense:"",outlined:"",modelValue:o.product_id,"onUpdate:modelValue":a[6]||(a[6]=e=>o.product_id=e),options:v(K),"option-value":"uuid","option-label":"name",label:"Select Product"},null,8,["modelValue","options"])]),_:1}),t(w,null,{default:l(()=>[t(V,{dense:"",outlined:"",modelValue:u.value,"onUpdate:modelValue":a[7]||(a[7]=e=>u.value=e),label:"Product Quantity",type:"number"},null,8,["modelValue"])]),_:1}),t(w,null,{default:l(()=>[t(V,{dense:"",outlined:"",modelValue:s.value,"onUpdate:modelValue":a[8]||(a[8]=e=>s.value=e),label:"Buying Price",type:"number"},null,8,["modelValue"])]),_:1}),y("div",Ve,[y("small",null,r(f.value),1)]),t(j,{align:"right"},{default:l(()=>[t(g,{flat:"",label:"Cancel",color:"red",onClick:O}),t(C),o.product_id&&!h.value?(_(),A(g,{key:0,flat:"",label:"Add Inventory",color:"primary",onClick:ee,loading:p.value},null,8,["loading"])):E("",!0),o.product_id&&h.value?(_(),A(g,{key:1,flat:"",label:"Edit Inventory",color:"primary",onClick:L,loading:p.value},null,8,["loading"])):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{ze as default};
