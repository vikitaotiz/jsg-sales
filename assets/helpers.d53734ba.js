import{bA as t,c as o,h as s,bB as n,g as u}from"./index.129e3269.js";import{u as c,a as l}from"./use-dark.49fe607a.js";var m=t({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:e}){const r=o(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>s(a.tag,{class:r.value},n(e.default))}}),h=t({name:"QCard",props:{...c,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:e}){const{proxy:{$q:r}}=u(),i=l(a,r),d=o(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>s(a.tag,{class:d.value},n(e.default))}});const g="https://jsg.missnadhifu.com/laravel/public/api/v1",v=a=>{a===500&&(localStorage.removeItem("auth_user"),window.location.reload(!0))},b={url:"https://velvety-kangaroo-c5d86a.netlify.app",print_header:`
    <div style="text-align: center;">
    <b>DECKAR GRILLS AND LOUNGE</b>
    <p>Phone : 0710 980 300</p>
    <p>Nairobi, Ngara Opposite kcb Bank</p>
    </div>
`},q=a=>!!(a.length>0&&(a.some(e=>e.name==="Admin")||a.some(e=>e.name==="Cashier")));export{h as Q,m as a,g as b,b as c,v as f,q as h};
