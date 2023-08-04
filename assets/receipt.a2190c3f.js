import{p as d}from"./print.15699711.js";const a=(t,e)=>{const l=t.reduce((r,i)=>r+i.total,0);return`<div style="text-align: center; padding: 10px; paddinng: 5px; margin-bottom: 20px; width: 100%">
    <h4>${e.title}</h4>
    <ul>
      <li>Total Cost : ${l}</li>
      <li>Payment Mode : ${e.payment_mode}</li>
      <li>Status : ${e.status}</li>
      <li>Created By : ${e.user}</li>
      <li>Created On : ${e.created_at}</li>
      </li>
    </ul>
  </div>`},s=(t,e,l)=>{const o=a(t,l);d({header:o,repeatTableHeader:!0,printable:t,properties:e,type:"json",gridHeaderStyle:"font-weight: bold; border: 2px solid;",gridStyle:"border-collapse: collapse; border: 1px solid;"})};export{s as e};
