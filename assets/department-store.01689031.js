import{c9 as r,c8 as o}from"./index.0fdde7d8.js";import{g as c,p as s}from"./module_calls.b5021e26.js";const n=r(),e=n==null?void 0:n.token,d=o("departments",{state:()=>({departments:[]}),actions:{async fetchDepartments(){if(e){const t=await c("departments",e);return this.departments=t==null?void 0:t.data,this.departments}},async createDepartment(t){if(e){console.log(t);const a=await s(t,"departments",e);return console.log(a),a}},async updateDepartment(t){if(e)return await s(t,"update_department",e)},async deleteDepartment(t){if(e)return await s(t,"delete_department",e)}}});export{d as u};
