import{i as f,c7 as l}from"./index.30f3af3d.js";let o=[],i=[];function d(t){i=i.filter(e=>e!==t)}function F(t){d(t),i.push(t)}function g(t){d(t),i.length===0&&o.length!==0&&(o[o.length-1](),o=[])}function m(t){i.length===0?t():o.push(t)}function h(t){o=o.filter(e=>e!==t)}let a,s=0;const n=new Array(256);for(let t=0;t<256;t++)n[t]=(t+256).toString(16).substring(1);const y=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const r=new Uint8Array(e);return t.getRandomValues(r),r}}return e=>{const r=[];for(let u=e;u>0;u--)r.push(Math.floor(Math.random()*256));return r}})(),c=4096;function w(){(a===void 0||s+16>c)&&(s=0,a=y(c));const t=Array.prototype.slice.call(a,s,s+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,n[t[0]]+n[t[1]]+n[t[2]]+n[t[3]]+"-"+n[t[4]]+n[t[5]]+"-"+n[t[6]]+n[t[7]]+"-"+n[t[8]]+n[t[9]]+"-"+n[t[10]]+n[t[11]]+n[t[12]]+n[t[13]]+n[t[14]]+n[t[15]]}function x(){return f(l)}export{x as a,F as b,m as c,h as d,g as r,w as u};
