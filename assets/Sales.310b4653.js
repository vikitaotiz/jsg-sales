import{Q as p,a as F}from"./QTr.bda53947.js";import{r as u,aJ as c,a6 as h,u as i,Q as n,a4 as k,ab as J,bb as s,d as a,bD as M,bE as y,ad as _,a7 as q,a5 as E}from"./index.bda02627.js";import{Q as B}from"./QInput.60a7c116.js";import{Q as O,c as j}from"./QSpace.2a81c8da.js";import{Q as z,b as T}from"./QCard.bc957178.js";import{o as G,n as H}from"./rtl.4f4d0aa8.js";import{e as K,a as P}from"./excel.5d19a2ad.js";import{a as R}from"./use-quasar.de87a5da.js";import{a as W,u as X}from"./index.fe2427df.js";import{u as Y}from"./sale-store.478df43d.js";import"./QSeparator.3cda356c.js";import"./module_calls.39290f85.js";import"./helpers.ee3820c2.js";const D=[{name:"name",required:!0,label:"Name",align:"left",field:v=>v.name,format:v=>`${v}`,sortable:!0},{name:"quantity",align:"center",label:"Quantity",field:"quantity",sortable:!0},{name:"status",align:"center",label:"Status",field:"status",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0}];const Z={class:"q-pa-md"},ee={key:0},ae={key:1},te={class:"text-h6"},se={class:"text-center error_msg"},ye={__name:"Sales",setup(v){const w=R(),C=W(),g=Y(),f=u(!1),b=u(!1),Q=u(""),x=u(""),r=u(""),V=u(""),d=u(""),{data:S,isLoading:A,isError:N}=X("sales",()=>g.fetchSales()),U=async()=>{if(d.value="",r.value.trim()){const l=await g.createSale({name:r.value.trim()});l.status==="success"?(C.refetchQueries("sales"),r.value="",f.value=!1,m(l.message,"green","top")):(d.value=l.message,m(l.message,"red","top-right"))}else d.value="Name is required!",m("Name is required!","red","top-right")},$=async()=>{const l={name:r.value.trim(),uuid:V.value};if(l.name){const t=await g.updateSale(l);t.status==="success"?(C.refetchQueries("sales"),r.value="",f.value=!1,b.value=!1,x.value="",m(t.message,"green","top")):m("There was an error","red","top-right")}else d.value="Name is required!",m("Name is required!","red","top-right")},I=()=>{f.value=!1,r.value="",V.value="",d.value=""},m=(l,t,o)=>{w.notify({message:l,color:t,position:o})},L=l=>{const t=l.map(o=>({name:o.name,sales:o.sales.length,created_at:o.created_at}));K(t,D,P,w,"SalesData")};return(l,t)=>{var o;return c(),h("div",Z,[i(A)?(c(),h("div",ee,"Loading sales...")):i(N)?(c(),h("div",ae,"An error has occurred: "+n(i(N)),1)):(c(),k(O,{key:2,title:"Sales",rows:i(S),columns:i(D),separator:"cell","row-key":"name",filter:Q.value,dense:""},J({body:s(e=>[a(F,{props:e},{default:s(()=>[a(p,{key:"name",props:e},{default:s(()=>[_(n(e.row.name),1)]),_:2},1032,["props"]),a(p,{key:"quantity",props:e},{default:s(()=>[_(n(e.row.quantity),1)]),_:2},1032,["props"]),a(p,{key:"status",props:e},{default:s(()=>[_(n(e.row.status),1)]),_:2},1032,["props"]),a(p,{key:"user",props:e},{default:s(()=>[_(n(e.row.user),1)]),_:2},1032,["props"]),a(p,{key:"created_at",props:e},{default:s(()=>[_(n(e.row.created_at),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:2},[((o=i(S))==null?void 0:o.length)>0?{name:"top-right",fn:s(()=>[a(B,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:Q.value,"onUpdate:modelValue":t[0]||(t[0]=e=>Q.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[a(M,{name:"search"})]),_:1},8,["modelValue"]),a(y,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:t[1]||(t[1]=e=>L(i(S)))})]),key:"0"}:void 0]),1032,["rows","columns","filter"])),a(G,{modelValue:f.value,"onUpdate:modelValue":t[3]||(t[3]=e=>f.value=e),persistent:""},{default:s(()=>[a(z,{style:{width:"500px"}},{default:s(()=>[a(T,null,{default:s(()=>[q("div",te,n(x.value),1)]),_:1}),a(T,{class:"q-pt-none"},{default:s(()=>[a(B,{outlined:"",dense:"",label:"Name",modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=e=>r.value=e)},null,8,["modelValue"])]),_:1}),q("div",se,[q("small",null,n(d.value),1)]),a(H,{align:"right"},{default:s(()=>[a(y,{flat:"",label:"Cancel",color:"red",onClick:I}),a(j),r.value&&!b.value?(c(),k(y,{key:0,flat:"",label:"Add Sale",color:"primary",onClick:U})):E("",!0),r.value&&b.value?(c(),k(y,{key:1,flat:"",label:"Edit Sale",color:"primary",onClick:$})):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};export{ye as default};
