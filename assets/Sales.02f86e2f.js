import{Q as f,a as M}from"./QTr.da10a9bf.js";import{r as u,aI as c,a5 as h,u as n,P as i,a3 as q,aa as O,bb as s,b as P,d as t,bD as R,bE as g,ac as _,a6 as w,a4 as B}from"./index.43b29598.js";import{Q as T}from"./QInput.50502b6a.js";import{Q as j,c as z,p as G,f as H,d as J}from"./paginations.d31396ff.js";import{a as K,Q as D}from"./QCard.287aa4cb.js";import{e as W,a as X}from"./excel.5d19a2ad.js";import{a as Y}from"./use-quasar.811db318.js";import{a as Z,u as ee}from"./index.fe5141b8.js";import{u as ae}from"./sale-store.f9d6ab4b.js";import"./use-dark.ad1ce312.js";import"./QSeparator.00910b71.js";import"./rtl.e3274486.js";import"./module_calls.e16012c0.js";import"./helpers.01ee3f07.js";const U=[{name:"name",required:!0,label:"Name",align:"left",field:v=>v.name,format:v=>`${v}`,sortable:!0},{name:"quantity",align:"center",label:"Quantity",field:"quantity",sortable:!0},{name:"status",align:"center",label:"Status",field:"status",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0}];const te={class:"q-pa-md"},se={key:0},le={key:1},re={class:"text-h6"},oe={class:"text-center error_msg"},Se={__name:"Sales",setup(v){const C=Y(),x=Z(),y=ae(),b=G(10),p=u(!1),Q=u(!1),S=u(""),V=u(""),r=u(""),N=u(""),d=u(""),{data:k,isLoading:A,isError:E}=ee("sales",()=>y.fetchSales()),I=async()=>{if(d.value="",r.value.trim()){const l=await y.createSale({name:r.value.trim()});l.status==="success"?(x.refetchQueries("sales"),r.value="",p.value=!1,m(l.message,"green","top")):(d.value=l.message,m(l.message,"red","top-right"))}else d.value="Name is required!",m("Name is required!","red","top-right")},$=async()=>{const l={name:r.value.trim(),uuid:N.value};if(l.name){const a=await y.updateSale(l);a.status==="success"?(x.refetchQueries("sales"),r.value="",p.value=!1,Q.value=!1,V.value="",m(a.message,"green","top")):m("There was an error","red","top-right")}else d.value="Name is required!",m("Name is required!","red","top-right")},L=()=>{p.value=!1,r.value="",N.value="",d.value=""},m=(l,a,o)=>{C.notify({message:l,color:a,position:o})},F=l=>{const a=l.map(o=>({name:o.name,sales:o.sales.length,created_at:o.created_at}));W(a,U,X,C,"SalesData")};return(l,a)=>{var o;return c(),h("div",te,[n(A)?(c(),h("div",se,"Loading sales...")):n(E)?(c(),h("div",le,"An error has occurred: "+i(n(E)),1)):(c(),q(j,{key:2,title:"Sales",rows:n(k),columns:n(U),pagination:n(b),"onUpdate:pagination":a[2]||(a[2]=e=>P(b)?b.value=e:null),separator:"cell","row-key":"name",filter:S.value,dense:""},O({body:s(e=>[t(M,{props:e},{default:s(()=>[t(f,{key:"name",props:e},{default:s(()=>[_(i(e.row.name),1)]),_:2},1032,["props"]),t(f,{key:"quantity",props:e},{default:s(()=>[_(i(e.row.quantity),1)]),_:2},1032,["props"]),t(f,{key:"status",props:e},{default:s(()=>[_(i(e.row.status),1)]),_:2},1032,["props"]),t(f,{key:"user",props:e},{default:s(()=>[_(i(e.row.user),1)]),_:2},1032,["props"]),t(f,{key:"created_at",props:e},{default:s(()=>[_(i(e.row.created_at),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:2},[((o=n(k))==null?void 0:o.length)>0?{name:"top-right",fn:s(()=>[t(T,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:S.value,"onUpdate:modelValue":a[0]||(a[0]=e=>S.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[t(R,{name:"search"})]),_:1},8,["modelValue"]),t(g,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=e=>F(n(k)))})]),key:"0"}:void 0]),1032,["rows","columns","pagination","filter"])),t(z,{modelValue:p.value,"onUpdate:modelValue":a[4]||(a[4]=e=>p.value=e),persistent:""},{default:s(()=>[t(K,{style:{width:"500px"}},{default:s(()=>[t(D,null,{default:s(()=>[w("div",re,i(V.value),1)]),_:1}),t(D,{class:"q-pt-none"},{default:s(()=>[t(T,{outlined:"",dense:"",label:"Name",modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=e=>r.value=e)},null,8,["modelValue"])]),_:1}),w("div",oe,[w("small",null,i(d.value),1)]),t(H,{align:"right"},{default:s(()=>[t(g,{flat:"",label:"Cancel",color:"red",onClick:L}),t(J),r.value&&!Q.value?(c(),q(g,{key:0,flat:"",label:"Add Sale",color:"primary",onClick:I})):B("",!0),r.value&&Q.value?(c(),q(g,{key:1,flat:"",label:"Edit Sale",color:"primary",onClick:$})):B("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};export{Se as default};
