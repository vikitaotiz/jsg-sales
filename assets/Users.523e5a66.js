import{Q as c}from"./QTd.4d8c3dcf.js";import{Q as N}from"./QBadge.0748bb05.js";import{r,aJ as s,a6 as u,u as U,Q as i,a4 as d,bb as o,d as l,ad as p,F as K,aP as W,a5 as m,bD as F,N as pe,a7 as b,bE as x}from"./index.f12d4c6e.js";import{Q as ve}from"./QTr.39832460.js";import{Q as D}from"./QInput.169897e0.js";import{Q as fe,a as X}from"./QTable.186e89f9.js";import{Q as I}from"./QSpace.3ea65c84.js";import{Q as Z}from"./QToggle.8fa5bc41.js";import{Q as ee}from"./QToolbar.430ed49e.js";import{Q as _e,a as be}from"./helpers.0ee499c7.js";import{Q as ae}from"./QSeparator.4016704c.js";import{Q as ye}from"./QCardActions.07abd612.js";import{Q as ge}from"./QDialog.2558a699.js";import{e as he,a as ke}from"./excel.5d19a2ad.js";import{u as we}from"./use-quasar.918193c4.js";import{a as Qe,u as L}from"./index.2fc80911.js";import{u as Ue}from"./user-store.2a0a3c8c.js";import{u as Ve}from"./role-store.b564a05d.js";import{u as Ce}from"./department-store.3ad37966.js";import"./use-key-composition.db93ebf2.js";import"./use-dark.7993985a.js";import"./uid.9b787859.js";import"./QList.3403280d.js";import"./rtl.56b12b05.js";import"./module_calls.f56580bb.js";const le=[{name:"name",required:!0,label:"Name",align:"left",field:S=>S.name,format:S=>`${S}`,sortable:!0},{name:"email",align:"center",label:"Email",field:"email",sortable:!0},{name:"phone",align:"center",label:"Phone",field:"phone",sortable:!0},{name:"email_notify",align:"center",label:"Email Notify",field:"email_notify",sortable:!0},{name:"roles",align:"center",label:"Roles",field:"roles",sortable:!0},{name:"departments",align:"center",label:"Departments",field:"departments",sortable:!0},{name:"active",align:"center",label:"User Status",field:"active",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const Ae={class:"q-pa-md"},qe={key:0},Ee={key:1},Ne=b("br",null,null,-1),xe={key:0},De=b("small",null,"No Role Assigned",-1),Se=[De],$e=b("br",null,null,-1),Te={key:0},Be=b("small",null,"No Department Assigned",-1),ze=[Be],Re={class:"text-h6"},Pe={class:"text-center error_msg"},Fe={key:0},ca={__name:"Users",setup(S){const O=we(),z=Qe(),$=Ue(),te=Ve(),oe=Ce(),V=r(!1),C=r(!1),y=r(!1),R=r(""),T=r(""),n=r(""),v=r(""),k=r(""),w=r(!0),A=r(!1),J=r(!1),f=r(""),g=r([]),Q=r(""),M=r(""),B=r(""),Y=r([]),j=r([]),{data:G,isLoading:se,isError:H}=L("users",()=>$.fetchUsers());L("roles",()=>te.fetchRoles(),{onSuccess:t=>{Y.value=t.map(a=>({name:a.name,uuid:a.uuid}))}}),L("departments",()=>oe.fetchDepartments(),{onSuccess:t=>{j.value=t.map(a=>({name:a.name,uuid:a.uuid}))}});const re=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await $.deleteUser({uuid:t.uuid});e.status==="success"?(z.refetchQueries("users"),_(e.message,"green","top")):_("There was an error","red","top-right")}},ne=()=>{T.value="Add New User",V.value=!0,C.value=!1},ue=t=>{w.value=!!t.active,A.value=!!t.email_notify,J.value=!!t.whatsapp_notify,C.value=!0;const a=t.departments.map(e=>e.name)[0];M.value=t.uuid,n.value=t.name,k.value=t.email,v.value=t.phone,f.value=t.password,Q.value=t.departments.find(e=>e.name===a),g.value=t.roles.map(e=>({name:e.name,uuid:e.uuid})),T.value=`Edit ${t.name}`,V.value=!0},ie=async()=>{y.value=!0;const t={name:n.value.trim(),active:w.value?1:0,email:k.value.trim(),phone:v.value.trim(),role_uuids:g.value.map(a=>a.uuid),department_uuid:Q.value.uuid,password:f.value.trim()};if(t.name&&t.email&&t.password){const a=await $.createUser(t);console.log(a),a.status==="success"?(z.refetchQueries("users"),y.value=!1,P(),_(a.message,"green","top")):(B.value=a.message,y.value=!1,_(a.message,"red","top-right"))}else y.value=!1,B.value="All fields are required!",_("All fields are required!","red","top-right")},de=async()=>{const t={user_uuid:M.value,name:n.value.trim(),active:w.value?1:0,email_notify:A.value?1:0,whatsapp_notify:J.value?1:0,email:k.value.trim(),phone:v.value?v.value.trim():v.value,role_uuids:g.value.map(a=>a.uuid),department_uuid:Q.value.uuid,password:f.value?f.value.trim():f.value};if(t.name&&t.email&&g.value.length>0){const a=await $.updateUser(t);a.status==="success"?(z.refetchQueries("users"),P(),_(a.message,"green","top")):_("There was an error","red","top-right")}else B.value="All fields are required!",_("All fields are required!","red","top-right")},me=()=>P(),_=(t,a,e)=>{O.notify({message:t,color:a,position:e})},P=()=>{k.value="",n.value="",v.value="",g.value=[],Q.value="",f.value="",V.value=!1,C.value=!1,T.value="",y.value=!1},ce=t=>{const a=t.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));he(a,le,ke,O,"UsersData")};return(t,a)=>(s(),u("div",Ae,[U(se)?(s(),u("div",qe,"Loading users...")):U(H)?(s(),u("div",Ee,"An error has occurred: "+i(U(H)),1)):(s(),d(fe,{key:2,title:"Users",rows:U(G),columns:U(le),separator:"cell","row-key":"name",filter:R.value,dense:""},{body:o(e=>[l(ve,{props:e,class:pe(`${e.row.name=="Administrator"?"bg-admin text-white":""}`)},{default:o(()=>[l(c,{key:"name",props:e},{default:o(()=>[p(i(e.row.name),1)]),_:2},1032,["props"]),l(c,{key:"email",props:e},{default:o(()=>[p(i(e.row.email),1)]),_:2},1032,["props"]),l(c,{key:"phone",props:e},{default:o(()=>[p(i(e.row.phone?e.row.phone:"Null"),1)]),_:2},1032,["props"]),l(c,{key:"email_notify",props:e},{default:o(()=>[l(N,{color:`${e.row.email_notify?"blue":"red"}`},{default:o(()=>[p(i(e.row.email_notify?"Enabled":"Disabled"),1)]),_:2},1032,["color"])]),_:2},1032,["props"]),l(c,{key:"roles",props:e},{default:o(()=>{var h,q;return[(s(!0),u(K,null,W(e.row.roles,E=>(s(),u("div",{key:E.uuid},[l(N,{color:"blue"},{default:o(()=>[p(i(E.name),1)]),_:2},1024),Ne]))),128)),((q=(h=e.row)==null?void 0:h.roles)==null?void 0:q.length)===0?(s(),u("div",xe,Se)):m("",!0)]}),_:2},1032,["props"]),l(c,{key:"departments",props:e},{default:o(()=>{var h,q;return[(s(!0),u(K,null,W(e.row.departments,E=>(s(),u("div",{key:E.uuid},[l(N,{color:"green"},{default:o(()=>[p(i(E.name),1)]),_:2},1024),$e]))),128)),((q=(h=e.row)==null?void 0:h.departments)==null?void 0:q.length)===0?(s(),u("div",Te,ze)):m("",!0)]}),_:2},1032,["props"]),l(c,{key:"active",props:e},{default:o(()=>[e.row.active?(s(),d(N,{key:0},{default:o(()=>[p(" Enabled ")]),_:1})):(s(),d(N,{key:1,color:"red"},{default:o(()=>[p(" Disbled ")]),_:1}))]),_:2},1032,["props"]),l(c,{key:"created_at",props:e},{default:o(()=>[p(i(e.row.created_at),1)]),_:2},1032,["props"]),l(c,{key:"actions",props:e},{default:o(()=>[l(F,{color:"blue",name:"edit",onClick:h=>ue(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),e.row.name!=="Administrator"?(s(),d(F,{key:0,color:"red",name:"delete",onClick:h=>re(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])):m("",!0)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),"top-right":o(()=>[l(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:R.value,"onUpdate:modelValue":a[0]||(a[0]=e=>R.value=e),placeholder:"Search Name",class:"q-mr-md",clearable:""},{append:o(()=>[l(F,{name:"search"})]),_:1},8,["modelValue"]),b("span",null,[l(x,{onClick:ne,dense:"",color:"primary",icon:"add",label:"Create New User",unelevated:"",size:"sm"}),l(x,{dense:"",outline:"",color:"primary","icon-right":"archive",label:"Export Users",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=e=>ce(U(G))),size:"sm"})])]),_:1},8,["rows","columns","filter"])),l(ge,{modelValue:V.value,"onUpdate:modelValue":a[10]||(a[10]=e=>V.value=e),persistent:""},{default:o(()=>[l(_e,{style:{width:"500px"}},{default:o(()=>[l(ee,null,{default:o(()=>[b("div",Re,i(T.value),1),l(I),l(Z,{modelValue:w.value,"onUpdate:modelValue":a[2]||(a[2]=e=>w.value=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:`${w.value?"User active.":"User disabled."}`},null,8,["modelValue","label"])]),_:1}),l(be,{class:"q-pt-none"},{default:o(()=>[n.value!=="Administrator"?(s(),d(D,{key:0,class:"q-mb-sm",outlined:"",dense:"",label:"Name",modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=e=>n.value=e)},null,8,["modelValue"])):m("",!0),l(D,{class:"q-mb-sm",outlined:"",dense:"",label:"Phone (Optional)",modelValue:v.value,"onUpdate:modelValue":a[4]||(a[4]=e=>v.value=e)},null,8,["modelValue"]),l(D,{class:"q-mb-sm",outlined:"",dense:"",label:"Email",modelValue:k.value,"onUpdate:modelValue":a[5]||(a[5]=e=>k.value=e),type:"email"},null,8,["modelValue"]),n.value!=="Administrator"?(s(),d(X,{key:1,dense:"",multiple:"","use-chips":"",hint:"You can assign a user multiple roles.",outlined:"",modelValue:g.value,"onUpdate:modelValue":a[6]||(a[6]=e=>g.value=e),options:Y.value,"option-value":"uuid","option-label":"name",label:"Select Role",class:"q-mb-sm"},null,8,["modelValue","options"])):m("",!0),n.value!=="Administrator"?(s(),d(X,{key:2,dense:"",outlined:"",modelValue:Q.value,"onUpdate:modelValue":a[7]||(a[7]=e=>Q.value=e),options:j.value,"option-value":"uuid","option-label":"name",label:"Select Department",class:"q-mb-sm"},null,8,["modelValue","options"])):m("",!0),n.value!=="Administrator"?(s(),d(D,{key:3,class:"q-mb-sm",outlined:"",dense:"",label:"Password",modelValue:f.value,"onUpdate:modelValue":a[8]||(a[8]=e=>f.value=e),type:"password"},null,8,["modelValue"])):m("",!0)]),_:1}),b("div",Pe,[b("small",null,i(B.value),1)]),n.value==="Administrator"?(s(),u("small",Fe,[l(ae,{color:"primary"}),l(ee,null,{default:o(()=>[l(Z,{modelValue:A.value,"onUpdate:modelValue":a[9]||(a[9]=e=>A.value=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:`${A.value?"Email Notification Enabled.":"Email Notification Disabled."}`},null,8,["modelValue","label"]),l(I)]),_:1}),l(ae,{color:"primary"})])):m("",!0),l(ye,{align:"right"},{default:o(()=>[l(x,{flat:"",label:"Cancel",color:"red",onClick:me}),l(I),n.value&&!C.value?(s(),d(x,{key:0,flat:"",label:"Add User",color:"primary",onClick:ie,loading:y.value},null,8,["loading"])):m("",!0),n.value&&C.value?(s(),d(x,{key:1,flat:"",label:"Edit User",color:"primary",onClick:de,loading:y.value},null,8,["loading"])):m("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{ca as default};
