import{Q as y}from"./QTd.4d8c3dcf.js";import{r as i,aJ as d,a6 as b,u as m,Q as c,a4 as k,bb as s,d as a,ad as w,bD as C,bE as f,a7 as x,a5 as E}from"./index.f12d4c6e.js";import{Q as O}from"./QTr.39832460.js";import{Q as A}from"./QInput.169897e0.js";import{Q as j}from"./QTable.186e89f9.js";import{Q as G,a as T}from"./helpers.0ee499c7.js";import{Q as H}from"./QSpace.3ea65c84.js";import{Q as K}from"./QCardActions.07abd612.js";import{Q as P}from"./QDialog.2558a699.js";import{e as R,a as W}from"./excel.5d19a2ad.js";import{u as X}from"./use-quasar.918193c4.js";import{a as Y,u as Z}from"./index.2fc80911.js";import{u as ee}from"./department-store.3ad37966.js";import"./use-key-composition.db93ebf2.js";import"./use-dark.7993985a.js";import"./uid.9b787859.js";import"./QSeparator.4016704c.js";import"./QList.3403280d.js";import"./rtl.56b12b05.js";import"./module_calls.f56580bb.js";const $=[{name:"name",required:!0,label:"Name",align:"left",field:v=>v.name,format:v=>`${v}`,sortable:!0},{name:"users",align:"center",label:"Users",field:"users",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const te={class:"q-pa-md"},ae={key:0},re={key:1},se={class:"text-h6"},le={class:"text-center error_msg"},xe={__name:"Departments",setup(v){const N=X(),D=Y(),_=ee(),n=i(!1),p=i(!1),Q=i(""),g=i(""),l=i(""),h=i(""),u=i(""),{data:V,isLoading:S,isError:q}=Z("departments",()=>_.fetchDepartments()),B=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await _.deleteDepartment({uuid:t.uuid});e.status==="success"?(D.refetchQueries("departments"),o(e.message,"green","top")):o("There was an error","red","top-right")}},U=()=>{g.value="Add New Department",n.value=!0,p.value=!1},z=t=>{p.value=!0,g.value=`Edit ${t.name}`,l.value=t.name,h.value=t.uuid,n.value=!0},I=async()=>{if(u.value="",l.value.trim()){const t=await _.createDepartment({name:l.value.trim()});t.status==="success"?(D.refetchQueries("departments"),l.value="",n.value=!1,o(t.message,"green","top")):(u.value=t.message,o(t.message,"red","top-right"))}else u.value="Name is required!",o("Name is required!","red","top-right")},L=async()=>{const t={name:l.value.trim(),uuid:h.value};if(t.name){const r=await _.updateDepartment(t);r.status==="success"?(D.refetchQueries("departments"),l.value="",n.value=!1,p.value=!1,g.value="",o(r.message,"green","top")):o("There was an error","red","top-right")}else u.value="Name is required!",o("Name is required!","red","top-right")},F=()=>{n.value=!1,l.value="",h.value="",u.value=""},o=(t,r,e)=>{N.notify({message:t,color:r,position:e})},J=t=>{const r=t.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));R(r,$,W,N,"DepartmentsData")};return(t,r)=>(d(),b("div",te,[m(S)?(d(),b("div",ae,"Loading departments...")):m(q)?(d(),b("div",re,"An error has occurred: "+c(m(q)),1)):(d(),k(j,{key:2,title:"Departments",rows:m(V),columns:m($),separator:"cell","row-key":"name",filter:Q.value,dense:""},{body:s(e=>[a(O,{props:e},{default:s(()=>[a(y,{key:"name",props:e},{default:s(()=>[w(c(e.row.name),1)]),_:2},1032,["props"]),a(y,{key:"users",props:e},{default:s(()=>[w(c(e.row.users.length),1)]),_:2},1032,["props"]),a(y,{key:"created_at",props:e},{default:s(()=>[w(c(e.row.created_at),1)]),_:2},1032,["props"]),a(y,{key:"actions",props:e},{default:s(()=>[a(C,{color:"blue",name:"edit",onClick:M=>z(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),a(C,{color:"red",name:"delete",onClick:M=>B(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":s(()=>[a(A,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:Q.value,"onUpdate:modelValue":r[0]||(r[0]=e=>Q.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[a(C,{name:"search"})]),_:1},8,["modelValue"]),a(f,{onClick:U,round:"",dense:"",color:"primary",size:"small",icon:"add"}),a(f,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:r[1]||(r[1]=e=>J(m(V)))})]),_:1},8,["rows","columns","filter"])),a(P,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),persistent:""},{default:s(()=>[a(G,{style:{width:"500px"}},{default:s(()=>[a(T,null,{default:s(()=>[x("div",se,c(g.value),1)]),_:1}),a(T,{class:"q-pt-none"},{default:s(()=>[a(A,{outlined:"",dense:"",label:"Name",modelValue:l.value,"onUpdate:modelValue":r[2]||(r[2]=e=>l.value=e)},null,8,["modelValue"])]),_:1}),x("div",le,[x("small",null,c(u.value),1)]),a(K,{align:"right"},{default:s(()=>[a(f,{flat:"",label:"Cancel",color:"red",onClick:F}),a(H),l.value&&!p.value?(d(),k(f,{key:0,flat:"",label:"Add Department",color:"primary",onClick:I})):E("",!0),l.value&&p.value?(d(),k(f,{key:1,flat:"",label:"Edit Department",color:"primary",onClick:L})):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{xe as default};
