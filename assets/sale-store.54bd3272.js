import{c9 as n,c8 as u}from"./index.bc27483f.js";import{g as l,p as i}from"./module_calls.e16012c0.js";const t=n(),s=t==null?void 0:t.token,d=u("sales",{state:()=>({sales:[],bills:[]}),actions:{async fetchSales(){if(s){const e=await l("sales",s);return this.sales=e==null?void 0:e.data,this.sales}},async fetchBills(){if(s){const e=await l("bills",s);return this.bills=e==null?void 0:e.data,this.bills}},async fetchSevenDaysSales(){if(s){const e=await l("sales_last_seven_days",s);return e==null?void 0:e.data}},async createSale(e){var a;if(e.uuid=(a=t==null?void 0:t.user)==null?void 0:a.uuid,s)return await i(e,"sales",s)},async createSaleOperation(e){var a;if(e.uuid=(a=t==null?void 0:t.user)==null?void 0:a.uuid,s)return await i(e,"create_bill_sales",s)},async updateSaleOperation(e){var a;if(e.user_uuid=(a=t==null?void 0:t.user)==null?void 0:a.uuid,s)return await i(e,"update_bill_sales",s)},async createHoldBillOperation(e){var a;if(e.uuid=(a=t==null?void 0:t.user)==null?void 0:a.uuid,s)return await i(e,"create_bill_sales_pending",s)},async updateSale(e){if(s)return await i(e,"update_sale",s)},async addProductToBill(e){var a;if(e.user_uuid=(a=t==null?void 0:t.user)==null?void 0:a.uuid,s)return await i(e,"add_product_to_bill",s)},async removeProductFromBill(e){var a;if(e.user_uuid=(a=t==null?void 0:t.user)==null?void 0:a.uuid,s)return await i(e,"remove_product_from_bill",s)},async deleteBill(e){var a;if(e.user_uuid=(a=t==null?void 0:t.user)==null?void 0:a.uuid,s)return await i(e,"remove_bill",s)},async deleteSale(e){if(s)return await i(e,"delete_sale",s)}}});export{d as u};
