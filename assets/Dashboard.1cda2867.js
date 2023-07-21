import{Q as w}from"./QPage.4640e687.js";import{a as n,Q as i}from"./QCard.b1d1b493.js";import{g as m}from"./get-css-var.23548d6a.js";import{u as y}from"./index.a8c0ae15.js";import{u as B}from"./sale-store.daa756f1.js";import{j as k,r as C,aQ as Q,aI as h,a3 as q,bb as l,d as a,a6 as s,a5 as g,bD as v,ac as r,P as p,u as d,a4 as S}from"./index.544437db.js";import{u as $}from"./account-store.58bf9e1f.js";import{Q as b}from"./QSeparator.3296268e.js";import"./use-dark.7de2cac8.js";import"./module_calls.e16012c0.js";import"./helpers.01ee3f07.js";const P={__name:"BarChart",setup(x){const o=B(),u=k({title:{text:"Sales Records for the last seven days",align:"left"},chart:{id:"apex-column"},colors:[m("primary"),m("secondary"),m("negative")],xaxis:{categories:[]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}}}),f=C([{name:"Sales",data:[]}]);return y("sales",()=>o.fetchSevenDaysSales(),{onSuccess:_=>{console.log(_.some(c=>c.sales>0)),u.xaxis.categories=_.map(c=>c.day),f.value[0].data=_.map(c=>c.sales)}}),(_,c)=>{const t=Q("apexchart");return h(),q(n,{class:"q-pa-sm"},{default:l(()=>[a(t,{height:"300",type:"bar",options:u,series:f.value},null,8,["options","series"])]),_:1})}}},N={__name:"PieChart",setup(x){const o=$();y("product_sales",()=>o.fetchProductSales(),{onSuccess:_=>{f.value=_.map(c=>c.quantity),u.labels=_.map(c=>c.name)}});const u=k({title:{text:"Todays Product Sales",align:"left"},chart:{id:"apex-donut"},colors:[m("secondary"),m("accent"),m("positive"),m("primary"),m("negative"),m("info")],markers:{size:4,hover:{sizeOffset:6}},labels:[]}),f=C([]);return(_,c)=>{const t=Q("apexchart");return h(),q(n,null,{default:l(()=>[a(i,null,{default:l(()=>[a(t,{height:"300",type:"pie",options:u,series:f.value},null,8,["options","series"])]),_:1})]),_:1})}}},T={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},V={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},D={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},z={__name:"Main",setup(x){return(o,u)=>(h(),q(w,null,{default:l(()=>[s("div",T,[s("div",V,[a(P)]),s("div",D,[a(N)])])]),_:1}))}},A={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},M={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},I={class:"text-center q-pa-sm"},O={style:{color:"#017951"}},j={class:"row q-pa-sm"},E={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},R=s("hr",null,null,-1),W={class:"q-ma-sm"},F={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},G=s("hr",null,null,-1),H={class:"q-ma-sm"},J={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},K=s("hr",null,null,-1),L={class:"q-ma-sm"},U={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},X=s("hr",null,null,-1),Y={class:"q-ma-sm"},Z={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},ss={class:"text-center q-pa-sm"},as={style:{color:"#017951"}},ts={class:"row q-pa-sm"},es={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},ls=s("hr",null,null,-1),os={class:"q-ma-sm"},cs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},_s=s("hr",null,null,-1),ns={class:"q-ma-sm"},rs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},ds=s("hr",null,null,-1),is={class:"q-ma-sm"},ms={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},us=s("hr",null,null,-1),ps={class:"q-ma-sm"},hs={__name:"Stats",setup(x){const o=$();return y("account_stats_today",()=>o.fetchTodaySalesStats()),y("account_stats_all",()=>o.fetchAllSalesStats()),(u,f)=>(h(),g("div",A,[s("div",M,[a(n,null,{default:l(()=>{var _,c;return[s("div",I,[s("b",O,[a(v,{name:"grain"}),r(" Today Sales")])]),a(b,{color:"primary"}),s("div",j,[s("div",E,[a(n,{dark:"",class:"bg-primary"},{default:l(()=>[a(i,{class:"text-center"},{default:l(()=>{var t,e;return[r(" Total Sales "),R,s("h5",W,p((e=(t=d(o))==null?void 0:t.today_sales_data[0])==null?void 0:e.total_daily_sales),1)]}),_:1})]),_:1})]),s("div",F,[a(n,{dark:"",class:"bg-info"},{default:l(()=>[a(i,{class:"text-center"},{default:l(()=>{var t,e;return[r(" Cash Sales "),G,s("h5",H,p((e=(t=d(o))==null?void 0:t.today_sales_data[1])==null?void 0:e.total_daily_cash_sales),1)]}),_:1})]),_:1})]),s("div",J,[a(n,{dark:"",class:"bg-warning"},{default:l(()=>[a(i,{class:"text-center"},{default:l(()=>{var t,e;return[r(" Mpesa Sales "),K,s("h5",L,p((e=(t=d(o))==null?void 0:t.today_sales_data[2])==null?void 0:e.total_daily_mpesa_sales),1)]}),_:1})]),_:1})]),((c=(_=d(o))==null?void 0:_.today_sales_data[3])==null?void 0:c.total_daily_pending_sales)>0?(h(),g("div",U,[a(n,{dark:"",style:{"background-color":"red"}},{default:l(()=>[a(i,{class:"text-center"},{default:l(()=>{var t,e;return[r(" Number of Pending Bills "),X,s("h5",Y,p((e=(t=d(o))==null?void 0:t.today_sales_data[3])==null?void 0:e.total_daily_pending_sales),1)]}),_:1})]),_:1})])):S("",!0)])]}),_:1})]),s("div",Z,[a(n,null,{default:l(()=>{var _,c;return[s("div",ss,[s("b",as,[a(v,{name:"grain"}),r(" All Sales")])]),a(b,{color:"primary"}),s("div",ts,[s("div",es,[a(n,{dark:"",class:"bg-primary"},{default:l(()=>[a(i,{class:"text-center"},{default:l(()=>{var t,e;return[r(" Total Sales "),ls,s("h5",os,p((e=(t=d(o))==null?void 0:t.all_sales_data[0])==null?void 0:e.total_sales),1)]}),_:1})]),_:1})]),s("div",cs,[a(n,{dark:"",class:"bg-info"},{default:l(()=>[a(i,{class:"text-center"},{default:l(()=>{var t,e;return[r(" Cash Sales "),_s,s("h5",ns,p((e=(t=d(o))==null?void 0:t.all_sales_data[1])==null?void 0:e.total_cash_sales),1)]}),_:1})]),_:1})]),s("div",rs,[a(n,{dark:"",class:"bg-warning"},{default:l(()=>[a(i,{class:"text-center"},{default:l(()=>{var t,e;return[r(" Mpesa Sales "),ds,s("h5",is,p((e=(t=d(o))==null?void 0:t.all_sales_data[2])==null?void 0:e.total_mpesa_sales),1)]}),_:1})]),_:1})]),((c=(_=d(o))==null?void 0:_.all_sales_data[3])==null?void 0:c.total_pending_sales)>0?(h(),g("div",ms,[a(n,{dark:"",style:{"background-color":"red"}},{default:l(()=>[a(i,{class:"text-center"},{default:l(()=>{var t,e;return[r(" Number of Pending Bills "),us,s("h5",ps,p((e=(t=d(o))==null?void 0:t.all_sales_data[3])==null?void 0:e.total_pending_sales),1)]}),_:1})]),_:1})])):S("",!0)])]}),_:1})])]))}},fs={class:"q-pa-sm"},ws={__name:"Dashboard",setup(x){return(o,u)=>(h(),g("div",fs,[a(hs),a(z)]))}};export{ws as default};
