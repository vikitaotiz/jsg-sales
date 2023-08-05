import{Q as d,a as ie}from"./QTr.8e00f5e3.js";import{Q as ce,a as me}from"./QBadge.a8badd9e.js";import{bA as pe,c as Z,h as N,bB as O,g as ve,r as u,aI as i,a5 as Y,u as n,P as r,a3 as h,bb as o,b as fe,d as l,ac as c,a6 as p,bD as F,bE as S,a4 as H}from"./index.f65f6c89.js";import{Q as B}from"./QInput.22d83a86.js";import{Q as _e}from"./QBtnGroup.4f9a26be.js";import{Q as ge,c as ye,p as be,d as ee,e as J,f as ke}from"./paginations.702d832b.js";import{a as qe,Q as T}from"./QCard.1055709c.js";import{u as Ve,a as Qe}from"./use-dark.78627c36.js";import{e as we,a as Pe}from"./excel.5d19a2ad.js";import{a as Ce}from"./use-quasar.50b510cc.js";import{a as he,u as I}from"./index.ec001523.js";import{p as ae}from"./product_columns.133b4496.js";import{u as Se}from"./product-store.4d29da3b.js";import{u as xe}from"./category-store.198ccc4b.js";import{u as Ae}from"./measurement-store.a2c26359.js";import{u as Be}from"./department-store.04bcf1e9.js";import"./QSeparator.6d4bfee8.js";import"./rtl.26771cb4.js";import"./module_calls.c637478d.js";import"./helpers.d60dad50.js";var De=pe({name:"QBanner",props:{...Ve,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(_,{slots:g}){const{proxy:{$q:x}}=ve(),y=Qe(_,x),D=Z(()=>"q-banner row items-center"+(_.dense===!0?" q-banner--dense":"")+(y.value===!0?" q-banner--dark q-dark":"")+(_.rounded===!0?" rounded-borders":"")),$=Z(()=>`q-banner__actions row items-center justify-end col-${_.inlineActions===!0?"auto":"all"}`);return()=>{const E=[N("div",{class:"q-banner__avatar col-auto row items-center self-start"},O(g.avatar)),N("div",{class:"q-banner__content col text-body2"},O(g.default))],v=O(g.action);return v!==void 0&&E.push(N("div",{class:$.value},v)),N("div",{class:D.value+(_.inlineActions===!1&&v!==void 0?" q-banner--top-padding":""),role:"alert"},E)}}});const Ee={class:"q-pa-md"},Ue={key:0},Ne={key:1},Te={class:"text-h6"},Ie=p("small",null,[p("b",null,"Quantity should be adjusted from inventories...")],-1),$e={class:"row q-col-gutter-sm q-mb-sm q-pa-md"},ze={class:"row q-col-gutter-sm q-mb-sm q-pa-md"},Me={class:"text-center error_msg"},na={__name:"Products",setup(_){const g=Ce(),x=he(),y=Se(),D=xe(),$=Ae(),E=Be(),v=be(10),A=u(!1),b=u(!1),k=u(!1),z=u(""),U=u(""),K=u(""),f=u(""),m=u(""),q=u(1),V=u(1),Q=u(1),{data:M,isLoading:te,isError:W}=I("products",()=>y.fetchProducts()),w=u("");let R=u([]);const P=u("");let j=u([]);const C=u("");let G=u([]);I("categories",()=>D.fetchCategories(),{onSuccess:t=>{j.value=t.map(a=>({uuid:a.uuid,name:a.name}))}}),I("measurements",()=>$.fetchMeasurements(),{onSuccess:t=>{R.value=t.map(a=>({uuid:a.uuid,name:a.name}))}}),I("departments",()=>E.fetchDepartments(),{onSuccess:t=>{G.value=t.map(a=>({uuid:a.uuid,name:a.name}))}});const le=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await y.deleteProduct({uuid:t.uuid});e.status==="success"?(x.refetchQueries("products"),s(e.message,"green","top")):s("There was an error","red","top-right")}},oe=()=>{b.value=!1,D.categories.length===0?s("You need to create at least one CATEGORY in order to create products!","orange","top"):(U.value="Add New Product",A.value=!0)},ue=t=>{b.value=!0,U.value=`Edit ${t.name}`,K.value=t.uuid,A.value=!0,m.value=t.name,q.value=t.quantity,V.value=t.buying_price,Q.value=t.selling_price,w.value=R.value.find(a=>a.name===t.measurement),P.value=j.value.find(a=>a.name===t.category),C.value=G.value.find(a=>a.name===t.department)},re=async()=>{f.value="",k.value=!0;const t={name:m.value.trim(),quantity:q.value,selling_price:Q.value,buying_price:V.value,category_uuid:P.value.uuid,department_uuid:C.value.uuid,measurement_uuid:w.value.uuid};if(t.name&&t.quantity&&t.selling_price&&t.buying_price&&t.category_uuid&&t.department_uuid&&t.measurement_uuid){const a=await y.createProduct(t);a.status==="success"?(x.refetchQueries("products"),L(),s(a.message,"green","top")):(f.value=a.message,s(a.message,"red","top-right"))}else f.value="All fields are required!",k.value=!1,s("All fields are required!","red","top-right")},ne=async()=>{f.value="",k.value=!0;const t={product_uuid:K.value,name:m.value.trim(),quantity:q.value,selling_price:Q.value,buying_price:V.value,category_uuid:P.value.uuid,department_uuid:C.value.uuid,measurement_uuid:w.value.uuid};if(t.name&&t.quantity&&t.selling_price&&t.buying_price&&t.category_uuid&&t.department_uuid&&t.measurement_uuid){const a=await y.updateProduct(t);a.status==="success"?(x.refetchQueries("products"),L(),s(a.message,"green","top")):s(a.message,"red","top-right")}else f.value="All fields are required!",s("All fields are required!","red","top-right")},se=()=>L(),s=(t,a,e)=>{g.notify({message:t,color:a,position:e})},L=()=>{m.value="",Q.value=1,V.value=1,P.value="",C.value="",w.value="",q.value=1,A.value=!1,k.value=!1,b.value=!1,U.value="",f.value=""},de=t=>{const a=t.map(e=>({name:e.name,products:e.products.length,created_at:e.created_at}));we(a,ae,Pe,g,"ProductsData")};return(t,a)=>(i(),Y("div",Ee,[n(te)?(i(),Y("div",Ue,"Loading products...")):n(W)?(i(),Y("div",Ne,"An error has occurred: "+r(n(W)),1)):(i(),h(ge,{key:2,title:"Products",rows:n(M),columns:n(ae),pagination:n(v),"onUpdate:pagination":a[2]||(a[2]=e=>fe(v)?v.value=e:null),separator:"cell","row-key":"name",filter:z.value,dense:""},{body:o(e=>[l(ie,{props:e},{default:o(()=>[l(d,{key:"name",props:e},{default:o(()=>[c(r(e.row.name),1)]),_:2},1032,["props"]),l(d,{key:"measurement",props:e},{default:o(()=>[c(r(e.row.measurement)+" ",1),p("small",null,[l(ce,null,{default:o(()=>[c(": "+r(e.row.quantity),1)]),_:2},1024)])]),_:2},1032,["props"]),l(d,{key:"buying_price",props:e},{default:o(()=>[c(r(e.row.buying_price),1)]),_:2},1032,["props"]),l(d,{key:"selling_price",props:e},{default:o(()=>[c(r(e.row.selling_price),1)]),_:2},1032,["props"]),l(d,{key:"department",props:e},{default:o(()=>[c(r(e.row.department),1)]),_:2},1032,["props"]),l(d,{key:"category",props:e},{default:o(()=>[c(r(e.row.category),1)]),_:2},1032,["props"]),l(d,{key:"user",props:e},{default:o(()=>[c(r(e.row.user),1)]),_:2},1032,["props"]),l(d,{key:"created_at",props:e},{default:o(()=>[c(r(e.row.created_at),1)]),_:2},1032,["props"]),l(d,{key:"actions",props:e},{default:o(()=>[l(F,{color:"blue",name:"edit",onClick:X=>ue(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),l(F,{color:"red",name:"delete",onClick:X=>le(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":o(()=>[l(B,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:z.value,"onUpdate:modelValue":a[0]||(a[0]=e=>z.value=e),placeholder:"Search",class:"q-mr-md"},{append:o(()=>[l(F,{name:"search"})]),_:1},8,["modelValue"]),l(_e,null,{default:o(()=>{var e;return[l(S,{onClick:oe,dense:"",color:"blue",size:"small",icon:"add",label:"Add"}),((e=n(M))==null?void 0:e.length)>0?(i(),h(S,{key:0,dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=X=>de(n(M)))})):H("",!0)]}),_:1})]),_:1},8,["rows","columns","pagination","filter"])),l(ye,{modelValue:A.value,"onUpdate:modelValue":a[10]||(a[10]=e=>A.value=e),persistent:""},{default:o(()=>[l(qe,{style:{width:"500px"}},{default:o(()=>[l(T,null,{default:o(()=>[p("div",Te,r(U.value),1)]),_:1}),l(T,{class:"q-pt-none"},{default:o(()=>[l(B,{outlined:"",dense:"",label:"Name",modelValue:m.value,"onUpdate:modelValue":a[3]||(a[3]=e=>m.value=e)},null,8,["modelValue"])]),_:1}),l(T,{class:"q-pt-none"},{default:o(()=>[b.value?(i(),h(De,{key:1,class:"bg-primary text-white"},{default:o(()=>[l(me,null,{default:o(()=>[Ie,l(ee),l(S,{label:"INVENTORIES",outline:"",size:"sm",to:"/inventories"})]),_:1})]),_:1})):(i(),h(B,{key:0,outlined:"",dense:"",label:"Initial Quantity",modelValue:q.value,"onUpdate:modelValue":a[4]||(a[4]=e=>q.value=e),type:"number"},null,8,["modelValue"]))]),_:1}),p("div",$e,[l(B,{outlined:"",dense:"",label:"Buying Price (Per Unit)",modelValue:V.value,"onUpdate:modelValue":a[5]||(a[5]=e=>V.value=e),type:"number",class:"col-6"},null,8,["modelValue"]),l(B,{outlined:"",dense:"",label:"Selling Price (Per Unit)",modelValue:Q.value,"onUpdate:modelValue":a[6]||(a[6]=e=>Q.value=e),type:"number",class:"col-6"},null,8,["modelValue"])]),p("div",ze,[l(J,{dense:"",outlined:"",modelValue:P.value,"onUpdate:modelValue":a[7]||(a[7]=e=>P.value=e),options:n(j),"option-value":"uuid","option-label":"name",label:"Select Product Category",class:"col-6"},null,8,["modelValue","options"]),l(J,{dense:"",outlined:"",modelValue:w.value,"onUpdate:modelValue":a[8]||(a[8]=e=>w.value=e),options:n(R),"option-value":"uuid","option-label":"name",label:"Select Product Measurement",class:"col-6"},null,8,["modelValue","options"])]),l(T,{class:"q-pt-none"},{default:o(()=>[l(J,{dense:"",outlined:"",modelValue:C.value,"onUpdate:modelValue":a[9]||(a[9]=e=>C.value=e),options:n(G),"option-value":"uuid","option-label":"name",label:"Select Product Department"},null,8,["modelValue","options"])]),_:1}),p("div",Me,[p("small",null,r(f.value),1)]),l(ke,{align:"right"},{default:o(()=>[l(S,{flat:"",label:"Cancel",color:"red",onClick:se}),l(ee),m.value&&!b.value?(i(),h(S,{key:0,flat:"",label:"Add Product",color:"primary",onClick:re,loading:k.value},null,8,["loading"])):H("",!0),m.value&&b.value?(i(),h(S,{key:1,flat:"",label:"Edit Product",color:"primary",onClick:ne,loading:k.value},null,8,["loading"])):H("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{na as default};
