import{c9 as c,c8 as i}from"./index.e2e1918c.js";import{g as l,p as e}from"./module_calls.c637478d.js";const s=c(),t=s==null?void 0:s.token,h=i("accounts",{state:()=>({total_daily_sales:0,total_daily_card_sales:0,total_daily_debt_sales:0,total_daily_cash_sales:0,total_daily_mpesa_cash_sales:0,total_daily_mpesa_sales:0,total_daily_pending_sales:0,total_daily_expense:0,total_sales:0,total_card_sales:0,total_cash_sales:0,total_mpesa_cash_sales:0,total_mpesa_sales:0,total_pending_sales:0}),actions:{async fetchSalesExpense(){if(t){const a=await l("sales_expense",t);return a==null?void 0:a.data}},async fetchAccountStats(){if(t)return await l("accounts_stats",t)},async fetchTodaySalesStats(){if(t){const a=await l("sales_stats",t);this.total_daily_sales=a==null?void 0:a.total_daily_sales,this.total_daily_card_sales=a==null?void 0:a.total_daily_card_sales,this.total_daily_debt_sales=a==null?void 0:a.total_daily_debt_sales,this.total_daily_cash_sales=a==null?void 0:a.total_daily_cash_sales,this.total_daily_expense=a==null?void 0:a.total_daily_expense,this.total_daily_mpesa_cash_sales=a==null?void 0:a.total_daily_mpesa_cash_sales,this.total_daily_mpesa_sales=a==null?void 0:a.total_daily_mpesa_sales,this.total_daily_pending_sales=a==null?void 0:a.total_daily_pending_sales}},async fetchAllSalesStats(){if(t){const a=await l("all_sales_stats",t);this.total_sales=a==null?void 0:a.total_sales,this.total_card_sales=a==null?void 0:a.total_card_sales,this.total_cash_sales=a==null?void 0:a.total_cash_sales,this.total_mpesa_cash_sales=a==null?void 0:a.total_mpesa_cash_sales,this.total_mpesa_sales=a==null?void 0:a.total_mpesa_sales,this.total_pending_sales=a==null?void 0:a.total_pending_sales}},async fetchProductSales(){if(t){const a=await l("product_sales",t);return this.product_sales=a,this.product_sales}},async fetchAccounts(){if(t){const a=await l("accounts",t);return this.roles=a==null?void 0:a.data,this.roles}},async createAccount(a){var _;if(a.user_uuid=(_=s==null?void 0:s.user)==null?void 0:_.uuid,t)return await e(a,"accounts",t)},async updateAccount(a){var _;if(a.user_uuid=(_=s==null?void 0:s.user)==null?void 0:_.uuid,t)return await e(a,"update_accounts",t)}}});export{h as u};
