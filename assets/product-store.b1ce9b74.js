import{co as u,c2 as d}from"./index.c8a14f3d.js";import{g as a,p as o}from"./module_calls.101134f6.js";const r=u(),s=r==null?void 0:r.token,p=d("products",{state:()=>({products:[]}),actions:{async fetchProducts(){if(s){const t=await a("products",s);return this.products=t==null?void 0:t.data,this.products}},async createProduct(t){var e;if(t.user_uuid=(e=r==null?void 0:r.user)==null?void 0:e.uuid,s)return await o(t,"products",s)},async updateProduct(t){var e;if(t.user_uuid=(e=r==null?void 0:r.user)==null?void 0:e.uuid,s)return await o(t,"update_product",s)},async deleteProduct(t){if(s)return await o(t,"delete_product",s)}}});export{p as u};
