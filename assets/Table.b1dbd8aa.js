import{c1 as He,r as d,j as Ke,c as We,aJ as n,a6 as g,d as t,bb as s,u as y,Q as i,a4 as m,bE as c,a7 as o,bD as Z,N as ee,ad as r,a5 as b,F as ye,aP as ge,bd as le,bw as he,aM as je,aK as Ge}from"./index.f12d4c6e.js";import{Q as C}from"./QSpace.3ea65c84.js";import{Q as O}from"./QToolbar.430ed49e.js";import{Q as I,a as D,h as te}from"./helpers.0ee499c7.js";import{Q as U}from"./QInput.169897e0.js";import{Q as de}from"./QTooltip.f8483073.js";import{Q as ce}from"./QBtnGroup.97bd0735.js";import{Q as H}from"./QSeparator.4016704c.js";import{Q as F}from"./QBadge.0748bb05.js";import{b as we,Q as ke,a as P}from"./QList.3403280d.js";import{Q as Je,a as qe}from"./QTable.186e89f9.js";import{Q as me}from"./QCardActions.07abd612.js";import{Q as ae}from"./QDialog.2558a699.js";import{C as xe}from"./ClosePopup.c4a1c8c3.js";import{u as Xe}from"./use-quasar.918193c4.js";import{a as Ze,u as _e,b as el}from"./index.2fc80911.js";import{u as ll}from"./sale-store.f5b6f884.js";import{u as tl}from"./product-store.d817d338.js";import{u as al}from"./payment-mode-store.bfad984c.js";import{u as sl}from"./auth-store.eebeef52.js";import{e as ol}from"./receipt.bd902858.js";import{h as z}from"./moment.9709ab41.js";import"./use-dark.7993985a.js";import"./use-key-composition.db93ebf2.js";import"./uid.9b787859.js";import"./rtl.56b12b05.js";import"./module_calls.f56580bb.js";import"./_commonjsHelpers.6150b38b.js";const k=K=>(je("data-v-77765f59"),K=K(),Ge(),K),ul={class:"q-pa-md"},nl={key:0},il={key:1},rl={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},dl={key:1,class:"text-center"},cl={class:"text-center"},ml=k(()=>o("br",null,null,-1)),_l=k(()=>o("br",null,null,-1)),pl=k(()=>o("br",null,null,-1)),fl={key:0},bl=k(()=>o("br",null,null,-1)),vl={key:1},yl={key:2},gl=k(()=>o("hr",null,null,-1)),hl=k(()=>o("b",null,"Add Product",-1)),wl={key:0},kl=k(()=>o("br",null,null,-1)),ql=k(()=>o("hr",null,null,-1)),xl={class:"text-center error_msg"},Cl=k(()=>o("div",{class:"text-h6"},"Make Payment",-1)),Pl={class:"q-mt-sm"},Vl={key:2,class:"q-pa-sm"},Ql={class:"row q-col-gutter-sm"},Sl={key:3,class:"q-pa-sm"},Dl={class:"text-center error_msg"},$l={border:"1",style:{width:"100%","border-collapse":"collapse"}},Bl=k(()=>o("tr",null,[o("th",{class:"text-center q-pa-sm"},"Amount Paid"),o("th",{class:"text-center q-pa-sm"},"Balance"),o("th",{class:"text-center q-pa-sm"},"Mode"),o("th",{class:"text-center q-pa-sm"},"Cleared By"),o("th",{class:"text-center q-pa-sm"},"Cleared On")],-1)),Ml={class:"text-center q-pa-sm"},Nl={class:"text-center q-pa-sm"},Tl={class:"text-center q-pa-sm"},Al={class:"text-center q-pa-sm"},Il={class:"text-center q-pa-sm"},Ul={class:"text-center q-ma-sm"},Fl=["max"],zl=k(()=>o("br",null,null,-1)),Ll={key:0},Yl=["max"],Rl={__name:"Table",setup(K){const L=Ze(),Y=Xe(),W=sl(),Ce=d("2019/03/01"),Pe=d("2019/03/01"),pe=new Date().toISOString().split("T")[0],_=Ke({from:"",to:""}),Ve=()=>se.value=!0,se=d(!1),oe=d(""),B=ll(),Qe=tl(),Se=al(),S=d(!1),p=d(!1),j=d(!1),M=d(""),R=d(!0),E=d(!1),V=d(1),N=d(1),ue=d(1),ne=d(1),G=d(""),q=d(""),f=d(""),h=d(""),Q=d(""),T=d([]),$=d([]),ie=d("");Y.loading.show({message:"Please Wait. Fetching today's bills",boxClass:"bg-primary text-white",spinnerColor:"white"});const J=d([]),{isLoading:De,isError:fe}=_e("bills",()=>B.fetchBills(),{onSuccess:a=>{Y.loading.hide(),ie.value=`(Today). ${a==null?void 0:a.length} Records`,$.value=a.map(l=>({user:l.user,uuid:l.uuid,bill_ref:l.bill_ref,debtor_name:l.debtor_name,total_debt_paid:l.total_debt_paid,debt_records:l.debt_records,status:l.status,payment_mode:l.payment_mode,selling_price:l.selling_price,actual_selling_price:l.actual_selling_price,created_at:l.created_at,sales:l.sales})),J.value=$.value}}),$e=()=>{Ce.value=Pe.value;let a=z(_.from),l=z(_.to),e={};parseInt(a.diff(l,"seconds"))>=0?(e.from=_.from,e.to=_.to):(e.from=_.to,e.to=_.from),Be(e),Y.loading.show({message:`Please Wait. Fetching data between ${z(_.from).format("DD-MM-YY")} - ${z(_.to).format("DD-MM-YY")}`,boxClass:"bg-indigo text-white",spinnerColor:"white"})},{mutate:Be}=el(a=>B.fetchBillsInDateRange(a),{onSuccess:a=>{var l,e;ie.value=`(From: ${z(_.from).format("DD-MM-YY")} - To: ${z(_.to).format("DD-MM-YY")}). ${(l=a==null?void 0:a.data)==null?void 0:l.length} Records.`,Y.loading.hide(),$.value=(e=a==null?void 0:a.data)==null?void 0:e.map(u=>({user:u.user,uuid:u.uuid,bill_ref:u.bill_ref,debtor_name:u.debtor_name,total_debt_paid:u.total_debt_paid,debt_records:u.debt_records,status:u.status,payment_mode:u.payment_mode,selling_price:u.selling_price,actual_selling_price:u.actual_selling_price,created_at:u.created_at,sales:u.sales})),J.value=$.value}});_e("products",()=>Qe.fetchProducts(),{onSuccess:a=>{T.value=a.map(l=>({uuid:l.uuid,name:l.name,price:l.selling_price,category:l.category,department:l.department,quantity:l.quantity}))}});const{data:Me}=_e("payment_modes",()=>Se.fetchPaymentModes()),re=d(T.value),Ne=a=>{q.value=a,S.value=!0},Te=a=>{M.value=a,j.value=!0},Ae=()=>{M.value="",j.value=!1},X=We(()=>{let a=0;return q.value.sales.forEach(l=>{a+=l.selling_price*l.quantity}),a}),Ie=a=>{q.value=a,E.value=!0},Ue=()=>{Q.value="",S.value=!1,f.value="",V.value=1,Q.value=""},Fe=async()=>{if(p.value=!0,V.value>f.value.quantity)Q.value=`${V.value} is more than the maximum available quantity`,x(`${V.value} is more than the maximum available quantity`,"red","top");else{const a=await B.addProductToBill({bill_uuid:q.value.uuid,uuid:f.value.uuid,name:f.value.name,selling_price:f.value.price,quantity:V.value,product_uuid:f.value.uuid});a.status=="success"?(L.refetchQueries("bills"),q.value="",S.value=!1,p.value=!1,x(a.message,"green","top")):(p.value=!1,q.value="",S.value=!1,x(a.message,"red","top"))}},ze=()=>{E.value=!1,h.value="",Q.value=""},Le=async a=>{if(p.value=!0,confirm("Are you sure?")){const e=await B.removeProductFromBill({product_uuid:a.uuid,product_name:a.name,quantity:a.quantity});e.status=="success"?(L.refetchQueries("bills"),p.value=!1,x(e.message,"green","top")):(q.value="",p.value=!1,S.value=!1,x(e.message,"red","top"))}},Ye=async a=>{if(p.value=!0,confirm("Are you sure?")){const e=await B.deleteBill({bill_uuid:a.uuid});e.status=="success"?(L.refetchQueries("bills"),p.value=!1,x(e.message,"green","top")):(p.value=!1,q.value="",S.value=!1,x(e.message,"red","top"))}},Re=async()=>{p.value=!0;let a=[];q.value.sales.forEach(e=>a.push({name:e.name,quantity:e.quantity,uuid:e.uuid}));const l={bill_uuid:q.value.uuid,products:a,payment_mode_uuid:h.value.uuid,bill_status:"sold",debtor_name:G.value.trim()};if(h.value.name==="Mpesa & Cash"){const e=Number(ue.value)+Number(ne.value);l.selling_price=e,l.actual_selling_price=e}else R.value?(l.selling_price=Number(X.value),l.actual_selling_price=Number(X.value)):(l.selling_price=Number(X.value),l.actual_selling_price=Number(N.value));if(l.actual_selling_price&&l.payment_mode_uuid)if(h.value.name==="Debt"&&!G.value)alert("Debtor name is required."),Q.value="Debtor name is required.",p.value=!1;else{const e=await B.updateSaleOperation(l);e.status==="success"?(L.refetchQueries("bills"),h.value="",V.value="",E.value=!1,p.value=!1,x(e.message,"green","top")):(Q.value=e.message,x(e.message,"red","top-right"))}else p.value=!1,Q.value="Name is required!",x("Name is required!","red","top-right")},Ee=(a,l)=>{a.length>0&&(T.value.includes(a)||T.value.push(a),l(a,"toggle"))},Oe=(a,l)=>{l(()=>{if(a==="")re.value=T.value;else{const e=a.toLowerCase();re.value=T.value.filter(u=>u.name.toLowerCase().indexOf(e)>-1)}})},be=a=>{const l=[];a.sales.forEach(u=>{l.push({name:u.name,quantity:u.quantity,price:u.selling_price,total:u.quantity*u.selling_price})});const e={title:"Sales Receipt",bill_ref:a.bill_ref,created_at:a.created_at,status:a.status==="sold"?"Sold":"Pending Payment",user:a.user,payment_mode:a.payment_mode,actual_selling_price:a.actual_selling_price,debtor_name:a.debtor_name};ol(l,["name","quantity","price","total"],e)},x=(a,l,e)=>{Y.notify({message:a,color:l,position:e})};return(a,l)=>(n(),g("div",ul,[t(I,{dark:"",class:"bg-primary"},{default:s(()=>[t(O,null,{default:s(()=>[t(c,{dense:"",flat:"",icon:"arrow_back",label:"Back",onClick:l[0]||(l[0]=e=>a.$router.back())}),t(C),o("span",null,[t(c,{unelevated:"",class:"q-ma-xs",icon:"list",size:"sm",color:"green",label:"All Bills",onClick:l[1]||(l[1]=()=>y(L).refetchQueries("bills"))}),t(c,{unelevated:"",class:"q-ma-xs",icon:"timeline",size:"sm",color:"blue",label:"Sold Bills",onClick:l[2]||(l[2]=e=>{var u;return $.value=(u=J.value)==null?void 0:u.filter(v=>v.status==="sold")})}),t(c,{unelevated:"",class:"q-ma-xs",icon:"pan_tool",size:"sm",color:"brown",label:"Pending Bills",onClick:l[3]||(l[3]=e=>{var u;return $.value=(u=J.value)==null?void 0:u.filter(v=>v.status==="pending")})}),t(c,{unelevated:"",class:"q-ma-xs",icon:"pan_tool",size:"sm",color:"orange",label:"Clear Bills",to:"/clear_bills"}),t(c,{unelevated:"",class:"q-ma-xs",icon:"event",size:"sm",color:"indigo",label:"Calendar (Older Bills)",onClick:l[4]||(l[4]=e=>Ve())})])]),_:1})]),_:1}),y(De)?(n(),g("div",nl,"Loading bills...")):y(fe)?(n(),g("div",il,"An error has occurred: "+i(y(fe)),1)):(n(),m(Je,{key:2,grid:"",flat:"",bordered:"",title:`Sold/Pending Bills ${ie.value}`,rows:$.value,"row-key":"bill_ref",filter:oe.value},{"top-right":s(()=>[t(U,{dense:"",debounce:"300",outlined:"",modelValue:oe.value,"onUpdate:modelValue":l[5]||(l[5]=e=>oe.value=e),placeholder:"Search bill number"},{append:s(()=>[t(Z,{name:"search"})]),_:1},8,["modelValue"])]),item:s(e=>[o("div",rl,[t(I,{bordered:"",class:ee(`${e.row.status=="pending"?"sale_pending":""}`),style:{"border-radius":"8px"}},{default:s(()=>[o("div",{class:ee(["text-center q-pa-xs",`${e.row.payment_mode==="Debt"?"debt_bill":"bill"}`])},[o("small",null,[o("strong",null,[t(Z,{name:"description",style:{"margin-bottom":"2px"}}),r(" BILL-"+i(e.row.bill_ref),1)])])],2),t(D,{style:{padding:"2px"}},{default:s(()=>[e.row.status==="pending"?(n(),m(O,{key:0},{default:s(()=>[o("strong",null," Created by : "+i(e.row.user),1),t(C),t(ce,{flat:""},{default:s(()=>{var u,v,w;return[t(c,{outline:"",rounded:"",size:"sm",color:"blue",icon:"add",onClick:A=>Ne(e.row)},{default:s(()=>[t(de,null,{default:s(()=>[r(" Add More Items to this bill. ")]),_:1})]),_:2},1032,["onClick"]),y(te)((w=(v=(u=y(W))==null?void 0:u.user)==null?void 0:v.user)==null?void 0:w.roles)?(n(),m(c,{key:0,size:"sm",outline:"",rounded:"",color:"red",icon:"delete",onClick:A=>Ye(e.row),loading:p.value},{default:s(()=>[t(de,null,{default:s(()=>[r(" Delete this bill ")]),_:1})]),_:2},1032,["onClick","loading"])):b("",!0)]}),_:2},1024)]),_:2},1024)):(n(),g("div",dl,[o("strong",null," Created by : "+i(e.row.user),1),t(C)])),t(H,{class:"q-mb-sm"}),o("div",cl,[o("small",null,"Created On : "+i(e.row.created_at),1),r(),ml,o("small",null,[e.row.payment_mode==="Debt"?(n(),m(F,{key:0,color:"blue"},{default:s(()=>[r("Status : "+i(e.row.status)+" ",1),_l,r(" Mode : "+i(e.row.payment_mode),1)]),_:2},1024)):(n(),m(F,{key:1,color:`${e.row.status=="pending"?"red":""}`},{default:s(()=>[r("Status : "+i(e.row.status)+" ",1),pl,r(" Mode : "+i(e.row.payment_mode),1)]),_:2},1032,["color"]))])]),t(H,{class:"q-mb-sm"}),o("small",null,[t(we,{dense:"",bordered:"",separator:"",class:ee(`${e.row.payment_mode==="Debt"?"debt_bill":"bill"}`)},{default:s(()=>[t(ke,null,{default:s(()=>{var u,v,w;return[t(P,null,{default:s(()=>[r("Name")]),_:1}),t(P,null,{default:s(()=>[r("Price")]),_:1}),t(P,{style:{color:"white"}},{default:s(()=>[r("Quantity")]),_:1}),t(P,{style:{color:"white"}},{default:s(()=>[r("Total")]),_:1}),y(te)((w=(v=(u=y(W))==null?void 0:u.user)==null?void 0:v.user)==null?void 0:w.roles)&&e.row.status==="pending"&&e.row.sales.length>1?(n(),m(P,{key:0},{default:s(()=>[r("Action")]),_:1})):b("",!0)]}),_:2},1024)]),_:2},1032,["class"])]),o("small",null,[t(we,{dense:"",bordered:"",separator:""},{default:s(()=>[(n(!0),g(ye,null,ge(e.row.sales,(u,v)=>(n(),m(ke,{key:v},{default:s(()=>{var w,A,ve;return[t(P,null,{default:s(()=>[r(i(u.name),1)]),_:2},1024),t(P,null,{default:s(()=>[r(i(u.selling_price),1)]),_:2},1024),t(P,null,{default:s(()=>[r(i(u.quantity),1)]),_:2},1024),t(P,null,{default:s(()=>[r(i((u.quantity*u.selling_price).toFixed(2)),1)]),_:2},1024),y(te)((ve=(A=(w=y(W))==null?void 0:w.user)==null?void 0:A.user)==null?void 0:ve.roles)&&e.row.status==="pending"&&e.row.sales.length>1?(n(),m(P,{key:0},{default:s(()=>[t(Z,{name:"delete",size:"xs",color:"red",onClick:El=>Le(u),style:{cursor:"pointer"}},{default:s(()=>[t(de,null,{default:s(()=>[r(" Return/Remove "+i(u.name)+" from this bill ",1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)):b("",!0)]}),_:2},1024))),128))]),_:2},1024)])]),_:2},1024),t(H),e.row.selling_price>0?(n(),m(D,{key:0,class:"text-center"},{default:s(()=>{var u;return[e.row.payment_mode==="Debt"?(n(),g("p",fl,[r(" Debtor: "+i(e.row.debtor_name)+" ",1),bl,o("b",null,"Amount due Ksh "+i(e.row.selling_price),1)])):(n(),g("b",vl,"Price Ksh "+i(e.row.selling_price),1)),((u=e.row.debt_records)==null?void 0:u.length)>0?(n(),g("p",yl,[t(c,{flat:"",size:"sm",label:"Click to View Payment History",color:"orange",onClick:v=>Te(e.row)},null,8,["onClick"])])):b("",!0),gl]}),_:2},1024)):b("",!0),t(D,{style:{padding:"0"}},{default:s(()=>[e.row.status==="sold"?(n(),m(c,{key:0,class:"full-width",dense:"",flat:"",onClick:u=>be(e.row),label:"Print Bill",icon:"print",color:`${e.row.payment_mode==="Debt"?"blue":"primary"}`},null,8,["onClick","color"])):(n(),m(ce,{key:1,class:"full-width"},{default:s(()=>{var u,v,w;return[t(c,{class:"full-width",dense:"",flat:"",onClick:A=>be(e.row),label:"Print Bill",icon:"print",color:"primary"},null,8,["onClick"]),y(te)((w=(v=(u=y(W))==null?void 0:u.user)==null?void 0:v.user)==null?void 0:w.roles)?(n(),m(c,{key:0,dense:"",flat:"",push:"",color:"orange",class:"full-width",label:"Sale",icon:"grain",onClick:A=>Ie(e.row)},null,8,["onClick"])):b("",!0)]}),_:2},1024))]),_:2},1024)]),_:2},1032,["class"])])]),_:1},8,["title","rows","filter"])),t(ae,{modelValue:S.value,"onUpdate:modelValue":l[8]||(l[8]=e=>S.value=e),persistent:""},{default:s(()=>[t(I,{style:{width:"500px"}},{default:s(()=>[t(D,null,{default:s(()=>[t(O,null,{default:s(()=>[hl,t(C),f.value?(n(),g("small",wl,[t(F,{class:"q-mr-sm",color:"blue"},{default:s(()=>[r("Price: "+i(f.value.price),1)]),_:1}),t(F,{class:"q-mr-sm",color:"blue"},{default:s(()=>[r("Category: "+i(f.value.category),1)]),_:1}),t(F,{class:"q-mr-sm",color:"blue"},{default:s(()=>[r("Current Qty: "+i(f.value.quantity),1)]),_:1}),kl,t(F,{class:"q-mr-sm",color:"blue"},{default:s(()=>[r("Department: "+i(f.value.department),1)]),_:1})])):b("",!0)]),_:1}),ql,t(qe,{dense:"","use-input":"",outlined:"",modelValue:f.value,"onUpdate:modelValue":l[6]||(l[6]=e=>f.value=e),"input-debounce":"0",onNewValue:Ee,options:re.value,onFilter:Oe,"option-value":"uuid","option-label":"name",label:"Select Product to add",hint:"You can type in the product name for quick search..."},null,8,["modelValue","options"])]),_:1}),t(D,{class:"q-pt-none"},{default:s(()=>[f.value?(n(),m(U,{key:0,outlined:"",dense:"",label:"Product Quantity",modelValue:V.value,"onUpdate:modelValue":l[7]||(l[7]=e=>V.value=e),type:"number",min:"1",oninput:"validity.valid||(value='');",hint:`Note : You can sale a maximum of ${f.value.quantity}`},null,8,["modelValue","hint"])):b("",!0)]),_:1}),o("div",xl,[o("small",null,i(Q.value),1)]),t(me,{align:"right"},{default:s(()=>[t(c,{flat:"",label:"Cancel",color:"red",onClick:Ue}),t(C),V.value&&f.value?(n(),m(c,{key:0,flat:"",label:"Add Product",color:"primary",onClick:Fe,loading:p.value},null,8,["loading"])):b("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(ae,{modelValue:E.value,"onUpdate:modelValue":l[15]||(l[15]=e=>E.value=e),persistent:""},{default:s(()=>[t(I,{style:{width:"500px"}},{default:s(()=>[t(O,null,{default:s(()=>[Cl,t(C),o("small",Pl,[t(c,{disabled:h.value.name==="Mpesa & Cash",size:"sm",color:"blue",depressed:"",class:ee(`${R.value?"":"actual_selling_price"}`),onClick:l[9]||(l[9]=e=>R.value=!R.value),label:`Expected Selling Price : ${X.value}`},null,8,["disabled","class","label"])])]),_:1}),t(D,{class:"q-pt-none"},{default:s(()=>[!R.value&&h.value.name!=="Mpesa & Cash"?(n(),m(U,{key:0,autofocus:"",outlined:"",dense:"",label:"Actual Selling Price",modelValue:N.value,"onUpdate:modelValue":l[10]||(l[10]=e=>N.value=e),class:"q-pa-xs col-xs-12 col-sm-6 col-md-6 q-mb-sm",type:"number",min:"1",oninput:"validity.valid||(value='');"},null,8,["modelValue"])):b("",!0),N.value&&N.value>0?(n(),m(qe,{key:1,dense:"",outlined:"",modelValue:h.value,"onUpdate:modelValue":l[11]||(l[11]=e=>h.value=e),options:y(Me).filter(e=>e.name!=="Debt"),"option-value":"uuid","option-label":"name",label:"Select Payment Mode"},null,8,["modelValue","options"])):b("",!0),h.value.name==="Mpesa & Cash"?(n(),g("div",Vl,[o("div",Ql,[t(U,{outlined:"",dense:"",class:"col-6",label:"Mpesa Amount",type:"number",min:"1",oninput:"validity.valid||(value='');",modelValue:ue.value,"onUpdate:modelValue":l[12]||(l[12]=e=>ue.value=e)},null,8,["modelValue"]),t(U,{outlined:"",dense:"",class:"col-6",label:"Cash Amount",type:"number",min:"1",oninput:"validity.valid||(value='');",modelValue:ne.value,"onUpdate:modelValue":l[13]||(l[13]=e=>ne.value=e)},null,8,["modelValue"])])])):b("",!0),h.value.name==="Debt"?(n(),g("div",Sl,[t(U,{outlined:"",modelValue:G.value,"onUpdate:modelValue":l[14]||(l[14]=e=>G.value=e),dense:"",label:"Debtor Name"},null,8,["modelValue"])])):b("",!0)]),_:1}),o("div",Dl,[o("small",null,i(Q.value),1)]),t(me,{align:"right"},{default:s(()=>[t(c,{flat:"",label:"Cancel",color:"red",onClick:ze}),t(C),N.value&&h.value?(n(),m(c,{key:0,flat:"",label:"Sale",color:"primary",onClick:Re,loading:p.value},null,8,["loading"])):b("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(ae,{modelValue:j.value,"onUpdate:modelValue":l[17]||(l[17]=e=>j.value=e),persistent:""},{default:s(()=>[t(I,null,{default:s(()=>[t(O,{class:"bg-orange text-white q-mb-sm"},{default:s(()=>[o("b",null,"Payment History for BILL-"+i(M.value.bill_ref)+". ",1),t(C),o("b",null,"Name: "+i(M.value.debtor_name)+". ",1)]),_:1}),t(D,{class:"q-pt-none"},{default:s(()=>[o("small",null,[o("table",$l,[Bl,(n(!0),g(ye,null,ge(M.value.debt_records,e=>(n(),g("tr",{key:e.uuid},[o("td",Ml,i(e.amount_paid),1),o("td",Nl,i(e.balance),1),o("td",Tl,i(e.payment_mode),1),o("td",Al,i(e.user),1),o("td",Il,i(e.created_at),1)]))),128))])])]),_:1}),t(me,null,{default:s(()=>[t(c,{dense:"",flat:"",label:`Total Paid: ${M.value.total_debt_paid}`,color:"primary",disabled:""},null,8,["label"]),t(C),t(c,{dense:"",outline:"",label:"Close History",color:"primary",onClick:l[16]||(l[16]=e=>Ae())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(ae,{modelValue:se.value,"onUpdate:modelValue":l[20]||(l[20]=e=>se.value=e),persistent:""},{default:s(()=>[t(I,{class:"bg-indigo text-white text-center q-pa-sm",style:{width:"300px"}},{default:s(()=>[o("div",Ul,[o("b",null,[t(Z,{name:"events"}),r(" Date Picker")])]),t(H,{color:"white"}),t(D,null,{default:s(()=>[o("div",null,[r(" From : "),le(o("input",{type:"date","onUpdate:modelValue":l[18]||(l[18]=e=>_.from=e),max:y(pe)},null,8,Fl),[[he,_.from]])]),zl,_.from?(n(),g("div",Ll,[r(" To : "),le(o("input",{type:"date","onUpdate:modelValue":l[19]||(l[19]=e=>_.to=e),max:y(pe)},null,8,Yl),[[he,_.to]])])):b("",!0)]),_:1}),t(H,{color:"yellow"}),t(ce,{flat:"",class:"full-width"},{default:s(()=>[le(t(c,{dense:"",label:"Cancel",color:"yellow",flat:""},null,512),[[xe]]),t(C),_.to?le((n(),m(c,{key:0,dense:"",label:"Fetch Bills",color:"white",flat:"",onClick:$e},null,512)),[[xe]]):b("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};var gt=He(Rl,[["__scopeId","data-v-77765f59"]]);export{gt as default};
