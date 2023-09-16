import{r as v,aJ as i,a6 as u,d as e,bb as a,u as n,Q as r,a5 as w,ad as l,bE as C,bD as _,a7 as t,F as S,aP as V,a4 as L}from"./index.129e3269.js";import{Q as b}from"./QSpace.d3bcdf5d.js";import{Q as I}from"./QToolbar.3d9de16f.js";import{Q,a as N}from"./helpers.d53734ba.js";import{Q as q}from"./QInput.39135095.js";import{b as y,Q as h,a as o}from"./QList.81766aa9.js";import{Q as T}from"./QTooltip.7928dedf.js";import{Q as E}from"./QTable.5ae50441.js";import{u as A}from"./use-quasar.193465b1.js";import{a as D,u as F}from"./index.9594c7a0.js";import{u as $}from"./barista-kitchen-store.32ba3c72.js";import"./use-dark.49fe607a.js";import"./use-key-composition.7a3625b4.js";import"./uid.9b787859.js";import"./rtl.ffa1ed12.js";import"./QDialog.a1654a10.js";import"./QSeparator.058f296d.js";import"./module_calls.414173bc.js";const z={class:"q-pa-md"},J=t("b",null,"Barista",-1),K={key:0},O={key:1},P={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},U={class:"bg-primary text-white text-center q-pa-xs"},j={style:{"text-align":"center"}},me={__name:"Barista",setup(G){A(),D();const g=$(),{data:p,isLoading:B,isError:f}=F("barista_bills",()=>g.fetchBaristaBills()),m=v("");return(k,d)=>(i(),u("div",z,[e(Q,{dark:"",class:"bg-primary"},{default:a(()=>[e(I,null,{default:a(()=>[e(C,{dense:"",flat:"",icon:"arrow_back",label:"Back",onClick:d[0]||(d[0]=s=>k.$router.back())}),e(b),J,e(b)]),_:1})]),_:1}),n(B)?(i(),u("div",K,"Loading bills...")):n(f)?(i(),u("div",O,"An error has occurred: "+r(n(f)),1)):w("",!0),l(" "+r(n(p))+" ",1),e(E,{flat:"",bordered:"",grid:"",title:"Barista",rows:n(p),"row-key":"name",filter:m.value,"hide-header":""},{"top-right":a(()=>[e(q,{borderless:"",dense:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":d[1]||(d[1]=s=>m.value=s),placeholder:"Search"},{append:a(()=>[e(_,{name:"search"})]),_:1},8,["modelValue"])]),item:a(s=>[t("div",P,[e(Q,{bordered:"",style:{"border-radius":"8px"}},{default:a(()=>[t("div",U,[t("small",null,[t("strong",null,[e(_,{name:"description",style:{"margin-bottom":"2px"}}),l(" BILL-"+r(s.row.bill_ref),1)])])]),e(N,{style:{padding:"2px"}},{default:a(()=>[t("div",j,[t("p",null,[t("strong",null," Created by : "+r(s.row.user),1)]),t("p",null,[t("strong",null," Created On : "+r(s.row.created_at),1)])]),t("small",null,[e(y,{dense:"",bordered:"",separator:""},{default:a(()=>[e(h,null,{default:a(()=>[e(o,null,{default:a(()=>[l("Name")]),_:1}),e(o,null,{default:a(()=>[l("Quantity")]),_:1}),e(o,null,{default:a(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),t("small",null,[e(y,{dense:"",bordered:"",separator:""},{default:a(()=>[(i(!0),u(S,null,V(s.row.sales,(c,x)=>(i(),L(h,{key:x},{default:a(()=>[e(o,null,{default:a(()=>[l(r(c.name),1)]),_:2},1024),e(o,null,{default:a(()=>[l(r(c.quantity),1)]),_:2},1024),e(o,null,{default:a(()=>[e(_,{name:"pan_tool",size:"sm",color:"primary",style:{cursor:"pointer"}},{default:a(()=>[e(T,null,{default:a(()=>[l(" Send "+r(c.name)+" to table ",1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),_:1},8,["rows","filter"])]))}};export{me as default};
