import{r as c,u as f,j as e,s as d,h as H}from"./app-BEIpjE_9.js";import{C as I}from"./Close-DYoWNWMW.js";import{g}from"./literacy-test-thunk-BLGR5bIY.js";import{b as w,a as F}from"./schedule-thunk-C4ZoRPmw.js";import{B as v}from"./Button-BZ1BSryQ.js";import{D as E}from"./Dialog-Cmx5nYgu.js";import{T as o}from"./Toolbar-XsfxziAn.js";import{T as b}from"./Typography-DUWTPUtG.js";import{I as N}from"./IconButton-9cJKcSMG.js";import{T as A,I as p,S as u}from"./TextField-CkGphgMt.js";import{L as B,A as W,D as J,a as M}from"./DateTimeRangePicker-Cs60RKW2.js";import{F as h}from"./FormControl-VuFYG85F.js";import{M as s}from"./MenuItem-Ctn1UWgj.js";import"./createSvgIcon-BFeEZG0o.js";import"./identifier-DC8dQNi0.js";import"./DefaultPropsProvider-DDczCt9-.js";import"./examinations-service-CW6kY7d2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CMaWoWiJ.js";import"./useTheme-OzOyauU5.js";import"./useTheme-D3VjtuXy.js";import"./Modal-Bn7jlowl.js";import"./ownerWindow-CO8Ksk3k.js";import"./resolveComponentProps-TIeonBS9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlot-Bh71XdiA.js";import"./utils-DEtj5R2D.js";import"./Paper-DNXi3EKG.js";import"./useId-Bv66lcxb.js";import"./index-CfQ8uIOv.js";import"./extendSxProp-CAVQEEUm.js";import"./utils-CeLxCNIY.js";import"./FormLabel-BJ1ZL7JW.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-CXNu4jGY.js";import"./Popover-AePsHPTf.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./Grow-1xoy9Jwv.js";import"./useSlotProps-CVSHEPsx.js";import"./useControlled-73z9dQZ-.js";import"./InputBase-JpSOrCZu.js";import"./Stack-B2KerS7W.js";import"./listItemIconClasses-BkTFIRTK.js";import"./isMuiElement-CxafOkj8.js";import"./index-qhXkEDFu.js";import"./DialogContent-Bz6IT8a6.js";function Ee(){const[_,x]=c.useState(!1),[a,n]=c.useState({}),[l,C]=c.useState({}),[T,r]=c.useState(!1),{teachers:k}=f(t=>t.teachers),{learning_centers:y}=f(t=>t.learning_centers),{booklets:m}=f(t=>t.booklets);console.log("booklets",m);const S=()=>{x(!0)},j=()=>{x(!1)};async function L(t){try{r(!0);const i=await d.dispatch(w({unique_id:H().format("MMDDYYYYHHmmss"),...a}));i.status==200?(await d.dispatch(F()),r(!1),x(!1)):(r(!1),C(i.response.data.errors))}catch{r(!1)}}async function D(t){r(!0),t.target.value=="Elementary Level"?await d.dispatch(g("Elementary")):t.target.value=="Junior High Level"&&await d.dispatch(g("Junior High School")),n({...a,[t.target.name]:t.target.value}),r(!1)}return e.jsxs(c.Fragment,{children:[e.jsx(v,{variant:"outlined",onClick:S,children:"Create Schedule"}),e.jsxs(E,{fullWidth:!0,open:_,onClose:j,children:[e.jsxs(o,{className:"flex items-center justify-end",children:[e.jsx(b,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Create Schedule"}),e.jsx(N,{edge:"start",color:"inherit",onClick:j,"aria-label":"close",children:e.jsx(I,{})})]}),e.jsx(o,{className:"flex-col gap-3 flex w-full",children:e.jsx(A,{onChange:t=>n({...a,[t.target.name]:t.target.value}),error:!!(l!=null&&l.title),helperText:(l==null?void 0:l.title)??"",name:"title",type:"text",id:"outlined-basic",label:"Title",variant:"outlined",className:"w-full"})}),e.jsx("div",{className:"px-6",children:e.jsx(B,{dateAdapter:W,children:e.jsx(J,{components:["DateTimeRangePicker"],children:e.jsx(M,{localeText:{start:"Start-At",end:"End-At"},onChange:t=>{n({...a,start_at:t[0].$d??"",end_at:t[1].$d??""})}})})})}),e.jsx(o,{className:"flex-col gap-3 flex w-full py-4",children:e.jsxs(h,{fullWidth:!0,error:!!(l!=null&&l.teacher_id),children:[e.jsx(p,{id:"demo-simple-select-label",children:"Teacher"}),e.jsxs(u,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"teacher_id",label:"Teacher",onChange:t=>n({...a,[t.target.name]:t.target.value}),value:a.teacher_id??"",children:[e.jsx(s,{selected:!0,disabled:!0}),k.data.map((t,i)=>e.jsx(s,{value:t.id,children:t.name},i))]}),(l==null?void 0:l.specification)&&e.jsx(FormHelperText,{children:l.specification})]})}),e.jsx(o,{className:"flex-col gap-3 flex w-full ",children:e.jsxs(h,{fullWidth:!0,error:!!(l!=null&&l.learning_center),children:[e.jsx(p,{id:"demo-simple-select-label",children:"Community Center"}),e.jsxs(u,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"learning_center",label:"Community Center",onChange:t=>n({...a,[t.target.name]:t.target.value}),value:a.learning_center??"",children:[e.jsx(s,{selected:!0,disabled:!0}),y.map((t,i)=>e.jsx(s,{value:t.id,children:t.name},i))]}),(l==null?void 0:l.specification)&&e.jsx(FormHelperText,{children:l.specification})]})}),e.jsx(o,{className:"flex-col gap-3 flex w-full mt-2",children:e.jsxs(h,{fullWidth:!0,error:!!(l!=null&&l.als_level),children:[e.jsx(p,{id:"demo-simple-select-label",children:"ALS Level"}),e.jsxs(u,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"als_level",label:"ALS Level",onChange:t=>D(t),value:a.als_level??"",children:[e.jsx(s,{selected:!0,disabled:!0}),e.jsx(s,{value:"Elementary Level",children:"Elementary Level"}),e.jsx(s,{value:"Junior High Level",children:"Junior High Level"})]}),(l==null?void 0:l.specification)&&e.jsx(FormHelperText,{children:l.specification})]})}),e.jsx(o,{className:"flex-col gap-3 flex w-full mt-2",children:e.jsxs(h,{fullWidth:!0,error:!!(l!=null&&l.booklet_id),children:[e.jsx(p,{id:"demo-simple-select-label",children:"Booklets"}),e.jsx(u,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"booklet_id",label:"Booklets",onChange:t=>n({...a,[t.target.name]:t.target.value}),value:a.booklet_id??"",children:m==null?void 0:m.map((t,i)=>e.jsx(s,{value:t.id,children:t.title},i))}),(l==null?void 0:l.specification)&&e.jsx(FormHelperText,{children:l.specification})]})}),e.jsxs(o,{children:[e.jsx(b,{sx:{ml:2,flex:1},variant:"h6",component:"div"}),e.jsx(v,{disabled:T,variant:"contained",autoFocus:!0,onClick:L,children:"save"})]})]})]})}export{Ee as default};