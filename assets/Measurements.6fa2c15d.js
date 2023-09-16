import{Q as y}from"./QTd.761e056d.js";import{r as u,aJ as m,a6 as k,u as d,Q as c,a4 as w,bb as s,d as t,ad as C,bD as M,bE as f,a7 as x,a5 as E}from"./index.129e3269.js";import{Q as O}from"./QTr.b3833919.js";import{Q as D}from"./QInput.39135095.js";import{Q as j}from"./QTable.5ae50441.js";import{Q as G,a as A}from"./helpers.d53734ba.js";import{Q as H}from"./QSpace.d3bcdf5d.js";import{Q as K}from"./QCardActions.4ae8c428.js";import{Q as P}from"./QDialog.a1654a10.js";import{e as R,a as W}from"./excel.5d19a2ad.js";import{u as X}from"./use-quasar.193465b1.js";import{a as Y,u as Z}from"./index.9594c7a0.js";import{u as ee}from"./measurement-store.4511b461.js";import"./use-key-composition.7a3625b4.js";import"./use-dark.49fe607a.js";import"./uid.9b787859.js";import"./QSeparator.058f296d.js";import"./QList.81766aa9.js";import"./rtl.ffa1ed12.js";import"./module_calls.414173bc.js";const T=[{name:"name",required:!0,label:"Name",align:"left",field:v=>v.name,format:v=>`${v}`,sortable:!0},{name:"user",align:"center",label:"User",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const ae={class:"q-pa-md"},te={key:0},re={key:1},se={class:"text-h6"},le={class:"text-center error_msg"},xe={__name:"Measurements",setup(v){const N=X(),Q=Y(),_=ee(),n=u(!1),p=u(!1),h=u(""),g=u(""),l=u(""),b=u(""),i=u(""),{data:V,isLoading:$,isError:q}=Z("measurements",()=>_.fetchMeasurements()),S=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await _.deleteMeasurement({uuid:a.uuid});e.status==="success"?(Q.refetchQueries("measurements"),o(e.message,"green","top")):o("There was an error","red","top-right")}},B=()=>{g.value="Add New Measurement",n.value=!0,p.value=!1},U=a=>{p.value=!0,g.value=`Edit ${a.name}`,l.value=a.name,b.value=a.uuid,n.value=!0},z=async()=>{if(i.value="",l.value.trim()){const a=await _.createMeasurement({name:l.value.trim()});a.status==="success"?(Q.refetchQueries("measurements"),l.value="",n.value=!1,o(a.message,"green","top")):(i.value=a.message,o(a.message,"red","top-right"))}else i.value="Name is required!",o("Name is required!","red","top-right")},I=async()=>{const a={name:l.value.trim(),uuid:b.value};if(a.name){const r=await _.updateMeasurement(a);r.status==="success"?(Q.refetchQueries("measurements"),l.value="",n.value=!1,p.value=!1,g.value="",o(r.message,"green","top")):o("There was an error","red","top-right")}else i.value="Name is required!",o("Name is required!","red","top-right")},L=()=>{n.value=!1,l.value="",b.value="",i.value=""},o=(a,r,e)=>{N.notify({message:a,color:r,position:e})},F=a=>{const r=a.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));R(r,T,W,N,"MeasurementsData")};return(a,r)=>(m(),k("div",ae,[d($)?(m(),k("div",te,"Loading measurements...")):d(q)?(m(),k("div",re,"An error has occurred: "+c(d(q)),1)):(m(),w(j,{key:2,title:"Measurements",rows:d(V),columns:d(T),separator:"cell","row-key":"name",filter:h.value,dense:""},{body:s(e=>[t(O,{props:e},{default:s(()=>[t(y,{key:"name",props:e},{default:s(()=>[C(c(e.row.name),1)]),_:2},1032,["props"]),t(y,{key:"user",props:e},{default:s(()=>[C(c(e.row.user),1)]),_:2},1032,["props"]),t(y,{key:"created_at",props:e},{default:s(()=>[C(c(e.row.created_at),1)]),_:2},1032,["props"]),t(y,{key:"actions",props:e},{default:s(()=>[t(M,{color:"blue",name:"edit",onClick:J=>U(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(M,{color:"red",name:"delete",onClick:J=>S(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":s(()=>[t(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:h.value,"onUpdate:modelValue":r[0]||(r[0]=e=>h.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[t(M,{name:"search"})]),_:1},8,["modelValue"]),t(f,{onClick:B,round:"",dense:"",color:"primary",size:"small",icon:"add"}),t(f,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:r[1]||(r[1]=e=>F(d(V)))})]),_:1},8,["rows","columns","filter"])),t(P,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),persistent:""},{default:s(()=>[t(G,{style:{width:"500px"}},{default:s(()=>[t(A,null,{default:s(()=>[x("div",se,c(g.value),1)]),_:1}),t(A,{class:"q-pt-none"},{default:s(()=>[t(D,{outlined:"",dense:"",label:"Name",modelValue:l.value,"onUpdate:modelValue":r[2]||(r[2]=e=>l.value=e)},null,8,["modelValue"])]),_:1}),x("div",le,[x("small",null,c(i.value),1)]),t(K,{align:"right"},{default:s(()=>[t(f,{flat:"",label:"Cancel",color:"red",onClick:L}),t(H),l.value&&!p.value?(m(),w(f,{key:0,flat:"",label:"Add Measurement",color:"primary",onClick:z})):E("",!0),l.value&&p.value?(m(),w(f,{key:1,flat:"",label:"Edit Measurement",color:"primary",onClick:I})):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{xe as default};
