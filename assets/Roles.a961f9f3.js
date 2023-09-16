import{Q as y}from"./QTd.761e056d.js";import{r as i,aJ as d,a6 as k,u as c,Q as m,a4 as w,bb as o,d as t,ad as C,bD as R,bE as f,a7 as x,a5 as E}from"./index.129e3269.js";import{Q as M}from"./QTr.b3833919.js";import{Q as D}from"./QInput.39135095.js";import{Q as O}from"./QTable.5ae50441.js";import{Q as j,a as A}from"./helpers.d53734ba.js";import{Q as G}from"./QSpace.d3bcdf5d.js";import{Q as H}from"./QCardActions.4ae8c428.js";import{Q as K}from"./QDialog.a1654a10.js";import{e as P,a as W}from"./excel.5d19a2ad.js";import{u as X}from"./use-quasar.193465b1.js";import{a as Y,u as Z}from"./index.9594c7a0.js";import{u as ee}from"./role-store.27b61f16.js";import"./use-key-composition.7a3625b4.js";import"./use-dark.49fe607a.js";import"./uid.9b787859.js";import"./QSeparator.058f296d.js";import"./QList.81766aa9.js";import"./rtl.ffa1ed12.js";import"./module_calls.414173bc.js";const T=[{name:"name",required:!0,label:"Name",align:"left",field:v=>v.name,format:v=>`${v}`,sortable:!0},{name:"users",align:"center",label:"Users",field:"users",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const ae={class:"q-pa-md"},te={key:0},le={key:1},oe={class:"text-h6"},re={class:"text-center error_msg"},xe={__name:"Roles",setup(v){const N=X(),Q=Y(),_=ee(),n=i(!1),p=i(!1),h=i(""),g=i(""),r=i(""),b=i(""),u=i(""),{data:V,isLoading:$,isError:q}=Z("roles",()=>_.fetchRoles()),S=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await _.deleteRole({uuid:a.uuid});e.status==="success"?(Q.refetchQueries("roles"),s(e.message,"green","top")):s("There was an error","red","top-right")}},B=()=>{g.value="Add New Role",n.value=!0,p.value=!1},U=a=>{p.value=!0,g.value=`Edit ${a.name}`,r.value=a.name,b.value=a.uuid,n.value=!0},z=async()=>{if(u.value="",r.value.trim()){const a=await _.createRole({name:r.value.trim()});a.status==="success"?(Q.refetchQueries("roles"),r.value="",n.value=!1,s(a.message,"green","top")):(u.value=a.message,s(a.message,"red","top-right"))}else u.value="Name is required!",s("Name is required!","red","top-right")},I=async()=>{const a={name:r.value.trim(),uuid:b.value};if(a.name){const l=await _.updateRole(a);l.status==="success"?(Q.refetchQueries("roles"),r.value="",n.value=!1,p.value=!1,g.value="",s(l.message,"green","top")):s("There was an error","red","top-right")}else u.value="Name is required!",s("Name is required!","red","top-right")},L=()=>{n.value=!1,r.value="",b.value="",u.value=""},s=(a,l,e)=>{N.notify({message:a,color:l,position:e})},F=a=>{const l=a.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));P(l,T,W,N,"RolesData")};return(a,l)=>(d(),k("div",ae,[c($)?(d(),k("div",te,"Loading roles...")):c(q)?(d(),k("div",le,"An error has occurred: "+m(c(q)),1)):(d(),w(O,{key:2,title:"Roles",rows:c(V),columns:c(T),separator:"cell","row-key":"name",filter:h.value,dense:""},{body:o(e=>[t(M,{props:e},{default:o(()=>[t(y,{key:"name",props:e},{default:o(()=>[C(m(e.row.name),1)]),_:2},1032,["props"]),t(y,{key:"users",props:e},{default:o(()=>[C(m(e.row.users.length),1)]),_:2},1032,["props"]),t(y,{key:"created_at",props:e},{default:o(()=>[C(m(e.row.created_at),1)]),_:2},1032,["props"]),t(y,{key:"actions",props:e},{default:o(()=>[t(R,{color:"blue",name:"edit",onClick:J=>U(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(R,{color:"red",name:"delete",onClick:J=>S(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":o(()=>[t(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=e=>h.value=e),placeholder:"Search",class:"q-mr-md"},{append:o(()=>[t(R,{name:"search"})]),_:1},8,["modelValue"]),t(f,{onClick:B,round:"",dense:"",color:"primary",size:"small",icon:"add"}),t(f,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:l[1]||(l[1]=e=>F(c(V)))})]),_:1},8,["rows","columns","filter"])),t(K,{modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=e=>n.value=e),persistent:""},{default:o(()=>[t(j,{style:{width:"500px"}},{default:o(()=>[t(A,null,{default:o(()=>[x("div",oe,m(g.value),1)]),_:1}),t(A,{class:"q-pt-none"},{default:o(()=>[t(D,{outlined:"",dense:"",label:"Name",modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=e=>r.value=e)},null,8,["modelValue"])]),_:1}),x("div",re,[x("small",null,m(u.value),1)]),t(H,{align:"right"},{default:o(()=>[t(f,{flat:"",label:"Cancel",color:"red",onClick:L}),t(G),r.value&&!p.value?(d(),w(f,{key:0,flat:"",label:"Add Role",color:"primary",onClick:z})):E("",!0),r.value&&p.value?(d(),w(f,{key:1,flat:"",label:"Edit Role",color:"primary",onClick:I})):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{xe as default};
