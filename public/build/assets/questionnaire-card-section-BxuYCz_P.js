import{u as p,r as _,j as t,s as g,h as k}from"./app-BEIpjE_9.js";import{s as N}from"./students-thunk-Bv2BuY29.js";import{g as y}from"./app-thunk-DiqwsZLn.js";import{C as A,a as D}from"./CardContent-DTM4_fny.js";import{T as I}from"./Typography-DUWTPUtG.js";import{C as c,a as B}from"./CardMedia-DJ3qy8q7.js";import{F as q}from"./FormControl-VuFYG85F.js";import{R as L,F as d,a as s}from"./RadioGroup-CpMwDbNl.js";import{B as R}from"./Button-BZ1BSryQ.js";import"./identifier-DC8dQNi0.js";import"./DefaultPropsProvider-DDczCt9-.js";import"./Paper-DNXi3EKG.js";import"./useTheme-OzOyauU5.js";import"./useTheme-D3VjtuXy.js";import"./index-CfQ8uIOv.js";import"./ButtonBase-CMaWoWiJ.js";import"./extendSxProp-CAVQEEUm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-CeLxCNIY.js";import"./isMuiElement-CxafOkj8.js";import"./useSlot-Bh71XdiA.js";import"./resolveComponentProps-TIeonBS9.js";import"./SwitchBase-bfiCi004.js";import"./useControlled-73z9dQZ-.js";import"./createSvgIcon-BFeEZG0o.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-Bv66lcxb.js";function me(){var u;p(a=>a.questionnaires);const{booklet:h}=p(a=>a.booklets),{user:l}=p(a=>a.app),[x,j]=_.useState([]),v=window.location.pathname.split("/")[3],b=({htmlContent:a})=>t.jsx("div",{dangerouslySetInnerHTML:{__html:a}}),C=(a,n)=>{j(e=>{const r=e.answers||[],i=r.findIndex(o=>o.questionnaire_id===a.id);let m;return i!==-1?m=r.map((o,w)=>w===i?{...o,answer:n,isCorrect:a.answer_key===n}:o):m=[...r,{questionnaire_id:a.id,answer:n,isCorrect:a.answer_key===n}],{...e,answers:m}})};console.log(x);function f(a){g.dispatch(N({...x,user:l,date:k().format("LLLL"),als_level:h.als_level,booklet_id:v})),g.dispatch(y())}return console.log("data",h.als_level),t.jsxs("div",{className:"flex flex-col gap-5",children:[(u=h.examinations)==null?void 0:u.map((a,n)=>t.jsxs(A,{sx:{minWidth:275},children:[t.jsx(D,{children:t.jsx(I,{variant:"body2",children:t.jsxs("div",{className:"flex gap-2 flex-col",children:[t.jsx("div",{className:"text-2xl font-black",children:a.title}),t.jsx("div",{className:"text-xl",children:a.sub_title})]})})}),a.question.map((e,r)=>{var m;let i={};return(m=l==null?void 0:l.score_sheet)!=null&&m.answers&&e.id&&(i=l.score_sheet.answers.find(o=>o.questionnaire_id===e.id)),t.jsxs("div",{className:"px-3",children:[t.jsxs("div",{className:"flex gap-3",children:[t.jsxs("div",{children:[e.item_number,"."]}),t.jsx("div",{className:"-mt-4",children:t.jsx(b,{htmlContent:e.question})})]}),e.image_header&&t.jsx(c,{component:"img",height:"200",image:e.image_header,alt:"Question header image"}),t.jsx(B,{children:t.jsx("div",{className:"flex items-start justify-start w-full px-3",children:t.jsx(q,{children:t.jsxs(L,{onChange:o=>C(e,o.target.value),row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"answer_key",children:[t.jsx(d,{value:"A",control:t.jsx(s,{}),label:"A",checked:(i==null?void 0:i.answer)=="A"?!0:void 0,disabled:(i==null?void 0:i.answer)=="A"})," ",t.jsxs("div",{className:"w-1/5",children:[(e==null?void 0:e.image_header)&&t.jsx(c,{component:"img",height:"full",width:"25",image:e==null?void 0:e.image_a,alt:"Your Image Description"}),e.a]}),t.jsx(d,{value:"B",control:t.jsx(s,{}),label:"B",checked:(i==null?void 0:i.answer)=="B"?!0:void 0,disabled:(i==null?void 0:i.answer)=="B"}),t.jsxs("div",{className:"w-1/5",children:[(e==null?void 0:e.image_header)&&t.jsx(c,{component:"img",height:"full",width:"25",image:e==null?void 0:e.image_b,alt:"Your Image Description"}),e.b]}),t.jsx(d,{value:"C",control:t.jsx(s,{}),label:"C",checked:(i==null?void 0:i.answer)=="C"?!0:void 0,disabled:(i==null?void 0:i.answer)=="C"}),t.jsxs("div",{className:"w-1/5",children:[(e==null?void 0:e.image_header)&&t.jsx(c,{component:"img",height:"full",width:"25",image:e==null?void 0:e.image_c,alt:"Your Image Description"}),e.c]}),t.jsx(d,{value:"D",control:t.jsx(s,{}),label:"D",checked:(i==null?void 0:i.answer)=="D"?!0:void 0,disabled:(i==null?void 0:i.answer)=="D"}),t.jsxs("div",{className:"w-1/5",children:[(e==null?void 0:e.image_header)&&t.jsx(c,{component:"img",height:"full",width:"25",image:e==null?void 0:e.image_d,alt:"Your Image Description"}),e.d]})]})})})})]},r)})]},n)),!l.score_sheet&&t.jsx(R,{onClick:f,variant:"contained",children:"SUBMIT ANSWER"})]})}export{me as default};