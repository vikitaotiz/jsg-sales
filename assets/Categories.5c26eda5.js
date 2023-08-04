import{Q as f,a as R}from"./QTr.cd6a50c5.js";import{r as i,aI as u,a5 as q,u as d,P as m,a3 as v,bb as o,b as j,d as t,ac as k,bD as E,a4 as h,bE as y,a6 as A}from"./index.54629b9a.js";import{Q as $}from"./QInput.92598606.js";import{Q as H}from"./QBtnGroup.632ef586.js";import{Q as J,c as K,p as W,f as X,d as Y}from"./paginations.53f48ad5.js";import{a as Z,Q as S}from"./QCard.a98f9a97.js";import{e as ee,a as ae}from"./excel.5d19a2ad.js";import{a as te}from"./use-quasar.8acf90c1.js";import{a as re,u as oe}from"./index.da8d9231.js";import{u as le}from"./category-store.433d9cad.js";import"./use-dark.f6381175.js";import"./QSeparator.d04c4ca5.js";import"./rtl.5467f1aa.js";import"./module_calls.c637478d.js";import"./helpers.d60dad50.js";const U=[{name:"name",required:!0,label:"Name",align:"left",field:_=>_.name,format:_=>`${_}`,sortable:!0},{name:"products",align:"center",label:"Products",field:"products",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const se={class:"q-pa-md"},ne={key:0},ie={key:1},ue={class:"text-h6"},de={class:"text-center error_msg"},Ne={__name:"Categories",setup(_){const B=te(),Q=re(),C=le(),w=W(10),c=i(!1),s=i(!1),g=i(!1),x=i(""),b=i(""),l=i(""),N=i(""),p=i(""),{data:V,isLoading:I,isError:D}=oe("categories",()=>C.fetchCategories()),z=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await C.deleteCategory({uuid:a.uuid});e.status==="success"?(Q.refetchQueries("categories"),n(e.message,"green","top")):n("There was an error","red","top-right")}},L=()=>{b.value="Add New Category",c.value=!0,g.value=!1},P=a=>{g.value=!0,b.value=`Edit ${a.name}`,l.value=a.name,N.value=a.uuid,c.value=!0},F=async()=>{if(s.value=!0,p.value="",l.value.trim()){const a=await C.createCategory({name:l.value.trim()});a.status==="success"?(Q.refetchQueries("categories"),l.value="",c.value=!1,s.value=!1,n(a.message,"green","top")):(s.value=!1,p.value=a.message,n(a.message,"red","top-right"))}else p.value="Name is required!",n("Name is required!","red","top-right")},G=async()=>{s.value=!0;const a={name:l.value.trim(),uuid:N.value};if(a.name){const r=await C.updateCategory(a);r.status==="success"?(Q.refetchQueries("categories"),l.value="",c.value=!1,g.value=!1,b.value="",s.value=!1,n(r.message,"green","top")):n("There was an error","red","top-right")}else s.value=!1,p.value="Name is required!",n("Name is required!","red","top-right")},M=()=>{c.value=!1,l.value="",N.value="",p.value=""},n=(a,r,e)=>{B.notify({message:a,color:r,position:e})},O=a=>{const r=a.map(e=>({name:e.name,products:e.products.length,created_at:e.created_at}));ee(r,U,ae,B,"CategoriesData")};return(a,r)=>(u(),q("div",se,[d(I)?(u(),q("div",ne,"Loading categories...")):d(D)?(u(),q("div",ie,"An error has occurred: "+m(d(D)),1)):(u(),v(J,{key:2,title:"Categories",rows:d(V),columns:d(U),pagination:d(w),"onUpdate:pagination":r[2]||(r[2]=e=>j(w)?w.value=e:null),separator:"cell","row-key":"name",filter:x.value,dense:""},{body:o(e=>[t(R,{props:e},{default:o(()=>[t(f,{key:"name",props:e},{default:o(()=>[k(m(e.row.name),1)]),_:2},1032,["props"]),t(f,{key:"products",props:e},{default:o(()=>[k(m(e.row.products.length),1)]),_:2},1032,["props"]),t(f,{key:"user",props:e},{default:o(()=>[k(m(e.row.user),1)]),_:2},1032,["props"]),t(f,{key:"created_at",props:e},{default:o(()=>[k(m(e.row.created_at),1)]),_:2},1032,["props"]),t(f,{key:"actions",props:e},{default:o(()=>[t(E,{color:"blue",name:"edit",onClick:T=>P(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),e.row.products.length===0?(u(),v(E,{key:0,color:"red",name:"delete",onClick:T=>z(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])):h("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":o(()=>[t($,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:x.value,"onUpdate:modelValue":r[0]||(r[0]=e=>x.value=e),placeholder:"Search",class:"q-mr-md"},{append:o(()=>[t(E,{name:"search"})]),_:1},8,["modelValue"]),t(H,null,{default:o(()=>{var e;return[t(y,{onClick:L,round:"",dense:"",color:"primary",icon:"add",label:"Add"}),((e=d(V))==null?void 0:e.length)>0?(u(),v(y,{key:0,dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:r[1]||(r[1]=T=>O(d(V)))})):h("",!0)]}),_:1})]),_:1},8,["rows","columns","pagination","filter"])),t(K,{modelValue:c.value,"onUpdate:modelValue":r[4]||(r[4]=e=>c.value=e),persistent:""},{default:o(()=>[t(Z,{style:{width:"500px"}},{default:o(()=>[t(S,null,{default:o(()=>[A("div",ue,m(b.value),1)]),_:1}),t(S,{class:"q-pt-none"},{default:o(()=>[t($,{outlined:"",dense:"",label:"Name",modelValue:l.value,"onUpdate:modelValue":r[3]||(r[3]=e=>l.value=e)},null,8,["modelValue"])]),_:1}),A("div",de,[A("small",null,m(p.value),1)]),t(X,{align:"right"},{default:o(()=>[t(y,{flat:"",label:"Cancel",color:"red",onClick:M}),t(Y),l.value&&!g.value?(u(),v(y,{key:0,flat:"",label:"Add Category",color:"primary",onClick:F,loading:s.value},null,8,["loading"])):h("",!0),l.value&&g.value?(u(),v(y,{key:1,flat:"",label:"Edit Category",color:"primary",onClick:G,loading:s.value},null,8,["loading"])):h("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Ne as default};
