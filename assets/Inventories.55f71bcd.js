import{Q as v,a as de}from"./QTr.bda53947.js";import{cp as ce,co as me,r as m,j as pe,aJ as y,a6 as E,u as c,Q as n,a4 as x,bb as l,d as t,ad as s,bD as O,a5 as B,bE as k,a7 as f}from"./index.bda02627.js";import{Q as U}from"./QInput.60a7c116.js";import{Q as ve}from"./QBtnGroup.e8827e06.js";import{Q as ye,c as T,d as fe}from"./QSpace.2a81c8da.js";import{a as H,Q as N}from"./QToolbar.6552fe9b.js";import{Q as K,b as A}from"./QCard.bc957178.js";import{o as W,n as X}from"./rtl.4f4d0aa8.js";import{e as _e,a as ge}from"./excel.5d19a2ad.js";import{a as be}from"./use-quasar.de87a5da.js";import{a as Qe,u as Z}from"./index.fe2427df.js";import{g as ke,p as j}from"./module_calls.39290f85.js";import{u as he}from"./product-store.b3f5d936.js";import{u as we}from"./auth-store.fcb599cd.js";import{h as ee}from"./helpers.ee3820c2.js";import"./QSeparator.3cda356c.js";const te=[{name:"product",required:!0,label:"Product",align:"left",field:o=>o.name,format:o=>`${o}`,sortable:!0},{name:"buying_price",align:"center",label:"Buying Price (Per Unit)",field:"buying_price",sortable:!0},{name:"quantity",align:"center",label:"Quantity",field:"quantity",sortable:!0},{name:"total",align:"center",label:"Total Cost",field:"total",sortable:!0},{name:"measurement",align:"center",label:"Measurement",field:"measurement",sortable:!0},{name:"department",align:"center",label:"Department",field:"department",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}],w=ce(),g=w==null?void 0:w.token,Ve=me("inventories",{state:()=>({inventories:[]}),actions:{async fetchInventories(){if(g){const o=await ke("inventories",g);return this.inventories=o==null?void 0:o.data,this.inventories}},async createInventory(o){var b;if(o.user_uuid=(b=w==null?void 0:w.user)==null?void 0:b.uuid,g)return await j(o,"inventories",g)},async updateInventory(o){if(g)return await j(o,"update_inventory",g)},async deleteInventory(o){if(g)return await j(o,"delete_inventory",g)}}});const Ie={class:"q-pa-md"},Ce={key:0},qe={key:1},Pe={class:"text-center error_msg"},xe={class:"text-h6"},Be={key:0},Ue=f("br",null,null,-1),Te={class:"text-center error_msg"},He={__name:"Inventories",setup(o){const b=we(),$=be(),M=Qe(),S=Ve(),F=he(),h=m(!1),_=m(!1),V=m(!1),D=m(!1),z=m(""),I=m(""),i=m(1),d=m(1),u=pe({product_id:"",measurement_id:""}),L=m(""),Q=m(""),{data:G,isLoading:ae,isError:J}=Z("inventories",()=>S.fetchInventories()),{data:le}=Z("products",()=>F.fetchProducts()),re=async r=>{if(confirm(`Continue with the operation. Delete ${r.name} ?`)){const e=await S.deleteInventory({uuid:r.uuid});e.status==="success"?(M.refetchQueries("inventories"),p(e.message,"green","top")):p("There was an error","red","top-right")}},ne=()=>{F.products.length===0?p("You need to create at least one PRODUCT in order to create inventories!","orange","top"):(I.value="Create Inventory",h.value=!0,D.value=!1)},oe=r=>{i.value=r.quantity,d.value=r.buying_price,I.value=`Update Actual Quantity for  ${r.product}`,L.value=r,V.value=!0},ue=async()=>{_.value=!0,Q.value="";const r={product_uuid:u.product_id.uuid,measurement_name:u.product_id.measurement,quantity:i.value,buying_price:d.value};if(r.product_uuid&&r.measurement_name&&r.quantity&&r.buying_price){const a=await S.createInventory(r);a.status==="success"?(M.refetchQueries("inventories"),u.product_id="",u.measurement_id="",i.value=1,u.buying_price=1,h.value=!1,_.value=!1,p(a.message,"green","top")):(Q.value=a.message,p(a.message,"red","top-right"))}else _.value=!1,Q.value="Product, Quantity and Buying Price are required!",p("Product, Quantity and Buying Price are required!","red","top-right")},R=async()=>{_.value=!0;const r={quantity:Number(i.value),buying_price:Number(d.value),inventory_uuid:L.value.uuid};if(r.quantity&&r.buying_price){const a=await S.updateInventory(r);a.status==="success"?(M.refetchQueries("inventories"),i.value=1,d.value=1,h.value=!1,V.value=!1,D.value=!1,I.value="",_.value=!1,p(a.message,"green","top")):p("There was an error","red","top-right")}else _.value=!1,Q.value="Quantity and Buying price are required!",p("Quantity and Buying price are required!","red","top-right")},Y=()=>{h.value=!1,V.value=!1,u.product_id="",i.value=1,d.value=1,L.value="",Q.value=""},p=(r,a,e)=>{$.notify({message:r,color:a,position:e})},se=r=>{const a=r.map(e=>({name:e.name,inventories:e.inventories.length,created_at:e.created_at}));_e(a,te,ge,$,"InventoriesData")};return(r,a)=>(y(),E("div",Ie,[c(ae)?(y(),E("div",Ce,"Loading inventories...")):c(J)?(y(),E("div",qe,"An error has occurred: "+n(c(J)),1)):(y(),x(ye,{key:2,title:"Purchases/Inventories",rows:c(G),columns:c(te),separator:"cell","row-key":"name",filter:z.value,dense:""},{body:l(e=>[t(de,{props:e},{default:l(()=>{var C,q,P;return[t(v,{key:"product",props:e},{default:l(()=>[s(n(e.row.product),1)]),_:2},1032,["props"]),t(v,{key:"buying_price",props:e},{default:l(()=>[s(n(e.row.buying_price),1)]),_:2},1032,["props"]),t(v,{key:"quantity",props:e},{default:l(()=>[s(n(e.row.quantity),1)]),_:2},1032,["props"]),t(v,{key:"total",props:e},{default:l(()=>[s(n(e.row.total),1)]),_:2},1032,["props"]),t(v,{key:"measurement",props:e},{default:l(()=>[s(n(e.row.measurement),1)]),_:2},1032,["props"]),t(v,{key:"department",props:e},{default:l(()=>[s(n(e.row.department),1)]),_:2},1032,["props"]),t(v,{key:"user",props:e},{default:l(()=>[s(n(e.row.user),1)]),_:2},1032,["props"]),t(v,{key:"created_at",props:e},{default:l(()=>[s(n(e.row.created_at),1)]),_:2},1032,["props"]),c(ee)((P=(q=(C=c(b))==null?void 0:C.user)==null?void 0:q.user)==null?void 0:P.roles)?(y(),x(v,{key:"actions",props:e},{default:l(()=>[t(O,{color:"blue",name:"edit",onClick:ie=>oe(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(O,{color:"red",name:"delete",onClick:ie=>re(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])):B("",!0)]}),_:2},1032,["props"])]),"top-right":l(()=>{var e,C,q;return[t(U,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:z.value,"onUpdate:modelValue":a[0]||(a[0]=P=>z.value=P),placeholder:"Search",class:"q-mr-md"},{append:l(()=>[t(O,{name:"search"})]),_:1},8,["modelValue"]),c(ee)((q=(C=(e=c(b))==null?void 0:e.user)==null?void 0:C.user)==null?void 0:q.roles)?(y(),x(ve,{key:0},{default:l(()=>[t(k,{onClick:ne,dense:"",color:"primary",icon:"add",label:"Add"}),t(k,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=P=>se(c(G)))})]),_:1})):B("",!0)]}),_:1},8,["rows","columns","filter"])),t(W,{modelValue:V.value,"onUpdate:modelValue":a[4]||(a[4]=e=>V.value=e),persistent:""},{default:l(()=>[t(K,{style:{width:"500px"}},{default:l(()=>[t(H,null,{default:l(()=>[s(n(I.value)+" ",1),t(T),f("small",null,[t(N,null,{default:l(()=>[s("Total: "+n(i.value*d.value),1)]),_:1})])]),_:1}),t(A,null,{default:l(()=>[t(U,{dense:"",outlined:"",modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),label:"Actual Quantity",type:"number"},null,8,["modelValue"])]),_:1}),t(A,null,{default:l(()=>[t(U,{dense:"",outlined:"",modelValue:d.value,"onUpdate:modelValue":a[3]||(a[3]=e=>d.value=e),label:"Buying Price",type:"number"},null,8,["modelValue"])]),_:1}),f("div",Pe,[f("small",null,n(Q.value),1)]),t(X,{align:"right"},{default:l(()=>[t(k,{flat:"",label:"Cancel",color:"red",onClick:Y}),t(T),t(k,{flat:"",label:"Edit Inventory",color:"primary",onClick:R})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(W,{modelValue:h.value,"onUpdate:modelValue":a[8]||(a[8]=e=>h.value=e),persistent:""},{default:l(()=>[t(K,{style:{width:"600px"}},{default:l(()=>[t(H,null,{default:l(()=>[f("div",xe,n(I.value),1),t(T),f("small",null,[f("i",null,"Total: "+n(i.value*d.value),1)]),t(T),u.product_id?(y(),E("small",Be,[t(N,{class:"q-mr-sm"},{default:l(()=>[s("Measurement: "+n(u.product_id.measurement),1)]),_:1}),t(N,null,{default:l(()=>[s("Available Quantity: "+n(u.product_id.quantity),1)]),_:1}),Ue,t(N,null,{default:l(()=>[s("Previous Buying Price: "+n(u.product_id.buying_price),1)]),_:1})])):B("",!0)]),_:1}),t(A,null,{default:l(()=>[t(fe,{dense:"",outlined:"",modelValue:u.product_id,"onUpdate:modelValue":a[5]||(a[5]=e=>u.product_id=e),options:c(le),"option-value":"uuid","option-label":"name",label:"Select Product"},null,8,["modelValue","options"])]),_:1}),t(A,null,{default:l(()=>[t(U,{dense:"",outlined:"",modelValue:i.value,"onUpdate:modelValue":a[6]||(a[6]=e=>i.value=e),label:"Product Quantity",type:"number"},null,8,["modelValue"])]),_:1}),t(A,null,{default:l(()=>[t(U,{dense:"",outlined:"",modelValue:d.value,"onUpdate:modelValue":a[7]||(a[7]=e=>d.value=e),label:"Buying Price (Per Unit)",type:"number"},null,8,["modelValue"])]),_:1}),f("div",Te,[f("small",null,n(Q.value),1)]),t(X,{align:"right"},{default:l(()=>[t(k,{flat:"",label:"Cancel",color:"red",onClick:Y}),t(T),u.product_id&&!D.value?(y(),x(k,{key:0,flat:"",label:"Add Inventory",color:"primary",onClick:ue,loading:_.value},null,8,["loading"])):B("",!0),u.product_id&&D.value?(y(),x(k,{key:1,flat:"",label:"Edit Inventory",color:"primary",onClick:R,loading:_.value},null,8,["loading"])):B("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{He as default};
