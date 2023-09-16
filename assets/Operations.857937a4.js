import{c2 as ke,ca as Ve,r as i,c as we,aJ as m,a6 as S,a7 as s,Q as n,u as y,a4 as k,bb as a,d as e,a5 as q,bD as C,ad as c,N as X,F as Ce,aP as Ne,bE as g}from"./index.c8a14f3d.js";import{Q as Z}from"./QBadge.ed198dc0.js";import{Q as O,a as T,h as Pe}from"./helpers.7f2442be.js";import{Q as A}from"./QInput.e7fa28fe.js";import{Q as xe,a as ee}from"./QTable.3b54437f.js";import{Q as B}from"./QSpace.0c24a6e8.js";import{Q as F}from"./QCardActions.5ac4ea1f.js";import{b as le,Q as U,a as p}from"./QList.ab5bf1c0.js";import{Q as $e}from"./QSeparator.f634ffd5.js";import{Q as De}from"./QBtnGroup.71c10a8e.js";import{Q as te}from"./QToolbar.6127e444.js";import{Q as ae}from"./QDialog.705d3518.js";import{u as Ae}from"./use-quasar.830122b0.js";import{a as Be,u as H}from"./index.e2e51196.js";import{h as Ee}from"./moment.9709ab41.js";import{p as Me}from"./product_columns.0707d543.js";import{u as Ie}from"./auth-store.e836192b.js";import{u as Oe}from"./product-store.b1ce9b74.js";import{u as Te}from"./payment-mode-store.f6f4c8a8.js";import{u as Ue}from"./sale-store.07791797.js";import{u as Le}from"./debtor-store.983146cf.js";import{e as ze}from"./receipt.ca774753.js";import"./use-dark.9a9c194b.js";import"./use-key-composition.86a874c5.js";import"./uid.9b787859.js";import"./rtl.5c823d43.js";import"./module_calls.101134f6.js";import"./_commonjsHelpers.6150b38b.js";const Re=ke("operation",{state:()=>({selected_products:[]}),actions:{}});const Ye={class:"q-pa-md"},Fe={class:"row",style:{overflow:"hidden"}},He={class:"q-pa-xs col-xs-12 col-sm-6 col-md-7",style:{overflow:"auto"}},Ge={style:{color:"red"}},Je={key:0},Ke={key:1},je=["onClick"],We={style:{color:"#017951"}},Xe=s("hr",null,null,-1),Ze=s("hr",null,null,-1),el=s("br",null,null,-1),ll=s("br",null,null,-1),tl=s("br",null,null,-1),al={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-5",style:{overflow:"auto"}},ol={style:{color:"orange"}},sl={style:{color:"black"}},ul={style:{color:"black"}},rl=s("br",null,null,-1),nl=s("hr",null,null,-1),il={class:"text-h6"},dl={class:"text-center error_msg"},cl=s("div",{class:"text-h6"},"Make Payment",-1),ml={class:"q-mt-sm"},pl={key:2,class:"q-pa-sm"},_l={class:"row q-col-gutter-sm"},vl={key:3,class:"q-pt-sm"},fl={class:"text-center error_msg"},Hl={__name:"Operations",setup(yl){const E=Ie(),G=Ve(),oe=Ae(),J=Be(),se=Oe(),ue=Te(),K=Ue(),re=Le(),ne=Re(),Q=i(!1),V=i(!1),N=i(!1),P=i(!0),L=i(""),_=i(1),w=i(1),z=i(1),R=i(1),x=i(""),v=i(""),ie=i(""),f=i(""),M=i(""),b=i("");let d=ne.selected_products;const{data:j,isLoading:de,isError:W}=H("products",()=>se.fetchProducts()),{data:ce}=H("payment_modes",()=>ue.fetchPaymentModes());let I=[];H("debtors",()=>re.fetchDebtors(),{onSuccess:o=>{I=o.map(t=>({name:t.name,uuid:t.uuid}))}});const Y=i(I),me=i(null),pe=(o,t)=>{if(o===""){t(()=>{Y.value=I});return}t(()=>{const u=o.toLowerCase();Y.value=I.filter(l=>l.name.toLowerCase().indexOf(u)>-1)})},_e=o=>{o.quantity<1?(f.value=`${o.name} quantity is zero. Add more from INVENTORIES.`,M.value=`${o.name} quantity is zero. Add more from INVENTORIES.`,h(`${o.name} quantity is zero. Add more from INVENTORIES`,"red","top")):(f.value="",M.value="",d.some(t=>t.name==o.name)?(f.value="Product already added to the bill! Select a different product.",M.value="Product already added to the bill! Select a different product.",h(`${o.name} already added to the bill!`,"red","top")):(N.value=!0,b.value=o))},ve=()=>{V.value=!0},fe=()=>{N.value=!1,b.value="",_.value=1},ye=()=>{if(_.value>b.value.quantity)f.value=`${_.value} is more than the maximum available quantity`,h(`${_.value} is more than the maximum available quantity`,"red","top");else{const o={uuid:b.value.uuid,name:b.value.name,price:b.value.selling_price,quantity:_.value};d.push(o),h(`${b.value.name} added to cart!`,"green","top"),N.value=!1,b.value="",_.value=1}},$=we(()=>{let o=0;return d.forEach(t=>{o+=t.quantity*t.price}),o}),be=o=>d.splice(o,1),he=()=>{confirm("Are you sure?")&&d.splice(0,d.length)},ge=async()=>{Q.value=!0;let o=[];d.forEach(u=>o.push({name:u.name,quantity:u.quantity,uuid:u.uuid}));const t={products:o,payment_mode_uuid:v.value.uuid,bill_status:"sold",debtor_uuid:x.value.uuid};if(v.value.name==="Mpesa & Cash"){const u=Number(z.value)+Number(R.value);t.selling_price=u,t.actual_selling_price=u}else P.value?(t.selling_price=Number($.value),t.actual_selling_price=Number($.value)):(t.selling_price=Number($.value),t.actual_selling_price=Number(w.value));if(t.selling_price&&t.payment_mode_uuid)if(v.value.name==="Debt"&&!x.value)alert("Debtor name is required."),f.value="Debtor name is required.",Q.value=!1;else{const u=await K.createSaleOperation(t);u.status==="success"?(J.refetchQueries("finished_products"),v.value="",_.value="",x.value="",V.value=!1,d.splice(0,d.length),Q.value=!1,G.push("/bills"),h(u.message,"green","top")):(f.value=u.message,h(u.message,"red","top-right"))}else f.value="Name is required!",h("Name is required!","red","top-right")},qe=async()=>{var u;Q.value=!0;let o=[];if(confirm("Are you sure?")){d.forEach(r=>o.push({name:r.name,quantity:r.quantity,uuid:r.uuid}));const l={products:o};if((u=l==null?void 0:l.products)!=null&&u.length){const r=await K.createHoldBillOperation(l);r.status==="success"?(J.refetchQueries("products"),v.value="",_.value="",V.value=!1,d.splice(0,d.length),Q.value=!1,G.push("/bills"),h(r.message,"green","top")):(f.value=r.message,h(r.message,"red","top-right"))}else f.value="Name is required!",h("Name is required!","red","top-right")}},Qe=()=>{V.value=!1,_.value="",ie.value="",f.value=""},h=(o,t,u)=>{oe.notify({message:o,color:t,position:u})},Se=()=>{var u,l;const o=[];d.forEach(r=>{o.push({name:r.name,quantity:r.quantity,price:Number(r.price),total:Number(r.quantity)*Number(r.price)})});const t={title:"Sales Receipt",bill_ref:"New Bill",created_at:Ee().format("MM ddd, YYYY HH:mm:ss a"),status:"Pending Payment",user:(l=(u=E==null?void 0:E.user)==null?void 0:u.user)==null?void 0:l.name,payment_mode:"No Payment Mode",actual_selling_price:o.reduce((r,D)=>r+D.total,0),debtor_name:"No Debtor"};ze(o,["name","quantity","price","total"],t)};return(o,t)=>{var u;return m(),S("div",Ye,[s("div",Fe,[s("div",He,[s("small",Ge,n(M.value),1),y(de)?(m(),S("div",Je,"Loading products...")):y(W)?(m(),S("div",Ke,"An error has occurred: "+n(y(W)),1)):(m(),k(xe,{key:2,title:`Make Sale (All Products : ${(u=y(j))==null?void 0:u.length})`,rows:y(j),columns:y(Me),separator:"cell","row-key":"name",filter:L.value,dense:"",grid:""},{item:a(l=>[s("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4",onClick:r=>_e(l.row)},[e(O,{bordered:"",class:X(["selected_product",`${l.row.quantity<1?"minQty":""}`]),style:{"border-radius":"10px"}},{default:a(()=>[e(T,{class:"text-center"},{default:a(()=>[s("strong",We,[e(C,{name:"bubble_chart"}),c(" "+n(l.row.name),1)]),Xe,s("small",null,[s("i",null,[c("Selling Price: "),s("b",null,"Ksh "+n(l.row.selling_price),1)])]),Ze,s("small",null,[s("i",null,"Category: "+n(l.row.category),1)]),el,s("small",null,[s("i",null,"Department: "+n(l.row.department),1)]),ll,s("small",null,[e(Z,{color:`${l.row.quantity<1?"red":"orange"}`},{default:a(()=>[c("Available Quantity "),tl,c(n(l.row.quantity)+" "+n(l.row.measurement),1)]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1032,["class"])],8,je)]),"top-right":a(()=>[e(A,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:L.value,"onUpdate:modelValue":t[0]||(t[0]=l=>L.value=l),placeholder:"Search product...",class:"q-mr-md"},{append:a(()=>[e(C,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["title","rows","columns","filter"]))]),y(d).length>0?(m(),S("div",al,[e(O,{bordered:""},{default:a(()=>[e(F,null,{default:a(()=>[s("i",null,[e(C,{name:"shopping_cart"}),c(" New Bill")]),c(),e(B),s("span",ol,"(Items: "+n(y(d).length)+")",1)]),_:1}),e(T,null,{default:a(()=>[s("small",null,[e(le,{bordered:"",separator:"",dense:"",class:"bill"},{default:a(()=>[e(U,null,{default:a(()=>[e(p,null,{default:a(()=>[c("Name")]),_:1}),e(p,{style:{color:"white"}},{default:a(()=>[c("Price")]),_:1}),e(p,{style:{color:"white"}},{default:a(()=>[c("Quantity")]),_:1}),e(p,{side:"",style:{color:"white"}},{default:a(()=>[c("Total")]),_:1}),e(p,{avatar:""},{default:a(()=>[e(C,{class:"select_list",name:"delete",dense:"",color:"white",onClick:he})]),_:1})]),_:1})]),_:1}),e(le,{bordered:"",separator:"",dense:""},{default:a(()=>[(m(!0),S(Ce,null,Ne(y(d),(l,r)=>(m(),k(U,{key:l.uuid},{default:a(()=>[e(p,null,{default:a(()=>[c(n(l.name),1)]),_:2},1024),e(p,null,{default:a(()=>[s("span",sl,n(l.price),1)]),_:2},1024),e(p,null,{default:a(()=>[c(n(l.quantity),1)]),_:2},1024),e(p,{side:""},{default:a(()=>[s("span",ul,n(l.price*l.quantity),1)]),_:2},1024),e(p,{avatar:""},{default:a(()=>[e(C,{class:"select_list",name:"delete",dense:"",color:"red",onClick:D=>be(r)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128)),e($e,{color:"orange"}),e(U,null,{default:a(()=>[e(p,null,{default:a(()=>[c("Total")]),_:1}),e(p,{avatar:""},{default:a(()=>[c(n($.value),1)]),_:1}),e(p,{avatar:""})]),_:1})]),_:1})]),rl,e(De,{spread:"",rounded:""},{default:a(()=>{var l,r,D;return[y(Pe)((D=(r=(l=y(E))==null?void 0:l.user)==null?void 0:r.user)==null?void 0:D.roles)?(m(),k(g,{key:0,size:"sm",color:"primary",label:"Sale",icon:"grain",onClick:ve})):q("",!0),e(g,{size:"sm",color:"orange",label:"Hold Bill",icon:"pan_tool",onClick:qe,loading:Q.value},null,8,["loading"])]}),_:1}),nl,e(g,{color:"primary",flat:"",class:"full-width",label:"Print Bill",icon:"print",onClick:Se})]),_:1})]),_:1})])):q("",!0)]),e(ae,{modelValue:N.value,"onUpdate:modelValue":t[2]||(t[2]=l=>N.value=l),persistent:""},{default:a(()=>[e(O,{style:{width:"500px"}},{default:a(()=>[e(te,null,{default:a(()=>[s("div",il,[e(C,{name:"bubble_chart"}),c(" "+n(b.value.name),1)]),e(B),s("small",null,[e(Z,null,{default:a(()=>[c(n(b.value.measurement),1)]),_:1})])]),_:1}),e(T,{class:"q-pt-none"},{default:a(()=>[e(A,{autofocus:"",outlined:"",dense:"",label:"Product Quantity",modelValue:_.value,"onUpdate:modelValue":t[1]||(t[1]=l=>_.value=l),type:"number",min:"1",oninput:"validity.valid||(value='');",hint:`Note : You can sale a maximum of ${b.value.quantity}`},null,8,["modelValue","hint"])]),_:1}),s("div",dl,[s("small",null,n(f.value),1)]),e(F,{align:"right"},{default:a(()=>[e(g,{flat:"",label:"Cancel",color:"red",onClick:fe}),e(B),_.value?(m(),k(g,{key:0,flat:"",label:"Add Product",color:"primary",onClick:ye})):q("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(ae,{modelValue:V.value,"onUpdate:modelValue":t[10]||(t[10]=l=>V.value=l),persistent:""},{default:a(()=>[e(O,{style:{width:"500px"}},{default:a(()=>[e(te,null,{default:a(()=>[cl,e(B),s("small",ml,[e(g,{disabled:v.value.name==="Mpesa & Cash",size:"sm",dense:"",color:"blue",depressed:"",class:X(`${P.value?"":"actual_selling_price"}`),onClick:t[3]||(t[3]=l=>P.value=!P.value),label:`Expected Selling Price : ${$.value}`},null,8,["disabled","class","label"])])]),_:1}),e(T,{class:"q-pt-none"},{default:a(()=>[!P.value&&v.value.name!=="Mpesa & Cash"?(m(),k(A,{key:0,autofocus:"",outlined:"",dense:"",label:"Actual Selling Price",modelValue:w.value,"onUpdate:modelValue":t[4]||(t[4]=l=>w.value=l),class:"q-pa-xs col-xs-12 col-sm-6 col-md-6 q-mb-sm",type:"number",min:"1",oninput:"validity.valid||(value='');"},null,8,["modelValue"])):q("",!0),w.value&&w.value>0?(m(),k(ee,{key:1,dense:"",outlined:"",modelValue:v.value,"onUpdate:modelValue":t[5]||(t[5]=l=>v.value=l),options:y(ce),"option-value":"uuid","option-label":"name",label:"Select Payment Mode"},null,8,["modelValue","options"])):q("",!0),v.value.name==="Mpesa & Cash"?(m(),S("div",pl,[s("div",_l,[e(A,{outlined:"",dense:"",class:"col-6",label:"Mpesa Amount",type:"number",min:"1",oninput:"validity.valid||(value='');",modelValue:z.value,"onUpdate:modelValue":t[6]||(t[6]=l=>z.value=l)},null,8,["modelValue"]),e(A,{outlined:"",dense:"",class:"col-6",label:"Cash Amount",type:"number",min:"1",oninput:"validity.valid||(value='');",modelValue:R.value,"onUpdate:modelValue":t[7]||(t[7]=l=>R.value=l)},null,8,["modelValue"])])])):q("",!0),v.value.name==="Debt"?(m(),S("div",vl,[e(ee,{outlined:"",clearable:"",dense:"",modelValue:x.value,"onUpdate:modelValue":t[8]||(t[8]=l=>x.value=l),"use-input":"","input-debounce":"0",label:"Select debtor",options:Y.value,"option-value":"uuid","option-label":"name",onFilter:pe,behavior:"menu",onOnchange:t[9]||(t[9]=l=>o.$emit("selectDebtor",me.value)),hint:"Type in debtor name to filter..."},{"no-option":a(()=>[e(U,null,{default:a(()=>[e(p,{class:"text-grey"},{default:a(()=>[e(g,{size:"sm",outline:"",label:"No results? CLick here to create new debtor.",to:"/debtors",color:"primary"})]),_:1})]),_:1})]),_:1},8,["modelValue","options"])])):q("",!0)]),_:1}),s("div",fl,[s("small",null,n(f.value),1)]),e(F,{align:"right"},{default:a(()=>[e(g,{flat:"",label:"Cancel",color:"red",onClick:Qe}),e(B),w.value&&v.value?(m(),k(g,{key:0,flat:"",label:"Sale",color:"primary",onClick:ge,loading:Q.value},null,8,["loading"])):q("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};export{Hl as default};
