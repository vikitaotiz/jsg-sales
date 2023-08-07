import{bA as ll,r,c as de,w as Te,aB as Be,bV as De,bR as $e,bZ as tl,h as Ae,bg as al,g as sl,bB as ol,bW as nl,c8 as ul,j as il,aJ as u,a6 as q,u as k,Q as i,a4 as b,bb as s,d as t,bE as f,bD as qe,a7 as o,N as _e,ad as c,a5 as y,F as Me,aP as Oe,bd as fe,bw as Ne,aM as rl,aK as dl}from"./index.bda02627.js";import{Q as ve}from"./QBtnGroup.e8827e06.js";import{Q as te}from"./QInput.60a7c116.js";import{Q as cl,c as O,d as Ee}from"./QSpace.2a81c8da.js";import{t as ml,a as _l,u as fl,v as Ue,w as vl,b as bl,m as pl,d as gl,x as yl,y as hl,z as wl,e as kl,A as Cl,B as Ie,C as ql,c as Le,D as He,E as xl,o as be,l as ze,j as Fe,k as D,n as xe}from"./rtl.4f4d0aa8.js";import{a as pe,Q as ae}from"./QToolbar.6552fe9b.js";import{Q as ie}from"./QSeparator.3cda356c.js";import{b as F,Q as re}from"./QCard.bc957178.js";import{C as Re}from"./ClosePopup.31433069.js";import{a as Pl}from"./use-quasar.de87a5da.js";import{a as Sl,u as Pe,b as Vl}from"./index.fe2427df.js";import{u as Ql}from"./sale-store.478df43d.js";import{u as Tl}from"./product-store.b3f5d936.js";import{u as Bl}from"./payment-mode-store.275c3e84.js";import{u as Dl}from"./auth-store.fcb599cd.js";import{e as $l}from"./receipt.fe9b37f6.js";import{h as ge}from"./helpers.ee3820c2.js";import"./module_calls.39290f85.js";import"./_commonjsHelpers.6150b38b.js";var Se=ll({name:"QTooltip",inheritAttrs:!1,props:{...ml,..._l,...fl,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Ue},self:{type:String,default:"top middle",validator:Ue},offset:{type:Array,default:()=>[14,14],validator:vl},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...bl],setup(d,{slots:R,emit:N,attrs:E}){let j,W;const J=sl(),{proxy:{$q:m}}=J,K=r(null),U=r(!1),se=de(()=>He(d.anchor,m.lang.rtl)),I=de(()=>He(d.self,m.lang.rtl)),ye=de(()=>d.persistent!==!0),{registerTick:he,removeTick:Q}=pl(),{registerTimeout:_}=gl(),{transitionProps:Z,transitionStyle:L}=yl(d),{localScrollTarget:H,changeScrollEvent:Y,unconfigureScrollTarget:P}=hl(d,me),{anchorEl:p,canShow:oe,anchorEvents:$}=wl({showing:U,configureAnchorEl:ke}),{show:X,hide:C}=kl({showing:U,canShow:oe,handleShow:z,handleHide:A,hideOnRouteChange:ye,processOnMount:!0});Object.assign($,{delayShow:we,delayHide:ce});const{showPortal:v,hidePortal:h,renderPortal:S}=Cl(J,K,ne,"tooltip");if(m.platform.is.mobile===!0){const g={anchorEl:p,innerRef:K,onClickOutside(M){return C(M),M.target.classList.contains("q-dialog__backdrop")&&nl(M),!0}},ue=de(()=>d.modelValue===null&&d.persistent!==!0&&U.value===!0);Te(ue,M=>{(M===!0?xl:Ie)(g)}),Be(()=>{Ie(g)})}function z(g){v(),he(()=>{W=new MutationObserver(()=>T()),W.observe(K.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),T(),me()}),j===void 0&&(j=Te(()=>m.screen.width+"|"+m.screen.height+"|"+d.self+"|"+d.anchor+"|"+m.lang.rtl,T)),_(()=>{v(!0),N("show",g)},d.transitionDuration)}function A(g){Q(),h(),ee(),_(()=>{h(!0),N("hide",g)},d.transitionDuration)}function ee(){W!==void 0&&(W.disconnect(),W=void 0),j!==void 0&&(j(),j=void 0),P(),De($,"tooltipTemp")}function T(){ql({targetEl:K.value,offset:d.offset,anchorEl:p.value,anchorOrigin:se.value,selfOrigin:I.value,maxHeight:d.maxHeight,maxWidth:d.maxWidth})}function we(g){if(m.platform.is.mobile===!0){Le(),document.body.classList.add("non-selectable");const ue=p.value,M=["touchmove","touchcancel","touchend","click"].map(G=>[ue,G,"delayHide","passiveCapture"]);$e($,"tooltipTemp",M)}_(()=>{X(g)},d.delay)}function ce(g){m.platform.is.mobile===!0&&(De($,"tooltipTemp"),Le(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),_(()=>{C(g)},d.hideDelay)}function ke(){if(d.noParentEvent===!0||p.value===null)return;const g=m.platform.is.mobile===!0?[[p.value,"touchstart","delayShow","passive"]]:[[p.value,"mouseenter","delayShow","passive"],[p.value,"mouseleave","delayHide","passive"]];$e($,"anchor",g)}function me(){if(p.value!==null||d.scrollTarget!==void 0){H.value=tl(p.value,d.scrollTarget);const g=d.noParentEvent===!0?T:C;Y(H.value,g)}}function Ce(){return U.value===!0?Ae("div",{...E,ref:K,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",E.class],style:[E.style,L.value],role:"tooltip"},ol(R.default)):null}function ne(){return Ae(al,Z.value,Ce)}return Be(ee),Object.assign(J.proxy,{updatePosition:T}),S}});const x=d=>(rl("data-v-79458514"),d=d(),dl(),d),Al={class:"q-pa-md"},Ml={key:0},Ol={key:1},Nl={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},El={key:1,class:"text-center"},Ul={class:"text-center"},Il=x(()=>o("br",null,null,-1)),Ll=x(()=>o("br",null,null,-1)),Hl=x(()=>o("br",null,null,-1)),zl={key:0},Fl=x(()=>o("br",null,null,-1)),Rl={key:1},jl={key:2},Wl=x(()=>o("hr",null,null,-1)),Kl=x(()=>o("b",null,"Add Product",-1)),Yl={key:0},Gl=x(()=>o("br",null,null,-1)),Jl=x(()=>o("hr",null,null,-1)),Zl={class:"text-center error_msg"},Xl=x(()=>o("div",{class:"text-h6"},"Make Payment",-1)),et={class:"q-mt-sm"},lt={key:2,class:"q-pa-sm"},tt={class:"row q-col-gutter-sm"},at={key:3,class:"q-pa-sm"},st={class:"text-center error_msg"},ot={border:"1",style:{width:"100%","border-collapse":"collapse"}},nt=x(()=>o("tr",null,[o("th",{class:"text-center q-pa-sm"},"Amount Paid"),o("th",{class:"text-center q-pa-sm"},"Balance"),o("th",{class:"text-center q-pa-sm"},"Mode"),o("th",{class:"text-center q-pa-sm"},"Cleared By"),o("th",{class:"text-center q-pa-sm"},"Cleared On")],-1)),ut={class:"text-center q-pa-sm"},it={class:"text-center q-pa-sm"},rt={class:"text-center q-pa-sm"},dt={class:"text-center q-pa-sm"},ct={class:"text-center q-pa-sm"},mt=x(()=>o("div",{class:"text-center q-ma-sm"},[o("b",null,"Date Picker")],-1)),_t=["max"],ft=x(()=>o("br",null,null,-1)),vt={key:0},bt=["max"],pt={__name:"Bills",setup(d){const R=Sl(),N=Pl(),E=Dl(),j=r("2019/03/01"),W=r("2019/03/01"),J=new Date().toISOString().split("T")[0],m=il({from:"",to:""}),K=()=>{U.value=!0},U=r(!1),se=r(""),I=Ql(),ye=Tl(),he=Bl(),Q=r(!1),_=r(!1),Z=r(!1),L=r(""),H=r(!0),Y=r(!1),P=r(1),p=r(1),oe=r(1),$=r(1),X=r(""),C=r(""),v=r(""),h=r(""),S=r(""),z=r([]),A=r([]),ee=r("");N.loading.show({message:"Please Wait. Fetching today's bills",boxClass:"bg-primary text-white",spinnerColor:"white"});const T=r([]),{isLoading:we,isError:ce}=Pe("bills",()=>I.fetchBills(),{onSuccess:a=>{N.loading.hide(),ee.value=`(Today). ${a==null?void 0:a.length} Records`,A.value=a.map(l=>({user:l.user,uuid:l.uuid,bill_ref:l.bill_ref,debtor_name:l.debtor_name,total_debt_paid:l.total_debt_paid,debt_records:l.debt_records,status:l.status,payment_mode:l.payment_mode,selling_price:l.selling_price,actual_selling_price:l.actual_selling_price,created_at:l.created_at,sales:l.sales})),T.value=A.value}}),ke=()=>{j.value=W.value;const a={from:m.from,to:m.to};me(a),N.loading.show({message:`Please Wait. Fetching data between ${m.from} - ${m.to}`,boxClass:"bg-indigo text-white",spinnerColor:"white"})},{mutate:me}=Vl(a=>I.fetchBillsInDateRange(a),{onSuccess:a=>{var l,e;ee.value=`(From:${m.from} - To: ${m.to}). ${(l=a==null?void 0:a.data)==null?void 0:l.length} Records.`,N.loading.hide(),A.value=(e=a==null?void 0:a.data)==null?void 0:e.map(n=>({user:n.user,uuid:n.uuid,bill_ref:n.bill_ref,debtor_name:n.debtor_name,total_debt_paid:n.total_debt_paid,debt_records:n.debt_records,status:n.status,payment_mode:n.payment_mode,selling_price:n.selling_price,actual_selling_price:n.actual_selling_price,created_at:n.created_at,sales:n.sales})),T.value=A.value}});Pe("products",()=>ye.fetchProducts(),{onSuccess:a=>{z.value=a.map(l=>({uuid:l.uuid,name:l.name,price:l.selling_price,category:l.category,department:l.department,quantity:l.quantity}))}});const{data:Ce}=Pe("payment_modes",()=>he.fetchPaymentModes()),ne=r(z.value),g=a=>{C.value=a,Q.value=!0},ue=a=>{L.value=a,Z.value=!0},M=()=>{L.value="",Z.value=!1},G=de(()=>{let a=0;return C.value.sales.forEach(l=>{a+=l.selling_price*l.quantity}),a}),je=a=>{C.value=a,Y.value=!0},We=()=>{S.value="",Q.value=!1,v.value="",P.value=1,S.value=""},Ke=async()=>{if(_.value=!0,P.value>v.value.quantity)S.value=`${P.value} is more than the maximum available quantity`,B(`${P.value} is more than the maximum available quantity`,"red","top");else{const a=await I.addProductToBill({bill_uuid:C.value.uuid,uuid:v.value.uuid,name:v.value.name,selling_price:v.value.price,quantity:P.value,product_uuid:v.value.uuid});a.status=="success"?(R.refetchQueries("bills"),C.value="",Q.value=!1,_.value=!1,B(a.message,"green","top")):(_.value=!1,C.value="",Q.value=!1,B(a.message,"red","top"))}},Ye=()=>{Y.value=!1,h.value="",S.value=""},Ge=async a=>{if(_.value=!0,confirm("Are you sure?")){const e=await I.removeProductFromBill({product_uuid:a.uuid,product_name:a.name,quantity:a.quantity});e.status=="success"?(R.refetchQueries("bills"),_.value=!1,B(e.message,"green","top")):(C.value="",_.value=!1,Q.value=!1,B(e.message,"red","top"))}},Je=async a=>{if(_.value=!0,confirm("Are you sure?")){const e=await I.deleteBill({bill_uuid:a.uuid});e.status=="success"?(R.refetchQueries("bills"),_.value=!1,B(e.message,"green","top")):(_.value=!1,C.value="",Q.value=!1,B(e.message,"red","top"))}},Ze=async()=>{_.value=!0;let a=[];C.value.sales.forEach(e=>a.push({name:e.name,quantity:e.quantity,uuid:e.uuid}));const l={bill_uuid:C.value.uuid,products:a,payment_mode_uuid:h.value.uuid,bill_status:"sold",debtor_name:X.value.trim()};if(h.value.name==="Mpesa & Cash"){const e=Number(oe.value)+Number($.value);l.selling_price=e,l.actual_selling_price=e}else H.value?(l.selling_price=Number(G.value),l.actual_selling_price=Number(G.value)):(l.selling_price=Number(G.value),l.actual_selling_price=Number(p.value));if(l.actual_selling_price&&l.payment_mode_uuid)if(h.value.name==="Debt"&&!X.value)alert("Debtor name is required."),S.value="Debtor name is required.",_.value=!1;else{const e=await I.updateSaleOperation(l);e.status==="success"?(R.refetchQueries("bills"),h.value="",P.value="",Y.value=!1,_.value=!1,B(e.message,"green","top")):(S.value=e.message,B(e.message,"red","top-right"))}else _.value=!1,S.value="Name is required!",B("Name is required!","red","top-right")},Xe=(a,l)=>{a.length>0&&(z.value.includes(a)||z.value.push(a),l(a,"toggle"))},el=(a,l)=>{l(()=>{if(a==="")ne.value=z.value;else{const e=a.toLowerCase();ne.value=z.value.filter(n=>n.name.toLowerCase().indexOf(e)>-1)}})},Ve=a=>{const l=[];a.sales.forEach(n=>{l.push({name:n.name,quantity:n.quantity,price:n.selling_price,total:n.quantity*n.selling_price})});const e={title:"Sales Receipt",bill_ref:a.bill_ref,created_at:a.created_at,status:a.status==="sold"?"Sold":"Pending Payment",user:a.user,payment_mode:a.payment_mode,actual_selling_price:a.actual_selling_price,debtor_name:a.debtor_name};$l(l,["name","quantity","price","total"],e)},B=(a,l,e)=>{N.notify({message:a,color:l,position:e})};return(a,l)=>(u(),q("div",Al,[k(we)?(u(),q("div",Ml,"Loading bills...")):k(ce)?(u(),q("div",Ol,"An error has occurred: "+i(k(ce)),1)):(u(),b(cl,{key:2,grid:"",flat:"",bordered:"",title:`Sold/Pending Bills ${ee.value}`,rows:A.value,"row-key":"bill_ref",filter:se.value},{"top-right":s(()=>[t(ve,{class:"q-mr-sm q-mb-sm"},{default:s(()=>[t(f,{icon:"list",size:"sm",color:"primary",label:"All Bills",onClick:l[0]||(l[0]=()=>k(R).refetchQueries("bills"))}),t(f,{icon:"timeline",size:"sm",color:"blue",label:"Sold Bills",onClick:l[1]||(l[1]=e=>{var n;return A.value=(n=T.value)==null?void 0:n.filter(w=>w.status==="sold")})}),t(f,{icon:"pan_tool",size:"sm",color:"brown",label:"Pending Bills",onClick:l[2]||(l[2]=e=>{var n;return A.value=(n=T.value)==null?void 0:n.filter(w=>w.status==="pending")})}),t(f,{icon:"pan_tool",size:"sm",color:"orange",label:"Clear Bills",to:"/clear_bills"}),t(f,{icon:"event",size:"sm",color:"indigo",label:"Calendar (Older Bills)",onClick:l[3]||(l[3]=e=>K())})]),_:1}),t(te,{dense:"",debounce:"300",outlined:"",modelValue:se.value,"onUpdate:modelValue":l[4]||(l[4]=e=>se.value=e),placeholder:"Search"},{append:s(()=>[t(qe,{name:"search"})]),_:1},8,["modelValue"])]),item:s(e=>[o("div",Nl,[t(re,{bordered:"",class:_e(`${e.row.status=="pending"?"sale_pending":""}`)},{default:s(()=>[o("div",{class:_e(["text-center q-pa-xs",`${e.row.payment_mode==="Debt"?"debt_bill":"bill"}`])},[o("small",null,[o("strong",null,[t(qe,{name:"description",style:{"margin-bottom":"2px"}}),c(" BILL-"+i(e.row.bill_ref),1)])])],2),t(F,{style:{padding:"2px"}},{default:s(()=>[e.row.status==="pending"?(u(),b(pe,{key:0},{default:s(()=>[o("strong",null," Created by : "+i(e.row.user),1),t(O),t(ve,{flat:""},{default:s(()=>{var n,w,V;return[t(f,{outline:"",rounded:"",size:"sm",color:"blue",icon:"add",onClick:le=>g(e.row)},{default:s(()=>[t(Se,null,{default:s(()=>[c(" Add More Items to this bill. ")]),_:1})]),_:2},1032,["onClick"]),k(ge)((V=(w=(n=k(E))==null?void 0:n.user)==null?void 0:w.user)==null?void 0:V.roles)?(u(),b(f,{key:0,size:"sm",outline:"",rounded:"",color:"red",icon:"delete",onClick:le=>Je(e.row),loading:_.value},{default:s(()=>[t(Se,null,{default:s(()=>[c(" Delete this bill ")]),_:1})]),_:2},1032,["onClick","loading"])):y("",!0)]}),_:2},1024)]),_:2},1024)):(u(),q("div",El,[o("strong",null," Created by : "+i(e.row.user),1),t(O)])),t(ie,{class:"q-mb-sm"}),o("div",Ul,[o("small",null,"Created On : "+i(e.row.created_at),1),c(),Il,o("small",null,[e.row.payment_mode==="Debt"?(u(),b(ae,{key:0,color:"blue"},{default:s(()=>[c("Status : "+i(e.row.status)+" ",1),Ll,c(" Mode : "+i(e.row.payment_mode),1)]),_:2},1024)):(u(),b(ae,{key:1,color:`${e.row.status=="pending"?"red":""}`},{default:s(()=>[c("Status : "+i(e.row.status)+" ",1),Hl,c(" Mode : "+i(e.row.payment_mode),1)]),_:2},1032,["color"]))])]),t(ie,{class:"q-mb-sm"}),o("small",null,[t(ze,{dense:"",bordered:"",separator:"",class:_e(`${e.row.payment_mode==="Debt"?"debt_bill":"bill"}`)},{default:s(()=>[t(Fe,null,{default:s(()=>{var n,w,V;return[t(D,null,{default:s(()=>[c("Name")]),_:1}),t(D,null,{default:s(()=>[c("Price")]),_:1}),t(D,{style:{color:"white"}},{default:s(()=>[c("Quantity")]),_:1}),t(D,{style:{color:"white"}},{default:s(()=>[c("Total")]),_:1}),k(ge)((V=(w=(n=k(E))==null?void 0:n.user)==null?void 0:w.user)==null?void 0:V.roles)&&e.row.status==="pending"&&e.row.sales.length>1?(u(),b(D,{key:0},{default:s(()=>[c("Action")]),_:1})):y("",!0)]}),_:2},1024)]),_:2},1032,["class"])]),o("small",null,[t(ze,{dense:"",bordered:"",separator:""},{default:s(()=>[(u(!0),q(Me,null,Oe(e.row.sales,(n,w)=>(u(),b(Fe,{key:w},{default:s(()=>{var V,le,Qe;return[t(D,null,{default:s(()=>[c(i(n.name),1)]),_:2},1024),t(D,null,{default:s(()=>[c(i(n.selling_price),1)]),_:2},1024),t(D,null,{default:s(()=>[c(i(n.quantity),1)]),_:2},1024),t(D,null,{default:s(()=>[c(i((n.quantity*n.selling_price).toFixed(2)),1)]),_:2},1024),k(ge)((Qe=(le=(V=k(E))==null?void 0:V.user)==null?void 0:le.user)==null?void 0:Qe.roles)&&e.row.status==="pending"&&e.row.sales.length>1?(u(),b(D,{key:0},{default:s(()=>[t(qe,{name:"delete",size:"xs",color:"red",onClick:gt=>Ge(n),style:{cursor:"pointer"}},{default:s(()=>[t(Se,null,{default:s(()=>[c(" Return/Remove "+i(n.name)+" from this bill ",1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)):y("",!0)]}),_:2},1024))),128))]),_:2},1024)])]),_:2},1024),t(ie),e.row.selling_price>0?(u(),b(F,{key:0,class:"text-center"},{default:s(()=>{var n;return[e.row.payment_mode==="Debt"?(u(),q("p",zl,[c(" Debtor: "+i(e.row.debtor_name)+" ",1),Fl,o("b",null,"Amount due Ksh "+i(e.row.selling_price),1)])):(u(),q("b",Rl,"Price Ksh "+i(e.row.selling_price),1)),((n=e.row.debt_records)==null?void 0:n.length)>0?(u(),q("p",jl,[t(f,{flat:"",size:"sm",label:"Click to View Payment History",color:"orange",onClick:w=>ue(e.row)},null,8,["onClick"])])):y("",!0),Wl]}),_:2},1024)):y("",!0),t(F,{style:{padding:"0"}},{default:s(()=>[e.row.status==="sold"?(u(),b(f,{key:0,class:"full-width",dense:"",flat:"",onClick:n=>Ve(e.row),label:"Print Bill",icon:"print",color:`${e.row.payment_mode==="Debt"?"blue":"primary"}`},null,8,["onClick","color"])):(u(),b(ve,{key:1,class:"full-width"},{default:s(()=>{var n,w,V;return[t(f,{class:"full-width",dense:"",flat:"",onClick:le=>Ve(e.row),label:"Print Bill",icon:"print",color:"primary"},null,8,["onClick"]),k(ge)((V=(w=(n=k(E))==null?void 0:n.user)==null?void 0:w.user)==null?void 0:V.roles)?(u(),b(f,{key:0,dense:"",flat:"",push:"",color:"orange",class:"full-width",label:"Sale",icon:"grain",onClick:le=>je(e.row)},null,8,["onClick"])):y("",!0)]}),_:2},1024))]),_:2},1024)]),_:2},1032,["class"])])]),_:1},8,["title","rows","filter"])),t(be,{modelValue:Q.value,"onUpdate:modelValue":l[7]||(l[7]=e=>Q.value=e),persistent:""},{default:s(()=>[t(re,{style:{width:"500px"}},{default:s(()=>[t(F,null,{default:s(()=>[t(pe,null,{default:s(()=>[Kl,t(O),v.value?(u(),q("small",Yl,[t(ae,{class:"q-mr-sm",color:"blue"},{default:s(()=>[c("Price: "+i(v.value.price),1)]),_:1}),t(ae,{class:"q-mr-sm",color:"blue"},{default:s(()=>[c("Category: "+i(v.value.category),1)]),_:1}),t(ae,{class:"q-mr-sm",color:"blue"},{default:s(()=>[c("Current Qty: "+i(v.value.quantity),1)]),_:1}),Gl,t(ae,{class:"q-mr-sm",color:"blue"},{default:s(()=>[c("Department: "+i(v.value.department),1)]),_:1})])):y("",!0)]),_:1}),Jl,t(Ee,{dense:"","use-input":"",outlined:"",modelValue:v.value,"onUpdate:modelValue":l[5]||(l[5]=e=>v.value=e),"input-debounce":"0",onNewValue:Xe,options:ne.value,onFilter:el,"option-value":"uuid","option-label":"name",label:"Select Product to add",hint:"You can type in the product name for quick search..."},null,8,["modelValue","options"])]),_:1}),t(F,{class:"q-pt-none"},{default:s(()=>[v.value?(u(),b(te,{key:0,outlined:"",dense:"",label:"Product Quantity",modelValue:P.value,"onUpdate:modelValue":l[6]||(l[6]=e=>P.value=e),type:"number",hint:`Note : You can sale a maximum of ${v.value.quantity}`},null,8,["modelValue","hint"])):y("",!0)]),_:1}),o("div",Zl,[o("small",null,i(S.value),1)]),t(xe,{align:"right"},{default:s(()=>[t(f,{flat:"",label:"Cancel",color:"red",onClick:We}),t(O),P.value&&v.value?(u(),b(f,{key:0,flat:"",label:"Add Product",color:"primary",onClick:Ke,loading:_.value},null,8,["loading"])):y("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(be,{modelValue:Y.value,"onUpdate:modelValue":l[14]||(l[14]=e=>Y.value=e),persistent:""},{default:s(()=>[t(re,{style:{width:"500px"}},{default:s(()=>[t(pe,null,{default:s(()=>[Xl,t(O),o("small",et,[t(f,{disabled:h.value.name==="Mpesa & Cash",size:"sm",color:"blue",depressed:"",class:_e(`${H.value?"":"actual_selling_price"}`),onClick:l[8]||(l[8]=e=>H.value=!H.value),label:`Expected Selling Price : ${G.value}`},null,8,["disabled","class","label"])])]),_:1}),t(F,{class:"q-pt-none"},{default:s(()=>[!H.value&&h.value.name!=="Mpesa & Cash"?(u(),b(te,{key:0,autofocus:"",outlined:"",dense:"",label:"Actual Selling Price",modelValue:p.value,"onUpdate:modelValue":l[9]||(l[9]=e=>p.value=e),class:"q-pa-xs col-xs-12 col-sm-6 col-md-6 q-mb-sm",type:"number"},null,8,["modelValue"])):y("",!0),p.value&&p.value>0?(u(),b(Ee,{key:1,dense:"",outlined:"",modelValue:h.value,"onUpdate:modelValue":l[10]||(l[10]=e=>h.value=e),options:k(Ce).filter(e=>e.name!=="Debt"),"option-value":"uuid","option-label":"name",label:"Select Payment Mode"},null,8,["modelValue","options"])):y("",!0),h.value.name==="Mpesa & Cash"?(u(),q("div",lt,[o("div",tt,[t(te,{outlined:"",dense:"",class:"col-6",label:"Mpesa Amount",type:"number",modelValue:oe.value,"onUpdate:modelValue":l[11]||(l[11]=e=>oe.value=e)},null,8,["modelValue"]),t(te,{outlined:"",dense:"",class:"col-6",label:"Cash Amount",type:"number",modelValue:$.value,"onUpdate:modelValue":l[12]||(l[12]=e=>$.value=e)},null,8,["modelValue"])])])):y("",!0),h.value.name==="Debt"?(u(),q("div",at,[t(te,{outlined:"",modelValue:X.value,"onUpdate:modelValue":l[13]||(l[13]=e=>X.value=e),dense:"",label:"Debtor Name"},null,8,["modelValue"])])):y("",!0)]),_:1}),o("div",st,[o("small",null,i(S.value),1)]),t(xe,{align:"right"},{default:s(()=>[t(f,{flat:"",label:"Cancel",color:"red",onClick:Ye}),t(O),p.value&&h.value?(u(),b(f,{key:0,flat:"",label:"Sale",color:"primary",onClick:Ze,loading:_.value},null,8,["loading"])):y("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(be,{modelValue:Z.value,"onUpdate:modelValue":l[16]||(l[16]=e=>Z.value=e),persistent:""},{default:s(()=>[t(re,null,{default:s(()=>[t(pe,{class:"bg-orange text-white q-mb-sm"},{default:s(()=>[o("b",null,"Payment History for BILL-"+i(L.value.bill_ref)+". ",1),t(O),o("b",null,"Name: "+i(L.value.debtor_name)+". ",1)]),_:1}),t(F,{class:"q-pt-none"},{default:s(()=>[o("small",null,[o("table",ot,[nt,(u(!0),q(Me,null,Oe(L.value.debt_records,e=>(u(),q("tr",{key:e.uuid},[o("td",ut,i(e.amount_paid),1),o("td",it,i(e.balance),1),o("td",rt,i(e.payment_mode),1),o("td",dt,i(e.user),1),o("td",ct,i(e.created_at),1)]))),128))])])]),_:1}),t(xe,null,{default:s(()=>[t(f,{dense:"",flat:"",label:`Total Paid: ${L.value.total_debt_paid}`,color:"primary",disabled:""},null,8,["label"]),t(O),t(f,{dense:"",outline:"",label:"Close History",color:"primary",onClick:l[15]||(l[15]=e=>M())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(be,{modelValue:U.value,"onUpdate:modelValue":l[19]||(l[19]=e=>U.value=e),persistent:""},{default:s(()=>[t(re,{class:"bg-indigo text-white text-center q-pa-sm",style:{width:"210px"}},{default:s(()=>[mt,t(ie,{color:"white"}),t(F,null,{default:s(()=>[o("div",null,[c(" From : "),fe(o("input",{type:"date","onUpdate:modelValue":l[17]||(l[17]=e=>m.from=e),max:k(J)},null,8,_t),[[Ne,m.from]])]),ft,m.from?(u(),q("div",vt,[c(" To : "),fe(o("input",{type:"date","onUpdate:modelValue":l[18]||(l[18]=e=>m.to=e),max:k(J)},null,8,bt),[[Ne,m.to]])])):y("",!0)]),_:1}),t(ie,{color:"yellow"}),t(ve,{flat:"",class:"full-width"},{default:s(()=>[fe(t(f,{dense:"",label:"Cancel",color:"yellow",flat:""},null,512),[[Re]]),t(O),m.to?fe((u(),b(f,{key:0,dense:"",label:"Fetch Bills",color:"white",flat:"",onClick:ke},null,512)),[[Re]]):y("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};var Et=ul(pt,[["__scopeId","data-v-79458514"]]);export{Et as default};
