import{co as n,c2 as c}from"./index.8298741d.js";import{g as i,p as r}from"./module_calls.83889699.js";const a=n(),e=a==null?void 0:a.token,d=c("users",{state:()=>({users:[],access_granted:!1}),actions:{async fetchUsers(){if(e){const s=await i("users",e);return this.users=s==null?void 0:s.data,this.users}},async createUser(s){var t;if(s.user_uuid=(t=a==null?void 0:a.user)==null?void 0:t.uuid,e)return await r(s,"users",e)},async updateUser(s){if(e)return await r(s,"update_user",e)},async deleteUser(s){if(e)return await r(s,"delete_user",e)},async confirmAdmin(s){if(e)return await r(s,"confirm_admin",e)},async verifyAccessToken(s){if(e){const t=await r(s,"verify_access_token",e);return this.access_granted=t.access_granted,t}},async sendNotification(s){if(e)return await r(s,"send_notification",e)}}});export{d as u};
