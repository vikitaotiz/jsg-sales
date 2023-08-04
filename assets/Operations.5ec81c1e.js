import{c8 as Se,c5 as Ve,r,c as ke,aI as c,a5 as S,a6 as o,P as u,u as b,a3 as C,bb as a,b as we,d as e,a4 as V,bD as Q,ac as n,M as Y,F as Ce,aO as Qe,bE as h}from"./index.0fcaefe8.js";import{Q as J,a as W}from"./QBadge.307759ef.js";import{a as I,Q as M}from"./QCard.8e472192.js";import{Q as A}from"./QInput.79a1560c.js";import{Q as xe,c as X,p as Ne,f as F,d as D,e as Z}from"./paginations.191f847e.js";import{p as ee,n as O,o as d}from"./rtl.b5227362.js";import{Q as Pe}from"./QSeparator.0c310cd3.js";import{Q as $e}from"./QBtnGroup.f5010ab3.js";import{a as Ae}from"./use-quasar.484de5c5.js";import{u as H}from"./index.8dceaa5d.js";import{p as De}from"./product_columns.133b4496.js";import{u as Be}from"./product-store.124e71bc.js";import{u as Ee}from"./payment-mode-store.a4f850b3.js";import{u as Ie}from"./sale-store.949fb3a5.js";import{u as Me}from"./debtor-store.cbd96777.js";import{p as Oe}from"./print.15699711.js";import"./use-dark.d82e8b53.js";import"./module_calls.8cce7b79.js";import"./helpers.185a9004.js";import"./_commonjsHelpers.6150b38b.js";const Ue=Se("operation",{state:()=>({selected_products:[]}),actions:{}});const Te={class:"q-pa-md"},Le={class:"row",style:{overflow:"hidden"}},ze={class:"q-pa-xs col-xs-12 col-sm-6 col-md-7",style:{overflow:"auto"}},Re={style:{color:"red"}},Fe={key:0},He={key:1},je=["onClick"],Ge={style:{color:"#017951"}},Ke=o("hr",null,null,-1),Ye=o("hr",null,null,-1),Je=o("br",null,null,-1),We=o("br",null,null,-1),Xe=o("br",null,null,-1),Ze={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-5",style:{overflow:"auto"}},el={style:{color:"orange"}},ll=o("br",null,null,-1),tl=o("br",null,null,-1),al=o("hr",null,null,-1),ol={class:"text-h6"},sl={class:"text-center error_msg"},ul=o("div",{class:"text-h6"},"Make Payment",-1),nl={class:"q-mt-sm"},rl={key:2,class:"q-pa-sm"},il={class:"row q-col-gutter-sm"},dl={key:3,class:"q-pt-sm"},cl={class:"text-center error_msg"},Dl={__name:"Operations",setup(ml){const j=Ve(),le=Ae(),te=Be(),ae=Ee(),G=Ie(),oe=Me(),se=Ue(),U=Ne(10),q=r(!1),k=r(!1),x=r(!1),N=r(!0),T=r(""),m=r(1),w=r(1),L=r(1),z=r(1),P=r(""),p=r(""),ue=r(""),_=r(""),B=r(""),v=r("");let i=se.selected_products;const{data:ne,isLoading:re,isError:K}=H("products",()=>te.fetchProducts()),{data:ie}=H("payment_modes",()=>ae.fetchPaymentModes());let E=[];H("debtors",()=>oe.fetchDebtors(),{onSuccess:s=>{E=s.map(t=>({name:t.name,uuid:t.uuid}))}});const R=r(E),de=r(null),ce=(s,t)=>{if(s===""){t(()=>{R.value=E});return}t(()=>{const l=s.toLowerCase();R.value=E.filter(y=>y.name.toLowerCase().indexOf(l)>-1)})},me=s=>{s.quantity<1?(_.value=`${s.name} quantity is zero. Add more from INVENTORIES.`,B.value=`${s.name} quantity is zero. Add more from INVENTORIES.`,f(`${s.name} quantity is zero. Add more from INVENTORIES`,"red","top")):(_.value="",B.value="",i.some(t=>t.name==s.name)?(_.value="Product already added to the bill! Select a different product.",B.value="Product already added to the bill! Select a different product.",f(`${s.name} already added to the bill!`,"red","top")):(x.value=!0,v.value=s))},pe=()=>{k.value=!0},_e=()=>{x.value=!1,v.value="",m.value=1},ve=()=>{if(m.value>v.value.quantity)_.value=`${m.value} is more than the maximum available quantity`,f(`${m.value} is more than the maximum available quantity`,"red","top");else{const s={uuid:v.value.uuid,name:v.value.name,price:v.value.selling_price,quantity:m.value};i.push(s),f(`${v.value.name} added to cart!`,"green","top"),x.value=!1,v.value="",m.value=1}},$=ke(()=>{let s=0;return i.forEach(t=>{s+=t.quantity*t.price}),s}),fe=s=>i.splice(s,1),be=()=>{confirm("Are you sure?")&&i.splice(0,i.length)},ye=async()=>{q.value=!0;let s=[];i.forEach(l=>s.push({name:l.name,quantity:l.quantity,uuid:l.uuid}));const t={products:s,payment_mode_uuid:p.value.uuid,bill_status:"sold",debtor_uuid:P.value.uuid};if(p.value.name==="Mpesa & Cash"){const l=Number(L.value)+Number(z.value);t.selling_price=l,t.actual_selling_price=l}else N.value?(t.selling_price=Number($.value),t.actual_selling_price=Number($.value)):(t.selling_price=Number($.value),t.actual_selling_price=Number(w.value));if(t.selling_price&&t.payment_mode_uuid)if(p.value.name==="Debt"&&!P.value)alert("Debtor name is required."),_.value="Debtor name is required.",q.value=!1;else{const l=await G.createSaleOperation(t);l.status==="success"?(p.value="",m.value="",P.value="",k.value=!1,i.splice(0,i.length),q.value=!1,j.push("/bills"),f(l.message,"green","top")):(_.value=l.message,f(l.message,"red","top-right"))}else _.value="Name is required!",f("Name is required!","red","top-right")},ge=async()=>{var l;q.value=!0;let s=[];if(confirm("Are you sure?")){i.forEach(g=>s.push({name:g.name,quantity:g.quantity,uuid:g.uuid}));const y={products:s};if((l=y==null?void 0:y.products)!=null&&l.length){const g=await G.createHoldBillOperation(y);g.status==="success"?(p.value="",m.value="",k.value=!1,i.splice(0,i.length),q.value=!1,j.push("/bills"),f(g.message,"green","top")):(_.value=g.message,f(g.message,"red","top-right"))}else _.value="Name is required!",f("Name is required!","red","top-right")}},he=()=>{k.value=!1,m.value="",ue.value="",_.value=""},f=(s,t,l)=>{le.notify({message:s,color:t,position:l})},qe=()=>{Oe({printable:i,properties:["name","quantity"],type:"json",gridHeaderStyle:"color: red;  border: 2px solid #3971A5;",gridStyle:"border: 2px solid #3971A5;"})};return(s,t)=>(c(),S("div",Te,[o("div",Le,[o("div",ze,[o("small",Re,u(B.value),1),b(re)?(c(),S("div",Fe,"Loading products...")):b(K)?(c(),S("div",He,"An error has occurred: "+u(b(K)),1)):(c(),C(xe,{key:2,title:"Make Sale (All Products)",rows:b(ne),columns:b(De),pagination:b(U),"onUpdate:pagination":t[1]||(t[1]=l=>we(U)?U.value=l:null),separator:"cell","row-key":"name",filter:T.value,dense:"",grid:""},{item:a(l=>[o("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4",onClick:y=>me(l.row)},[e(I,{bordered:"",class:Y(["selected_product",`${l.row.quantity<1?"minQty":""}`])},{default:a(()=>[e(M,{class:"text-center"},{default:a(()=>[o("strong",Ge,[e(Q,{name:"bubble_chart"}),n(" "+u(l.row.name),1)]),Ke,o("small",null,[o("i",null,[n("Selling Price: "),o("b",null,"Ksh "+u(l.row.selling_price),1)])]),Ye,o("small",null,[o("i",null,"Category: "+u(l.row.category),1)]),Je,o("small",null,[o("i",null,"Department: "+u(l.row.department),1)]),We,o("small",null,[e(J,{color:`${l.row.quantity<1?"red":"orange"}`},{default:a(()=>[n("Available Quantity "),Xe,n(u(l.row.quantity)+" "+u(l.row.measurement),1)]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1032,["class"])],8,je)]),"top-right":a(()=>[e(A,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:T.value,"onUpdate:modelValue":t[0]||(t[0]=l=>T.value=l),placeholder:"Search product...",class:"q-mr-md"},{append:a(()=>[e(Q,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","pagination","filter"]))]),b(i).length>0?(c(),S("div",Ze,[e(I,{bordered:""},{default:a(()=>[e(F,null,{default:a(()=>[o("i",null,[e(Q,{name:"shopping_cart"}),n(" New Bill")]),n(),e(D),o("span",el,"(Items: "+u(b(i).length)+")",1)]),_:1}),e(M,null,{default:a(()=>[e(ee,{bordered:"",separator:"",dense:"",class:"bill"},{default:a(()=>[e(O,null,{default:a(()=>[e(d,null,{default:a(()=>[n("Name")]),_:1}),e(d,{style:{color:"white"}},{default:a(()=>[n("Price")]),_:1}),e(d,{style:{color:"white"}},{default:a(()=>[n("Quantity")]),_:1}),e(d,{side:"",style:{color:"white"}},{default:a(()=>[n("Total")]),_:1}),e(d,{avatar:""},{default:a(()=>[e(Q,{class:"select_list",name:"delete",dense:"",color:"white",onClick:be})]),_:1})]),_:1})]),_:1}),ll,e(ee,{bordered:"",separator:"",dense:""},{default:a(()=>[(c(!0),S(Ce,null,Qe(b(i),(l,y)=>(c(),C(O,{key:l.uuid},{default:a(()=>[e(d,null,{default:a(()=>[n(u(l.name),1)]),_:2},1024),e(d,null,{default:a(()=>[n(u(l.price),1)]),_:2},1024),e(d,null,{default:a(()=>[n(u(l.quantity),1)]),_:2},1024),e(d,{side:""},{default:a(()=>[n(u(l.price*l.quantity),1)]),_:2},1024),e(d,{avatar:""},{default:a(()=>[e(Q,{class:"select_list",name:"delete",dense:"",color:"red",onClick:g=>fe(y)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128)),e(Pe,{color:"orange"}),e(O,null,{default:a(()=>[e(d,null,{default:a(()=>[n("Total")]),_:1}),e(d,{avatar:""},{default:a(()=>[n(u($.value),1)]),_:1}),e(d,{avatar:""})]),_:1})]),_:1}),tl,e($e,{spread:"",rounded:""},{default:a(()=>[e(h,{size:"sm",color:"primary",label:"Sale",icon:"grain",onClick:pe}),e(h,{size:"sm",color:"orange",label:"Hold Bill",icon:"pan_tool",onClick:ge,loading:q.value},null,8,["loading"])]),_:1}),al,e(h,{color:"primary",flat:"",class:"full-width",label:"Print Bill",icon:"print",onClick:qe})]),_:1})]),_:1})])):V("",!0)]),e(X,{modelValue:x.value,"onUpdate:modelValue":t[3]||(t[3]=l=>x.value=l),persistent:""},{default:a(()=>[e(I,{style:{width:"500px"}},{default:a(()=>[e(W,null,{default:a(()=>[o("div",ol,[e(Q,{name:"bubble_chart"}),n(" "+u(v.value.name),1)]),e(D),o("small",null,[e(J,null,{default:a(()=>[n(u(v.value.measurement),1)]),_:1})])]),_:1}),e(M,{class:"q-pt-none"},{default:a(()=>[e(A,{autofocus:"",outlined:"",dense:"",label:"Product Quantity",modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=l=>m.value=l),type:"number",hint:`Note : You can sale a maximum of ${v.value.quantity}`},null,8,["modelValue","hint"])]),_:1}),o("div",sl,[o("small",null,u(_.value),1)]),e(F,{align:"right"},{default:a(()=>[e(h,{flat:"",label:"Cancel",color:"red",onClick:_e}),e(D),m.value?(c(),C(h,{key:0,flat:"",label:"Add Product",color:"primary",onClick:ve})):V("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(X,{modelValue:k.value,"onUpdate:modelValue":t[11]||(t[11]=l=>k.value=l),persistent:""},{default:a(()=>[e(I,{style:{width:"500px"}},{default:a(()=>[e(W,null,{default:a(()=>[ul,e(D),o("small",nl,[e(h,{disabled:p.value.name==="Mpesa & Cash",size:"sm",dense:"",color:"blue",depressed:"",class:Y(`${N.value?"":"actual_selling_price"}`),onClick:t[4]||(t[4]=l=>N.value=!N.value),label:`Expected Selling Price : ${$.value}`},null,8,["disabled","class","label"])])]),_:1}),e(M,{class:"q-pt-none"},{default:a(()=>[!N.value&&p.value.name!=="Mpesa & Cash"?(c(),C(A,{key:0,autofocus:"",outlined:"",dense:"",label:"Actual Selling Price",modelValue:w.value,"onUpdate:modelValue":t[5]||(t[5]=l=>w.value=l),class:"q-pa-xs col-xs-12 col-sm-6 col-md-6 q-mb-sm",type:"number"},null,8,["modelValue"])):V("",!0),w.value&&w.value>0?(c(),C(Z,{key:1,dense:"",outlined:"",modelValue:p.value,"onUpdate:modelValue":t[6]||(t[6]=l=>p.value=l),options:b(ie),"option-value":"uuid","option-label":"name",label:"Select Payment Mode"},null,8,["modelValue","options"])):V("",!0),p.value.name==="Mpesa & Cash"?(c(),S("div",rl,[o("div",il,[e(A,{outlined:"",dense:"",class:"col-6",label:"Mpesa Amount",type:"number",modelValue:L.value,"onUpdate:modelValue":t[7]||(t[7]=l=>L.value=l)},null,8,["modelValue"]),e(A,{outlined:"",dense:"",class:"col-6",label:"Cash Amount",type:"number",modelValue:z.value,"onUpdate:modelValue":t[8]||(t[8]=l=>z.value=l)},null,8,["modelValue"])])])):V("",!0),p.value.name==="Debt"?(c(),S("div",dl,[e(Z,{outlined:"",dense:"",modelValue:P.value,"onUpdate:modelValue":t[9]||(t[9]=l=>P.value=l),"use-input":"","input-debounce":"0",label:"Select debtor",options:R.value,"option-value":"uuid","option-label":"name",onFilter:ce,behavior:"menu",onOnchange:t[10]||(t[10]=l=>s.$emit("selectDebtor",de.value)),hint:"Type in debtor name to filter..."},{"no-option":a(()=>[e(O,null,{default:a(()=>[e(d,{class:"text-grey"},{default:a(()=>[e(h,{size:"sm",outline:"",label:"No results? CLick here to create new debtor.",to:"/debtors",color:"primary"})]),_:1})]),_:1})]),_:1},8,["modelValue","options"])])):V("",!0)]),_:1}),o("div",cl,[o("small",null,u(_.value),1)]),e(F,{align:"right"},{default:a(()=>[e(h,{flat:"",label:"Cancel",color:"red",onClick:he}),e(D),w.value&&p.value?(c(),C(h,{key:0,flat:"",label:"Sale",color:"primary",onClick:ye,loading:q.value},null,8,["loading"])):V("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Dl as default};
