import{r as l,j as d}from"./app-BEIpjE_9.js";import{g as C,a as p,c as u}from"./identifier-DC8dQNi0.js";import{s as m,u as f,c as v}from"./DefaultPropsProvider-DDczCt9-.js";import{P as R}from"./Paper-DNXi3EKG.js";function M(s){return C("MuiCard",s)}p("MuiCard",["root"]);const g=s=>{const{classes:o}=s;return v({root:["root"]},M,o)},x=m(R,{name:"MuiCard",slot:"Root",overridesResolver:(s,o)=>o.root})({overflow:"hidden"}),E=l.forwardRef(function(o,t){const r=f({props:o,name:"MuiCard"}),{className:n,raised:e=!1,...i}=r,a={...r,raised:e},c=g(a);return d.jsx(x,{className:u(c.root,n),elevation:e?8:void 0,ref:t,ownerState:a,...i})});function y(s){return C("MuiCardContent",s)}p("MuiCardContent",["root"]);const U=s=>{const{classes:o}=s;return v({root:["root"]},y,o)},w=m("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(s,o)=>o.root})({padding:16,"&:last-child":{paddingBottom:24}}),S=l.forwardRef(function(o,t){const r=f({props:o,name:"MuiCardContent"}),{className:n,component:e="div",...i}=r,a={...r,component:e},c=U(a);return d.jsx(w,{as:e,className:u(c.root,n),ownerState:a,ref:t,...i})});export{E as C,S as a};