import{bO as s,c3 as d}from"./index.bda02627.js";import{p as c,q as i}from"./rtl.4f4d0aa8.js";function n(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var h=s({name:"close-popup",beforeMount(e,{value:t}){const o={depth:n(t),handler(r){o.depth!==0&&setTimeout(()=>{const p=c(e);p!==void 0&&i(p,r,o.depth)})},handlerKey(r){d(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=n(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{h as C};
