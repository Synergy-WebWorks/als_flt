import{r as S,j as T}from"./app-BEIpjE_9.js";import{a as Me}from"./useTheme-D3VjtuXy.js";import{g as ke,c as Be,b as Pt,u as Te}from"./Popover-AePsHPTf.js";import{a as kt,u as Bt}from"./ButtonBase-CMaWoWiJ.js";import{e as $e,x as ee,y as Mt,z as Ie,p as We,A as Ne,c as pt,g as dt,B as re,a as At,d as Ve}from"./identifier-DC8dQNi0.js";import{e as He,c as vt,s as _,m as Wt,u as St}from"./DefaultPropsProvider-DDczCt9-.js";import{c as Ue}from"./listItemIconClasses-BkTFIRTK.js";import{u as Fe}from"./index-CXNu4jGY.js";import{a as oe}from"./ownerWindow-CO8Ksk3k.js";import{P as Ge}from"./Modal-Bn7jlowl.js";import{u as ze}from"./useSlotProps-CVSHEPsx.js";import{i as ne}from"./isHostComponent-DVu5iVWx.js";import{i as Xe}from"./isMuiElement-CxafOkj8.js";import{e as Ye}from"./extendSxProp-CAVQEEUm.js";const Qe=He();function qe(t,e,r,o,n){const[a,c]=S.useState(()=>n&&r?r(t).matches:o?o(t).matches:e);return kt(()=>{if(!r)return;const s=r(t),i=()=>{c(s.matches)};return i(),s.addEventListener("change",i),()=>{s.removeEventListener("change",i)}},[t,r]),a}const me=S.useSyncExternalStore;function Je(t,e,r,o,n){const a=S.useCallback(()=>e,[e]),c=S.useMemo(()=>{if(n&&r)return()=>r(t).matches;if(o!==null){const{matches:l}=o(t);return()=>l}return a},[a,t,o,n,r]),[s,i]=S.useMemo(()=>{if(r===null)return[a,()=>()=>{}];const l=r(t);return[()=>l.matches,d=>(l.addEventListener("change",d),()=>{l.removeEventListener("change",d)})]},[a,r,t]);return me(i,s,c)}function zo(t,e={}){const r=Me(),o=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:n=!1,matchMedia:a=o?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:s=!1}=ke({name:"MuiUseMediaQuery",props:e,theme:r});let i=typeof t=="function"?t(r):t;return i=i.replace(/^@media( ?)/m,""),(me!==void 0?Je:qe)(i,n,a,c,s)}const Ke=$e(),Ze=Qe("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function _e(t){return Be({props:t,name:"MuiStack",defaultTheme:Ke})}function tr(t,e){const r=S.Children.toArray(t).filter(Boolean);return r.reduce((o,n,a)=>(o.push(n),a<r.length-1&&o.push(S.cloneElement(e,{key:`separator-${a}`})),o),[])}const er=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],rr=({ownerState:t,theme:e})=>{let r={display:"flex",flexDirection:"column",...ee({theme:e},Mt({values:t.direction,breakpoints:e.breakpoints.values}),o=>({flexDirection:o}))};if(t.spacing){const o=Ie(e),n=Object.keys(e.breakpoints.values).reduce((i,p)=>((typeof t.spacing=="object"&&t.spacing[p]!=null||typeof t.direction=="object"&&t.direction[p]!=null)&&(i[p]=!0),i),{}),a=Mt({values:t.direction,base:n}),c=Mt({values:t.spacing,base:n});typeof a=="object"&&Object.keys(a).forEach((i,p,l)=>{if(!a[i]){const g=p>0?a[l[p-1]]:"column";a[i]=g}}),r=We(r,ee({theme:e},c,(i,p)=>t.useFlexGap?{gap:re(o,i)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${er(p?a[p]:t.direction)}`]:re(o,i)}}))}return r=Ne(e.breakpoints,r),r};function or(t={}){const{createStyledComponent:e=Ze,useThemeProps:r=_e,componentName:o="MuiStack"}=t,n=()=>vt({root:["root"]},i=>dt(o,i),{}),a=e(rr);return S.forwardRef(function(i,p){const l=r(i),d=Ye(l),{component:g="div",direction:f="column",spacing:b=0,divider:v,children:m,className:x,useFlexGap:P=!1,...w}=d,u={direction:f,spacing:b,useFlexGap:P},h=n();return T.jsx(a,{as:g,ownerState:u,ref:p,className:pt(h.root,x),...w,children:v?tr(m,v):m})})}function Xo(t){return dt("MuiListItemButton",t)}const nr=At("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),ir=t=>{const{absolute:e,children:r,classes:o,flexItem:n,light:a,orientation:c,textAlign:s,variant:i}=t;return vt({root:["root",e&&"absolute",i,a&&"light",c==="vertical"&&"vertical",n&&"flexItem",r&&"withChildren",r&&c==="vertical"&&"withChildrenVertical",s==="right"&&c!=="vertical"&&"textAlignRight",s==="left"&&c!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",c==="vertical"&&"wrapperVertical"]},Ue,o)},ar=_("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,r.orientation==="vertical"&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&r.orientation==="vertical"&&e.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&e.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&e.textAlignLeft]}})(Wt(({theme:t})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:Ve(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:e})=>!!e.children,style:{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:e})=>e.children&&e.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:e})=>e.orientation==="vertical"&&e.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:e})=>e.textAlign==="right"&&e.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:e})=>e.textAlign==="left"&&e.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),sr=_("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,r.orientation==="vertical"&&e.wrapperVertical]}})(Wt(({theme:t})=>({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}}]}))),ie=S.forwardRef(function(e,r){const o=St({props:e,name:"MuiDivider"}),{absolute:n=!1,children:a,className:c,orientation:s="horizontal",component:i=a||s==="vertical"?"div":"hr",flexItem:p=!1,light:l=!1,role:d=i!=="hr"?"separator":void 0,textAlign:g="center",variant:f="fullWidth",...b}=o,v={...o,absolute:n,component:i,flexItem:p,light:l,orientation:s,role:d,textAlign:g,variant:f},m=ir(v);return T.jsx(ar,{as:i,className:pt(m.root,c),role:d,ref:r,ownerState:v,"aria-orientation":d==="separator"&&(i!=="hr"||s==="vertical")?s:void 0,...b,children:a?T.jsx(sr,{className:m.wrapper,ownerState:v,children:a}):null})});ie&&(ie.muiSkipListHighlight=!0);var $="top",V="bottom",H="right",I="left",Nt="auto",mt=[$,V,H,I],et="start",ft="end",lr="clippingParents",he="viewport",st="popper",cr="reference",ae=mt.reduce(function(t,e){return t.concat([e+"-"+et,e+"-"+ft])},[]),ge=[].concat(mt,[Nt]).reduce(function(t,e){return t.concat([e,e+"-"+et,e+"-"+ft])},[]),pr="beforeRead",fr="read",ur="afterRead",dr="beforeMain",vr="main",mr="afterMain",hr="beforeWrite",gr="write",yr="afterWrite",br=[pr,fr,ur,dr,vr,mr,hr,gr,yr];function F(t){return t?(t.nodeName||"").toLowerCase():null}function W(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Z(t){var e=W(t).Element;return t instanceof e||t instanceof Element}function N(t){var e=W(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Vt(t){if(typeof ShadowRoot>"u")return!1;var e=W(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function xr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},n=e.attributes[r]||{},a=e.elements[r];!N(a)||!F(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(c){var s=n[c];s===!1?a.removeAttribute(c):a.setAttribute(c,s===!0?"":s)}))})}function wr(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var n=e.elements[o],a=e.attributes[o]||{},c=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),s=c.reduce(function(i,p){return i[p]="",i},{});!N(n)||!F(n)||(Object.assign(n.style,s),Object.keys(a).forEach(function(i){n.removeAttribute(i)}))})}}const Pr={name:"applyStyles",enabled:!0,phase:"write",fn:xr,effect:wr,requires:["computeStyles"]};function U(t){return t.split("-")[0]}var K=Math.max,Rt=Math.min,rt=Math.round;function Tt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function ye(){return!/^((?!chrome|android).)*safari/i.test(Tt())}function ot(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=t.getBoundingClientRect(),n=1,a=1;e&&N(t)&&(n=t.offsetWidth>0&&rt(o.width)/t.offsetWidth||1,a=t.offsetHeight>0&&rt(o.height)/t.offsetHeight||1);var c=Z(t)?W(t):window,s=c.visualViewport,i=!ye()&&r,p=(o.left+(i&&s?s.offsetLeft:0))/n,l=(o.top+(i&&s?s.offsetTop:0))/a,d=o.width/n,g=o.height/a;return{width:d,height:g,top:l,right:p+d,bottom:l+g,left:p,x:p,y:l}}function Ht(t){var e=ot(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function be(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Vt(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function G(t){return W(t).getComputedStyle(t)}function Or(t){return["table","td","th"].indexOf(F(t))>=0}function Y(t){return((Z(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ct(t){return F(t)==="html"?t:t.assignedSlot||t.parentNode||(Vt(t)?t.host:null)||Y(t)}function se(t){return!N(t)||G(t).position==="fixed"?null:t.offsetParent}function Rr(t){var e=/firefox/i.test(Tt()),r=/Trident/i.test(Tt());if(r&&N(t)){var o=G(t);if(o.position==="fixed")return null}var n=Ct(t);for(Vt(n)&&(n=n.host);N(n)&&["html","body"].indexOf(F(n))<0;){var a=G(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function ht(t){for(var e=W(t),r=se(t);r&&Or(r)&&G(r).position==="static";)r=se(r);return r&&(F(r)==="html"||F(r)==="body"&&G(r).position==="static")?e:r||Rr(t)||e}function Ut(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function lt(t,e,r){return K(t,Rt(e,r))}function Ar(t,e,r){var o=lt(t,e,r);return o>r?r:o}function xe(){return{top:0,right:0,bottom:0,left:0}}function we(t){return Object.assign({},xe(),t)}function Pe(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}var Sr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,we(typeof e!="number"?e:Pe(e,mt))};function Cr(t){var e,r=t.state,o=t.name,n=t.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,s=U(r.placement),i=Ut(s),p=[I,H].indexOf(s)>=0,l=p?"height":"width";if(!(!a||!c)){var d=Sr(n.padding,r),g=Ht(a),f=i==="y"?$:I,b=i==="y"?V:H,v=r.rects.reference[l]+r.rects.reference[i]-c[i]-r.rects.popper[l],m=c[i]-r.rects.reference[i],x=ht(a),P=x?i==="y"?x.clientHeight||0:x.clientWidth||0:0,w=v/2-m/2,u=d[f],h=P-g[l]-d[b],y=P/2-g[l]/2+w,O=lt(u,y,h),A=i;r.modifiersData[o]=(e={},e[A]=O,e.centerOffset=O-y,e)}}function Er(t){var e=t.state,r=t.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||be(e.elements.popper,n)&&(e.elements.arrow=n))}const Lr={name:"arrow",enabled:!0,phase:"main",fn:Cr,effect:Er,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function nt(t){return t.split("-")[1]}var Dr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function jr(t,e){var r=t.x,o=t.y,n=e.devicePixelRatio||1;return{x:rt(r*n)/n||0,y:rt(o*n)/n||0}}function le(t){var e,r=t.popper,o=t.popperRect,n=t.placement,a=t.variation,c=t.offsets,s=t.position,i=t.gpuAcceleration,p=t.adaptive,l=t.roundOffsets,d=t.isFixed,g=c.x,f=g===void 0?0:g,b=c.y,v=b===void 0?0:b,m=typeof l=="function"?l({x:f,y:v}):{x:f,y:v};f=m.x,v=m.y;var x=c.hasOwnProperty("x"),P=c.hasOwnProperty("y"),w=I,u=$,h=window;if(p){var y=ht(r),O="clientHeight",A="clientWidth";if(y===W(r)&&(y=Y(r),G(y).position!=="static"&&s==="absolute"&&(O="scrollHeight",A="scrollWidth")),y=y,n===$||(n===I||n===H)&&a===ft){u=V;var C=d&&y===h&&h.visualViewport?h.visualViewport.height:y[O];v-=C-o.height,v*=i?1:-1}if(n===I||(n===$||n===V)&&a===ft){w=H;var R=d&&y===h&&h.visualViewport?h.visualViewport.width:y[A];f-=R-o.width,f*=i?1:-1}}var D=Object.assign({position:s},p&&Dr),j=l===!0?jr({x:f,y:v},W(r)):{x:f,y:v};if(f=j.x,v=j.y,i){var L;return Object.assign({},D,(L={},L[u]=P?"0":"",L[w]=x?"0":"",L.transform=(h.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",L))}return Object.assign({},D,(e={},e[u]=P?v+"px":"",e[w]=x?f+"px":"",e.transform="",e))}function Mr(t){var e=t.state,r=t.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,c=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,p={placement:U(e.placement),variation:nt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,le(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:i})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,le(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const kr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Mr,data:{}};var wt={passive:!0};function Br(t){var e=t.state,r=t.instance,o=t.options,n=o.scroll,a=n===void 0?!0:n,c=o.resize,s=c===void 0?!0:c,i=W(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&p.forEach(function(l){l.addEventListener("scroll",r.update,wt)}),s&&i.addEventListener("resize",r.update,wt),function(){a&&p.forEach(function(l){l.removeEventListener("scroll",r.update,wt)}),s&&i.removeEventListener("resize",r.update,wt)}}const Tr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Br,data:{}};var $r={left:"right",right:"left",bottom:"top",top:"bottom"};function Ot(t){return t.replace(/left|right|bottom|top/g,function(e){return $r[e]})}var Ir={start:"end",end:"start"};function ce(t){return t.replace(/start|end/g,function(e){return Ir[e]})}function Ft(t){var e=W(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Gt(t){return ot(Y(t)).left+Ft(t).scrollLeft}function Wr(t,e){var r=W(t),o=Y(t),n=r.visualViewport,a=o.clientWidth,c=o.clientHeight,s=0,i=0;if(n){a=n.width,c=n.height;var p=ye();(p||!p&&e==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:a,height:c,x:s+Gt(t),y:i}}function Nr(t){var e,r=Y(t),o=Ft(t),n=(e=t.ownerDocument)==null?void 0:e.body,a=K(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),c=K(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+Gt(t),i=-o.scrollTop;return G(n||r).direction==="rtl"&&(s+=K(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:c,x:s,y:i}}function zt(t){var e=G(t),r=e.overflow,o=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function Oe(t){return["html","body","#document"].indexOf(F(t))>=0?t.ownerDocument.body:N(t)&&zt(t)?t:Oe(Ct(t))}function ct(t,e){var r;e===void 0&&(e=[]);var o=Oe(t),n=o===((r=t.ownerDocument)==null?void 0:r.body),a=W(o),c=n?[a].concat(a.visualViewport||[],zt(o)?o:[]):o,s=e.concat(c);return n?s:s.concat(ct(Ct(c)))}function $t(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Vr(t,e){var r=ot(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function pe(t,e,r){return e===he?$t(Wr(t,r)):Z(e)?Vr(e,r):$t(Nr(Y(t)))}function Hr(t){var e=ct(Ct(t)),r=["absolute","fixed"].indexOf(G(t).position)>=0,o=r&&N(t)?ht(t):t;return Z(o)?e.filter(function(n){return Z(n)&&be(n,o)&&F(n)!=="body"}):[]}function Ur(t,e,r,o){var n=e==="clippingParents"?Hr(t):[].concat(e),a=[].concat(n,[r]),c=a[0],s=a.reduce(function(i,p){var l=pe(t,p,o);return i.top=K(l.top,i.top),i.right=Rt(l.right,i.right),i.bottom=Rt(l.bottom,i.bottom),i.left=K(l.left,i.left),i},pe(t,c,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Re(t){var e=t.reference,r=t.element,o=t.placement,n=o?U(o):null,a=o?nt(o):null,c=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,i;switch(n){case $:i={x:c,y:e.y-r.height};break;case V:i={x:c,y:e.y+e.height};break;case H:i={x:e.x+e.width,y:s};break;case I:i={x:e.x-r.width,y:s};break;default:i={x:e.x,y:e.y}}var p=n?Ut(n):null;if(p!=null){var l=p==="y"?"height":"width";switch(a){case et:i[p]=i[p]-(e[l]/2-r[l]/2);break;case ft:i[p]=i[p]+(e[l]/2-r[l]/2);break}}return i}function ut(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=o===void 0?t.placement:o,a=r.strategy,c=a===void 0?t.strategy:a,s=r.boundary,i=s===void 0?lr:s,p=r.rootBoundary,l=p===void 0?he:p,d=r.elementContext,g=d===void 0?st:d,f=r.altBoundary,b=f===void 0?!1:f,v=r.padding,m=v===void 0?0:v,x=we(typeof m!="number"?m:Pe(m,mt)),P=g===st?cr:st,w=t.rects.popper,u=t.elements[b?P:g],h=Ur(Z(u)?u:u.contextElement||Y(t.elements.popper),i,l,c),y=ot(t.elements.reference),O=Re({reference:y,element:w,strategy:"absolute",placement:n}),A=$t(Object.assign({},w,O)),C=g===st?A:y,R={top:h.top-C.top+x.top,bottom:C.bottom-h.bottom+x.bottom,left:h.left-C.left+x.left,right:C.right-h.right+x.right},D=t.modifiersData.offset;if(g===st&&D){var j=D[n];Object.keys(R).forEach(function(L){var M=[H,V].indexOf(L)>=0?1:-1,k=[$,V].indexOf(L)>=0?"y":"x";R[L]+=j[k]*M})}return R}function Fr(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=r.boundary,a=r.rootBoundary,c=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,p=i===void 0?ge:i,l=nt(o),d=l?s?ae:ae.filter(function(b){return nt(b)===l}):mt,g=d.filter(function(b){return p.indexOf(b)>=0});g.length===0&&(g=d);var f=g.reduce(function(b,v){return b[v]=ut(t,{placement:v,boundary:n,rootBoundary:a,padding:c})[U(v)],b},{});return Object.keys(f).sort(function(b,v){return f[b]-f[v]})}function Gr(t){if(U(t)===Nt)return[];var e=Ot(t);return[ce(t),e,ce(e)]}function zr(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,c=r.altAxis,s=c===void 0?!0:c,i=r.fallbackPlacements,p=r.padding,l=r.boundary,d=r.rootBoundary,g=r.altBoundary,f=r.flipVariations,b=f===void 0?!0:f,v=r.allowedAutoPlacements,m=e.options.placement,x=U(m),P=x===m,w=i||(P||!b?[Ot(m)]:Gr(m)),u=[m].concat(w).reduce(function(tt,X){return tt.concat(U(X)===Nt?Fr(e,{placement:X,boundary:l,rootBoundary:d,padding:p,flipVariations:b,allowedAutoPlacements:v}):X)},[]),h=e.rects.reference,y=e.rects.popper,O=new Map,A=!0,C=u[0],R=0;R<u.length;R++){var D=u[R],j=U(D),L=nt(D)===et,M=[$,V].indexOf(j)>=0,k=M?"width":"height",E=ut(e,{placement:D,boundary:l,rootBoundary:d,altBoundary:g,padding:p}),B=M?L?H:I:L?V:$;h[k]>y[k]&&(B=Ot(B));var z=Ot(B),Q=[];if(a&&Q.push(E[j]<=0),s&&Q.push(E[B]<=0,E[z]<=0),Q.every(function(tt){return tt})){C=D,A=!1;break}O.set(D,Q)}if(A)for(var gt=b?3:1,Et=function(X){var at=u.find(function(bt){var q=O.get(bt);if(q)return q.slice(0,X).every(function(Lt){return Lt})});if(at)return C=at,"break"},it=gt;it>0;it--){var yt=Et(it);if(yt==="break")break}e.placement!==C&&(e.modifiersData[o]._skip=!0,e.placement=C,e.reset=!0)}}const Xr={name:"flip",enabled:!0,phase:"main",fn:zr,requiresIfExists:["offset"],data:{_skip:!1}};function fe(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function ue(t){return[$,H,V,I].some(function(e){return t[e]>=0})}function Yr(t){var e=t.state,r=t.name,o=e.rects.reference,n=e.rects.popper,a=e.modifiersData.preventOverflow,c=ut(e,{elementContext:"reference"}),s=ut(e,{altBoundary:!0}),i=fe(c,o),p=fe(s,n,a),l=ue(i),d=ue(p);e.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}const Qr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Yr};function qr(t,e,r){var o=U(t),n=[I,$].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,c=a[0],s=a[1];return c=c||0,s=(s||0)*n,[I,H].indexOf(o)>=0?{x:s,y:c}:{x:c,y:s}}function Jr(t){var e=t.state,r=t.options,o=t.name,n=r.offset,a=n===void 0?[0,0]:n,c=ge.reduce(function(l,d){return l[d]=qr(d,e.rects,a),l},{}),s=c[e.placement],i=s.x,p=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=p),e.modifiersData[o]=c}const Kr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Jr};function Zr(t){var e=t.state,r=t.name;e.modifiersData[r]=Re({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const _r={name:"popperOffsets",enabled:!0,phase:"read",fn:Zr,data:{}};function to(t){return t==="x"?"y":"x"}function eo(t){var e=t.state,r=t.options,o=t.name,n=r.mainAxis,a=n===void 0?!0:n,c=r.altAxis,s=c===void 0?!1:c,i=r.boundary,p=r.rootBoundary,l=r.altBoundary,d=r.padding,g=r.tether,f=g===void 0?!0:g,b=r.tetherOffset,v=b===void 0?0:b,m=ut(e,{boundary:i,rootBoundary:p,padding:d,altBoundary:l}),x=U(e.placement),P=nt(e.placement),w=!P,u=Ut(x),h=to(u),y=e.modifiersData.popperOffsets,O=e.rects.reference,A=e.rects.popper,C=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,R=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(y){if(a){var L,M=u==="y"?$:I,k=u==="y"?V:H,E=u==="y"?"height":"width",B=y[u],z=B+m[M],Q=B-m[k],gt=f?-A[E]/2:0,Et=P===et?O[E]:A[E],it=P===et?-A[E]:-O[E],yt=e.elements.arrow,tt=f&&yt?Ht(yt):{width:0,height:0},X=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:xe(),at=X[M],bt=X[k],q=lt(0,O[E],tt[E]),Lt=w?O[E]/2-gt-q-at-R.mainAxis:Et-q-at-R.mainAxis,Se=w?-O[E]/2+gt+q+bt+R.mainAxis:it+q+bt+R.mainAxis,Dt=e.elements.arrow&&ht(e.elements.arrow),Ce=Dt?u==="y"?Dt.clientTop||0:Dt.clientLeft||0:0,Xt=(L=D==null?void 0:D[u])!=null?L:0,Ee=B+Lt-Xt-Ce,Le=B+Se-Xt,Yt=lt(f?Rt(z,Ee):z,B,f?K(Q,Le):Q);y[u]=Yt,j[u]=Yt-B}if(s){var Qt,De=u==="x"?$:I,je=u==="x"?V:H,J=y[h],xt=h==="y"?"height":"width",qt=J+m[De],Jt=J-m[je],jt=[$,I].indexOf(x)!==-1,Kt=(Qt=D==null?void 0:D[h])!=null?Qt:0,Zt=jt?qt:J-O[xt]-A[xt]-Kt+R.altAxis,_t=jt?J+O[xt]+A[xt]-Kt-R.altAxis:Jt,te=f&&jt?Ar(Zt,J,_t):lt(f?Zt:qt,J,f?_t:Jt);y[h]=te,j[h]=te-J}e.modifiersData[o]=j}}const ro={name:"preventOverflow",enabled:!0,phase:"main",fn:eo,requiresIfExists:["offset"]};function oo(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function no(t){return t===W(t)||!N(t)?Ft(t):oo(t)}function io(t){var e=t.getBoundingClientRect(),r=rt(e.width)/t.offsetWidth||1,o=rt(e.height)/t.offsetHeight||1;return r!==1||o!==1}function ao(t,e,r){r===void 0&&(r=!1);var o=N(e),n=N(e)&&io(e),a=Y(e),c=ot(t,n,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!r)&&((F(e)!=="body"||zt(a))&&(s=no(e)),N(e)?(i=ot(e,!0),i.x+=e.clientLeft,i.y+=e.clientTop):a&&(i.x=Gt(a))),{x:c.left+s.scrollLeft-i.x,y:c.top+s.scrollTop-i.y,width:c.width,height:c.height}}function so(t){var e=new Map,r=new Set,o=[];t.forEach(function(a){e.set(a.name,a)});function n(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(s){if(!r.has(s)){var i=e.get(s);i&&n(i)}}),o.push(a)}return t.forEach(function(a){r.has(a.name)||n(a)}),o}function lo(t){var e=so(t);return br.reduce(function(r,o){return r.concat(e.filter(function(n){return n.phase===o}))},[])}function co(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function po(t){var e=t.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var de={placement:"bottom",modifiers:[],strategy:"absolute"};function ve(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function fo(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,n=e.defaultOptions,a=n===void 0?de:n;return function(s,i,p){p===void 0&&(p=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},de,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},d=[],g=!1,f={state:l,setOptions:function(x){var P=typeof x=="function"?x(l.options):x;v(),l.options=Object.assign({},a,l.options,P),l.scrollParents={reference:Z(s)?ct(s):s.contextElement?ct(s.contextElement):[],popper:ct(i)};var w=lo(po([].concat(o,l.options.modifiers)));return l.orderedModifiers=w.filter(function(u){return u.enabled}),b(),f.update()},forceUpdate:function(){if(!g){var x=l.elements,P=x.reference,w=x.popper;if(ve(P,w)){l.rects={reference:ao(P,ht(w),l.options.strategy==="fixed"),popper:Ht(w)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var u=0;u<l.orderedModifiers.length;u++){if(l.reset===!0){l.reset=!1,u=-1;continue}var h=l.orderedModifiers[u],y=h.fn,O=h.options,A=O===void 0?{}:O,C=h.name;typeof y=="function"&&(l=y({state:l,options:A,name:C,instance:f})||l)}}}},update:co(function(){return new Promise(function(m){f.forceUpdate(),m(l)})}),destroy:function(){v(),g=!0}};if(!ve(s,i))return f;f.setOptions(p).then(function(m){!g&&p.onFirstUpdate&&p.onFirstUpdate(m)});function b(){l.orderedModifiers.forEach(function(m){var x=m.name,P=m.options,w=P===void 0?{}:P,u=m.effect;if(typeof u=="function"){var h=u({state:l,name:x,instance:f,options:w}),y=function(){};d.push(h||y)}})}function v(){d.forEach(function(m){return m()}),d=[]}return f}}var uo=[Tr,_r,kr,Pr,Kr,Xr,ro,Lr,Qr],vo=fo({defaultModifiers:uo});function mo(t){return dt("MuiPopper",t)}At("MuiPopper",["root"]);function ho(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function It(t){return typeof t=="function"?t():t}function go(t){return t.nodeType!==void 0}const yo=t=>{const{classes:e}=t;return vt({root:["root"]},mo,e)},bo={},xo=S.forwardRef(function(e,r){const{anchorEl:o,children:n,direction:a,disablePortal:c,modifiers:s,open:i,placement:p,popperOptions:l,popperRef:d,slotProps:g={},slots:f={},TransitionProps:b,ownerState:v,...m}=e,x=S.useRef(null),P=Bt(x,r),w=S.useRef(null),u=Bt(w,d),h=S.useRef(u);kt(()=>{h.current=u},[u]),S.useImperativeHandle(d,()=>w.current,[]);const y=ho(p,a),[O,A]=S.useState(y),[C,R]=S.useState(It(o));S.useEffect(()=>{w.current&&w.current.forceUpdate()}),S.useEffect(()=>{o&&R(It(o))},[o]),kt(()=>{if(!C||!i)return;const k=z=>{A(z.placement)};let E=[{name:"preventOverflow",options:{altBoundary:c}},{name:"flip",options:{altBoundary:c}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:z})=>{k(z)}}];s!=null&&(E=E.concat(s)),l&&l.modifiers!=null&&(E=E.concat(l.modifiers));const B=vo(C,x.current,{placement:y,...l,modifiers:E});return h.current(B),()=>{B.destroy(),h.current(null)}},[C,c,s,i,l,y]);const D={placement:O};b!==null&&(D.TransitionProps=b);const j=yo(e),L=f.root??"div",M=ze({elementType:L,externalSlotProps:g.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:P},ownerState:e,className:j.root});return T.jsx(L,{...M,children:typeof n=="function"?n(D):n})}),wo=S.forwardRef(function(e,r){const{anchorEl:o,children:n,container:a,direction:c="ltr",disablePortal:s=!1,keepMounted:i=!1,modifiers:p,open:l,placement:d="bottom",popperOptions:g=bo,popperRef:f,style:b,transition:v=!1,slotProps:m={},slots:x={},...P}=e,[w,u]=S.useState(!0),h=()=>{u(!1)},y=()=>{u(!0)};if(!i&&!l&&(!v||w))return null;let O;if(a)O=a;else if(o){const R=It(o);O=R&&go(R)?oe(R).body:oe(null).body}const A=!l&&i&&(!v||w)?"none":void 0,C=v?{in:l,onEnter:h,onExited:y}:void 0;return T.jsx(Ge,{disablePortal:s,container:O,children:T.jsx(xo,{anchorEl:o,direction:c,disablePortal:s,modifiers:p,ref:r,open:v?!w:l,placement:d,popperOptions:g,popperRef:f,slotProps:m,slots:x,...P,style:{position:"fixed",top:0,left:0,display:A,...b},TransitionProps:C,children:n})})}),Po=_(wo,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Yo=S.forwardRef(function(e,r){const o=Fe(),n=St({props:e,name:"MuiPopper"}),{anchorEl:a,component:c,components:s,componentsProps:i,container:p,disablePortal:l,keepMounted:d,modifiers:g,open:f,placement:b,popperOptions:v,popperRef:m,transition:x,slots:P,slotProps:w,...u}=n,h=(P==null?void 0:P.root)??(s==null?void 0:s.Root),y={anchorEl:a,container:p,disablePortal:l,keepMounted:d,modifiers:g,open:f,placement:b,popperOptions:v,popperRef:m,transition:x,...u};return T.jsx(Po,{as:c,direction:o?"rtl":"ltr",slots:{root:h},slotProps:w??i,...y,ref:r})});function Oo(t){return dt("MuiListItem",t)}At("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function Ro(t){return dt("MuiListItemSecondaryAction",t)}At("MuiListItemSecondaryAction",["root","disableGutters"]);const Ao=t=>{const{disableGutters:e,classes:r}=t;return vt({root:["root",e&&"disableGutters"]},Ro,r)},So=_("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.disableGutters&&e.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),Ae=S.forwardRef(function(e,r){const o=St({props:e,name:"MuiListItemSecondaryAction"}),{className:n,...a}=o,c=S.useContext(Pt),s={...o,disableGutters:c.disableGutters},i=Ao(s);return T.jsx(So,{className:pt(i.root,n),ownerState:s,ref:r,...a})});Ae.muiName="ListItemSecondaryAction";const Co=(t,e)=>{const{ownerState:r}=t;return[e.root,r.dense&&e.dense,r.alignItems==="flex-start"&&e.alignItemsFlexStart,r.divider&&e.divider,!r.disableGutters&&e.gutters,!r.disablePadding&&e.padding,r.hasSecondaryAction&&e.secondaryAction]},Eo=t=>{const{alignItems:e,classes:r,dense:o,disableGutters:n,disablePadding:a,divider:c,hasSecondaryAction:s}=t;return vt({root:["root",o&&"dense",!n&&"gutters",!a&&"padding",c&&"divider",e==="flex-start"&&"alignItemsFlexStart",s&&"secondaryAction"],container:["container"]},Oo,r)},Lo=_("div",{name:"MuiListItem",slot:"Root",overridesResolver:Co})(Wt(({theme:t})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${nr.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]}))),Do=_("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Qo=S.forwardRef(function(e,r){const o=St({props:e,name:"MuiListItem"}),{alignItems:n="center",children:a,className:c,component:s,components:i={},componentsProps:p={},ContainerComponent:l="li",ContainerProps:{className:d,...g}={},dense:f=!1,disableGutters:b=!1,disablePadding:v=!1,divider:m=!1,secondaryAction:x,slotProps:P={},slots:w={},...u}=o,h=S.useContext(Pt),y=S.useMemo(()=>({dense:f||h.dense||!1,alignItems:n,disableGutters:b}),[n,h.dense,f,b]),O=S.useRef(null),A=S.Children.toArray(a),C=A.length&&Xe(A[A.length-1],["ListItemSecondaryAction"]),R={...o,alignItems:n,dense:y.dense,disableGutters:b,disablePadding:v,divider:m,hasSecondaryAction:C},D=Eo(R),j=Bt(O,r),L=w.root||i.Root||Lo,M=P.root||p.root||{},k={className:pt(D.root,M.className,c),...u};let E=s||"li";return C?(E=!k.component&&!s?"div":E,l==="li"&&(E==="li"?E="div":k.component==="li"&&(k.component="div")),T.jsx(Pt.Provider,{value:y,children:T.jsxs(Do,{as:l,className:pt(D.container,d),ref:j,ownerState:R,...g,children:[T.jsx(L,{...M,...!ne(L)&&{as:E,ownerState:{...R,...M.ownerState}},...k,children:A}),A.pop()]})})):T.jsx(Pt.Provider,{value:y,children:T.jsxs(L,{...M,as:E,ref:j,...!ne(L)&&{ownerState:{...R,...M.ownerState}},...k,children:[A,x&&T.jsx(Ae,{children:x})]})})}),qo=or({createStyledComponent:_("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>Te({props:t,name:"MuiStack"})});export{ie as D,Qo as L,Yo as P,qo as S,Xo as g,nr as l,zo as u};