import{r as v,j as m}from"./app-BEIpjE_9.js";import{a as C,g as L,c as x,b as q}from"./identifier-DC8dQNi0.js";import{u as g,f as k}from"./utils-CeLxCNIY.js";import{s as f,m as b,u as R,c as j}from"./DefaultPropsProvider-DDczCt9-.js";import{c as M}from"./createSimplePaletteValueFilter-bm0fmN_7.js";function $(r){return L("MuiFormLabel",r)}const t=C("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),S=r=>{const{classes:e,color:i,focused:s,disabled:c,error:a,filled:n,required:l}=r,p={root:["root",`color${q(i)}`,c&&"disabled",a&&"error",n&&"filled",s&&"focused",l&&"required"],asterisk:["asterisk",a&&"error"]};return j(p,$,e)},U=f("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:r},e)=>({...e.root,...r.color==="secondary"&&e.colorSecondary,...r.filled&&e.filled})})(b(({theme:r})=>({color:(r.vars||r).palette.text.secondary,...r.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",variants:[...Object.entries(r.palette).filter(M()).map(([e])=>({props:{color:e},style:{[`&.${t.focused}`]:{color:(r.vars||r).palette[e].main}}})),{props:{},style:{[`&.${t.disabled}`]:{color:(r.vars||r).palette.text.disabled},[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}}}]}))),N=f("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(r,e)=>e.asterisk})(b(({theme:r})=>({[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}}))),V=v.forwardRef(function(e,i){const s=R({props:e,name:"MuiFormLabel"}),{children:c,className:a,color:n,component:l="label",disabled:p,error:A,filled:E,focused:P,required:w,...y}=s,F=g(),o=k({props:s,muiFormControl:F,states:["color","required","focused","disabled","error","filled"]}),d={...s,color:o.color||"primary",component:l,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required},u=S(d);return m.jsxs(U,{as:l,ownerState:d,className:x(u.root,a),ref:i,...y,children:[c,o.required&&m.jsxs(N,{ownerState:d,"aria-hidden":!0,className:u.asterisk,children:[" ","*"]})]})});export{V as F,t as f};