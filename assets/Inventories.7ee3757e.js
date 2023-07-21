import{Q as s,a as ee}from"./QTr.ee5cc57e.js";import{r as m,j as te,aI as p,a5 as k,u as d,P as o,a3 as B,bb as r,b as ae,d as t,ac as u,bD as A,bE as y,a6 as _,a4 as U}from"./index.544437db.js";import{Q as C}from"./QInput.b3c42e3c.js";import{Q as ne}from"./QBtnGroup.f766cc8c.js";import{Q as re,a as M,p as le,c as z,d as V,b as oe}from"./paginations.dead60bc.js";import{Q as L}from"./QToolbar.cf5fbc2b.js";import{a as O,Q as w}from"./QCard.b1d1b493.js";import{Q as R}from"./QBadge.c9e4b02c.js";import{e as ue,a as ie}from"./excel.5d19a2ad.js";import{a as se}from"./use-quasar.eb6615ed.js";import{a as de,u as j}from"./index.a8c0ae15.js";import{u as ce}from"./inventory-store.1af8396e.js";import{u as me}from"./product-store.2669371c.js";import"./use-dark.7de2cac8.js";import"./QSeparator.3296268e.js";import"./rtl.74f3c00c.js";import"./module_calls.e16012c0.js";import"./helpers.01ee3f07.js";const F=[{name:"product",required:!0,label:"Product",align:"left",field:b=>b.name,format:b=>`${b}`,sortable:!0},{name:"buying_price",align:"center",label:"Buying Price",field:"buying_price",sortable:!0},{name:"quantity",align:"center",label:"Quantity",field:"quantity",sortable:!0},{name:"actual_quantity",align:"center",label:"Actual Quantity",field:"quantity_quantity",sortable:!0},{name:"measurement",align:"center",label:"Measurement",field:"measurement",sortable:!0},{name:"department",align:"center",label:"Department",field:"department",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const pe={class:"q-pa-md"},ye={key:0},_e={key:1},fe={class:"text-center error_msg"},ve={class:"text-h6"},ge={key:0},be={class:"text-center error_msg"},$e={__name:"Inventories",setup(b){const D=se(),I=de(),q=ce(),E=me(),h=le(10),f=m(!1),v=m(!1),Q=m(!1),x=m(""),g=m(""),n=te({product_id:"",measurement_id:"",quantity:1,actual_quantity:1,buying_price:1}),P=m(""),c=m(""),{data:T,isLoading:G,isError:N}=j("inventories",()=>q.fetchInventories()),{data:Y}=j("products",()=>E.fetchProducts()),H=async l=>{if(confirm(`Continue with the operation. Delete ${l.name} ?`)){const e=await q.deleteInventory({uuid:l.uuid});e.status==="success"?(I.refetchQueries("inventories"),i(e.message,"green","top")):i("There was an error","red","top-right")}},J=()=>{E.products.length===0?i("You need to create at least one PRODUCT in order to create inventories!","orange","top"):(g.value="Create Inventory",f.value=!0,Q.value=!1)},K=l=>{g.value=`Update Actual Quantity for  ${l.product}`,P.value=l,v.value=!0},W=async()=>{c.value="";const l={product_uuid:n.product_id.uuid,measurement_name:n.product_id.measurement,quantity:n.quantity,buying_price:n.buying_price};if(l.product_uuid&&l.measurement_name&&l.quantity&&l.buying_price){const a=await q.createInventory(l);a.status==="success"?(I.refetchQueries("inventories"),n.product_id="",n.measurement_id="",n.quantity=1,n.buying_price=1,f.value=!1,i(a.message,"green","top")):(c.value=a.message,i(a.message,"red","top-right"))}else c.value="Product, Quantity and Buying Price are required!",i("Product, Quantity and Buying Price are required!","red","top-right")},S=async()=>{const l={actual_quantity:Number(n.actual_quantity),inventory_uuid:P.value.uuid};if(l.actual_quantity){const a=await q.updateInventory(l);a.status==="success"?(I.refetchQueries("inventories"),n.actual_quantity="",f.value=!1,v.value=!1,Q.value=!1,g.value="",i(a.message,"green","top")):i("There was an error","red","top-right")}else c.value="Name is required!",i("Name is required!","red","top-right")},$=()=>{f.value=!1,v.value=!1,n.product_id="",n.quantity=1,n.actual_quantity=1,n.buying_price=1,P.value="",c.value=""},i=(l,a,e)=>{D.notify({message:l,color:a,position:e})},X=l=>{const a=l.map(e=>({name:e.name,inventories:e.inventories.length,created_at:e.created_at}));ue(a,F,ie,D,"InventoriesData")};return(l,a)=>(p(),k("div",pe,[d(G)?(p(),k("div",ye,"Loading inventories...")):d(N)?(p(),k("div",_e,"An error has occurred: "+o(d(N)),1)):(p(),B(re,{key:2,title:"Inventories",rows:d(T),columns:d(F),pagination:d(h),"onUpdate:pagination":a[2]||(a[2]=e=>ae(h)?h.value=e:null),separator:"cell","row-key":"name",filter:x.value,dense:""},{body:r(e=>[t(ee,{props:e},{default:r(()=>[t(s,{key:"product",props:e},{default:r(()=>[u(o(e.row.product),1)]),_:2},1032,["props"]),t(s,{key:"buying_price",props:e},{default:r(()=>[u(o(e.row.buying_price),1)]),_:2},1032,["props"]),t(s,{key:"quantity",props:e},{default:r(()=>[u(o(e.row.quantity),1)]),_:2},1032,["props"]),t(s,{key:"actual_quantity",props:e},{default:r(()=>[u(o(e.row.actual_quantity),1)]),_:2},1032,["props"]),t(s,{key:"measurement",props:e},{default:r(()=>[u(o(e.row.measurement),1)]),_:2},1032,["props"]),t(s,{key:"department",props:e},{default:r(()=>[u(o(e.row.department),1)]),_:2},1032,["props"]),t(s,{key:"user",props:e},{default:r(()=>[u(o(e.row.user),1)]),_:2},1032,["props"]),t(s,{key:"created_at",props:e},{default:r(()=>[u(o(e.row.created_at),1)]),_:2},1032,["props"]),t(s,{key:"actions",props:e},{default:r(()=>[t(A,{color:"blue",name:"edit",onClick:Z=>K(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(A,{color:"red",name:"delete",onClick:Z=>H(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":r(()=>[t(C,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value=e),placeholder:"Search",class:"q-mr-md"},{append:r(()=>[t(A,{name:"search"})]),_:1},8,["modelValue"]),t(ne,null,{default:r(()=>[t(y,{onClick:J,dense:"",color:"primary",icon:"add",label:"Add"}),t(y,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=e=>X(d(T)))})]),_:1})]),_:1},8,["rows","columns","pagination","filter"])),t(M,{modelValue:v.value,"onUpdate:modelValue":a[4]||(a[4]=e=>v.value=e),persistent:""},{default:r(()=>[t(O,{style:{width:"500px"}},{default:r(()=>[t(L,null,{default:r(()=>[u(o(g.value),1)]),_:1}),t(w,null,{default:r(()=>[t(C,{dense:"",outlined:"",modelValue:n.actual_quantity,"onUpdate:modelValue":a[3]||(a[3]=e=>n.actual_quantity=e),label:"Actual Quantity",type:"number"},null,8,["modelValue"])]),_:1}),_("div",fe,[_("small",null,o(c.value),1)]),t(z,{align:"right"},{default:r(()=>[t(y,{flat:"",label:"Cancel",color:"red",onClick:$}),t(V),t(y,{flat:"",label:"Edit Inventory",color:"primary",onClick:S})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(M,{modelValue:f.value,"onUpdate:modelValue":a[8]||(a[8]=e=>f.value=e),persistent:""},{default:r(()=>[t(O,{style:{width:"600px"}},{default:r(()=>[t(L,null,{default:r(()=>[_("div",ve,o(g.value),1),t(V),_("small",null,[_("i",null,"Total: "+o(n.quantity*n.buying_price),1)]),t(V),n.product_id?(p(),k("small",ge,[t(R,{class:"q-mr-sm"},{default:r(()=>[u("Measurement: "+o(n.product_id.measurement),1)]),_:1}),t(R,null,{default:r(()=>[u("Available Quantity: "+o(n.product_id.quantity),1)]),_:1})])):U("",!0)]),_:1}),t(w,null,{default:r(()=>[t(oe,{dense:"",outlined:"",modelValue:n.product_id,"onUpdate:modelValue":a[5]||(a[5]=e=>n.product_id=e),options:d(Y),"option-value":"uuid","option-label":"name",label:"Select Product"},null,8,["modelValue","options"])]),_:1}),t(w,null,{default:r(()=>[t(C,{dense:"",outlined:"",modelValue:n.quantity,"onUpdate:modelValue":a[6]||(a[6]=e=>n.quantity=e),label:"Product Quantity",type:"number"},null,8,["modelValue"])]),_:1}),t(w,null,{default:r(()=>[t(C,{dense:"",outlined:"",modelValue:n.buying_price,"onUpdate:modelValue":a[7]||(a[7]=e=>n.buying_price=e),label:"Buying Price",type:"number"},null,8,["modelValue"])]),_:1}),_("div",be,[_("small",null,o(c.value),1)]),t(z,{align:"right"},{default:r(()=>[t(y,{flat:"",label:"Cancel",color:"red",onClick:$}),t(V),n.product_id&&!Q.value?(p(),B(y,{key:0,flat:"",label:"Add Inventory",color:"primary",onClick:W})):U("",!0),n.product_id&&Q.value?(p(),B(y,{key:1,flat:"",label:"Edit Inventory",color:"primary",onClick:S})):U("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{$e as default};
