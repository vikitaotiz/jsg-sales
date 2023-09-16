import{Q as v}from"./QTd.4d8c3dcf.js";import{r as d,aJ as c,a6 as M,u as p,Q as i,a4 as C,bb as o,d as a,ad as b,bD as P,bE as y,a7 as x,a5 as E}from"./index.f12d4c6e.js";import{Q as O}from"./QTr.39832460.js";import{Q as D}from"./QInput.169897e0.js";import{Q as j}from"./QTable.186e89f9.js";import{Q as G,a as A}from"./helpers.0ee499c7.js";import{Q as H}from"./QSpace.3ea65c84.js";import{Q as K}from"./QCardActions.07abd612.js";import{Q as R}from"./QDialog.2558a699.js";import{e as W,a as X}from"./excel.5d19a2ad.js";import{u as Y}from"./use-quasar.918193c4.js";import{a as Z,u as ee}from"./index.2fc80911.js";import{u as ae}from"./payment-mode-store.bfad984c.js";import"./use-key-composition.db93ebf2.js";import"./use-dark.7993985a.js";import"./uid.9b787859.js";import"./QSeparator.4016704c.js";import"./QList.3403280d.js";import"./rtl.56b12b05.js";import"./module_calls.f56580bb.js";const T=[{name:"name",required:!0,label:"Name",align:"left",field:_=>_.name,format:_=>`${_}`,sortable:!0},{name:"user",align:"center",label:"Users",field:"user",sortable:!0},{name:"sales",align:"center",label:"sales",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const te={class:"q-pa-md"},le={key:0},oe={key:1},se={class:"text-h6"},re={class:"text-center error_msg"},xe={__name:"PaymentModes",setup(_){const N=Y(),h=Z(),g=ae(),u=d(!1),f=d(!1),r=d(!1),k=d(""),Q=d(""),s=d(""),w=d(""),m=d(""),{data:V,isLoading:$,isError:q}=ee("payment_modes",()=>g.fetchPaymentModes()),B=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await g.deletePaymentMode({uuid:t.uuid});e.status==="success"?(h.refetchQueries("payment_modes"),n(e.message,"green","top")):n("There was an error","red","top-right")}},S=()=>{Q.value="Add New PaymentMode",u.value=!0,f.value=!1},U=t=>{f.value=!0,Q.value=`Edit ${t.name}`,s.value=t.name,w.value=t.uuid,u.value=!0},z=async()=>{if(r.value=!0,m.value="",s.value.trim()){const t=await g.createPaymentMode({name:s.value.trim()});t.status==="success"?(h.refetchQueries("payment_modes"),s.value="",u.value=!1,n(t.message,"green","top"),r.value=!1):(m.value=t.message,n(t.message,"red","top-right"),r.value=!1)}else m.value="Name is required!",n("Name is required!","red","top-right"),r.value=!1},I=async()=>{r.value=!0;const t={name:s.value.trim(),uuid:w.value};if(t.name){const l=await g.updatePaymentMode(t);l.status==="success"?(h.refetchQueries("payment_modes"),s.value="",u.value=!1,f.value=!1,Q.value="",n(l.message,"green","top"),r.value=!1):(r.value=!1,n("There was an error","red","top-right"))}else m.value="Name is required!",n("Name is required!","red","top-right"),r.value=!1},L=()=>{u.value=!1,s.value="",w.value="",m.value=""},n=(t,l,e)=>{N.notify({message:t,color:l,position:e})},F=t=>{const l=t.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));W(l,T,X,N,"PaymentModesData")};return(t,l)=>(c(),M("div",te,[p($)?(c(),M("div",le,"Loading payment_modes...")):p(q)?(c(),M("div",oe,"An error has occurred: "+i(p(q)),1)):(c(),C(j,{key:2,title:"PaymentModes",rows:p(V),columns:p(T),separator:"cell","row-key":"name",filter:k.value,dense:""},{body:o(e=>[a(O,{props:e},{default:o(()=>[a(v,{key:"name",props:e},{default:o(()=>[b(i(e.row.name),1)]),_:2},1032,["props"]),a(v,{key:"user",props:e},{default:o(()=>[b(i(e.row.user),1)]),_:2},1032,["props"]),a(v,{key:"sales",props:e},{default:o(()=>[b(i(e.row.sales),1)]),_:2},1032,["props"]),a(v,{key:"created_at",props:e},{default:o(()=>[b(i(e.row.created_at),1)]),_:2},1032,["props"]),a(v,{key:"actions",props:e},{default:o(()=>[a(P,{color:"blue",name:"edit",onClick:J=>U(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),a(P,{color:"red",name:"delete",onClick:J=>B(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":o(()=>[a(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e),placeholder:"Search",class:"q-mr-md"},{append:o(()=>[a(P,{name:"search"})]),_:1},8,["modelValue"]),a(y,{onClick:S,round:"",dense:"",color:"primary",size:"small",icon:"add"}),a(y,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:l[1]||(l[1]=e=>F(p(V)))})]),_:1},8,["rows","columns","filter"])),a(R,{modelValue:u.value,"onUpdate:modelValue":l[3]||(l[3]=e=>u.value=e),persistent:""},{default:o(()=>[a(G,{style:{width:"500px"}},{default:o(()=>[a(A,null,{default:o(()=>[x("div",se,i(Q.value),1)]),_:1}),a(A,{class:"q-pt-none"},{default:o(()=>[a(D,{outlined:"",dense:"",label:"Name",modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value=e)},null,8,["modelValue"])]),_:1}),x("div",re,[x("small",null,i(m.value),1)]),a(K,{align:"right"},{default:o(()=>[a(y,{flat:"",label:"Cancel",color:"red",onClick:L}),a(H),s.value&&!f.value?(c(),C(y,{key:0,flat:"",label:"Add PaymentMode",color:"primary",onClick:z,loading:r.value},null,8,["loading"])):E("",!0),s.value&&f.value?(c(),C(y,{key:1,flat:"",label:"Edit PaymentMode",color:"primary",onClick:I,loading:r.value},null,8,["loading"])):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{xe as default};
