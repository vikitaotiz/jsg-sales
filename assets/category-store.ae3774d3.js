import{c9 as o,c8 as c}from"./index.30f3af3d.js";import{g as i,p as s}from"./module_calls.e16012c0.js";const a=o(),t=a==null?void 0:a.token,d=c("categories",{state:()=>({categories:[]}),actions:{async fetchCategories(){if(t){const e=await i("categories",t);return this.categories=e==null?void 0:e.data,this.categories}},async createCategory(e){var r;if(e.uuid=(r=a==null?void 0:a.user)==null?void 0:r.uuid,t)return await s(e,"categories",t)},async updateCategory(e){if(t)return await s(e,"update_category",t)},async deleteCategory(e){if(t)return await s(e,"delete_category",t)}}});export{d as u};
