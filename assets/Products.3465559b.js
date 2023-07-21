import{Q as d,a as ae}from"./QTr.2757a4c5.js";import{Q as oe}from"./QBadge.67ae38de.js";import{c9 as re,c8 as se,r as g,j as le,aI as y,a5 as N,u as r,P as n,a3 as U,bb as s,b as ne,d as t,ac as i,a6 as C,bD as D,bE as k,a4 as $}from"./index.30f3af3d.js";import{Q as w}from"./QInput.0af7f8d4.js";import{Q as ue,a as de,p as ie,d as z,b as E,c as me}from"./paginations.64596a31.js";import{a as ce,Q as v}from"./QCard.6282ae91.js";import{Q as pe}from"./QToolbar.fb9047e3.js";import{e as _e,a as fe}from"./excel.5d19a2ad.js";import{a as ge}from"./use-quasar.9f5c43df.js";import{a as ye,u as S}from"./index.57dfb4b1.js";import{p as I}from"./product_columns.33f8ffe3.js";import{u as ve}from"./product-store.7c5e6854.js";import{u as be}from"./category-store.ae3774d3.js";import{g as Ve,p as B}from"./module_calls.e16012c0.js";import{u as ke}from"./department-store.30661026.js";import"./use-dark.dddbb69d.js";import"./QSeparator.6cbe0e2a.js";import"./rtl.00f1518a.js";import"./helpers.01ee3f07.js";const b=re(),c=b==null?void 0:b.token,we=se("measurements",{state:()=>({measurements:[]}),actions:{async fetchMeasurements(){if(c){const u=await Ve("measurements",c);return this.measurements=u==null?void 0:u.data,this.measurements}},async createMeasurement(u){var p;if(u.uuid=(p=b==null?void 0:b.user)==null?void 0:p.uuid,c)return await B(u,"measurements",c)},async updateMeasurement(u){if(c)return await B(u,"update_measurement",c)},async deleteMeasurement(u){if(c)return await B(u,"delete_measurement",c)}}});const Qe={class:"q-pa-md"},Pe={key:0},qe={key:1},Ce={class:"text-h6"},Se={class:"text-center error_msg"},Je={__name:"Products",setup(u){const p=ge(),Q=ye(),P=ve(),L=be(),j=we(),F=ke(),h=ie(10),_=g(!1),V=g(!1),x=g(""),q=g(""),M=g(""),f=g("");let o=le({name:"",quantity:1,category_id:"",buying_price:1,selling_price:1,measurement_id:"",department_id:""});const{data:T,isLoading:R,isError:A}=S("products",()=>P.fetchProducts()),{data:G}=S("categories",()=>L.fetchCategories()),{data:H}=S("measurements",()=>j.fetchMeasurements()),{data:J}=S("departments",()=>F.fetchDepartments()),K=async l=>{if(confirm(`Continue with the operation. Delete ${l.name} ?`)){const e=await P.deleteProduct({uuid:l.uuid});e.status==="success"?(Q.refetchQueries("products"),m(e.message,"green","top")):m("There was an error","red","top-right")}},O=()=>{q.value="Add New Product",_.value=!0,V.value=!1},W=l=>{console.log(l),V.value=!0,q.value=`Edit ${l.name}`,_.value=!0},X=async()=>{f.value="";const l={name:o.name.trim(),quantity:o.quantity,selling_price:o.selling_price,buying_price:o.buying_price,category_uuid:o.category_id.uuid,department_uuid:o.department_id.uuid,measurement_uuid:o.measurement_id.uuid};if(l.name&&l.selling_price&&l.buying_price){const a=await P.createProduct(l);a.status==="success"?(Q.refetchQueries("products"),o.name="",o.selling_price=1,o.buying_price=1,_.value=!1,m(a.message,"green","top")):(f.value=a.message,m(a.message,"red","top-right"))}else f.value="Name, Buying and Seeling prices  is required!",m("Name is required!","red","top-right")},Y=async()=>{const l={name:product_name.value.trim(),uuid:M.value};if(l.name){const a=await P.updateProduct(l);a.status==="success"?(Q.refetchQueries("products"),product_name.value="",_.value=!1,V.value=!1,q.value="",m(a.message,"green","top")):m("There was an error","red","top-right")}else f.value="Name is required!",m("Name is required!","red","top-right")},Z=()=>{_.value=!1,M.value="",f.value=""},m=(l,a,e)=>{p.notify({message:l,color:a,position:e})},ee=l=>{const a=l.map(e=>({name:e.name,products:e.products.length,created_at:e.created_at}));_e(a,I,fe,p,"ProductsData")};return(l,a)=>(y(),N("div",Qe,[r(R)?(y(),N("div",Pe,"Loading products...")):r(A)?(y(),N("div",qe,"An error has occurred: "+n(r(A)),1)):(y(),U(ue,{key:2,title:"Products",rows:r(T),columns:r(I),pagination:r(h),"onUpdate:pagination":a[2]||(a[2]=e=>ne(h)?h.value=e:null),separator:"cell","row-key":"name",filter:x.value,dense:""},{body:s(e=>[t(ae,{props:e},{default:s(()=>[t(d,{key:"name",props:e},{default:s(()=>[i(n(e.row.name),1)]),_:2},1032,["props"]),t(d,{key:"measurement",props:e},{default:s(()=>[i(n(e.row.measurement)+" ",1),C("small",null,[t(oe,null,{default:s(()=>[i(": "+n(e.row.quantity),1)]),_:2},1024)])]),_:2},1032,["props"]),t(d,{key:"buying_price",props:e},{default:s(()=>[i(n(e.row.buying_price),1)]),_:2},1032,["props"]),t(d,{key:"selling_price",props:e},{default:s(()=>[i(n(e.row.selling_price),1)]),_:2},1032,["props"]),t(d,{key:"department",props:e},{default:s(()=>[i(n(e.row.department),1)]),_:2},1032,["props"]),t(d,{key:"category",props:e},{default:s(()=>[i(n(e.row.category),1)]),_:2},1032,["props"]),t(d,{key:"user",props:e},{default:s(()=>[i(n(e.row.user),1)]),_:2},1032,["props"]),t(d,{key:"created_at",props:e},{default:s(()=>[i(n(e.row.created_at),1)]),_:2},1032,["props"]),t(d,{key:"actions",props:e},{default:s(()=>[t(D,{color:"blue",name:"edit",onClick:te=>W(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(D,{color:"red",name:"delete",onClick:te=>K(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":s(()=>[t(w,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[t(D,{name:"search"})]),_:1},8,["modelValue"]),t(k,{onClick:O,round:"",dense:"",color:"primary",size:"small",icon:"add"}),t(k,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=e=>ee(r(T)))})]),_:1},8,["rows","columns","pagination","filter"])),t(de,{modelValue:_.value,"onUpdate:modelValue":a[10]||(a[10]=e=>_.value=e),persistent:""},{default:s(()=>[t(ce,{style:{width:"500px"}},{default:s(()=>[t(v,null,{default:s(()=>[C("div",Ce,n(q.value),1)]),_:1}),t(v,{class:"q-pt-none"},{default:s(()=>[t(w,{outlined:"",dense:"",label:"Name",modelValue:r(o).name,"onUpdate:modelValue":a[3]||(a[3]=e=>r(o).name=e)},null,8,["modelValue"])]),_:1}),t(v,{class:"q-pt-none"},{default:s(()=>[t(w,{outlined:"",dense:"",label:"Quantity",modelValue:r(o).quantity,"onUpdate:modelValue":a[4]||(a[4]=e=>r(o).quantity=e),type:"number"},null,8,["modelValue"])]),_:1}),t(pe,{class:"q-mb-sm"},{default:s(()=>[t(w,{outlined:"",dense:"",label:"Buying Price",modelValue:r(o).selling_price,"onUpdate:modelValue":a[5]||(a[5]=e=>r(o).selling_price=e),type:"number"},null,8,["modelValue"]),t(z),t(w,{outlined:"",dense:"",label:"Selling Price",modelValue:r(o).buying_price,"onUpdate:modelValue":a[6]||(a[6]=e=>r(o).buying_price=e),type:"number"},null,8,["modelValue"])]),_:1}),t(v,{class:"q-pt-none"},{default:s(()=>[t(E,{dense:"",outlined:"",modelValue:r(o).category_id,"onUpdate:modelValue":a[7]||(a[7]=e=>r(o).category_id=e),options:r(G),"option-value":"uuid","option-label":"name",label:"Select Product Category"},null,8,["modelValue","options"])]),_:1}),t(v,{class:"q-pt-none"},{default:s(()=>[t(E,{dense:"",outlined:"",modelValue:r(o).measurement_id,"onUpdate:modelValue":a[8]||(a[8]=e=>r(o).measurement_id=e),options:r(H),"option-value":"uuid","option-label":"name",label:"Select Product Measurement"},null,8,["modelValue","options"])]),_:1}),t(v,{class:"q-pt-none"},{default:s(()=>[t(E,{dense:"",outlined:"",modelValue:r(o).department_id,"onUpdate:modelValue":a[9]||(a[9]=e=>r(o).department_id=e),options:r(J),"option-value":"uuid","option-label":"name",label:"Select Product Department"},null,8,["modelValue","options"])]),_:1}),C("div",Se,[C("small",null,n(f.value),1)]),t(me,{align:"right"},{default:s(()=>[t(k,{flat:"",label:"Cancel",color:"red",onClick:Z}),t(z),r(o).name&&!V.value?(y(),U(k,{key:0,flat:"",label:"Add Product",color:"primary",onClick:X})):$("",!0),r(o).name&&V.value?(y(),U(k,{key:1,flat:"",label:"Edit Product",color:"primary",onClick:Y})):$("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Je as default};
