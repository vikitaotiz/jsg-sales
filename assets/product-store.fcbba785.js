import{c9 as c,c8 as u}from"./index.36f77fb2.js";import{g as a,p as o}from"./module_calls.d8bb0b10.js";const s=c(),r=s==null?void 0:s.token,p=u("products",{state:()=>({products:[]}),actions:{async fetchProducts(){if(r){const t=await a("products",r);return this.products=t==null?void 0:t.data,this.products}},async createProduct(t){var e;if(t.user_uuid=(e=s==null?void 0:s.user)==null?void 0:e.uuid,r)return await o(t,"products",r)},async updateProduct(t){if(r)return await o(t,"update_product",r)},async deleteProduct(t){if(r)return await o(t,"delete_product",r)}}});export{p as u};
