import{bA as u,c as t,h as o,bD as i}from"./index.8298741d.js";import{u as s,b as g,c as m}from"./QTable.7b930ac1.js";var d=u({name:"QToggle",props:{...s,icon:String,iconColor:String},emits:g,setup(e){function a(c,l){const n=t(()=>(c.value===!0?e.checkedIcon:l.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),r=t(()=>c.value===!0?e.iconColor:null);return()=>[o("div",{class:"q-toggle__track"}),o("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},n.value!==void 0?[o(i,{name:n.value,color:r.value})]:void 0)]}return m("toggle",a)}});export{d as Q};
