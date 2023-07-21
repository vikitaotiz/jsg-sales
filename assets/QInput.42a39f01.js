import{i as pe,w as D,o as re,aA as le,cm as ke,g as G,r as I,c as k,cn as ye,cd as me,aB as xe,bW as Ce,ax as Q,aC as we,ay as Me,bH as Se,h as y,bT as W,bD as ue,co as Re,bB as J,bg as qe,c0 as Ae,bP as Ve,bA as Fe,bG as ie}from"./index.e37020f3.js";import{u as _e,a as Ee}from"./use-dark.8c741721.js";import{c as he,u as Be,d as Te}from"./use-quasar.b61e7e78.js";function $e({validate:e,resetValidation:t,requiresQForm:u}){const i=pe(ke,!1);if(i!==!1){const{props:f,proxy:d}=G();Object.assign(d,{validate:e,resetValidation:t}),D(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),re(()=>{f.disable!==!0&&i.bindComponent(d)}),le(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const se=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,de=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,fe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,X=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ne={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>se.test(e),hexaColor:e=>de.test(e),hexOrHexaColor:e=>fe.test(e),rgbColor:e=>X.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>X.test(e)||ee.test(e),hexOrRgbColor:e=>se.test(e)||X.test(e),hexaOrRgbaColor:e=>de.test(e)||ee.test(e),anyColor:e=>fe.test(e)||X.test(e)||ee.test(e)},Oe=[!0,!1,"ondemand"],Pe={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Oe.includes(e)}};function Ie(e,t){const{props:u,proxy:i}=G(),f=I(!1),d=I(null),c=I(null);$e({validate:T,resetValidation:_});let x=0,B;const R=k(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),C=k(()=>u.disable!==!0&&R.value===!0),b=k(()=>u.error===!0||f.value===!0),U=k(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);D(()=>u.modelValue,()=>{N()}),D(()=>u.reactiveRules,P=>{P===!0?B===void 0&&(B=D(()=>u.rules,()=>{N(!0)})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),D(e,P=>{P===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,C.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&O())});function _(){x++,t.value=!1,c.value=null,f.value=!1,d.value=null,O.cancel()}function T(P=u.modelValue){if(C.value!==!0)return!0;const A=++x,H=t.value!==!0?()=>{c.value=!0}:()=>{},z=(S,w)=>{S===!0&&H(),f.value=S,d.value=w||null,t.value=!1},j=[];for(let S=0;S<u.rules.length;S++){const w=u.rules[S];let E;if(typeof w=="function"?E=w(P,ne):typeof w=="string"&&ne[w]!==void 0&&(E=ne[w](P)),E===!1||typeof E=="string")return z(!0,E),!1;E!==!0&&E!==void 0&&j.push(E)}return j.length===0?(z(!1),!0):(t.value=!0,Promise.all(j).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return A===x&&z(!1),!0;const w=S.find(E=>E===!1||typeof E=="string");return A===x&&z(w!==void 0,w),w===void 0},S=>(A===x&&(console.error(S),z(!0)),!1)))}function N(P){C.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&P!==!0)&&O()}const O=ye(T,0);return le(()=>{B!==void 0&&B(),O.cancel()}),Object.assign(i,{resetValidation:_,validate:T}),me(i,"hasError",()=>b.value),{isDirtyModel:c,hasRules:R,hasError:b,errorMessage:U,validate:T,resetValidation:_}}const ce=/^on[A-Z]/;function De(e,t){const u={listeners:I({}),attributes:I({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&ce.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)ce.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return xe(i),i(),u}function ae(e){return e===void 0?`f_${Be()}`:e}function oe(e){return e!=null&&(""+e).length!==0}const je={..._e,...Pe,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},ze=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ne(){const{props:e,attrs:t,proxy:u,vnode:i}=G();return{isDark:Ee(e,u.$q),editable:k(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:De(t,i),targetUid:I(ae(e.for)),rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function Le(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=G(),{$q:c}=d;let x=null;e.hasValue===void 0&&(e.hasValue=k(()=>oe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:a}),Object.assign(e,{clearValue:s,onControlFocusin:r,onControlFocusout:a,focus:w}),e.computedCounter===void 0&&(e.computedCounter=k(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:R,hasError:C,errorMessage:b,resetValidation:U}=Ie(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?k(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):k(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),T=k(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),N=k(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=k(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(C.value===!0?" q-field--error":"")+(C.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&T.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=k(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(C.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=k(()=>t.labelSlot===!0||t.label!==void 0),H=k(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&C.value!==!0?` text-${t.labelColor}`:"")),z=k(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:t.modelValue,emitValue:e.emitValue})),j=k(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});D(()=>t.for,l=>{e.targetUid.value=ae(l)});function S(){const l=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(l===null||l.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==l&&h.focus({preventScroll:!0}))}function w(){he(S)}function E(){Te(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function r(l){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function a(l,h){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),h!==void 0&&h())})}function s(l){Ce(l),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Q(()=>{U(),c.platform.is.mobile!==!0&&(B.value=!1)})}function o(){const l=[];return i.prepend!==void 0&&l.push(y("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:W},i.prepend())),l.push(y("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),C.value===!0&&t.noErrorIcon===!1&&l.push(M("error",[y(ue,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(M("inner-loading-append",i.loading!==void 0?i.loading():[y(Re,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(M("inner-clearable-append",[y(ue,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&l.push(y("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:W},i.append())),e.getInnerAppend!==void 0&&l.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(y("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):i.rawControl!==void 0?l.push(i.rawControl()):i.control!==void 0&&l.push(y("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(z.value))),A.value===!0&&l.push(y("div",{class:H.value},J(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(y("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(J(i.default))}function v(){let l,h;C.value===!0?b.value!==null?(l=[y("div",{role:"alert"},b.value)],h=`q--slot-error-${b.value}`):(l=J(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[y("div",t.hint)],h=`q--slot-hint-${t.hint}`):(l=J(i.hint),h="q--slot-hint"));const Z=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&Z===!1&&l===void 0)return;const p=y("div",{key:h,class:"q-field__messages col"},l);return y("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:W},[t.hideBottomSpace===!0?p:y(qe,{name:"q-transition--field-message"},()=>p),Z===!0?y("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function M(l,h){return h===null?null:y("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let m=!1;return we(()=>{m=!0}),Me(()=>{m===!0&&t.autofocus===!0&&d.focus()}),re(()=>{Se.value===!0&&t.for===void 0&&(e.targetUid.value=ae()),t.autofocus===!0&&d.focus()}),le(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:w,blur:E}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...j.value}:j.value;return y("label",{ref:e.rootRef,class:[O.value,f.class],style:f.style,...h},[i.before!==void 0?y("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:W},i.before()):null,y("div",{class:"q-field__inner relative-position col self-stretch"},[y("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},o()),T.value===!0?v():null]),i.after!==void 0?y("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:W},i.after()):null])}}const ve={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},be=Object.keys(te);be.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const Ze=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+be.join("")+"])|(.)","g"),ge=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),Ke={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ue(e,t,u,i){let f,d,c,x,B,R;const C=I(null),b=I(_());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,N),D(()=>e.mask,r=>{if(r!==void 0)O(b.value,!0);else{const a=w(b.value);N(),e.modelValue!==a&&t("update:modelValue",a)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&O(b.value,!0)}),D(()=>e.unmaskedValue,()=>{C.value===!0&&O(b.value)});function _(){if(N(),C.value===!0){const r=j(w(e.modelValue));return e.fillMask!==!1?E(r):r}return e.modelValue}function T(r){if(r<f.length)return f.slice(-r);let a="",s=f;const o=s.indexOf(V);if(o>-1){for(let g=r-s.length;g>0;g--)a+=V;s=s.slice(0,o)+a+s.slice(o)}return s}function N(){if(C.value=e.mask!==void 0&&e.mask.length!==0&&U(),C.value===!1){x=void 0,f="",d="";return}const r=ve[e.mask]===void 0?e.mask:ve[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=a.replace(ge,"\\$&"),o=[],g=[],v=[];let M=e.reverseFillMask===!0,m="",l="";r.replace(Ze,(F,n,q,K,L)=>{if(K!==void 0){const $=te[K];v.push($),l=$.negate,M===!0&&(g.push("(?:"+l+"+)?("+$.pattern+"+)?(?:"+l+"+)?("+$.pattern+"+)?"),M=!1),g.push("(?:"+l+"+)?("+$.pattern+")?")}else if(q!==void 0)m="\\"+(q==="\\"?"":q),v.push(q),o.push("([^"+m+"]+)?"+m+"?");else{const $=n!==void 0?n:L;m=$==="\\"?"\\\\\\\\":$.replace(ge,"\\\\$&"),v.push($),o.push("([^"+m+"]+)?"+m+"?")}});const h=new RegExp("^"+o.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),Z=g.length-1,p=g.map((F,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+F):n===Z?new RegExp("^"+F+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+F));c=v,x=F=>{const n=h.exec(e.reverseFillMask===!0?F:F.slice(0,v.length+1));n!==null&&(F=n.slice(1).join(""));const q=[],K=p.length;for(let L=0,$=F;L<K;L++){const Y=p[L].exec($);if(Y===null)break;$=$.slice(Y.shift().length),q.push(...Y)}return q.length!==0?q.join(""):F},f=v.map(F=>typeof F=="string"?F:V).join(""),d=f.split(V).join(a)}function O(r,a,s){const o=i.value,g=o.selectionEnd,v=o.value.length-g,M=w(r);a===!0&&N();const m=j(M),l=e.fillMask!==!1?E(m):m,h=b.value!==l;o.value!==l&&(o.value=l),h===!0&&(b.value=l),document.activeElement===o&&Q(()=>{if(l===d){const p=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(p,p,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const p=o.selectionEnd;let F=g-1;for(let n=B;n<=F&&n<p;n++)f[n]!==V&&F++;A.right(o,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const p=e.reverseFillMask===!0?g===0?l.length>m.length?1:0:Math.max(0,l.length-(l===d?0:Math.min(m.length,v)+1))+1:g;o.setSelectionRange(p,p,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const p=Math.max(0,l.length-(l===d?0:Math.min(m.length,v+1)));p===1&&g===1?o.setSelectionRange(p,p,"forward"):A.rightReverse(o,p)}else{const p=l.length-v;o.setSelectionRange(p,p,"backward")}else if(h===!0){const p=Math.max(0,f.indexOf(V),Math.min(m.length,g)-1);A.right(o,p)}else{const p=g-1;A.right(o,p)}});const Z=e.unmaskedValue===!0?w(l):l;String(e.modelValue)!==Z&&u(Z,!0)}function P(r,a,s){const o=j(w(r.value));a=Math.max(0,f.indexOf(V),Math.min(o.length,a)),B=a,r.setSelectionRange(a,s,"forward")}const A={left(r,a){const s=f.slice(a-1).indexOf(V)===-1;let o=Math.max(0,a-1);for(;o>=0;o--)if(f[o]===V){a=o,s===!0&&a++;break}if(o<0&&f[a]!==void 0&&f[a]!==V)return A.right(r,0);a>=0&&r.setSelectionRange(a,a,"backward")},right(r,a){const s=r.value.length;let o=Math.min(s,a+1);for(;o<=s;o++)if(f[o]===V){a=o;break}else f[o-1]===V&&(a=o);if(o>s&&f[a-1]!==void 0&&f[a-1]!==V)return A.left(r,s);r.setSelectionRange(a,a,"forward")},leftReverse(r,a){const s=T(r.value.length);let o=Math.max(0,a-1);for(;o>=0;o--)if(s[o-1]===V){a=o;break}else if(s[o]===V&&(a=o,o===0))break;if(o<0&&s[a]!==void 0&&s[a]!==V)return A.rightReverse(r,0);a>=0&&r.setSelectionRange(a,a,"backward")},rightReverse(r,a){const s=r.value.length,o=T(s),g=o.slice(0,a+1).indexOf(V)===-1;let v=Math.min(s,a+1);for(;v<=s;v++)if(o[v-1]===V){a=v,a>0&&g===!0&&a--;break}if(v>s&&o[a-1]!==void 0&&o[a-1]!==V)return A.leftReverse(r,s);r.setSelectionRange(a,a,"forward")}};function H(r){t("click",r),R=void 0}function z(r){if(t("keydown",r),Ae(r)===!0)return;const a=i.value,s=a.selectionStart,o=a.selectionEnd;if(r.shiftKey||(R=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&R===void 0&&(R=a.selectionDirection==="forward"?s:o);const g=A[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),g(a,R===s?o:s),r.shiftKey){const v=a.selectionStart;a.setSelectionRange(Math.min(R,v),Math.max(R,v),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&s===o?(A.left(a,s),a.setSelectionRange(a.selectionStart,o,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&s===o&&(A.rightReverse(a,o),a.setSelectionRange(s,a.selectionEnd,"forward"))}function j(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return S(r);const a=c;let s=0,o="";for(let g=0;g<a.length;g++){const v=r[s],M=a[g];if(typeof M=="string")o+=M,v===M&&s++;else if(v!==void 0&&M.regex.test(v))o+=M.transform!==void 0?M.transform(v):v,s++;else return o}return o}function S(r){const a=c,s=f.indexOf(V);let o=r.length-1,g="";for(let v=a.length-1;v>=0&&o>-1;v--){const M=a[v];let m=r[o];if(typeof M=="string")g=M+g,m===M&&o--;else if(m!==void 0&&M.regex.test(m))do g=(M.transform!==void 0?M.transform(m):m)+g,o--,m=r[o];while(s===v&&m!==void 0&&M.regex.test(m));else return g}return g}function w(r){return typeof r!="string"||x===void 0?typeof r=="number"?x(""+r):r:x(r)}function E(r){return d.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?d.slice(0,-r.length)+r:r+d.slice(r.length)}return{innerValue:b,hasMask:C,moveCursorForPaste:P,updateMaskValue:O,onMaskedKeydown:z,onMaskedClick:H}}const He={name:String};function at(e={}){return(t,u,i)=>{t[u](y("input",{class:"hidden"+(i||""),...e.value}))}}function Qe(e){return k(()=>e.name||e.for)}function Ye(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?k(()=>{if(e.type==="file")return u()}):k(u)}const We=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ge=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Je=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Xe=/[a-z0-9_ -]$/i;function et(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ve.is.firefox===!0?Xe.test(u.data)===!1:We.test(u.data)===!0||Ge.test(u.data)===!0||Je.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var ot=Fe({name:"QInput",inheritAttrs:!1,props:{...je,...Ke,...He,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ze,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=G(),{$q:f}=i,d={};let c=NaN,x,B,R=null,C;const b=I(null),U=Qe(e),{innerValue:_,hasMask:T,moveCursorForPaste:N,updateMaskValue:O,onMaskedKeydown:P,onMaskedClick:A}=Ue(e,t,m,b),H=Ye(e,!0),z=k(()=>oe(_.value)),j=et(v),S=Ne(),w=k(()=>e.type==="textarea"||e.autogrow===!0),E=k(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),r=k(()=>{const n={...S.splitAttrs.listeners.value,onInput:v,onPaste:g,onChange:h,onBlur:Z,onFocus:ie};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=j,T.value===!0&&(n.onKeydown=P,n.onClick=A),e.autogrow===!0&&(n.onAnimationend=M),n}),a=k(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});D(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),D(()=>e.modelValue,n=>{if(T.value===!0){if(B===!0&&(B=!1,String(n)===c))return;O(n)}else _.value!==n&&(_.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Q(l)}),D(()=>e.autogrow,n=>{n===!0?Q(l):b.value!==null&&u.rows>0&&(b.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&Q(l)});function s(){he(()=>{const n=document.activeElement;b.value!==null&&b.value!==n&&(n===null||n.id!==S.targetUid.value)&&b.value.focus({preventScroll:!0})})}function o(){b.value!==null&&b.value.select()}function g(n){if(T.value===!0&&e.reverseFillMask!==!0){const q=n.target;N(q,q.selectionStart,q.selectionEnd)}t("paste",n)}function v(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const q=n.target.value;if(n.target.qComposing===!0){d.value=q;return}if(T.value===!0)O(q,!1,n.inputType);else if(m(q),E.value===!0&&n.target===document.activeElement){const{selectionStart:K,selectionEnd:L}=n.target;K!==void 0&&L!==void 0&&Q(()=>{n.target===document.activeElement&&q.indexOf(n.target.value)===0&&n.target.setSelectionRange(K,L)})}e.autogrow===!0&&l()}function M(n){t("animationend",n),l()}function m(n,q){C=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,q===!0&&(B=!0),t("update:modelValue",n),Q(()=>{c===n&&(c=NaN)})),C=void 0},e.type==="number"&&(x=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(C,e.debounce)):C()}function l(){requestAnimationFrame(()=>{const n=b.value;if(n!==null){const q=n.parentNode.style,{scrollTop:K}=n,{overflowY:L,maxHeight:$}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),Y=L!==void 0&&L!=="scroll";Y===!0&&(n.style.overflowY="hidden"),q.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",Y===!0&&(n.style.overflowY=parseInt($,10)<n.scrollHeight?"auto":"hidden"),q.marginBottom="",n.scrollTop=K}})}function h(n){j(n),R!==null&&(clearTimeout(R),R=null),C!==void 0&&C(),t("change",n.target.value)}function Z(n){n!==void 0&&ie(n),R!==null&&(clearTimeout(R),R=null),C!==void 0&&C(),x=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=_.value!==void 0?_.value:"")})}function p(){return d.hasOwnProperty("value")===!0?d.value:_.value!==void 0?_.value:""}le(()=>{Z()}),re(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:_,fieldClass:k(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:k(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:m,hasValue:z,floatingLabel:k(()=>z.value===!0&&(e.type!=="number"||isNaN(_.value)===!1)||oe(e.displayValue)),getControl:()=>y(w.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...r.value,...e.type!=="file"?{value:p()}:H.value}),getShadowControl:()=>y("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[y("span",{class:"invisible"},p()),y("span",e.shadowText)])});const F=Le(S);return Object.assign(i,{focus:s,select:o,getNativeElement:()=>b.value}),me(i,"nativeEl",()=>b.value),F}});export{ot as Q,ze as a,Le as b,Ne as c,He as d,Qe as e,oe as f,et as g,at as h,je as u};
