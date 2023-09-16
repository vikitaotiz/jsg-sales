import{i as oe,w as R,o as G,aB as M,cq as le,g as I,r as m,c as i,cr as te,cg as re,aC as ne,bW as ue,ay as ae,aD as ie,az as se,bH as de,h as a,bT as A,bD as K,cs as fe,bB as k,bg as ce,bP as ve}from"./index.129e3269.js";import{u as pe,a as me}from"./use-dark.49fe607a.js";import{b as ge,u as be,c as he}from"./uid.9b787859.js";function Ce({validate:e,resetValidation:o,requiresQForm:t}){const r=oe(le,!1);if(r!==!1){const{props:c,proxy:s}=I();Object.assign(s,{validate:e,resetValidation:o}),R(()=>c.disable,n=>{n===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),G(()=>{c.disable!==!0&&r.bindComponent(s)}),M(()=>{c.disable!==!0&&r.unbindComponent(s)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const Q=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Z=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,J=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,$=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,E=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,D={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Q.test(e),hexaColor:e=>Z.test(e),hexOrHexaColor:e=>J.test(e),rgbColor:e=>$.test(e),rgbaColor:e=>E.test(e),rgbOrRgbaColor:e=>$.test(e)||E.test(e),hexOrRgbColor:e=>Q.test(e)||$.test(e),hexaOrRgbaColor:e=>Z.test(e)||E.test(e),anyColor:e=>J.test(e)||$.test(e)||E.test(e)},qe=[!0,!1,"ondemand"],ye={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>qe.includes(e)}};function _e(e,o){const{props:t,proxy:r}=I(),c=m(!1),s=m(null),n=m(null);Ce({validate:C,resetValidation:_});let f=0,h;const w=i(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length!==0),g=i(()=>t.disable!==!0&&w.value===!0),y=i(()=>t.error===!0||c.value===!0),P=i(()=>typeof t.errorMessage=="string"&&t.errorMessage.length!==0?t.errorMessage:s.value);R(()=>t.modelValue,()=>{F()}),R(()=>t.reactiveRules,b=>{b===!0?h===void 0&&(h=R(()=>t.rules,()=>{F(!0)})):h!==void 0&&(h(),h=void 0)},{immediate:!0}),R(e,b=>{b===!0?n.value===null&&(n.value=!1):n.value===!1&&(n.value=!0,g.value===!0&&t.lazyRules!=="ondemand"&&o.value===!1&&x())});function _(){f++,o.value=!1,n.value=null,c.value=!1,s.value=null,x.cancel()}function C(b=t.modelValue){if(g.value!==!0)return!0;const S=++f,O=o.value!==!0?()=>{n.value=!0}:()=>{},q=(d,v)=>{d===!0&&O(),c.value=d,s.value=v||null,o.value=!1},B=[];for(let d=0;d<t.rules.length;d++){const v=t.rules[d];let p;if(typeof v=="function"?p=v(b,D):typeof v=="string"&&D[v]!==void 0&&(p=D[v](b)),p===!1||typeof p=="string")return q(!0,p),!1;p!==!0&&p!==void 0&&B.push(p)}return B.length===0?(q(!1),!0):(o.value=!0,Promise.all(B).then(d=>{if(d===void 0||Array.isArray(d)===!1||d.length===0)return S===f&&q(!1),!0;const v=d.find(p=>p===!1||typeof p=="string");return S===f&&q(v!==void 0,v),v===void 0},d=>(S===f&&(console.error(d),q(!0)),!1)))}function F(b){g.value===!0&&t.lazyRules!=="ondemand"&&(n.value===!0||t.lazyRules!==!0&&b!==!0)&&x()}const x=te(C,0);return M(()=>{h!==void 0&&h(),x.cancel()}),Object.assign(r,{resetValidation:_,validate:C}),re(r,"hasError",()=>y.value),{isDirtyModel:n,hasRules:w,hasError:y,errorMessage:P,validate:C,resetValidation:_}}const W=/^on[A-Z]/;function xe(e,o){const t={listeners:m({}),attributes:m({})};function r(){const c={},s={};for(const n in e)n!=="class"&&n!=="style"&&W.test(n)===!1&&(c[n]=e[n]);for(const n in o.props)W.test(n)===!0&&(s[n]=o.props[n]);t.attributes.value=c,t.listeners.value=s}return ne(r),r(),t}function T(e){return e===void 0?`f_${be()}`:e}function Se(e){return e!=null&&(""+e).length!==0}const $e={...pe,...ye,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ee=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ie(){const{props:e,attrs:o,proxy:t,vnode:r}=I();return{isDark:me(e,t.$q),editable:i(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:m(!1),focused:m(!1),hasPopupOpen:!1,splitAttrs:xe(o,r),targetUid:m(T(e.for)),rootRef:m(null),targetRef:m(null),controlRef:m(null)}}function Pe(e){const{props:o,emit:t,slots:r,attrs:c,proxy:s}=I(),{$q:n}=s;let f=null;e.hasValue===void 0&&(e.hasValue=i(()=>Se(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:z,onFocusout:U}),Object.assign(e,{clearValue:H,onControlFocusin:z,onControlFocusout:U,focus:v}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,u=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:h,hasRules:w,hasError:g,errorMessage:y,resetValidation:P}=_e(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=i(()=>o.bottomSlots===!0||o.hint!==void 0||w.value===!0||o.counter===!0||o.error!==null),F=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),x=i(()=>`q-field row no-wrap items-start q-field--${F.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(S.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(g.value===!0?" q-field--error":"")+(g.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),b=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(g.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),S=i(()=>o.labelSlot===!0||o.label!==void 0),O=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&g.value!==!0?` text-${o.labelColor}`:"")),q=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:o.modelValue,emitValue:e.emitValue})),B=i(()=>{const l={for:e.targetUid.value};return o.disable===!0?l["aria-disabled"]="true":o.readonly===!0&&(l["aria-readonly"]="true"),l});R(()=>o.for,l=>{e.targetUid.value=T(l)});function d(){const l=document.activeElement;let u=e.targetRef!==void 0&&e.targetRef.value;u&&(l===null||l.id!==e.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==l&&u.focus({preventScroll:!0}))}function v(){ge(d)}function p(){he(d);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function z(l){f!==null&&(clearTimeout(f),f=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function U(l,u){f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),u!==void 0&&u())})}function H(l){ue(l),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",o.modelValue),ae(()=>{P(),n.platform.is.mobile!==!0&&(h.value=!1)})}function X(){const l=[];return r.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:A},r.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},Y())),g.value===!0&&o.noErrorIcon===!1&&l.push(V("error",[a(K,{name:n.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(V("inner-loading-append",r.loading!==void 0?r.loading():[a(fe,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(V("inner-clearable-append",[a(K,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||n.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:H})])),r.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:A},r.append())),e.getInnerAppend!==void 0&&l.push(V("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function Y(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):r.rawControl!==void 0?l.push(r.rawControl()):r.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(q.value))),S.value===!0&&l.push(a("div",{class:O.value},k(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(k(r.default))}function ee(){let l,u;g.value===!0?y.value!==null?(l=[a("div",{role:"alert"},y.value)],u=`q--slot-error-${y.value}`):(l=k(r.error),u="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],u=`q--slot-hint-${o.hint}`):(l=k(r.hint),u="q--slot-hint"));const L=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&L===!1&&l===void 0)return;const N=a("div",{key:u,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:A},[o.hideBottomSpace===!0?N:a(ce,{name:"q-transition--field-message"},()=>N),L===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function V(l,u){return u===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}let j=!1;return ie(()=>{j=!0}),se(()=>{j===!0&&o.autofocus===!0&&s.focus()}),G(()=>{de.value===!0&&o.for===void 0&&(e.targetUid.value=T()),o.autofocus===!0&&s.focus()}),M(()=>{f!==null&&clearTimeout(f)}),Object.assign(s,{focus:v,blur:p}),function(){const u=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...B.value}:B.value;return a("label",{ref:e.rootRef,class:[x.value,c.class],style:c.style,...u},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:A},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:b.value,tabindex:-1,...e.controlEvents},X()),C.value===!0?ee():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:A},r.after()):null])}}const Oe={name:String};function De(e={}){return(o,t,r)=>{o[t](a("input",{class:"hidden"+(r||""),...e.value}))}}function Te(e){return i(()=>e.name||e.for)}const Be=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Re=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ae=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,we=/[a-z0-9_ -]$/i;function Me(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(ve.is.firefox===!0?we.test(t.data)===!1:Be.test(t.data)===!0||Re.test(t.data)===!0||Ae.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}export{Oe as a,Ee as b,Te as c,Ie as d,Pe as e,Se as f,Me as g,De as h,$e as u};
