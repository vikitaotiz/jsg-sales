import{co as i,c2 as c}from"./index.8298741d.js";import{g as e,p as _}from"./module_calls.83889699.js";const s=i(),a=s==null?void 0:s.token,u=c("accounts",{state:()=>({total_daily_sales:0,total_daily_card_sales:0,total_daily_debt_sales:0,total_daily_cash_sales:0,total_daily_mpesa_cash_sales:0,total_daily_mpesa_sales:0,total_daily_pending_sales:0,total_daily_expense:0,total_sales:0,total_card_sales:0,total_debt_sales:0,total_cash_sales:0,total_mpesa_cash_sales:0,total_mpesa_sales:0,total_pending_sales:0,total_expense:0}),actions:{async fetchSalesExpense(){if(a){const t=await e("sales_expense",a);return Number(t==null?void 0:t.data).toLocaleString()}},async fetchTodaySalesStats(){if(a){const t=await e("sales_stats",a);this.total_daily_sales=Number(t==null?void 0:t.total_daily_sales).toLocaleString(),this.total_daily_card_sales=Number(t==null?void 0:t.total_daily_card_sales).toLocaleString(),this.total_daily_debt_sales=Number(t==null?void 0:t.total_daily_debt_sales).toLocaleString(),this.total_daily_cash_sales=Number(t==null?void 0:t.total_daily_cash_sales).toLocaleString(),this.total_daily_expense=Number(t==null?void 0:t.total_daily_expense).toLocaleString(),this.total_daily_mpesa_cash_sales=Number(t==null?void 0:t.total_daily_mpesa_cash_sales).toLocaleString(),this.total_daily_mpesa_sales=Number(t==null?void 0:t.total_daily_mpesa_sales).toLocaleString(),this.total_daily_pending_sales=Number(t==null?void 0:t.total_daily_pending_sales).toLocaleString()}},async fetchAllSalesStats(){if(a){const t=await e("all_sales_stats",a);this.total_sales=Number(t==null?void 0:t.total_sales).toLocaleString(),this.total_card_sales=Number(t==null?void 0:t.total_card_sales).toLocaleString(),this.total_debt_sales=Number(t==null?void 0:t.total_debt_sales).toLocaleString(),this.total_cash_sales=Number(t==null?void 0:t.total_cash_sales).toLocaleString(),this.total_mpesa_cash_sales=Number(t==null?void 0:t.total_mpesa_cash_sales).toLocaleString(),this.total_mpesa_sales=Number(t==null?void 0:t.total_mpesa_sales).toLocaleString(),this.total_pending_sales=Number(t==null?void 0:t.total_pending_sales).toLocaleString(),this.total_expense=Number(t==null?void 0:t.total_expense).toLocaleString()}},async fetchTodayProductSales(){if(a){const t=await e("today_product_sales",a);return this.product_sales=t,this.product_sales}},async fetchAccounts(){if(a){const t=await e("accounts",a);return this.roles=t==null?void 0:t.data,this.roles}},async createAccount(t){var l;if(t.user_uuid=(l=s==null?void 0:s.user)==null?void 0:l.uuid,a)return await _(t,"accounts",a)},async updateAccount(t){var l;if(t.user_uuid=(l=s==null?void 0:s.user)==null?void 0:l.uuid,a)return await _(t,"update_accounts",a)}}});export{u};
