import{u as d,j as e,h as a}from"./app-BEIpjE_9.js";import p from"./delete-examiner-section-tyNGhWTP.js";import{T as x,a as h,b as j,c as m,d as r,e as b}from"./TableRow-Daty9zpx.js";import{P as f}from"./Paper-DNXi3EKG.js";import"./schedule-thunk-C4ZoRPmw.js";import"./Button-BZ1BSryQ.js";import"./identifier-DC8dQNi0.js";import"./DefaultPropsProvider-DDczCt9-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CMaWoWiJ.js";import"./Delete-BZMqToER.js";import"./createSvgIcon-BFeEZG0o.js";import"./Modal-Bn7jlowl.js";import"./ownerWindow-CO8Ksk3k.js";import"./resolveComponentProps-TIeonBS9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlot-Bh71XdiA.js";import"./useTheme-OzOyauU5.js";import"./useTheme-D3VjtuXy.js";import"./utils-DEtj5R2D.js";import"./Box-CPI8PZ7b.js";import"./extendSxProp-CAVQEEUm.js";import"./Typography-DUWTPUtG.js";import"./index-CfQ8uIOv.js";import"./CircularProgress-DkIW9Ad-.js";function F(){const{examiners:o}=d(i=>i.schedule);return console.log("examiners",o),e.jsx(x,{component:f,children:e.jsxs(h,{sx:{minWidth:650},"aria-label":"simple table",children:[e.jsx(j,{children:e.jsxs(m,{children:[e.jsx(r,{children:"Reference Test ID"}),e.jsx(r,{children:"Examiner"}),e.jsx(r,{children:"Mobile"}),e.jsx(r,{children:"Learning Center"}),e.jsx(r,{children:"Action"})]})}),e.jsx(b,{children:o&&(o==null?void 0:o.map((i,s)=>{var t,l,n;const c=a(i.dob,"YYYY-MM-DD");return a().diff(c,"years"),e.jsxs(m,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{children:i.reference_id}),e.jsx(r,{children:i.user.name}),e.jsx(r,{children:((t=i==null?void 0:i.user)==null?void 0:t.mobile)??""}),e.jsx(r,{children:((n=(l=i==null?void 0:i.schedule)==null?void 0:l.learning_center)==null?void 0:n.name)??""}),e.jsx(r,{children:e.jsx("div",{className:"flex gap-2",children:e.jsx(p,{data:i})})})]},s)}))})]})})}export{F as default};