import{p as F,n as d,o}from"./rtl.e511a87b.js";import{Q as R}from"./QSeparator.bbe62c08.js";import{Q as S,a as j}from"./QCard.5a208a74.js";import{r as f,aI as A,a5 as N,u as i,P as u,a3 as T,bb as a,b as le,d as e,a6 as t,ac as n,bD as te,bE as C,a4 as G}from"./index.36f77fb2.js";import{Q as D}from"./QInput.85c602ef.js";import{Q as se,a as oe,p as ue,d as H,c as ne}from"./paginations.06adb29c.js";import{Q as B}from"./QBadge.f9916324.js";import{Q as re}from"./QToolbar.9be620ba.js";import{e as ce,a as de}from"./excel.5d19a2ad.js";import{a as ie}from"./use-quasar.f16f224b.js";import{a as _e,u as me}from"./index.e11e7adc.js";import{u as fe}from"./account-store.98970118.js";import{u as pe}from"./auth-store.37fde601.js";import"./use-dark.96553d00.js";import"./module_calls.d8bb0b10.js";import"./helpers.58d4ed16.js";const J=[{name:"production_cost",required:!0,label:"Expense",align:"left",field:m=>m.production_cost,format:m=>`${m}`,sortable:!0},{name:"total_sales",required:!0,label:"Expected Sales",align:"left",field:m=>m.total_sales,format:m=>`${m}`,sortable:!0},{name:"expected_cash",align:"center",label:"Expected Cash",field:"expected_cash",sortable:!0},{name:"expected_mpesa",align:"center",label:"Expected Mpesa",field:"expected_mpesa",sortable:!0},{name:"actual_cash",align:"center",label:"Actual Cash",field:"actual_cash",sortable:!0},{name:"actual_mpesa",align:"center",label:"Actual Mpesa",field:"actual_mpesa",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0}];const be={class:"q-pa-md"},he={key:0},ve={key:1},ge=["onClick"],xe={style:{color:"white"}},ye={style:{color:"white"}},Ae={style:{color:"white"}},we=t("small",null,[t("i",null,"(Total Sales - Expenses)")],-1),Ce=t("br",null,null,-1),Qe=t("small",null,[t("i",null,"(Total Sales - Expense)")],-1),Ee={class:"text-center q-pt-sm"},qe={class:"text-h6"},Ve={style:{"text-align":"center"}},ke=t("i",null,"Expected Values",-1),Se=t("hr",null,null,-1),Ne={class:"text-center error_msg"},Je={__name:"Accounts",setup(m){const M=ie(),U=_e(),g=fe(),x=pe(),q=ue(10),p=f(!1),w=f(!1),V=f(""),Q=f(""),_=f(1),b=f(1),k=f(""),y=f(""),{data:$,isLoading:K,isError:I}=me("accounts",()=>g.fetchAccounts()),W=()=>{Q.value="Close Accounts for the day",p.value=!0,w.value=!1},X=r=>{w.value=!0,Q.value=`Edit Account ${r.created_at}`,k.value=r.uuid,p.value=!0},Y=async()=>{var l,c,P,L,O,z;y.value="";const r=[];(P=(c=(l=x==null?void 0:x.user)==null?void 0:l.user)==null?void 0:c.departments)==null||P.forEach(v=>r.push(v.name));const s=[];if((z=(O=(L=x==null?void 0:x.user)==null?void 0:L.user)==null?void 0:O.roles)==null||z.forEach(v=>s.push(v.name)),s.includes("Admin")||s.includes("Cashier")){const v={actual_cash:Number(_.value),actual_mpesa:Number(b.value),user_departments:r};if(v.actual_cash&&v.actual_mpesa){const E=await g.createAccount(v);E.status==="success"?(U.refetchQueries("accounts"),_.value="",b.value="",p.value=!1,h(E.message,"green","top")):(y.value=E.message,h(E.message,"red","top-right"))}else y.value="Name is required!",h("Name is required!","red","top-right")}else h("Permission denied! Only cashier or admin is allowed","red","top")},Z=async()=>{const r={account_uuid:k.value,actual_cash:_.value,actual_mpesa:b.value};if(r.actual_cash&&r.actual_mpesa){const s=await g.updateAccount(r);s.status==="success"?(U.refetchQueries("accounts"),_.value=1,b.value=1,p.value=!1,w.value=!1,Q.value="",h(s.message,"green","top")):h("There was an error","red","top-right")}else y.value="Name is required!",h("Name is required!","red","top-right")},ee=()=>{p.value=!1,_.value=1,b.value=1,k.value="",y.value=""},h=(r,s,l)=>{M.notify({message:r,color:s,position:l})},ae=r=>{const s=r.map(l=>({name:l.name,users:l.users.length,created_at:l.created_at}));ce(s,J,de,M,"AccountsData")};return(r,s)=>(A(),N("div",be,[i(K)?(A(),N("div",he,"Loading accounts...")):i(I)?(A(),N("div",ve,"An error has occurred: "+u(i(I)),1)):(A(),T(se,{key:2,title:"Accounts",rows:i($),columns:i(J),pagination:i(q),"onUpdate:pagination":s[2]||(s[2]=l=>le(q)?q.value=l:null),separator:"cell","row-key":"name",filter:V.value,dense:"",grid:""},{item:a(l=>[t("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 select_account",style:{cursor:"pointer"},onClick:c=>X(l.row)},[e(j,{bordered:"",style:{border:"1px solid orange"}},{default:a(()=>[e(S,null,{default:a(()=>[e(F,{dense:"",bordered:"",separator:""},{default:a(()=>[e(d,{class:"bg-primary text-white"},{default:a(()=>[e(o,null,{default:a(()=>[n(" Accounts closed on ")]),_:1}),e(o,{side:""},{default:a(()=>[t("b",xe,u(l.row.created_at),1)]),_:2},1024)]),_:2},1024),e(d,{class:"bg-blue text-white"},{default:a(()=>[e(o,null,{default:a(()=>[n(" Accounts closed by ")]),_:1}),e(o,{side:""},{default:a(()=>[t("b",ye,u(l.row.user),1)]),_:2},1024)]),_:2},1024),e(d,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Total Sales ")]),_:1}),e(o,{side:""},{default:a(()=>[t("b",null,u(l.row.total_sales),1)]),_:2},1024)]),_:2},1024),e(d,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Cash ")]),_:1}),e(o,{side:""},{default:a(()=>[t("b",null,u(l.row.expected_cash),1)]),_:2},1024)]),_:2},1024),e(d,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Mpesa ")]),_:1}),e(o,{side:""},{default:a(()=>[t("b",null,u(l.row.expected_mpesa),1)]),_:2},1024)]),_:2},1024),e(d,{class:"bg-orange text-white"},{default:a(()=>[e(o,null,{default:a(()=>[n(" Expenses ")]),_:1}),e(o,{side:""},{default:a(()=>[t("b",Ae,u(l.row.production_cost),1)]),_:2},1024)]),_:2},1024),e(d,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Profit "),we]),_:1}),e(o,{side:""},{default:a(()=>[t("b",null,u(l.row.expected_profit),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(R,{color:"primary"}),n(),Ce,e(R,{color:"orange"}),e(F,{dense:"",bordered:"",separator:""},{default:a(()=>[e(d,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Total Sales ")]),_:1}),e(o,{side:""},{default:a(()=>[t("b",null,u(l.row.actual_total_sales),1)]),_:2},1024)]),_:2},1024),e(d,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Cash ")]),_:1}),e(o,{side:""},{default:a(()=>[t("b",null,u(l.row.actual_cash),1)]),_:2},1024)]),_:2},1024),e(d,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Mpesa ")]),_:1}),e(o,{side:""},{default:a(()=>[t("b",null,u(l.row.actual_mpesa),1)]),_:2},1024)]),_:2},1024),e(d,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Profit "),Qe]),_:1}),e(o,{side:""},{default:a(()=>[t("b",null,u(l.row.actual_profit),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t("div",Ee,[t("small",null,[t("i",null,"Department: "+u(l.row.department),1)])])]),_:2},1024)]),_:2},1024)],8,ge)]),"top-right":a(()=>[e(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=l=>V.value=l),placeholder:"Search",class:"q-mr-md"},{append:a(()=>[e(te,{name:"search"})]),_:1},8,["modelValue"]),e(C,{onClick:W,round:"",dense:"",color:"primary",size:"small",icon:"add"}),e(C,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:s[1]||(s[1]=l=>ae(i($)))})]),_:1},8,["rows","columns","pagination","filter"])),e(oe,{modelValue:p.value,"onUpdate:modelValue":s[5]||(s[5]=l=>p.value=l),persistent:""},{default:a(()=>[e(j,{style:{width:"700px"}},{default:a(()=>[e(re,null,{default:a(()=>[t("div",qe,u(Q.value),1),e(H),t("small",Ve,[ke,Se,e(B,{class:"q-mr-xs"},{default:a(()=>{var l,c;return[n("Total: "+u((c=(l=i(g))==null?void 0:l.today_sales_data[0])==null?void 0:c.total_daily_sales),1)]}),_:1}),e(B,{class:"q-mr-xs"},{default:a(()=>{var l,c;return[n("Cash: "+u((c=(l=i(g))==null?void 0:l.today_sales_data[1])==null?void 0:c.total_daily_cash_sales),1)]}),_:1}),e(B,{class:"q-mr-xs"},{default:a(()=>{var l,c;return[n("Mpesa: "+u((c=(l=i(g))==null?void 0:l.today_sales_data[2])==null?void 0:c.total_daily_mpesa_sales),1)]}),_:1})])]),_:1}),e(S,{class:"q-pt-none"},{default:a(()=>[e(D,{outlined:"",dense:"",label:"Actual Cash",modelValue:_.value,"onUpdate:modelValue":s[3]||(s[3]=l=>_.value=l),type:"number"},null,8,["modelValue"])]),_:1}),e(S,{class:"q-pt-none"},{default:a(()=>[e(D,{outlined:"",dense:"",label:"Actual Mpesa",modelValue:b.value,"onUpdate:modelValue":s[4]||(s[4]=l=>b.value=l),type:"number"},null,8,["modelValue"])]),_:1}),t("div",Ne,[t("small",null,u(y.value),1)]),e(ne,{align:"right"},{default:a(()=>[e(C,{flat:"",label:"Cancel",color:"red",onClick:ee}),e(H),_.value&&!w.value?(A(),T(C,{key:0,flat:"",label:"Close Day",color:"primary",onClick:Y})):G("",!0),_.value&&w.value?(A(),T(C,{key:1,flat:"",label:"Edit Account",color:"primary",onClick:Z})):G("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Je as default};
