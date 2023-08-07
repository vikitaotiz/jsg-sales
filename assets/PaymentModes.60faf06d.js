import{Q as v,a as O}from"./QTr.bda53947.js";import{r as d,aJ as c,a6 as M,u as p,Q as i,a4 as C,bb as s,d as a,ad as h,bD as P,bE as y,a7 as x,a5 as E}from"./index.bda02627.js";import{Q as D}from"./QInput.60a7c116.js";import{Q as j,c as G}from"./QSpace.2a81c8da.js";import{Q as H,b as A}from"./QCard.bc957178.js";import{o as K,n as R}from"./rtl.4f4d0aa8.js";import{e as W,a as X}from"./excel.5d19a2ad.js";import{a as Y}from"./use-quasar.de87a5da.js";import{a as Z,u as ee}from"./index.fe2427df.js";import{u as ae}from"./payment-mode-store.275c3e84.js";import"./QSeparator.3cda356c.js";import"./module_calls.39290f85.js";import"./helpers.ee3820c2.js";const T=[{name:"name",required:!0,label:"Name",align:"left",field:_=>_.name,format:_=>`${_}`,sortable:!0},{name:"user",align:"center",label:"Users",field:"user",sortable:!0},{name:"sales",align:"center",label:"sales",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const te={class:"q-pa-md"},le={key:0},se={key:1},oe={class:"text-h6"},re={class:"text-center error_msg"},he={__name:"PaymentModes",setup(_){const N=Y(),k=Z(),g=ae(),u=d(!1),f=d(!1),r=d(!1),Q=d(""),b=d(""),o=d(""),w=d(""),m=d(""),{data:V,isLoading:$,isError:q}=ee("payment_modes",()=>g.fetchPaymentModes()),B=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await g.deletePaymentMode({uuid:t.uuid});e.status==="success"?(k.refetchQueries("payment_modes"),n(e.message,"green","top")):n("There was an error","red","top-right")}},S=()=>{b.value="Add New PaymentMode",u.value=!0,f.value=!1},U=t=>{f.value=!0,b.value=`Edit ${t.name}`,o.value=t.name,w.value=t.uuid,u.value=!0},z=async()=>{if(r.value=!0,m.value="",o.value.trim()){const t=await g.createPaymentMode({name:o.value.trim()});t.status==="success"?(k.refetchQueries("payment_modes"),o.value="",u.value=!1,n(t.message,"green","top"),r.value=!1):(m.value=t.message,n(t.message,"red","top-right"),r.value=!1)}else m.value="Name is required!",n("Name is required!","red","top-right"),r.value=!1},I=async()=>{r.value=!0;const t={name:o.value.trim(),uuid:w.value};if(t.name){const l=await g.updatePaymentMode(t);l.status==="success"?(k.refetchQueries("payment_modes"),o.value="",u.value=!1,f.value=!1,b.value="",n(l.message,"green","top"),r.value=!1):(r.value=!1,n("There was an error","red","top-right"))}else m.value="Name is required!",n("Name is required!","red","top-right"),r.value=!1},L=()=>{u.value=!1,o.value="",w.value="",m.value=""},n=(t,l,e)=>{N.notify({message:t,color:l,position:e})},F=t=>{const l=t.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));W(l,T,X,N,"PaymentModesData")};return(t,l)=>(c(),M("div",te,[p($)?(c(),M("div",le,"Loading payment_modes...")):p(q)?(c(),M("div",se,"An error has occurred: "+i(p(q)),1)):(c(),C(j,{key:2,title:"PaymentModes",rows:p(V),columns:p(T),separator:"cell","row-key":"name",filter:Q.value,dense:""},{body:s(e=>[a(O,{props:e},{default:s(()=>[a(v,{key:"name",props:e},{default:s(()=>[h(i(e.row.name),1)]),_:2},1032,["props"]),a(v,{key:"user",props:e},{default:s(()=>[h(i(e.row.user),1)]),_:2},1032,["props"]),a(v,{key:"sales",props:e},{default:s(()=>[h(i(e.row.sales),1)]),_:2},1032,["props"]),a(v,{key:"created_at",props:e},{default:s(()=>[h(i(e.row.created_at),1)]),_:2},1032,["props"]),a(v,{key:"actions",props:e},{default:s(()=>[a(P,{color:"blue",name:"edit",onClick:J=>U(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),a(P,{color:"red",name:"delete",onClick:J=>B(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":s(()=>[a(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:Q.value,"onUpdate:modelValue":l[0]||(l[0]=e=>Q.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[a(P,{name:"search"})]),_:1},8,["modelValue"]),a(y,{onClick:S,round:"",dense:"",color:"primary",size:"small",icon:"add"}),a(y,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:l[1]||(l[1]=e=>F(p(V)))})]),_:1},8,["rows","columns","filter"])),a(K,{modelValue:u.value,"onUpdate:modelValue":l[3]||(l[3]=e=>u.value=e),persistent:""},{default:s(()=>[a(H,{style:{width:"500px"}},{default:s(()=>[a(A,null,{default:s(()=>[x("div",oe,i(b.value),1)]),_:1}),a(A,{class:"q-pt-none"},{default:s(()=>[a(D,{outlined:"",dense:"",label:"Name",modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=e=>o.value=e)},null,8,["modelValue"])]),_:1}),x("div",re,[x("small",null,i(m.value),1)]),a(R,{align:"right"},{default:s(()=>[a(y,{flat:"",label:"Cancel",color:"red",onClick:L}),a(G),o.value&&!f.value?(c(),C(y,{key:0,flat:"",label:"Add PaymentMode",color:"primary",onClick:z,loading:r.value},null,8,["loading"])):E("",!0),o.value&&f.value?(c(),C(y,{key:1,flat:"",label:"Edit PaymentMode",color:"primary",onClick:I,loading:r.value},null,8,["loading"])):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{he as default};
