import{p as F,n as m,o}from"./rtl.9d4e1235.js";import{Q as R}from"./QSeparator.8ac7ae0f.js";import{a as q,Q as E}from"./QCard.4a84081b.js";import{j as oe,r as p,aQ as de,aI as x,a5 as Q,a6 as s,d as e,bb as a,ac as n,P as d,M as ne,u as i,a3 as B,b as ue,bD as ce,bE as V,a4 as G}from"./index.e2e1918c.js";import{Q as U}from"./QInput.feb63eba.js";import{Q as re,c as ie,p as _e,d as H,f as me}from"./paginations.2ebbf283.js";import{a as fe,Q as w}from"./QBadge.46e61816.js";import{e as pe,a as he}from"./excel.5d19a2ad.js";import{a as xe}from"./use-quasar.058ce1b9.js";import{a as be,u as J}from"./index.db2df67e.js";import{u as ve}from"./account-store.b0d455aa.js";import{u as ye}from"./auth-store.4d03f525.js";import{g as K}from"./get-css-var.23548d6a.js";import"./use-dark.793ae17e.js";import"./module_calls.c637478d.js";import"./helpers.d60dad50.js";const W=[{name:"production_cost",required:!0,label:"Expense",align:"left",field:c=>c.production_cost,format:c=>`${c}`,sortable:!0},{name:"total_sales",required:!0,label:"Expected Sales",align:"left",field:c=>c.total_sales,format:c=>`${c}`,sortable:!0},{name:"expected_cash",align:"center",label:"Expected Cash",field:"expected_cash",sortable:!0},{name:"expected_mpesa",align:"center",label:"Expected Mpesa",field:"expected_mpesa",sortable:!0},{name:"actual_cash",align:"center",label:"Actual Cash",field:"actual_cash",sortable:!0},{name:"actual_mpesa",align:"center",label:"Actual Mpesa",field:"actual_mpesa",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0}],ge={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},we={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},qe={class:"row q-pa-sm"},Ae={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},Ce=s("hr",null,null,-1),Ee={class:"q-ma-sm"},Qe={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},$e=s("hr",null,null,-1),ke={class:"q-ma-sm"},Se={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},Ve={key:0},Te={key:1},Ne=s("hr",null,null,-1),De={class:"q-ma-sm"},Me={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},Be={__name:"AccountsBarCharts",props:["account_store"],setup(c){const T=oe({title:{text:"Sales vs Expense",align:"left"},chart:{id:"apex-donut"},colors:[K("primary"),K("dark")],markers:{size:5,hover:{sizeOffset:2}},xaxis:{categories:["Sales","Expenses"]}}),N=p([]);return(t,v)=>{const $=de("apexchart");return x(),Q("div",ge,[s("div",we,[e(q,null,{default:a(()=>{var h,b;return[s("div",qe,[s("div",Ae,[e(q,{dark:"",class:"bg-primary"},{default:a(()=>[e(E,{class:"text-center"},{default:a(()=>{var r;return[n(" Total Sales "),Ce,s("h5",Ee,d((r=c.account_store)==null?void 0:r.total_daily_sales),1)]}),_:1})]),_:1})]),s("div",Qe,[e(q,{dark:"",class:"bg-orange"},{default:a(()=>[e(E,{class:"text-center"},{default:a(()=>{var r;return[n(" Total Expense "),$e,s("h5",ke,d((r=c.account_store)==null?void 0:r.total_daily_expense),1)]}),_:1})]),_:1})]),s("div",Se,[e(q,{dark:"",class:ne(`${c.account_store&&((h=c.account_store)==null?void 0:h.total_daily_sales)-((b=c.account_store)==null?void 0:b.total_daily_expense)>0?"bg-blue":"bg-red"}`)},{default:a(()=>[e(E,{class:"text-center"},{default:a(()=>{var r,A,y,f;return[c.account_store&&((r=c.account_store)==null?void 0:r.total_daily_sales)-((A=c.account_store)==null?void 0:A.total_daily_expense)>0?(x(),Q("span",Ve," Profit ")):(x(),Q("span",Te,"Loss")),Ne,s("h5",De,d(((y=c.account_store)==null?void 0:y.total_daily_sales)-((f=c.account_store)==null?void 0:f.total_daily_expense)),1)]}),_:1})]),_:1},8,["class"])])])]}),_:1})]),s("div",Me,[e(q,{class:"q-mb-sm"},{default:a(()=>[e($,{height:"250",type:"donut",options:T,series:N.value},null,8,["options","series"])]),_:1})])])}}};const Ue={class:"q-pa-md"},Ie={key:0},Pe={key:1},ze=["onClick"],Le={style:{color:"white"}},Oe={style:{color:"white"}},je={style:{color:"white"}},Fe=s("small",null,[s("i",null,"(Total Sales - Expenses)")],-1),Re=s("br",null,null,-1),Ge=s("small",null,[s("i",null,"(Total Sales - Expense)")],-1),He={class:"text-center q-pt-sm"},Je={class:"text-h6"},Ke={style:{"text-align":"center"}},We=s("i",null,"Expected Values",-1),Xe=s("hr",null,null,-1),Ye=s("br",null,null,-1),Ze=s("br",null,null,-1),ea={class:"text-center error_msg"},xa={__name:"Accounts",setup(c){const T=xe(),N=be(),t=ve(),v=ye(),$=_e(10),h=p(!1),b=p(!1),r=p(!1),A=p(""),y=p(""),f=p(1),C=p(1),D=p(""),k=p(""),{data:I,isLoading:X,isError:P}=J("accounts",()=>t.fetchAccounts());J("account_stats_today",()=>t.fetchTodaySalesStats());const Y=()=>{y.value="Close Accounts for the day",h.value=!0,b.value=!1},Z=_=>{b.value=!0,y.value=`Edit Account for ${_.created_at}`,D.value=_.uuid,h.value=!0},ee=async()=>{var l,M,z,L,O,j;r.value=!0,k.value="";const _=[];(z=(M=(l=v==null?void 0:v.user)==null?void 0:l.user)==null?void 0:M.departments)==null||z.forEach(g=>_.push(g.name));const u=[];if((j=(O=(L=v==null?void 0:v.user)==null?void 0:L.user)==null?void 0:O.roles)==null||j.forEach(g=>u.push(g.name)),u.includes("Admin")||u.includes("Cashier")){const g={actual_cash:Number(f.value),actual_mpesa:Number(C.value),expected_cash:t==null?void 0:t.total_daily_cash_sales,expected_mpesa:t==null?void 0:t.total_daily_mpesa_sales,expected_mpesa_cash:t==null?void 0:t.total_daily_mpesa_cash_sales,expected_card:t==null?void 0:t.total_daily_card_sales,expected_debt:t==null?void 0:t.total_daily_debt_sales,user_departments:_,total_sales:t==null?void 0:t.total_daily_sales,total_expense:t==null?void 0:t.total_daily_expense};if(g.actual_cash&&g.actual_mpesa){const se=await t.createAccount(g);console.log(se)}else k.value="Name is required!",S("Name is required!","red","top-right"),r.value=!1}else S("Permission denied! Only cashier or admin is allowed","red","top")},ae=async()=>{r.value=!0;const _={account_uuid:D.value,actual_cash:f.value,actual_mpesa:C.value,expected_cash:t==null?void 0:t.total_daily_cash_sales,expected_mpesa:t==null?void 0:t.total_daily_mpesa_sales,total_sales:t==null?void 0:t.total_daily_sales,total_expense:t==null?void 0:t.total_daily_expense};if(_.actual_cash&&_.actual_mpesa){const u=await t.updateAccount(_);u.status==="success"?(N.refetchQueries("accounts"),f.value=1,C.value=1,h.value=!1,b.value=!1,y.value="",S(u.message,"green","top"),r.value=!1):(r.value=!1,S("There was an error","red","top-right"))}else k.value="Name is required!",S("Name is required!","red","top-right"),r.value=!1},le=()=>{h.value=!1,f.value=1,C.value=1,D.value="",k.value=""},S=(_,u,l)=>{T.notify({message:_,color:u,position:l})},te=_=>{const u=_.map(l=>({name:l.name,users:l.users.length,created_at:l.created_at}));pe(u,W,he,T,"AccountsData")};return(_,u)=>(x(),Q("div",Ue,[e(Be,{account_store:i(t)},null,8,["account_store"]),i(X)?(x(),Q("div",Ie,"Loading accounts...")):i(P)?(x(),Q("div",Pe,"An error has occurred: "+d(i(P)),1)):(x(),B(re,{key:2,title:"Accounts",rows:i(I),columns:i(W),pagination:i($),"onUpdate:pagination":u[2]||(u[2]=l=>ue($)?$.value=l:null),separator:"cell","row-key":"name",filter:A.value,dense:"",grid:""},{item:a(l=>[s("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 select_account",style:{cursor:"pointer"},onClick:M=>Z(l.row)},[e(q,{bordered:"",ripple:"",style:{border:"1px solid orange"}},{default:a(()=>[e(E,null,{default:a(()=>[e(F,{dense:"",bordered:"",separator:""},{default:a(()=>[e(m,{class:"bg-primary text-white"},{default:a(()=>[e(o,null,{default:a(()=>[n(" Accounts closed on ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",Le,d(l.row.created_at),1)]),_:2},1024)]),_:2},1024),e(m,{class:"bg-blue text-white"},{default:a(()=>[e(o,null,{default:a(()=>[n(" Accounts closed by ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",Oe,d(l.row.user),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Total Sales ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.total_sales),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Cash ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_cash),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Mpesa ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_mpesa),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Mpesa $ Cash")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_mpesa_cash),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Card")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_card),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Debt")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_debt),1)]),_:2},1024)]),_:2},1024),e(m,{class:"bg-orange text-white"},{default:a(()=>[e(o,null,{default:a(()=>[n(" Expenses ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",je,d(l.row.production_cost),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Profit "),Fe]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_profit),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(R,{color:"primary"}),n(),Re,e(R,{color:"orange"}),e(F,{dense:"",bordered:"",separator:""},{default:a(()=>[e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Total Sales ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_total_sales),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Cash ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_cash),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Mpesa ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_mpesa),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Profit "),Ge]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_profit),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),s("div",He,[s("small",null,[s("i",null,"Department: "+d(l.row.department),1)])])]),_:2},1024)]),_:2},1024)],8,ze)]),"top-right":a(()=>[e(U,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:A.value,"onUpdate:modelValue":u[0]||(u[0]=l=>A.value=l),placeholder:"Search",class:"q-mr-md"},{append:a(()=>[e(ce,{name:"search"})]),_:1},8,["modelValue"]),e(V,{onClick:Y,round:"",dense:"",color:"primary",size:"small",icon:"add"}),e(V,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:u[1]||(u[1]=l=>te(i(I)))})]),_:1},8,["rows","columns","pagination","filter"])),e(ie,{modelValue:h.value,"onUpdate:modelValue":u[5]||(u[5]=l=>h.value=l),persistent:""},{default:a(()=>[e(q,{style:{width:"700px"}},{default:a(()=>[e(fe,null,{default:a(()=>[s("div",Je,d(y.value),1),e(H),s("small",Ke,[We,Xe,e(w,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Total: "+d((l=i(t))==null?void 0:l.total_daily_sales),1)]}),_:1}),e(w,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Cash: "+d((l=i(t))==null?void 0:l.total_daily_cash_sales),1)]}),_:1}),e(w,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Mpesa: "+d((l=i(t))==null?void 0:l.total_daily_mpesa_sales),1)]}),_:1}),Ye,e(w,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Mpesa & Cash: "+d((l=i(t))==null?void 0:l.total_daily_mpesa_cash_sales),1)]}),_:1}),e(w,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Card: "+d((l=i(t))==null?void 0:l.total_daily_card_sales),1)]}),_:1}),e(w,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Debt: "+d((l=i(t))==null?void 0:l.total_daily_debt_sales),1)]}),_:1}),Ze,e(w,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Expense: "+d((l=i(t))==null?void 0:l.total_daily_expense),1)]}),_:1})])]),_:1}),e(E,{class:"q-pt-none"},{default:a(()=>[e(U,{outlined:"",dense:"",label:"Actual Cash",modelValue:f.value,"onUpdate:modelValue":u[3]||(u[3]=l=>f.value=l),type:"number"},null,8,["modelValue"])]),_:1}),e(E,{class:"q-pt-none"},{default:a(()=>[e(U,{outlined:"",dense:"",label:"Actual Mpesa",modelValue:C.value,"onUpdate:modelValue":u[4]||(u[4]=l=>C.value=l),type:"number"},null,8,["modelValue"])]),_:1}),s("div",ea,[s("small",null,d(k.value),1)]),e(me,{align:"right"},{default:a(()=>[e(V,{flat:"",label:"Cancel",color:"red",onClick:le}),e(H),f.value&&!b.value?(x(),B(V,{key:0,flat:"",label:"Close Day",color:"primary",onClick:ee,loading:r.value},null,8,["loading"])):G("",!0),f.value&&b.value?(x(),B(V,{key:1,flat:"",label:"Edit Account",color:"primary",onClick:ae,loading:r.value},null,8,["loading"])):G("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{xa as default};
