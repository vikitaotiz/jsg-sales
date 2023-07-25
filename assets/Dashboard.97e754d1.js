import{Q as $}from"./QPage.13a3b619.js";import{a as _,Q as i}from"./QCard.287aa4cb.js";import{g as u}from"./get-css-var.23548d6a.js";import{u as y}from"./index.fe5141b8.js";import{u as B}from"./sale-store.f9d6ab4b.js";import{j as k,r as C,aQ as w,aI as p,a3 as q,bb as e,d as t,a6 as s,a5 as g,bD as v,ac as d,P as m,u as r,a4 as b}from"./index.43b29598.js";import{u as Q}from"./account-store.6f4ffac4.js";import{Q as S}from"./QSeparator.00910b71.js";import"./use-dark.ad1ce312.js";import"./module_calls.e16012c0.js";import"./helpers.01ee3f07.js";const P={__name:"BarChart",setup(f){const o=B(),h=k({title:{text:"Sales Records for the last seven days",align:"left"},chart:{id:"apex-column"},colors:[u("primary"),u("secondary"),u("negative")],xaxis:{categories:[]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}}}),x=C([{name:"Sales",data:[]}]);return y("sales",()=>o.fetchSevenDaysSales(),{onSuccess:n=>{console.log(n.some(c=>c.sales>0)),h.xaxis.categories=n.map(c=>c.day),x.value[0].data=n.map(c=>c.sales)}}),(n,c)=>{const a=w("apexchart");return p(),q(_,{class:"q-pa-sm"},{default:e(()=>[t(a,{height:"300",type:"bar",options:h,series:x.value},null,8,["options","series"])]),_:1})}}},N={__name:"PieChart",setup(f){const o=Q();y("product_sales",()=>o.fetchProductSales(),{onSuccess:n=>{x.value=n.map(c=>c.quantity),h.labels=n.map(c=>c.name)}});const h=k({title:{text:"Todays Product Sales",align:"left"},chart:{id:"apex-donut"},colors:[u("secondary"),u("accent"),u("positive"),u("primary"),u("negative"),u("info")],markers:{size:4,hover:{sizeOffset:6}},labels:[]}),x=C([]);return(n,c)=>{const a=w("apexchart");return p(),q(_,null,{default:e(()=>[t(i,null,{default:e(()=>[t(a,{height:"300",type:"pie",options:h,series:x.value},null,8,["options","series"])]),_:1})]),_:1})}}},T={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},M={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},V={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},D={__name:"Main",setup(f){return(o,h)=>(p(),q($,null,{default:e(()=>[s("div",T,[s("div",M,[t(P)]),s("div",V,[t(N)])])]),_:1}))}},z={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},A={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},I={class:"text-center q-pa-sm"},O={style:{color:"#017951"}},j={class:"row q-pa-sm"},E={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},R=s("hr",null,null,-1),W={class:"q-ma-sm"},F={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},G=s("hr",null,null,-1),H={class:"q-ma-sm"},J={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},K=s("hr",null,null,-1),L={class:"q-ma-sm"},U={class:"row q-pa-sm"},X={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Y=s("hr",null,null,-1),Z={class:"q-ma-sm"},ss={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},as=s("hr",null,null,-1),ts={class:"q-ma-sm"},ls={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},es=s("hr",null,null,-1),os={class:"q-ma-sm"},cs={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},_s={class:"text-center q-pa-sm"},ns={style:{color:"#017951"}},ds={class:"row q-pa-sm"},rs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},is=s("hr",null,null,-1),ms={class:"q-ma-sm"},us={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},hs=s("hr",null,null,-1),ps={class:"q-ma-sm"},xs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},fs=s("hr",null,null,-1),gs={class:"q-ma-sm"},ys={class:"row q-pa-sm"},qs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},vs=s("hr",null,null,-1),bs={class:"q-ma-sm"},Ss={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},ks=s("hr",null,null,-1),Cs={class:"q-ma-sm"},ws={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Qs=s("hr",null,null,-1),$s={class:"q-ma-sm"},Bs={__name:"Stats",setup(f){const o=Q();return y("account_stats_today",()=>o.fetchTodaySalesStats()),y("account_stats_all",()=>o.fetchAllSalesStats()),(h,x)=>(p(),g("div",z,[s("div",A,[t(_,null,{default:e(()=>{var n,c;return[s("div",I,[s("b",O,[t(v,{name:"grain"}),d(" Today Sales")])]),t(S,{color:"primary"}),s("div",j,[s("div",E,[t(_,{dark:"",class:"bg-primary"},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" Total "),R,s("h5",W,m((l=(a=r(o))==null?void 0:a.today_sales_data[0])==null?void 0:l.total_daily_sales),1)]}),_:1})]),_:1})]),s("div",F,[t(_,{dark:"",class:"bg-info"},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" Cash "),G,s("h5",H,m((l=(a=r(o))==null?void 0:a.today_sales_data[1])==null?void 0:l.total_daily_cash_sales),1)]}),_:1})]),_:1})]),s("div",J,[t(_,{dark:"",class:"bg-warning"},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" Mpesa "),K,s("h5",L,m((l=(a=r(o))==null?void 0:a.today_sales_data[2])==null?void 0:l.total_daily_mpesa_sales),1)]}),_:1})]),_:1})])]),s("div",U,[s("div",X,[t(_,{dark:"",class:"bg-warning"},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" Mpesa & Cash "),Y,s("h5",Z,m((l=(a=r(o))==null?void 0:a.today_sales_data[3])==null?void 0:l.total_daily_mpesa_cash_sales),1)]}),_:1})]),_:1})]),s("div",ss,[t(_,{dark:"",class:"bg-brown"},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" Card "),as,s("h5",ts,m((l=(a=r(o))==null?void 0:a.today_sales_data[4])==null?void 0:l.total_daily_card_sales),1)]}),_:1})]),_:1})]),((c=(n=r(o))==null?void 0:n.today_sales_data[5])==null?void 0:c.total_daily_pending_sales)>0?(p(),g("div",ls,[t(_,{dark:"",style:{"background-color":"red"}},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" No. of Pending Bills "),es,s("h5",os,m((l=(a=r(o))==null?void 0:a.today_sales_data[5])==null?void 0:l.total_daily_pending_sales),1)]}),_:1})]),_:1})])):b("",!0)])]}),_:1})]),s("div",cs,[t(_,null,{default:e(()=>{var n,c;return[s("div",_s,[s("b",ns,[t(v,{name:"grain"}),d(" All Sales")])]),t(S,{color:"primary"}),s("div",ds,[s("div",rs,[t(_,{dark:"",class:"bg-primary"},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" Total "),is,s("h5",ms,m((l=(a=r(o))==null?void 0:a.all_sales_data[0])==null?void 0:l.total_sales),1)]}),_:1})]),_:1})]),s("div",us,[t(_,{dark:"",class:"bg-info"},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" Cash "),hs,s("h5",ps,m((l=(a=r(o))==null?void 0:a.all_sales_data[1])==null?void 0:l.total_cash_sales),1)]}),_:1})]),_:1})]),s("div",xs,[t(_,{dark:"",class:"bg-warning"},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" Mpesa "),fs,s("h5",gs,m((l=(a=r(o))==null?void 0:a.all_sales_data[2])==null?void 0:l.total_mpesa_sales),1)]}),_:1})]),_:1})])]),s("div",ys,[s("div",qs,[t(_,{dark:"",class:"bg-warning"},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" Mpesa & Card "),vs,s("h5",bs,m((l=(a=r(o))==null?void 0:a.all_sales_data[3])==null?void 0:l.total_mpesa_cash_sales),1)]}),_:1})]),_:1})]),s("div",Ss,[t(_,{dark:"",class:"bg-brown"},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" Card "),ks,s("h5",Cs,m((l=(a=r(o))==null?void 0:a.all_sales_data[4])==null?void 0:l.total_card_sales),1)]}),_:1})]),_:1})]),((c=(n=r(o))==null?void 0:n.all_sales_data[5])==null?void 0:c.total_pending_sales)>0?(p(),g("div",ws,[t(_,{dark:"",style:{"background-color":"red"}},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>{var a,l;return[d(" No. of Pending Bills "),Qs,s("h5",$s,m((l=(a=r(o))==null?void 0:a.all_sales_data[5])==null?void 0:l.total_pending_sales),1)]}),_:1})]),_:1})])):b("",!0)])]}),_:1})])]))}},Ps={class:"q-pa-sm"},Rs={__name:"Dashboard",setup(f){return(o,h)=>(p(),g("div",Ps,[t(Bs),t(D)]))}};export{Rs as default};
