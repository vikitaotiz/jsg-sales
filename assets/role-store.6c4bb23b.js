import{cp as a,co as l}from"./index.bda02627.js";import{g as n,p as r}from"./module_calls.39290f85.js";const o=a(),t=o==null?void 0:o.token,d=l("roles",{state:()=>({roles:[]}),actions:{async fetchRoles(){if(t){const e=await n("roles",t);return this.roles=e==null?void 0:e.data,this.roles}},async createRole(e){var s;if(e.uuid=(s=o==null?void 0:o.user)==null?void 0:s.uuid,t)return await r(e,"roles",t)},async updateRole(e){if(t)return await r(e,"update_role",t)},async deleteRole(e){if(t)return await r(e,"delete_role",t)}}});export{d as u};
