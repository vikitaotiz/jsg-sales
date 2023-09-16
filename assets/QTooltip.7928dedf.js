import{bA as ee,r as O,c as f,w as k,aB as C,bV as E,bR as x,bZ as te,h as H,bg as oe,g as ae,bB as ne,bW as ie}from"./index.129e3269.js";import{u as le,v as A,d as se,e as re,f as ue,g as j,s as ce,c as q,p as D,h as de}from"./rtl.ffa1ed12.js";import{a as fe,u as ve,b as he,g as ge,c as me,j as be,d as ye,k as Te}from"./QDialog.a1654a10.js";var we=ee({name:"QTooltip",inheritAttrs:!1,props:{...le,...fe,...ve,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:se},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...he],setup(e,{slots:M,emit:b,attrs:v}){let i,l;const h=ae(),{proxy:{$q:o}}=h,s=O(null),c=O(!1),L=f(()=>D(e.anchor,o.lang.rtl)),W=f(()=>D(e.self,o.lang.rtl)),B=f(()=>e.persistent!==!0),{registerTick:Q,removeTick:R}=ge(),{registerTimeout:d}=me(),{transitionProps:N,transitionStyle:V}=be(e),{localScrollTarget:y,changeScrollEvent:_,unconfigureScrollTarget:I}=re(e,P),{anchorEl:a,canShow:U,anchorEvents:r}=ue({showing:c,configureAnchorEl:K}),{show:Z,hide:g}=ye({showing:c,canShow:U,handleShow:z,handleHide:F,hideOnRouteChange:B,processOnMount:!0});Object.assign(r,{delayShow:G,delayHide:J});const{showPortal:T,hidePortal:p,renderPortal:$}=Te(h,s,Y,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ie(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(m,n=>{(n===!0?de:j)(t)}),C(()=>{j(t)})}function z(t){T(),Q(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=k(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{T(!0),b("show",t)},e.transitionDuration)}function F(t){R(),p(),S(),d(()=>{p(!0),b("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),I(),E(r,"tooltipTemp")}function u(){ce({targetEl:s.value,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:W.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(o.platform.is.mobile===!0){q(),document.body.classList.add("non-selectable");const m=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{Z(t)},e.delay)}function J(t){o.platform.is.mobile===!0&&(E(r,"tooltipTemp"),q(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(a.value!==null||e.scrollTarget!==void 0){y.value=te(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;_(y.value,t)}}function X(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,V.value],role:"tooltip"},ne(M.default)):null}function Y(){return H(oe,N.value,X)}return C(S),Object.assign(h.proxy,{updatePosition:u}),$}});export{we as Q};
